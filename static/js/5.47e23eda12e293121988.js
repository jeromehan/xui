webpackJsonp([5],{Au4h:function(t,n){},NUA0:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default={data:function(){return{baseButton:"<x-button>按钮</x-button>",typesButton:'<x-button>default</x-button>\n<x-button type="primary">primary</x-button>\n<x-button type="success">success</x-button>\n<x-button type="warning">warning</x-button>\n<x-button type="danger">danger</x-button>\n<x-button type="dark">dark</x-button>',radiusButton:'<x-button>default</x-button>\n<x-button type="primary" radius>primary</x-button>\n<x-button type="success" radius>success</x-button>\n<x-button type="warning" radius>warning</x-button>\n<x-button type="danger" radius>danger</x-button>\n<x-button type="dark" radius>dark</x-button>\n\n\x3c!--按钮组 - 圆角--\x3e\n<x-button-group radius>\n  <x-button type="primary">primary</x-button>\n  <x-button type="primary">primary</x-button>\n  <x-button type="primary">primary</x-button>\n</x-button-group>',sizesButton:'<x-button size="large">large</x-button>\n<x-button size="default">default</x-button>\n<x-button size="small">small</x-button>\n<x-button size="mini">mini</x-button>',iconButton:'<x-button size="large" icon="x-icon-delete">large</x-button>\n<x-button size="default" icon="x-icon-delete">default</x-button>\n<x-button size="small" icon="x-icon-delete">small</x-button>\n<x-button size="mini" icon="x-icon-delete">mini</x-button>\n\n\x3c!--不同类型下带icon--\x3e\n<x-button type="primary" radius icon="x-icon-delete">primary</x-button>\n<x-button type="success" radius icon="x-icon-delete">success</x-button>\n<x-button type="warning" radius icon="x-icon-delete">warning</x-button>\n<x-button type="danger" radius icon="x-icon-delete">danger</x-button>\n<x-button type="dark" radius icon="x-icon-delete">dark</x-button>\n\n\x3c!--只有icon--\x3e\n<x-button type="primary" radius icon="x-icon-delete"></x-button>\n<x-button type="success" radius icon="x-icon-delete"></x-button>\n<x-button type="warning" radius icon="x-icon-delete"></x-button>\n<x-button type="danger" radius icon="x-icon-delete"></x-button>\n<x-button type="dark" radius icon="x-icon-delete"></x-button>',buttonGroup:'\x3c!--default--\x3e\n<x-button-group>\n  <x-button>default</x-button>\n  <x-button>default</x-button>\n  <x-button>default</x-button>\n</x-button-group>\n\n\x3c!--primary--\x3e\n<x-button-group>\n  <x-button type="primary">primary</x-button>\n  <x-button type="primary">primary</x-button>\n  <x-button type="primary">primary</x-button>\n</x-button-group>\n\n\x3c!--success--\x3e\n<x-button-group>\n  <x-button type="success">success</x-button>\n  <x-button type="success">success</x-button>\n  <x-button type="success">success</x-button>\n</x-button-group>\n\n\x3c!--warning--\x3e\n<x-button-group>\n  <x-button type="warning">warning</x-button>\n  <x-button type="warning">warning</x-button>\n  <x-button type="warning">warning</x-button>\n</x-button-group>\n\n\x3c!--danger--\x3e\n<x-button-group>\n  <x-button type="danger">danger</x-button>\n  <x-button type="danger">danger</x-button>\n  <x-button type="danger">danger</x-button>\n</x-button-group>\n\n\x3c!--dark--\x3e\n<x-button-group>\n  <x-button type="dark">dark</x-button>\n  <x-button type="dark">dark</x-button>\n  <x-button type="dark">dark</x-button>\n</x-button-group>\n\n\x3c!--icon--\x3e\n<x-button-group>\n  <x-button icon="x-icon-chevron-left"></x-button>\n  <x-button icon="x-icon-pause"></x-button>\n  <x-button icon="x-icon-chevron-right"></x-button>\n</x-button-group>',blockButton:"<x-button block>按钮</x-button>",disabledButton:"<x-button disabled>禁用</x-button>\n\x3c!--按钮组禁用--\x3e\n<x-button-group>\n  <x-button disabled>primary</x-button>\n  <x-button disabled>primary</x-button>\n  <x-button disabled>primary</x-button>\n</x-button-group>\n",hollowButton:'<x-button hollow>default</x-button>\n<x-button type="primary" hollow>primary</x-button>\n<x-button type="success" hollow>success</x-button>\n<x-button type="warning" hollow>warning</x-button>\n<x-button type="danger" hollow>danger</x-button>\n<x-button type="dark" hollow>dark</x-button>',loadingButton:'<x-button :loading="loading">default</x-button>\n<x-button type="primary" :loading="loading">primary</x-button>\n<x-button type="success" :loading="loading">success</x-button>\n<x-button type="warning" :loading="loading">warning</x-button>\n<x-button type="danger" :loading="loading">danger</x-button>\n<x-button type="dark" :loading="loading">dark</x-button>',loading:!1,apiData:[{attribute:"type",explain:"设置按钮类型",type:"String",values:"default | primary | success | warning | danger | dark",default:"default"},{attribute:"radius",explain:"设置按钮圆角",type:"Boolean",values:"true | false",default:"false"},{attribute:"hollow",explain:"设置按钮为空心",type:"Boolean",values:"true | false",default:"false"},{attribute:"icon",explain:"设置按钮图标",type:"String",values:" --- ",default:"icon模块中所有的图标"},{attribute:"block",explain:"设置按钮自适应宽度",type:"Boolean",values:"true | false",default:"false"},{attribute:"size",explain:"设置按钮大小",type:"String",values:"large | default | small | mini",default:"default"},{attribute:"loading",explain:"设置按钮为loading状态",type:"Boolean",values:"true | false",default:"false"},{attribute:"disabled",explain:"禁用按钮",type:"Boolean",values:"true | false",default:"false"}],eventsData:[{events:"click",explain:"按钮点击按钮时触发的事件",params:"event"}]}}}},cZNW:function(t,n,a){"use strict";var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("基础用法")]),t._v(" "),a("x-quote",[a("div",[a("x-button",[t._v("按钮")])],1),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.baseButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("颜色分类")]),t._v(" "),t._m(1),t._v(" "),a("x-quote",[a("div",t._l(t.$types,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{type:n}},[t._v(t._s(n))])})),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.typesButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("圆角")]),t._v(" "),t._m(2),t._v(" "),a("x-quote",[a("div",t._l(t.$types,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{radius:"",type:n}},[t._v(t._s(n))])})),t._v(" "),a("div",[a("h4",[t._v("按钮组 - 圆角")]),t._v(" "),a("x-button-group",{attrs:{radius:""}},[a("x-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),a("x-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),a("x-button",{attrs:{type:"primary"}},[t._v("primary")])],1)],1),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.radiusButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("空心")]),t._v(" "),t._m(3),t._v(" "),a("x-quote",[a("div",t._l(t.$types,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{hollow:"",type:n}},[t._v(t._s(n))])})),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.hollowButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("带图标的按钮")]),t._v(" "),a("p",[t._v("可以通过 icon 属性设置按钮的图标（icon只能为xui中所提供的图标）,  "),a("router-link",{attrs:{to:"{ name: 'icon' }"}},[t._v("点击查看icon")])],1),t._v(" "),a("x-quote",[a("div",t._l(t.$size,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{icon:"x-icon-delete",size:n}},[t._v(t._s(n))])})),t._v(" "),a("div",t._l(t.$types,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{icon:"x-icon-delete",type:n}},[t._v(t._s(n))])})),t._v(" "),a("div",t._l(t.$types,function(t){return a("x-button",{key:t,staticClass:"margin-10",attrs:{icon:"x-icon-delete",type:t}})})),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.iconButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("按钮组")]),t._v(" "),a("x-quote",[a("div",[a("x-button-group",{staticClass:"margin-10"},[a("x-button",[t._v("按钮")]),t._v(" "),a("x-button",[t._v("按钮")]),t._v(" "),a("x-button",[t._v("按钮")])],1),t._v(" "),t._l(t.$types,function(n){return a("x-button-group",{key:n,staticClass:"margin-10"},[a("x-button",{attrs:{type:n}},[t._v("按钮")]),t._v(" "),a("x-button",{attrs:{type:n}},[t._v("按钮")]),t._v(" "),a("x-button",{attrs:{type:n}},[t._v("按钮")])],1)})],2),t._v(" "),a("div",[a("h4",[t._v("icon")]),t._v(" "),a("x-button-group",[a("x-button",{attrs:{icon:"x-icon-chevron-left"}}),t._v(" "),a("x-button",{attrs:{icon:"x-icon-pause"}}),t._v(" "),a("x-button",{attrs:{icon:"x-icon-chevron-right"}})],1)],1),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.buttonGroup))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("长按钮")]),t._v(" "),a("p",[t._v("可以通过block设置按钮为自适应宽度 (长按钮的宽度是100% 需要自己给父级容器设置宽度来限制)")]),t._v(" "),a("x-quote",[a("div",[a("x-button",{attrs:{block:""}},[t._v("按钮")])],1),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.blockButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("size分类")]),t._v(" "),t._m(4),t._v(" "),a("x-quote",[a("div",t._l(t.$size,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{size:n}},[t._v(t._s(n))])})),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.sizesButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("加载中按钮")]),t._v(" "),a("p",[t._v("可以通过 loading 属性让按钮进入loading状态（进入loading状态后按钮将不能点击 - 除非移除loading状态）")]),t._v(" "),a("x-quote",[a("div",[a("x-button",{staticClass:"margin-10",attrs:{loading:t.loading},on:{click:function(n){t.loading=!0}}},[t._v("default")]),t._v(" "),t._l(t.$types,function(n){return a("x-button",{key:n,staticClass:"margin-10",attrs:{loading:t.loading,type:n},on:{click:function(n){t.loading=!0}}},[t._v(t._s(n))])})],2),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.loadingButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("禁用")]),t._v(" "),a("p",[t._v("可以通过 disabled 属性设置按钮为禁用状态")]),t._v(" "),a("x-quote",[a("div",[a("x-button",{staticClass:"margin-10",attrs:{disabled:""}},[t._v("禁用")])],1),t._v(" "),a("div",[a("x-button-group",{staticClass:"margin-10"},[a("x-button",{attrs:{disabled:""}},[t._v("primary")]),t._v(" "),a("x-button",{attrs:{disabled:""}},[t._v("primary")]),t._v(" "),a("x-button",{attrs:{disabled:""}},[t._v("primary")])],1)],1),t._v(" "),a("source-code",{staticClass:"margin-top-10",attrs:{type:"html"}},[t._v(t._s(t.disabledButton))])],1)],1),t._v(" "),a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("API")]),t._v(" "),a("h4",[t._v("props")]),t._v(" "),a("api-table",{attrs:{data:t.apiData,keys:t.$propsKeys}}),t._v(" "),a("h4",[t._v("events")]),t._v(" "),a("api-table",{attrs:{data:t.eventsData,keys:t.$eventKeys}})],1)])},e=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"row"},[a("h3",{staticClass:"row-title"},[t._v("button 按钮")]),t._v(" "),a("p",[t._v("用于通过点击触发一个操作/事件")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("\n      可以通过 type 属性设置按钮的颜色， 按钮有六种类型:\n      "),a("span",{staticClass:"highlighted"},[t._v("default, primary, success, warning, danger, dark")]),t._v("\n       - 默认 "),a("span",{staticClass:"highlighted"},[t._v("default")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("可以通过 radius 设置按钮是否圆角 - 默认"),a("span",{staticClass:"highlighted"},[t._v("false")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("可以通过 hollow 设置按钮为空心 - 默认"),a("span",{staticClass:"highlighted"},[t._v("false")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("\n      可以通过 size 属性设置按钮的大小， 按钮有四种大小:\n      "),a("span",{staticClass:"highlighted"},[t._v("large(最大), default(默认), small(小的), mini(mini)")]),t._v("\n       - 默认 "),a("span",{staticClass:"highlighted"},[t._v("default")])])}],s={render:o,staticRenderFns:e};n.a=s},"f/QG":function(t,n,a){"use strict";function o(t){a("Au4h")}Object.defineProperty(n,"__esModule",{value:!0});var e=a("NUA0"),s=a.n(e),u=a("cZNW"),i=a("VU/8"),r=o,l=i(s.a,u.a,r,"data-v-c0353232",null);n.default=l.exports}});
//# sourceMappingURL=5.47e23eda12e293121988.js.map