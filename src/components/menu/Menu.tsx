import React from "react";
import cn from "classnames";
import { TPageItem } from "../../data/dbType";

import JsonData from "../../data/db.json";
import { DB } from "../../data/dbType";

export interface MenuProps {
  onChangeItem: (searchItem: TPageItem) => void;
  pageId: string;
}

export interface MenuState {
  showCollaps: string;
  pageId: string;
}

class Menu extends React.PureComponent<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = {
      showCollaps: "",
      pageId: ""
    };
    this.toggleCollaps = this.toggleCollaps.bind(this);
  }
  toggleCollaps(id: string) {
    this.state.showCollaps === id ? this.setState({ showCollaps: "" }) : this.setState({ showCollaps: id });
  }
  setPage(id: string) {
    this.state.showCollaps === id ? this.setState({ showCollaps: "" }) : this.setState({ showCollaps: id });
  }
  render() {
    return (
      <div className="menu-side-wrapper">
        {JsonData.map((dbs: DB) => (
          <div key={dbs.id} className="menu-side">
            <div className="title-menu">{dbs.title} : </div>
            {dbs.items.map(item => (
              <div className="section-menu" key={item.id}>
                <div className="menu-title" onClick={() => this.toggleCollaps(item.id)}>
                  <span>
                    <i className={`ion ion-${item.icon}`} />
                    {item.title} :
                  </span>
                  <i
                    className={this.state.showCollaps === item.id ? "ion ion-ios-arrow-down" : "ion ion-ios-arrow-forward"}
                  />
                </div>
                <div className="subitems-menu">
                  {item.subItem.map(sub => (
                    <div
                      className={cn("subitem-menu", { "is-show": this.state.showCollaps === item.id })}
                      key={sub.id}
                      onClick={() => {
                        this.props.onChangeItem(sub as TPageItem);
                      }}
                    >
                      <span className={cn({ "active-page": this.props.pageId === sub.id })}>{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
