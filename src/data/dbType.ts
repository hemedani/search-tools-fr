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
  submitUrl?: SubmitUrl;
  urlSecondItem?: string;
  submitValue?: string;
  itemType: string;
  onSubmit?: string;
  inSection?: string;
  isSubmitAll?: boolean;
  description?: string;
  breaking?: boolean;
  name?: string;
  url?: string;
  target?: string;
}

export interface SubmitUrl {
  Google?: string;
  EndPoint: string;
  "Google Date"?: string;
  Bing?: string;
  Yahoo?: string;
  Searx?: string;
  Yandex?: string;
  Baidu?: string;
  Exalead?: string;
  "Duck Go"?: string;
  StartPage?: string;
  Newsgroups?: string;
  Blogs?: string;
  "Search Newspaper"?: string;
  "Newspaper Archive"?: string;
  "Newspaper Collection"?: string;
  "Not Evil"?: string;
  Visitor?: string;
  Torch?: string;
  BreachesLeaks?: string;
  Pastes?: string;
  PSBDMP?: string;
  Verifier?: string;
  Dehashed?: string;
  IntelX?: string;
  HunterVerify?: string;
  LinkedIn?: string;
  Pipl?: string;
  ThatsThem?: string;
  SpyTox?: string;
  OCCRP?: string;
  "FTP Servers"?: string;
  DomainData?: string;
  SecurityTrails?: string;
  AnalyzeID?: string;
  Gravatar?: string;
  GoogleCal?: string;
  "Find User Number"?: string;
  number?: string;
  Street?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Latitude?: string;
  Longitude?: string;
}

export interface InputItem {
  id: string;
  name: string;
  type: string;
  isPapulate: boolean;
  size?: string;
}

export interface PapulateItem {
  papulate?: string;
  number?: string;
  Street?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Latitude?: string;
  Longitude?: string;
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
  submitUrl: { [key: string]: string };
  urlSecondItem: string;
  submitValue: string;
  itemType: TItemType;
  onSubmit: string;
  inSection: string;
  isSubmitAll: boolean;
  description?: string;
  breaking?: boolean;
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
}

export type TItem = ISearchItem | IResourceItem;

export type TPageItem = ISearchPage | IResourcePage;

export type TPageType = "Welcome" | "SearchPage" | "ResourcePage";

export type TItemType = "link" | "input" | "welcome";
