import React from "react";
import { InjectedFormikProps, withFormik } from "formik";
import cn from "classnames";
import { ISearchItem, PapulateItem } from "../../data/dbType";
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
              placeholder={inp.name}
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
            {description && <p>{description}</p>}
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
    // Props.submitHandler(values);
    let url = "";
    const arrVal = Object.keys(values);
    arrVal.map((key, i) => {
      url = url + Props.submitUrl[key] + values[key];
      if (!Props.dual && arrVal.length - 1 === i) {
        url = url + Props.submitUrl.EndPoint;
      }
    });
    if (Props.dual) {
      arrVal.map((key, i) => {
        url = url + Props.submitUrl[key + "2"] + values[key];
        if (Props.dual && arrVal.length - 1 === i) {
          url = url + Props.submitUrl.EndPoint;
        }
      });
    }
    if (Props.onSubmit === "submitUrl") {
      window.open(url, Props.urlSecondItem);
    }
    if (Props.onSubmit === "setSomeState") {
      Axios.get(url).then(resp => console.log(resp.data));
    }
    return;
  }
})(InputForm);
