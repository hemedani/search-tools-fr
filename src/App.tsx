import React, { PureComponent } from "react";
// import MyRoute from "./components/MyRoute";
import Menu from "./components/menu/Menu";
import SearchPage from "./components/search-page/SearchPage";
import ResourcePage from "./components/resource-page/ResourcePage";
import Welcome from "./components/Welcome";
// import './App.css';

export interface state {
  pageType: PageType;
  searchItem: SearchPage;
}

export interface subItem {
  id: string;
  title: string;
  pageType: PageType;
  section: {
    id: string;
    title: string;
    items: {}[];
  }[];
}

export interface SearchPage extends subItem {
  section: {
    id: string;
    title: string;
    items: {
      id: string;
      inputItems: { id: string; name: string; type: string }[];
      submitUrl: { [key: string]: string };
      urlSecondItem: string;
      submitValue: string;
    }[];
  }[];
}

export interface ResourcePage extends subItem {
  section: {
    id: string;
    title: string;
    items: {}[];
    inputItems: { id: string; name: string; type: string }[];
    submitUrl: string;
  }[];
}

export type PageType = "Welcome" | "SearchPage" | "ResourcePage";

export const defaultSearchItem: SearchPage = {
  id: "",
  title: "",
  pageType: "Welcome",
  section: [
    {
      id: "",
      title: "",
      items: [{ id: "", inputItems: [{ id: "", name: "", type: "" }], submitUrl: {}, urlSecondItem: "", submitValue: "" }]
    }
  ]
};

class App extends PureComponent<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pageType: "Welcome",
      searchItem: defaultSearchItem
    };

    this.onPageTypeChange = this.onPageTypeChange.bind(this);
    this.renderPages = this.renderPages.bind(this);
    this.onChangeSearchItem = this.onChangeSearchItem.bind(this);
  }

  onPageTypeChange(pageType: PageType) {
    this.setState({ pageType });
  }

  onChangeSearchItem(searchItem: SearchPage) {
    this.setState({ searchItem });
  }

  renderPages() {
    if (this.state.pageType === "SearchPage") {
      return <SearchPage searchItem={this.state.searchItem} />;
    } else if (this.state.pageType === "ResourcePage") {
      return <ResourcePage />;
    } else {
      return <Welcome />;
    }
  }
  render() {
    return (
      <div className="wrapper-app">
        <Menu onPageTypeChange={this.onPageTypeChange} onChangeSearchItem={this.onChangeSearchItem} />
        {this.renderPages()}
      </div>
    );
  }
}

export default App;
