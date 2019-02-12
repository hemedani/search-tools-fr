import React from "react";
import { Formik } from "formik";

export interface props {
  setFormsValue: (value: string, forSection: string) => void;
  forSection: string;
}

const PapullateForm = ({ setFormsValue, forSection }: props) => {
  return (
    <Formik
      initialValues={{ papullate: "" }}
      onSubmit={values => {
        setFormsValue(values.papullate, forSection);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            className="input-text"
            type="text"
            name="papullate"
            placeholder="papullate all"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.papullate}
          />
          {/* {errors.inp.email && touched.email && errors.email} */}
          <button type="submit" className="sbmt-btn inp-btn i-rod no-margin-left">
            papullate
          </button>
        </form>
      )}
    </Formik>
  );
};

export default PapullateForm;
