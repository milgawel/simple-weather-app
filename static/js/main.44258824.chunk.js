(this.webpackJsonppogoda=this.webpackJsonppogoda||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/day.bdce5924.jpg"},16:function(e,t,n){e.exports=n.p+"static/media/night.aeda4e63.jpg"},18:function(e,t,n){e.exports=n(26)},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),c=(n(23),n(1)),u=n(3),l=n(4),s=n(6),m=n(5),f=n(7),h=n(2);function d(){var e=Object(c.a)(["\n  font-size: 1.5em;\n  background-color: #e95312;\n  width: 100px;\n  color: white;\n  border-radius: 1em;\n  border: 1px solid #e95312;\n  margin-left: 0.3em;\n  transition: 0.3s;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    color: #e95312;\n    background-color: #fff;\n  }\n"]);return d=function(){return e},e}function p(){var e=Object(c.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 1.4em;\n  padding: 0.3em 0.4em;\n  border-radius: 1em;\n  border: 2px solid #e95312;\n  outline: none;\n"]);return p=function(){return e},e}function g(){var e=Object(c.a)(["\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n"]);return g=function(){return e},e}var y=h.a.form(g()),v=h.a.input(p()),b=h.a.button(d()),x=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange=function(e){n.setState({value:e.target.value})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(y,{onSubmit:function(t){e.props.change(t,e.state.value),e.setState({value:""})}},r.a.createElement("label",{htmlFor:"city"},r.a.createElement(v,{type:"text",placeholder:"wprowad\u017a miasto",id:"city",name:"city",value:this.state.value,onChange:this.handleChange})),r.a.createElement(b,null,r.a.createElement("i",{className:"fas fa-search"})))}}]),t}(a.Component),w=n(15),j=n.n(w),D=n(16),E=n.n(D);function O(){var e=Object(c.a)(["\n  position: relative;\n  margin: auto 0 0 0;\n  bottom: 0;\n  width: 100%;\n  height: 40%;\n  background-color: rgba(255, 255, 255, 0.5);\n"]);return O=function(){return e},e}function T(){var e=Object(c.a)(["\n  width: 60%;\n  margin: 20px auto 0 auto;\n"]);return T=function(){return e},e}function k(){var e=Object(c.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: 3em;\n  height: 2em;\n  line-height: 2em;\n  border-radius: 1em;\n  background-color: white;\n  top: -1em;\n  text-align: center;\n"]);return k=function(){return e},e}function S(){var e=Object(c.a)(["\n  font-family: 'Montserrat', sans-serif;\n  width: 100%;\n  text-align: center;\n  font-size: 1.4em;\n  color: ",";\n"]);return S=function(){return e},e}function C(){var e=Object(c.a)(["\n  margin: 20px auto 20px auto;\n  width: 90%;\n  height: 90%;\n  border: 3px solid #e95312;\n  border-radius: 1em;\n  background-image: url(",");\n  display: ",";\n  flex-direction: column;\n  background-size: cover;\n"]);return C=function(){return e},e}var z=h.a.div(C(),(function(e){return e.isDayTime?j.a:E.a}),(function(e){return e.active?"flex":"none"})),I=h.a.p(S(),(function(e){return e.isDayTime?"black":"white"})),N=h.a.p(k()),q=h.a.img(T()),K=h.a.div(O()),A=new Date,B=function(e){var t=e.data;return r.a.createElement(z,{active:t.city,isDayTime:t.isDayTime},r.a.createElement(q,{src:"./images/weatherIcons/".concat(t.picture,"-s.png"),alt:"obrazek"}),r.a.createElement(K,null,r.a.createElement(N,{isDayTime:t.isDayTime,style:{fontSize:"3em"}},t.temperature,r.a.createElement("i",{className:"far fa-circle",style:{fontSize:"0.2em",fontWeight:"normal",position:"relative",top:"-3em",marginRight:"0.4em"}}),r.a.createElement("i",{style:{fontSize:"0.9em"},className:"fas fa-thermometer-quarter"})),r.a.createElement(I,{style:{textTransform:"uppercase",fontSize:"2em",position:"relative",top:"-20px"},isDayTime:t.isDayTime},t.city),r.a.createElement(I,{isDayTime:t.isDayTime},A.toLocaleTimeString()),r.a.createElement(I,{isDayTime:t.isDayTime,style:{marginTop:"20px",textTransform:"uppercase"}},t.text)))};function M(){var e=Object(c.a)(["\n  text-align: center;\n  color: #e95312;\n"]);return M=function(){return e},e}function R(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  font-family: sans-serif;\n  height: 100vh;\n"]);return R=function(){return e},e}var J=h.a.div(R()),P=h.a.h2(M()),U=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={locationKey:"",city:"",picture:"",temperature:"",text:"",isDayTime:!1},n.fetchCity=function(e){fetch("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=8NohnMk0lcfUPmDAdCiaKBIwZYSQ5t46&q=".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({city:e[0].LocalizedName,locationKey:e[0].Key}),n.handleRequestData(n.state.locationKey)})).catch((function(e){return console.log(e)}))},n.handleRequestData=function(e){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=8NohnMk0lcfUPmDAdCiaKBIwZYSQ5t46")).then((function(e){return e.json()})).then((function(e){n.setState({picture:e[0].WeatherIcon,temperature:e[0].Temperature.Metric.Value,text:e[0].WeatherText,isDayTime:e[0].IsDayTime}),window.localStorage.setItem("weatherData",JSON.stringify(n.state))})).catch((function(e){return console.log(e)}))},n.handleRequestCity=function(e,t){e.preventDefault(),n.fetchCity(t)},n.scrollToBottom=function(){n.messagesEnd.scrollIntoView({behavior:"smooth"})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.state.text&&this.scrollToBottom()}},{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("weatherData"));e&&this.fetchCity(e.city)}},{key:"render",value:function(){var e=this;return r.a.createElement(J,null,r.a.createElement(P,null,"AccuPogoda"),r.a.createElement(x,{change:this.handleRequestCity}),r.a.createElement(B,{data:this.state}),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(a.Component);function W(){var e=Object(c.a)(["\n  margin: auto;\n  height: 100vh;\n  width: 100%;\n  max-width: 415px;\n  background-color: rgba(242, 242, 242, 0.8);\n"]);return W=function(){return e},e}var L=h.a.div(W());var Q=function(){return r.a.createElement(L,null,r.a.createElement(U,null))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.44258824.chunk.js.map