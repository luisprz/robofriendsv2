(this.webpackJsonprobofriendsv2=this.webpackJsonprobofriendsv2||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(14),u=n(15);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28);var d=n(3),h=n(4),m=n(7),p=n(6),E=n(16),b=n.n(E),g=(n(29),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-light-green dib br3 pa3 ma2 shadow-3",type:"search",placeholder:"Search for robots",onChange:t}))}),f=function(e){e.username,e.email;var t=e.id,n=e.name;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-3"},r.a.createElement("div",null,r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"}")}),r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("p",null,n))))},v=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(f,{key:t[n].id,id:t[n].id,username:t[n].username,email:t[n].email,name:t[n].name})})))},O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"550px"}},e.children)},S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"that is not good"):this.props.children}}]),n}(a.Component),R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,a=e.onSearchChange,o=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return console.log(c),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robofriends"),r.a.createElement(g,{searchChange:a})," ",r.a.createElement(O,null,o?r.a.createElement("h1",null,"Loading"):r.a.createElement(S,null,r.a.createElement(v,{robots:c})," "))),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"tc bg-black dib br3 pa3 ma2 grow shadow-3"},"Luis Perez"))))}}]),n}(a.Component),y=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),j={searchField:""},w={robots:[],isPending:!0},C=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(i.d)(_,Object(i.a)(u.a,C));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:N},r.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8818634a.chunk.js.map