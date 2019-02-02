import React from "react";

import { SearchPage } from "../../App";
import InputForm from "../utils-components/InputForm";

export interface props {
  searchItem: SearchPage;
}

export default ({ searchItem }: props) => (
  <div className="panel-side">
    <p>search page {searchItem.title}</p>
    {searchItem.section.map(section => (
      <div className="section-wrapper" key={section.id}>
        <div className="section-title">{section.title}</div>
        {section.items.map(item => (
          <InputForm
            key={item.id}
            submitUrl={item.submitUrl}
            inputItems={item.inputItems}
            urlSecondItem={item.urlSecondItem}
            submitValue={item.submitValue}
          />
        ))}
      </div>
    ))}
  </div>
);
