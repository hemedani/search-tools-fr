import React from "react";
import { SearchPage, subItem, PageType } from "../../App";

import JsonData from "../../data/db.json";

export interface MenuProps {
  onPageTypeChange: (pageType: PageType) => void;
  onChangeSearchItem: (searchItem: SearchPage) => void;
}
// export interface db {
//   icon: string;
//   title: string;
//   items: {
//     id: string;
//     title: string;
//     subItem: subItem[];
//   }[];
// }

// const myDb: db = JsonData;

const Menu: React.SFC<MenuProps> = ({ onPageTypeChange, onChangeSearchItem }) => {
  return (
    <div className="menu-side">
      <p>menu</p>
      <div className="title-menu">{JsonData.title}</div>
      {JsonData.items.map(item => (
        <div className="section-menu" key={item.id}>
          <span>{item.title}</span>
          {item.subItem.map(sub => (
            <div
              className="subitem-menu"
              key={sub.id}
              onClick={() => {
                if (sub.pageType === "SearchPage") {
                  onChangeSearchItem(sub as SearchPage);
                }
                onPageTypeChange(sub.pageType as PageType);
              }}
            >
              {sub.title} {sub.pageType}
            </div>
          ))}
        </div>
      ))}
      <br />
      <br />
    </div>
  );
};

export default Menu;
