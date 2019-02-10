import React from "react";

import { ISubItem, TItem } from "../../App";
import RenderItems from "../utils-components/RenderItems";
import PwdHashing from "../utils-components/PwdHashing";

export interface PagesProps {
  PageItem: ISubItem;
}

class Pages extends React.PureComponent<PagesProps, {}> {
  constructor(props: PagesProps) {
    super(props);
  }

  render() {
    return (
      <div className="panel-side">
        {this.props.PageItem.section.map(section => (
          <div className="section-wrapper" key={section.id}>
            <div className="section-title">{section.title}</div>
            {section.hasPapulate && <div className="papulate-all">papulate all</div>}
            <section>
              {section.items.map(item => (
                <RenderItems key={item.id} item={item as TItem} />
              ))}
            </section>
          </div>
        ))}
        {this.props.PageItem.title === "Email Tool" && <PwdHashing />}
      </div>
    );
  }
}

export default Pages;
