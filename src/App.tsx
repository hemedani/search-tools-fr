import React, { PureComponent } from "react";
// import MyRoute from "./components/MyRoute";
import Menu from "./components/menu/Menu";
import Pages from "./components/pages/Pages";
import ResourcePage from "./components/resource-page/ResourcePage";
import Welcome from "./components/pages/Welcome";
// import './App.css';

export interface IState {
  PageItem: ISubItem;
}

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
  }[];
}

export interface ISearchItem {
  id: string;
  inputItems: { id: string; name: string; type: string }[];
  submitUrl: { [key: string]: string };
  urlSecondItem: string;
  submitValue: string;
  itemType: TItemType;
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

export const defaultSearchItem: ISubItem = {
  id: "",
  title: "Welcome To Search Engine Tools",
  pageType: "Welcome",
  section: [
    {
      id: "",
      title: "Welcome To Search Engine Tools",
      hasPapulate: false,
      items: [{ id: "", itemType: "welcome" }]
    }
  ]
};

class App extends PureComponent<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      PageItem: defaultSearchItem
    };

    // this.renderPages = this.renderPages.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
  }

  onChangeItem(PageItem: TPageItem) {
    this.setState({ PageItem });
  }

  render() {
    return (
      <div className="wrapper-app">
        <Menu onChangeItem={this.onChangeItem} pageId={this.state.PageItem.id} />
        {/* {this.renderPages()} */}
        <Pages PageItem={this.state.PageItem} />
      </div>
    );
  }
}

export default App;
