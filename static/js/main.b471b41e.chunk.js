(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(23)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(15),n(2)),l=n(3),s=n(5),u=n(4),h=n(6),d=n(9),f=n(1),p=(n(17),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe(this.props.coord)}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component));n(19);var b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n.flipCellsAround=n.flipCellsAround.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"checkIfBoardIsWinnable",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=!0;e.forEach(function(e){e.filter(function(e){return!0===e}).length%2!==0&&(r=!1)});for(var o=0;o<n;o++){for(var c=0,i=0;i<a;i++)!0===e[i][o]&&c++;c%2!==0&&(r=!1)}return r}},{key:"createBoard",value:function(){for(var e,t=this.props,n=t.ncols,a=t.nrows,r=t.chanceLightStartsOn,o=[],c=0;c<a;c++){o[c]=[];for(var i=0;i<n;i++)o[c][i]=(e=r,!(Math.random()<e))}return this.checkIfBoardIsWinnable(o)||(o=this.createBoard()),o}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=this.state.hasWon,c=e.split("-").map(Number),i=Object(d.a)(c,2),l=i[0],s=i[1];function u(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}u(l,s),u(l+1,s),u(l-1,s),u(l,s+1),u(l,s-1),r.flat().includes(!0)||(o=!0),this.setState({board:r,hasWon:o})}},{key:"render",value:function(){var e=this,t=this.state.board.map(function(t,n){return r.a.createElement("tr",{key:n},t.map(function(t,a){var o="".concat(n,"-").concat(a);return r.a.createElement(p,{isLit:t,key:o,coord:o,flipCellsAroundMe:e.flipCellsAround})}))});return r.a.createElement("div",{className:"Board"},this.state.hasWon?r.a.createElement("p",{className:"Board-win-msg"},"You win!"):r.a.createElement("table",null,r.a.createElement("tbody",null,t)))}}]),t}(a.Component);b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.5};var m=b,v=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-tile"},"Lights Out"),r.a.createElement(m,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.b471b41e.chunk.js.map