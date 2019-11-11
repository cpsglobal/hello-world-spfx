declare interface IHelloWorldWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  TitleFieldLabel: string;
  SubTitleFieldLabel: string;
  DescriptionFieldLabel: string;
  ButtonTextFieldLabel: string;
  ButtonTargetFieldLabel: string;
}

declare module 'HelloWorldWebPartStrings' {
  const strings: IHelloWorldWebPartStrings;
  export = strings;
}
