(this["webpackJsonptime-saver"]=this["webpackJsonptime-saver"]||[]).push([[0],{197:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(30),r=t.n(i),s=t(29),l=t.n(s),c=t(42),u=t(51),d=t(10),p=t(71),v=t(117),b=t(215),j=t(218),h=t(217),f=t(216),O=t(116),m=t(14),x=function(e){var n=e.isOpen,t=(e.onOpen,e.onClose),o=e.locationAddress,a=e.locationName,i=e.bestTimeData,r=Object(O.a)(b.a)({width:300,height:300,background:"white",outline:"none",marginTop:"150px",marginLeft:"20px",display:"flex",alignItems:"center",textAlign:"center"});return Object(m.jsx)(f.a,{BackdropProps:{invisible:!0},open:n,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:t,children:Object(m.jsxs)(r,{autoFocus:!1,children:[a,o,i]})})},g=t(115),y=t.n(g),k="https://besttime.app/api/v1/forecasts",w=function(){var e=Object(c.a)(l.a.mark((function e(n){var t,o,a,i,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},o=r.length>2&&void 0!==r[2]?r[2]:{},a={method:n,url:"".concat(k),data:t,params:o},e.next=5,y()(a);case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(l.a.mark((function e(){var n,t=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{},e.abrupt("return",w("post","",n));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e,n,t,a,i,r,s,f,O="pk.eyJ1Ijoia2FyaW4ta2F6YXJpYW4iLCJhIjoiY2tteWVjMnFpMDM4MTJubWYycTJ5N3Q5ZCJ9.Of9brpnQ8Oc-LGZ6P1ArrA",g=Object(o.useState)({latitude:45.537875,longitude:-73.757928,zoom:8}),y=Object(d.a)(g,2),k=y[0],w=y[1],_=Object(j.a)(),C=_.isOpen,T=_.onOpen,J=_.onClose,R=Object(o.useRef)(),F=Object(o.useCallback)((function(e){return w(e)}),[]),D=Object(o.useCallback)((function(e){return F(Object(u.a)(Object(u.a)({},e),{transitionDuration:1e3}))}),[F]),M="",q=function(){var e=Object(c.a)(l.a.mark((function e(){var n,t,o,a,i,r,s,c,u,d,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({api_key_private:"pri_7b5f18965b7d46a5b708eeee58fc2354",venue_address:W,venue_name:N});case 2:p=e.sent,M=null===p||void 0===p||null===(n=p.data)||void 0===n||null===(t=n.analysis)||void 0===t||null===(o=t[0])||void 0===o?void 0:o.quiet_hours,console.log("Quiet Hours: ",null===p||void 0===p||null===(a=p.data)||void 0===a?void 0:a.quiet_hours),console.log("json response: ",p),console.log("json data: ",null===p||void 0===p?void 0:p.data),console.log("json analysis: ",null===p||void 0===p||null===(i=p.data)||void 0===i?void 0:i.analysis),console.log("json array 0: ",null===p||void 0===p||null===(r=p.data)||void 0===r||null===(s=r.analysis)||void 0===s?void 0:s[0]),console.log("json quiet hours: ",null===p||void 0===p||null===(c=p.data)||void 0===c||null===(u=c.analysis)||void 0===u||null===(d=u[0])||void 0===d?void 0:d.quiet_hours),T();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=Object(o.useRef)(""),N=null===I||void 0===I||null===(e=I.current)||void 0===e||null===(n=e.cachedResult)||void 0===n?void 0:n.place_name.slice(0,null===I||void 0===I||null===(t=I.current)||void 0===t||null===(a=t.cachedResult)||void 0===a?void 0:a.place_name.indexOf(",")),W=null===I||void 0===I||null===(i=I.current)||void 0===i||null===(r=i.cachedResult)||void 0===r?void 0:r.place_name.substring((null===I||void 0===I||null===(s=I.current)||void 0===s||null===(f=s.cachedResult)||void 0===f?void 0:f.place_name.indexOf(","))+1);return Object(m.jsxs)(b.a,{height:"100%",width:"100%",position:"absolute",children:[Object(m.jsx)(h.a,{onClick:q,children:"Get Busy Data"}),Object(m.jsx)(p.b,Object(u.a)(Object(u.a)({ref:R},k),{},{width:"100%",height:"100%",position:"absolute",mapboxApiAccessToken:O,mapStyle:"mapbox://styles/karin-kazarian/ckmyepr931r7317prtkdbrhj1",onViewportChange:F,onTransitionEnd:q,children:Object(m.jsx)(v.a,{mapRef:R,ref:I,onViewportChange:D,mapboxApiAccessToken:O,width:"100%",position:"top-left"})})),Object(m.jsx)("div",{children:Object(m.jsx)(x,{isOpen:C,onOpen:T,onClose:J,locationAddress:W,locationName:N,bestTimeData:M})})]})},C=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Traffic App"}),Object(m.jsx)(_,{})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.a1811271.chunk.js.map