import React from "react";

import { TItem, ISearchItem, IResourceItem, PapulateItem } from "../../data/dbType";
import InputForm from "../utils-components/InputForm";

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
      <a href={item.url} target={item.target} className="resource-link">
        {item.name}
      </a>
    );
  }
  if (item.itemType === "welcome") {
    return (
      <div className="welcome-page-item">
        <h1>Please select one of the menu items to began investigate</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default ({ item, setValue, sectionTitle, submitAll }: IRenderItemProps) => (
  <div>{RenderItem(item, setValue, sectionTitle, submitAll)}</div>
);
