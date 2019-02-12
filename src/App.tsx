import React, { PureComponent } from "react";
import Menu from "./components/menu/Menu";
import Pages from "./components/pages/Pages";
import { ISearchItem, TItemType, ISubItem, TPageItem } from "./data/dbType";
export interface IState {
  PageItem: ISubItem;
}

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
