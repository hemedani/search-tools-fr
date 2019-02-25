import React from "react";

import { TItem, ISearchItem, IResourceItem, PapulateItem, Item } from "../../data/dbType";
import InputForm from "../utils-components/InputForm";
import PostFormAction from "./PostFormAction";

export interface IRenderItemProps {
  item: TItem;
  setValue: PapulateItem;
  sectionTitle: string;
  submitAll: boolean;
}

const RenderItem = (item: TItem, setValue: PapulateItem, sectionTitle: string, submitAll: boolean) => {
  if (item.itemType === "input") {
    item = item as ISearchItem;
    return <InputForm {...item} submitAll={submitAll} setValue={setValue} sectionTitle={sectionTitle} />;
  } else if (item.itemType === "link") {
    item = item as IResourceItem;
    return (
      <div>
        {item.lead && <div className="inp-lead">{item.lead}</div>}
        <a href={item.url} target={item.target} className="resource-link">
          {item.name}
        </a>
      </div>
    );
  } else if (item.itemType === "Image") {
    item = item as Item;
    return (
      <div className="item-image-wrapper" key={item.id}>
        <img src={item.src} alt={item.alt} />
      </div>
    );
  } else if (item.itemType === "welcome") {
    return (
      <div className="welcome-page-item">
        <h1>Please select one of the menu items to began investigate</h1>
      </div>
    );
  } else if (item.itemType === "httpAction") {
    item = item as Item;
    return <PostFormAction item={item} />;
  } else {
    return null;
  }
};

export default ({ item, setValue, sectionTitle, submitAll }: IRenderItemProps) => (
  <div className="each-item">{RenderItem(item, setValue, sectionTitle, submitAll)}</div>
);
