(this.webpackJsonponline_made_easy=this.webpackJsonponline_made_easy||[]).push([[0],[,,,,,,,,,,function(t,e,n){},,,,,,,function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),i=n(11),a=n.n(i),r=(n(17),n(2)),o=(n(18),n(10),n.p+"static/media/meditationBackground.66c56280.jpg"),l=n.p+"static/media/play-button.90ff39d9.png",u=n.p+"static/media/background_music.a78ba760.mp3",j=n(5),d=n(6),b=n(8),h=n(7),p=n.p+"static/media/stop_button.8de09fc4.png",m=n(0),f=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(j.a)(this,n),(s=e.call(this,t)).stopInterval=function(){s.props.stop()},s.state={timeLeft:60*t.duration()},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.setState({timeLeft:t.state.timeLeft-1})}),1e3)}},{key:"componentDidUpdate",value:function(){-1===this.state.timeLeft&&(clearInterval(this.interval),window.confirm("Congratulations for finishing this session! You just earned 5 tokens!"),this.props.stop()),console.log("OK")}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this,e=this.state.timeLeft,n=Math.floor(e/60).toString(),s=(e-60*n).toString();return 1===n.length&&(n="0"+n),1===s.length&&(s="0"+s),Object(m.jsxs)("div",{className:"timer",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Close your eyes and focus on your breathing..."}),Object(m.jsx)("p",{children:"Let go of any tension in your body and clear your mind."})]}),Object(m.jsxs)("div",{style:{lineHeight:"0.01",textAlign:"center"},children:[Object(m.jsxs)("p",{style:{fontSize:"60px"},children:[n,":",s]}),Object(m.jsx)("button",{onClick:function(){return t.stopInterval()},style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},children:Object(m.jsx)("img",{src:p,alt:"stop_button",height:"30px"})})]})]})}}]),n}(c.a.Component);n(20);var x=function(t){var e=Object(s.useState)(new Audio(u)),n=Object(r.a)(e,1)[0],c=Object(s.useState)(!1),i=Object(r.a)(c,2),a=i[0],j=i[1],d=Object(s.useState)(3),b=Object(r.a)(d,2),h=b[0],p=b[1],x=Object(s.useState)(!1),O=Object(r.a)(x,2),v=O[0],g=O[1];return Object(s.useEffect)((function(){return n.addEventListener("ended",(function(){return j(!1)})),function(){n.removeEventListener("ended",(function(){return j(!1)})),n.pause(),n.currentTime=0}}),[]),Object(s.useEffect)((function(){v&&a?n.play():(n.pause(),n.currentTime=0)}),[a]),Object(m.jsxs)("div",{className:"meditationwidget shadow-5",children:[Object(m.jsx)("button",{className:"close",onClick:t.close,children:"X"}),Object(m.jsx)("img",{style:{borderRadius:"30px"},height:"300px",src:o,alt:"background"}),Object(m.jsx)("h2",{style:{position:"absolute",top:"0px",left:"30%",color:"#1d3340",fontSize:"40px"},children:"Meditation"}),!a&&Object(m.jsxs)("div",{className:"duration",children:[Object(m.jsx)("p",{children:"Duration"}),Object(m.jsx)("input",{type:"number",min:"3",max:"10",pattern:"[0-9]*",value:h,onChange:function(t){return p(t.target.value)}}),Object(m.jsx)("p",{children:"MINUTES"})]}),a?Object(m.jsx)(f,{duration:function(){return 0===h||h<3?3:h>100?10:h},stop:function(){j(!1),g(!1)}}):Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("button",{className:"startButton",onClick:function(){return j(!0)},children:Object(m.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)("img",{src:l,alt:"play button",style:{height:"70px"}}),Object(m.jsx)("span",{style:{fontSize:"50px",color:"white"},children:"START"})]})})}),!a&&Object(m.jsxs)("div",{style:{position:"absolute",top:"80%",left:"35%"},children:[Object(m.jsx)("input",{type:"checkbox",id:"check_sounds",onChange:function(){return g(!v)}}),Object(m.jsx)("label",{for:"check_sounds",style:{color:"white"},children:" Meditate with Nature Sounds"})]})]})},O=(n(21),function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(j.a)(this,n),(s=e.call(this,t)).state={cycles:0,timeLeft:1500,play:!1,timeState:"Work"},s}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n=this;!0===this.state.play&&!1===e.play?this.interval=setInterval((function(){n.setState({timeLeft:n.state.timeLeft-1})}),1e3):!1===this.state.play&&!0===e.play?clearInterval(this.interval):0===this.state.timeLeft&&("Work"===this.state.timeState?(clearInterval(this.interval),this.setState({timeLeft:299,timeState:"Break"}),this.interval=setInterval((function(){n.setState({timeLeft:n.state.timeLeft-1})}),1e3)):"Break"===this.state.timeState&&(clearInterval(this.interval),this.setState({timeLeft:1499,timeState:"Work",cycles:this.state.cycles+1}),this.interval=setInterval((function(){n.setState({timeLeft:n.state.timeLeft-1})}),1e3)))}},{key:"render",value:function(){var t=this,e=this.state.timeLeft,n=Math.floor(e/60).toString(),s=(e-60*n).toString();return 1===s.length&&(s="0"+s),Object(m.jsxs)("div",{className:"pomodorowidget shadow-5",children:[Object(m.jsx)("button",{className:"close",onClick:this.props.close,children:"X"}),Object(m.jsx)("div",{style:{position:"relative"},children:Object(m.jsx)("h2",{style:{color:"#691e10",fontSize:"40px",margin:"20px",marginTop:"60px",textAlign:"center"},children:"Pomodoro Timer"})}),Object(m.jsxs)("div",{style:{margin:"20px",display:"inline-block"},children:[Object(m.jsx)("p",{className:"sectionTitle shadow-5",children:"Work"}),"Work"===this.state.timeState?Object(m.jsxs)("p",{className:"timers",children:[n,":",s]}):Object(m.jsx)("p",{className:"timers",children:"25:00"}),Object(m.jsx)("button",{className:"controls",onClick:function(){return t.setState({play:!0})},children:"Start"})]}),Object(m.jsxs)("div",{style:{margin:"20px",display:"inline-block"},children:[Object(m.jsx)("p",{className:"sectionTitle shadow-5",children:"Cycles"}),Object(m.jsx)("p",{className:"timers",children:this.state.cycles}),Object(m.jsx)("button",{className:"controls",onClick:function(){return t.setState({play:!1})},children:"Pause"})]}),Object(m.jsxs)("div",{style:{margin:"20px",display:"inline-block"},children:[Object(m.jsx)("p",{className:"sectionTitle shadow-5",children:"Break"}),"Break"===this.state.timeState?Object(m.jsxs)("p",{className:"timers",children:[n,":",s]}):Object(m.jsx)("p",{className:"timers",children:"5:00"}),Object(m.jsx)("button",{className:"controls",onClick:function(){return t.setState({play:!1,timeLeft:1500,timeState:"Work",cycles:0})},children:"Reset"})]})]})}}]),n}(c.a.Component)),v=(n(22),n.p+"static/media/inspirationalbackground.363691af.jpeg");var g=function(t){var e=Object(s.useState)([]),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(s.useState)(Math.floor(1500*Math.random())),o=Object(r.a)(a,1)[0];return Object(s.useEffect)((function(){fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(t){i(t)}))}),[]),Object(s.useEffect)((function(){}),[o]),Object(m.jsxs)("div",{className:"quoteswidget shadow-5",style:{backgroundImage:"url(".concat(v,")"),backgroundSize:"400px 300px"},children:[Object(m.jsx)("button",{className:"close",onClick:t.close,children:"X"}),Object(m.jsxs)("div",{style:{position:"relative",top:"0%"},children:[Object(m.jsx)("h2",{style:{color:"#fffcde",fontSize:"30px",margin:"20px",marginTop:"60px",textAlign:"center"},children:"Inspirational Quotes"}),Object(m.jsxs)("div",{className:"quote",children:[Object(m.jsx)("p",{style:{fontStyle:"italic",fontWeight:"bold"},children:c.length&&c[o].text}),Object(m.jsx)("p",{children:c.length&&c[o].author})]})]})]})},y=n(12);n(23);var k=function(t){var e=Object(s.useState)([]),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(s.useState)("all"),o=Object(r.a)(a,2),l=o[0],u=o[1],j=Object(s.useState)(""),d=Object(r.a)(j,2),b=d[0],h=d[1],p=Object(y.a)(c),f=c.filter((function(t){return"active"===t.status})),x=c.filter((function(t){return"completed"===t.status}));function O(t,e){if(t.target.checked)for(var n=0;n<p.length;n++)p[n].name===e&&(p[n].status="completed");else if(!t.target.checked)for(var s=0;s<p.length;s++)p[s].name===e&&(p[s].status="active");i(p)}return Object(m.jsxs)("div",{className:"todowidget shadow-5",children:[Object(m.jsx)("button",{className:"close",onClick:t.close,children:"X"}),Object(m.jsx)("div",{style:{position:"relative",top:"0%"},children:Object(m.jsx)("h2",{style:{color:"#005e94",fontSize:"30px",margin:"20px",marginTop:"60px",textAlign:"center"},children:"To Do List"})}),Object(m.jsx)("div",{className:"inputs",children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){if(""===t.trim())return!1;for(var e=0;e<p.length;e++)if(p[e].name===t)return!1;return!0}(b)&&(p.push({name:b,status:"active"}),i(p),h(""))},children:[Object(m.jsx)("input",{style:{borderRadius:"20px",border:"none",margin:"6px",marginBottom:"30px",marginTop:"30px",height:"30px"},className:"shadow-3",type:"text",value:b,onChange:function(t){return h(t.target.value)},placeholder:"Enter a task..."}),Object(m.jsx)("input",{style:{backgroundColor:"#629dfc",border:"solid 2px",borderRadius:"20px"},type:"submit",value:"+"})]})}),Object(m.jsxs)("div",{className:"input_buttons",children:[Object(m.jsx)("button",{className:"i_button shadow-3",onClick:function(){return u("all")},children:"All tasks"}),Object(m.jsx)("button",{className:"i_button shadow-3",onClick:function(){return u("active")},children:"Active tasks"}),Object(m.jsx)("button",{className:"i_button shadow-3",onClick:function(){return u("completed")},children:"Completed tasks"})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[f.length," ",1!==f.length?" tasks":" task"," remaining"]})}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"tasks",children:Object(m.jsx)("ul",{children:("all"===l?c:"active"===l?f:"completed"===l?x:void 0).map((function(t){return"completed"===t.status?Object(m.jsxs)("li",{className:"task",children:[Object(m.jsx)("label",{children:t.name})," ",Object(m.jsx)("input",{type:"checkbox",onChange:function(e){O(e,t.name)},checked:!0})]},t.name):Object(m.jsxs)("li",{className:"task",children:[Object(m.jsx)("label",{children:t.name})," ",Object(m.jsx)("input",{type:"checkbox",onChange:function(e){O(e,t.name)}})]},t.name)}))})})]})};var S=function(){var t=Object(s.useState)(!0),e=Object(r.a)(t,2),n=e[0],c=e[1],i=Object(s.useState)(!0),a=Object(r.a)(i,2),o=a[0],l=a[1],u=Object(s.useState)(!0),j=Object(r.a)(u,2),d=j[0],b=j[1],h=Object(s.useState)(!0),p=Object(r.a)(h,2),f=p[0],v=p[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{style:{fontWeight:"900",fontSize:"60px"},children:"Online Made Easy"}),Object(m.jsx)("p",{style:{fontWeight:"400",fontSize:"30px"},children:"Your Dashboard"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[n&&Object(m.jsx)(x,{close:function(){return c(!1)}}),o&&Object(m.jsx)(O,{close:function(){return l(!1)}}),d&&Object(m.jsx)(g,{close:function(){return b(!1)}}),f&&Object(m.jsx)(k,{close:function(){return v(!1)}})]})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),N()}],[[24,1,2]]]);
//# sourceMappingURL=main.330192b5.chunk.js.map