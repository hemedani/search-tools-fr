import React from "react";
import { SearchPage } from "../../App";

import db from "../../data/db.json";

export interface MenuProps {
  onPageTypeChange: (pageType: string) => void;
  onChangeSearchItem: (searchItem: SearchPage) => void;
}

export default ({ onPageTypeChange, onChangeSearchItem }: MenuProps) => (
  <div>
    <p>menu</p>
    <div className="title-menu">{db.title}</div>
  </div>
);
