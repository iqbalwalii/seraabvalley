(this.webpackJsonpserab_valley=this.webpackJsonpserab_valley||[]).push([[0],{40:function(e,t,s){},49:function(e,t,s){},73:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(22),r=s.n(n),i=(s(49),s(4)),o=s(3),l=s(11),d=s(13),j=s.n(d),u=s(25),m=s(17),h=s.n(m).a.create({baseURL:"https://ancient-inlet-41931.herokuapp.com/"}),b=function(e){return console.log("in action"),console.log(e),{type:"SELECT__ITEM",payload:e}},p=function(){return function(){var e=Object(u.a)(j.a.mark((function e(t,s){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/");case 2:a=e.sent,c=a.data,t({type:"FETCH__PRODUCTS",payload:c});case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},_=s(5),O=(s(73),s(0));var x=Object(_.b)((function(e){return{cartItems:e.selectedItem,user:e.user}}),{logout:function(){return{type:"LOGOUT__USER",payload:""}}})((function(e){var t=e.cartItems,s=e.user,a=e.logout,c=Object(o.g)();return window.onscroll=function(){document.body.scrollTop>=200||document.documentElement.scrollTop>=200?function(){var e=document.querySelector(".navbar");e.classList.add("nav-colored"),e.classList.remove("nav-transparent")}():function(){var e=document.querySelector(".navbar");e.classList.add("nav-transparent"),e.classList.remove("nav-colored")}()},Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsxs)("div",{className:"navbar__logo",children:[Object(O.jsxs)("div",{className:"brand",children:[Object(O.jsx)("img",{className:"logo",src:"/assets/images/logo.png",alt:""}),Object(O.jsx)("h1",{className:"logo__heading",children:Object(O.jsxs)(i.b,{to:"/",className:"navigation__text",children:["Seraab valley ",Object(O.jsx)("span",{children:"The Taste of Kashmir"})]})})]}),Object(O.jsxs)("div",{className:"hamburger",onClick:function(){!function(){var e=document.querySelector(".navbar__links");console.log(e),e.classList.toggle("display")}()},children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]})]}),Object(O.jsxs)("div",{className:"navbar__links",children:[Object(O.jsx)(i.b,{to:"/store",className:"/store"===c.pathname?"active":"inactive",children:"Store"}),Object(O.jsx)(i.b,{to:"/about",className:"/about"===c.pathname?"active":"inactive",children:"About"}),Object(O.jsx)(i.b,{to:"/contact",className:"/contact"===c.pathname?"active":"inactive",children:"Contact"}),s.name?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"username",children:s.name}),Object(O.jsx)("button",{onClick:a,children:"Logout"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(i.b,{to:"/signin",className:"/Signin"===c.pathname?"active":"inactive",children:"Signin"}),Object(O.jsx)(i.b,{to:"/signup",className:"/Signup"===c.pathname?"active":"inactive",children:"Signup"})]}),Object(O.jsxs)(i.b,{to:"/cart",className:"/cart"===c.pathname?"basket active":"basket  inactive",children:[Object(O.jsx)("img",{src:"/assets/images/basket.png",alt:"basket icon",className:"basket__icon"}),Object(O.jsxs)("span",{className:"cart__total",children:[" ",t.length]})]})]})]})})),f=(s(76),function(){return Object(O.jsxs)("div",{className:"banner",children:[Object(O.jsx)("div",{className:"backdrop"}),Object(O.jsx)("img",{src:"./assets/images/bannerbg.png",alt:"background"}),Object(O.jsx)("div",{className:"banner__heading",children:"Delicious and fresh dry fruits straight out of kashmir, to your finger tips."})]})}),g=(s(77),function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("div",{className:"footer__name",children:[Object(O.jsxs)("h2",{className:"footer__heading1 footer__heading",children:[Object(O.jsx)("strong",{children:"SERAAB VALLEY "}),Object(O.jsx)("span",{children:"The Taste of Kashmir"})]}),Object(O.jsx)("img",{className:"footer__image",src:"/assets/images/footer.png",alt:""})]}),Object(O.jsxs)("div",{className:"footer__services main",children:[Object(O.jsx)("h2",{className:"footer__heading",children:Object(O.jsx)("strong",{children:"CONTACT"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"+91 9796344888"}),Object(O.jsx)("li",{children:"+91 8717068855"}),Object(O.jsx)("li",{children:"care@seraabvalley.com"})]})]}),Object(O.jsxs)("div",{className:"footer__address main",children:[Object(O.jsx)("h2",{className:"footer__heading",children:Object(O.jsx)("strong",{children:"ADDRESSES"})}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Saida Kadal "}),Object(O.jsx)("li",{children:"Rainawari"}),Object(O.jsx)("li",{children:"Srinagar J&K"}),Object(O.jsx)("li",{children:"190003"})]})]}),Object(O.jsxs)("div",{className:"footer__more main",children:[Object(O.jsx)("h2",{className:"footer__heading",children:Object(O.jsx)("strong",{children:"COMPANY"})}),Object(O.jsx)("p",{children:"Seraab Valley is our endeavor to deliver  goodness right at your doorstep. Building on our two decades of flourishing wholesale operations"})]})]})}),v=s(18),N=(s(78),function(e){var t=e.item,s=e.selectItem;return Object(O.jsxs)("div",{className:"product",children:[Object(O.jsx)("div",{className:"product__image",children:Object(O.jsx)("img",{src:"/assets/images/products/".concat(t.name.trim(),".jpg"),alt:t.name})}),Object(O.jsxs)("div",{className:"product__details",children:[Object(O.jsx)("h1",{className:"product__name",children:t.name}),Object(O.jsx)("h3",{className:"product__description",children:t.description.slice(0,40)}),Object(O.jsxs)("h3",{className:"product__price",children:[Object(O.jsxs)("span",{children:[" \u20b9 ",t.price[0]," "]}),"   ",Object(O.jsxs)("span",{children:[t.quantity[0]," "]})]}),Object(O.jsxs)("h3",{className:"product__price",children:[Object(O.jsxs)("span",{children:[" \u20b9  ",t.price[1]," "]})," ",Object(O.jsxs)("span",{children:["  ",t.quantity[1]]})]})]}),Object(O.jsxs)("button",{className:"cart__btn",onClick:function(e){return s(t._id)},children:[Object(O.jsx)("span",{children:"Add to Basket"})," ",Object(O.jsx)(v.a,{style:{fontSize:"1rem"}})]}),Object(O.jsx)(i.b,{to:{pathname:"/product:".concat(null===t||void 0===t?void 0:t.name),state:t},className:"cart__btn detail__btn",children:"Details"})]})}),y=(s(79),Object(_.b)((function(e){return e}),{selectItem:b})((function(e){var t=e.productItems,s=e.selectItem,a=e.text,c=e.heading;return Object(O.jsxs)("div",{className:"product__banner",children:[Object(O.jsx)("div",{className:"banner__backdrop"}),null===t||void 0===t?void 0:t.map((function(e){return Object(O.jsx)(N,{item:e,selectItem:s})})),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("h2",{children:c}),Object(O.jsx)("p",{className:"item__detail",children:a})]})]})}))),w=(s(80),Object(_.b)((function(e){return console.log("from homepage",e),{products:e.productsList}}),{fetchProducts:p})((function(e){console.log(e);var t=e.products,s=e.fetchProducts;return Object(a.useEffect)((function(){s()}),[s]),t?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(x,{}),Object(O.jsx)(f,{}),Object(O.jsx)("h1",{className:"main__heading",children:"Our Products"}),Object(O.jsx)(y,{className:"homepage__products",productItems:t.slice(0,2),heading:"Kashmiri Exquisite Almonds",text:"Kashmir Almonds are often referred to as King of Fruits and are available in different shapes and sizes. Kashmir Almonds are smaller in size as compared to Californian almonds but have higher oil content (42%) in them. Owing to the moderate climate of Kashmir, the Kashmiri Almonds are very sweet"}),Object(O.jsx)(y,{className:"homepage__products",productItems:t.slice(2,4),heading:"Saffron From the Hills of Pampore",text:"Kashmiri saffron is recognizable by its dark maroon-purple hue, making it among the worlds darkest In 2020 Kashmir Valley saffron was certified with a geographical indication from the Government of India"}),Object(O.jsx)(y,{className:"homepage__products",productItems:t.slice(4,6),heading:"The Finest of Walnuts",text:"Kashmir enjoys its status as a major contributor to the export of walnut from India. Walnuts grown in Kashmir valley are certified as the organic. Walnuts have a high percentage of monounsaturated (MUFA) and polyunsaturated (PUFA) fats and are a good source of protein."}),Object(O.jsx)(i.b,{to:"/store",className:"view__more__btn",children:"View more Products"}),Object(O.jsx)(g,{})]}):Object(O.jsx)("div",{children:"...loading"})}))),S=(s(81),function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"about__section",children:[Object(O.jsx)("img",{className:"about__image",src:"./assets/images/tray.png",alt:""}),Object(O.jsx)("h1",{className:"about__text",children:"We Are at Your Service 24*7"})]}),Object(O.jsxs)("div",{className:"about__work__description",children:[Object(O.jsx)("h2",{children:"GREETINGS FROM SERAAAB VALLEY"}),Object(O.jsx)("p",{children:"Dry Fruits have been a part of our diet and our culture since times immemorial. Along with the umpteen health benefits that they offer, dry fruits are also an excellent source of vital nutrients and healthy oils that help reduce the risk of chronic diseases. A long shelf life, ease of storage and transportation make them an inherent part of every dietary recommendation. Seraab Valley is our endeavor to deliver this goodness right at your doorstep. Building on our two decades of flourishing wholesale operations, we are now foraying into the online space for\xa0 offering dry fruits online. We aspire to reach out to consumers across the country with an exciting array of Kashmiri Dry Fruits with unmatched assortments and mouth-watering variations. We offer more than 40 different varieties of dry fruits and nuts, starting from the traditional and the classic, such as Walnuts,\xa0 Almonds, Saffron, Apricots and much more. Our dry fruits and nuts are sourced from the top-notch quality growers, and cleaned, sorted and packaged manually to ensure that their freshness and flavor is well preserved. We meticulously comply with the standards of Food Safety and Standards Authority of India (FSSAI) at our cleaning and packaging facility. We also follow a stringent quality control practices. This helps us ensure that we deliver dry fruits and nuts of premium quality and taste."})]}),Object(O.jsxs)("div",{className:"two__paras",children:[Object(O.jsxs)("div",{className:"para__one",children:[Object(O.jsx)("h1",{children:"Our Vision"}),Object(O.jsx)("p",{children:"We envision becoming the customer\u2019s first choice for dry fruits and nuts, by bringing the freshest and highest quality to maximum number of customers through our online venture. To be the most influential distributor in Asia."})]}),Object(O.jsxs)("div",{className:"para__two",children:[Object(O.jsx)("h1",{children:"Mission"}),Object(O.jsx)("p",{children:"We endeavor to achieve our vision by following a pro-customer approach and adhering to international standards of quality, right from selection of dry fruits and nuts to product delivery."})]})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"about__team__section",children:[Object(O.jsx)("h3",{className:"about__description",children:"OUR TEAM"}),Object(O.jsxs)("div",{className:"about__team",children:[Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)("img",{className:"profile__photo",src:"https://www.rayyforce.com/wp-content/uploads/2019/11/dummy-profile.jpg",alt:""}),Object(O.jsx)("h2",{className:"profile__name",children:"Zaffar Abbas"}),Object(O.jsx)("h4",{c:!0,children:"Managing Director"}),Object(O.jsx)("p",{children:"md@seraabvalley.com"})]}),Object(O.jsxs)("div",{className:"profile",children:[Object(O.jsx)("img",{className:"profile__photo",src:"https://www.rayyforce.com/wp-content/uploads/2019/11/dummy-profile.jpg",alt:""}),Object(O.jsx)("h2",{className:"profile__name",children:"Dilawar Hussain"}),Object(O.jsx)("h4",{className:"profile__name",children:"Director"}),Object(O.jsx)("p",{children:"director@seraabvalley.com"})]})]})]}),Object(O.jsx)(g,{})]})}),E=s(15),I=s(16),A=(s(82),function(){var e=Object(a.useState)(""),t=Object(I.a)(e,2),s=t[0],c=t[1],n=function(e){c((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(E.a)({},e.target.name,e.target.value))}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"contact__hero",children:[Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("img",{className:"contact__mail__icon",src:"./assets/images/mail.svg",alt:""}),Object(O.jsx)("h1",{className:"hero__heading",children:"if You have questions or just want to get in touch, use the form below. We look forward to hearing from you"})]}),Object(O.jsxs)("div",{className:"contact__form",children:[Object(O.jsx)("h2",{className:"contact__heading",children:"CONTACT US"}),Object(O.jsx)("div",{className:"backdrop__form"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.post("/contact",Object(l.a)({},s)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},className:"contact_form_data",children:[Object(O.jsx)("input",{className:"contact__text",type:"text",value:s.name,placeholder:"Enter Your Name",onChange:n}),Object(O.jsx)("input",{className:"contact__text",type:"email",required:"required",value:s.email,placeholder:"Enter Your Email",onChange:n}),Object(O.jsx)("textarea",{className:"contact__text",placeholder:"Message Description",onChange:n,name:"",id:"",cols:"30",rows:"10"}),Object(O.jsx)("input",{className:"contact_form_submit",type:"submit",value:"Send"})]})]})]}),Object(O.jsx)(g,{})]})}),k=s(21),T=(s(83),s(84),function(e){var t=e.item,s=e.removeItem;return Object(O.jsxs)("div",{className:"cart__item",children:[Object(O.jsx)("div",{className:"cart__item__img",children:Object(O.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(O.jsxs)("div",{className:"cart__item__right",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"cart__item__name",children:t.name}),Object(O.jsx)("div",{className:"single__product__price__group",children:t.price.map((function(e,s){return Object(O.jsxs)("button",{className:"variant",children:[Object(O.jsx)("div",{className:"variant__price",children:Object(O.jsxs)("h3",{children:["  \u20b9  ",e]})}),Object(O.jsx)("div",{className:"variant__quantity",children:Object(O.jsx)("h3",{children:t.quantity[s]})})]})}))})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"cart__item__bottom",children:[Object(O.jsx)("input",{type:"number",name:"total_items",placeholder:"1"}),Object(O.jsx)("button",{className:"cart__item__delete",onClick:function(){return s(t._id)},children:"delete"})]})})]})]})}),C=Object(_.b)((function(e){return console.log(e),{cartItems:e.selectedItem,productsList:e.productsList}}),{removeItem:function(e){return console.log("in action remove"),console.log(e),{type:"REMOVE__ITEM",payload:e}}})((function(e){var t=e.cartItems,s=e.productsList,a=e.removeItem;console.log("items",t,s,a);var c=t.map((function(e){return s.filter((function(t){return t._id===e}))})).reduce((function(e,t){return[].concat(Object(k.a)(e),Object(k.a)(t))}),[]);return console.log("IN store",c),Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"cart__main ",children:[Object(O.jsx)("div",{className:"cart__items",children:c.map((function(e){return Object(O.jsx)(T,{item:e,removeItem:a})}))}),Object(O.jsxs)("div",{className:"cart__total",children:[Object(O.jsxs)("h2",{children:["Subtotal (",c.length," items) ",Object(O.jsx)("span",{children:"\u20b9 23232"})]}),Object(O.jsx)("button",{className:"checkout__btn",children:"Proceed to checkout"})]})]})]})})),L=(s(85),Object(_.b)((function(e){return console.log(e),{productsList:e.productsList}}),{selectItem:b,fetchProducts:p})((function(e){var t=e.productsList,s=e.selectItem,c=e.fetchProducts;return Object(a.useEffect)((function(){c()}),[c]),t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"carousel",children:[Object(O.jsx)("img",{src:"./assets/images/pro.gif",alt:"Product Line",className:"carousel__image"}),Object(O.jsx)("h3",{className:"carousel__heading",children:"Browse the treats we have in store for you"})]}),Object(O.jsx)("h2",{className:"store__heading",children:"OUR PRODUCTS"}),Object(O.jsx)("div",{className:"store__container",children:t.map((function(e){return Object(O.jsx)(N,{item:e,selectItem:s})}))}),Object(O.jsx)(g,{})]}):Object(O.jsx)("div",{children:"Loading.."})}))),q=(s(86),function(e){var t=e.location.state;return t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"single__product__item",children:Object(O.jsxs)("div",{className:"product__item__top",children:[Object(O.jsx)("img",{src:"/assets/images/products/".concat(t.name.trim(),".jpg"),alt:t.name,className:"product__img"}),Object(O.jsxs)("div",{className:"single__product__detials",children:[Object(O.jsx)("h1",{className:"single__product__name",children:t.name}),Object(O.jsx)("h3",{className:"single__product__description",children:t.description}),Object(O.jsx)("div",{className:"single__product__price__group",children:t.price.map((function(e,s){return Object(O.jsxs)("div",{className:"detail__group",children:[Object(O.jsx)("div",{className:"single__product__price",children:Object(O.jsxs)("h3",{children:["  \u20b9  ",e]})}),Object(O.jsx)("div",{className:"single__product__quantity",children:Object(O.jsx)("h3",{children:t.quantity[s]})})]})}))}),Object(O.jsxs)("button",{className:"product__btn",children:[Object(O.jsx)("span",{children:" Add To Cart"}),Object(O.jsx)(v.a,{style:{fontSize:"2rem"}})]})]})]})}),Object(O.jsxs)("div",{className:"product__item__bottom",children:[Object(O.jsxs)("div",{className:"product__benefits",children:[Object(O.jsx)("h1",{className:"product__heading",children:"Benefits"}),Object(O.jsx)("p",{children:t.benefits})]}),Object(O.jsxs)("div",{className:"product__use",children:[Object(O.jsx)("h1",{className:"product__heading",children:"How to use"}),Object(O.jsx)("p",{children:t.benefits})]})]}),Object(O.jsx)(g,{})]}):Object(O.jsx)("div",{children:"loading..."})});var U=function(e,t,s){var c=Object(a.useState)(e),n=Object(I.a)(c,2),r=n[0],i=n[1],o=Object(a.useState)({}),d=Object(I.a)(o,2),j=d[0],u=d[1],m=Object(a.useState)(!1),h=Object(I.a)(m,2),b=h[0],p=h[1];return Object(a.useEffect)((function(){(console.log("in useEffect"),b)&&(0===Object.keys(j).length?(console.log("in noErrors"),s(r),p(!1)):(console.log("in Errors"),p(!1)))}),[b,s]),{values:r,isSubmitting:b,errors:j,onBlurHandler:function(){var e=t(r);u(e)},onChangeHandler:function(e){console.log(e.target.value),e.persist(),i((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(E.a)({},e.target.name,e.target.value))}))},onSubmitHandler:function(e){e.preventDefault();var s=t(r);u(s),p(!0)}}};function R(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email can't be empty",e.password?e.password.length<6&&(t.password="Password must be at least 6 chars",console.log("length")):(t.password="Password can't be empty",console.log("password","empty")),t}s(40);var H={email:"",name:"",password:""},D=Object(_.b)((function(e){return{user:e.user}}),{userAuthentication:function(e){return function(){var t=Object(u.a)(j.a.mark((function t(s,a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.post("/user/create",Object(l.a)({},e));case 2:c=t.sent,n=c.data,s({type:"USER__AUTHENTICATION",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}()}})((function(e){var t=e.userAuthentication,s=e.user,a=e.history,c=U(H,R,t),n=c.values,r=(c.isSubmitting,c.errors),o=c.onBlurHandler,l=c.onChangeHandler,d=c.onSubmitHandler;return Object(O.jsxs)("div",{className:"main__page__handler",children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"backdrop__form"}),Object(O.jsxs)("div",{className:"form__data",children:[Object(O.jsx)("h1",{className:"form__heading",children:"SIGN UP"}),Object(O.jsxs)("form",{onSubmit:d,className:"form__main",children:[Object(O.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Enter your name",value:n.name,onChange:l,onBlur:o,required:"required"}),Object(O.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",value:n.email,onChange:l,onBlur:o,className:r.email&&"border__red"}),r.email&&Object(O.jsx)("p",{className:"input__error",children:r.email}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter you password",value:n.password,onChange:l,onBlur:o,className:r.password&&"border__red"}),r.password&&Object(O.jsx)("p",{className:"input__error",children:r.password}),Object(O.jsx)("button",{type:"submit",children:"Sign Up"})]}),Object(O.jsx)(i.b,{to:"/Signin",className:"change__over",onClick:function(){document.querySelector(".backdrop__form").classList.toggle("toggle")},children:"Already Have an Account"}),Object(O.jsx)("h1",{children:s.message?s.message:s.email?a.push("/"):""})]})]})})),P={email:"",name:"",password:""},B=Object(_.b)((function(e){return{user:e.user}}),{loginUser:function(e){return function(){var t=Object(u.a)(j.a.mark((function t(s,a){var c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.post("/user/read",Object(l.a)({},e));case 2:c=t.sent,n=c.data,s({type:"USER__AUTHENTICATION",payload:n});case 5:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}()}})((function(e){var t=e.loginUser,s=e.user,a=Object(o.f)(),c=U(P,R,t),n=c.values,r=(c.isSubmitting,c.errors),l=c.onBlurHandler,d=c.onChangeHandler,j=c.onSubmitHandler;return Object(O.jsx)("div",{className:"main__page__handler",children:Object(O.jsxs)("div",{className:"the__other",children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"backdrop__form"}),Object(O.jsxs)("div",{className:"form__data",children:[Object(O.jsx)("h1",{className:"form__heading",children:"SIGN IN"}),Object(O.jsxs)("form",{onSubmit:j,className:"form__main",children:[Object(O.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email",value:n.email,onChange:d,onBlur:l,required:"required"}),r.email&&Object(O.jsx)("p",{className:"input__error",children:r.email}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Enter you password",value:n.password,onChange:d,onBlur:l,className:r.password&&"border__red"}),r.password&&Object(O.jsx)("p",{className:"input__error",children:r.password}),Object(O.jsx)("button",{type:"submit",children:"SIGN IN"})]}),Object(O.jsx)(i.b,{to:"/Signup",className:"change__over",onClick:function(){document.querySelector(".backdrop__form").classList.toggle("toggle")},children:"Don't Have an Account"}),Object(O.jsx)("h1",{className:"user__message",children:s.message?s.message:s.email?a.push("/"):""})]})]})})}));s(87);var F=function(){return Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(O.jsx)(o.a,{exact:!0,path:"/store",component:L}),Object(O.jsx)(o.a,{exact:!0,path:"/about",component:S}),Object(O.jsx)(o.a,{exact:!0,path:"/contact",component:A}),Object(O.jsx)(o.a,{exact:!0,path:"/cart",component:C}),Object(O.jsx)(o.a,{exact:!0,path:"/product:id",component:q}),Object(O.jsx)(o.a,{exact:!0,path:"/Signup",component:D}),Object(O.jsx)(o.a,{exact:!0,path:"/Signin",component:B})]})})},K=s(12),M=s(42),W=s(43),V=s.n(W),G=Object(K.combineReducers)({productsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH__PRODUCTS"===t.type?t.payload:e},selectedItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT__ITEM":return[].concat(Object(k.a)(e),[t.payload]);case"REMOVE__ITEM":return e.filter((function(e){return e!==t.payload}));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"USER__AUTHENTICATION"===t.type||"LOGOUT__USER"===t.type?t.payload:e}}),Y=s(44),z=Object(K.createStore)(G,Object(M.composeWithDevTools)(Object(K.applyMiddleware)(Y.a,V.a)));r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_.a,{store:z,children:Object(O.jsx)(F,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.bbd07fa2.chunk.js.map