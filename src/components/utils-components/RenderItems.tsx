import React from "react";

import { TItem, ISearchItem, IResourceItem } from "../../App";
import InputForm from "../utils-components/InputForm";

export interface IRenderItemProps {
  item: TItem;
  setValue?: string;
}

const RenderItem = (item: TItem, setValue: string | undefined) => {
  if (item.itemType === "input") {
    item = item as ISearchItem;
    return (
      <InputForm
        key={item.id}
        submitUrl={item.submitUrl}
        inputItems={item.inputItems}
        urlSecondItem={item.urlSecondItem}
        submitValue={item.submitValue}
        setValue={setValue}
      />
    );
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

export default ({ item, setValue }: IRenderItemProps) => <div>{RenderItem(item, setValue)}</div>;
