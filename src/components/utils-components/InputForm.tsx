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
  submitUrl: string;
  inputItems: { type: string; name: string }[];
}

export interface initialValues {
  [key: string]: string;
}

const InputForm = ({ submitUrl, inputItems }: props) => {
  const initialValues: initialValues = inputItems.reduce((a: initialValues, c) => {
    a[c.name] = "";
    return a;
  }, {});
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        window.open(`${submitUrl}${values}`);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          {inputItems.map(inp => (
            <input type={inp.type} name={inp.name} onChange={handleChange} onBlur={handleBlur} value={values[inp.name]} />
            // {errors.inp.email && touched.email && errors.email}
          ))}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default InputForm;
