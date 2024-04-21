import { compareDesc, isEqual } from "date-fns";

import { CollectionSnakeModel } from "@/models/collection-snake.model";
import { SnackModel } from "@/models/snack.model";

export interface SnackListModel {
  date: Date;
  data: SnackModel[];
}

export function converterCollectionToListModel(
  collectionSnakeList: CollectionSnakeModel[],
) {
  const snackListModel: SnackListModel[] = [];
  collectionSnakeList.forEach((item) => {
    const indexDate = snackListModel.findIndex((snake) =>
      isEqual(snake.date, item.data.date),
    );
    if (indexDate >= 0) {
      snackListModel[indexDate].data.push({
        id: item.data.id,
        name: item.data.name,
        description: item.data.description,
        withinTheDiet: item.data.withinTheDiet,
        date: item.data.date,
        time: item.data.time,
      });
    } else {
      const snakeToCreate: SnackListModel = {
        date: item.data.date,
        data: [
          {
            id: item.data.id,
            name: item.data.name,
            description: item.data.description,
            withinTheDiet: item.data.withinTheDiet,
            date: item.data.date,
            time: item.data.time,
          },
        ],
      };
      snackListModel.push(snakeToCreate);
    }
  });
  return [...snackListModel].sort((a, b) => compareDesc(a.date, b.date));
}
