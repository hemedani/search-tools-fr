import React from "react";

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "gcse:search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//     }
//   }
// }

export default () => (
  <div className="inp-section-wrapper">
    <form
      className="input-form"
      target="_blank"
      method="get"
      title="Search Form"
      action="https://cse.google.com/cse/publicurl"
    >
      <div>
        <input
          className="input-text"
          type="text"
          placeholder="Documents by Storage Service"
          id="q"
          name="q"
          title="Search this site"
          alt="Search Text"
        />
        <input type="hidden" id="cx" name="cx" value="001580308195336108602:hx9tv6r_od4" />
        <input
          type="submit"
          className="sbmt-btn inp-btn i-rod last-child"
          name="submit"
          alt="Go"
          title="Submit Search Query"
        />
      </div>
    </form>
    <form
      className="input-form"
      target="_blank"
      method="get"
      title="Search Form"
      action="https://cse.google.com/cse/publicurl"
    >
      <div>
        <input
          className="input-text"
          placeholder="Documents by File Type"
          type="text"
          id="q"
          name="q"
          title="Search this site"
          alt="Search Text"
        />
        <input type="hidden" id="cx" name="cx" value="001580308195336108602:vvchyaurf_4" />
        <input
          type="submit"
          className="sbmt-btn inp-btn i-rod last-child"
          name="submit"
          alt="Go"
          title="Submit Search Query"
        />
      </div>
    </form>
  </div>
);
