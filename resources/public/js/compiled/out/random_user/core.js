// Compiled by ClojureScript 1.10.773 {}
goog.provide('random_user.core');
goog.require('cljs.core');
goog.require('goog.dom');
random_user.core.fetch_random_user = (function random_user$core$fetch_random_user(){
var response = fetch("https://randomuser.me/api/",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"headers","headers",-835030129),({"Content-Type": "application/json"})], null)));
return response.then((function (res){
return res.json();
})).then((function (data){
var user = (data["results"][(0)]);
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((user["name"]["first"]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((user["name"]["last"]))].join('');
var email = (user["email"]);
var picture = (user["picture"]["large"]);
return (goog.dom.getElement("user-container").innerHTML = ["<strong>Name:</strong> ",name,"<br/>","<strong>Email:</strong> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email),"<br/>","<img src='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(picture),"' alt='User Picture' width='150'/>"].join(''));
}));
});
random_user.core.init = (function random_user$core$init(){
var load_button = goog.dom.getElement("load-user");
return load_button.addEventListener("click",(function (_){
return random_user.core.fetch_random_user.call(null);
}));
});
random_user.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1738875617562
