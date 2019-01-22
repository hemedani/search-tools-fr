import React from "react";

import { SearchPage } from "../../App";

export interface props {
  searchItem: SearchPage;
}

export default ({ searchItem }: props) => <div>search page {searchItem.title}</div>;
