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
  "Not Evil"?: string;
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
}

export interface InputItem {
  id: string;
  name: string;
  type: string;
}
