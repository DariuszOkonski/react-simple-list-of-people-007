(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(19)},,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(2),c=a.n(r),i=(a(14),a(3)),u=a(4),s=a(6),m=a(5),o=a(7),f=(a(15),a(16),function(e){return l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{onClick:function(){return e.click("all")}},"All"),l.a.createElement("button",{onClick:function(){return e.click("female")}},"Women"),l.a.createElement("button",{onClick:function(){return e.click("male")}},"Man"))}),d=(a(17),function(){return l.a.createElement("h1",{className:"header"},"List of people")}),p=(a(18),function(e){var n=e.person,a=n.name,t=n.age,r=n.sex;return l.a.createElement("div",{className:"singelPersonDisplay"},l.a.createElement("h3",null,a),l.a.createElement("h4",null,"User's information:"),l.a.createElement("p",null,"Age: ",l.a.createElement("span",null,t)),l.a.createElement("p",null,"Sex: ",l.a.createElement("span",null,r)))}),E=[{id:1,name:"Angelina",age:45,sex:"female"},{id:2,name:"Brad",age:54,sex:"male"},{id:3,name:"Edward",age:45,sex:"male"},{id:4,name:"Becky",age:27,sex:"female"},{id:5,name:"Jessica",age:36,sex:"female"},{id:6,name:"Mark",age:27,sex:"male"},{id:7,name:"Paul",age:36,sex:"male"},{id:8,name:"Lisa",age:24,sex:"female"},{id:9,name:"John",age:39,sex:"male"},{id:10,name:"Andrew",age:47,sex:"male"}],h=function(e){function n(){var e,a;Object(i.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={sex:"all"},a.handleClick=function(e){a.setState({sex:e})},a.showPeople=function(){switch(a.state.sex){case"all":return E.map(function(e){return l.a.createElement(p,{key:e.id,person:e})});case"female":return E.filter(function(e){return"female"===e.sex}).map(function(e){return l.a.createElement(p,{key:e.id,person:e})});case"male":return E.filter(function(e){return"male"===e.sex}).map(function(e){return l.a.createElement(p,{key:e.id,person:e})});default:return l.a.createElement("h1",null,"No data found")}},a}return Object(o.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(d,null),l.a.createElement(f,{click:this.handleClick}),this.showPeople())}}]),n}(t.Component);c.a.render(l.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.fa31182e.chunk.js.map