import React from "react";
import { Formik } from "formik";

import { PapulateItem } from "../../data/dbType";

export interface props {
  setFormsValue: (value: TPapulate, forSection: string) => void;
  forSection: string;
  papulateItem: TPapulate;
}

type TPapulate = PapulateItem;

const PapullateForm = ({ setFormsValue, forSection, papulateItem }: props) => {
  const papulateArr = Object.keys(papulateItem);
  return (
    <Formik
      initialValues={papulateItem}
      onSubmit={values => {
        setFormsValue(values, forSection);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="input-form" onSubmit={handleSubmit}>
          {papulateArr.map(pap => (
            <input
              key={pap}
              className="input-text"
              type="text"
              name={pap}
              placeholder={pap}
              onChange={handleChange}
              onBlur={handleBlur}
              value={(values as any)[pap]}
              style={{ width: 20 / papulateArr.length + "rem" }}
            />
          ))}
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
