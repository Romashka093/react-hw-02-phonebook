(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=n(11),u=n(1),i=n(4),m=n(5),s=n(7),h=n(6),d=n(8),f=n.n(d),p=n(3);function b(e){var t=e.name,n=e.type,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:a,type:n},t))}function g(e){var t=e.titleNameInput,n=e.type,a=e.placeholder,c=e.value,l=e.onChange,o=e.name,u=e.id,i=e.required;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:u},t,r.a.createElement("input",{type:n,placeholder:a,value:c,onChange:l,name:o,required:i})))}var v={name:"",number:""},C=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(u.a)({},v),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;if(a===r)return alert("NOT1");e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(Object(u.a)({},e.state)),e.reset()},e.reset=function(){e.setState(Object(u.a)({},v))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.props.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(g,{name:"name",onChange:this.handleChange,titleNameInput:"Name",type:"text",placeholder:"enter name",value:t,id:a,required:!0}),r.a.createElement(g,{name:"number",onChange:this.handleChange,titleNameInput:"Number",type:"tel",placeholder:"enter number",value:n,id:a,required:!0}),r.a.createElement("br",null),r.a.createElement(b,{name:"Add contact",type:"submit"})))}}]),n}(a.Component);function E(e){var t=e.name,n=e.number,a=e.onDeleteContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t),r.a.createElement("span",null,n),r.a.createElement(b,{name:"delete",type:"button",onClick:a}))}function y(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{value:t,type:"text",placeholder:"enter contact name",onChange:n,titleNameInput:"Find contact by name:"}))}var F=function(e){var t=e.length,n=e.contacts,a=e.onDeleteContact,c=e.onChangeFilter,l=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Contacts:"),t>0&&r.a.createElement(y,{value:l,onChangeFilter:c}),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,Object.assign({},e,{onDeleteContact:function(){return a(e.id)}})))}))))},O=f.a.generate(),j=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.addContact=function(t){var n=Object(u.a)(Object(u.a)({},t),{},{id:f.a.generate()}),a=!0;e.state.contacts.forEach((function(e){if(e.name.includes(n.name))return a=!1,alert("".concat(n.name," is already in contacts."));a=!0})),a&&e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[n])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.filterForContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return console.log(this.state),r.a.createElement(a.Fragment,null,r.a.createElement(C,{id:O,onAddContact:this.addContact}),r.a.createElement(F,{length:t.length,contacts:this.filterForContacts(),value:n,onDeleteContact:this.deleteContact,onChangeFilter:this.changeFilter}))}}]),n}(a.Component);function k(){return r.a.createElement(j,null)}l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9a4bc461.chunk.js.map