import { format, lastDayOfMonth } from "date-fns";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

import { CollectionSnakeModel } from "@/models/collection-snake.model";
import { SnackModel } from "@/models/snack.model";
import { converterCollectionToListModel } from "@/models/snack-list.model";
import { UserDataModel } from "@/models/user-data.model";
import { FIREBASE_DB } from "@/services/firebaseConfig";
import { getUser } from "@/services/loginService";

export async function getUserEntry() {
  const user = getUser();
  if (!user) throw new Error("user not found");

  const docRef = doc(FIREBASE_DB, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserDataModel;
  } else {
    await setDoc(doc(FIREBASE_DB, "users", user.uid), {
      metrics: 70,
    });
    return {
      metrics: 70,
    } as UserDataModel;
  }
}

export async function getSnakeCollection() {
  const user = getUser();
  if (!user) throw new Error("user not found");
  const today = new Date();

  const coll = collection(FIREBASE_DB, `users/${user.uid}/snakes`);
  const q = query(
    coll,
    where("date", ">=", new Date(format(today, "yyyy-MM-01"))),
    where("date", "<=", new Date(format(lastDayOfMonth(today), "yyyy-MM-dd"))),
  );
  const querySnapshot = await getDocs(q);

  const collectionSnakeList: CollectionSnakeModel[] = [];

  querySnapshot.forEach((doc) => {
    const collectionSnake: CollectionSnakeModel = {
      id: doc.id,
      data: {
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        withinTheDiet: doc.data().withinTheDiet,
        date: new Date(
          doc.data().date.seconds * 1000 +
            doc.data().date.nanoseconds / 1000000,
        ),
        time: new Date(
          doc.data().time.seconds * 1000 +
            doc.data().time.nanoseconds / 1000000,
        ),
      },
    };
    collectionSnakeList.push(collectionSnake);
  });

  return converterCollectionToListModel(collectionSnakeList);
}

export async function getSnack(id: string) {
  const user = getUser();
  if (!user) throw new Error("user not found");

  const docRef = doc(FIREBASE_DB, `users/${user.uid}/snakes`, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const snack: SnackModel = {
      id,
      name: docSnap.data().name,
      description: docSnap.data().description,
      withinTheDiet: docSnap.data().withinTheDiet,
      time: new Date(
        docSnap.data().time.seconds * 1000 +
          docSnap.data().time.nanoseconds / 1000000,
      ),
      date: new Date(
        docSnap.data().date.seconds * 1000 +
          docSnap.data().date.nanoseconds / 1000000,
      ),
    };
    return snack;
  } else {
    throw new Error("snack not found");
  }
}

export async function updateSnake({
  id,
  name,
  description,
  date,
  time,
  withinTheDiet,
}: SnackModel) {
  const user = getUser();
  if (!user) throw new Error("user not found");

  const docRef = doc(FIREBASE_DB, `users/${user.uid}/snakes`, id);
  console.log(withinTheDiet);
  return updateDoc(docRef, {
    name,
    description,
    date,
    time,
    withinTheDiet,
  });
}

export async function deleteSnack(id: string) {
  const user = getUser();
  if (!user) throw new Error("user not found");

  const docRef = doc(FIREBASE_DB, `users/${user.uid}/snakes`, id);

  return await deleteDoc(docRef);
}

export async function createSnakeCollection({
  name,
  description,
  date,
  time,
  withinTheDiet,
}: SnackModel) {
  const user = getUser();
  if (!user) throw new Error("user not found");

  const userCollection = collection(FIREBASE_DB, `users/${user.uid}/snakes`);
  return await setDoc(doc(userCollection), {
    name,
    description,
    date,
    time,
    withinTheDiet,
  });
}
