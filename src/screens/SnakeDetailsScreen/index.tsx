import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { Alert, Modal } from "react-native";

import { ButtonComponent } from "@/components/ButtonComponent";
import { HeaderBackIconComponent } from "@/components/HeaderBackIconComponent";
import { LoadingComponent } from "@/components/LoadingComponent";
import { SnackModel } from "@/models/snack.model";
import { deleteSnack, getSnack } from "@/services/snakeService";

import {
  Badge,
  BadgeText,
  ButtonView,
  CircleIcon,
  Container,
  Description,
  ModalButton,
  ModalButtonText,
  ModalContent,
  ModalFooter,
  ModalView,
  SubTitle,
  Title,
} from "./styles";

type RouteParams = {
  id: string;
};

export function SnakeDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParams;

  const [snack, setSnack] = useState<SnackModel | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  function handleDeleteSnackOpenModal() {
    setShowModalDelete((value) => !value);
  }

  function handleDeleteSnack() {
    deleteSnack(id)
      .then(() => {
        setSnack(null);
        navigation.navigate("home");
      })
      .catch(() => {
        Alert.alert("Deletar refeição", "Erro ao deletar refeição");
      });
  }

  function handleEditSnack() {
    navigation.navigate("edit", { id });
  }

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getSnack(id)
        .then((result) => {
          setSnack(result);
        })
        .catch(() => {
          navigation.navigate("home");
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

  return (
    <>
      <Modal visible={showModalDelete} transparent={true} animationType="fade">
        <ModalView>
          <ModalContent>
            <SubTitle>
              Deseja realmente excluir o registro da refeição?
            </SubTitle>
            <ModalFooter>
              <ModalButton type={"SECONDARY"}>
                <ModalButtonText
                  type={"SECONDARY"}
                  onPress={handleDeleteSnackOpenModal}
                >
                  Cancelar
                </ModalButtonText>
              </ModalButton>
              <ModalButton type={"PRIMARY"} onPress={handleDeleteSnack}>
                <ModalButtonText type={"PRIMARY"}>Sim, excluir</ModalButtonText>
              </ModalButton>
            </ModalFooter>
          </ModalContent>
        </ModalView>
      </Modal>
      {snack && !loading ? (
        <>
          <HeaderBackIconComponent
            title={"Refeição"}
            backgroundColor={snack?.withinTheDiet ? "GREEN" : "RED"}
          />

          <Container>
            <Title>{snack.name}</Title>
            <Description>{snack.description}</Description>
            <SubTitle>Data e hora</SubTitle>
            <Description>
              {format(snack.time, "dd/MM/yyyy 'às' HH:mm")}
            </Description>
            {snack.withinTheDiet ? (
              <Badge>
                <CircleIcon type={"GREEN"} />
                <BadgeText>dentro da dieta</BadgeText>
              </Badge>
            ) : (
              <Badge>
                <CircleIcon type={"RED"} />
                <BadgeText>fora da dieta</BadgeText>
              </Badge>
            )}

            <ButtonView>
              <ButtonComponent
                text={"Editar refeição"}
                icon={"edit"}
                onPress={handleEditSnack}
              />
              <ButtonComponent
                text={"Excluir refeição"}
                type={"SECONDARY"}
                icon={"delete-forever"}
                onPress={handleDeleteSnackOpenModal}
              />
            </ButtonView>
          </Container>
        </>
      ) : (
        <>
          <HeaderBackIconComponent title={"Refeição"} />
          <Container>
            <LoadingComponent />
          </Container>
        </>
      )}
    </>
  );
}
