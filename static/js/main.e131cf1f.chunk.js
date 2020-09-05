(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{42:function(e,t,n){e.exports=n(62)},47:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),l=n.n(i),o=n(63),c=(n(47),n(13)),u=c.a.button.withConfig({displayName:"Button__Btn",componentId:"sc-1guv9ys-0"})(["display:block;height:3rem;padding:0.5rem 2rem;border-left:solid 6px var(--main-color);color:var(--main-color);font-weight:bold;:disabled{cursor:not-allowed;color:#b5b5b5;background-color:#e6e6e6;}:active{transform:translateY(2px);}"]),d=function(e){var t=e.label,n=e.onClick,a=e.disabled,i=void 0!==a&&a,l=e.type,o=void 0===l?"button":l,c=e.style;return r.a.createElement(u,{onClick:n,disabled:i,type:o,style:c},t)};d.defaultProps={onClick:function(){}};var s=n(41),m=c.a.input.withConfig({displayName:"Input",componentId:"jvejwz-0"})(["padding:0 1.5rem;height:2.5rem;width:5rem;::placeholder{color:#ababab;}:disabled{color:#c7c7c7;background-color:#f6f6f6;}"]),f=c.a.label.withConfig({displayName:"Input__FieldLabel",componentId:"jvejwz-1"})(["display:block;padding:0;margin:0;"]),h=c.a.span.withConfig({displayName:"Input__FieldTitle",componentId:"jvejwz-2"})(["display:block;margin-bottom:1rem;font-weight:500;font-size:14px;color:#494949;"]),g=function(e){var t=e.title,n=Object(s.a)(e,["title"]);return r.a.createElement(f,null,t&&r.a.createElement(h,null,t),r.a.createElement(m,n))},p="",b="/play",v=n(16),w=Object(v.a)(),y=function(){var e=Object(o.d)();return r.a.createElement("div",{style:{padding:"3rem"}},r.a.createElement("h1",null,"Welcome to Minesweeper"),r.a.createElement("p",{style:{maxWidth:"80rem"}},"If you're a Windows' user chances are that you already have the game on your computer. This guide will help you in completing your first game. The rule of the game is simple, the number on a block shows the number of mines adjacent to it and you have to flag all the mines."),r.a.createElement("h4",null,"Few Game Rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Flag:")," Put a flag in a zone when you have confirmed that there is a mine."),r.a.createElement("li",null,r.a.createElement("strong",null,"Superman:")," Play new game with all cells revealed!"),r.a.createElement("li",null,r.a.createElement("strong",null,"Rest:")," Click it if you want to reset the game")),r.a.createElement("a",{href:"https://www.instructables.com/id/How-to-play-minesweeper/",rel:"noopener noreferrer",target:"_blank"},"For more information about Minesweeper"),r.a.createElement(d,{label:"Click to start playing",style:{marginTop:"2rem"},onClick:function(){return e.push(b)}}),r.a.createElement("p",{style:{marginTop:"2rem"}},"Made by Eylon Mizrahi"))},E=n(10),j=n(9),O=n(20),C=c.a.div.withConfig({displayName:"styled__GameLayout",componentId:"sc-8didco-0"})([""]),k=c.a.div.withConfig({displayName:"styled__ControlsLayout",componentId:"sc-8didco-1"})(["width:400px;margin:5rem auto;"]),S=c.a.div.withConfig({displayName:"styled__StyledControls",componentId:"sc-8didco-2"})(["display:flex;justify-content:space-around;margin-bottom:2rem;"]),_=c.a.div.withConfig({displayName:"styled__StyledGrid",componentId:"sc-8didco-3"})(["display:grid;grid-template-columns:repeat(",",auto);justify-content:center;overflow:scroll;"],(function(e){return e.width})),I=c.a.button.withConfig({displayName:"styled__StyledCell",componentId:"sc-8didco-4"})(["width:3rem;height:3rem;text-align:center;border:1px solid black;background-color:",";opacity:",";"],(function(e){return e.color}),(function(e){return e.$revealed?.5:.8})),M=n(18),N="playing",G="lost",D="won",x=1,F=0,z=-1,W={width:50,height:50,mines:200,isSuperman:!1},R=function(e){var t=function(e){var t=e.width,n=e.height,a=e.mines,r=e.isSuperman;return{width:Number(t),height:Number(n),mines:Number(a),isSuperman:r}}(e),n=t.width,a=t.height,r=t.mines;return[!(n>0&&n<=300&&(a>0&&a<=300)&&(r>0&&r<=n*a))&&"Allowed Settings: Height, Width up to 300, mines up to 90,000",{width:n,height:a,mines:r,isSuperman:t.isSuperman}]},V=function(e,t){var n=Object(E.a)(e,2),a=n[0],r=n[1],i=t.width,l=t.height;return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].reduce((function(e,t){var n=Object(E.a)(t,2),o=n[0],c=n[1],u=a+o,d=r+c;return u>=0&&u<i&&(d>=0&&d<l)?[].concat(Object(M.a)(e),[[u,d]]):e}),[])},L=function(e){var t=function(e){var t=e.width,n=e.height,a=Array(t).fill(0);return Array(n).fill(null).map((function(){return Object(M.a)(a)}))}(e),n=t.map((function(e){return Object(M.a)(e)}));return[function(e,t,n){var a=t.map((function(e){return Object(M.a)(e)}));return e.forEach((function(e){var t=Object(E.a)(e,2),r=t[0],i=t[1];a[i][r]=1/0,V([r,i],n).forEach((function(e){var t=Object(E.a)(e,2),n=t[0],r=t[1];return a[r][n]+=1}))})),a}(function(e){for(var t=e.width,n=e.height,a=e.mines,r=[],i={};r.length<a;){var l=Math.floor(Math.random()*t),o=Math.floor(Math.random()*n);i[l]&&i[l][o]||(i[l]=Object(j.a)(Object(j.a)({},i[l]),{},Object(O.a)({},o,!0)),r.push([l,o]))}return r}(e),t,e),n]},H=function(e,t){var n=Object(E.a)(e,2),a=n[0],r=n[1],i=t.gridState,l=t.settings;return V([a,r],l).filter((function(e){var t=Object(E.a)(e,2),n=t[0],a=t[1],r=i[a][n]===F,l=i[a][n]===z;return r&&!l}))},T=function(e){var t=Object(E.a)(e,2),n=t[0],a=t[1];return.5*(n+a)*(n+a+1)+a},Y=function(e){var t=e.mode,n=void 0===t?N:t,i=e.onNewGame,l=e.usedFlags,c=void 0===l?0:l,u=e.mines,s=void 0===u?0:u,m=e.toggleVirtual,f=e.isVirtual,h=Object(o.d)(),b=Object(a.useState)(W),v=Object(E.a)(b,2),w=v[0],y=v[1],C=function(e,t){y(Object(j.a)(Object(j.a)({},w),{},Object(O.a)({},t,e.target.value)))};return r.a.createElement(k,null,r.a.createElement(S,null,r.a.createElement(g,{onChange:function(e){return C(e,"width")},placeholder:"Grid Width",title:"Width:",value:w.width}),r.a.createElement(g,{onChange:function(e){return C(e,"height")},placeholder:"Grid Height",title:"Height:",value:w.height}),r.a.createElement(g,{onChange:function(e){return C(e,"mines")},placeholder:"Mines Amount",title:"Mines:",value:w.mines})),r.a.createElement(S,null,r.a.createElement(d,{label:"Rules",onClick:function(){return h.push(p)},disabled:n===N}),r.a.createElement(d,{label:"Superman",onClick:function(){return i(Object(j.a)(Object(j.a)({},w),{},{isSuperman:!0}))}}),r.a.createElement(d,{label:"Reset",onClick:function(){return i(w)}})),r.a.createElement(S,null,r.a.createElement("div",null,r.a.createElement("span",null,"".concat(s-c,"  \ud83d\udea9 Remaining"))),r.a.createElement("div",null,r.a.createElement("span",null,"".concat(s," \ud83d\udca3 Total"))),r.a.createElement(d,{label:"Virtual: ".concat(f?"On":"Off"),onClick:m})))},A=r.a.memo((function(e){var t=e.minesCount,n=e.state,a=e.corX,i=e.corY,l=e.onClick,o=e.style;return r.a.createElement(I,{style:o,onClick:function(){return l(a,i)},disabled:n===x,color:n===x&&t===1/0?"red":"grey",$revealed:n===x},r.a.createElement("span",{style:{color:t>1?"red":"white",fontWeight:600}},function(e,t){switch(t){case z:return"\ud83d\udea9";case x:return e===1/0?"\ud83d\udca3":e||"";default:return""}}(t,n)))}),(function(e,t){return e.state===t.state&&e.minesCount===t.minesCount})),B=function(e){var t=e.gridData,n=void 0===t?[[]]:t,a=e.gridState,i=void 0===a?[[]]:a,l=e.width,o=e.onCellClick,c=n.map((function(e,t){return e.map((function(e,n){return r.a.createElement(A,{key:"".concat(n,"-").concat(t),minesCount:e,state:i[t][n],corX:n,corY:t,onClick:o})}))}));return r.a.createElement(_,{width:l},c)},P=n(40),X=function(e){var t=e.gridData,n=void 0===t?[[]]:t,a=e.gridState,i=void 0===a?[[]]:a,l=e.onCellClick,o=window.innerHeight-400,c=window.innerWidth,u=Math.min(o,c);return r.a.createElement(P.a,{cellRenderer:function(e){var t=e.key,a=e.rowIndex,o=e.columnIndex,c=e.style;return r.a.createElement(A,{key:t,style:c,minesCount:n[a][o],state:i[a][o],corX:o,corY:a,onClick:l})},columnCount:n[0].length,rowCount:n.length,columnWidth:30,rowHeight:30,height:u,width:u,style:{margin:"0 auto"}})},J={mode:N,flags:new Map,settings:W,gridData:[[]],gridState:[[]],isShiftDown:!1,isVirtualGrid:!0},$="new_game",q="shift_down",K="game_mode",Q="cell_click",U="toggle_virtual",Z=function(e,t){var n=t.type,a=t.payload;switch(n){case q:return Object(j.a)(Object(j.a)({},e),{},{isShiftDown:a});case $:var r=a||e.settings,i=L(r),l=Object(E.a)(i,2),o=l[0],c=l[1],u=Object(j.a)(Object(j.a)({},J),{},{settings:r,gridData:o,gridState:c});if(r.isSuperman){var d=c.map((function(e){return e.fill(x)}));return Object(j.a)(Object(j.a)({},u),{},{gridState:d})}return u;case K:return Object(j.a)(Object(j.a)({},e),{},{mode:a});case Q:var s=Object(E.a)(a,2),m=s[0],f=s[1],h=e.flags,g=e.gridData,p=e.gridState,b=e.settings,v=e.isShiftDown;if(e.mode!==N)return e;if(!v&&p[f][m]===z)return e;if(v){var w=p[f][m]===z;if(!w&&h.size===b.mines)return alert("Cant add any more flags"),e;var y=function(e){var t=e.flags,n=void 0===t?new Map:t,a=e.gridState,r=void 0===a?[[]]:a,i=e.isFlagRemoved,l=Object(E.a)(e.cordinates,2),o=l[0],c=l[1],u=r.map((function(e){return Object(M.a)(e)})),d=new Map(n),s=T([o,c]);return i?(d.delete(s,[o,c]),u[c][o]=F):(d.set(s,[o,c]),u[c][o]=z),{newGridState:u,newFlagsState:d}}({flags:h,gridState:p,isFlagRemoved:w,cordinates:[m,f]}),O=y.newGridState,C=y.newFlagsState;return Object(j.a)(Object(j.a)({},e),{},{flags:C,gridState:O})}var k=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],t=arguments.length>1?arguments[1]:void 0,n=t.gridData,a=t.gridState,r=t.settings,i=a.map((function(e){return Object(M.a)(e)})),l=new Map,o=function(){var t=[];e.forEach((function(e){var a=Object(E.a)(e,2),o=a[0],c=a[1];if(i[c][o]=x,!(n[c][o]>0)){var u=H([o,c],{gridState:i,settings:r}),d=u.filter((function(e){return!l.has(T(e))}));t.push.apply(t,Object(M.a)(d)),u.forEach((function(e){return l.set(T(e),!0)}))}})),e=t};e.length>0;)o();return i}([[m,f]],e),S=g[f][m]===1/0;return S&&alert("You Lost"),Object(j.a)(Object(j.a)({},e),{},{gridState:k,mode:S?G:N});case U:return Object(j.a)(Object(j.a)({},e),{},{isVirtualGrid:!e.isVirtualGrid});default:return e}},ee=function(){var e=Object(a.useReducer)(Z,J),t=Object(E.a)(e,2),n=t[0],i=t[1],l=n.flags,o=n.gridData,c=n.gridState,u=n.settings,d=n.mode,s=n.isVirtualGrid,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=R(e),n=Object(E.a)(t,2),a=n[0],r=n[1];a?alert(a):i({type:$,payload:r})};Object(a.useEffect)(m,[]),Object(a.useEffect)((function(){l.size===u.mines&&(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[]];return Array.from(e.values()).every((function(e){var n=Object(E.a)(e,2),a=n[0],r=n[1];return t[r][a]===1/0}))}(l,o)&&(alert("You Won"),i({type:K,payload:D})))}),[l.size,u.mines]);var f=function(e,t){i({type:Q,payload:[e,t]})},h=function(e){"Shift"===e.key&&i({type:q,payload:!0})},g=function(e){"Shift"===e.key&&i({type:q,payload:!1})};return Object(a.useEffect)((function(){return window.addEventListener("keydown",h),window.addEventListener("keyup",g),function(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",h)}}),[]),r.a.createElement(C,null,r.a.createElement(Y,{usedFlags:l.size,mines:u.mines,mode:d,onNewGame:m,toggleVirtual:function(){return i({type:U})},isVirtual:s}),s?r.a.createElement(X,{gridData:o,gridState:c,onCellClick:f}):r.a.createElement(B,{width:u.width,gridData:o,gridState:c,onCellClick:f}))},te=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:b},r.a.createElement(ee,null)),r.a.createElement(o.a,{path:p},r.a.createElement(y,null)))};l.a.render(r.a.createElement(o.b,{history:w},r.a.createElement(te,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e131cf1f.chunk.js.map