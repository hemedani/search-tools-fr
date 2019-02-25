import React from "react";
import cn from "classnames";

import { Item } from "../../data/dbType";

interface IPostForm {
  item: Item;
}

export default ({ item }: IPostForm) => (
  <div className="inp-section-wrapper">
    {item.lead && <div className="inp-lead">{item.lead}</div>}
    <form
      className={cn("input-form", { "break-inp": item.breaking })}
      method={item.method}
      target={item.target}
      title="Search Form"
      action={item.submitUrl ? item.submitUrl[0].url : ""}
    >
      {item.inputItems &&
        item.inputItems.map(it => (
          <input
            className="input-text"
            key={it.id}
            name={it.name}
            type={it.type}
            placeholder={it.placeholder ? it.placeholder : it.name}
            style={it.size ? { width: it.size + "rem" } : { width: "20rem" }}
            required
          />
        ))}
      <div className="btn-all-center">
        <input type="submit" value={item.submitValue} className="sbmt-btn inp-btn i-rod last-child" />
        {item.description && <p dangerouslySetInnerHTML={{ __html: item.description }} />}
      </div>
    </form>
  </div>
);

{
  /* <form method="POST" target="_blank" id="form" action="https://tweetbeaver.com/getid.php">
                <span style="font-size: small">
				
				<input type="submit" value="Go">
                TweetBeaver User ID<br />
                </span>
				</form> */
}
