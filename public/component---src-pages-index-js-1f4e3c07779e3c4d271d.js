(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(e,a,t){"use strict";t.r(a);var r=t("HaE+"),n=t("o0o1"),l=t.n(n),o=t("q1tI"),i=t.n(o),c=t("qhky"),s=t("4R65"),u=t.n(s),p=t("gGy4"),d=t("8e1d"),v=t("7oih"),m=(t("VUD3"),t("SVAT")),y=[0,0];a.default=function(){var e=Object(p.d)({api:"all"}).data,a=void 0===e?{}:e,t=Object(p.d)({api:"countries"}).data,n=void 0===t?[]:t,o=Array.isArray(n)&&n.length>0,s=[{primary:{label:"Total Cases",value:a?Object(d.a)(null==a?void 0:a.cases):"-"}},{primary:{label:"Total Deaths",value:a?Object(d.a)(null==a?void 0:a.deaths):"-"}},{primary:{label:"Total Tests",value:a?Object(d.a)(null==a?void 0:a.tests):"-"}},{primary:{label:"Active Cases",value:a?Object(d.a)(null==a?void 0:a.active):"-"}},{primary:{label:"Critical Cases",value:a?Object(d.a)(null==a?void 0:a.critical):"-"}},{primary:{label:"Recovered Cases",value:a?Object(d.a)(null==a?void 0:a.recovered):"-"}}];function b(){return(b=Object(r.a)(l.a.mark((function e(a){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(void 0===a?{}:a).leafletElement,o&&t){e.next=3;break}return e.abrupt("return");case 3:t.eachLayer((function(e){var a;"OpenStreetMap"!==(null==e||null===(a=e.options)||void 0===a?void 0:a.name)&&t.removeLayer(e)})),r={type:"FeatureCollection",features:n.map((function(e){void 0===e&&(e={});var a=e.countryInfo,t=void 0===a?{}:a,r=t.lat,n=t.long;return{type:"Feature",properties:Object.assign({},e),geometry:{type:"Point",coordinates:[n,r]}}}))},new u.a.GeoJSON(r,{pointToLayer:function(e,a){void 0===e&&(e={});var t,r,n=e.properties,l=void 0===n?{}:n,o=l.country,i=l.updated,c=l.cases,s=l.deaths,p=l.recovered;r=""+c,c>1e6?r=r.slice(0,-6)+"M+":c>1e3&&(r=r.slice(0,-3)+"K+"),i&&(t=new Date(i).toLocaleString());var d='\n          <span class="icon-marker">\n            <span class="icon-marker-tooltip">\n              <h2>'+o+"</h2>\n              <ul>\n                <li><strong>Confirmed:</strong> "+c+"</li>\n                <li><strong>Deaths:</strong> "+s+"</li>\n                <li><strong>Recovered:</strong> "+p+"</li>\n                <li><strong>Last Update:</strong> "+t+"</li>\n              </ul>\n            </span>\n            "+r+"\n          </span>\n        ";return u.a.marker(a,{icon:u.a.divIcon({className:"icon",html:d}),riseOnHover:!0})}}).addTo(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={center:y,defaultBaseMap:"OpenStreetMap",zoom:2,mapEffect:function(e){return b.apply(this,arguments)}};return i.a.createElement(v.a,{pageName:"home"},i.a.createElement(c.a,null,i.a.createElement("title",null,"Home Page")),i.a.createElement("div",{className:"tracker"},i.a.createElement(m.a,f),i.a.createElement("div",{className:"tracker-stats"},i.a.createElement("ul",null,s.map((function(e,a){var t=e.primary,r=void 0===t?{}:t;return i.a.createElement("li",{key:"Stat-"+a,className:"tracker-stat"},r.value&&i.a.createElement("p",{className:"tracker-stat-primary"},r.value,i.a.createElement("strong",null,r.label)))})))),i.a.createElement("div",{className:"tracker-last-updated"},i.a.createElement("p",null,"Last Updated: ",a?Object(d.b)(null==a?void 0:a.updated):"-"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1f4e3c07779e3c4d271d.js.map