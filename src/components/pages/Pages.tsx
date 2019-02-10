import React from "react";

import { ISubItem, TItem } from "../../App";
import RenderItems from "../utils-components/RenderItems";
import PwdHashing from "../utils-components/PwdHashing";
import PapullateForm from "../utils-components/PapullateForm";

export interface PagesProps {
  PageItem: ISubItem;
}

export interface IPState {
  papullate: string;
}

class Pages extends React.PureComponent<PagesProps, IPState> {
  constructor(props: PagesProps) {
    super(props);
    this.state = {
      papullate: ""
    };
    this.setFormsValue = this.setFormsValue.bind(this);
  }
  setFormsValue(papullate: string) {
    this.setState({ papullate });
  }

  render() {
    return (
      <div className="panel-side">
        {this.props.PageItem.section.map(section => (
          <div className="section-wrapper" key={section.id}>
            <div className="section-title">{section.title}</div>
            <section>
              {section.hasPapulate && (
                <div className="papullate-section">
                  <PapullateForm setFormsValue={this.setFormsValue} />
                  <br />
                  <hr />
                  <br />
                </div>
              )}
              {section.items.map(item => (
                <RenderItems setValue={this.state.papullate} key={item.id} item={item as TItem} />
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
