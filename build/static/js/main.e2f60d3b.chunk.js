(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),l=n(39),c=(n(31),n(4)),u=c.a.button.withConfig({displayName:"Button__Btn",componentId:"sc-1guv9ys-0"})(["display:block;height:3rem;padding:0.5rem 2rem;border-left:solid 6px var(--main-color);color:var(--main-color);font-weight:bold;:disabled{cursor:not-allowed;color:#b5b5b5;background-color:#e6e6e6;}:active{transform:translateY(2px);}"]),d=function(e){var t=e.label,n=e.onClick,a=e.disabled,i=void 0!==a&&a,o=e.type,l=void 0===o?"button":o,c=e.style;return r.a.createElement(u,{onClick:n,disabled:i,type:l,style:c},t)};d.defaultProps={onClick:function(){}};var s=n(25),m=c.a.input.withConfig({displayName:"Input",componentId:"jvejwz-0"})(["padding:0 1.5rem;height:2.5rem;width:5rem;::placeholder{color:#ababab;}:disabled{color:#c7c7c7;background-color:#f6f6f6;}"]),f=c.a.label.withConfig({displayName:"Input__FieldLabel",componentId:"jvejwz-1"})(["display:block;padding:0;margin:0;"]),h=c.a.span.withConfig({displayName:"Input__FieldTitle",componentId:"jvejwz-2"})(["display:block;margin-bottom:1rem;font-weight:500;font-size:14px;color:#494949;"]),p=function(e){var t=e.title,n=Object(s.a)(e,["title"]);return r.a.createElement(f,null,t&&r.a.createElement(h,null,t),r.a.createElement(m,n))},g="",b="/play",v=n(7),w=Object(v.a)(),y=function(){var e=Object(l.d)();return r.a.createElement("div",{style:{padding:"3rem"}},r.a.createElement("h1",null,"Welcome to Minesweeper"),r.a.createElement("p",{style:{maxWidth:"80rem"}},"If you're a Windows' user chances are that you already have the game on your computer. This guide will help you in completing your first game. The rule of the game is simple, the number on a block shows the number of mines adjacent to it and you have to flag all the mines."),r.a.createElement("h4",null,"Few Game Rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Flag:")," Put a flag in a zone when you have confirmed that there is a mine."),r.a.createElement("li",null,r.a.createElement("strong",null,"Superman:")," Play new game with all cells revealed!"),r.a.createElement("li",null,r.a.createElement("strong",null,"Rest:")," Click it if you want to reset the game")),r.a.createElement("a",{href:"https://www.instructables.com/id/How-to-play-minesweeper/",rel:"noopener noreferrer",target:"_blank"},"For more information about Minesweeper"),r.a.createElement(d,{label:"Click to start playing",style:{marginTop:"2rem"},onClick:function(){return e.push(b)}}),r.a.createElement("p",{style:{marginTop:"2rem"}},"Made by Eylon Mizrahi"))},j=n(2),E=n(1),O=n(9),S=c.a.div.withConfig({displayName:"styled__GameLayout",componentId:"sc-8didco-0"})([""]),C=c.a.div.withConfig({displayName:"styled__ControlsLayout",componentId:"sc-8didco-1"})(["width:40rem;margin:5rem auto;"]),k=c.a.div.withConfig({displayName:"styled__StyledControls",componentId:"sc-8didco-2"})(["display:flex;justify-content:space-around;margin-bottom:2rem;"]),_=c.a.div.withConfig({displayName:"styled__StyledGrid",componentId:"sc-8didco-3"})(["display:grid;grid-template-columns:repeat(",",auto);justify-content:center;overflow:scroll;"],(function(e){return e.width})),M=c.a.button.withConfig({displayName:"styled__StyledCell",componentId:"sc-8didco-4"})(["width:3rem;height:3rem;text-align:center;border:1px solid black;background-color:",";opacity:",";"],(function(e){return e.color}),(function(e){return e.$revealed?.5:.8})),I=n(8),N="playing",F="lost",z="won",D=1,G=0,x=-1,L={width:10,height:10,mines:5,isSuperman:!1},R=function(e){var t=function(e){var t=e.width,n=e.height,a=e.mines,r=e.isSuperman;return{width:Number(t),height:Number(n),mines:Number(a),isSuperman:r}}(e),n=t.width,a=t.height,r=t.mines;return[!(n>0&&n<=300&&(a>0&&a<=300)&&(r>0&&r<=9e4&&r<=n*a))&&"Allowed Settings: Height, Width up to 300, mines up to 90,000",{width:n,height:a,mines:r,isSuperman:t.isSuperman}]},W=function(e,t){var n=Object(j.a)(e,2),a=n[0],r=n[1],i=t.width,o=t.height;return[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].reduce((function(e,t){var n=Object(j.a)(t,2),l=n[0],c=n[1],u=a+l,d=r+c;return u>=0&&u<i&&(d>=0&&d<o)?[].concat(Object(I.a)(e),[[u,d]]):e}),[])},T=function(e){var t=function(e){var t=e.width,n=e.height,a=Array(t).fill(0);return Array(n).fill(null).map((function(){return Object(I.a)(a)}))}(e),n=t.map((function(e){return Object(I.a)(e)}));return[function(e,t,n){var a=t.map((function(e){return Object(I.a)(e)}));return e.forEach((function(e){var t=Object(j.a)(e,2),r=t[0],i=t[1];a[i][r]=1/0,W([r,i],n).forEach((function(e){var t=Object(j.a)(e,2),n=t[0],r=t[1];return a[r][n]+=1}))})),a}(function(e){for(var t=e.width,n=e.height,a=e.mines,r=[],i={};r.length<a;){var o=Math.floor(Math.random()*t),l=Math.floor(Math.random()*n);i[o]&&i[o][l]||(i[o]=Object(E.a)(Object(E.a)({},i[o]),{},Object(O.a)({},l,!0)),r.push([o,l]))}return r}(e),t,e),n]},A=function(e,t){var n=Object(j.a)(e,2),a=n[0],r=n[1],i=t.gridState,o=t.settings;return W([a,r],o).filter((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1],r=i[a][n]===G,o=i[a][n]===x;return r&&!o}))},Y=function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1];return.5*(n+a)*(n+a+1)+a},H=function(e){var t=e.mode,n=void 0===t?N:t,i=e.onNewGame,o=e.usedFlags,c=void 0===o?0:o,u=e.mines,s=void 0===u?0:u,m=Object(l.d)(),f=Object(a.useState)(L),h=Object(j.a)(f,2),b=h[0],v=h[1],w=function(e,t){v(Object(E.a)(Object(E.a)({},b),{},Object(O.a)({},t,e.target.value)))};return r.a.createElement(C,null,r.a.createElement(k,null,r.a.createElement(p,{onChange:function(e){return w(e,"width")},placeholder:"Grid Width",title:"Width:",value:b.width}),r.a.createElement(p,{onChange:function(e){return w(e,"height")},placeholder:"Grid Height",title:"Height:",value:b.height}),r.a.createElement(p,{onChange:function(e){return w(e,"mines")},placeholder:"Mines Amount",title:"Mines:",value:b.mines})),r.a.createElement(k,null,r.a.createElement(d,{label:"Rules",onClick:function(){return m.push(g)},disabled:n===N}),r.a.createElement(d,{label:"Superman",onClick:function(){return i(Object(E.a)(Object(E.a)({},b),{},{isSuperman:!0}))}}),r.a.createElement(d,{label:"Reset",onClick:function(){return i(b)}})),r.a.createElement(k,null,r.a.createElement("div",null,r.a.createElement("span",null,"".concat(s-c,"  \ud83d\udea9 Remaining"))),r.a.createElement("div",null,r.a.createElement("span",null,"".concat(s," \ud83d\udca3 Total")))))},B=r.a.memo((function(e){var t=e.minesCount,n=e.state,a=e.corX,i=e.corY,o=e.onClick;return r.a.createElement(M,{onClick:function(){return o(a,i)},disabled:n===D,color:n===D&&t===1/0?"red":"grey",$revealed:n===D},r.a.createElement("span",{style:{color:t>1?"red":"white",fontWeight:600}},function(e,t){switch(t){case x:return"\ud83d\udea9";case D:return e===1/0?"\ud83d\udca3":e||"";default:return""}}(t,n)))}),(function(e,t){return e.state===t.state&&e.minesCount===t.minesCount})),P=function(e){var t=e.gridData,n=void 0===t?[[]]:t,a=e.gridState,i=void 0===a?[[]]:a,o=e.width,l=e.onCellClick,c=n.map((function(e,t){return e.map((function(e,n){return r.a.createElement(B,{key:"".concat(n,"-").concat(t),minesCount:e,state:i[t][n],corX:n,corY:t,onClick:l})}))}));return r.a.createElement(_,{width:o},c)},J={mode:N,flags:new Map,settings:L,gridData:[[]],gridState:[[]],isShiftDown:!1},X="new_game",$="shift_down",q="game_mode",K="cell_click",Q=function(e,t){var n=t.type,a=t.payload;switch(n){case $:return Object(E.a)(Object(E.a)({},e),{},{isShiftDown:a});case X:var r=a||e.settings,i=T(r),o=Object(j.a)(i,2),l=o[0],c=o[1],u=Object(E.a)(Object(E.a)({},J),{},{settings:r,gridData:l,gridState:c});if(r.isSuperman){var d=c.map((function(e){return e.fill(D)}));return Object(E.a)(Object(E.a)({},u),{},{gridState:d})}return u;case q:return Object(E.a)(Object(E.a)({},e),{},{mode:a});case K:var s=Object(j.a)(a,2),m=s[0],f=s[1],h=e.flags,p=e.gridData,g=e.gridState,b=e.settings,v=e.isShiftDown;if(e.mode!==N)return e;if(!v&&g[f][m]===x)return e;if(v){var w=g[f][m]===x;if(!w&&h.size===b.mines)return alert("Cant add any more flags"),e;var y=function(e){var t=e.flags,n=void 0===t?new Map:t,a=e.gridState,r=void 0===a?[[]]:a,i=e.isFlagRemoved,o=Object(j.a)(e.cordinates,2),l=o[0],c=o[1],u=r.map((function(e){return Object(I.a)(e)})),d=new Map(n),s=Y([l,c]);return i?(d.delete(s,[l,c]),u[c][l]=G):(d.set(s,[l,c]),u[c][l]=x),{newGridState:u,newFlagsState:d}}({flags:h,gridState:g,isFlagRemoved:w,cordinates:[m,f]}),O=y.newGridState,S=y.newFlagsState;return Object(E.a)(Object(E.a)({},e),{},{flags:S,gridState:O})}var C=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],t=arguments.length>1?arguments[1]:void 0,n=t.gridData,a=t.gridState,r=t.settings,i=a.map((function(e){return Object(I.a)(e)})),o=new Map,l=function(){var t=[];e.forEach((function(e){var a=Object(j.a)(e,2),l=a[0],c=a[1];if(i[c][l]=D,!(n[c][l]>0)){var u=A([l,c],{gridState:i,settings:r}),d=u.filter((function(e){return!o.has(Y(e))}));t.push.apply(t,Object(I.a)(d)),u.forEach((function(e){return o.set(Y(e),!0)}))}})),e=t};e.length>0;)l();return i}([[m,f]],e),k=p[f][m]===1/0;return k&&alert("You Lost"),Object(E.a)(Object(E.a)({},e),{},{gridState:C,mode:k?F:N});default:return e}},U=function(){var e=Object(a.useReducer)(Q,J),t=Object(j.a)(e,2),n=t[0],i=t[1],o=n.flags,l=n.gridData,c=n.gridState,u=n.settings,d=n.mode,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=R(e),n=Object(j.a)(t,2),a=n[0],r=n[1];a?alert(a):i({type:X,payload:r})};Object(a.useEffect)(s,[]),Object(a.useEffect)((function(){o.size===u.mines&&(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Map,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[]];return Array.from(e.values()).every((function(e){var n=Object(j.a)(e,2),a=n[0],r=n[1];return t[r][a]===1/0}))}(o,l)&&(alert("You Won"),i({type:q,payload:z})))}),[o.size,u.mines]);var m=function(e){"Shift"===e.key&&i({type:$,payload:!0})},f=function(e){"Shift"===e.key&&i({type:$,payload:!1})};return Object(a.useEffect)((function(){return window.addEventListener("keydown",m),window.addEventListener("keyup",f),function(){window.removeEventListener("keydown",m),window.removeEventListener("keyup",m)}}),[]),r.a.createElement(S,null,r.a.createElement(H,{usedFlags:o.size,mines:u.mines,mode:d,onNewGame:s}),r.a.createElement(P,{width:u.width,gridData:l,gridState:c,onCellClick:function(e,t){i({type:K,payload:[e,t]})}}))},V=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:b},r.a.createElement(U,null)),r.a.createElement(l.a,{path:g},r.a.createElement(y,null)))};o.a.render(r.a.createElement(l.b,{history:w},r.a.createElement(V,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e2f60d3b.chunk.js.map