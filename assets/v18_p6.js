=g.props.children,y=m.map(b=>b===g?v.Children.count(h)>1?v.Children.only(null):v.isValidElement(h)?h
.props.children:null:b);return
d.jsx(s,{...p,ref:c,children:v.isValidElement(h)?v.cloneElement(h,void 0,y):null})}return
d.jsx(s,{...p,ref:c,children:f})});return r.displayName=`${n}.Slot`,r}function RC(n){const
s=v.forwardRef((r,o)=>{const{children:c,...f}=r;if(v.isValidElement(c)){const
p=DC(c),m=OC(f,c.props);return c.type!==v.Fragment&&(m.ref=o?Nr(o,p):p),v.cloneElement(c,m)}return
v.Children.count(c)>1?v.Children.only(null):null});return s.displayName=`${n}.SlotClone`,s}var
MC=Symbol("radix.slottable");function _C(n){return v.isValidElement(n)&&typeof
n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===MC}function OC(n,s){const
r={...s};for(const o in s){const c=n[o],f=s[o];/^on[A-Z]/.test(o)?c&&f?r[o]=(...m)=>{const
g=f(...m);return c(...m),g}:c&&(r[o]=c):o==="style"?r[o]={...c,...f}:o==="className"&&(r[o]=[c,f].fi
lter(Boolean).join(" "))}return{...n,...r}}function DC(n){let
s=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning;return
r?n.ref:(s=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=s&&"isReactWarning"in
s&&s.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var B1=Object.freeze({position:"absolute",bord
er:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowr
ap",wordWrap:"normal"}),zC="VisuallyHidden",V1=v.forwardRef((n,s)=>d.jsx(_e.span,{...n,ref:s,style:{
...B1,...n.style}}));V1.displayName=zC;var kC=V1,LC=function(n){if(typeof document>"u")return
null;var s=Array.isArray(n)?n[0]:n;return s.ownerDocument.body},Zl=new WeakMap,ai=new
WeakMap,ni={},Ad=0,q1=function(n){return n&&(n.host||q1(n.parentNode))},HC=function(n,s){return
s.map(function(r){if(n.contains(r))return r;var o=q1(r);return
o&&n.contains(o)?o:(console.error("aria-hidden",r,"in not contained inside",n,". Doing
nothing"),null)}).filter(function(r){return!!r})},PC=function(n,s,r,o){var
c=HC(s,Array.isArray(n)?n:[n]);ni[r]||(ni[r]=new WeakMap);var f=ni[r],p=[],m=new Set,g=new
Set(c),h=function(b){!b||m.has(b)||(m.add(b),h(b.parentNode))};c.forEach(h);var y=function(b){!b||g.
has(b)||Array.prototype.forEach.call(b.children,function(w){if(m.has(w))y(w);else try{var E=w.getAtt
ribute(o),T=E!==null&&E!=="false",A=(Zl.get(w)||0)+1,N=(f.get(w)||0)+1;Zl.set(w,A),f.set(w,N),p.push
(w),A===1&&T&&ai.set(w,!0),N===1&&w.setAttribute(r,"true"),T||w.setAttribute(o,"true")}catch(C){cons
ole.error("aria-hidden: cannot operate on ",w,C)}})};return
y(s),m.clear(),Ad++,function(){p.forEach(function(b){var w=Zl.get(b)-1,E=f.get(b)-1;Zl.set(b,w),f.se
t(b,E),w||(ai.has(b)||b.removeAttribute(o),ai.delete(b)),E||b.removeAttribute(r)}),Ad--,Ad||(Zl=new
WeakMap,Zl=new WeakMap,ai=new WeakMap,ni={})}},UC=function(n,s,r){r===void
0&&(r="data-aria-hidden");var o=Array.from(Array.isArray(n)?n:[n]),c=LC(n);return
c?(o.push.apply(o,Array.from(c.querySelectorAll("[aria-live],
script"))),PC(o,c,r,"aria-hidden")):function(){return null}},ya=function(){return
ya=Object.assign||function(s){for(var r,o=1,c=arguments.length;o<c;o++){r=arguments[o];for(var f in
r)Object.prototype.hasOwnProperty.call(r,f)&&(s[f]=r[f])}return
s},ya.apply(this,arguments)};function Y1(n,s){var r={};for(var o in
n)Object.prototype.hasOwnProperty.call(n,o)&&s.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof
Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(n);c<o.length;c+
+)s.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(n,o[c])&&(r[o[c]]=n[o[c]]);return
r}function BC(n,s,r){if(r||arguments.length===2)for(var o=0,c=s.length,f;o<c;o++)(f||!(o in
s))&&(f||(f=Array.prototype.slice.call(s,0,o)),f[o]=s[o]);return
n.concat(f||Array.prototype.slice.call(s))}var ci="right-scroll-bar-position",ui="width-before-scrol
l-bar",VC="with-scroll-bars-hidden",qC="--removed-body-scroll-bar-size";function Nd(n,s){return
typeof n=="function"?n(s):n&&(n.current=s),n}function YC(n,s){var
r=v.useState(function(){return{value:n,callback:s,facade:{get current(){return r.value},set
current(o){var c=r.value;c!==o&&(r.value=o,r.callback(o,c))}}}})[0];return r.callback=s,r.facade}var
GC=typeof window<"u"?v.useLayoutEffect:v.useEffect,Dv=new WeakMap;function XC(n,s){var
r=YC(null,function(o){return n.forEach(function(c){return Nd(c,o)})});return GC(function(){var
o=Dv.get(r);if(o){var c=new Set(o),f=new Set(n),p=r.current;c.forEach(function(m){f.has(m)||Nd(m,nul
l)}),f.forEach(function(m){c.has(m)||Nd(m,p)})}Dv.set(r,n)},[n]),r}function IC(n){return n}function
QC(n,s){s===void 0&&(s=IC);var r=[],o=!1,c={read:function(){if(o)throw new Error("Sidecar: could not
`read` from an `assigned` medium. `read` could be used only with `useMedium`.");return
r.length?r[r.length-1]:n},useMedium:function(f){var p=s(f,o);return
r.push(p),function(){r=r.filter(function(m){return
m!==p})}},assignSyncMedium:function(f){for(o=!0;r.length;){var
p=r;r=[],p.forEach(f)}r={push:function(m){return f(m)},filter:function(){return
r}}},assignMedium:function(f){o=!0;var p=[];if(r.length){var m=r;r=[],m.forEach(f),p=r}var
g=function(){var y=p;p=[],y.forEach(f)},h=function(){return
Promise.resolve().then(g)};h(),r={push:function(y){p.push(y),h()},filter:function(y){return
p=p.filter(y),r}}}};return c}function ZC(n){n===void 0&&(n={});var s=QC(null);return
s.options=ya({async:!0,ssr:!1},n),s}var G1=function(n){var
s=n.sideCar,r=Y1(n,["sideCar"]);if(!s)throw new Error("Sidecar: please provide `sideCar` property to
import the right car");var o=s.read();if(!o)throw new Error("Sidecar medium not found");return
v.createElement(o,ya({},r))};G1.isSideCarExport=!0;function $C(n,s){return n.useMedium(s),G1}var
X1=ZC(),Ed=function(){},Hi=v.forwardRef(function(n,s){var r=v.useRef(null),o=v.useState({onScrollCap
ture:Ed,onWheelCapture:Ed,onTouchMoveCapture:Ed}),c=o[0],f=o[1],p=n.forwardProps,m=n.children,g=n.cl
assName,h=n.removeScrollBar,y=n.enabled,b=n.shards,w=n.sideCar,E=n.noRelative,T=n.noIsolation,A=n.in
ert,N=n.allowPinchZoom,C=n.as,O=C===void 0?"div":C,D=n.gapMode,B=Y1(n,["forwardProps","children","cl
assName","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPin
chZoom","as","gapMode"]),Y=w,Z=XC([r,s]),j=ya(ya({},B),c);return v.createElement(v.Fragment,null,y&&
v.createElement(Y,{sideCar:X1,removeScrollBar:h,shards:b,noRelative:E,noIsolation:T,inert:A,setCallb
acks:f,allowPinchZoom:!!N,lockRef:r,gapMode:D}),p?v.cloneElement(v.Children.only(m),ya(ya({},j),{ref
:Z})):v.createElement(O,ya({},j,{className:g,ref:Z}),m))});Hi.defaultProps={enabled:!0,removeScrollB
ar:!0,inert:!1};Hi.classNames={fullWidth:ui,zeroRight:ci};var KC=function(){if(typeof
__webpack_nonce__<"u")return __webpack_nonce__};function FC(){if(!document)return null;var
n=document.createElement("style");n.type="text/css";var s=KC();return
s&&n.setAttribute("nonce",s),n}function
JC(n,s){n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}function
WC(n){var s=document.head||document.getElementsByTagName("head")[0];s.appendChild(n)}var
e4=function(){var n=0,s=null;return{add:function(r){n==0&&(s=FC())&&(JC(s,r),WC(s)),n++},remove:func
tion(){n--,!n&&s&&(s.parentNode&&s.parentNode.removeChild(s),s=null)}}},t4=function(){var
n=e4();return function(s,r){v.useEffect(function(){return
n.add(s),function(){n.remove()}},[s&&r])}},I1=function(){var n=t4(),s=function(r){var
o=r.styles,c=r.dynamic;return n(o,c),null};return
s},a4={left:0,top:0,right:0,gap:0},Cd=function(n){return parseInt(n||"",10)||0},n4=function(n){var s
=window.getComputedStyle(document.body),r=s[n==="padding"?"paddingLeft":"marginLeft"],o=s[n==="paddi
ng"?"paddingTop":"marginTop"],c=s[n==="padding"?"paddingRight":"marginRight"];return[Cd(r),Cd(o),Cd(
c)]},l4=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return a4;var s=n4(n),r=document.d
ocumentElement.clientWidth,o=window.innerWidth;return{left:s[0],top:s[1],right:s[2],gap:Math.max(0,o
-r+s[2]-s[0])}},s4=I1(),Jl="data-scroll-locked",r4=function(n,s,r,o){var
c=n.left,f=n.top,p=n.right,m=n.gap;return r===void 0&&(r="margin"),`   .`.concat(VC,` {    overflow:
hidden `).concat(o,`;    padding-right: `).concat(m,"px ").concat(o,`;   }   body[`).concat(Jl,`] {
overflow: hidden `).concat(o,`;     overscroll-behavior: contain;     `).concat([s&&"position:
relative ".concat(o,";"),r==="margin"&&`     padding-left: `.concat(c,`px;     padding-top:
`).concat(f,`px;     padding-right: `).concat(p,`px;     margin-left:0;     margin-top:0;
margin-right: `).concat(m,"px ").concat(o,`;     `),r==="padding"&&"padding-right: ".concat(m,"px
").concat(o,";")].filter(Boolean).join(""),`   }      .`).concat(ci,` {     right: `).concat(m,"px
").concat(o,`;   }      .`).concat(ui,` {     margin-right: `).concat(m,"px ").concat(o,`;   }
.`).concat(ci," .").concat(ci,` {     right: 0 `).concat(o,`;   }      .`).concat(ui,"
.").concat(ui,` {     margin-right: 0 `).concat(o,`;   }      body[`).concat(Jl,`] {
`).concat(qC,": ").concat(m,`px;   } `)},zv=function(){var
n=parseInt(document.body.getAttribute(Jl)||"0",10);return
isFinite(n)?n:0},o4=function(){v.useEffect(function(){return
document.body.setAttribute(Jl,(zv()+1).toString()),function(){var n=zv()-1;n<=0?document.body.remove
Attribute(Jl):document.body.setAttribute(Jl,n.toString())}},[])},i4=function(n){var
s=n.noRelative,r=n.noImportant,o=n.gapMode,c=o===void 0?"margin":o;o4();var
f=v.useMemo(function(){return l4(c)},[c]);return
v.createElement(s4,{styles:r4(f,!s,c,r?"":"!important")})},Vd=!1;if(typeof window<"u")try{var
li=Object.defineProperty({},"passive",{get:function(){return Vd=!0,!0}});window.addEventListener("te
st",li,li),window.removeEventListener("test",li,li)}catch{Vd=!1}var
$l=Vd?{passive:!1}:!1,c4=function(n){return n.tagName==="TEXTAREA"},Q1=function(n,s){if(!(n
instanceof Element))return!1;var r=window.getComputedStyle(n);return
r[s]!=="hidden"&&!(r.overflowY===r.overflowX&&!c4(n)&&r[s]==="visible")},u4=function(n){return
Q1(n,"overflowY")},d4=function(n){return Q1(n,"overflowX")},kv=function(n,s){var
r=s.ownerDocument,o=s;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var
c=Z1(n,o);if(c){var f=$1(n,o),p=f[1],m=f[2];if(p>m)return!0}o=o.parentNode}while(o&&o!==r.body);retu
rn!1},f4=function(n){var
s=n.scrollTop,r=n.scrollHeight,o=n.clientHeight;return[s,r,o]},p4=function(n){var
s=n.scrollLeft,r=n.scrollWidth,o=n.clientWidth;return[s,r,o]},Z1=function(n,s){return
n==="v"?u4(s):d4(s)},$1=function(n,s){return n==="v"?f4(s):p4(s)},h4=function(n,s,r,o,c){var f=h4(n,window.getComputedStyle(s).direction),p=f
*o,m=r.target,g=s.contains(m),h=!1,y=p>0,b=0,w=0;do{if(!m)break;var
E=$1(n,m),T=E[0],A=E[1],N=E[2],C=A-N-f*T;(T||C)&&Z1(n,m)&&(b+=C,w+=T);var O=m.parentNode;m=O&&O.node
Type===Node.DOCUMENT_FRAGMENT_NODE?O.host:O}while(!g&&m!==document.body||g&&(s.contains(m)||s===m));
return(y&&Math.abs(b)<1||!y&&Math.abs(w)<1)&&(h=!0),h},si=function(n){return"changedTouches"in n?[n.
changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},Lv=function(n){return[n.deltaX,n.delta
Y]},Hv=function(n){return n&&"current"in n?n.current:n},g4=function(n,s){return
n[0]===s[0]&&n[1]===s[1]},v4=function(n){return`   .block-interactivity-`.concat(n,`
{pointer-events: none;}   .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},x4=0,Kl=[];function y4(n){var s=v.useRef([]),r=v.useRef([0,0]),o=v.useRef(),c=v.useState(x4++)[0
],f=v.useState(I1)[0],p=v.useRef(n);v.useEffect(function(){p.current=n},[n]),v.useEffect(function(){
if(n.inert){document.body.classList.add("block-interactivity-".concat(c));var
A=BC([n.lockRef.current],(n.shards||[]).map(Hv),!0).filter(Boolean);return
A.forEach(function(N){return N.classList.add("allow-interactivity-".concat(c))}),function(){document
.body.classList.remove("block-interactivity-".concat(c)),A.forEach(function(N){return
N.classList.remove("allow-interactivity-".concat(c))})}}},[n.inert,n.lockRef.current,n.shards]);var
m=v.useCallback(function(A,N){if("touches"in
A&&A.touches.length===2||A.type==="wheel"&&A.ctrlKey)return!p.current.allowPinchZoom;var
C=si(A),O=r.current,D="deltaX"in A?A.deltaX:O[0]-C[0],B="deltaY"in
A?A.deltaY:O[1]-C[1],Y,Z=A.target,j=Math.abs(D)>Math.abs(B)?"h":"v";if("touches"in
A&&j==="h"&&Z.type==="range")return!1;var
q=window.getSelection(),J=q&&q.anchorNode,ee=J?J===Z||J.contains(Z):!1;if(ee)return!1;var se=kv(j,Z)
;if(!se)return!0;if(se?Y=j:(Y=j==="v"?"h":"v",se=kv(j,Z)),!se)return!1;if(!o.current&&"changedTouche
s"in A&&(D||B)&&(o.current=Y),!Y)return!0;var ue=o.current||Y;return
m4(ue,N,A,ue==="h"?D:B)},[]),g=v.useCallback(function(A){var
N=A;if(!(!Kl.length||Kl[Kl.length-1]!==f)){var C="deltaY"in
N?Lv(N):si(N),O=s.current.filter(function(Y){return Y.name===N.type&&(Y.target===N.target||N.target=
==Y.shadowParent)&&g4(Y.delta,C)})[0];if(O&&O.should){N.cancelable&&N.preventDefault();return}if(!O)
{var D=(p.current.shards||[]).map(Hv).filter(Boolean).filter(function(Y){return Y.contains(N.target)
}),B=D.length>0?m(N,D[0]):!p.current.noIsolation;B&&N.cancelable&&N.preventDefault()}}},[]),h=v.useC
allback(function(A,N,C,O){var D={name:A,delta:N,target:C,should:O,shadowParent:b4(C)};s.current.push
(D),setTimeout(function(){s.current=s.current.filter(function(B){return
B!==D})},1)},[]),y=v.useCallback(function(A){r.current=si(A),o.current=void 0},[]),b=v.useCallback(f
unction(A){h(A.type,Lv(A),A.target,m(A,n.lockRef.current))},[]),w=v.useCallback(function(A){h(A.type
,si(A),A.target,m(A,n.lockRef.current))},[]);v.useEffect(function(){return Kl.push(f),n.setCallbacks
({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:w}),document.addEventListener("wheel",g,$l),
document.addEventListener("touchmove",g,$l),document.addEventListener("touchstart",y,$l),function(){
Kl=Kl.filter(function(A){return A!==f}),document.removeEventListener("wheel",g,$l),document.removeEv
entListener("touchmove",g,$l),document.removeEventListener("touchstart",y,$l)}},[]);var
E=n.removeScrollBar,T=n.inert;return v.createElement(v.Fragment,null,T?v.createElement(f,{styles:v4(
c)}):null,E?v.createElement(i4,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function
b4(n){for(var s=null;n!==null;)n instanceof ShadowRoot&&(s=n.host,n=n.host),n=n.parentNode;return
s}const S4=$C(X1,y4);var K1=v.forwardRef(function(n,s){return
v.createElement(Hi,ya({},n,{ref:s,sideCar:S4}))});K1.classNames=Hi.classNames;var w4=["
","Enter","ArrowUp","ArrowDown"],A4=[" ","Enter"],sl="Select",[Pi,Ui,N4]=u1(sl),[us]=zn(sl,[N4,Li]),
Bi=Li(),[E4,kn]=us(sl),[C4,j4]=us(sl),F1=n=>{const{__scopeSelect:s,children:r,open:o,defaultOpen:c,o
nOpenChange:f,value:p,defaultValue:m,onValueChange:g,dir:h,name:y,autoComplete:b,disabled:w,required
:E,form:T}=n,A=Bi(s),[N,C]=v.useState(null),[O,D]=v.useState(null),[B,Y]=v.useState(!1),Z=Ti(h),[j,q
]=ts({prop:o,defaultProp:c??!1,onChange:f,caller:sl}),[J,ee]=ts({prop:p,defaultProp:m,onChange:g,cal
ler:sl}),se=v.useRef(null),ue=N?T||!!N.closest("form"):!0,[ge,pe]=v.useState(new
Set),de=Array.from(ge).map(k=>k.props.value).join(";");return d.jsx(L1,{...A,children:d.jsxs(E4,{req
uired:E,scope:s,trigger:N,onTriggerChange:C,valueNode:O,onValueNodeChange:D,valueNodeHasChildren:B,o
nValueNodeHasChildrenChange:Y,contentId:os(),value:J,onValueChange:ee,open:j,onOpenChange:q,dir:Z,tr
iggerPointerDownPosRef:se,disabled:w,children:[d.jsx(Pi.Provider,{scope:s,children:d.jsx(C4,{scope:n
.__scopeSelect,onNativeOptionAdd:v.useCallback(k=>{pe($=>new
Set($).add(k))},[]),onNativeOptionRemove:v.useCallback(k=>{pe($=>{const U=new Set($);return U.delete
(k),U})},[]),children:r})}),ue?d.jsxs(y0,{"aria-hidden":!0,required:E,tabIndex:-1,name:y,autoComplet
e:b,value:J,onChange:k=>ee(k.target.value),disabled:w,form:T,children:[J===void
0?d.jsx("option",{value:""}):null,Array.from(ge)]},de):null]})})};F1.displayName=sl;var J1="SelectTr
igger",W1=v.forwardRef((n,s)=>{const{__scopeSelect:r,disabled:o=!1,...c}=n,f=Bi(r),p=kn(J1,r),m=p.di
sabled||o,g=qe(s,p.onTriggerChange),h=Ui(r),y=v.useRef("touch"),[b,w,E]=S0(A=>{const
N=h().filter(D=>!D.disabled),C=N.find(D=>D.value===p.value),O=w0(N,A,C);O!==void 0&&p.onValueChange(
O.value)}),T=A=>{m||(p.onOpenChange(!0),E()),A&&(p.triggerPointerDownPosRef.current={x:Math.round(A.
pageX),y:Math.round(A.pageY)})};return d.jsx(H1,{asChild:!0,...f,children:d.jsx(_e.button,{type:"but
ton",role:"combobox","aria-controls":p.contentId,"aria-expanded":p.open,"aria-required":p.required,"aria-autocomplete":"none",dir:p.dir,"data-state":p.open?"open":"closed",disabled:m,"data-disabled":m
?"":void 0,"data-placeholder":b0(p.value)?"":void 0,...c,ref:g,onClick:xe(c.onClick,A=>{A.currentTar
get.focus(),y.current!=="mouse"&&T(A)}),onPointerDown:xe(c.onPointerDown,A=>{y.current=A.pointerType
;const N=A.target;N.hasPointerCapture(A.pointerId)&&N.releasePointerCapture(A.pointerId),A.button===
0&&A.ctrlKey===!1&&A.pointerType==="mouse"&&(T(A),A.preventDefault())}),onKeyDown:xe(c.onKeyDown,A=>
{const N=b.current!=="";!(A.ctrlKey||A.altKey||A.metaKey)&&A.key.length===1&&w(A.key),!(N&&A.key==="
")&&w4.includes(A.key)&&(T(),A.preventDefault())})})})});W1.displayName=J1;var e0="SelectValue",t0=v
.forwardRef((n,s)=>{const{__scopeSelect:r,className:o,style:c,children:f,placeholder:p="",...m}=n,g=
kn(e0,r),{onValueNodeHasChildrenChange:h}=g,y=f!==void 0,b=qe(s,g.onValueNodeChange);return vt(()=>{
h(y)},[h,y]),d.jsx(_e.span,{...m,ref:b,style:{pointerEvents:"none"},children:b0(g.value)?d.jsx(d.Fra
gment,{children:p}):f})});t0.displayName=e0;var
T4="SelectIcon",a0=v.forwardRef((n,s)=>{const{__scopeSelect:r,children:o,...c}=n;return
d.jsx(_e.span,{"aria-hidden":!0,...c,ref:s,children:o||"▼"})});a0.displayName=T4;var
R4="SelectPortal",n0=n=>d.jsx(Ef,{asChild:!0,...n});n0.displayName=R4;var
rl="SelectContent",l0=v.forwardRef((n,s)=>{const
r=kn(rl,n.__scopeSelect),[o,c]=v.useState();if(vt(()=>{c(new DocumentFragment)},[]),!r.open){const
f=o;return f?Er.createPortal(d.jsx(s0,{scope:n.__scopeSelect,children:d.jsx(Pi.Slot,{scope:n.__scope
Select,children:d.jsx("div",{children:n.children})})}),f):null}return
d.jsx(r0,{...n,ref:s})});l0.displayName=rl;var ca=10,[s0,Ln]=us(rl),M4="SelectContentImpl",_4=TC("Se
lectContent.RemoveScroll"),r0=v.forwardRef((n,s)=>{const{__scopeSelect:r,position:o="item-aligned",o
nCloseAutoFocus:c,onEscapeKeyDown:f,onPointerDownOutside:p,side:m,sideOffset:g,align:h,alignOffset:y
,arrowPadding:b,collisionBoundary:w,collisionPadding:E,sticky:T,hideWhenDetached:A,avoidCollisions:N
,...C}=n,O=kn(rl,r),[D,B]=v.useState(null),[Y,Z]=v.useState(null),j=qe(s,K=>B(K)),[q,J]=v.useState(n
ull),[ee,se]=v.useState(null),ue=Ui(r),[ge,pe]=v.useState(!1),de=v.useRef(!1);v.useEffect(()=>{if(D)
return UC(D)},[D]),W3();const k=v.useCallback(K=>{const[Se,...ye]=ue().map(Pe=>Pe.ref.current),[je]=
ye.slice(-1),De=document.activeElement;for(const Pe of K)if(Pe===De||(Pe?.scrollIntoView({block:"nea
rest"}),Pe===Se&&Y&&(Y.scrollTop=0),Pe===je&&Y&&(Y.scrollTop=Y.scrollHeight),Pe?.focus(),document.ac
tiveElement!==De))return},[ue,Y]),$=v.useCallback(()=>k([q,D]),[k,q,D]);v.useEffect(()=>{ge&&$()},[g
e,$]);const{onOpenChange:U,triggerPointerDownPosRef:oe}=O;v.useEffect(()=>{if(D){let
K={x:0,y:0};const Se=je=>{K={x:Math.abs(Math.round(je.pageX)-(oe.current?.x??0)),y:Math.abs(Math.rou
nd(je.pageY)-(oe.current?.y??0))}},ye=je=>{K.x<=10&&K.y<=10?je.preventDefault():D.contains(je.target
)||U(!1),document.removeEventListener("pointermove",Se),oe.current=null};return oe.current!==null&&(
document.addEventListener("pointermove",Se),document.addEventListener("pointerup",ye,{capture:!0,onc
e:!0})),()=>{document.removeEventListener("pointermove",Se),document.removeEventListener("pointerup"
,ye,{capture:!0})}}},[D,U,oe]),v.useEffect(()=>{const K=()=>U(!1);return window.addEventListener("bl
ur",K),window.addEventListener("resize",K),()=>{window.removeEventListener("blur",K),window.removeEv
entListener("resize",K)}},[U]);const[me,M]=S0(K=>{const Se=ue().filter(De=>!De.disabled),ye=Se.find(
De=>De.ref.current===document.activeElement),je=w0(Se,K,ye);je&&setTimeout(()=>je.ref.current.focus(
))}),X=v.useCallback((K,Se,ye)=>{const je=!de.current&&!ye;(O.value!==void 0&&O.value===Se||je)&&(J(
K),je&&(de.current=!0))},[O.value]),F=v.useCallback(()=>D?.focus(),[D]),W=v.useCallback((K,Se,ye)=>{
const je=!de.current&&!ye;(O.value!==void 0&&O.value===Se||je)&&se(K)},[O.value]),ce=o==="popper"?qd
:o0,he=ce===qd?{side:m,sideOffset:g,align:h,alignOffset:y,arrowPadding:b,collisionBoundary:w,collisi
onPadding:E,sticky:T,hideWhenDetached:A,avoidCollisions:N}:{};return d.jsx(s0,{scope:r,content:D,vie
wport:Y,onViewportChange:Z,itemRefCallback:X,selectedItem:q,onItemLeave:F,itemTextRefCallback:W,focu
sSelectedItem:$,selectedItemText:ee,position:o,isPositioned:ge,searchRef:me,children:d.jsx(K1,{as:_4
,allowPinchZoom:!0,children:d.jsx(p1,{asChild:!0,trapped:O.open,onMountAutoFocus:K=>{K.preventDefaul
t()},onUnmountAutoFocus:xe(c,K=>{O.trigger?.focus({preventScroll:!0}),K.preventDefault()}),children:
d.jsx(gf,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:p,onFocus
Outside:K=>K.preventDefault(),onDismiss:()=>O.onOpenChange(!1),children:d.jsx(ce,{role:"listbox",id:
O.contentId,"data-state":O.open?"open":"closed",dir:O.dir,onContextMenu:K=>K.preventDefault(),...C,.
..he,onPlaced:()=>pe(!0),ref:j,style:{display:"flex",flexDirection:"column",outline:"none",...C.styl
e},onKeyDown:xe(C.onKeyDown,K=>{const Se=K.ctrlKey||K.altKey||K.metaKey;if(K.key==="Tab"&&K.preventD
efault(),!Se&&K.key.length===1&&M(K.key),["ArrowUp","ArrowDown","Home","End"].includes(K.key)){let j
e=ue().filter(De=>!De.disabled).map(De=>De.ref.current);if(["ArrowUp","End"].includes(K.key)&&(je=je
.slice().reverse()),["ArrowUp","ArrowDown"].includes(K.key)){const De=K.target,Pe=je.indexOf(De);je=
je.slice(Pe+1)}setTimeout(()=>k(je)),K.preventDefault()}})})})})})})});r0.displayName=M4;var O4="Sel
ectItemAlignedPosition",o0=v.forwardRef((n,s)=>{const{__scopeSelect:r,onPlaced:o,...c}=n,f=kn(rl,r),
p=Ln(rl,r),[m,g]=v.useState(null),[h,y]=v.useState(null),b=qe(s,j=>y(j)),w=Ui(r),E=v.useRef(!1),T=v.
useRef(!0),{viewport:A,selectedItem:N,selectedItemText:C,focusSelectedItem:O}=p,D=v.useCallback(()=>
{if(f.trigger&&f.valueNode&&m&&h&&A&&N&&C){const j=f.trigger.getBoundingClientRect(),q=h.getBounding
ClientRect(),J=f.valueNode.getBoundingClientRect(),ee=C.getBoundingClientRect();if(f.dir!=="rtl"){co
nst De=ee.left-q.left,Pe=J.left-De,bt=j.left-Pe,St=j.width+bt,Hn=Math.max(St,q.width),Pn=window.inne
rWidth-ca,ds=kd(Pe,[ca,Math.max(ca,Pn-Hn)]);m.style.minWidth=St+"px",m.style.left=ds+"px"}else{const
De=q.right-ee.right,Pe=window.innerWidth-J.right-De,bt=window.innerWidth-j.right-Pe,St=j.width+bt,Hn
=Math.max(St,q.width),Pn=window.innerWidth-ca,ds=kd(Pe,[ca,Math.max(ca,Pn-Hn)]);m.style.minWidth=St+
"px",m.style.right=ds+"px"}const se=w(),ue=window.innerHeight-ca*2,ge=A.scrollHeight,pe=window.getCo
mputedStyle(h),de=parseInt(pe.borderTopWidth,10),k=parseInt(pe.paddingTop,10),$=parseInt(pe.borderBo
ttomWidth,10),U=parseInt(pe.paddingBottom,10),oe=de+k+ge+U+$,me=Math.min(N.offsetHeight*5,oe),M=wind
ow.getComputedStyle(A),X=parseInt(M.paddingTop,10),F=parseInt(M.paddingBottom,10),W=j.top+j.height/2
-ca,ce=ue-W,he=N.offsetHeight/2,K=N.offsetTop+he,Se=de+k+K,ye=oe-Se;if(Se<=W){const
De=se.length>0&&N===se[se.length-1].ref.current;m.style.bottom="0px";const Pe=h.clientHeight-A.offse
tTop-A.offsetHeight,bt=Math.max(ce,he+(De?F:0)+Pe+$),St=Se+bt;m.style.height=St+"px"}else{const
De=se.length>0&&N===se[0].ref.current;m.style.top="0px";const bt=Math.max(W,de+A.offsetTop+(De?X:0)+
he)+ye;m.style.height=bt+"px",A.scrollTop=Se-W+A.offsetTop}m.style.margin=`${ca}px 0`,m.style.minHei
ght=me+"px",m.style.maxHeight=ue+"px",o?.(),requestAnimationFrame(()=>E.current=!0)}},[w,f.trigger,f
.valueNode,m,h,A,N,C,f.dir,o]);vt(()=>D(),[D]);const[B,Y]=v.useState();vt(()=>{h&&Y(window.getComput
edStyle(h).zIndex)},[h]);const
Z=v.useCallback(j=>{j&&T.current===!0&&(D(),O?.(),T.current=!1)},[D,O]);return d.jsx(z4,{scope:r,con
tentWrapper:m,shouldExpandOnScrollRef:E,onScrollButtonChange:Z,children:d.jsx("div",{ref:g,style:{di
splay:"flex",flexDirection:"column",position:"fixed",zIndex:B},children:d.jsx(_e.div,{...c,ref:b,sty
le:{boxSizing:"border-box",maxHeight:"100%",...c.style}})})})});o0.displayName=O4;var D4="SelectPopp
erPosition",qd=v.forwardRef((n,s)=>{const{__scopeSelect:r,align:o="start",collisionPadding:c=ca,...f
}=n,p=Bi(r);return d.jsx(P1,{...p,...f,ref:s,align:o,collisionPadding:c,style:{boxSizing:"border-box
",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--rad
ix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-ava
ilable-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-po
pper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});qd.disp
layName=D4;var[z4,Cf]=us(rl,{}),Yd="SelectViewport",i0=v.forwardRef((n,s)=>{const{__scopeSelect:r,no
nce:o,...c}=n,f=Ln(Yd,r),p=Cf(Yd,r),m=qe(s,f.onViewportChange),g=v.useRef(0);return d.jsxs(d.Fragmen
t,{children:[d.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-
width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::
-webkit-scrollbar{display:none}"},nonce:o}),d.jsx(Pi.Slot,{scope:r,children:d.jsx(_e.div,{"data-radix
-select-viewport":"",role:"presentation",...c,ref:m,style:{position:"relative",flex:1,overflow:"hidd
en auto",...c.style},onScroll:xe(c.onScroll,h=>{const
y=h.currentTarget,{contentWrapper:b,shouldExpandOnScrollRef:w}=p;if(w?.current&&b){const
E=Math.abs(g.current-y.scrollTop);if(E>0){const T=window.innerHeight-ca*2,A=parseFloat(b.style.minHe
ight),N=parseFloat(b.style.height),C=Math.max(A,N);if(C<T){const O=C+E,D=Math.min(T,O),B=O-D;b.style
.height=D+"px",b.style.bottom==="0px"&&(y.scrollTop=B>0?B:0,b.style.justifyContent="flex-end")}}}
g.c
urrent=y.scrollTop})})})]})});i0.displayName=Yd;var
c0="SelectGroup",[k4,L4]=us(c0),H4=v.forwardRef((n,s)=>{const{__scopeSelect:r,...o}=n,c=os();return 
d.jsx(k4,{scope:r,id:c,children:d.jsx(_e.div,{role:"group","aria-labelledby":c,...o,ref:s})})});H4.d
isplayName=c0;var
u0="SelectLabel",P4=v.forwardRef((n,s)=>{const{__scopeSelect:r,...o}=n,c=L4(u0,r);return
d.jsx(_e.div,{id:c.id,...o,ref:s})});P4.displayName=u0;var Ni="SelectItem",[U4,d0]=us(Ni),f0=v.forwa
rdRef((n,s)=>{const{__scopeSelect:r,value:o,disabled:c=!1,textValue:f,...p}=n,m=kn(Ni,r),g=Ln(Ni,r),
h=m.value===o,[y,b]=v.useState(f??""),[w,E]=v.useState(!1),T=qe(s,O=>g.itemRefCallback?.(O,o,c)),A=o
s(),N=v.useRef("touch"),C=()=>{c||(m.onValueChange(o),m.onOpenChange(!1))};if(o==="")throw new
Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the
Select value can be set to an empty string to clear the selection and show the placeholder.");return
d.jsx(U4,{scope:r,value:o,disabled:c,textId:A,isSelected:h,onItemTextChange:v.useCallback(O=>{b(D=>D
||(O?.textContent??"").trim())},[]),children:d.jsx(Pi.ItemSlot,{scope:r,value:o,disabled:c,textValue
:y,children:d.jsx(_e.div,{role:"option","aria-labelledby":A,"data-highlighted":w?"":void
0,"aria-selected":h&&w,"data-state":h?"checked":"unchecked","aria-disabled":c||void
0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...p,ref:T,onFocus:xe(p.onFocus,()=>E(!0)),onBlur
:xe(p.onBlur,()=>E(!1)),onClick:xe(p.onClick,()=>{N.current!=="mouse"&&C()}),onPointerUp:xe(p.onPoin
tterUp,()=>{N.current==="mouse"&&C()}),onPointerDown:xe(p.onPointerDown,O=>{N.current=O.pointerType})
,onPointerMove:xe(p.onPointerMove,O=>{N.current=O.pointerType,c?g.onItemLeave?.():N.current==="mouse
"&&O.currentTarget.focus({preventScroll:!0})}),onPointerLeave:xe(p.onPointerLeave,O=>{O.currentTarge
t===document.activeElement&&g.onItemLeave?.()}),onKeyDown:xe(p.onKeyDown,O=>{g.searchRef?.current!==
""&&O.key===" "||(A4.includes(O.key)&&C(),O.key===" "
&&O.preventDefault())})})})})});f0.displayName=Ni;var ur="SelectItemText",p0=v.forwardRef((n,s)=>{c
onst{__scopeSelect:r,className:o,style:c,...f}=n,p=kn(ur,r),m=Ln(ur,r),g=d0(ur,r),h=j4(ur,r),[y,b]=v
.useState(null),w=qe(s,C=>b(C),g.onItemTextChange,C=>m.itemTextRefCallback?.(C,g.value,g.disabled)),
E=y?.textContent,T=v.useMemo(()=>d.jsx("option",{value:g.value,disabled:g.disabled,children:E},g.val
ue),[g.disabled,g.value,E]),{onNativeOptionAdd:A,onNativeOptionRemove:N}=h;return vt(()=>(A(T),()=>N
(T)),[A,N,T]),d.jsxs(d.Fragment,{children:[d.jsx(_e.span,{id:g.textId,...f,ref:w}),g.isSelected&&p.v
alueNode&&!p.valueNodeHasChildren?Er.createPortal(f.children,p.valueNode):null]})});p0.displayName=u
r;var h0="SelectItemIndicator",m0=v.forwardRef((n,s)=>{const{__scopeSelect:r,...o}=n;return
d0(h0,r).isSelected?d.jsx(_e.span,{"aria-hidden":!0,...o,ref:s}):null});m0.displayName=h0;var
Gd="SelectScrollUpButton",g0=v.forwardRef((n,s)=>{const r=Ln(Gd,n.__scopeSelect),o=Cf(Gd,n.__scopeSe
lect),[c,f]=v.useState(!1),p=qe(s,o.onScrollButtonChange);return
vt(()=>{if(r.viewport&&r.isPositioned){let m=function(){const h=g.scrollTop>0;f(h)};const
g=r.viewport;return m(),g.addEventListener("scroll",m),()=>g.removeEventListener("scroll",m)}},[r.vi
ewport,r.isPositioned]),c?d.jsx(x0,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:g}=r;
m&&g&&(m.scrollTop=m.scrollTop-g.offsetHeight)}}):null});g0.displayName=Gd;var
Xd="SelectScrollDownButton",v0=v.forwardRef((n,s)=>{const r=Ln(Xd,n.__scopeSelect),o=Cf(Xd,n.__scope
Select),[c,f]=v.useState(!1),p=qe(s,o.onScrollButtonChange);return
vt(()=>{if(r.viewport&&r.isPositioned){let m=function(){const
h=g.scrollHeight-g.clientHeight,y=Math.ceil(g.scrollTop)<h;f(y)};const g=r.viewport;return m(),g.add
EventListener("scroll",m),()=>g.removeEventListener("scroll",m)}},[r.viewport,r.isPositioned]),c?d.j
sx(x0,{...n,ref:p,onAutoScroll:()=>{const{viewport:m,selectedItem:g}=r;m&&g&&(m.scrollTop=m.scrollTo
p+g.offsetHeight)}}):null});v0.displayName=Xd;var x0=v.forwardRef((n,s)=>{const{__scopeSelect:r,onAu
toScroll:o,...c}=n,f=Ln("SelectScrollButton",r),p=v.useRef(null),m=Ui(r),g=v.useCallback(()=>{p.curr
ent!==null&&(window.clearInterval(p.current),p.current=null)},[]);return v.useEffect(()=>()=>g(),[g]
),vt(()=>{m().find(y=>y.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"n
earest"})},[m]),d.jsx(_e.div,{"aria-hidden":!0,...c,ref:s,style:{flexShrink:0,...c.style},onPointerD
own:xe(c.onPointerDown,()=>{p.current===null&&(p.current=window.setInterval(o,50))}),onPointerMove:x
e(c.onPointerMove,()=>{f.onItemLeave?.(),p.current===null&&(p.current=window.setInterval(o,50))}),on
PointerLeave:xe(c.onPointerLeave,()=>{g()})})}),B4="SelectSeparator",V4=v.forwardRef((n,s)=>{const{_
_scopeSelect:r,...o}=n;return d.jsx(_e.div,{"aria-hidden":!0,...o,ref:s})});V4.displayName=B4;var Id
="SelectArrow",q4=v.forwardRef((n,s)=>{const{__scopeSelect:r,...o}=n,c=Bi(r),f=kn(Id,r),p=Ln(Id,r);r
eurn f.open&&p.position==="popper"?d.jsx(U1,{...c,...o,ref:s}):null});q4.displayName=Id;var
Y4="SelectBubbleInput",y0=v.forwardRef(({__scopeSelect:n,value:s,...r},o)=>{const
c=v.useRef(null),f=qe(o,c),p=n1(s);return v.useEffect(()=>{const m=c.current;if(!m)return;const g=wi
ndow.HTMLSelectElement.prototype,y=Object.getOwnPropertyDescriptor(g,"value").set;if(p!==s&&y){const
b=new Event("change",{bubbles:!0});y.call(m,s),m.dispatchEvent(b)}},[p,s]),d.jsx(_e.select,{...r,sty
le:{...B1,...r.style},ref:f,defaultValue:s})});y0.displayName=Y4;function b0(n){return
n===""||n===void 0}function S0(n){const
s=At(n),r=v.useRef(""),o=v.useRef(0),c=v.useCallback(p=>{const m=r.current+p;s(m),(function g(h){r.c
urrent=h,window.clearTimeout(o.current),h!==""&&(o.current=window.setTimeout(()=>g(""),1e3))})(m)},[
s]),f=v.useCallback(()=>{r.current="",window.clearTimeout(o.current)},[]);return
v.useEffect(()=>()=>window.clearTimeout(o.current),[]),[r,c,f]}function w0(n,s,r){const
c=s.length>1&&Array.from(s).every(h=>h===s[0])?s[0]:s,f=r?n.indexOf(r):-1;let
p=G4(n,Math.max(f,0));c.length===1&&(p=p.filter(h=>h!==r));const
g=p.find(h=>h.textValue.toLowerCase().startsWith(c.toLowerCase()));return g!==r?g:void 0}function
G4(n,s){return n.map((r,o)=>n[(s+o)%n.length])}var
X4=F1,I4=W1,Q4=t0,Z4=a0,$4=n0,K4=l0,F4=i0,J4=f0,W4=p0,e5=m0,t5=g0,a5=v0;function fr({...n}){return
d.jsx(X4,{"code-path":"src/components/ui/select.tsx:10:10","data-slot":"select",...n})}function
pr({...n}){return d.jsx(Q4,{"code-path":"src/components/ui/select.tsx:22:10","data-slot":"select-val
ue",...n})}function hr({className:n,size:s="default",children:r,...o}){return d.jsxs(I4,{"code-path"
:"src/components/ui/select.tsx:34:5","data-slot":"select-trigger","data-size":s,className:Ae("border
-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground
focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20
dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30
dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border
bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow]
outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1
*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center
*:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='si
ze-'])]:size-4",n),...o,children:[r,d.jsx(Z4,{"code-path":"src/components/ui/select.tsx:44:7",asChil
d:!0,children:d.jsx(mx,{"code-path":"src/components/ui/select.tsx:45:9",className:"size-4
opacity-50"})})]})}function
mr({className:n,children:s,position:r="item-aligned",align:o="center",...c}){return d.jsx($4,{"code-
path":"src/components/ui/select.tsx:59:5",children:d.jsxs(K4,{"code-path":"src/components/ui/select.
tsx:60:7","data-slot":"select-content",className:Ae("bg-popover text-popover-foreground
data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0
data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50
max-h-(--radix-select-content-available-height) min-w-[8rem]
origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border
shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1
data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:r,align:o,...c,children:
[d.jsx(n5,{"code-path":"src/components/ui/select.tsx:72:9"}),d.jsx(F4,{"code-path":"src/components/u
i/select.tsx:73:9",className:Ae("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full
min-w-[var(--radix-select-trigger-width)]
scroll-my-1"),children:s}),d.jsx(l5,{"code-path":"src/components/ui/select.tsx:82:9"})]})})}function
xa({className:n,children:s,...r}){return d.jsxs(J4,{"code-path":"src/components/ui/select.tsx:107:5"
,"data-slot":"select-item",className:Ae("focus:bg-accent focus:text-accent-foreground
[&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center
gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none
data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none
[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center 
*:[span]:last:gap-2",n),...r,children:[d.jsx("span",{"code-path":"src/components/ui/select.tsx:115:7
","data-slot":"select-item-indicator",className:"absolute right-2 flex size-3.5 items-center justify
-center",children:d.jsx(e5,{"code-path":"src/components/ui/select.tsx:119:9",children:d.jsx(ww,{"cod
e-path":"src/components/ui/select.tsx:120:11",className:"size-4"})})}),d.jsx(W4,{"code-path":"src/co
mponents/ui/select.tsx:123:7",children:s})]})}function n5({className:n,...s}){return d.jsx(t5,{"code
-path":"src/components/ui/select.tsx:146:5","data-slot":"select-scroll-up-button",className:Ae("flex
cursor-default items-center justify-center py-1",n),...s,children:d.jsx(Rw,{"code-path":"src/compone
nts/ui/select.tsx:154:7",className:"size-4"})})}function l5({className:n,...s}){return d.jsx(a5,{"co
de-path":"src/components/ui/select.tsx:164:5","data-slot":"select-scroll-down-button",className:Ae("
flex cursor-default items-center justify-center py-1",n),...s,children:d.jsx(mx,{"code-path":"src/co
mponents/ui/select.tsx:172:7",className:"size-4"})})}var s5=Symbol("radix.slottable");function
r5(n){const s=({children:r})=>d.jsx(d.Fragment,{children:r});return s.displayName=`${n}.Slottable`,s
.__radixId=s5,s}var[Vi]=zn("Tooltip",[Li]),qi=Li(),A0="TooltipProvider",o5=700,Qd="tooltip.open",[i5
,jf]=Vi(A0),N0=n=>{const{__scopeTooltip:s,delayDuration:r=o5,skipDelayDuration:o=300,disableHoverabl
eContent:c=!1,children:f}=n,p=v.useRef(!0),m=v.useRef(!1),g=v.useRef(0);return
v.useEffect(()=>{const h=g.current;return()=>window.clearTimeout(h)},[]),d.jsx(i5,{scope:s,isOpenDel
ayedRef:p,delayDuration:r,onOpen:v.useCallback(()=>{window.clearTimeout(g.current),p.current=!1},[])
,onClose:v.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>p.current
=!0,o)},[o]),isPointerInTransitRef:m,onPointerInTransitChange:v.useCallback(h=>{m.current=h},[]),dis
ableHoverableContent:c,children:f})};N0.displayName=A0;var yr="Tooltip",[c5,jr]=Vi(yr),E0=n=>{const{
__scopeTooltip:s,children:r,open:o,defaultOpen:c,onOpenChange:f,disableHoverableContent:p,delayDurat
ion:m}=n,g=jf(yr,n.__scopeTooltip),h=qi(s),[y,b]=v.useState(null),w=os(),E=v.useRef(0),T=p??g.disabl
eHoverableContent,A=m??g.delayDuration,N=v.useRef(!1),[C,O]=ts({prop:o,defaultProp:c??!1,onChange:j=
>{j?(g.onOpen(),document.dispatchEvent(new CustomEvent(Qd))):g.onClose(),f?.(j)},caller:yr}),D=v.use
Memo(()=>C?N.current?"delayed-open":"instant-open":"closed",[C]),B=v.useCallback(()=>{window.clearTi
meout(E.current),E.current=0,N.current=!1,O(!0)},[O]),Y=v.useCallback(()=>{window.clearTimeout(E.cur
rent),E.current=0,O(!1)},[O]),Z=v.useCallback(()=>{window.clearTimeout(E.current),E.current=window.s
etTimeout(()=>{N.current=!0,O(!0),E.current=0},A)},[A,O]);return v.useEffect(()=>()=>{E.current&&(wi
ndow.clearTimeout(E.current),E.current=0)},[]),d.jsx(L1,{...h,children:d.jsx(c5,{scope:s,contentId:w
,open:C,stateAttribute:D,trigger:y,onTriggerChange:b,onTriggerEnter:v.useCallback(()=>{g.isOpenDelay
edRef.current?Z():B()},[g.isOpenDelayedRef,Z,B]),onTriggerLeave:v.useCallback(()=>{T?Y():(window.cle
arTimeout(E.current),E.current=0)},[Y,T]),onOpen:B,onClose:Y,disableHoverableContent:T,children:r})}
)};E0.displayName=yr;var Zd="TooltipTrigger",C0=v.forwardRef((n,s)=>{const{__scopeTooltip:r,...o}=n,
c=jr(Zd,r),f=jf(Zd,r),p=qi(r),m=v.useRef(null),g=qe(s,m,c.onTriggerChange),h=v.useRef(!1),y=v.useRef
(!1),b=v.useCallback(()=>h.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener("p
ointerup",b),[b]),d.jsx(H1,{asChild:!0,...p,children:d.jsx(_e.button,{"aria-describedby":c.open?c.co
ntentId:void 0,"data-state":c.stateAttribute,...o,ref:g,onPointerMove:xe(n.onPointerMove,w=>{w.point
erType!=="touch"&&!y.current&&!f.isPointerInTransitRef.current&&(c.onTriggerEnter(),y.current=!0)}),
onPointerLeave:xe(n.onPointerLeave,()=>{c.onTriggerLeave(),y.current=!1}),onPointerDown:xe(n.onPoint
erDown,()=>{c.open&&c.onClose(),h.current=!0,document.addEventListener("pointerup",b,{once:!0})}),on
Focus:xe(n.onFocus,()=>{h.current||c.onOpen()}),onBlur:xe(n.onBlur,c.onClose),onClick:xe(n.onClick,c
.onClose)})})});C0.displayName=Zd;var Tf="TooltipPortal",[u5,d5]=Vi(Tf,{forceMount:void
0}),j0=n=>{const{__scopeTooltip:s,forceMount:r,children:o,container:c}=n,f=jr(Tf,s);return d.jsx(u5,
{scope:s,forceMount:r,children:d.jsx(Dn,{present:r||f.open,children:d.jsx(Ef,{asChild:!0,container:c
,children:o})})})};j0.displayName=Tf;var ns="TooltipContent",T0=v.forwardRef((n,s)=>{const r=d5(ns,n
.__scopeTooltip),{forceMount:o=r.forceMount,side:c="top",...f}=n,p=jr(ns,n.__scopeTooltip);return d.
jsx(Dn,{present:o||p.open,children:p.disableHoverableContent?d.jsx(R0,{side:c,...f,ref:s}):d.jsx(f5,
{side:c,...f,ref:s})})}),f5=v.forwardRef((n,s)=>{const r=jr(ns,n.__scopeTooltip),o=jf(ns,n.__scopeTo
oltip),c=v.useRef(null),f=qe(s,c),[p,m]=v.useState(null),{trigger:g,onClose:h}=r,y=c.current,{onPoin
erInTransitChange:b}=o,w=v.useCallback(()=>{m(null),b(!1)},[b]),E=v.useCallback((T,A)=>{const N=T.c
urrentTarget,C={x:T.clientX,y:T.clientY},O=g5(C,N.getBoundingClientRect()),D=v5(C,O),B=x5(A.getBoun
dingClientRect()),Y=b5([...D,...B]);m(Y),b(!0)},[b]);return
v.useEffect(()=>()=>w(),[w]),v.useEffect(()=>{if(g&&y){const T=N=>E(N,y),A=N=>E(N,g);return g.addEve
ntListener("pointerleave",T),y.addEventListener("pointerleave",A),()=>{g.removeEventListener("pointe
rleave",T),y.removeEventListener("pointerleave",A)}}},[g,y,E,w]),v.useEffect(()=>{if(p){const
T=A=>{const N=A.target,C={x:A.clientX,y:A.clientY},O=g?.contains(N)||y?.contains(N),D=!y5(C,p);O?w()
:D&&(w(),h())};return document.addEventListener("pointermove",T),()=>document.removeEventListener("p
ointermove",T)}},[g,y,p,h,w]),d.jsx(R0,{...n,ref:f})}),[p5,h5]=Vi(yr,{isInside:!1}),m5=r5("TooltipCo
ntent"),R0=v.forwardRef((n,s)=>{const{__scopeTooltip:r,children:o,"aria-label":c,onEscapeKeyDown:f,o
nPointerDownOutside:p,...m}=n,g=jr(ns,r),h=qi(r),{onClose:y}=g;return v.useEffect(()=>(document.addE
ventListener(Qd,y),()=>document.removeEventListener(Qd,y)),[y]),v.useEffect(()=>{if(g.trigger){const
b=w=>{w.target?.contains(g.trigger)&&y()};return window.addEventListener("scroll",b,{capture:!0}),()
=>window.removeEventListener("scroll",b,{capture:!0})}},[g.trigger,y]),d.jsx(gf,{asChild:!0,disableO
utsidePointerEvents:!1,onEscapeKeyDown:f,onPointerDownOutside:p,onFocusOutside:b=>b.preventDefault()
,onDismiss:y,children:d.jsxs(P1,{"data-state":g.stateAttribute,...h,...m,ref:s,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-cont
ent-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height
":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-
width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[d.jsx(m5,{ch
ildren:o}),d.jsx(p5,{scope:r,isInside:!0,children:d.jsx(kC,{id:g.contentId,role:"tooltip",children:c
||o})})]})})});T0.displayName=ns;var
M0="TooltipArrow",_0=v.forwardRef((n,s)=>{const{__scopeTooltip:r,...o}=n,c=qi(r);return
h5(M0,r).isInside?null:d.jsx(U1,{...c,...o,ref:s})});_0.displayName=M0;function g5(n,s){const r=Math
.abs(s.top-n.y),o=Math.abs(s.bottom-n.y),c=Math.abs(s.right-n.x),f=Math.abs(s.left-n.x);switch(Math.
min(r,o,c,f)){case f:return"left";case c:return"right";case r:return"top";case
o:return"bottom";default:throw new Error("unreachable")}}function v5(n,s,r=5){const o=[];switch(s){c
ase"top":o.push({x:n.x-r,y:n.y+r},{x:n.x+r,y:n.y+r});break;case"bottom":o.push({x:n.x-r,y:n.y-r},{x:
n.x+r,y:n.y-r});break;case"left":o.push({x:n.x+r,y:n.y-r},{x:n.x+r,y:n.y+r});break;case"right":o.pus
h({x:n.x-r,y:n.y-r},{x:n.x-r,y:n.y+r});break}return o}function x5(n){const{top:s,right:r,bottom:o,le
ft:c}=n;return[{x:c,y:s},{x:r,y:s},{x:r,y:o},{x:c,y:o}]}function y5(n,s){const{x:r,y:o}=n;let
c=!1;for(let f=0,p=s.length-1;f<s.length;p=f++){const
m=s[f],g=s[p],h=m.x,y=m.y,b=g.x,w=g.y;y>o!=w>o&&r<(b-h)*(o-y)/(w-y)+h&&(c=!c)}return c}function
b5(n){const s=n.slice();return
s.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),S5(s)}function
S5(n){if(n.length<=1)return n.slice();const s=[];for(let o=0;o<n.length;o++){const
c=n[o];for(;s.length>=2;){const
f=s[s.length-1],p=s[s.length-2];if((f.x-p.x)*(c.y-p.y)>=(f.y-p.y)*(c.x-p.x))s.pop();else
break}s.push(c)}s.pop();const r=[];for(let o=n.length-1;o>=0;o--){const
c=n[o];for(;r.length>=2;){const
f=r[r.length-1],p=r[r.length-2];if((f.x-p.x)*(c.y-p.y)>=(f.y-p.y)*(c.x-p.x))r.pop();else
break}r.push(c)}return
r.pop(),s.length===1&&r.length===1&&s[0].x===r[0].x&&s[0].y===r[0].y?s:s.concat(r)}var
w5=N0,A5=E0,N5=C0,E5=j0,C5=T0,j5=_0;function O0({delayDuration:n=0,...s}){return d.jsx(w5,{"code-pat
h":"src/components/ui/tooltip.tsx:13:5","data-slot":"tooltip-provider",delayDuration:n,...s})}functi
on T5({...n}){return d.jsx(O0,{"code-path":"src/components/ui/tooltip.tsx:25:5",children:d.jsx(A5,{"
code-path":"src/components/ui/tooltip.tsx:26:7","data-slot":"tooltip",...n})})}function
R5({...n}){return d.jsx(N5,{"code-path":"src/components/ui/tooltip.tsx:34:10","data-slot":"tooltip-t
rigger",...n})}function M5({className:n,sideOffset:s=0,children:r,...o}){return d.jsx(E5,{"code-path
":"src/components/ui/tooltip.tsx:44:5",children:d.jsxs(C5,{"code-path":"src/components/ui/tooltip.ts
x:45:7","data-slot":"tooltip-content",sideOffset:s,className:Ae("bg-foreground text-background
animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0
data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2
data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin)
rounded-md px-3 py-1.5 text-xs text-balance",n),...o,children:[r,d.jsx(j5,{"code-path":"src/componen
ts/ui/tooltip.tsx:55:9",className:"bg-foreground fill-foreground z-50 size-2.5
translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}class
_5{baseUrl;constructor(s="http://localhost:11434"){this.baseUrl=s}async checkHealth(){try{const
s=new AbortController,r=setTimeout(()=>s.abort(),5e3),o=await
fetch(`${this.baseUrl}/api/tags`,{signal:s.signal});return
clearTimeout(r),o.ok?{ok:!0,corsBlocked:!1,models:((await o.json()).models||[]).map(p=>({name:p.name
,size:p.size,modified_at:p.modified_at}))}:{ok:!1,corsBlocked:!1,models:[]}}catch(s){const r=s
instanceof Error?s.message:String(s);return r.includes("CORS")||r.includes("Failed to
fetch")||r.includes("NetworkError")||r.includes("Network request
failed")?{ok:!1,corsBlocked:!0,models:[]}:s instanceof DOMException&&s.name==="AbortError"?{ok:!1,co
rsBlocked:!1,models:[]}:{ok:!1,corsBlocked:!1,models:[]}}}}const O5=new _5;function D5(){const[n,s]=
v.useState("checking"),[r,o]=v.useState([]),[c,f]=v.useState(""),p=v.useCallback(async()=>{s("checki
ng");try{const m=await O5.checkHealth();m.ok?(s("online"),o(m.models),m.models.length>0&&!c&&f(m.mod
els[0].name)):m.corsBlocked?(s("cors-blocked"),o([])):(s("offline"),o([]))}catch{s("offline"),o([])}
},[c]);return v.useEffect(()=>{p()},[p]),{status:n,models:r,selectedModel:c,setSelectedModel:f,check
Connection:p}}function z5({status:n}){switch(n){case"online":return
d.jsxs(yt,{"code-path":"src/pages/ScreeningPage.tsx:153:9",variant:"outline",className:"bg-green-50
text-green-700 border-green-200
gap-1",children:[d.jsx(PA,{"code-path":"src/pages/ScreeningPage.tsx:157:11",className:"h-3
w-3"}),"Connected"]});case"offline":return
d.jsxs(yt,{"code-path":"src/pages/ScreeningPage.tsx:163:9",variant:"outline",className:"bg-red-50
text-red-700 border-red-200
gap-1",children:[d.jsx(wx,{"code-path":"src/pages/ScreeningPage.tsx:167:11",className:"h-3
w-3"}),"Offline"]});case"cors-blocked":return
d.jsxs(yt,{"code-path":"src/pages/ScreeningPage.tsx:173:9",variant:"outline",className:"bg-amber-50
text-amber-700 border-amber-200
gap-1",children:[d.jsx(hi,{"code-path":"src/pages/ScreeningPage.tsx:177:11",className:"h-3
w-3"}),"CORS Blocked"]});case"checking":return d.jsxs(yt,{"code-path":"src/pages/ScreeningPage.tsx:1
83:9",variant:"outline",className:"gap-1",children:[d.jsx(mi,{"code-path":"src/pages/ScreeningPage.t
sx:184:11",className:"h-3 w-3 animate-spin"}),"Checking..."]});default:return null}}function k5(){co
nst{status:n,models:s,selectedModel:r,setSelectedModel:o,checkConnection:c}=D5(),[f,p]=v.useState("
"),[m,g]=v.useState([]),[h,y]=v.useState(!1),[b,w]=v.useState({domain:!0,whois:!0,dns:!0,ssl:!0,heade
rs:!0,social:!1,crypto:!1,geolocation:!1}),[E,T]=v.useState("standard"),[A,N]=v.useState("30"),C=v.u
seCallback((j,q)=>{const J={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,timestamp:new 
Date().toLocaleTimeString(),level:j,message:q};g(ee=>[...ee.slice(-99),J])},[]),O=v.useCallback(asyn
c()=>{if(!f.trim()){C("warning","Please enter a target URL or
domain");return}y(!0),C("info",`Starting quick screen for: ${f}`),setTimeout(()=>{C("success",`DNS
records resolved for ${f}`)},800),setTimeout(()=>{C("info","WHOIS lookup
completed")},1200),setTimeout(()=>{C("success","SSL certificate valid — expires in 89
days")},1600),setTimeout(()=>{C("info","HTTP headers collected (12 headers)"),C("success","Quick
screen completed"),y(!1)},2e3)},[f,C]),D=v.useCallback(()=>{if(!f.trim()){C("warning","Please enter
a target URL or domain");return}C("info",`Initiating deep investigation for:
${f}`),C("warning","Deep investigation is a simulated action in this
version")},[f,C]),B=v.useCallback(()=>{if(n!=="online"){C("error","Ollama is not connected. Cannot
run AI analysis.");return}if(!r){C("error","No model selected. Please select an Ollama
model.");return}if(!f.trim()){C("warning","Please enter a target URL or
domain");return}C("info",`Starting AI analysis using ${r}...`),C("success","AI analysis simulation c
ompleted")},[n,r,f,C]),Y=j=>{switch(j){case"success":return"text-green-600";case"warning":return"tex
t-amber-600";case"error":return"text-red-600";default:return"text-muted-foreground"}},Z=j=>{switch(j
){case"success":return d.jsx(Ow,{"code-path":"src/pages/ScreeningPage.tsx:297:16",className:"h-3 w-3
text-green-500 shrink-0"});case"warning":return
d.jsx(hi,{"code-path":"src/pages/ScreeningPage.tsx:299:16",className:"h-3 w-3 text-amber-500
shrink-0"});case"error":return
d.jsx(zw,{"code-path":"src/pages/ScreeningPage.tsx:301:16",className:"h-3 w-3 text-red-500
shrink-0"});default:return d.jsx($g,{"code-path":"src/pages/ScreeningPage.tsx:303:16",className:"h-3
w-3 text-blue-400 shrink-0"})}};return d.jsx(O0,{"code-path":"src/pages/ScreeningPage.tsx:308:5",chi
ldren:d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:309:7",className:"space-y-6",children:[
d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:311:9",className:"flex flex-col gap-4
sm:flex-row sm:items-center sm:justify-between",children:[d.jsxs("div",{"code-path":"src/pages/Scree
ningPage.tsx:312:11",children:[d.jsxs("h1",{"code-path":"src/pages/ScreeningPage.tsx:313:13",classNa
me:"text-2xl font-bold tracking-tight flex items-center
gap-2",children:[d.jsx(Za,{"code-path":"src/pages/ScreeningPage.tsx:314:15",className:"h-6
w-6"}),"OSINT Screening"]}),d.jsx("p",{"code-path":"src/pages/ScreeningPage.tsx:317:13",className:"t
ext-muted-foreground",children:"Target screening with Ollama AI
integration"})]}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:321:11",className:"flex
items-center gap-3",children:[d.jsx(z5,{"code-path":"src/pages/ScreeningPage.tsx:322:13",status:n}),
d.jsxs(He,{"code-path":"src/pages/ScreeningPage.tsx:323:13",variant:"outline",size:"sm",onClick:c,di
sabled:n==="checking",className:"gap-1.5",children:[d.jsx(Fg,{"code-path":"src/pages/ScreeningPage.t
sx:330:15",className:`h-3.5 w-3.5 ${n==="checking"?"animate-spin":""}`}),"Test Connection"]})]})]}),
n==="cors-blocked"&&d.jsx(Ve,{"code-path":"src/pages/ScreeningPage.tsx:339:11",className:"p-4
border-amber-200 bg-amber-50/50",children:d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:340
:13",className:"flex items-start
gap-3",children:[d.jsx(hi,{"code-path":"src/pages/ScreeningPage.tsx:341:15",className:"h-5 w-5
text-amber-600 shrink-0 mt-0.5"}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:342:15",cla
ssName:"flex-1",children:[d.jsx("h3",{"code-path":"src/pages/ScreeningPage.tsx:343:17",className:"fo
nt-semibold text-amber-800 text-sm",children:"Ollama unreachable
(CORS)"}),d.jsx("p",{"code-path":"src/pages/ScreeningPage.tsx:346:17",className:"text-sm
text-amber-700 mt-1",children:"Your browser blocked the connection to Ollama due to CORS policy.
This happens when the page is served over HTTPS and tries to connect to
localhost."}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:351:17",className:"mt-2 flex
items-center gap-2",children:[d.jsxs(T5,{"code-path":"src/pages/ScreeningPage.tsx:352:19",children:[
d.jsx(R5,{"code-path":"src/pages/ScreeningPage.tsx:353:21",asChild:!0,children:d.jsxs(He,{"code-path
":"src/pages/ScreeningPage.tsx:354:23",variant:"outline",size:"sm",className:"border-amber-300
text-amber-800 hover:bg-amber-100",children:[d.jsx($g,{"code-path":"src/pages/ScreeningPage.tsx:359:
25",className:"h-3.5 w-3.5 mr-1"}),"How to fix"]})}),d.jsx(M5,{"code-path":"src/pages/ScreeningPage.
tsx:363:21",side:"bottom",className:"max-w-sm",children:d.jsxs("div",{"code-path":"src/pages/Screeni
ngPage.tsx:364:23",className:"space-y-2 text-xs",children:[d.jsx("p",{"code-path":"src/pages/Screeni
ingPage.tsx:365:25",className:"font-semibold",children:"To resolve CORS
issues:"}),d.jsxs("ol",{"code-path":"src/pages/ScreeningPage.tsx:366:25",className:"list-decimal
pl-4
space-y-1",children:[d.jsxs("li",{"code-path":"src/pages/ScreeningPage.tsx:367:27",children:["Start
Ollama with:"," ",d.jsx("code",{"code-path":"src/pages/ScreeningPage.tsx:370:29",className:"bg-muted
px-1 rounded",children:"OLLAMA_ORIGINS='*' ollama
serve"})]}),d.jsx("li",{"code-path":"src/pages/ScreeningPage.tsx:374:27",children:"If using a
browser extension, try Incognito
mode."}),d.jsx("li",{"code-path":"src/pages/ScreeningPage.tsx:377:27",children:"Use a reverse proxy
(e.g., nginx) with proper CORS
headers."}),d.jsx("li",{"code-path":"src/pages/ScreeningPage.tsx:381:27",children:"Run this app
locally over HTTP instead of HTTPS."})]})]})})]}),d.jsxs(He,{"code-path":"src/pages/ScreeningPage.ts
x:388:19",variant:"outline",size:"sm",onClick:c,className:"border-amber-300 text-amber-800 hover:bg-
amber-100",children:[d.jsx(Fg,{"code-path":"src/pages/ScreeningPage.tsx:394:21",className:"h-3.5
w-3.5 mr-1"}),"Retry"]})]})]})]})}),n==="offline"&&d.jsx(Ve,{"code-path":"src/pages/ScreeningPage.ts
x:404:11",className:"p-4 border-red-200 bg-red-50/50",children:d.jsxs("div",{"code-path":"src/pages/
ScreeningPage.tsx:405:13",className:"flex items-start
gap-3",children:[d.jsx(wx,{"code-path":"src/pages/ScreeningPage.tsx:406:15",className:"h-5 w-5
text-red-600 shrink-0 mt-0.5"}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:407:15",child
ren:[d.jsx("h3",{"code-path":"src/pages/ScreeningPage.tsx:408:17",className:"font-semibold
text-red-800 text-sm",children:"Ollama is
offline"}),d.jsx("p",{"code-path":"src/pages/ScreeningPage.tsx:411:17",className:"text-sm
text-red-700 mt-1",children:"Ollama does not appear to be running on
localhost:11434."}),d.jsxs("p",{"code-path":"src/pages/ScreeningPage.tsx:414:17",className:"text-xs
text-red-600 mt-1",children:["Install from"," ",d.jsx("a",{"code-path":"src/pages/ScreeningPage.tsx:
416:19",href:"https://ollama.com",target:"_blank",rel:"noopener
noreferrer",className:"underline",children:"ollama.com"})," ","and start it with:"
,d.jsx("code",{"code-path":"src/pages/ScreeningPage.tsx:426:19",className:"bg-muted px-1
rounded",children:"ollama
serve"})]})]})]})}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:433:9",className:"grid
grid-cols-1 lg:grid-cols-3 gap-6",children:[d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:4
35:11",className:"lg:col-span-2
space-y-4",children:[d.jsxs(Ve,{"code-path":"src/pages/ScreeningPage.tsx:437:13",className:"p-4
space-y-4",children:[d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:438:15",className:"grid
grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:4
39:17",className:"space-y-2",children:[d.jsxs(Ql,{"code-path":"src/pages/ScreeningPage.tsx:440:19",h
tmlFor:"target",className:"flex items-center
gap-1.5",children:[d.jsx(Rn,{"code-path":"src/pages/ScreeningPage.tsx:441:21",className:"h-3.5
w-3.5"}),"Target URL / Domain"]}),d.jsx(Qa,{"code-path":"src/pages/ScreeningPage.tsx:444:19",id:"tar
get",placeholder:"example.com or https://example.com",value:f,onChange:j=>p(j.target.value),onKeyDow
n:j=>{j.key==="Enter"&&O()}})]}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:454:17",clas
sName:"space-y-2",children:[d.jsxs(Ql,{"code-path":"src/pages/ScreeningPage.tsx:455:19",className:"f
lex items-center
gap-1.5",children:[d.jsx(dr,{"code-path":"src/pages/ScreeningPage.tsx:456:21",className:"h-3.5
w-3.5"}),"AI Model"]}),d.jsxs(fr,{"code-path":"src/pages/ScreeningPage.tsx:459:19",value:r,onValueCh
ange:o,disabled:n!=="online"||s.length===0,children:[d.jsx(hr,{"code-path":"src/pages/ScreeningPage.
tsx:464:21",children:d.jsx(pr,{"code-path":"src/pages/ScreeningPage.tsx:465:23",placeholder:n==="onl
ine"?s.length===0?"No models found":"Select model...":n==="cors-blocked"?"Ollama unreachable
(CORS)":"Ollama offline"})}),s.length>0&&d.jsx(mr,{"code-path":"src/pages/ScreeningPage.tsx:478:23",
children:s.map(j=>d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:480:27",value:j.name,children:j
.name},j.name))})]})]})]}),d.jsx(pv,{"code-path":"src/pages/ScreeningPage.tsx:490:15"}),d.jsxs("div"
,{"code-path":"src/pages/ScreeningPage.tsx:493:15",className:"flex flex-wrap gap-3",children:[d.jsxs
(He,{"code-path":"src/pages/ScreeningPage.tsx:494:17",onClick:O,disabled:h||!f.trim(),className:"gap
-1.5",children:[h?d.jsx(mi,{"code-path":"src/pages/ScreeningPage.tsx:500:21",className:"h-4 w-4
animate-spin"}):d.jsx(GA,{"code-path":"src/pages/ScreeningPage.tsx:502:21",className:"h-4
w-4"}),"Quick Screen"]}),d.jsxs(He,{"code-path":"src/pages/ScreeningPage.tsx:506:17",variant:"second
ary",onClick:D,disabled:!f.trim(),className:"gap-1.5",children:[d.jsx(Wl,{"code-path":"src/pages/Scr
eeningPage.tsx:512:19",className:"h-4 w-4"}),"Deep Investigation"]}),d.jsxs(He,{"code-path":"src/pag
es/ScreeningPage.tsx:515:17",variant:"outline",onClick:B,disabled:n!=="online"||!f.trim(),className:
"gap-1.5",children:[d.jsx(dr,{"code-path":"src/pages/ScreeningPage.tsx:521:19",className:"h-4
w-4"}),"AI Analysis"]})]})]}),d.jsxs(Ve,{"code-path":"src/pages/ScreeningPage.tsx:528:13",className:
"p-4",children:[d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:529:15",className:"flex
items-center justify-between
mb-3",children:[d.jsxs("h2",{"code-path":"src/pages/ScreeningPage.tsx:530:17",className:"text-sm
font-semibold flex items-center
gap-1.5",children:[d.jsx(pi,{"code-path":"src/pages/ScreeningPage.tsx:531:19",className:"h-4
w-4"}),"Activity Log"]}),d.jsx(He,{"code-path":"src/pages/ScreeningPage.tsx:534:17",variant:"ghost",
size:"sm",onClick:()=>g([]),disabled:m.length===0,children:"Clear"})]}),d.jsx("div",{"code-path":"sr
c/pages/ScreeningPage.tsx:543:15",className:"bg-muted rounded-md p-3 h-64 overflow-y-auto
space-y-1.5 font-mono text-xs",children:m.length===0?d.jsx("p",{"code-path":"src/pages/ScreeningPage
.tsx:545:19",className:"text-muted-foreground text-center py-8",children:"No activity yet. Run a
screening to see
logs."}):m.map(j=>d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:550:21",className:"flex
items-start gap-2",children:[Z(j.level),d.jsx("span",{"code-path":"src/pages/ScreeningPage.tsx:552:2
3",className:"text-muted-foreground shrink-0",children:j.timestamp}),d.jsx("span",{"code-path":"src/
pages/ScreeningPage.tsx:555:23",className:Y(j.level),children:j.message})]},j.id))})]})]}),d.jsxs("d
iv",{"code-path":"src/pages/ScreeningPage.tsx:566:11",className:"space-y-4",children:[d.jsxs(Ve,{"co
de-path":"src/pages/ScreeningPage.tsx:567:13",className:"p-4",children:[d.jsxs("h2",{"code-path":"sr
c/pages/ScreeningPage.tsx:568:15",className:"text-sm font-semibold flex items-center gap-1.5
mb-4",children:[d.jsx(Sx,{"code-path":"src/pages/ScreeningPage.tsx:569:17",className:"h-4 w-4"}),"Co
nfiguration"]}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:573:15",className:"space-y-4"
,children:[d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:575:17",className:"space-y-2",chil
dren:[d.jsx(Ql,{"code-path":"src/pages/ScreeningPage.tsx:576:19",className:"text-xs uppercase
tracking-wider text-muted-foreground",children:"Data Collectors"}),d.jsx("div",{"code-path":"src/pag
es/ScreeningPage.tsx:579:19",className:"space-y-2",children:[["domain","Domain
Intelligence"],["whois","WHOIS Lookup"],["dns","DNS Records"],["ssl","SSL
Certificate"],["headers","HTTP Headers"],["social","Social Media"],["crypto","Cryptocurrency"],["geo
location","Geolocation"]].map(([j,q])=>d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:592:23
",className:"flex items-center justify-between",children:[d.jsx(Ql,{"code-path":"src/pages/Screening
Page.tsx:596:25",htmlFor:`collector-${j}`,className:"text-sm cursor-pointer",children:q}),d.jsx(U3,{
"code-path":"src/pages/ScreeningPage.tsx:602:25",id:`collector-${j}`,checked:b[j],onCheckedChange:J=
>w(ee=>({...ee,[j]:J}))})]},j))})]}),d.jsx(pv,{"code-path":"src/pages/ScreeningPage.tsx:617:17"}),d.
jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:620:17",className:"space-y-2",children:[d.jsxs(
Ql,{"code-path":"src/pages/ScreeningPage.tsx:621:19",className:"text-xs uppercase tracking-wider
text-muted-foreground flex items-center
gap-1",children:[d.jsx(Ia,{"code-path":"src/pages/ScreeningPage.tsx:622:21",className:"h-3
w-3"}),"Investigation Depth"]}),d.jsxs(fr,{"code-path":"src/pages/ScreeningPage.tsx:625:19",value:E,
onValueChange:T,children:[d.jsx(hr,{"code-path":"src/pages/ScreeningPage.tsx:626:21",children:d.jsx(
pr,{"code-path":"src/pages/ScreeningPage.tsx:627:23"})}),d.jsxs(mr,{"code-path":"src/pages/Screening
Page.tsx:629:21",children:[d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:630:23",value:"surface
",children:"Surface (fast)"}),d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:631:23",value:"stan
dard",children:"Standard"}),d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:632:23",value:"deep",
children:"Deep (thorough)"})]})]})]}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:638:17"
,className:"space-y-2",children:[d.jsxs(Ql,{"code-path":"src/pages/ScreeningPage.tsx:639:19",classNa
me:"text-xs uppercase tracking-wider text-muted-foreground flex items-center
gap-1",children:[d.jsx(gx,{"code-path":"src/pages/ScreeningPage.tsx:640:21",className:"h-3
w-3"}),"Timeout (seconds)"]}),d.jsxs(fr,{"code-path":"src/pages/ScreeningPage.tsx:643:19",value:A,on
ValueChange:N,children:[d.jsx(hr,{"code-path":"src/pages/ScreeningPage.tsx:644:21",children:d.jsx(pr
,{"code-path":"src/pages/ScreeningPage.tsx:645:23"})}),d.jsxs(mr,{"code-path":"src/pages/ScreeningPa
e.tsx:647:21",children:[d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:648:23",value:"10",child
ren:"10s"}),d.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:649:23",value:"30",children:"30s"}),d
.jsx(xa,{"code-path":"src/pages/ScreeningPage.tsx:650:23",value:"60",children:"60s"}),d.jsx(xa,{"cod
e-path":"src/pages/ScreeningPage.tsx:651:23",value:"120",children:"120s"})]})]})]})]})]}),n==="onlin
e"&&s.length>0&&d.jsxs(Ve,{"code-path":"src/pages/ScreeningPage.tsx:660:15",className:"p-4",children
:[d.jsxs("h2",{"code-path":"src/pages/ScreeningPage.tsx:661:17",className:"text-sm font-semibold
flex items-center gap-1.5
mb-2",children:[d.jsx(dr,{"code-path":"src/pages/ScreeningPage.tsx:662:19",className:"h-4
w-4"}),"Available Models"]}),d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx:665:17",classNam
e:"space-y-1.5",children:[s.slice(0,5).map(j=>d.jsxs("div",{"code-path":"src/pages/ScreeningPage.tsx
:667:21",className:"flex items-center justify-between text-xs",children:[d.jsx("span",{"code-path":"
src/pages/ScreeningPage.tsx:671:23",className:"truncate",children:j.name}),j.size&&d.jsxs("span",{"c
e-path":"src/pages/ScreeningPage.tsx:673:25",className:"text-muted-foreground shrink-0
ml-2",children:[(j.size/1e9).toFixed(1)," GB"]})]},j.name)),s.length>5&&d.jsxs("p",{"code-path":"src
/pages/ScreeningPage.tsx:680:21",className:"text-xs text-muted-foreground text-center
pt-1",children:["+",s.length-5," more"]})]})]})]})]})]})})}function Tr({className:n,...s}){return d.
jsx("div",{"code-path":"src/components/ui/table.tsx:7:5","data-slot":"table-container",className:"re
lative w-full overflow-x-auto",children:d.jsx("table",{"code-path":"src/components/ui/table.tsx:11:7
","data-slot":"table",className:Ae("w-full caption-bottom text-sm",n),...s})})}function
Rr({className:n,...s}){return d.jsx("thead",{"code-path":"src/components/ui/table.tsx:22:5","data-sl
ot":"table-header",className:Ae("[&_tr]:border-b",n),...s})}function Mr({className:n,...s}){return d
.jsx("tbody",{"code-path":"src/components/ui/table.tsx:32:5","data-slot":"table-body",className:Ae("
[&_tr:last-child]:border-0",n),...s})}function ot({className:n,...s}){return d.jsx("tr",{"code-path"
:"src/components/ui/table.tsx:55:5","data-slot":"table-row",className:Ae("hover:bg-muted/50
data-[state=selected]:bg-muted border-b transition-colors",n),...s})}function
Ke({className:n,...s}){return d.jsx("th",{"code-path":"src/components/ui/table.tsx:68:5","data-slot"
:"table-head",className:Ae("text-foreground h-10 px-2 text-left align-middle font-medium
whitespace-nowrap [&:has([role=checkbox])]:pr-0
[>&[role=checkbox]]:translate-y-[2px]",n),...s})}function Oe({className:n,...s}){return d.jsx("td",{
"code-path":"src/components/ui/table.tsx:81:5","data-slot":"table-cell",className:Ae("p-2
align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0
[&>[role=checkbox]]:translate-y-[2px]",n),...s})}function L5(){const{t:n}=Ja(),[s,r]=v.useState("")
,{data:o,isLoading:c}=_t.investigation.list.useQuery({}),f=(o||[]).filter(g=>!s||g.title?.toLowerCase
().includes(s.toLowerCase())),p=g=>g==="active"?"bg-emerald-500/20
text-emerald-400":g==="pending"?"bg-amber-500/20 text-amber-400":"bg-white/10
text-muted-foreground",m=g=>g==="critical"?"bg-red-500/20 text-red-400":g==="high"?"bg-amber-500/20
text-amber-400":g==="medium"?"bg-cyan-500/20 text-cyan-400":"bg-emerald-500/20
text-emerald-400";return
d.jsxs("div",{"code-path":"src/pages/Investigations.tsx:32:5",className:"p-6
space-y-6",children:[d.jsxs("div",{"code-path":"src/pages/Investigations.tsx:33:7",className:"flex
items-center justify-between",children:[d.jsxs("div",{"code-path":"src/pages/Investigations.tsx:34:9
",children:[d.jsx("h1",{"code-path":"src/pages/Investigations.tsx:35:11",className:"text-2xl font-bo
ld",children:n("nav.investigations")}),d.jsx("p",{"code-path":"src/pages/Investigations.tsx:36:11",c
lassName:"text-muted-foreground mt-1 text-sm",children:"Manage intelligence investigations"})]}),d.j
sxs(He,{"code-path":"src/pages/Investigations.tsx:38:9",size:"sm",children:[d.jsx(of,{"code-path":"s
rc/pages/Investigations.tsx:38:27",className:"h-4 w-4 mr-2"}),"New
Investigation"]})]}),d.jsx("div",{"code-path":"src/pages/Investigations.tsx:41:7",className:"flex
items-center
gap-4",children:d.jsxs("div",{"code-path":"src/pages/Investigations.tsx:42:9",className:"relative
flex-1
max-w-md",children:[d.jsx(Wl,{"code-path":"src/pages/Investigations.tsx:43:11",className:"absolute
left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),d.jsx(Qa,{"code-path":"src/pages/In
vestigations.tsx:44:11",placeholder:"Search
investigations...",value:s,onChange:g=>r(g.target.value),className:"pl-9 bg-[#111118] border-white/[
0.06]"})]})}),d.jsx(Ve,{"code-path":"src/pages/Investigations.tsx:48:7",className:"glass-panel",chil
dren:d.jsx(Fe,{"code-path":"src/pages/Investigations.tsx:49:9",className:"p-0",children:d.jsxs(Tr,{
"code-path":"src/pages/Investigations.tsx:50:11",children:[d.jsx(Rr,{"code-path":"src/pages/Investiga
tions.tsx:51:13",children:d.jsxs(ot,{"code-path":"src/pages/Investigations.tsx:52:15",children:[d.js
x(Ke,{"code-path":"src/pages/Investigations.tsx:53:17",children:"Title"}),d.jsx(Ke,{"code-path":"src
/pages/Investigations.tsx:54:17",children:"Status"}),d.jsx(Ke,{"code-path":"src/pages/Investigations
.tsx:55:17",children:"Priority"}),d.jsx(Ke,{"code-path":"src/pages/Investigations.tsx:56:17",childre
n:"Type"}),d.jsx(Ke,{"code-path":"src/pages/Investigations.tsx:57:17",children:"Created"}),d.jsx(Ke,
{"code-path":"src/pages/Investigations.tsx:58:17",className:"text-right",children:"Actions"})]})}),d
.jsx(Mr,{"code-path":"src/pages/Investigations.tsx:61:13",children:c?Array.from({length:5}).map((g,h
)=>d.jsx(ot,{"code-path":"src/pages/Investigations.tsx:64:19",children:d.jsx(Oe,{"code-path":"src/pa
ges/Investigations.tsx:64:37",colSpan:6,children:d.jsx(aa,{"code-path":"src/pages/Investigations.tsx
:64:60",className:"h-4"})})},h)):f.length===0?d.jsx(ot,{"code-path":"src/pages/Investigations.tsx:67
:17",children:d.jsxs(Oe,{"code-path":"src/pages/Investigations.tsx:68:19",colSpan:6,className:"text-
center py-16 text-muted-foreground",children:[d.jsx(xx,{"code-path":"src/pages/Investigations.tsx:69
:21",className:"h-10 w-10 mx-auto mb-3
opacity-50"}),d.jsx("p",{"code-path":"src/pages/Investigations.tsx:70:21",children:"No
investigations yet"}),d.jsx("p",{"code-path":"src/pages/Investigations.tsx:71:21",className:"text-xs
mt-1",children:"Create your first investigation to get started"})]})}):f.map(g=>d.jsxs(ot,{"code-pat
h":"src/pages/Investigations.tsx:76:19",className:"hover:bg-white/[0.02]",children:[d.jsx(Oe,{"code-
path":"src/pages/Investigations.tsx:77:21",className:"font-medium",children:g.title}),d.jsx(Oe,{"cod
e-path":"src/pages/Investigations.tsx:78:21",children:d.jsx(yt,{"code-path":"src/pages/Investigation
s.tsx:78:32",className:`text-[10px] ${p(g.status)}`,children:g.status})}),d.jsx(Oe,{"code-path":"src
/pages/Investigations.tsx:79:21",children:d.jsx(yt,{"code-path":"src/pages/Investigations.tsx:79:32"
,className:`text-[10px] ${m(g.priority)}`,children:g.priority})}),d.jsx(Oe,{"code-path":"src/pages/I
nvestigations.tsx:80:21",className:"text-muted-foreground text-sm",children:g.type||"-"}),d.jsx(Oe,{
"code-path":"src/pages/Investigations.tsx:81:21",className:"text-muted-foreground
text-sm",children:g.createdAt?new Date(g.createdAt).toLocaleDateString():"-"}),d.jsx(Oe,{"code-path"
:"src/pages/Investigations.tsx:82:21",className:"text-right",children:d.jsxs("div",{"code-path":"src
/pages/Investigations.tsx:83:23",className:"flex items-center justify-end gap-1",children:[d.jsx(He,
{"code-path":"src/pages/Investigations.tsx:84:25",variant:"ghost",size:"icon",className:"h-8
w-8",children:d.jsx(rf,{"code-path":"src/pages/Investigations.tsx:84:81",className:"h-4 w-4"})}),d.j
sx(He,{"code-path":"src/pages/Investigations.tsx:85:25",variant:"ghost",size:"icon",className:"h-8
w-8",children:d.jsx(hA,{"code-path":"src/pages/Investigations.tsx:85:81",className:"h-4 w-4"})}),d.j
sx(He,{"code-path":"src/pages/Investigations.tsx:86:25",variant:"ghost",size:"icon",className:"h-8
w-8 text-red-400 hover:text-red-300",children:d.jsx(Ar,{"code-path":"src/pages/Investigations.tsx:86
:113",className:"h-4 w-4"})})]})})]},g.id))})]})})})]})}function H5(){const{t:n}=Ja(),{data:s,isLoad
ing:r}=_t.report.list.useQuery({}),[o]=v.useState(""),c=(s||[]).filter(p=>!o||p.title?.toLowerCase()
.includes(o.toLowerCase())),f=p=>p==="final"?"bg-emerald-500/20
text-emerald-400":p==="draft"?"bg-amber-500/20 text-amber-400":"bg-white/10
text-muted-foreground";return d.jsxs("div",{"code-path":"src/pages/Reports.tsx:23:5",className:"p-6
space-y-6",children:[d.jsxs("div",{"code-path":"src/pages/Reports.tsx:24:7",className:"flex
items-center justify-between",children:[d.jsxs("div",{"code-path":"src/pages/Reports.tsx:25:9",child
ren:[d.jsx("h1",{"code-path":"src/pages/Reports.tsx:26:11",className:"text-2xl font-bold",children:n
("nav.reports")}),d.jsx("p",{"code-path":"src/pages/Reports.tsx:27:11",className:"text-muted-foregro
und mt-1 text-sm",children:"Generate and manage intelligence reports"})]}),d.jsxs(He,{"code-path":"s
rc/pages/Reports.tsx:29:9",size:"sm",children:[d.jsx(of,{"code-path":"src/pages/Reports.tsx:29:27",c
lassName:"h-4 w-4 mr-2"}),"Generate Report"]})]}),d.jsx(Ve,{"code-path":"src/pages/Reports.tsx:32:7"
,className:"glass-panel",children:d.jsx(Fe,{"code-path":"src/pages/Reports.tsx:33:9",className:"p-0"
,children:d.jsxs(Tr,{"code-path":"src/pages/Reports.tsx:34:11",children:[d.jsx(Rr,{"code-path":"src/
pages/Reports.tsx:35:13",children:d.jsxs(ot,{"code-path":"src/pages/Reports.tsx:36:15",children:[d.j
sx(Ke,{"code-path":"src/pages/Reports.tsx:37:17",children:"Title"}),d.jsx(Ke,{"code-path":"src/pages
/Reports.tsx:38:17",children:"Type"}),d.jsx(Ke,{"code-path":"src/pages/Reports.tsx:39:17",children:"
