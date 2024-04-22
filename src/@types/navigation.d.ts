export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      home: undefinede;
      statistics: undefined;
      new: undefined;
      edit: {
        id: string;
      };
      feedback: {
        withinTheDiet: boolean;
      };
      snackDetails: {
        id: string;
      };
    }
  }
}
