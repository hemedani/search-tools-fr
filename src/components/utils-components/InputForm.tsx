import React from "react";
import { InjectedFormikProps, withFormik } from "formik";

export interface Props {
  submitUrl: { [key: string]: string };
  inputItems: { id: string; type: string; name: string }[];
  urlSecondItem: string;
  submitValue: string;
  setValue?: string;
}

export interface initialValues {
  [key: string]: string;
}

// const InputForm = ({ submitUrl, inputItems, urlSecondItem, submitValue }: Props) => {
//   const initialValues: initialValues = inputItems.reduce((a: initialValues, c) => {
//     a[c.name] = "";
//     return a;
//   }, {});
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={values => {
//         let url = "";
//         const arrVal = Object.keys(values);
//         arrVal.map((key, i) => {
//           url = url + submitUrl[key] + values[key];
//           if (arrVal.length - 1 === i) {
//             url = url + submitUrl.EndPoint;
//           }
//         });
//         window.open(url, urlSecondItem);
//       }}
//     >
//       {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//         <form className="input-form" onSubmit={handleSubmit}>
//           {inputItems.map(inp => (
//             <input
//               className="input-text"
//               key={inp.id}
//               type={inp.type}
//               name={inp.name}
//               placeholder={inp.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values[inp.name]}
//             />
//             // {errors.inp.email && touched.email && errors.email}
//           ))}
//           <button type="submit" className="sbmt-btn inp-btn i-rod">
//             {submitValue}
//           </button>
//         </form>
//       )}
//     </Formik>
//   );
// };

class InputForm extends React.PureComponent<InjectedFormikProps<Props, initialValues>> {
  constructor(props: InjectedFormikProps<Props, initialValues>) {
    super(props);
  }
  componentDidUpdate(prevProps: InjectedFormikProps<Props, initialValues>) {
    if (this.props.setValue !== prevProps.setValue) {
      const arrVal = Object.keys(this.props.values);
      this.props.setFieldValue(arrVal[0], this.props.setValue);
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
      setValue
    } = this.props;
    return (
      <form className="input-form" onSubmit={handleSubmit}>
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
          />
          // {errors.inp.email && touched.email && errors.email}
        ))}
        <button type="submit" className="sbmt-btn inp-btn i-rod">
          {submitValue}
        </button>
      </form>
    );
  }
}

// const InputForm: React.SFC<InjectedFormikProps<Props, initialValues>> = props => {
//   const {
//     values,
//     touched,
//     errors,
//     isSubmitting,
//     setFieldValue,
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     inputItems,
//     submitValue,
//     setValue
//   } = props;
//   const _handleSelect = () => {
//     try {
//       setFieldValue(values[0], setValue);
//     } catch (error) {
//       // tslint:disable-next-line:no-console
//       console.error(error);
//     }
//   };
//   return (
//     <form className="input-form" onSubmit={handleSubmit}>
//       {inputItems.map(inp => (
//         <input
//           className="input-text"
//           key={inp.id}
//           type={inp.type}
//           name={inp.name}
//           placeholder={inp.name}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values[inp.name]}
//         />
//         // {errors.inp.email && touched.email && errors.email}
//       ))}
//       <button type="submit" className="sbmt-btn inp-btn i-rod">
//         {submitValue}
//       </button>
//     </form>
//   );
// };

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
      if (arrVal.length - 1 === i) {
        url = url + Props.submitUrl.EndPoint;
      }
    });
    window.open(url, Props.urlSecondItem);
  }
})(InputForm);
