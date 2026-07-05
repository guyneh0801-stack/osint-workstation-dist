h=o.current,y=c.current;if(y!==n){const w=f.current,E=ei(h);n?g("MOUNT"):E==="none"||h?.display==="n
one"?g("UNMOUNT"):g(y&&w!==E?"ANIMATION_OUT":"UNMOUNT"),c.current=n}},[n,g]),vt(()=>{if(s){let
h;const y=s.ownerDocument.defaultView??window,b=E=>{const A=ei(o.current).includes(CSS.escape(E.anim
ationName));if(E.target===s&&A&&(g("ANIMATION_END"),!c.current)){const N=s.style.animationFillMode;s
.style.animationFillMode="forwards",h=y.setTimeout(()=>{s.style.animationFillMode==="forwards"&&(s.s
tyle.animationFillMode=N)})}},w=E=>{E.target===s&&(f.current=ei(o.current))};return s.addEventListen
er("animationstart",w),s.addEventListener("animationcancel",b),s.addEventListener("animationend",b),
()=>{y.clearTimeout(h),s.removeEventListener("animationstart",w),s.removeEventListener("animationcan
cel",b),s.removeEventListener("animationend",b)}}else g("ANIMATION_END")},[s,g]),{isPresent:["mounte
d","unmountSuspended"].includes(m),ref:v.useCallback(h=>{o.current=h?getComputedStyle(h):null,r(h)},
[])}}function ei(n){return n?.animationName||"none"}function WN(n){let
s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning;return
r?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning,r?n.props.ref:n.props.ref||n.ref}function zn(n,s=[]){let r=[];function
o(f,p){const m=v.createContext(p),g=r.length;r=[...r,p];const
h=b=>{const{scope:w,children:E,...T}=b,A=w?.[n]?.[g]||m,N=v.useMemo(()=>T,Object.values(T));return
d.jsx(A.Provider,{value:N,children:E})};h.displayName=f+"Provider";function y(b,w){const
E=w?.[n]?.[g]||m,T=v.useContext(E);if(T)return T;if(p!==void 0)return p;throw new Error(`\`${b}\`
must be used within \`${f}\``)}return[h,y]}const c=()=>{const f=r.map(p=>v.createContext(p));return
function(m){const g=m?.[n]||f;return v.useMemo(()=>({[`__scope${n}`]:{...m,[n]:g}}),[m,g])}};return
c.scopeName=n,[o,e3(c,...s)]}function e3(...n){const s=n[0];if(n.length===1)return s;const
r=()=>{const o=n.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(f){const
p=o.reduce((m,{useScope:g,scopeName:h})=>{const b=g(f)[`__scope${h}`];return{...m,...b}},{});return
v.useMemo(()=>({[`__scope${s.scopeName}`]:p}),[p])}};return r.scopeName=s.scopeName,r}function
At(n){const s=v.useRef(n);return
v.useEffect(()=>{s.current=n}),v.useMemo(()=>(...r)=>s.current?.(...r),[])}var
t3=v.createContext(void 0);function Ti(n){const s=v.useContext(t3);return n||s||"ltr"}function
kd(n,[s,r]){return Math.min(r,Math.max(s,n))}function
xe(n,s,{checkForDefaultPrevented:r=!0}={}){return
function(c){if(n?.(c),r===!1||!c.defaultPrevented)return s?.(c)}}function a3(n,s){return
v.useReducer((r,o)=>s[r][o]??r,n)}var df="ScrollArea",[Bx]=zn(df),[n3,la]=Bx(df),Vx=v.forwardRef((n,
s)=>{const{__scopeScrollArea:r,type:o="hover",dir:c,scrollHideDelay:f=600,...p}=n,[m,g]=v.useState(n
ull),[h,y]=v.useState(null),[b,w]=v.useState(null),[E,T]=v.useState(null),[A,N]=v.useState(null),[C,
O]=v.useState(0),[D,B]=v.useState(0),[Y,Z]=v.useState(!1),[j,q]=v.useState(!1),J=qe(s,se=>g(se)),ee=
Ti(c);return d.jsx(n3,{scope:r,type:o,dir:ee,scrollHideDelay:f,scrollArea:m,viewport:h,onViewportCha
nge:y,content:b,onContentChange:w,scrollbarX:E,onScrollbarXChange:T,scrollbarXEnabled:Y,onScrollbarX
EnabledChange:Z,scrollbarY:A,onScrollbarYChange:N,scrollbarYEnabled:j,onScrollbarYEnabledChange:q,on
CornerWidthChange:O,onCornerHeightChange:B,children:d.jsx(_e.div,{dir:ee,...p,ref:J,style:{position:
"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":D+"px",...n
.style}})})});Vx.displayName=df;var qx="ScrollAreaViewport",Yx=v.forwardRef((n,s)=>{const{__scopeScr
ollArea:r,children:o,nonce:c,...f}=n,p=la(qx,r),m=v.useRef(null),g=qe(s,m,p.onViewportChange);return
d.jsxs(d.Fragment,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area
-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radi
x-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:c}),d.jsx(_e.div,{"data-radix-scrol
l-area-viewport":"",...f,ref:g,style:{overflowX:p.scrollbarXEnabled?"scroll":"hidden",overflowY:p.sc
rollbarYEnabled?"scroll":"hidden",...n.style},children:d.jsx("div",{ref:p.onContentChange,style:{min
Width:"100%",display:"table"},children:o})})]})});Yx.displayName=qx;var Ea="ScrollAreaScrollbar",Gx=
v.forwardRef((n,s)=>{const{forceMount:r,...o}=n,c=la(Ea,n.__scopeScrollArea),{onScrollbarXEnabledCha
nge:f,onScrollbarYEnabledChange:p}=c,m=n.orientation==="horizontal";return v.useEffect(()=>(m?f(!0):
p(!0),()=>{m?f(!1):p(!1)}),[m,f,p]),c.type==="hover"?d.jsx(l3,{...o,ref:s,forceMount:r}):c.type==="s
croll"?d.jsx(s3,{...o,ref:s,forceMount:r}):c.type==="auto"?d.jsx(Xx,{...o,ref:s,forceMount:r}):c.typ
e==="always"?d.jsx(ff,{...o,ref:s}):null});Gx.displayName=Ea;var l3=v.forwardRef((n,s)=>{const{force
Mount:r,...o}=n,c=la(Ea,n.__scopeScrollArea),[f,p]=v.useState(!1);return v.useEffect(()=>{const
m=c.scrollArea;let g=0;if(m){const
h=()=>{window.clearTimeout(g),p(!0)},y=()=>{g=window.setTimeout(()=>p(!1),c.scrollHideDelay)};return
m.addEventListener("pointerenter",h),m.addEventListener("pointerleave",y),()=>{window.clearTimeout(g
),m.removeEventListener("pointerenter",h),m.removeEventListener("pointerleave",y)}}},[c.scrollArea,c
.scrollHideDelay]),d.jsx(Dn,{present:r||f,children:d.jsx(Xx,{"data-state":f?"visible":"hidden",...o,
ref:s})})}),s3=v.forwardRef((n,s)=>{const{forceMount:r,...o}=n,c=la(Ea,n.__scopeScrollArea),f=n.orie
ntation==="horizontal",p=Mi(()=>g("SCROLL_END"),100),[m,g]=a3("hidden",{hidden:{SCROLL:"scrolling"},
scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_
LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return
v.useEffect(()=>{if(m==="idle"){const h=window.setTimeout(()=>g("HIDE"),c.scrollHideDelay);return()=
>window.clearTimeout(h)}},[m,c.scrollHideDelay,g]),v.useEffect(()=>{const
h=c.viewport,y=f?"scrollLeft":"scrollTop";if(h){let b=h[y];const w=()=>{const
E=h[y];b!==E&&(g("SCROLL"),p()),b=E};return h.addEventListener("scroll",w),()=>h.removeEventListener
("scroll",w)}},[c.viewport,f,g,p]),d.jsx(Dn,{present:r||m!=="hidden",children:d.jsx(ff,{"data-state"
:m==="hidden"?"hidden":"visible",...o,ref:s,onPointerEnter:xe(n.onPointerEnter,()=>g("POINTER_ENTER"
)),onPointerLeave:xe(n.onPointerLeave,()=>g("POINTER_LEAVE"))})})}),Xx=v.forwardRef((n,s)=>{const r=
la(Ea,n.__scopeScrollArea),{forceMount:o,...c}=n,[f,p]=v.useState(!1),m=n.orientation==="horizontal"
,g=Mi(()=>{if(r.viewport){const h=r.viewport.offsetWidth<r.viewport.scrollWidth,y=r.viewport.offsetH
eight<r.viewport.scrollHeight;p(m?h:y)}},10);return es(r.viewport,g),es(r.content,g),d.jsx(Dn,{prese
nt:o||f,children:d.jsx(ff,{"data-state":f?"visible":"hidden",...c,ref:s})})}),ff=v.forwardRef((n,s)=
>{const{orientation:r="vertical",...o}=n,c=la(Ea,n.__scopeScrollArea),f=v.useRef(null),p=v.useRef(0)
,[m,g]=v.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=Kx(m.view
port,m.content),y={...o,sizes:m,onSizesChange:g,hasThumb:h>0&&h<1,onThumbChange:w=>f.current=w,onThu
mbPointerUp:()=>p.current=0,onThumbPointerDown:w=>p.current=w};function b(w,E){return
d3(w,p.current,m,E)}return
r==="horizontal"?d.jsx(r3,{...y,ref:s,onThumbPositionChange:()=>{if(c.viewport&&f.current){const
w=c.viewport.scrollLeft,E=uv(w,m,c.dir);f.current.style.transform=`translate3d(${E}px, 0, 0)`}},onWh
eelScroll:w=>{c.viewport&&(c.viewport.scrollLeft=w)},onDragScroll:w=>{c.viewport&&(c.viewport.scroll
Left=b(w,c.dir))}}):r==="vertical"?d.jsx(o3,{...y,ref:s,onThumbPositionChange:()=>{if(c.viewport&&f.
current){const w=c.viewport.scrollTop,E=uv(w,m);f.current.style.transform=`translate3d(0, ${E}px, 0)
`}},onWheelScroll:w=>{c.viewport&&(c.viewport.scrollTop=w)},onDragScroll:w=>{c.viewport&&(c.viewport
.scrollTop=b(w))}}):null}),r3=v.forwardRef((n,s)=>{const{sizes:r,onSizesChange:o,...c}=n,f=la(Ea,n._
_scopeScrollArea),[p,m]=v.useState(),g=v.useRef(null),h=qe(s,g,f.onScrollbarXChange);return v.useEff
ect(()=>{g.current&&m(getComputedStyle(g.current))},[g]),d.jsx(Qx,{"data-orientation":"horizontal",.
..c,ref:h,sizes:r,style:{bottom:0,left:f.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right
:f.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Ri(r)+"px
",...n.style},onThumbPointerDown:y=>n.onThumbPointerDown(y.x),onDragScroll:y=>n.onDragScroll(y.x),on
WheelScroll:(y,b)=>{if(f.viewport){const w=f.viewport.scrollLeft+y.deltaX;n.onWheelScroll(w),Jx(w,b)
&&y.preventDefault()}},onResize:()=>{g.current&&f.viewport&&p&&o({content:f.viewport.scrollWidth,vie
wport:f.viewport.offsetWidth,scrollbar:{size:g.current.clientWidth,paddingStart:yi(p.paddingLeft),pa
ddingEnd:yi(p.paddingRight)}})}})}),o3=v.forwardRef((n,s)=>{const{sizes:r,onSizesChange:o,...c}=n,f=
la(Ea,n.__scopeScrollArea),[p,m]=v.useState(),g=v.useRef(null),h=qe(s,g,f.onScrollbarYChange);return
v.useEffect(()=>{g.current&&m(getComputedStyle(g.current))},[g]),d.jsx(Qx,{"data-orientation":"verti
cal",...c,ref:h,sizes:r,style:{top:0,right:f.dir==="ltr"?0:void 0,left:f.dir==="rtl"?0:void 0,bottom
:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Ri(r)+"px",...n.style},
onThumbPointerDown:y=>n.onThumbPointerDown(y.y),onDragScroll:y=>n.onDragScroll(y.y),onWheelScroll:(y
,b)=>{if(f.viewport){const w=f.viewport.scrollTop+y.deltaY;n.onWheelScroll(w),Jx(w,b)&&y.preventDefa
ult()}},onResize:()=>{g.current&&f.viewport&&p&&o({content:f.viewport.scrollHeight,viewport:f.viewpo
rt.offsetHeight,scrollbar:{size:g.current.clientHeight,paddingStart:yi(p.paddingTop),paddingEnd:yi(p
.paddingBottom)}})}})}),[i3,Ix]=Bx(Ea),Qx=v.forwardRef((n,s)=>{const{__scopeScrollArea:r,sizes:o,has
Thumb:c,onThumbChange:f,onThumbPointerUp:p,onThumbPointerDown:m,onThumbPositionChange:g,onDragScroll
:h,onWheelScroll:y,onResize:b,...w}=n,E=la(Ea,r),[T,A]=v.useState(null),N=qe(s,J=>A(J)),C=v.useRef(n
ull),O=v.useRef(""),D=E.viewport,B=o.content-o.viewport,Y=At(y),Z=At(g),j=Mi(b,10);function
q(J){if(C.current){const
ee=J.clientX-C.current.left,se=J.clientY-C.current.top;h({x:ee,y:se})}}return v.useEffect(()=>{const
J=ee=>{const se=ee.target;T?.contains(se)&&Y(ee,B)};return document.addEventListener("wheel",J,{pass
ive:!1}),()=>document.removeEventListener("wheel",J,{passive:!1})},[D,T,B,Y]),v.useEffect(Z,[o,Z]),e
s(T,j),es(E.content,j),d.jsx(i3,{scope:r,scrollbar:T,hasThumb:c,onThumbChange:At(f),onThumbPointerUp
:At(p),onThumbPositionChange:Z,onThumbPointerDown:At(m),children:d.jsx(_e.div,{...w,ref:N,style:{pos
ition:"absolute",...w.style},onPointerDown:xe(n.onPointerDown,J=>{J.button===0&&(J.target.setPointer
Capture(J.pointerId),C.current=T.getBoundingClientRect(),O.current=document.body.style.webkitUserSel
ect,document.body.style.webkitUserSelect="none",E.viewport&&(E.viewport.style.scrollBehavior="auto")
,q(J))}),onPointerMove:xe(n.onPointerMove,q),onPointerUp:xe(n.onPointerUp,J=>{const ee=J.target;ee.h
asPointerCapture(J.pointerId)&&ee.releasePointerCapture(J.pointerId),document.body.style.webkitUserS
elect=O.current,E.viewport&&(E.viewport.style.scrollBehavior=""),C.current=null})})})}),xi="ScrollAr
eaThumb",Zx=v.forwardRef((n,s)=>{const{forceMount:r,...o}=n,c=Ix(xi,n.__scopeScrollArea);return d.js
x(Dn,{present:r||c.hasThumb,children:d.jsx(c3,{ref:s,...o})})}),c3=v.forwardRef((n,s)=>{const{__scop
eScrollArea:r,style:o,...c}=n,f=la(xi,r),p=Ix(xi,r),{onThumbPositionChange:m}=p,g=qe(s,b=>p.onThumbC
hange(b)),h=v.useRef(void 0),y=Mi(()=>{h.current&&(h.current(),h.current=void 0)},100);return
v.useEffect(()=>{const b=f.viewport;if(b){const w=()=>{if(y(),!h.current){const
E=f3(b,m);h.current=E,m()}};return m(),b.addEventListener("scroll",w),()=>b.removeEventListener("scr
oll",w)}},[f.viewport,y,m]),d.jsx(_e.div,{"data-state":p.hasThumb?"visible":"hidden",...c,ref:g,styl
e:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...o}
,onPointerDownCapture:xe(n.onPointerDownCapture,b=>{const E=b.target.getBoundingClientRect(),T=b.cli
entX-E.left,A=b.clientY-E.top;p.onThumbPointerDown({x:T,y:A})}),onPointerUp:xe(n.onPointerUp,p.onThu
mbPointerUp)})});Zx.displayName=xi;var pf="ScrollAreaCorner",$x=v.forwardRef((n,s)=>{const
r=la(pf,n.__scopeScrollArea),o=!!(r.scrollbarX&&r.scrollbarY);return
r.type!=="scroll"&&o?d.jsx(u3,{...n,ref:s}):null});$x.displayName=pf;var u3=v.forwardRef((n,s)=>{con
st{__scopeScrollArea:r,...o}=n,c=la(pf,r),[f,p]=v.useState(0),[m,g]=v.useState(0),h=!!(f&&m);return
es(c.scrollbarX,()=>{const
y=c.scrollbarX?.offsetHeight||0;c.onCornerHeightChange(y),g(y)}),es(c.scrollbarY,()=>{const y=c.scro
llbarY?.offsetWidth||0;c.onCornerWidthChange(y),p(y)}),h?d.jsx(_e.div,{...o,ref:s,style:{width:f,hei
ght:m,position:"absolute",right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void
0,bottom:0,...n.style}}):null});function yi(n){return n?parseInt(n,10):0}function Kx(n,s){const
r=n/s;return isNaN(r)?0:r}function Ri(n){const s=Kx(n.viewport,n.content),r=n.scrollbar.paddingStart
+n.scrollbar.paddingEnd,o=(n.scrollbar.size-r)*s;return Math.max(o,18)}function
d3(n,s,r,o="ltr"){const c=Ri(r),f=c/2,p=s||f,m=c-p,g=r.scrollbar.paddingStart+p,h=r.scrollbar.size-r
.scrollbar.paddingEnd-m,y=r.content-r.viewport,b=o==="ltr"?[0,y]:[y*-1,0];return
Fx([g,h],b)(n)}function uv(n,s,r="ltr"){const o=Ri(s),c=s.scrollbar.paddingStart+s.scrollbar.padding
End,f=s.scrollbar.size-c,p=s.content-s.viewport,m=f-o,g=r==="ltr"?[0,p]:[p*-1,0],h=kd(n,g);return
Fx([0,p],[0,m])(h)}function Fx(n,s){return r=>{if(n[0]===n[1]||s[0]===s[1])return s[0];const
o=(s[1]-s[0])/(n[1]-n[0]);return s[0]+o*(r-n[0])}}function Jx(n,s){return n>0&&n<s}var
f3=(n,s=()=>{})=>{let r={left:n.scrollLeft,top:n.scrollTop},o=0;return(function c(){const f={left:n.
scrollLeft,top:n.scrollTop},p=r.left!==f.left,m=r.top!==f.top;(p||m)&&s(),r=f,o=window.requestAnimat
ionFrame(c)})(),()=>window.cancelAnimationFrame(o)};function Mi(n,s){const
r=At(n),o=v.useRef(0);return v.useEffect(()=>()=>window.clearTimeout(o.current),[]),v.useCallback(()
=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,s)},[r,s])}function es(n,s){const
r=At(s);vt(()=>{let o=0;if(n){const c=new
ResizeObserver(()=>{cancelAnimationFrame(o),o=window.requestAnimationFrame(r)});return
c.observe(n),()=>{window.cancelAnimationFrame(o),c.unobserve(n)}}},[n,r])}var
p3=Vx,h3=Yx,m3=$x;function dv({className:n,children:s,...r}){return d.jsxs(p3,{"code-path":"src/comp
onents/ui/scroll-area.tsx:14:5","data-slot":"scroll-area",className:Ae("relative",n),...r,children:[
d.jsx(h3,{"code-path":"src/components/ui/scroll-area.tsx:19:7","data-slot":"scroll-area-viewport",cl
assName:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow]
outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:s}),d.jsx(g3,{"code-path":"s
rc/components/ui/scroll-area.tsx:25:7"}),d.jsx(m3,{"code-path":"src/components/ui/scroll-area.tsx:26
:7"})]})}function g3({className:n,orientation:s="vertical",...r}){return d.jsx(Gx,{"code-path":"src/
components/ui/scroll-area.tsx:37:5","data-slot":"scroll-area-scrollbar",orientation:s,className:Ae("
flex touch-none p-px transition-colors select-none",s==="vertical"&&"h-full w-2.5 border-l
border-l-transparent",s==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",n),...r,child
ren:d.jsx(Zx,{"code-path":"src/components/ui/scroll-area.tsx:50:7","data-slot":"scroll-area-thumb",c
lassName:"bg-border relative flex-1 rounded-full"})})}function aa({className:n,...s}){return d.jsx("
div",{"code-path":"src/components/ui/skeleton.tsx:5:5","data-slot":"skeleton",className:Ae("bg-accen
t animate-pulse rounded-md",n),...s})}const vd=(...n)=>({}),hf={invalidate:async()=>{},refetch:async
()=>({}),fetch:async()=>({}),setData:()=>{},setInfiniteData:()=>{},getData:()=>{}};const mf={get(){return
new Proxy(hf,mf)},apply(){return Promise.resolve()}};let
Cn={isPending:!1,isIdle:!0,isSuccess:!1,isError:!1,error:null,data:void 0};function Wx(n){const
s=o=>{Cn={isPending:!0,isIdle:!1,isSuccess:!1,isError:!1,error:null,data:void
0},setTimeout(()=>{const c={};Cn={isPending:!1,isIdle:!1,isSuccess:!0,isError:!1,error:null,data:c},
n?.onSuccess?.(c)},800)};return{mutate:s,mutateAsync:async o=>(s(),{}),get isPending(){return
Cn.isPending},get isIdle(){return Cn.isIdle},get isSuccess(){return Cn.isSuccess},get
isError(){return Cn.isError},get error(){return Cn.error},get data(){return Cn.data}}}function
e1(){return{data:void 0,isLoading:!1,isError:!1,error:null,isSuccess:!1,refetch:async()=>({})}}const
Ld={get(n,s){if(typeof s==="symbol"||s==="then")return vd;const r=s;return
r==="useQuery"?e1:r==="useMutation"?Wx:r==="useUtils"?()=>new
Proxy(hf,mf):r==="invalidate"?async()=>{}:new Proxy(vd,Ld)},apply(){return new Proxy(vd,Ld)}},_t=new
Proxy({useQuery:e1,useMutation:Wx,useUtils:()=>new Proxy(hf,mf)},Ld);function v3(n){const s=new
Date(n),o=new Date().getTime()-s.getTime(),c=Math.floor(o/6e4);if(c<1)return"just
now";if(c<60)return`${c}m ago`;const f=Math.floor(c/60);return f<24?`${f}h
ago`:`${Math.floor(f/24)}d ago`}function x3(){const{t:n}=Ja(),{data:s,isLoading:r}=_t.investigation.
list.useQuery({}),o=s||[],c=v.useMemo(()=>o.filter(h=>h.status==="active").length,[o]),f=v.useMemo((
)=>{if(o.length===0)return[];const h={};return o.forEach(y=>{h[y.priority]=(h[y.priority]||0)+1}),Ob
ject.entries(h).map(([y,b])=>({name:y,value:b}))},[o]),p=v.useMemo(()=>{if(o.length===0)return[];con
st h={};return o.forEach(y=>{h[y.status]=(h[y.status]||0)+1}),Object.entries(h).map(([y,b])=>({name:
y,value:b}))},[o]),m=h=>h==="active"?"bg-emerald-500/20
text-emerald-400":h==="pending"?"bg-amber-500/20 text-amber-400":"bg-white/10
text-muted-foreground",g=h=>h==="critical"?"bg-red-500/20 text-red-400":h==="high"?"bg-amber-500/20
text-amber-400":h==="medium"?"bg-cyan-500/20 text-cyan-400":"bg-emerald-500/20
text-emerald-400";return d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:59:5",className:"p-6 spa
ce-y-6",children:[d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:60:7",children:[d.jsx("h1",{"co
de-path":"src/pages/Dashboard.tsx:61:9",className:"text-2xl font-bold",children:n("nav.dashboard")})
,d.jsx("p",{"code-path":"src/pages/Dashboard.tsx:62:9",className:"text-muted-foreground mt-1
text-sm",children:"Overview of your intelligence
operations"})]}),d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:66:7",className:"grid
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
gap-4",children:[d.jsx(Mn,{"code-path":"src/pages/Dashboard.tsx:67:9",title:"Active
Investigations",value:r?"...":String(c),icon:Wl,trend:"neutral",trendValue:o.length>0?`${o.length}
total`:"No data"}),d.jsx(Mn,{"code-path":"src/pages/Dashboard.tsx:68:9",title:"Total
Findings",value:"-",icon:Za,trend:"neutral",trendValue:"No data
available"}),d.jsx(Mn,{"code-path":"src/pages/Dashboard.tsx:69:9",title:"Entities
Tracked",value:"-",icon:cr,trend:"neutral",trendValue:"No data
available"}),d.jsx(Mn,{"code-path":"src/pages/Dashboard.tsx:70:9",title:"Monitors
Active",value:"-",icon:bx,trend:"neutral",trendValue:"No data
available"})]}),d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:74:7",className:"grid grid-cols-1
lg:grid-cols-3
gap-4",children:[d.jsxs(Ve,{"code-path":"src/pages/Dashboard.tsx:75:9",className:"lg:col-span-2 glas
s-panel",children:[d.jsx(qt,{"code-path":"src/pages/Dashboard.tsx:76:11",children:d.jsx(Yt,{"code-pa
th":"src/pages/Dashboard.tsx:76:23",className:"text-sm font-medium",children:"Findings Trend (7 Days
)"})}),d.jsx(Fe,{"code-path":"src/pages/Dashboard.tsx:77:11",children:d.jsxs("div",{"code-path":"src
/pages/Dashboard.tsx:78:13",className:"flex items-center justify-center h-[200px]
text-muted-foreground
text-sm",children:[d.jsx(jA,{"code-path":"src/pages/Dashboard.tsx:79:15",className:"h-4 w-4
mr-2"}),"Trend data will appear as investigations accumulate"]})})]}),d.jsxs(Ve,{"code-path":"src/pa
ges/Dashboard.tsx:84:9",className:"glass-panel",children:[d.jsx(qt,{"code-path":"src/pages/Dashboard
.tsx:85:11",children:d.jsx(Yt,{"code-path":"src/pages/Dashboard.tsx:85:23",className:"text-sm
font-medium",children:"Investigations by Priority"})}),d.jsx(Fe,{"code-path":"src/pages/Dashboard.ts
x:86:11",children:r?d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:87:27",className:"flex
items-center justify-center
h-[200px]",children:d.jsx(aa,{"code-path":"src/pages/Dashboard.tsx:87:87",className:"h-32 w-32 round
ed-full"})}):f.length===0?d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:89:15",className:"flex
items-center justify-center h-[200px] text-muted-foreground
text-sm",children:[d.jsx(Wg,{"code-path":"src/pages/Dashboard.tsx:89:105",className:"h-4 w-4
mr-2"}),"No investigations
yet"]}):d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:90:15",className:"flex items-center
justify-center h-[200px]",children:d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:91:17",classNam
e:"space-y-2",children:f.map(h=>d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:93:21",className:
"flex items-center
gap-2",children:[d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:94:23",className:"w-3 h-3
rounded-full bg-primary/60"}),d.jsxs("span",{"code-path":"src/pages/Dashboard.tsx:95:23",className:"
text-sm",children:[h.name,": ",h.value]})]},h.name))})})})]})]}),d.jsxs("div",{"code-path":"src/page
s/Dashboard.tsx:106:7",className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[d.jsxs(Ve,{"code-
path":"src/pages/Dashboard.tsx:107:9",className:"glass-panel",children:[d.jsxs(qt,{"code-path":"src/
pages/Dashboard.tsx:108:11",className:"flex flex-row items-center
justify-between",children:[d.jsx(Yt,{"code-path":"src/pages/Dashboard.tsx:109:13",className:"text-sm
font-medium",children:"Recent Investigations"}),d.jsx(yt,{"code-path":"src/pages/Dashboard.tsx:110:1
3",variant:"outline",className:"text-xs",children:o.length})]}),d.jsx(Fe,{"code-path":"src/pages/Das
hboard.tsx:112:11",children:d.jsx(dv,{"code-path":"src/pages/Dashboard.tsx:113:13",className:"h-[300
px]",children:r?d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:115:17",className:"space-y-3",chi
ldren:[d.jsx(aa,{"code-path":"src/pages/Dashboard.tsx:115:44",className:"h-16"}),d.jsx(aa,{"code-pat
h":"src/pages/Dashboard.tsx:115:73",className:"h-16"}),d.jsx(aa,{"code-path":"src/pages/Dashboard.ts
x:115:102",className:"h-16"})]}):o.length===0?d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:117
:17",className:"flex flex-col items-center justify-center h-[200px] text-muted-foreground
text-sm",children:[d.jsx(Wl,{"code-path":"src/pages/Dashboard.tsx:118:19",className:"h-8 w-8 mb-2
opacity-50"}),d.jsx("p",{"code-path":"src/pages/Dashboard.tsx:119:19",children:"No investigations
yet"}),d.jsx("p",{"code-path":"src/pages/Dashboard.tsx:120:19",className:"text-xs
mt-1",children:"Create your first investigation to see it here"})]}):d.jsx("div",{"code-path":"src/p
ages/Dashboard.tsx:123:17",className:"space-y-3",children:o.slice(0,10).map(h=>d.jsxs("div",{"code-p
ath":"src/pages/Dashboard.tsx:125:21",className:"flex items-center justify-between p-3 rounded-lg
bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer",children:[d.jsxs("div",{"cod
e-path":"src/pages/Dashboard.tsx:126:23",className:"flex-1
min-w-0",children:[d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:127:25",className:"flex
items-center
gap-2",children:d.jsx("span",{"code-path":"src/pages/Dashboard.tsx:128:27",className:"font-medium
text-sm truncate",children:h.title})}),d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:130:25",cl
assName:"flex items-center gap-2
mt-1",children:[d.jsx(yt,{"code-path":"src/pages/Dashboard.tsx:131:27",className:`text-[10px] ${m(h.
status)}`,children:h.status}),d.jsx(yt,{"code-path":"src/pages/Dashboard.tsx:132:27",className:`text
-[10px] ${g(h.priority)}`,children:h.priority})]})]}),d.jsx("div",{"code-path":"src/pages/Dashboard.
tsx:135:23",className:"text-right ml-4 text-xs text-muted-foreground",children:v3(h.updatedAt)})]},h
.id))})})})]}),d.jsxs(Ve,{"code-path":"src/pages/Dashboard.tsx:144:9",className:"glass-panel",childr
en:[d.jsx(qt,{"code-path":"src/pages/Dashboard.tsx:145:11",children:d.jsx(Yt,{"code-path":"src/pages
/Dashboard.tsx:145:23",className:"text-sm font-medium",children:"Activity Feed"})}),d.jsx(Fe,{"code-
path":"src/pages/Dashboard.tsx:146:11",children:d.jsx(dv,{"code-path":"src/pages/Dashboard.tsx:147:1
3",className:"h-[300px]",children:d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:148:15",classNa
me:"flex flex-col items-center justify-center h-[200px] text-muted-foreground
text-sm",children:[d.jsx(gx,{"code-path":"src/pages/Dashboard.tsx:149:17",className:"h-8 w-8 mb-2
opacity-50"}),d.jsx("p",{"code-path":"src/pages/Dashboard.tsx:150:17",children:"No recent
activity"}),d.jsx("p",{"code-path":"src/pages/Dashboard.tsx:151:17",className:"text-xs
mt-1",children:"Activity will appear as you use the platform"})]})})})]})]}),d.jsxs(Ve,{"code-path":
"src/pages/Dashboard.tsx:159:7",className:"glass-panel",children:[d.jsx(qt,{"code-path":"src/pages/D
ashboard.tsx:160:9",children:d.jsx(Yt,{"code-path":"src/pages/Dashboard.tsx:160:21",className:"text-
sm font-medium",children:"Investigation Status Distribution"})}),d.jsx(Fe,{"code-path":"src/pages/Da
shboard.tsx:161:9",children:r?d.jsx(aa,{"code-path":"src/pages/Dashboard.tsx:162:25",className:"h-[2
00px]"}):p.length===0?d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:164:13",className:"flex
items-center justify-center h-[200px] text-muted-foreground
text-sm",children:[d.jsx(Wg,{"code-path":"src/pages/Dashboard.tsx:164:103",className:"h-4 w-4
mr-2"}),"No data
available"]}):d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:165:13",className:"flex items-end
gap-6 h-[200px]
px-4",children:p.map(h=>d.jsxs("div",{"code-path":"src/pages/Dashboard.tsx:167:17",className:"flex
flex-col items-center gap-2
flex-1",children:[d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:168:19",className:"text-2xl font
-bold",children:h.value}),d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:169:19",className:"w-ful
l bg-white/5 rounded-md overflow-hidden",children:d.jsx("div",{"code-path":"src/pages/Dashboard.tsx:
170:21",className:"bg-primary/60 h-24 rounded-md",style:{height:`${Math.max(h.value*20,20)}px`}})}),
d.jsx("span",{"code-path":"src/pages/Dashboard.tsx:172:19",className:"text-xs text-muted-foreground
capitalize",children:h.name})]},h.name))})})]})]})}const y3=Ux("inline-flex items-center
justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none
focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground
hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90
focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40
dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent
hover:text-accent-foreground dark:bg-input/30 dark:border-input
dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground
hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground
dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9
px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md
px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{varian
t:"default",size:"default"}});function
He({className:n,variant:s="default",size:r="default",asChild:o=!1,...c}){const
f=o?Px:"button";return d.jsx(f,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button"
,"data-variant":s,"data-size":r,className:Ae(y3({variant:s,size:r,className:n})),...c})}function
Qa({className:n,type:s,...r}){return d.jsx("input",{"code-path":"src/components/ui/input.tsx:7:5",ty
pe:s,"data-slot":"input",className:Ae("file:text-foreground placeholder:text-muted-foreground
selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full
min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow]
outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm
file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50
focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive",n),...r})}var b3=["a","button","div","form","h2","h3","img","input"
,"label","li","nav","ol","p","select","span","svg","ul"],S3=b3.reduce((n,s)=>{const
r=uf(`Primitive.${s}`),o=v.forwardRef((c,f)=>{const{asChild:p,...m}=c,g=p?r:s;return typeof
window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(g,{...m,ref:f})});return o.displayName=`Primit
ive.${s}`,{...n,[s]:o}},{}),w3="Label",t1=v.forwardRef((n,s)=>d.jsx(S3.label,{...n,ref:s,onMouseDown
:r=>{r.target.closest("button, input, select, textarea")||(n.onMouseDown?.(r),!r.defaultPrevented&&r
.detail>1&&r.preventDefault())}}));t1.displayName=w3;var A3=t1;function
Ql({className:n,...s}){return
d.jsx(A3,{"code-path":"src/components/ui/label.tsx:13:5","data-slot":"label",className:Ae("flex
items-center gap-2 text-sm leading-none font-medium select-none
group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50
peer-disabled:cursor-not-allowed peer-disabled:opacity-50",n),...s})}var N3=["a","button","div","for
m","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],E3=N3.reduce((n,s
)=>{const r=uf(`Primitive.${s}`),o=v.forwardRef((c,f)=>{const{asChild:p,...m}=c,g=p?r:s;return
typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),d.jsx(g,{...m,ref:f})});return o.displayName=
`Primitive.${s}`,{...n,[s]:o}},{}),C3="Separator",fv="horizontal",j3=["horizontal","vertical"],a1=v.
forwardRef((n,s)=>{const{decorative:r,orientation:o=fv,...c}=n,f=T3(o)?o:fv,m=r?{role:"none"}:{"aria
-orientation":f==="vertical"?f:void 0,role:"separator"};return
d.jsx(E3.div,{"data-orientation":f,...m,...c,ref:s})});a1.displayName=C3;function T3(n){return
j3.includes(n)}var R3=a1;function
pv({className:n,orientation:s="horizontal",decorative:r=!0,...o}){return d.jsx(R3,{"code-path":"src/
components/ui/separator.tsx:15:5","data-slot":"separator",decorative:r,orientation:s,className:Ae("b
g-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full
data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",n),...o})}var M3=Fd["
useInsertionEffect ".trim().toString()]||vt;function ts({prop:n,defaultProp:s,onChange:r=()=>{},call
er:o}){const[c,f,p]=_3({defaultProp:s,onChange:r}),m=n!==void 0,g=m?n:c;{const y=v.useRef(n!==void
0);v.useEffect(()=>{const b=y.current;b!==m&&console.warn(`${o} is changing from
${b?"controlled":"uncontrolled"} to ${m?"controlled":"uncontrolled"}. Components should not switch
from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled
value for the lifetime of the component.`),y.current=m},[m,o])}const h=v.useCallback(y=>{if(m){const
b=O3(y)?y(n):y;b!==n&&p.current?.(b)}else f(y)},[m,n,f,p]);return[g,h]}function
_3({defaultProp:n,onChange:s}){const[r,o]=v.useState(n),c=v.useRef(r),f=v.useRef(s);return M3(()=>{f
.current=s},[s]),v.useEffect(()=>{c.current!==r&&(f.current?.(r),c.current=r)},[r,c]),[r,o,f]}functi
on O3(n){return typeof n=="function"}function n1(n){const s=v.useRef({value:n,previous:n});return v.
useMemo(()=>(s.current.value!==n&&(s.current.previous=s.current.value,s.current.value=n),s.current.p
revious),[n])}function l1(n){const[s,r]=v.useState(void 0);return
vt(()=>{if(n){r({width:n.offsetWidth,height:n.offsetHeight});const o=new
ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const f=c[0];let p,m;if("borderBoxSize"in
f){const g=f.borderBoxSize,h=Array.isArray(g)?g[0]:g;p=h.inlineSize,m=h.blockSize}else
p=n.offsetWidth,m=n.offsetHeight;r({width:p,height:m})});return
o.observe(n,{box:"border-box"}),()=>o.unobserve(n)}else r(void 0)},[n]),s}var _i="Switch",[D3]=zn(_i
),[z3,k3]=D3(_i),s1=v.forwardRef((n,s)=>{const{__scopeSwitch:r,name:o,checked:c,defaultChecked:f,req
uired:p,disabled:m,value:g="on",onCheckedChange:h,form:y,...b}=n,[w,E]=v.useState(null),T=qe(s,D=>E(
D)),A=v.useRef(!1),N=w?y||!!w.closest("form"):!0,[C,O]=ts({prop:c,defaultProp:f??!1,onChange:h,calle
r:_i});return d.jsxs(z3,{scope:r,checked:C,disabled:m,children:[d.jsx(_e.button,{type:"button",role:
"switch","aria-checked":C,"aria-required":p,"data-state":c1(C),"data-disabled":m?"":void 0,disabled:
m,value:g,...b,ref:T,onClick:xe(n.onClick,D=>{O(B=>!B),N&&(A.current=D.isPropagationStopped(),A.curr
ent||D.stopPropagation())})}),N&&d.jsx(i1,{control:w,bubbles:!A.current,name:o,value:g,checked:C,req
uired:p,disabled:m,form:y,style:{transform:"translateX(-100%)"}})]})});s1.displayName=_i;var
r1="SwitchThumb",o1=v.forwardRef((n,s)=>{const{__scopeSwitch:r,...o}=n,c=k3(r1,r);return
d.jsx(_e.span,{"data-state":c1(c.checked),"data-disabled":c.disabled?"":void
0,...o,ref:s})});o1.displayName=r1;var L3="SwitchBubbleInput",i1=v.forwardRef(({__scopeSwitch:n,cont
rol:s,checked:r,bubbles:o=!0,...c},f)=>{const p=v.useRef(null),m=qe(p,f),g=n1(r),h=l1(s);return
v.useEffect(()=>{const y=p.current;if(!y)return;const b=window.HTMLInputElement.prototype,E=Object.g
etOwnPropertyDescriptor(b,"checked").set;if(g!==r&&E){const T=new Event("click",{bubbles:o});E.call(
y,r),y.dispatchEvent(T)}},[g,r,o]),d.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,
...c,tabIndex:-1,ref:m,style:{...c.style,...h,position:"absolute",pointerEvents:"none",opacity:0,mar
gin:0}})});i1.displayName=L3;function c1(n){return n?"checked":"unchecked"}var H3=s1,P3=o1;function
U3({className:n,...s}){return
d.jsx(H3,{"code-path":"src/components/ui/switch.tsx:13:5","data-slot":"switch",className:Ae("peer
data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring
focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8
shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none
focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",n),...s,children:d.jsx(P3,
{"code-path":"src/components/ui/switch.tsx:21:7","data-slot":"switch-thumb",className:Ae("bg-backgro
und dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground
pointer-events-none block size-4 rounded-full ring-0 transition-transform
data-[state=checked]:translate-x-[calc(100%-2px)]
data-[state=unchecked]:translate-x-0")})})}function hv(n){const s=B3(n),r=v.forwardRef((o,c)=>{const
{children:f,...p}=o,m=v.Children.toArray(f),g=m.find(q3);if(g){const h=g.props.children,y=m.map(b=>b
===g?v.Children.count(h)>1?v.Children.only(null):v.isValidElement(h)?h.props.children:null:b);return
d.jsx(s,{...p,ref:c,children:v.isValidElement(h)?v.cloneElement(h,void 0,y):null})}return
d.jsx(s,{...p,ref:c,children:f})});return r.displayName=`${n}.Slot`,r}function B3(n){const
s=v.forwardRef((r,o)=>{const{children:c,...f}=r;if(v.isValidElement(c)){const
p=G3(c),m=Y3(f,c.props);return c.type!==v.Fragment&&(m.ref=o?Nr(o,p):p),v.cloneElement(c,m)}return
v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var
V3=Symbol("radix.slottable");function q3(n){return v.isValidElement(n)&&typeof
n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===V3}function Y3(n,s){const
r={...s};for(const o in s){const c=n[o],f=s[o];/^on[A-Z]/.test(o)?c&&f?r[o]=(...m)=>{const
g=f(...m);return c(...m),g}:c&&(r[o]=c):o==="style"?r[o]={...c,...f}:o==="className"&&(r[o]=[c,f].fi
lter(Boolean).join(" "))}return{...n,...r}}function G3(n){let
s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning;return
r?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function u1(n){const
s=n+"CollectionProvider",[r,o]=zn(s),[c,f]=r(s,{collectionRef:{current:null},itemMap:new
Map}),p=A=>{const{scope:N,children:C}=A,O=jn.useRef(null),D=jn.useRef(new Map).current;return
d.jsx(c,{scope:N,itemMap:D,collectionRef:O,children:C})};p.displayName=s;const m=n+"CollectionSlot",
g=hv(m),h=jn.forwardRef((A,N)=>{const{scope:C,children:O}=A,D=f(m,C),B=qe(N,D.collectionRef);return
d.jsx(g,{ref:B,children:O})});h.displayName=m;const y=n+"CollectionItemSlot",b="data-radix-collectio
n-item",w=hv(y),E=jn.forwardRef((A,N)=>{const{scope:C,children:O,...D}=A,B=jn.useRef(null),Y=qe(N,B)
,Z=f(y,C);return jn.useEffect(()=>(Z.itemMap.set(B,{ref:B,...D}),()=>{Z.itemMap.delete(B)})),d.jsx(w
,{[b]:"",ref:Y,children:O})});E.displayName=y;function T(A){const
N=f(n+"CollectionConsumer",A);return jn.useCallback(()=>{const
O=N.collectionRef.current;if(!O)return[];const D=Array.from(O.querySelectorAll(`[${b}]`));return Arr
ay.from(N.itemMap.values()).sort((Z,j)=>D.indexOf(Z.ref.current)-D.indexOf(j.ref.current))},[N.colle
ctionRef,N.itemMap])}return[{Provider:p,Slot:h,ItemSlot:E},T,o]}function
X3(n,s=globalThis?.document){const r=At(n);v.useEffect(()=>{const
o=c=>{c.key==="Escape"&&r(c)};return s.addEventListener("keydown",o,{capture:!0}),()=>s.removeEventL
istener("keydown",o,{capture:!0})},[r,s])}var I3="DismissableLayer",Hd="dismissableLayer.update",Q3=
"dismissableLayer.pointerDownOutside",Z3="dismissableLayer.focusOutside",mv,d1=v.createContext({laye
rs:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),gf=v.forwardRef((n,s)=>
{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:c,onFocusOutside:f,on
InteractOutside:p,onDismiss:m,...g}=n,h=v.useContext(d1),[y,b]=v.useState(null),w=y?.ownerDocument??
globalThis?.document,[,E]=v.useState({}),T=qe(s,j=>b(j)),A=Array.from(h.layers),[N]=[...h.layersWith
OutsidePointerEventsDisabled].slice(-1),C=A.indexOf(N),O=y?A.indexOf(y):-1,D=h.layersWithOutsidePoin
erEventsDisabled.size>0,B=O>=C,Y=F3(j=>{const q=j.target,J=[...h.branches].some(ee=>ee.contains(q))
;!B||J||(c?.(j),p?.(j),j.defaultPrevented||m?.())},w),Z=J3(j=>{const q=j.target;[...h.branches].some
(ee=>ee.contains(q))||(f?.(j),p?.(j),j.defaultPrevented||m?.())},w);return X3(j=>{O===h.layers.size-
1&&(o?.(j),!j.defaultPrevented&&m&&(j.preventDefault(),m()))},w),v.useEffect(()=>{if(y)return r&&(h.
layersWithOutsidePointerEventsDisabled.size===0&&(mv=w.body.style.pointerEvents,w.body.style.pointer
Events="none"),h.layersWithOutsidePointerEventsDisabled.add(y)),h.layers.add(y),gv(),()=>{r&&h.layer
sWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=mv)}},[y,w,r,h]),v.useEffect
(()=>()=>{y&&(h.layers.delete(y),h.layersWithOutsidePointerEventsDisabled.delete(y),gv())},[y,h]),v.
useEffect(()=>{const j=()=>E({});return document.addEventListener(Hd,j),()=>document.removeEventList
ener(Hd,j)},[]),d.jsx(_e.div,{...g,ref:T,style:{pointerEvents:D?B?"auto":"none":void 0,...n.style},o
nFocusCapture:xe(n.onFocusCapture,Z.onFocusCapture),onBlurCapture:xe(n.onBlurCapture,Z.onBlurCapture
),onPointerDownCapture:xe(n.onPointerDownCapture,Y.onPointerDownCapture)})});gf.displayName=I3;var
$3="DismissableLayerBranch",K3=v.forwardRef((n,s)=>{const
r=v.useContext(d1),o=v.useRef(null),c=qe(s,o);return v.useEffect(()=>{const f=o.current;if(f)return 
r.branches.add(f),()=>{r.branches.delete(f)}},[r.branches]),d.jsx(_e.div,{...n,ref:c})});K3.displayN
ame=$3;function F3(n,s=globalThis?.document){const r=At(n),o=v.useRef(!1),c=v.useRef(()=>{});return
v.useEffect(()=>{const f=m=>{if(m.target&&!o.current){let
g=function(){f1(Q3,r,h,{discrete:!0})};const h={originalEvent:m};m.pointerType==="touch"?(s.removeEv
entListener("click",c.current),c.current=g,s.addEventListener("click",c.current,{once:!0})):g()}else
s.removeEventListener("click",c.current);o.current=!1},p=window.setTimeout(()=>{s.addEventListener("
pointerdown",f)},0);return()=>{window.clearTimeout(p),s.removeEventListener("pointerdown",f),s.remov
eEventListener("click",c.current)}},[s,r]),{onPointerDownCapture:()=>o.current=!0}}function
J3(n,s=globalThis?.document){const r=At(n),o=v.useRef(!1);return v.useEffect(()=>{const
c=f=>{f.target&&!o.current&&f1(Z3,r,{originalEvent:f},{discrete:!1})};return s.addEventListener("foc
usin",c),()=>s.removeEventListener("focusin",c)},[s,r]),{onFocusCapture:()=>o.current=!0,onBlurCaptu
re:()=>o.current=!1}}function gv(){const n=new CustomEvent(Hd);document.dispatchEvent(n)}function
f1(n,s,r,{discrete:o}){const c=r.originalEvent.target,f=new CustomEvent(n,{bubbles:!1,cancelable:!0,
detail:r});s&&c.addEventListener(n,s,{once:!0}),o?KN(c,f):c.dispatchEvent(f)}var xd=0;function
W3(){v.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.
body.insertAdjacentElement("afterbegin",n[0]??vv()),document.body.insertAdjacentElement("beforeend",
n[1]??vv()),xd++,()=>{xd===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(s=>s.rem
ove()),xd--}},[])}function vv(){const n=document.createElement("span");return n.setAttribute("data-r
adix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixe
d",n.style.pointerEvents="none",n}var yd="focusScope.autoFocusOnMount",bd="focusScope.autoFocusOnUnm
ount",xv={bubbles:!1,cancelable:!0},eE="FocusScope",p1=v.forwardRef((n,s)=>{const{loop:r=!1,trapped:
o=!1,onMountAutoFocus:c,onUnmountAutoFocus:f,...p}=n,[m,g]=v.useState(null),h=At(c),y=At(f),b=v.useR
ef(null),w=qe(s,A=>g(A)),E=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).cu
rrent;v.useEffect(()=>{if(o){let A=function(D){if(E.paused||!m)return;const B=D.target;m.contains(B)
?b.current=B:Tn(b.current,{select:!0})},N=function(D){if(E.paused||!m)return;const B=D.relatedTarget
;B!==null&&(m.contains(B)||Tn(b.current,{select:!0}))},C=function(D){if(document.activeElement===doc
ument.body)for(const Y of D)Y.removedNodes.length>0&&Tn(m)};document.addEventListener("focusin",A),d
ocument.addEventListener("focusout",N);const O=new MutationObserver(C);return m&&O.observe(m,{childL
ist:!0,subtree:!0}),()=>{document.removeEventListener("focusin",A),document.removeEventListener("foc
usout",N),O.disconnect()}}},[o,m,E.paused]),v.useEffect(()=>{if(m){bv.add(E);const
A=document.activeElement;if(!m.contains(A)){const C=new CustomEvent(yd,xv);m.addEventListener(yd,h),
m.dispatchEvent(C),C.defaultPrevented||(tE(rE(h1(m)),{select:!0}),document.activeElement===A&&Tn(m))
}return()=>{m.removeEventListener(yd,h),setTimeout(()=>{const C=new CustomEvent(bd,xv);m.addEventLis
tener(bd,y),m.dispatchEvent(C),C.defaultPrevented||Tn(A??document.body,{select:!0}),m.removeEventLis
tener(bd,y),bv.remove(E)},0)}}},[m,h,y,E]);const
T=v.useCallback(A=>{if(!r&&!o||E.paused)return;const
N=A.key==="Tab"&&!A.altKey&&!A.ctrlKey&&!A.metaKey,C=document.activeElement;if(N&&C){const O=A.curre
tTarget,[D,B]=aE(O);D&&B?!A.shiftKey&&C===B?(A.preventDefault(),r&&Tn(D,{select:!0})):A.shiftKey&&C
===D&&(A.preventDefault(),r&&Tn(B,{select:!0})):C===O&&A.preventDefault()}},[r,o,E.paused]);return
d.jsx(_e.div,{tabIndex:-1,...p,ref:w,onKeyDown:T})});p1.displayName=eE;function
tE(n,{select:s=!1}={}){const r=document.activeElement;for(const o of
n)if(Tn(o,{select:s}),document.activeElement!==r)return}function aE(n){const
s=h1(n),r=yv(s,n),o=yv(s.reverse(),n);return[r,o]}function h1(n){const
s=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const
c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tab
Index>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)s.push(r.currentNode)
;return s}function yv(n,s){for(const r of n)if(!nE(r,{upTo:s}))return r}function
nE(n,{upTo:s}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(s!==void 0&&n===s)r
eturn!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function
lE(n){return n instanceof HTMLInputElement&&"select"in n}function
Tn(n,{select:s=!1}={}){if(n&&n.focus){const
r=document.activeElement;n.focus({preventScroll:!0}),n!==r&&lE(n)&&s&&n.select()}}var
bv=sE();function sE(){let n=[];return{add(s){const
r=n[0];s!==r&&r?.pause(),n=Sv(n,s),n.unshift(s)},remove(s){n=Sv(n,s),n[0]?.resume()}}}function
Sv(n,s){const r=[...n],o=r.indexOf(s);return o!==-1&&r.splice(o,1),r}function rE(n){return
n.filter(s=>s.tagName!=="A")}var oE=Fd[" useId ".trim().toString()]||(()=>{}),iE=0;function
os(n){const[s,r]=v.useState(oE());return vt(()=>{r(o=>o??String(iE++))},[n]),s?`radix-${s}`:""}const
cE=["top","right","bottom","left"],_n=Math.min,Gt=Math.max,bi=Math.round,ti=Math.floor,Sa=n=>({x:n,y
:n}),uE={left:"right",right:"left",bottom:"top",top:"bottom"},dE={start:"end",end:"start"};function
Pd(n,s,r){return Gt(n,_n(s,r))}function Ka(n,s){return typeof n=="function"?n(s):n}function
Fa(n){return n.split("-")[0]}function is(n){return n.split("-")[1]}function vf(n){return
n==="x"?"y":"x"}function xf(n){return n==="y"?"height":"width"}const fE=new
Set(["top","bottom"]);function ba(n){return fE.has(Fa(n))?"y":"x"}function yf(n){return
vf(ba(n))}function pE(n,s,r){r===void 0&&(r=!1);const o=is(n),c=yf(n),f=xf(c);let
p=c==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return
s.reference[f]>s.floating[f]&&(p=Si(p)),[p,Si(p)]}function hE(n){const
s=Si(n);return[Ud(n),s,Ud(s)]}function Ud(n){return n.replace(/start|end/g,s=>dE[s])}const
wv=["left","right"],Av=["right","left"],mE=["top","bottom"],gE=["bottom","top"];function
vE(n,s,r){switch(n){case"top":case"bottom":return r?s?Av:wv:s?wv:Av;case"left":case"right":return
s?mE:gE;default:return[]}}function xE(n,s,r,o){const c=is(n);let f=vE(Fa(n),r==="start",o);return
c&&(f=f.map(p=>p+"-"+c),s&&(f=f.concat(f.map(Ud)))),f}function Si(n){return
n.replace(/left|right|bottom|top/g,s=>uE[s])}function
yE(n){return{top:0,right:0,bottom:0,left:0,...n}}function m1(n){return typeof
n!="number"?yE(n):{top:n,right:n,bottom:n,left:n}}function wi(n){const{x:s,y:r,width:o,height:c}=n;r
eturn{width:o,height:c,top:r,left:s,right:s+o,bottom:r+c,x:s,y:r}}function
Nv(n,s,r){let{reference:o,floating:c}=n;const f=ba(s),p=yf(s),m=xf(p),g=Fa(s),h=f==="y",y=o.x+o.widt
h/2-c.width/2,b=o.y+o.height/2-c.height/2,w=o[m]/2-c[m]/2;let E;switch(g){case"top":E={x:y,y:o.y-c.h
eight};break;case"bottom":E={x:y,y:o.y+o.height};break;case"right":E={x:o.x+o.width,y:b};break;case"
left":E={x:o.x-c.width,y:b};break;default:E={x:o.x,y:o.y}}switch(is(s)){case"start":E[p]-=w*(r&&h?-1
:1);break;case"end":E[p]+=w*(r&&h?-1:1);break}return E}const bE=async(n,s,r)=>{const{placement:o="bo
ttom",strategy:c="absolute",middleware:f=[],platform:p}=r,m=f.filter(Boolean),g=await(p.isRTL==null?
void 0:p.isRTL(s));let h=await
p.getElementRects({reference:n,floating:s,strategy:c}),{x:y,y:b}=Nv(h,o,g),w=o,E={},T=0;for(let
A=0;A<m.length;A++){const{name:N,fn:C}=m[A],{x:O,y:D,data:B,reset:Y}=await C({x:y,y:b,initialPlaceme
nt:o,placement:w,strategy:c,middlewareData:E,rects:h,platform:p,elements:{reference:n,floating:s}});
y=O??y,b=D??b,E={...E,[N]:{...E[N],...B}},Y&&T<=50&&(T++,typeof
Y=="object"&&(Y.placement&&(w=Y.placement),Y.rects&&(h=Y.rects===!0?await p.getElementRects({referen
ce:n,floating:s,strategy:c}):Y.rects),{x:y,y:b}=Nv(h,w,g)),A=-1)}return{x:y,y:b,placement:w,strategy
:c,middlewareData:E}};async function vr(n,s){var r;s===void 0&&(s={});const{x:o,y:c,platform:f,rects
:p,elements:m,strategy:g}=n,{boundary:h="clippingAncestors",rootBoundary:y="viewport",elementContext
:b="floating",altBoundary:w=!1,padding:E=0}=Ka(s,n),T=m1(E),N=m[w?b==="floating"?"reference":"floati
g":b],C=wi(await f.getClippingRect({element:(r=await(f.isElement==null?void
0:f.isElement(N)))==null||r?N:N.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumen
tElement(m.floating)),boundary:h,rootBoundary:y,strategy:g})),O=b==="floating"?{x:o,y:c,width:p.floa
ting.width,height:p.floating.height}:p.reference,D=await(f.getOffsetParent==null?void
0:f.getOffsetParent(m.floating)),B=await(f.isElement==null?void
0:f.isElement(D))?await(f.getScale==null?void 0:f.getScale(D))||{x:1,y:1}:{x:1,y:1},Y=wi(f.convertOf
fsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelati
veRect({elements:m,rect:O,offsetParent:D,strategy:g}):O);return{top:(C.top-Y.top+T.top)/B.y,bottom:(
Y.bottom-C.bottom+T.bottom)/B.y,left:(C.left-Y.left+T.left)/B.x,right:(Y.right-C.right+T.right)/B.x}
}const SE=n=>({name:"arrow",options:n,async fn(s){const{x:r,y:o,placement:c,rects:f,platform:p,eleme
nts:m,middlewareData:g}=s,{element:h,padding:y=0}=Ka(n,s)||{};if(h==null)return{};const
b=m1(y),w={x:r,y:o},E=yf(c),T=xf(E),A=await p.getDimensions(h),N=E==="y",C=N?"top":"left",O=N?"botto
m":"right",D=N?"clientHeight":"clientWidth",B=f.reference[T]+f.reference[E]-w[E]-f.floating[T],Y=w[E
]-f.reference[E],Z=await(p.getOffsetParent==null?void 0:p.getOffsetParent(h));let
j=Z?Z[D]:0;(!j||!await(p.isElement==null?void
0:p.isElement(Z)))&&(j=m.floating[D]||f.floating[T]);const q=B/2-Y/2,J=j/2-A[T]/2-1,ee=_n(b[C],J),se
=_n(b[O],J),ue=ee,ge=j-A[T]-se,pe=j/2-A[T]/2+q,de=Pd(ue,pe,ge),k=!g.arrow&&is(c)!=null&&pe!==de&&f.r
eference[T]/2-(pe<ue?ee:se)-A[T]/2<0,$=k?pe<ue?pe-ue:pe-ge:0;return{[E]:w[E]+$,data:{[E]:de,centerOf
fset:pe-de-$},...k&&{alignmentOffset:$}},reset:k}}}),wE=function(n){return n===void
0&&(n={}),{name:"flip",options:n,async fn(s){var r,o;const{placement:c,middlewareData:f,rects:p,init
ialPlacement:m,platform:g,elements:h}=s,{mainAxis:y=!0,crossAxis:b=!0,fallbackPlacements:w,fallbackS
trategy:E="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:A=!0,...N}=Ka(n,s);if((r=f.arro
w)!=null&&r.alignmentOffset)return{};const C=Fa(c),O=ba(m),D=Fa(m)===m,B=await(g.isRTL==null?void
0:g.isRTL(h.floating)),Y=w||(D||!A?[Si(m)]:hE(m)),Z=T!=="none";!w&&Z&&Y.push(...xE(m,A,T,B));const
j=[m,...Y],q=await vr(s,N),J=[];let ee=((o=f.flip)==null?void
0:o.overflows)||[];if(y&&J.push(q[C]),b){const pe=pE(c,p,B);J.push(q[pe[0]],q[pe[1]])}if(ee=[...ee,{
placement:c,overflows:J}],!J.every(pe=>pe<=0)){var se,ue;const pe=(((se=f.flip)==null?void 0:se.inde
x)||0)+1,de=j[pe];if(de&&(!(b==="alignment"?O!==ba(de):!1)||ee.every(U=>ba(U.placement)===O?U.overfl
ows[0]>0:!0)))return{data:{index:pe,overflows:ee},reset:{placement:de}};let
k=(ue=ee.filter($=>$.overflows[0]<=0).sort(($,U)=>$.overflows[1]-U.overflows[1])[0])==null?void
0:ue.placement;if(!k)switch(E){case"bestFit":{var ge;const $=(ge=ee.filter(U=>{if(Z){const
oe=ba(U.placement);return oe===O||oe==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(oe=>oe>
0).reduce((oe,me)=>oe+me,0)]).sort((U,oe)=>U[1]-oe[1])[0])==null?void 0:ge[0];$&&(k=$);break}case"in
itialPlacement":k=m;break}if(c!==k)return{reset:{placement:k}}}return{}}}};function Ev(n,s){return{t
op:n.top-s.height,right:n.right-s.width,bottom:n.bottom-s.height,left:n.left-s.width}}function
Cv(n){return cE.some(s=>n[s]>=0)}const AE=function(n){return n===void
0&&(n={}),{name:"hide",options:n,async fn(s){const{rects:r}=s,{strategy:o="referenceHidden",...c}=Ka
(n,s);switch(o){case"referenceHidden":{const f=await vr(s,{...c,elementContext:"reference"}),p=Ev(f,
r.reference);return{data:{referenceHiddenOffsets:p,referenceHidden:Cv(p)}}}case"escaped":{const
f=await vr(s,{...c,altBoundary:!0}),p=Ev(f,r.floating);return{data:{escapedOffsets:p,escaped:Cv(p)}}
}default:return{}}}}},g1=new Set(["left","top"]);async function
NE(n,s){const{placement:r,platform:o,elements:c}=n,f=await(o.isRTL==null?void 0:o.isRTL(c.floating))
,p=Fa(r),m=is(r),g=ba(r)==="y",h=g1.has(p)?-1:1,y=f&&g?-1:1,b=Ka(s,n);let{mainAxis:w,crossAxis:E,ali
gnmentAxis:T}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0
,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return m&&typeof
T=="number"&&(E=m==="end"?T*-1:T),g?{x:E*y,y:w*h}:{x:w*h,y:E*y}}const EE=function(n){return n===void
0&&(n=0),{name:"offset",options:n,async fn(s){var
r,o;const{x:c,y:f,placement:p,middlewareData:m}=s,g=await NE(s,n);return
p===((r=m.offset)==null?void 0:r.placement)&&(o=m.arrow)!=null&&o.alignmentOffset?{}:{x:c+g.x,y:f+g.
y,data:{...g,placement:p}}}}},CE=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async
fn(s){const{x:r,y:o,placement:c}=s,{mainAxis:f=!0,crossAxis:p=!1,limiter:m={fn:N=>{let{x:C,y:O}=N;re
turn{x:C,y:O}}},...g}=Ka(n,s),h={x:r,y:o},y=await vr(s,g),b=ba(Fa(c)),w=vf(b);let
E=h[w],T=h[b];if(f){const
N=w==="y"?"top":"left",C=w==="y"?"bottom":"right",O=E+y[N],D=E-y[C];E=Pd(O,E,D)}if(p){const
N=b==="y"?"top":"left",C=b==="y"?"bottom":"right",O=T+y[N],D=T-y[C];T=Pd(O,T,D)}const A=m.fn({...s,[
w]:E,[b]:T});return{...A,data:{x:A.x-r,y:A.y-o,enabled:{[w]:f,[b]:p}}}}}},jE=function(n){return
n===void 0&&(n={}),{options:n,fn(s){const{x:r,y:o,placement:c,rects:f,middlewareData:p}=s,{offset:m=
0,mainAxis:g=!0,crossAxis:h=!0}=Ka(n,s),y={x:r,y:o},b=ba(c),w=vf(b);let E=y[w],T=y[b];const
A=Ka(m,s),N=typeof A=="number"?{mainAxis:A,crossAxis:0}:{mainAxis:0,crossAxis:0,...A};if(g){const D=
w==="y"?"height":"width",B=f.reference[w]-f.floating[D]+N.mainAxis,Y=f.reference[w]+f.reference[D]-N
.mainAxis;E<B?E=B:E>Y&&(E=Y)}if(h){var C,O;const D=w==="y"?"width":"height",B=g1.has(Fa(c)),Y=f.refe
rence[b]-f.floating[D]+(B&&((C=p.offset)==null?void
0:C[b])||0)+(B?0:N.crossAxis),Z=f.reference[b]+f.reference[D]+(B?0:((O=p.offset)==null?void
0:O[b])||0)-(B?N.crossAxis:0);T<Y?T=Y:T>Z&&(T=Z)}return{[w]:E,[b]:T}}}},TE=function(n){return
n===void 0&&(n={}),{name:"size",options:n,async fn(s){var
r,o;const{placement:c,rects:f,platform:p,elements:m}=s,{apply:g=()=>{},...h}=Ka(n,s),y=await
vr(s,h),b=Fa(c),w=is(c),E=ba(c)==="y",{width:T,height:A}=f.floating;let
N,C;b==="top"||b==="bottom"?(N=b,C=w===(await(p.isRTL==null?void
0:p.isRTL(m.floating))?"start":"end")?"left":"right"):(C=b,N=w==="end"?"top":"bottom");const
O=A-y.top-y.bottom,D=T-y.left-y.right,B=_n(A-y[N],O),Y=_n(T-y[C],D),Z=!s.middlewareData.shift;let j=
B,q=Y;if((r=s.middlewareData.shift)!=null&&r.enabled.x&&(q=D),(o=s.middlewareData.shift)!=null&&o.en
abled.y&&(j=O),Z&&!w){const ee=Gt(y.left,0),se=Gt(y.right,0),ue=Gt(y.top,0),ge=Gt(y.bottom,0);E?q=T-
2*(ee!==0||se!==0?ee+se:Gt(y.left,y.right)):j=A-2*(ue!==0||ge!==0?ue+ge:Gt(y.top,y.bottom))}await
g({...s,availableWidth:q,availableHeight:j});const J=await p.getDimensions(m.floating);return
T!==J.width||A!==J.height?{reset:{rects:!0}}:{}}}};function Oi(){return typeof window<"u"}function
cs(n){return v1(n)?(n.nodeName||"").toLowerCase():"#document"}function Xt(n){var
s;return(n==null||(s=n.ownerDocument)==null?void 0:s.defaultView)||window}function Ca(n){var
s;return(s=(v1(n)?n.ownerDocument:n.document)||window.document)==null?void
0:s.documentElement}function v1(n){return Oi()?n instanceof Node||n instanceof
Xt(n).Node:!1}function fa(n){return Oi()?n instanceof Element||n instanceof
Xt(n).Element:!1}function wa(n){return Oi()?n instanceof HTMLElement||n instanceof
Xt(n).HTMLElement:!1}function jv(n){return!Oi()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n
instanceof Xt(n).ShadowRoot}const RE=new Set(["inline","contents"]);function Cr(n){const{overflow:s,
overflowX:r,overflowY:o,display:c}=pa(n);return/auto|scroll|overlay|hidden|clip/.test(s+o+r)&&!RE.ha
s(c)}const ME=new Set(["table","td","th"]);function _E(n){return ME.has(cs(n))}const
OE=[":popover-open",":modal"];function Di(n){return OE.some(s=>{try{return
n.matches(s)}catch{return!1}})}const DE=["transform","translate","scale","rotate","perspective"],zE=
["transform","translate","scale","rotate","perspective","filter"],kE=["paint","layout","strict","con
tent"];function bf(n){const s=Sf(),r=fa(n)?pa(n):n;return DE.some(o=>r[o]?r[o]!=="none":!1)||(r.cont
ainerType?r.containerType!=="normal":!1)||!s&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!s&&(
r.filter?r.filter!=="none":!1)||zE.some(o=>(r.willChange||"").includes(o))||kE.some(o=>(r.contain||"
").includes(o))}function LE(n){let s=On(n);for(;wa(s)&&!as(s);){if(bf(s))return s;if(Di(s))return
null;s=On(s)}return null}function Sf(){return typeof
CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const HE=new
Set(["html","body","#document"]);function as(n){return HE.has(cs(n))}function pa(n){return
Xt(n).getComputedStyle(n)}function zi(n){return fa(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop
}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function On(n){if(cs(n)==="html")return n;const
s=n.assignedSlot||n.parentNode||jv(n)&&n.host||Ca(n);return jv(s)?s.host:s}function x1(n){const
s=On(n);return as(s)?n.ownerDocument?n.ownerDocument.body:n.body:wa(s)&&Cr(s)?s:x1(s)}function
xr(n,s,r){var o;s===void 0&&(s=[]),r===void 0&&(r=!0);const
c=x1(n),f=c===((o=n.ownerDocument)==null?void 0:o.body),p=Xt(c);if(f){const m=Bd(p);return
s.concat(p,p.visualViewport||[],Cr(c)?c:[],m&&r?xr(m):[])}return s.concat(c,xr(c,[],r))}function
Bd(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function y1(n){const
s=pa(n);let r=parseFloat(s.width)||0,o=parseFloat(s.height)||0;const
c=wa(n),f=c?n.offsetWidth:r,p=c?n.offsetHeight:o,m=bi(r)!==f||bi(o)!==p;return
m&&(r=f,o=p),{width:r,height:o,$:m}}function wf(n){return fa(n)?n:n.contextElement}function
Fl(n){const s=wf(n);if(!wa(s))return Sa(1);const
r=s.getBoundingClientRect(),{width:o,height:c,$:f}=y1(s);let p=(f?bi(r.width):r.width)/o,m=(f?bi(r.h
eight):r.height)/c;return(!p||!Number.isFinite(p))&&(p=1),(!m||!Number.isFinite(m))&&(m=1),{x:p,y:m}
}const PE=Sa(0);function b1(n){const s=Xt(n);return!Sf()||!s.visualViewport?PE:{x:s.visualViewport.o
ffsetLeft,y:s.visualViewport.offsetTop}}function UE(n,s,r){return s===void
0&&(s=!1),!r||s&&r!==Xt(n)?!1:s}function ll(n,s,r,o){s===void 0&&(s=!1),r===void 0&&(r=!1);const
c=n.getBoundingClientRect(),f=wf(n);let p=Sa(1);s&&(o?fa(o)&&(p=Fl(o)):p=Fl(n));const
m=UE(f,r,o)?b1(f):Sa(0);let
g=(c.left+m.x)/p.x,h=(c.top+m.y)/p.y,y=c.width/p.x,b=c.height/p.y;if(f){const
w=Xt(f),E=o&&fa(o)?Xt(o):o;let T=w,A=Bd(T);for(;A&&o&&E!==T;){const N=Fl(A),C=A.getBoundingClientRec
t(),O=pa(A),D=C.left+(A.clientLeft+parseFloat(O.paddingLeft))*N.x,B=C.top+(A.clientTop+parseFloat(O.
paddingTop))*N.y;g*=N.x,h*=N.y,y*=N.x,b*=N.y,g+=D,h+=B,T=Xt(A),A=Bd(T)}}return
wi({width:y,height:b,x:g,y:h})}function ki(n,s){const r=zi(n).scrollLeft;return
s?s.left+r:ll(Ca(n)).left+r}function S1(n,s){const r=n.getBoundingClientRect(),o=r.left+s.scrollLeft
-ki(n,r),c=r.top+s.scrollTop;return{x:o,y:c}}function
BE(n){let{elements:s,rect:r,offsetParent:o,strategy:c}=n;const
f=c==="fixed",p=Ca(o),m=s?Di(s.floating):!1;if(o===p||m&&f)return r;let
g={scrollLeft:0,scrollTop:0},h=Sa(1);const
y=Sa(0),b=wa(o);if((b||!b&&!f)&&((cs(o)!=="body"||Cr(p))&&(g=zi(o)),wa(o))){const
E=ll(o);h=Fl(o),y.x=E.x+o.clientLeft,y.y=E.y+o.clientTop}const w=p&&!b&&!f?S1(p,g):Sa(0);return{widt
h:r.width*h.x,height:r.height*h.y,x:r.x*h.x-g.scrollLeft*h.x+y.x+w.x,y:r.y*h.y-g.scrollTop*h.y+y.y+w
.y}}function VE(n){return Array.from(n.getClientRects())}function qE(n){const s=Ca(n),r=zi(n),o=n.ow
nerDocument.body,c=Gt(s.scrollWidth,s.clientWidth,o.scrollWidth,o.clientWidth),f=Gt(s.scrollHeight,s
.clientHeight,o.scrollHeight,o.clientHeight);let p=-r.scrollLeft+ki(n);const m=-r.scrollTop;return
pa(o).direction==="rtl"&&(p+=Gt(s.clientWidth,o.clientWidth)-c),{width:c,height:f,x:p,y:m}}const
Tv=25;function YE(n,s){const r=Xt(n),o=Ca(n),c=r.visualViewport;let
f=o.clientWidth,p=o.clientHeight,m=0,g=0;if(c){f=c.width,p=c.height;const
y=Sf();(!y||y&&s==="fixed")&&(m=c.offsetLeft,g=c.offsetTop)}const h=ki(o);if(h<=0){const y=o.ownerDo
cument,b=y.body,w=getComputedStyle(b),E=y.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseF
loat(w.marginRight)||0,T=Math.abs(o.clientWidth-b.clientWidth-E);T<=Tv&&(f-=T)}else
h<=Tv&&(f+=h);return{width:f,height:p,x:m,y:g}}const GE=new Set(["absolute","fixed"]);function
XE(n,s){const r=ll(n,!0,s==="fixed"),o=r.top+n.clientTop,c=r.left+n.clientLeft,f=wa(n)?Fl(n):Sa(1),p
=n.clientWidth*f.x,m=n.clientHeight*f.y,g=c*f.x,h=o*f.y;return{width:p,height:m,x:g,y:h}}function
Rv(n,s,r){let o;if(s==="viewport")o=YE(n,r);else if(s==="document")o=qE(Ca(n));else
if(fa(s))o=XE(s,r);else{const c=b1(n);o={x:s.x-c.x,y:s.y-c.y,width:s.width,height:s.height}}return
wi(o)}function w1(n,s){const r=On(n);return
r===s||!fa(r)||as(r)?!1:pa(r).position==="fixed"||w1(r,s)}function IE(n,s){const
r=s.get(n);if(r)return r;let o=xr(n,[],!1).filter(m=>fa(m)&&cs(m)!=="body"),c=null;const
f=pa(n).position==="fixed";let p=f?On(n):n;for(;fa(p)&&!as(p);){const m=pa(p),g=bf(p);!g&&m.position
==="fixed"&&(c=null),(f?!g&&!c:!g&&m.position==="static"&&!!c&&GE.has(c.position)||Cr(p)&&!g&&w1(n,p
))?o=o.filter(y=>y!==p):c=m,p=On(p)}return s.set(n,o),o}function
QE(n){let{element:s,boundary:r,rootBoundary:o,strategy:c}=n;const
p=[...r==="clippingAncestors"?Di(s)?[]:IE(s,this._c):[].concat(r),o],m=p[0],g=p.reduce((h,y)=>{const
b=Rv(s,y,c);return h.top=Gt(b.top,h.top),h.right=_n(b.right,h.right),h.bottom=_n(b.bottom,h.bottom),
h.left=Gt(b.left,h.left),h},Rv(s,m,c));return{width:g.right-g.left,height:g.bottom-g.top}}function
ZE(n){const{width:s,height:r}=y1(n);return{width:s,height:r}}function
$E(n,s,r){const o=wa(s),c=Ca(s),f=r==="fixed",p=ll(n,!0,f,s);let m={scrollLeft:0,scrollTop:0};const
g=Sa(0);function h(){g.x=ki(c)}if(o||!o&&!f)if((cs(s)!=="body"||Cr(c))&&(m=zi(s)),o){const
E=ll(s,!0,f,s);g.x=E.x+s.clientLeft,g.y=E.y+s.clientTop}else c&&h();f&&!o&&c&&h();const y=c&&!o&&!f?
S1(c,m):Sa(0),b=p.left+m.scrollLeft-g.x-y.x,w=p.top+m.scrollTop-g.y-y.y;return{x:b,y:w,width:p.width
,height:p.height}}function Sd(n){return pa(n).position==="static"}function
Mv(n,s){if(!wa(n)||pa(n).position==="fixed")return null;if(s)return s(n);let r=n.offsetParent;return
Ca(n)===r&&(r=r.ownerDocument.body),r}function A1(n,s){const r=Xt(n);if(Di(n))return
r;if(!wa(n)){let c=On(n);for(;c&&!as(c);){if(fa(c)&&!Sd(c))return c;c=On(c)}return r}let
o=Mv(n,s);for(;o&&_E(o)&&Sd(o);)o=Mv(o,s);return o&&as(o)&&Sd(o)&&!bf(o)?r:o||LE(n)||r}const
KE=async function(n){const s=this.getOffsetParent||A1,r=this.getDimensions,o=await
r(n.floating);return{reference:$E(n.reference,await
s(n.floating),n.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function FE(n){return
pa(n).direction==="rtl"}const JE={convertOffsetParentRelativeRectToViewportRelativeRect:BE,getDocume
ntElement:Ca,getClippingRect:QE,getOffsetParent:A1,getElementRects:KE,getClientRects:VE,getDimension
s:ZE,getScale:Fl,isElement:fa,isRTL:FE};function N1(n,s){return
n.x===s.x&&n.y===s.y&&n.width===s.width&&n.height===s.height}function WE(n,s){let r=null,o;const
c=Ca(n);function f(){var m;clearTimeout(o),(m=r)==null||m.disconnect(),r=null}function
p(m,g){m===void 0&&(m=!1),g===void 0&&(g=1),f();const
h=n.getBoundingClientRect(),{left:y,top:b,width:w,height:E}=h;if(m||s(),!w||!E)return;const
T=ti(b),A=ti(c.clientWidth-(y+w)),N=ti(c.clientHeight-(b+E)),C=ti(y),D={rootMargin:-T+"px "+-A+"px
"+-N+"px "+-C+"px",threshold:Gt(0,_n(1,g))||1};let B=!0;function Y(Z){const
j=Z[0].intersectionRatio;if(j!==g){if(!B)return p();j?p(!1,j):o=setTimeout(()=>{p(!1,1e-7)},1e3)}j==
=1&&!N1(h,n.getBoundingClientRect())&&p(),B=!1}try{r=new
IntersectionObserver(Y,{...D,root:c.ownerDocument})}catch{r=new
IntersectionObserver(Y,D)}r.observe(n)}return p(!0),f}function eC(n,s,r,o){o===void
0&&(o={});const{ancestorScroll:c=!0,ancestorResize:f=!0,elementResize:p=typeof
ResizeObserver=="function",layoutShift:m=typeof IntersectionObserver=="function",animationFrame:g=!1
}=o,h=wf(n),y=c||f?[...h?xr(h):[],...xr(s)]:[];y.forEach(C=>{c&&C.addEventListener("scroll",r,{passi
ve:!0}),f&&C.addEventListener("resize",r)});const b=h&&m?WE(h,r):null;let w=-1,E=null;p&&(E=new Resi
zeObserver(C=>{let[O]=C;O&&O.target===h&&E&&(E.unobserve(s),cancelAnimationFrame(w),w=requestAnimati
onFrame(()=>{var D;(D=E)==null||D.observe(s)})),r()}),h&&!g&&E.observe(h),E.observe(s));let
T,A=g?ll(n):null;g&&N();function N(){const
C=ll(n);A&&!N1(A,C)&&r(),A=C,T=requestAnimationFrame(N)}return r(),()=>{var C;y.forEach(O=>{c&&O.rem
oveEventListener("scroll",r),f&&O.removeEventListener("resize",r)}),b?.(),(C=E)==null||C.disconnect(
),E=null,g&&cancelAnimationFrame(T)}}const
tC=EE,aC=CE,nC=wE,lC=TE,sC=AE,_v=SE,rC=jE,oC=(n,s,r)=>{const o=new
Map,c={platform:JE,...r},f={...c.platform,_c:o};return bE(n,s,{...c,platform:f})};var iC=typeof
document<"u",cC=function(){},ii=iC?v.useLayoutEffect:cC;function Ai(n,s){if(n===s)return!0;if(typeof
n!=typeof s)return!1;if(typeof n=="function"&&n.toString()===s.toString())return!0;let
r,o,c;if(n&&s&&typeof n=="object"){if(Array.isArray(n)){if(r=n.length,r!==s.length)return!1;for(o=r;
o--!==0;)if(!Ai(n[o],s[o]))return!1;return!0}if(c=Object.keys(n),r=c.length,r!==Object.keys(s).lengt
h)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(s,c[o]))return!1;for(o=r;o--!==0;){const
f=c[o];if(!(f==="_owner"&&n.$$typeof)&&!Ai(n[f],s[f]))return!1}return!0}return n!==n&&s!==s}function
E1(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function
Ov(n,s){const r=E1(n);return Math.round(s*r)/r}function wd(n){const s=v.useRef(n);return
ii(()=>{s.current=n}),s}function uC(n){n===void 0&&(n={});const{placement:s="bottom",strategy:r="abs
olute",middleware:o=[],platform:c,elements:{reference:f,floating:p}={},transform:m=!0,whileElementsM
ounted:g,open:h}=n,[y,b]=v.useState({x:0,y:0,strategy:r,placement:s,middlewareData:{},isPositioned:!
1}),[w,E]=v.useState(o);Ai(w,o)||E(o);const[T,A]=v.useState(null),[N,C]=v.useState(null),O=v.useCall
back(U=>{U!==Z.current&&(Z.current=U,A(U))},[]),D=v.useCallback(U=>{U!==j.current&&(j.current=U,C(U)
)},[]),B=f||T,Y=p||N,Z=v.useRef(null),j=v.useRef(null),q=v.useRef(y),J=g!=null,ee=wd(g),se=wd(c),ue=
wd(h),ge=v.useCallback(()=>{if(!Z.current||!j.current)return;const U={placement:s,strategy:r,middlew
are:w};se.current&&(U.platform=se.current),oC(Z.current,j.current,U).then(oe=>{const me={...oe,isPos
itioned:ue.current!==!1};pe.current&&!Ai(q.current,me)&&(q.current=me,Er.flushSync(()=>{b(me)}))})},
[w,s,r,se,ue]);ii(()=>{h===!1&&q.current.isPositioned&&(q.current.isPositioned=!1,b(U=>({...U,isPosi
tioned:!1})))},[h]);const pe=v.useRef(!1);ii(()=>(pe.current=!0,()=>{pe.current=!1}),[]),ii(()=>{if(
B&&(Z.current=B),Y&&(j.current=Y),B&&Y){if(ee.current)return
ee.current(B,Y,ge);ge()}},[B,Y,ge,ee,J]);const de=v.useMemo(()=>({reference:Z,floating:j,setReferenc
e:O,setFloating:D}),[O,D]),k=v.useMemo(()=>({reference:B,floating:Y}),[B,Y]),$=v.useMemo(()=>{const
U={position:r,left:0,top:0};if(!k.floating)return U;const
oe=Ov(k.floating,y.x),me=Ov(k.floating,y.y);return m?{...U,transform:"translate("+oe+"px, "+me+"px)"
,...E1(k.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:oe,top:me}},[r,m,k.floating,y.x,
y.y]);return
v.useMemo(()=>({...y,update:ge,refs:de,elements:k,floatingStyles:$}),[y,ge,de,k,$])}const
dC=n=>{function s(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:n,fn(r){c
onst{element:o,padding:c}=typeof n=="function"?n(r):n;return o&&s(o)?o.current!=null?_v({element:o.c
urrent,padding:c}).fn(r):{}:o?_v({element:o,padding:c}).fn(r):{}}}},fC=(n,s)=>({...tC(n),options:[n,
s]}),pC=(n,s)=>({...aC(n),options:[n,s]}),hC=(n,s)=>({...rC(n),options:[n,s]}),mC=(n,s)=>({...nC(n),
options:[n,s]}),gC=(n,s)=>({...lC(n),options:[n,s]}),vC=(n,s)=>({...sC(n),options:[n,s]}),xC=(n,s)=>
({...dC(n),options:[n,s]});var
yC="Arrow",C1=v.forwardRef((n,s)=>{const{children:r,width:o=10,height:c=5,...f}=n;return
d.jsx(_e.svg,{...f,ref:s,width:o,height:c,viewBox:"0 0 30
10",preserveAspectRatio:"none",children:n.asChild?r:d.jsx("polygon",{points:"0,0 30,0
15,10"})})});C1.displayName=yC;var bC=C1,Af="Popper",[j1,Li]=zn(Af),[SC,T1]=j1(Af),R1=n=>{const{__sc
opePopper:s,children:r}=n,[o,c]=v.useState(null);return
d.jsx(SC,{scope:s,anchor:o,onAnchorChange:c,children:r})};R1.displayName=Af;var M1="PopperAnchor",_1
=v.forwardRef((n,s)=>{const{__scopePopper:r,virtualRef:o,...c}=n,f=T1(M1,r),p=v.useRef(null),m=qe(s,
p),g=v.useRef(null);return v.useEffect(()=>{const h=g.current;g.current=o?.current||p.current,h!==g.
current&&f.onAnchorChange(g.current)}),o?null:d.jsx(_e.div,{...c,ref:m})});_1.displayName=M1;var Nf=
"PopperContent",[wC,AC]=j1(Nf),O1=v.forwardRef((n,s)=>{const{__scopePopper:r,side:o="bottom",sideOff
set:c=0,align:f="center",alignOffset:p=0,arrowPadding:m=0,avoidCollisions:g=!0,collisionBoundary:h=[
],collisionPadding:y=0,sticky:b="partial",hideWhenDetached:w=!1,updatePositionStrategy:E="optimized"
,onPlaced:T,...A}=n,N=T1(Nf,r),[C,O]=v.useState(null),D=qe(s,K=>O(K)),[B,Y]=v.useState(null),Z=l1(B)
,j=Z?.width??0,q=Z?.height??0,J=o+(f!=="center"?"-"+f:""),ee=typeof y=="number"?y:{top:0,right:0,bot
tom:0,left:0,...y},se=Array.isArray(h)?h:[h],ue=se.length>0,ge={padding:ee,boundary:se.filter(EC),al
tBoundary:ue},{refs:pe,floatingStyles:de,placement:k,isPositioned:$,middlewareData:U}=uC({strategy:"
fixed",placement:J,whileElementsMounted:(...K)=>eC(...K,{animationFrame:E==="always"}),elements:{ref
erence:N.anchor},middleware:[fC({mainAxis:c+q,alignmentAxis:p}),g&&pC({mainAxis:!0,crossAxis:!1,limi
er:b==="partial"?hC():void 0,...ge}),g&&mC({...ge}),gC({...ge,apply:({elements:K,rects:Se,available
Width:ye,availableHeight:je})=>{const{width:De,height:Pe}=Se.reference,bt=K.floating.style;bt.setPro
perty("--radix-popper-available-width",`${ye}px`),bt.setProperty("--radix-popper-available-height",`
${je}px`),bt.setProperty("--radix-popper-anchor-width",`${De}px`),bt.setProperty("--radix-popper-anc
hor-height",`${Pe}px`)}}),B&&xC({element:B,padding:m}),CC({arrowWidth:j,arrowHeight:q}),w&&vC({strat
egey:"referenceHidden",...ge})]}),[oe,me]=k1(k),M=At(T);vt(()=>{$&&M?.()},[$,M]);const
X=U.arrow?.x,F=U.arrow?.y,W=U.arrow?.centerOffset!==0,[ce,he]=v.useState();return vt(()=>{C&&he(wind
ow.getComputedStyle(C).zIndex)},[C]),d.jsx("div",{ref:pe.setFloating,"data-radix-popper-content-wrap
per":"",style:{...de,transform:$?de.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce
,"--radix-popper-transform-origin":[U.transformOrigin?.x,U.transformOrigin?.y].join(" "),...U.hide?.
referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:d.jsx(wC,{scope:r,pl
acedSide:oe,onArrowChange:Y,arrowX:X,arrowY:F,shouldHideArrow:W,children:d.jsx(_e.div,{"data-side":o
e,"data-align":me,...A,ref:D,style:{...A.style,animation:$?void
0:"none"}})})})});O1.displayName=Nf;var D1="PopperArrow",NC={top:"bottom",right:"left",bottom:"top",
left:"right"},z1=v.forwardRef(function(s,r){const{__scopePopper:o,...c}=s,f=AC(D1,o),p=NC[f.placedSi
de];return d.jsx("span",{ref:f.onArrowChange,style:{position:"absolute",left:f.arrowX,top:f.arrowY,[
p]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100%
0"}[f.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg)
translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg)
translateX(50%)"}[f.placedSide],visibility:f.shouldHideArrow?"hidden":void
0},children:d.jsx(bC,{...c,ref:r,style:{...c.style,display:"block"}})})});z1.displayName=D1;function
EC(n){return n!==null}var CC=n=>({name:"transformOrigin",options:n,fn(s){const{placement:r,rects:o,m
iddlewareData:c}=s,p=c.arrow?.centerOffset!==0,m=p?0:n.arrowWidth,g=p?0:n.arrowHeight,[h,y]=k1(r),b=
{start:"0%",center:"50%",end:"100%"}[y],w=(c.arrow?.x??0)+m/2,E=(c.arrow?.y??0)+g/2;let
T="",A="";return h==="bottom"?(T=p?b:`${w}px`,A=`${-g}px`):h==="top"?(T=p?b:`${w}px`,A=`${o.floating
.height+g}px`):h==="right"?(T=`${-g}px`,A=p?b:`${E}px`):h==="left"&&(T=`${o.floating.width+g}px`,A=p
?b:`${E}px`),{data:{x:T,y:A}}}});function k1(n){const[s,r="center"]=n.split("-");return[s,r]}var L1=
R1,H1=_1,P1=O1,U1=z1,jC="Portal",Ef=v.forwardRef((n,s)=>{const{container:r,...o}=n,[c,f]=v.useState(
!1);vt(()=>f(!0),[]);const p=r||c&&globalThis?.document?.body;return
p?qN.createPortal(d.jsx(_e.div,{...o,ref:s}),p):null});Ef.displayName=jC;function TC(n){const s=RC(n
),r=v.forwardRef((o,c)=>{const{children:f,...p}=o,m=v.Children.toArray(f),g=m.find(_C);if(g){const h
