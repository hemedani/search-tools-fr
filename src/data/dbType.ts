export interface DB {
  id: string;
  icon: string;
  title: string;
  items: Item2[];
}

export interface Item2 {
  id: string;
  title: string;
  icon: string;
  subItem: SubItem[];
}

export interface SubItem {
  id: string;
  title: string;
  pageType: string;
  section: Section[];
}

export interface Section {
  id: string;
  title: string;
  hasPapulate: boolean;
  papulateItem?: PapulateItem;
  items: Item[];
}

export interface Item {
  id: string;
  inputItems?: InputItem[];
  submitUrl?: SubmitUrl[];
  urlSecondItem?: string;
  submitValue?: string;
  itemType: string;
  onSubmit?: string;
  inSection?: string;
  isSubmitAll?: boolean;
  breaking?: boolean;
  description?: string;
  name?: string;
  url?: string;
  target?: string;
  lead?: string;
  dual?: boolean;
  src?: string;
  alt?: string;
  method?: string;
}

export interface SubmitUrl {
  url: string;
  urlSecondItem: string;
  setTimeOutForSub?: boolean;
}

export interface InputItem {
  id: string;
  name: string;
  type: string;
  isPapulate?: boolean;
  placeholder?: string;
  size?: string;
}

export interface PapulateItem {
  papulate?: string;
  "First Name"?: string;
  "Last Name"?: string;
  number?: string;
  Street?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Latitude?: string;
  Longitude?: string;
  "618"?: string;
  "555"?: string;
  "1212"?: string;
}

// MY OWN TYPE

export interface ISubItem {
  id: string;
  title: string;
  pageType: TPageType;
  section: {
    id: string;
    title: string;
    hasPapulate: boolean;
    items: { id: string; itemType: TItemType }[];
  }[];
}

export interface ISearchPage extends ISubItem {
  section: {
    id: string;
    title: string;
    hasPapulate: boolean;
    items: ISearchItem[];
    papulateItem?: PapulateItem;
  }[];
}

export interface ISearchItem {
  id: string;
  inputItems: InputItem[];
  submitUrl: { [key: string]: string }[];
  submitValue: string;
  httpUrl?: string;
  afterSubmit?: string;
  itemType: TItemType;
  onSubmit: string;
  inSection: string;
  isSubmitAll: boolean;
  description?: string;
  breaking?: boolean;
  dual?: boolean;
  lead?: string;
}

export interface IResourcePage extends ISubItem {
  section: {
    id: string;
    title: string;
    hasPapulate: boolean;
    items: IResourceItem[];
  }[];
}

export interface IResourceItem {
  id: string;
  name: string;
  url: string;
  target: string;
  itemType: TItemType;
  lead?: string;
}

export type TItem = Item | ISearchItem | IResourceItem;

export type TPageItem = ISearchPage | IResourcePage;

export type TPageType = "Welcome" | "SearchPage" | "ResourcePage" | "ImagePage";

export type TItemType = "Image" | "link" | "input" | "welcome";
