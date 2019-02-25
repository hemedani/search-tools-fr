import React from "react";
import { InjectedFormikProps, withFormik } from "formik";
import cn from "classnames";
import { ISearchItem, PapulateItem, Item, SubmitUrl } from "../../data/dbType";
import _ from "lodash";
import Axios from "axios";

export interface Props extends ISearchItem {
  setValue: PapulateItem;
  sectionTitle: string;
  submitAll: boolean;
}

export interface initialValues {
  [key: string]: string;
}
class InputForm extends React.PureComponent<InjectedFormikProps<Props, initialValues>> {
  constructor(props: InjectedFormikProps<Props, initialValues>) {
    super(props);
  }
  componentDidUpdate(prevProps: InjectedFormikProps<Props, initialValues>) {
    if (this.props.setValue !== prevProps.setValue) {
      if (this.props.inSection === this.props.sectionTitle) {
        this.props.inputItems.map(inp => {
          if (this.props.setValue.papulate) {
            if (inp.isPapulate) {
              this.props.setFieldValue(inp.name, this.props.setValue.papulate);
            }
          } else {
            if (inp.isPapulate) {
              this.props.setFieldValue(inp.name, (this.props.setValue as any)[inp.name]);
            }
          }
        });
      }
    }
    if (this.props.submitAll !== prevProps.submitAll) {
      if (this.props.inSection === this.props.sectionTitle && this.props.submitAll && this.props.isSubmitAll) {
        // console.log(this.props.inSection, this.props.sectionTitle, this.props.submitAll);
        this.props.handleSubmit();
      }
    }
  }
  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      setFieldValue,
      handleSubmit,
      handleChange,
      handleBlur,
      inputItems,
      submitValue,
      description,
      breaking,
      lead
    } = this.props;
    return (
      <div className="inp-section-wrapper">
        {lead && <div className="inp-lead">{lead}</div>}
        <form className={cn("input-form", { "break-inp": breaking })} onSubmit={handleSubmit}>
          {inputItems.map(inp => (
            <input
              className="input-text"
              key={inp.id}
              type={inp.type}
              name={inp.name}
              placeholder={inp.placeholder ? inp.placeholder : inp.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[inp.name]}
              style={inp.size ? { width: inp.size + "rem" } : { width: "20rem" }}
            />
            // {errors.inp.email && touched.email && errors.email}
          ))}
          <div className="btn-all-center">
            <button type="submit" className="sbmt-btn inp-btn i-rod last-child">
              {submitValue}
            </button>
            {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
        </form>
      </div>
    );
  }
}

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props: Props) => {
    const initialValues: initialValues = props.inputItems.reduce((a: initialValues, c) => {
      a[c.name] = "";
      return a;
    }, {});
    return initialValues;
  },
  handleSubmit: (values, { props: Props, setSubmitting }) => {
    const { submitUrl } = Props;
    const createUrl = (text: string) => {
      const splitedUrl = text.split("`{");
      let url = splitedUrl[0];
      splitedUrl.map(urls => {
        const key = urls.split("}`");
        if (values[key[0]]) {
          url = url + values[key[0]] + key[1];
        }
      });
      return url;
    };
    const hendleSubmitUrl = (subUrl: initialValues[]) =>
      subUrl.map((sub, i) => {
        const url = createUrl(sub.url);
        if (sub.setTimeOutForSub) {
          setTimeout(() => {
            window.open(url, sub.urlSecondItem);
          }, 1500 * i);
        } else {
          window.open(url, sub.urlSecondItem);
        }
      });

    if (Props.onSubmit === "submitUrl") {
      hendleSubmitUrl(submitUrl);
    }
    if (Props.onSubmit === "httpGet") {
      const url = createUrl(Props.httpUrl as string);
      Axios.get(url).then(resp => {
        let respVal = "";
        if (resp.data.thumbnail_url) {
          respVal = resp.data.thumbnail_url;
        } else if ((Props.description as string).search("Reverse Facebook") >= 0) {
          respVal = encodeURIComponent(resp.data);
        } else {
          respVal = resp.data;
        }
        
        values[Props.inputItems[0].name] = respVal;
        if (Props.afterSubmit === "submitUrl") {
          hendleSubmitUrl(submitUrl);
        }
      });
    }
    return;
  }
})(InputForm);
