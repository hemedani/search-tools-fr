import React from "react";

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "gcse:search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//     }
//   }
// }

export default () => (
  <div>
    <form method="get" title="Search Form" action="https://cse.google.com/cse/publicurl">
      <div>
        <input type="text" id="q" name="q" title="Search this site" alt="Search Text" />
        <input type="hidden" id="cx" name="cx" value="001580308195336108602:mhdmrvbspnm" />
        <input
          type="image"
          id="searchSubmit"
          name="submit"
          src="https://www.flaticon.com/free-icon/active-search-symbol_34148"
          alt="Go"
          title="Submit Search Query"
        />
      </div>
    </form>
    <div>This custom search page indexes the following 57 Paste Sites:</div>
    <table>
      <tr>
        <td>
          cl1p.net
          <br />
          codepad.org <br />
          codepaste.net <br />
          codetidy.com <br />
          copytaste.com <br />
          dpaste.com <br />
          dpaste.org <br />
          dumpz.org <br />
          etherpad.com
          <br />
          friendpast.com
          <br />
          gist.github.com
          <br />
          hastebin.com
          <br />
          heypasteit.com <br />
          hpaste.org <br />
          ideone.com <br />
        </td>
        <td>
          ivpaste.com
          <br />
          jsbin.com <br />
          justpaste.it <br />
          mysticpaste.com <br />
          nopaste.info <br />
          paste.bradleygill.com
          <br />
          paste.debian.net
          <br />
          paste.fedoraproject.org
          <br />
          paste.frubar.net <br />
          paste.kde.org <br />
          paste.lisp.org <br />
          paste.pound-python.org
          <br />
          paste.opensuse.org
          <br />
          paste.org
          <br />
          paste.org.ru <br />
        </td>
        <td>
          paste.ubuntu.com
          <br />
          paste.xinu.at
          <br />
          paste2.org <br />
          pastebin.ca <br />
          pastebin.com <br />
          pastebin.fr
          <br />
          pastebin.gr
          <br />
          pastebin.pt
          <br />
          pastebin.ru
          <br />
          pastee.org
          <br />
          pastehtml.com <br />
          pasteSite.com <br />
          pastie.org <br />
          pastie.textmate.org
          <br />
          sebsauvage.net/paste <br />
        </td>
        <td>
          slexy.org <br />
          Snipplr.com <br />
          snipt.net
          <br />
          sprunge.us <br />
          squadedit.com
          <br />
          textsnip.com <br />
          tidypub.org
          <br />
          vyew.com
          <br />
          wklej.se <br />
          wordle.net/create
        </td>
      </tr>
    </table>
  </div>
);
