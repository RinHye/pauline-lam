import{P as X,_ as q,a as D}from"./DPtmKThe.js";import{r as p,c as M,o as C,a as P,p as A,_ as S,b as h,d as e,e as E,F as k,f as y,n as L,g as t,h as W,i as l,j as T,k as z,l as U,m as G}from"./CO_RSkIy.js";const R={setup(){const _=X,a="Voir mes projets",j="/",o="#projets",f=p(_),g=p(350),n=p(1),m=1,i=p(null),c=M(()=>Math.ceil(f.value.length/m));function s(u){n.value=u}let r=0,d=0;function v(u){r=u.touches[0].clientX}function x(u){d=u.touches[0].clientX-r}function w(){d>50&&n.value>1?n.value--:d<-50&&n.value<c.value&&n.value++,d=0}function B(){n.value>1&&n.value--}function N(){n.value<c.value&&n.value++}function b(){g.value=window==null?void 0:window.innerWidth}return C(()=>{b(),window.addEventListener("resize",b),i.value&&(i.value.addEventListener("touchstart",v),i.value.addEventListener("touchmove",x),i.value.addEventListener("touchend",w))}),P(()=>{window.removeEventListener("resize",b),i.value&&(i.value.removeEventListener("touchstart",v),i.value.removeEventListener("touchmove",x),i.value.removeEventListener("touchend",w))}),{totalPages:c,currentPage:n,itemsPerPage:m,carouselTrack:i,cards:f,projects:_,cardWidth:g,goToPage:s,startX:r,currentTranslate:d,onBeforeUnmount:P,onMounted:C,goToPreviousPage:B,goToNextPage:N,handleTouchMove:x,handleTouchEnd:w,handleTouchStart:v,labelProjets:a,currentLink:j,projetsLink:o}},data(){return{}},methods:{},watch:{}},V=A("/images/profil.jpg"),F=A("/images/photo-profil-s-min.png"),I={id:"home",class:"d-flex flex-column justify-content-md-between align-items-center"},O={class:"d-flex flex-column flex-md-row overflow-hidden w-100"},Z=e("div",{class:"d-md-block d-none div-img-profil"},[e("img",{class:"w-100 img-profil-desktop",src:V,alt:"photo_profil"})],-1),J={class:"d-flex flex-column flex-md-row justify-content-center align-items-center"},H=e("div",{class:"d-block d-md-none"},[e("img",{class:"circle-neon-img",src:F,alt:""})],-1),K={class:"home-content-text"},Q={class:"d-flex flex-column-reverse flex-md-row justify-content-center justify-content-md-between align-items-center"},Y=e("h1",{class:"titles mb-0"},"Pauline LAM",-1),$=e("p",{class:"h1-subtitles"},[t(" UX/UI Engineer - Eligible "),e("span",{class:"highlighted-text"},[e("a",{class:"unstyled-link",target:"_blank",href:"https://travail-emploi.gouv.fr/emploi-et-insertion/emplois-francs/article/embaucher-une-personne-en-emploi-franc"}," emploi franc* ")])],-1),ee=e("div",null,[e("blockquote",{class:"quotes"},[t('" The only way to do great work is '),e("br",{class:"d-md-block d-none"}),t('to love what you do."')]),e("p",null,[t(" Disponible dès "),e("span",{class:"fw-bold highlighted_word"},"maintenant"),t(" en remote ou sur Paris"),e("br")])],-1),te={id:"projets",class:"section_home w-100"},se=e("h2",{class:"mb-5"},"Mon portfolio",-1),oe={class:"projets"},ne={class:"carousel"},ie={class:"pagination justify-content-center align-items-center mt-3"},le=U('<svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1421_103)"><path d="M14.7132 0.286922C14.8964 0.470346 14.9993 0.718988 14.9993 0.978228C14.9993 1.23747 14.8964 1.48611 14.7132 1.66953L2.36262 14.0217L14.7132 26.3739C14.886 26.5593 14.98 26.8046 14.9756 27.058C14.9711 27.3115 14.8684 27.5533 14.6892 27.7325C14.51 27.9118 14.2681 28.0144 14.0147 28.0189C13.7613 28.0234 13.516 27.9293 13.3306 27.7565L0.287073 14.713C0.103876 14.5296 0.000976563 14.2809 0.000976563 14.0217C0.000976563 13.7625 0.103876 13.5138 0.287073 13.3304L13.3306 0.286922C13.514 0.103725 13.7626 0.000827789 14.0219 0.000827789C14.2811 0.000827789 14.5297 0.103725 14.7132 0.286922Z" fill="url(#paint0_linear_1421_103)"></path></g><defs><linearGradient id="paint0_linear_1421_103" x1="17.5001" y1="14.0435" x2="0.000120961" y2="14.0435" gradientUnits="userSpaceOnUse"><stop stop-color="#01B0D3"></stop><stop offset="1" stop-color="#D794FA"></stop></linearGradient><clipPath id="clip0_1421_103"><rect width="28.0435" height="15" fill="white" transform="matrix(0 -1 1 0 0 28.0435)"></rect></clipPath></defs></svg>',1),ae=[le],ce=["onClick"],re=U('<svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.286838 27.7565C0.103642 27.5731 0.000742912 27.3245 0.000742912 27.0652C0.000742912 26.806 0.103642 26.5573 0.286838 26.3739L12.6374 14.0218L0.286838 1.66958C0.114038 1.48413 0.0199652 1.23885 0.024437 0.985417C0.0289087 0.731981 0.131576 0.490174 0.31081 0.31094C0.490045 0.131706 0.731852 0.0290381 0.985288 0.0245665C1.23872 0.0200949 1.484 0.114168 1.66945 0.286968L14.7129 13.3304C14.8961 13.5139 14.999 13.7625 14.999 14.0218C14.999 14.281 14.8961 14.5296 14.7129 14.7131L1.66945 27.7565C1.48602 27.9397 1.23738 28.0426 0.978143 28.0426C0.718903 28.0426 0.470263 27.9397 0.286838 27.7565Z" fill="url(#paint0_linear_1421_116)"></path><defs><linearGradient id="paint0_linear_1421_116" x1="-2.50012" y1="14" x2="14.9999" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#01B0D3"></stop><stop offset="1" stop-color="#D794FA"></stop></linearGradient></defs></svg>',1),de=[re],ue=e("section",{id:"about",class:"w-100 section_home d-flex justify-content-center align-items-center"},[e("div",{class:"w-100 d-flex flex-column justify-content-center text-center text-md-start section"},[e("h2",{class:"mb-5"},"A propos de moi"),e("div",{class:"d-flex flex-column"},[e("p",{class:"my-2"},[t(" Anciennement développeuse puis chef de projet technique dans le domaine du web, j'ai décidé de me plonger dans l'"),e("span",{class:"fw-bold highlighted_word"},"UX/UI Design"),t(" pour compléter mes compétences "),e("span",{class:"fw-bold highlighted_word"},"web"),t(". ")]),e("p",{class:"my-2"},[t(" Grâce à mon "),e("span",{class:"fw-bold highlighted_word"},"expertise polyvalente"),t(", je voudrais aider les entreprises à "),e("span",{class:"fw-bold highlighted_word"},"promouvoir"),t(" leur marque en construisant des projets "),e("span",{class:"fw-bold highlighted_word"},"user-friendly"),t(" et "),e("span",{class:"fw-bold highlighted_word"},"adaptés à leur image"),t(". ")]),e("p",{class:"my-2"},[t(" Aujourd'hui, je propose des services d'"),e("span",{class:"fw-bold highlighted_word"},"UX"),t(", "),e("span",{class:"fw-bold highlighted_word"},"UI Design"),t(" et d'"),e("span",{class:"fw-bold highlighted_word"},"intégration"),t(" web "),e("span",{class:"fw-bold highlighted_word"},"responsives."),e("br")]),e("p",null,[t(" N'hésitez pas à me contacter par "),e("a",{class:"fw-bold unstyled-link highlighted-text",href:"mailto:contactpro.pauline.lam@gmail.com",subject:"Contact professionnel",title:"Envoyer un mail en cliquant ici"},"mail"),t(" ou sur "),e("a",{class:"fw-bold unstyled-link highlighted-text",href:"https://www.linkedin.com/in/pauline-lam-7bb427202/"},"LinkedIn"),t(". ")])])])],-1),he=e("section",{id:"site",class:"w-100 section_home d-flex justify-content-center align-items-center"},[e("div",{class:"w-100 d-flex flex-column justify-content-center text-center text-md-start section"},[e("h2",{class:"mb-5"},"A propos du site"),e("p",{class:"my-2"},[t(" Le site sur lequel vous êtes a été entièrement fait par moi-même de A à Z, que ce soit dans la conception ou même le développement du site programmé en Nuxt avec du Sass et du Bootstrap."),e("br")])])],-1);function me(_,a,j,o,f,g){const n=q,m=G,i=W,c=D;return l(),h("main",I,[e("section",O,[Z,e("header",J,[E(n),H,e("div",K,[e("div",null,[e("div",Q,[Y,E(m,{"class-list":"reseaux_btn mb-5 mb-md-2 d-flex"})]),$]),ee,E(i,{"label-btn":o.labelProjets,link:o.projetsLink},null,8,["label-btn","link"])])])]),e("section",te,[se,e("div",oe,[(l(!0),h(k,null,y(o.projects,s=>(l(),T(c,{image:s.imageRef,title:s.title,subtitle:s.subtitle,link:s.link},null,8,["image","title","subtitle","link"]))),256))]),e("div",ne,[e("div",{class:"carousel-track",ref:"carouselTrack",style:L({transform:`translateX(-${(o.currentPage-1)*(o.cardWidth||350)}px)`,width:`${o.projects.length*(o.cardWidth||350)}px`})},[(l(!0),h(k,null,y(o.projects,(s,r)=>(l(),T(c,{key:r,image:s.imageRef,title:s.title,subtitle:s.subtitle,link:s.link,style:L({width:`${o.cardWidth||350}px`}),class:"mx-3"},null,8,["image","title","subtitle","link","style"]))),128))],4)]),e("div",ie,[e("div",{onClick:a[0]||(a[0]=(...s)=>o.goToPreviousPage&&o.goToPreviousPage(...s))},ae),(l(!0),h(k,null,y(o.totalPages,s=>(l(),h("span",{key:s,onClick:r=>o.goToPage(s),class:z([{active:o.currentPage===s},"dot mx-2"])},null,10,ce))),128)),e("div",{onClick:a[1]||(a[1]=(...s)=>o.goToNextPage&&o.goToNextPage(...s))},de)])]),ue,he])}const ge=S(R,[["render",me]]);export{ge as default};
