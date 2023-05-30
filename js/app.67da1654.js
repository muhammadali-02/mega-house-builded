(()=>{"use strict";var e={6636:(e,t,r)=>{var a=r(1957),o=r(1947),n=r(499),i=r(9835);function l(e,t,r,a,o,n){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var u=r(1639);const c=(0,u.Z)(s,[["render",l]]),d=c;var p=r(3340),f=r(8339);const h=[{path:"/",component:()=>Promise.all([r.e(736),r.e(245)]).then(r.bind(r,7245)),meta:{authorize:!0},children:[{path:"",component:()=>Promise.all([r.e(736),r.e(868)]).then(r.bind(r,3868))},{path:"account-number",component:()=>Promise.all([r.e(736),r.e(466)]).then(r.bind(r,2466))},{path:"report/:id",component:()=>Promise.all([r.e(736),r.e(814)]).then(r.bind(r,5477))},{path:"bills/:id",component:()=>Promise.all([r.e(736),r.e(891)]).then(r.bind(r,891))},{path:"houses",component:()=>Promise.all([r.e(736),r.e(630)]).then(r.bind(r,3630))},{path:"persons",component:()=>Promise.all([r.e(736),r.e(969)]).then(r.bind(r,8969))},{path:"users",component:()=>Promise.all([r.e(736),r.e(391)]).then(r.bind(r,5391))}]},{path:"/login",component:()=>r.e(5).then(r.bind(r,3005))},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(870)]).then(r.bind(r,2870))}],m=h,g=(0,p.BC)((function(){const e=f.PO,t=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("/")});return t}));async function v(e,t){const r=e(d);r.use(o.Z,t);const a=(0,n.Xl)("function"===typeof g?await g({}):g);return{app:r,router:a}}var b=r(6827),y=r(2941),_=r(9114),w=r(847),P=r(7029),k=r(6950);const q={config:{},plugins:{Notify:b.Z,AppFullscreen:y.Z,Dark:_.Z,BottomSheet:w.Z,Dialog:P.Z,Loading:k.Z}},O="/";async function j({app:e,router:t},r){let a=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},n=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===a&&s<r.length;s++)try{await r[s]({app:e,router:t,ssrContext:null,redirect:n,urlPath:i,publicPath:O})}catch(l){return l&&l.url?void n(l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.mount("#q-app"))}v(a.ri,q).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,4640)),Promise.resolve().then(r.bind(r,4136))]).then((t=>{const r=a(t).filter((e=>"function"===typeof e));j(e,r)}))}))},4136:(e,t,r)=>{r.r(t),r.d(t,{api:()=>n,default:()=>i});var a=r(3340),o=r(7524);const n=o.Z.create({baseURL:"https://api.example.com"}),i=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=o.Z,e.config.globalProperties.$api=n}))},4640:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var a=r(3340),o=r(7712);const n={delete_text:"Xaqiqatdan xam o'chirib tashlamoqchimisiz",success_saved:"Muvaffaqiyatli saqlandi !",success_created:"Muvaffaqiyatli yaratildi !",success_updated:"Muvaffaqiyatli taxrirlandi !",success_deleted:"Muvaffaqiyatli o'chirildi !",change_password:"Parolni o'zgartirish",not_found:"Bu saxifani topa olmadik",required:"Barcha maydonlarni to'g'ri to'ldiring !",logged_in:"Siz muvaffaqiyatli tizimga kirdingiz !",sidebar:{main:"Asosiy",dashboard:"Boshqaruv paneli",rent:"Ijara shartnomasi",bills:"Komunal to'lo'vlar",account_number:"Hisob raqamlar",bills_report:"Hisobot to'lo'vlar",hot:"Issiq suv (otoplenie)",cold:"Sovuq suv",gaz:"Gaz",electronic:"Elektr",garbage:"Musor",communal:"Jek",tax:"Nalog",management:"Boshqaruv",home:"Uylar",person:"Fuqarolar",user:"Foydalanuvchilar",references:"Ma'lumotnomalar"},fields:{username:"Foydalanuvchi",password:"Parol",required:"Bu majburiy maydon",error_input:"Ma'lumot noto'g'ri kiritilgan !",search:"Qidiruv",name:"Nomi",price:"Narxi",date:"Sana",own:"Shaxsiy",end_date:"Tugash sanasi",comment:"Izox",pin_fl:"JSHSHIR",f_i_o:"F.I.O",first_name:"Ism",last_name:"Familiya",parent_name:"Sharf",phone:"Telefon",work:"Ish joyi",home:"Uy",passport:"Pasport",passport_info:"Pasport ma'lumotlari",passport_serial:"Pasport seriyasi",passport_number:"Pasport raqami",birthday:"Tug'ilgan kun",address:"Manzil",not_found:"Ma'lumot yo'q",current_password:"Joriy parol",new_password:"Yangi parol",to_count:"Ko'rsatgichgacha",file:"File"},actions:{title:"Amallar",login:"Kirish",logout:"Chiqish",profile:"Profil",profile1:"Xodimning ijtimoiy portreti",change_password:"Parolni o'zgartirish",settings:"Sozlamalar",create:"Qo'shish",edit:"Taxrirlash",delete:"O'chirish",save:"Saqlash",cancel:"Bekor qilish",back:"Ortga",yes:"Xa",no:"Yo'q",map:"Joylashuv",create_by_excel:"Excel orqali q'shish",download:"Yuklab olish",upload:"Yuklash",fullscreen:"To'liq ekran",dark_theme:"Tungi rejim",light_theme:"Kun rejimi"}},i={failed:"Action failed",success:"Action was successful"},l={failed:"Action failed",success:"Action was successful"},s={uz:n,ru:i,en:l},u=(0,a.xr)((({app:e})=>{const t=(0,o.o)({locale:"uz",legacy:!1,messages:s});e.use(t)}))}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,n)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,o,n]=e[c],l=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](a[s])))?a.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var n=Object.create(null);r.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>a[e]));return i["default"]=()=>a,r.d(n,i),n}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{5:"9f63b1ca",245:"1ac0b7fa",391:"4a901601",466:"5ffe4a6f",630:"44523ecc",814:"3ccd81be",868:"10153578",870:"2743fb53",891:"3ac838e6",969:"4aa4ac95"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{868:"643e08ac",870:"59f9cf4a"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="template:";r.l=(a,o,n,i)=>{if(e[a])e[a].push(o);else{var l,s;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[o];var p=(t,r)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,a,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=r=>{if(n.onerror=n.onload=null,"load"===r.type)a();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=i,n.href=t,r?r.parentNode.insertBefore(n,r.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],n=o.getAttribute("data-href");if(n===e||n===t)return o}},a=a=>new Promise(((o,n)=>{var i=r.miniCssF(a),l=r.p+i;if(t(i,l))return o();e(a,l,null,o,n)})),o={143:0};r.f.miniCss=(e,t)=>{var r={868:1,870:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=n);var i=r.p+r.u(t),l=new Error,s=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[i,l,s]=a,u=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(a);u<i.length;u++)n=i[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=globalThis["webpackChunktemplate"]=globalThis["webpackChunktemplate"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(6636)));a=r.O(a)})();