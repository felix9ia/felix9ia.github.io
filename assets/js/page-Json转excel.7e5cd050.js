(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{529:function(s,e,t){"use strict";t.r(e);var a=t(1),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"json-转-excel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-转-excel"}},[s._v("#")]),s._v(" Json 转 excel")]),s._v(" "),t("p",[s._v("这里需要用到 "),t("code",[s._v("pandas")])]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("代码如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import pandas as pd\n\ndf = pd.read_json('live_push.json')\nnextdf = pd.json_normalize(df.to_dict(), record_path=['hits', 'hits'])\n\nnextdf.to_excel(\"live_push.xlsx\")\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);