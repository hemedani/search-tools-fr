import React from "react";

import { SubItem, TItem, PapulateItem, Item } from "../../data/dbType";
import RenderItems from "../utils-components/RenderItems";
import PwdHashing from "../utils-components/PwdHashing";
import PapullateForm from "../utils-components/PapullateForm";
import YoutubeSearchTxt from "./YoutubeSearchTxt";
import ReverseVideoTxt from "./ReverseVideoTxt";
import PasteSiteSearch from "./PasteSiteSearch";

export interface PagesProps {
  PageItem: SubItem;
}

export interface IPState {
  papullate: TPapulate;
  sectionTitle: string;
  submitAll: boolean;
}

type TPapulate = PapulateItem;

class Pages extends React.PureComponent<PagesProps, IPState> {
  constructor(props: PagesProps) {
    super(props);
    this.state = {
      papullate: { papulate: "" },
      sectionTitle: "",
      submitAll: false
    };
    this.setFormsValue = this.setFormsValue.bind(this);
    this.setSubmitAll = this.setSubmitAll.bind(this);
  }
  componentDidUpdate(prevProps: PagesProps) {
    if (prevProps.PageItem !== this.props.PageItem) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
  setFormsValue(papullate: TPapulate, sectionTitle: string) {
    this.setState({ papullate, sectionTitle });
  }
  setSubmitAll() {
    this.setState({ submitAll: true });
    setTimeout(() => {
      this.setState({ submitAll: false });
    }, 700);
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
                  <PapullateForm
                    setFormsValue={this.setFormsValue}
                    forSection={section.title}
                    papulateItem={section.papulateItem as TPapulate}
                  />
                  {this.state.papullate && this.state.sectionTitle === section.title && (
                    <div className="btn-all-center">
                      <button className="sbmt-btn inp-btn i-rod last-child" onClick={this.setSubmitAll}>
                        Submit All
                      </button>
                      <p>(Allow Pop-ups)</p>
                    </div>
                  )}
                </div>
              )}
              {section.title === "YouTube Search Tool" && <YoutubeSearchTxt />}
              {section.title === "Reverse Video Search Tool" && <ReverseVideoTxt />}
              {section.title === "Paste Site Search Tool" && <PasteSiteSearch />}
              {section.items.map(item => (
                <RenderItems
                  sectionTitle={this.state.sectionTitle}
                  setValue={this.state.papullate}
                  key={item.id}
                  submitAll={this.state.submitAll}
                  item={item as TItem}
                />
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
