(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(20)},20:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(10),o=a.n(r),i=(a(9),a(6)),c=a(1),l=a(2),u=a(4),d=a(3),k=a(5),m=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).removeTask=function(t){var e=Object(i.a)(a.props.taskState.tasks),n=a.props.title,s=e.filter(function(t){return!(t.title===n)});a.props.initTask(s)},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("button",{className:"task-list-button",title:this.props.title,onClick:this.removeTask},"\uc81c\uac70")}}]),e}(n.Component),h=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).changeStatus=function(t){var e=Object(i.a)(a.props.taskState.tasks),n=a.props.taskState.bTodo,s=a.props.title,r=e.map(function(t){return t.title===s?(t.status=n?"done":"todo",t):t});a.props.initTask(r)},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("button",{className:"task-list-button",title:this.props.title,onClick:this.changeStatus},this.props.taskState.bTodo?"->":"<-")}}]),e}(n.Component),p=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).handleEnterKeyPress=function(t){"Enter"===t.key&&a.addTask()},a.handleChange=function(t){a.props.handleChangeWord(t.target.value)},a.addTask=function(t){var e=Object(i.a)(a.props.taskState.tasks),n=a.props.taskState.IDNum;e.some(function(t){return t.title===a.props.taskState.word})||(e.push({title:"".concat(a.props.taskState.word),id:"".concat(n),status:"todo"}),a.props.initTask(e))},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("span",null,s.a.createElement("input",{className:"add-todo-inputer",value:this.props.taskState.word,onChange:this.handleChange,onKeyPress:this.handleEnterKeyPress}),s.a.createElement("button",{className:"add-todo-inputer-button",onClick:this.addTask},"\uc785\ub825"))}}]),e}(n.Component),b=function(t){return s.a.createElement("button",{className:t.className,onClick:t.handleBFolded},"\uc811\uae30")},f=function(t){return null===t.taskState.tasks?s.a.createElement("div",{className:"alarm"},"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694."):t.taskState.tasks.some(function(e){return e.title===t.taskState.word})?s.a.createElement("div",{className:"alarm"},"\uac19\uc740 \ud560 \uc77c\uc740 \ubcf4\ud1b5 \ub450\ubc88\ud558\uc9c0 \uc54a\uc8e0."):s.a.createElement("div",{className:"alarm"})},v=function(t){return s.a.createElement("div",{className:"task"},t.taskState.tasks.map(function(e,a){return"done"===e.status?s.a.createElement("div",{key:a}):s.a.createElement("li",{key:a,className:"task-list"},e.title,s.a.createElement(h,{title:e.title,initTask:t.initTask,taskState:t.taskState}),s.a.createElement(m,{title:e.title,initTask:t.initTask,taskState:t.taskState}))}))},E=function(t){return s.a.createElement("div",{className:"task"},t.taskState.tasks.map(function(e,a){return"todo"===e.status?s.a.createElement("div",{key:a}):s.a.createElement("li",{key:a,className:"task-list"},e.title,s.a.createElement(h,{title:e.title,initTask:t.initTask,taskState:t.taskState}),s.a.createElement(m,{title:e.title,initTask:t.initTask,taskState:t.taskState}))}))},S=function(t){return s.a.createElement("div",{className:"loading"})},T=function(t){return s.a.createElement("div",{className:"add-todo"},"\ud560\uc77c \uc785\ub825:",s.a.createElement(p,{taskState:t.taskState,initTask:t.initTask,handleChangeWord:t.handleChangeWord}),s.a.createElement(f,{taskState:t.taskState}))},j=function(t){var e=["todo-list-container"];return t.taskState.bFolded||(e=["hide","todo-list-container"]),s.a.createElement("div",{className:e.join(" ")},"\ud574\uc57c\ud560 \uc77c\ub4e4",s.a.createElement(b,{className:"todo-list-hide-button",handleBFolded:t.handleBFolded}),s.a.createElement(N,{handleBTodo:t.handleBTodo,taskState:t.taskState}),s.a.createElement("div",{className:"todo-list"},null===t.taskState.tasks?s.a.createElement(S,null):t.taskState.bTodo?s.a.createElement(v,{taskState:t.taskState,initTask:t.initTask}):s.a.createElement(E,{taskState:t.taskState,initTask:t.initTask})))},N=function(t){return s.a.createElement("button",{className:"todo-list-nav-button",onClick:t.handleBTodo},t.taskState.bTodo?"\ud560 \uc77c":"\ud55c \uc77c")},O=a(7),y=a.n(O),w=a(11),g=function(){var t=Object(w.a)(y.a.mark(function t(e){var a,n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return C((a=t.sent).status),t.next=7,a.json();case 7:return n=t.sent,t.abrupt("return",n);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",{tasks:[{title:"".concat(t.t0),id:1233,status:"todo"}]});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}();function C(t){if(400<=t&&t<500)throw new Error("\uc798\ubabb\ub41c \uc694\uccad\uc785\ub2c8\ub2e4.");if(500<=t)throw new Error("\uc11c\ubc84\uac00 \ubd88\uc548\uc815\ud569\ub2c8\ub2e4.")}var B=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(k.a)(e,t),Object(l.a)(e,[{key:"getTaskNum",value:function(t,e){if(null!==e)return e.filter(function(e){return e.status===t}).length}},{key:"render",value:function(){return s.a.createElement("div",{className:"status-board-container"},s.a.createElement("div",{className:"status-board"},s.a.createElement("span",{className:"status-board-content"},"\ud560 \uc77c : ",this.getTaskNum("todo",this.props.tasks))),s.a.createElement("div",{className:"status-board"},s.a.createElement("span",{className:"status-board-content"},"\ud55c \uc77c : ",this.getTaskNum("done",this.props.tasks))))}}]),e}(n.Component),F=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).initTask=function(t){var e=a.state.IDNum;a.setState({IDNum:e+1,tasks:t,word:""})},a.handleChangeWord=function(t){a.setState({word:t})},a.handleBFolded=function(t){var e=a.state.bFolded;a.setState({bFolded:!e})},a.handleBTodo=function(t){var e=a.state.bTodo;a.setState({bTodo:!e})},a.state={IDNum:0,tasks:[],word:"",bFolded:!0,bTodo:!0},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;g("https://javascript-web-todo-server.herokuapp.com/").then(function(e){t.initTask(e.tasks)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"todo-app-conatiner"},s.a.createElement(B,{tasks:Object(i.a)(this.state.tasks)}),s.a.createElement(T,{taskState:this.state,initTask:this.initTask,handleChangeWord:this.handleChangeWord}),s.a.createElement(j,{taskState:this.state,handleBFolded:this.handleBFolded,handleBTodo:this.handleBTodo,initTask:this.initTask}))}}]),e}(n.Component);o.a.render(s.a.createElement(F,null),document.getElementById("root"))},9:function(t,e,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.149b3e12.chunk.js.map