"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{337:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(439),c=n(791),s=n(323),r=n(689),a=n(87),o=n(280),l={btn:"DetailsMovies_btn__0bJcD",text:"DetailsMovies_text__ZnTGD",justify:"DetailsMovies_justify__ZCvD3",title:"DetailsMovies_title__uwEd5",img:"DetailsMovies_img__ElaYm",link:"DetailsMovies_link__aAJ6G",ul:"DetailsMovies_ul__NKdQT"},u=n(184),d=function(){var e=(0,c.useState)({}),t=(0,i.Z)(e,2),n=t[0],d=t[1],h=(0,r.UO)().id,m=(0,r.s0)(),f=(0,r.TH)(),v=(0,c.useRef)(f);(0,c.useEffect)((function(){v.current[h]?d(v.current[h]):(0,s.s_)(h).then((function(e){return e.ok?e.json():Promise.reject("Network response was not ok")})).then((function(e){var t={id:e.id,title:e.title||e.original_name,img:e.backdrop_path,score:Math.ceil(10*Number(e.vote_average)),overview:e.overview,genres:e.genres};d(t),v.current[h]=t})).catch((function(e){console.error("Error fetching movie details:",e)}))}),[h]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:function(){var e,t;m(null!==(e=null===(t=v.current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",{replace:!0})},className:l.btn,children:"Go back"})}),n.id&&(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{className:l.img,src:n.img?"https://image.tmdb.org/t/p/w500/".concat(n.img):o,alt:"Movie Poster"}),(0,u.jsx)("h2",{className:l.title,children:n.title}),(0,u.jsxs)("p",{className:l.text,children:["Users score: ",n.score,"%"]}),(0,u.jsx)("h2",{className:l.title,children:"Overview"}),(0,u.jsx)("p",{className:"".concat(l.text," ").concat(l.justify),children:n.overview}),(0,u.jsx)("h2",{className:l.title,children:"Genres"}),(0,u.jsx)("ul",{className:l.q,children:n.genres&&n.genres.map((function(e){return(0,u.jsx)("li",{className:l.text,children:e.name},e.id)}))})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{className:l.title,children:"Additional information"}),(0,u.jsxs)("ul",{className:l.ul,children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"cast",className:l.link,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.OL,{to:"review",className:l.link,children:"Reviews"})})]})]}),(0,u.jsx)(r.j3,{}),(0,u.jsx)("div",{})]})}},323:function(e,t,n){n.d(t,{Jh:function(){return o},_r:function(){return l},on:function(){return r},qw:function(){return s},s_:function(){return a}});var i="https://api.themoviedb.org/3/",c="c45da519c79ca04d409b5c0716c0ef3e",s=function(){return fetch("".concat(i,"trending/all/day?api_key=").concat(c))},r=function(e){return fetch("".concat(i,"search/movie?api_key=").concat(c,"&query=").concat(e))},a=function(e){return fetch("".concat(i,"movie/").concat(e,"?api_key=").concat(c))},o=function(e){return fetch("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(c))},l=function(e){return fetch("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(c))}},280:function(e,t,n){e.exports=n.p+"static/media/noImages.f147cce9b72afa444184.jpg"}}]);
//# sourceMappingURL=337.f454e774.chunk.js.map