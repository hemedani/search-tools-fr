// import React from "react";

// export interface props {
//   onSubmiting: (value: React.FormEvent<HTMLInputElement>) => void;
//   impValue: string;
// }

// export default ({ onSubmiting, impValue }: props) => {
//   // const submitValue = (impValue: React.FormEvent<HTMLInputElement>) => onSubmiting(impValue);
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault()
//       onSubmiting(impValue)
//     }>
//       <input type="text" name="s2" value={impValue} />
//       <input type="submit" value="Bing" />
//     </form>
//   );
// };

import React from "react";
import { Formik } from "formik";

export interface props {
  submitUrl: { [key: string]: string };
  inputItems: { id: string; type: string; name: string }[];
  urlSecondItem: string;
  submitValue: string;
}

export interface initialValues {
  [key: string]: string;
}

const InputForm = ({ submitUrl, inputItems, urlSecondItem, submitValue }: props) => {
  const initialValues: initialValues = inputItems.reduce((a: initialValues, c) => {
    a[c.name] = "";
    return a;
  }, {});
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        let url = "";
        const arrVal = Object.keys(values);
        arrVal.map((key, i) => {
          url = url + submitUrl[key] + values[key];
          if (arrVal.length - 1 === i) {
            url = url + submitUrl.EndPoint;
          }
        });
        window.open(url, urlSecondItem);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
      )}
    </Formik>
  );
};

export default InputForm;
