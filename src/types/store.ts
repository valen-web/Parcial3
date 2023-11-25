export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen : string
};

export enum navigateAction {
  "NAVIGATE" = "NAVIGATE",
}


export type Actions = navigateAction;
