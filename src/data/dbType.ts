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
  "FTP Servers"?: string;
  "Index Of"?: string;
  Scholar?: string;
  Patents?: string;
  News?: string;
  Disqus?: string;
  Newspapers?: string;
  Wayback?: string;
  Qwant?: string;
  Ahmia?: string;
  "Onion Cab"?: string;
  "Not Evil"?: string;
  Torch?: string;
  "Search Newspaper"?: string;
  "Newspaper Archive"?: string;
  "Newspaper Collection"?: string;
  Visitor?: string;
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
  DomainData?: string;
  SecurityTrails?: string;
  AnalyzeID?: string;
  Gravatar?: string;
  GoogleCal?: string;
  "Find User Number"?: string;
  "Live Profile"?: string;
  "Historic Views"?: string;
  "IG Tweets"?: string;
  "IG Mentions"?: string;
  "Text Search"?: string;
  "Title Search"?: string;
  "User Search"?: string;
  "User Archive I"?: string;
  "User Archive II"?: string;
  "User Analytics"?: string;
  "User Cache"?: string;
  "Pushshift Cache"?: string;
  "Domain Search"?: string;
  "Subreddit Search"?: string;
  "Imgur Search"?: string;
  "Karma Image"?: string;
  "NSFW Image"?: string;
  "Google Search"?: string;
  "User Posts"?: string;
  "User Comments"?: string;
  "User Favs"?: string;
  "Domain Name"?: string;
  "Subverse Search"?: string;
  "Subverse Match"?: string;
  "Archive Search"?: string;
  "Plebs Archive"?: string;
  Hubski?: string;
  Steemit?: string;
  Raddle?: string;
  number?: string;
  Street?: string;
  City?: string;
  State?: string;
  Zip?: string;
  Latitude?: string;
  Longitude?: string;
  Latitude2?: string;
  Longitude2?: string;
  Jasjoo?: string;
  parseek?: string;
  rismoon?: string;
  parsijoo?: string;
  "Google Persian"?: string;
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
