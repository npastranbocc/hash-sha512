(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0645e856"],{"240f":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"h-100 mb-5 pt-5"},[a("navbar-app"),a("div",{staticClass:"container-fluid mt-4 pt-4 h-80vh"},[a("router-view")],1),a("footer-app")],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer text-center w-100 py-3"},[a("span",[a("a",{attrs:{href:"https://avaldigitallabs.com/",target:"_blank",rel:"noopener"}},[e._v("ADL")]),e._v(" @ "+e._s((new Date).getFullYear())+" ")])])},c=[],s={props:{aditionalClass:{type:String,default:function(){return""}}}},i=s,l=a("2877"),u=Object(l["a"])(i,r,c,!1,null,null,null),d=u.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-block"},[a("vs-navbar",{attrs:{"padding-scroll":"",shadow:"","center-collapsed":""},scopedSlots:e._u([{key:"right",fn:function(){return[a("change-theme")]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("div",[a("h1",[e._v("Convertidor a sha512")])])])],1)},p=[],f=a("5530"),h=a("2f62"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shadow border-radius-sw mx-2"},[a("vs-switch",{attrs:{dark:!e.activeDarkMode,"aria-label":"Change Theme"},scopedSlots:e._u([{key:"circle",fn:function(){return[e._v(" "+e._s(e.activeDarkMode?"🌛":"🌞")+" ")]},proxy:!0}]),model:{value:e.activeDarkMode,callback:function(t){e.activeDarkMode=t},expression:"activeDarkMode"}})],1)},m=[],k={data:function(){return{active:!0,activeDarkMode:!1}},computed:Object(f["a"])({},Object(h["c"])("control",["activeDark"])),watch:{activeDarkMode:function(e){this.UPDATED_ACTIVE_DARK_MODE(e),this.changeColorMode(e)}},beforeMount:function(){this.activeDarkMode=this.activeDark,this.changeColorMode(this.activeDark)},methods:Object(f["a"])(Object(f["a"])({},Object(h["b"])("control",["UPDATED_ACTIVE_DARK_MODE"])),{},{changeColorMode:function(e){var t=document.querySelector("#father").classList.toggle("dark-mode");console.log(t),this.$vs.setColor("background",e?"#01071d":"#f3f5f4"),this.$vs.setColor("primary",e?"#37a726":"#253c99"),this.$vs.setColor("text",e?"#f3f5f4":"#2C3E50")}})},_=k,D=(a("d929"),Object(l["a"])(_,b,m,!1,null,"258fcd14",null)),C=D.exports,g={name:"NavbarApp",components:{ChangeTheme:C},data:function(){return{active:!0}},computed:Object(f["a"])({},Object(h["c"])("control",["activeSidebar"])),methods:{}},w=g,M=Object(l["a"])(w,v,p,!1,null,null,null),O=M.exports,j={name:"LayoutApp",components:{FooterApp:d,NavbarApp:O}},x=j,A=Object(l["a"])(x,o,n,!1,null,null,null);t["default"]=A.exports},"9e84":function(e,t,a){},d929:function(e,t,a){"use strict";a("9e84")}}]);
//# sourceMappingURL=chunk-0645e856.b85f62b4.js.map