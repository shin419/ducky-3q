import{j as xr,r as ie,o as Yt,w as oe,a as P,g as Ve,y as Ar,i as mn,z as Pr,d as Qt,A as Mr,B as ds,C as Or,k as Pe,D as Dr,E as Fr,h as F,F as tt,T as Lr,G as qr,H as Vr,c as On,I as mi,e as Be,l as Wr,b as Ur,J as yt,K as Dn,L as Br,_ as Hr,M as Gr,N as Fn,O as $t,P as f,Q as zr,R as Kr,S as Yr,U as fs,V as Qr,W as $r,X as Qe,Y as Se,Z as Pt,$ as J,a0 as jr,a1 as Xr,a2 as Zr,a3 as Jr,a4 as Ct,a5 as Ln,a6 as eo,a7 as to,a8 as vi,a9 as no,aa as io,ab as so,ac as ro,ad as yi,ae as _s,af as oo,ag as lo,ah as ao,ai as uo,aj as co,s as ho,t as rn,u as fo,ak as re,al as Ci,x as xe,am as _o,an as po,ao as pe}from "./index-D1fHy5B6.js";import{Q as Ei,a as go,b as nt}from "./QBtn-B1SCsYla.js";import{h as lt}from "./dom-HvQkNHR_.js";import{_ as mo}from "./_plugin-vue_export-helper-DlAUqK2U.js";let on,bt=0;const ee=new Array(256);for(let t=0; t<256; t++)ee[t]=(t+256).toString(16).substring(1);const vo=(()=>{const t=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let i=e; i>0; i--)n.push(Math.floor(Math.random()*256));return n}})(),wi=4096;function vn(){(on===void 0||bt+16>wi)&&(bt=0,on=vo(wi));const t=Array.prototype.slice.call(on,bt,bt+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,ee[t[0]]+ee[t[1]]+ee[t[2]]+ee[t[3]]+"-"+ee[t[4]]+ee[t[5]]+"-"+ee[t[6]]+ee[t[7]]+"-"+ee[t[8]]+ee[t[9]]+"-"+ee[t[10]]+ee[t[11]]+ee[t[12]]+ee[t[13]]+ee[t[14]]+ee[t[15]]}function yo(t){return t??null}function Ii(t, e){return t??(e===!0?`f_${vn()}`:null)}function Co({getValue:t,required:e=!0}={}){if(xr.value===!0){const n=t!==void 0?ie(yo(t())):ie(null);return e===!0&&n.value===null&&Yt(()=>{n.value=`f_${vn()}`}),t!==void 0&&oe(t, i=>{n.value=Ii(i,e)}),n}return t!==void 0?P(()=>Ii(t(),e)):ie(`f_${vn()}`)}const Ti=/^on[A-Z]/;function Eo(){const{attrs:t,vnode:e}=Ve(),n={listeners:ie({}),attributes:ie({})};function i(){const s={},r={};for(const o in t)o!=="class"&&o!=="style"&&Ti.test(o)===!1&&(s[o]=t[o]);for(const o in e.props)Ti.test(o)===!0&&(r[o]=e.props[o]);n.attributes.value=s,n.listeners.value=r}return Ar(i),i(),n}const wo={dark:{type:Boolean,default:null}};function Io(t, e){return P(()=>t.dark===null?e.dark.isActive:t.dark)}function To({validate:t,resetValidation:e,requiresQForm:n}){const i=mn(Pr,!1);if(i!==!1){const{props:s,proxy:r}=Ve();Object.assign(r,{validate:t,resetValidation:e}),oe(()=>s.disable, o=>{o===!0?(typeof e=="function"&&e(),i.unbindComponent(r)):i.bindComponent(r)}),Yt(()=>{s.disable!==!0&&i.bindComponent(r)}),Qt(()=>{s.disable!==!0&&i.unbindComponent(r)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const Si=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,bi=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ki=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,kt=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Rt=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ln={date: t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time: t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime: t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime: t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email: t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor: t=>Si.test(t),hexaColor: t=>bi.test(t),hexOrHexaColor: t=>ki.test(t),rgbColor: t=>kt.test(t),rgbaColor: t=>Rt.test(t),rgbOrRgbaColor: t=>kt.test(t)||Rt.test(t),hexOrRgbColor: t=>Si.test(t)||kt.test(t),hexaOrRgbaColor: t=>bi.test(t)||Rt.test(t),anyColor: t=>ki.test(t)||kt.test(t)||Rt.test(t)},So=[!0,!1,"ondemand"],bo={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator: t=>So.includes(t)}};function ko(t, e){const{props:n,proxy:i}=Ve(),s=ie(!1),r=ie(null),o=ie(!1);To({validate:I,resetValidation:y});let l=0,a;const u=P(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),h=P(()=>n.disable!==!0&&u.value===!0&&e.value===!1),c=P(()=>n.error===!0||s.value===!0),d=P(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:r.value);oe(()=>n.modelValue,()=>{o.value=!0,h.value===!0&&n.lazyRules===!1&&A()});function p(){n.lazyRules!=="ondemand"&&h.value===!0&&o.value===!0&&A()}oe(()=>n.reactiveRules, Q=>{Q===!0?a===void 0&&(a=oe(()=>n.rules,p,{immediate:!0,deep:!0})):a!==void 0&&(a(),a=void 0)},{immediate:!0}),oe(()=>n.lazyRules,p),oe(t, Q=>{Q===!0?o.value=!0:h.value===!0&&n.lazyRules!=="ondemand"&&A()});function y(){l++,e.value=!1,o.value=!1,s.value=!1,r.value=null,A.cancel()}function I(Q=n.modelValue){if(n.disable===!0||u.value===!1)return!0;const W=++l,fe=e.value!==!0?()=>{o.value=!0}:()=>{},le=(U, q)=>{U===!0&&fe(),s.value=U,r.value=q||null,e.value=!1},de=[];for(let U=0; U<n.rules.length; U++){const q=n.rules[U];let j;if(typeof q=="function"?j=q(Q,ln):typeof q=="string"&&ln[q]!==void 0&&(j=ln[q](Q)),j===!1||typeof j=="string")return le(!0,j),!1;j!==!0&&j!==void 0&&de.push(j)}return de.length===0?(le(!1),!0):(e.value=!0,Promise.all(de).then(U=>{if(U===void 0||Array.isArray(U)===!1||U.length===0)return W===l&&le(!1),!0;const q=U.find(j=>j===!1||typeof j=="string");return W===l&&le(q!==void 0,q),q===void 0}, U=>(W===l&&(console.error(U),le(!0)),!1)))}const A=Mr(I,0);return Qt(()=>{a?.(),A.cancel()}),Object.assign(i,{resetValidation:y,validate:I}),ds(i,"hasError",()=>c.value),{isDirtyModel:o,hasRules:u,hasError:c,errorMessage:d,validate:I,resetValidation:y}}let yn=[],Ro=[];function ps(t){Ro.length===0?t():yn.push(t)}function No(t){yn=yn.filter(e=>e!==t)}function Cn(t){return t!=null&&(""+t).length!==0}const xo={...wo,...bo,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ao={...xo,maxlength:[Number,String]},Po=["update:modelValue","clear","focus","blur"];function Mo({requiredForAttr:t=!0,tagProp:e,changeEvent:n=!1}={}){const{props:i,proxy:s}=Ve(),r=Io(i,s.$q),o=Co({required:t,getValue:()=>i.for});return{requiredForAttr:t,changeEvent:n,tag:e===!0?P(()=>i.tag):{value:"label"},isDark:r,editable:P(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:ie(!1),focused:ie(!1),hasPopupOpen:!1,splitAttrs:Eo(),targetUid:o,rootRef:ie(null),targetRef:ie(null),controlRef:ie(null)}}function Oo(t){const{props:e,emit:n,slots:i,attrs:s,proxy:r}=Ve(),{$q:o}=r;let l=null;t.hasValue===void 0&&(t.hasValue=P(()=>Cn(e.modelValue))),t.emitValue===void 0&&(t.emitValue= C=>{n("update:modelValue",C)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:m,onFocusout:g}),Object.assign(t,{clearValue:E,onControlFocusin:m,onControlFocusout:g,focus:q}),t.computedCounter===void 0&&(t.computedCounter=P(()=>{if(e.counter!==!1){const C=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,x=e.maxlength!==void 0?e.maxlength:e.maxValues;return C+(x!==void 0?" / "+x:"")}}));const{isDirtyModel:a,hasRules:u,hasError:h,errorMessage:c,resetValidation:d}=ko(t.focused,t.innerLoading),p=t.floatingLabel!==void 0?P(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):P(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),y=P(()=>e.bottomSlots===!0||e.hint!==void 0||u.value===!0||e.counter===!0||e.error!==null),I=P(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),A=P(()=>`q-field row no-wrap items-start q-field--${I.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(p.value===!0?" q-field--float":"")+(W.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(h.value===!0?" q-field--error":"")+(h.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&y.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),Q=P(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(h.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length!==0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),W=P(()=>e.labelSlot===!0||e.label!==void 0),fe=P(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&h.value!==!0?` text-${e.labelColor}`:"")),le=P(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:p.value,modelValue:e.modelValue,emitValue:t.emitValue})),de=P(()=>{const C={};return t.targetUid.value&&(C.for=t.targetUid.value),e.disable===!0&&(C["aria-disabled"]="true"),C});function U(){const C=document.activeElement;let x=t.targetRef?.value;x&&(C===null||C.id!==t.targetUid.value)&&(x.hasAttribute("tabindex")===!0||(x=x.querySelector("[tabindex]")),x!==C&&x?.focus({preventScroll:!0}))}function q(){ps(U)}function j(){No(U);const C=document.activeElement;C!==null&&t.rootRef.value.contains(C)&&C.blur()}function m(C){l!==null&&(clearTimeout(l),l=null),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",C))}function g(C, x){l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,!(document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1))&&(t.focused.value===!0&&(t.focused.value=!1,n("blur",C)),x?.())})}function E(C){Or(C),o.platform.is.mobile!==!0?(t.targetRef?.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),t.changeEvent===!0&&n("change",null),n("clear",e.modelValue),Pe(()=>{const x=a.value;d(),a.value=x})}function v(C){[13,32].includes(C.keyCode)&&E(C)}function N(){const C=[];return i.prepend!==void 0&&C.push(F("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:tt},i.prepend())),C.push(F("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},k())),h.value===!0&&e.noErrorIcon===!1&&C.push(R("error",[F(Ei,{name:o.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?C.push(R("inner-loading-append",i.loading!==void 0?i.loading():[F(go,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&C.push(R("inner-clearable-append",[F(Ei,{class:"q-field__focusable-action",name:e.clearIcon||o.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":o.lang.label.clear,onKeyup:v,onClick:E})])),i.append!==void 0&&C.push(F("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:tt},i.append())),t.getInnerAppend!==void 0&&C.push(R("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&C.push(t.getControlChild()),C}function k(){const C=[];return e.prefix!==void 0&&e.prefix!==null&&C.push(F("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&C.push(t.getShadowControl()),t.getControl!==void 0?C.push(t.getControl()):i.rawControl!==void 0?C.push(i.rawControl()):i.control!==void 0&&C.push(F("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},i.control(le.value))),W.value===!0&&C.push(F("div",{class:fe.value},lt(i.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&C.push(F("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),C.concat(lt(i.default))}function H(){let C,x;h.value===!0?c.value!==null?(C=[F("div",{role:"alert"},c.value)],x=`q--slot-error-${c.value}`):(C=lt(i.error),x="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(C=[F("div",e.hint)],x=`q--slot-hint-${e.hint}`):(C=lt(i.hint),x="q--slot-hint"));const D=e.counter===!0||i.counter!==void 0;if(e.hideBottomSpace===!0&&D===!1&&C===void 0)return;const G=F("div",{key:x,class:"q-field__messages col"},C);return F("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:tt},[e.hideBottomSpace===!0?G:F(Lr,{name:"q-transition--field-message"},()=>G),D===!0?F("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():t.computedCounter.value):null])}function R(C, x){return x===null?null:F("div",{key:C,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},x)}let O=!1;return Dr(()=>{O=!0}),Fr(()=>{O===!0&&e.autofocus===!0&&r.focus()}),e.autofocus===!0&&Yt(()=>{r.focus()}),Qt(()=>{l!==null&&clearTimeout(l)}),Object.assign(r,{focus:q,blur:j}),function(){const x=t.getControl===void 0&&i.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...de.value}:de.value;return F(t.tag.value,{ref:t.rootRef,class:[A.value,s.class],style:s.style,...x},[i.before!==void 0?F("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:tt},i.before()):null,F("div",{class:"q-field__inner relative-position col self-stretch"},[F("div",{ref:t.controlRef,class:Q.value,tabindex:-1,...t.controlEvents},N()),y.value===!0?H():null]),i.after!==void 0?F("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:tt},i.after()):null])}}const Ri={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Mt={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform: t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform: t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform: t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform: t=>t.toLocaleLowerCase()}},gs=Object.keys(Mt);gs.forEach(t=>{Mt[t].regex=new RegExp(Mt[t].pattern)});const Do=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+gs.join("")+"])|(.)","g"),Ni=/[.*+?^${}()|[\]\\]/g,Y="",Fo={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Lo(t, e, n, i){let s,r,o,l,a,u;const h=ie(null),c=ie(p());function d(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}oe(()=>t.type+t.autogrow,I),oe(()=>t.mask, m=>{if(m!==void 0)A(c.value,!0);else{const g=q(c.value);I(),t.modelValue!==g&&e("update:modelValue",g)}}),oe(()=>t.fillMask+t.reverseFillMask,()=>{h.value===!0&&A(c.value,!0)}),oe(()=>t.unmaskedValue,()=>{h.value===!0&&A(c.value)});function p(){if(I(),h.value===!0){const m=de(q(t.modelValue));return t.fillMask!==!1?j(m):m}return t.modelValue}function y(m){if(m<s.length)return s.slice(-m);let g="",E=s;const v=E.indexOf(Y);if(v!==-1){for(let N=m-E.length; N>0; N--)g+=Y;E=E.slice(0,v)+g+E.slice(v)}return E}function I(){if(h.value=t.mask!==void 0&&t.mask.length!==0&&d(),h.value===!1){l=void 0,s="",r="";return}const m=Ri[t.mask]===void 0?t.mask:Ri[t.mask],g=typeof t.fillMask=="string"&&t.fillMask.length!==0?t.fillMask.slice(0,1):"_",E=g.replace(Ni,"\\$&"),v=[],N=[],k=[];let H=t.reverseFillMask===!0,R="",O="";m.replace(Do,(G, _, z, Ce, _e)=>{if(Ce!==void 0){const se=Mt[Ce];k.push(se),O=se.negate,H===!0&&(N.push("(?:"+O+"+)?("+se.pattern+"+)?(?:"+O+"+)?("+se.pattern+"+)?"),H=!1),N.push("(?:"+O+"+)?("+se.pattern+")?")}else if(z!==void 0)R="\\"+(z==="\\"?"":z),k.push(z),v.push("([^"+R+"]+)?"+R+"?");else{const se=_!==void 0?_:_e;R=se==="\\"?"\\\\\\\\":se.replace(Ni,"\\\\$&"),k.push(se),v.push("([^"+R+"]+)?"+R+"?")}});const C=new RegExp("^"+v.join("")+"("+(R===""?".":"[^"+R+"]")+"+)?"+(R===""?"":"["+R+"]*")+"$"),x=N.length-1,D=N.map((G, _)=>_===0&&t.reverseFillMask===!0?new RegExp("^"+E+"*"+G):_===x?new RegExp("^"+G+"("+(O===""?".":O)+"+)?"+(t.reverseFillMask===!0?"$":E+"*")):new RegExp("^"+G));o=k,l= G=>{const _=C.exec(t.reverseFillMask===!0?G:G.slice(0,k.length+1));_!==null&&(G=_.slice(1).join(""));const z=[],Ce=D.length;for(let _e=0,se=G; _e<Ce; _e++){const Ue=D[_e].exec(se);if(Ue===null)break;se=se.slice(Ue.shift().length),z.push(...Ue)}return z.length!==0?z.join(""):G},s=k.map(G=>typeof G=="string"?G:Y).join(""),r=s.split(Y).join(g)}function A(m, g, E){const v=i.value,N=v.selectionEnd,k=v.value.length-N,H=q(m);g===!0&&I();const R=de(H),O=t.fillMask!==!1?j(R):R,C=c.value!==O;v.value!==O&&(v.value=O),C===!0&&(c.value=O),document.activeElement===v&&Pe(()=>{if(O===r){const D=t.reverseFillMask===!0?r.length:0;v.setSelectionRange(D,D,"forward");return}if(E==="insertFromPaste"&&t.reverseFillMask!==!0){const D=v.selectionEnd;let G=N-1;for(let _=a; _<=G&&_<D; _++)s[_]!==Y&&G++;W.right(v,G);return}if(["deleteContentBackward","deleteContentForward"].indexOf(E)!==-1){const D=t.reverseFillMask===!0?N===0?O.length>R.length?1:0:Math.max(0,O.length-(O===r?0:Math.min(R.length,k)+1))+1:N;v.setSelectionRange(D,D,"forward");return}if(t.reverseFillMask===!0)if(C===!0){const D=Math.max(0,O.length-(O===r?0:Math.min(R.length,k+1)));D===1&&N===1?v.setSelectionRange(D,D,"forward"):W.rightReverse(v,D)}else{const D=O.length-k;v.setSelectionRange(D,D,"backward")}else if(C===!0){const D=Math.max(0,s.indexOf(Y),Math.min(R.length,N)-1);W.right(v,D)}else{const D=N-1;W.right(v,D)}});const x=t.unmaskedValue===!0?q(O):O;String(t.modelValue)!==x&&(t.modelValue!==null||x!=="")&&n(x,!0)}function Q(m, g, E){const v=de(q(m.value));g=Math.max(0,s.indexOf(Y),Math.min(v.length,g)),a=g,m.setSelectionRange(g,E,"forward")}const W={left(m, g){const E=s.slice(g-1).indexOf(Y)===-1;let v=Math.max(0,g-1);for(; v>=0; v--)if(s[v]===Y){g=v,E===!0&&g++;break}if(v<0&&s[g]!==void 0&&s[g]!==Y)return W.right(m,0);g>=0&&m.setSelectionRange(g,g,"backward")},right(m, g){const E=m.value.length;let v=Math.min(E,g+1);for(; v<=E; v++)if(s[v]===Y){g=v;break}else s[v-1]===Y&&(g=v);if(v>E&&s[g-1]!==void 0&&s[g-1]!==Y)return W.left(m,E);m.setSelectionRange(g,g,"forward")},leftReverse(m, g){const E=y(m.value.length);let v=Math.max(0,g-1);for(; v>=0; v--)if(E[v-1]===Y){g=v;break}else if(E[v]===Y&&(g=v,v===0))break;if(v<0&&E[g]!==void 0&&E[g]!==Y)return W.rightReverse(m,0);g>=0&&m.setSelectionRange(g,g,"backward")},rightReverse(m, g){const E=m.value.length,v=y(E),N=v.slice(0,g+1).indexOf(Y)===-1;let k=Math.min(E,g+1);for(; k<=E; k++)if(v[k-1]===Y){g=k,g>0&&N===!0&&g--;break}if(k>E&&v[g-1]!==void 0&&v[g-1]!==Y)return W.leftReverse(m,E);m.setSelectionRange(g,g,"forward")}};function fe(m){e("click",m),u=void 0}function le(m){if(e("keydown",m),qr(m)===!0||m.altKey===!0)return;const g=i.value,E=g.selectionStart,v=g.selectionEnd;if(m.shiftKey||(u=void 0),m.keyCode===37||m.keyCode===39){m.shiftKey&&u===void 0&&(u=g.selectionDirection==="forward"?E:v);const N=W[(m.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];if(m.preventDefault(),N(g,u===E?v:E),m.shiftKey){const k=g.selectionStart;g.setSelectionRange(Math.min(u,k),Math.max(u,k),"forward")}}else m.keyCode===8&&t.reverseFillMask!==!0&&E===v?(W.left(g,E),g.setSelectionRange(g.selectionStart,v,"backward")):m.keyCode===46&&t.reverseFillMask===!0&&E===v&&(W.rightReverse(g,v),g.setSelectionRange(E,g.selectionEnd,"forward"))}function de(m){if(m==null||m==="")return"";if(t.reverseFillMask===!0)return U(m);const g=o;let E=0,v="";for(let N=0; N<g.length; N++){const k=m[E],H=g[N];if(typeof H=="string")v+=H,k===H&&E++;else if(k!==void 0&&H.regex.test(k))v+=H.transform!==void 0?H.transform(k):k,E++;else return v}return v}function U(m){const g=o,E=s.indexOf(Y);let v=m.length-1,N="";for(let k=g.length-1; k>=0&&v!==-1; k--){const H=g[k];let R=m[v];if(typeof H=="string")N=H+N,R===H&&v--;else if(R!==void 0&&H.regex.test(R))do N=(H.transform!==void 0?H.transform(R):R)+N,v--,R=m[v];while(E===k&&R!==void 0&&H.regex.test(R));else return N}return N}function q(m){return typeof m!="string"||l===void 0?typeof m=="number"?l(""+m):m:l(m)}function j(m){return r.length-m.length<=0?m:t.reverseFillMask===!0&&m.length!==0?r.slice(0,-m.length)+m:m+r.slice(m.length)}return{innerValue:c,hasMask:h,moveCursorForPaste:Q,updateMaskValue:A,onMaskedKeydown:le,onMaskedClick:fe}}const qo={name:String};function Vo(t){return P(()=>t.name||t.for)}function Wo(t, e){function n(){const i=t.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(r=>{s.items.add(r)}),{files:s.files}}catch{return{files:void 0}}}return P(()=>{if(t.type==="file")return n()})}const Uo=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Bo=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ho=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Go=/[a-z0-9_ -]$/i;function zo(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(Vr.is.firefox===!0?Go.test(n.data)===!1:Uo.test(n.data)===!0||Bo.test(n.data)===!0||Ho.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}const Ko=On({name:"QInput",inheritAttrs:!1,props:{...Ao,...Fo,...qo,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Po,"paste","change","keydown","click","animationend"],setup(t, {emit:e,attrs:n}){const{proxy:i}=Ve(),{$q:s}=i,r={};let o=NaN,l,a,u=null,h;const c=ie(null),d=Vo(t),{innerValue:p,hasMask:y,moveCursorForPaste:I,updateMaskValue:A,onMaskedKeydown:Q,onMaskedClick:W}=Lo(t,e,R,c),fe=Wo(t),le=P(()=>Cn(p.value)),de=zo(k),U=Mo({changeEvent:!0}),q=P(()=>t.type==="textarea"||t.autogrow===!0),j=P(()=>q.value===!0||["text","search","url","tel","password"].includes(t.type)),m=P(()=>{const _={...U.splitAttrs.listeners.value,onInput:k,onPaste:N,onChange:C,onBlur:x,onFocus:mi};return _.onCompositionstart=_.onCompositionupdate=_.onCompositionend=de,y.value===!0&&(_.onKeydown=Q,_.onClick=W),t.autogrow===!0&&(_.onAnimationend=H),_}),g=P(()=>{const _={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:d.value,...U.splitAttrs.attributes.value,id:U.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return q.value===!1&&(_.type=t.type),t.autogrow===!0&&(_.rows=1),_});oe(()=>t.type,()=>{c.value&&(c.value.value=t.modelValue)}),oe(()=>t.modelValue, _=>{if(y.value===!0){if(a===!0&&(a=!1,String(_)===o))return;A(_)}else p.value!==_&&(p.value=_,t.type==="number"&&r.hasOwnProperty("value")===!0&&(l===!0?l=!1:delete r.value));t.autogrow===!0&&Pe(O)}),oe(()=>t.autogrow, _=>{_===!0?Pe(O):c.value!==null&&n.rows>0&&(c.value.style.height="auto")}),oe(()=>t.dense,()=>{t.autogrow===!0&&Pe(O)});function E(){ps(()=>{const _=document.activeElement;c.value!==null&&c.value!==_&&(_===null||_.id!==U.targetUid.value)&&c.value.focus({preventScroll:!0})})}function v(){c.value?.select()}function N(_){if(y.value===!0&&t.reverseFillMask!==!0){const z=_.target;I(z,z.selectionStart,z.selectionEnd)}e("paste",_)}function k(_){if(!_||!_.target)return;if(t.type==="file"){e("update:modelValue",_.target.files);return}const z=_.target.value;if(_.target.qComposing===!0){r.value=z;return}if(y.value===!0)A(z,!1,_.inputType);else if(R(z),j.value===!0&&_.target===document.activeElement){const{selectionStart:Ce,selectionEnd:_e}=_.target;Ce!==void 0&&_e!==void 0&&Pe(()=>{_.target===document.activeElement&&z.indexOf(_.target.value)===0&&_.target.setSelectionRange(Ce,_e)})}t.autogrow===!0&&O()}function H(_){e("animationend",_),O()}function R(_, z){h=()=>{u=null,t.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,t.modelValue!==_&&o!==_&&(o=_,z===!0&&(a=!0),e("update:modelValue",_),Pe(()=>{o===_&&(o=NaN)})),h=void 0},t.type==="number"&&(l=!0,r.value=_),t.debounce!==void 0?(u!==null&&clearTimeout(u),r.value=_,u=setTimeout(h,t.debounce)):h()}function O(){requestAnimationFrame(()=>{const _=c.value;if(_!==null){const z=_.parentNode.style,{scrollTop:Ce}=_,{overflowY:_e,maxHeight:se}=s.platform.is.firefox===!0?{}:window.getComputedStyle(_),Ue=_e!==void 0&&_e!=="scroll";Ue===!0&&(_.style.overflowY="hidden"),z.marginBottom=_.scrollHeight-1+"px",_.style.height="1px",_.style.height=_.scrollHeight+"px",Ue===!0&&(_.style.overflowY=parseInt(se,10)<_.scrollHeight?"auto":"hidden"),z.marginBottom="",_.scrollTop=Ce}})}function C(_){de(_),u!==null&&(clearTimeout(u),u=null),h?.(),e("change",_.target.value)}function x(_){_!==void 0&&mi(_),u!==null&&(clearTimeout(u),u=null),h?.(),l=!1,a=!1,delete r.value,t.type!=="file"&&setTimeout(()=>{c.value!==null&&(c.value.value=p.value!==void 0?p.value:"")})}function D(){return r.hasOwnProperty("value")===!0?r.value:p.value!==void 0?p.value:""}Qt(()=>{x()}),Yt(()=>{t.autogrow===!0&&O()}),Object.assign(U,{innerValue:p,fieldClass:P(()=>`q-${q.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:P(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length!==0),inputRef:c,emitValue:R,hasValue:le,floatingLabel:P(()=>le.value===!0&&(t.type!=="number"||isNaN(p.value)===!1)||Cn(t.displayValue)),getControl:()=>F(q.value===!0?"textarea":"input",{ref:c,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...g.value,...m.value,...t.type!=="file"?{value:D()}:fe.value}),getShadowControl:()=>F("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[F("span",{class:"invisible"},D()),F("span",t.shadowText)])});const G=Oo(U);return Object.assign(i,{focus:E,select:v,getNativeElement:()=>c.value}),ds(i,"nativeEl",()=>c.value),G}}),Yo=On({name:"QSpace",setup(){const t=F("div",{class:"q-space"});return()=>t}}),Qo=On({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t, {slots:e}){const{proxy:{$q:n}}=Ve(),i=mn(Wr,Be);if(i===Be)return console.error("QPage needs to be a deep child of QLayout"),Be;if(mn(Ur,Be)===Be)return console.error("QPage needs to be child of QPageContainer"),Be;const r=P(()=>{const l=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof t.styleFn=="function"){const a=i.isContainer.value===!0?i.containerHeight.value:n.screen.height;return t.styleFn(l,a)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-l+"px":n.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":n.screen.height-l+"px"}}),o=P(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>F("main",{class:o.value,style:r.value},lt(e.default))}});var xi={};const Ai="@firebase/database",Pi="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="";function $o(t){ms=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),J(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ln(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jo(e)}}catch{}return new Xo},Me=vs("localStorage"),Zo=vs("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new zr("@firebase/database"),Jo=function(){let t=1;return function(){return t++}}(),ys=function(t){const e=Xr(t),n=new Zr;n.update(e);const i=n.digest();return Jr.encodeByteArray(i)},Et=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Et.apply(null,i):typeof i=="object"?e+=J(i):e+=i,e+=" "}return e};let at=null,Mi=!0;const el=function(t,e){f(!0,"Can't turn on custom loggers persistently."),ze.logLevel=jr.VERBOSE,at=ze.log.bind(ze)},ne=function(...t){if(Mi===!0&&(Mi=!1,at===null&&Zo.get("logging_enabled")===!0&&el()),at){const e=Et.apply(null,t);at(e)}},wt=function(t){return function(...e){ne(t,...e)}},En=function(...t){const e="FIREBASE INTERNAL ERROR: "+Et(...t);ze.error(e)},Ie=function(...t){const e=`FIREBASE FATAL ERROR: ${Et(...t)}`;throw ze.error(e),new Error(e)},ce=function(...t){const e="FIREBASE WARNING: "+Et(...t);ze.warn(e)},tl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nl=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$e="[MIN_NAME]",De="[MAX_NAME]",Ze=function(t,e){if(t===e)return 0;if(t===$e||e===De)return-1;if(e===$e||t===De)return 1;{const n=Oi(t),i=Oi(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},il=function(t,e){return t===e?0:t<e?-1:1},it=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+J(e))},qn=function(t){if(typeof t!="object"||t===null)return J(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=J(e[i]),n+=":",n+=qn(t[e[i]]);return n+="}",n},Es=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function he(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ws=function(t){f(!Cs(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const h=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},sl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ol(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const ll=new RegExp("^-?(0*)\\d{1,10}$"),al=-2147483648,ul=2147483647,Oi=function(t){if(ll.test(t)){const e=Number(t);if(e>=al&&e<=ul)return e}return null},Je=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ce("Exception was thrown by user callback.",n),e},Math.floor(0))}},cl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ut=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,no(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="5",Is="v",Ts="s",Ss="r",bs="f",ks=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rs="ls",Ns="p",wn="ac",xs="websocket",As="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Me.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Me.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function fl(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ms(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===xs)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===As)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);fl(t)&&(n.ns=t.namespace);const s=[];return he(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.counters_={}}incrementCounter(e,n=1){Se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lo(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={},un={};function Wn(t){const e=t.toString();return an[e]||(an[e]=new _l),an[e]}function pl(t,e){const n=t.toString();return un[n]||(un[n]=e()),un[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Je(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="start",ml="close",vl="pLPCommand",yl="pRTLPCB",Os="id",Ds="pw",Fs="ser",Cl="cb",El="seg",wl="ts",Il="d",Tl="dframe",Ls=1870,qs=30,Sl=Ls-qs,bl=25e3,kl=3e4;class Ge{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wt(e),this.stats_=Wn(n),this.urlFn=a=>(this.appCheckToken&&(a[wn]=this.appCheckToken),Ms(n,As,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kl)),nl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Un((...r)=>{const[o,l,a,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Di)this.id=l,this.password=a;else if(o===ml)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Di]="t",i[Fs]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Cl]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Is]=Vn,this.transportSessionId&&(i[Ts]=this.transportSessionId),this.lastSessionId&&(i[Rs]=this.lastSessionId),this.applicationId&&(i[Ns]=this.applicationId),this.appCheckToken&&(i[wn]=this.appCheckToken),typeof location<"u"&&location.hostname&&ks.test(location.hostname)&&(i[Ss]=bs);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ge.forceAllow_=!0}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){return Ge.forceAllow_?!0:!Ge.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sl()&&!rl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=J(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ao(n),s=Es(i,Sl);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Tl]="t",i[Os]=e,i[Ds]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=J(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Un{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jo(),window[vl+this.uniqueCallbackIdentifier]=e,window[yl+this.uniqueCallbackIdentifier]=n,this.myIFrame=Un.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ne("frame writing exception"),l.stack&&ne(l.stack),ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ne("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Os]=this.myID,e[Ds]=this.myPW,e[Fs]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qs+i.length<=Ls;){const o=this.pendingSegs.shift();i=i+"&"+El+s+"="+o.seg+"&"+wl+s+"="+o.ts+"&"+Il+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(bl)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=16384,Nl=45e3;let Ot=null;typeof MozWebSocket<"u"?Ot=MozWebSocket:typeof WebSocket<"u"&&(Ot=WebSocket);class ge{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wt(this.connId),this.stats_=Wn(n),this.connURL=ge.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Is]=Vn,typeof location<"u"&&location.hostname&&ks.test(location.hostname)&&(o[Ss]=bs),n&&(o[Ts]=n),i&&(o[Rs]=i),s&&(o[wn]=s),r&&(o[Ns]=r),Ms(e,xs,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Me.set("previous_websocket_failure",!0);try{let i;uo(),this.mySock=new Ot(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ot!==null&&!ge.forceDisallow_}static previouslyFailed(){return Me.isInMemoryStorage||Me.get("previous_websocket_failure")===!0}markConnectionHealthy(){Me.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Ln(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=J(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Es(n,Rl);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nl))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static get ALL_TRANSPORTS(){return[Ge,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=ge&&ge.isAvailable();let i=n&&!ge.previouslyFailed();if(e.webSocketOnly&&(n||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ge];else{const s=this.transports_=[];for(const r of ft.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ft.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=6e4,Al=5e3,Pl=10*1024,Ml=100*1024,cn="t",Fi="d",Ol="s",Li="r",Dl="e",qi="o",Vi="a",Wi="n",Ui="p",Fl="h";class Ll{constructor(e,n,i,s,r,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wt("c:"+this.id+":"),this.transportManager_=new ft(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ut(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ml?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cn in e){const n=e[cn];n===Vi?this.upgradeIfSecondaryHealthy_():n===Li?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=it("t",e),i=it("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ui,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=it("t",e),i=it("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=it(cn,e);if(Fi in e){const i=e[Fi];if(n===Fl){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Wi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ol?this.onConnectionShutdown_(i):n===Li?this.onReset_(i):n===Dl?En("Server Error: "+i):n===qi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):En("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vn!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ut(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ut(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Al))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ui,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Me.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Ws{static getInstance(){return new Dt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_s()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=32,Hi=768;class L{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function M(){return new L("")}function T(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ke(t){return t.pieces_.length-t.pieceNum_}function V(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new L(t.pieces_,e)}function Us(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ql(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hs(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new L(e,0)}function $(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof L)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new L(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function ae(t,e){const n=T(t),i=T(e);if(n===null)return e;if(n===i)return ae(V(t),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bn(t,e){if(ke(t)!==ke(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function me(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ke(t)>ke(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Vl{constructor(e,n){this.errorPrefix_=n,this.parts_=Bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$t(this.parts_[i]);Gs(this)}}function Wl(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$t(e),Gs(t)}function Ul(t){const e=t.parts_.pop();t.byteLength_-=$t(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gs(t){if(t.byteLength_>Hi)throw new Error(t.errorPrefix_+"has a key path longer than "+Hi+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bi)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bi+") or object contains a cycle "+Ae(t))}function Ae(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ws{static getInstance(){return new Hn}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=1e3,Bl=60*5*1e3,Gi=30*1e3,Hl=1.3,Gl=3e4,zl="server_kill",zi=3;class we extends Vs{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=we.nextPersistentConnectionId_++,this.log_=wt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=st,this.maxReconnectDelay_=Bl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(J(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Dn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,u=l.s;we.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Se(e,"w")){const i=Qe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||so(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ro(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+J(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):En("Unrecognized action received from server: "+J(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gl&&(this.reconnectDelay_=st),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+we.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},u=function(c){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ne("getToken() completed but was canceled"):(ne("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new Ll(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zl)},r))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ce(c),a())}}}interrupt(e){ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yi(this.interruptReasons_)&&(this.reconnectDelay_=st,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>qn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new L(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zi&&(this.reconnectDelay_=Gi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ms.replace(/\./g,"-")]=1,_s()?e["framework.cordova"]=1:oo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dt.getInstance().currentlyOnline();return yi(this.interruptReasons_)&&e}}we.nextPersistentConnectionId_=0;we.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new S(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new S($e,e),s=new S($e,n);return this.compare(i,s)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt;class zs extends jt{static get __EMPTY_NODE(){return Nt}static set __EMPTY_NODE(e){Nt=e}compare(e,n){return Ze(e.name,n.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return S.MIN}maxPost(){return new S(De,Nt)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Nt)}toString(){return".key"}}const Ke=new zs;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Z{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Z.RED,this.left=s??ue.EMPTY_NODE,this.right=r??ue.EMPTY_NODE}copy(e,n,i,s,r){return new Z(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Z.RED=!0;Z.BLACK=!1;class Kl{copy(e,n,i,s,r){return this}insert(e,n,i){return new Z(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ue{constructor(e,n=ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Z.BLACK,null,null))}remove(e){return new ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Z.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xt(this.root_,null,this.comparator_,!0,e)}}ue.EMPTY_NODE=new Kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){return Ze(t.name,e.name)}function Gn(t,e){return Ze(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In;function Ql(t){In=t}const Ks=function(t){return typeof t=="number"?"number:"+ws(t):"string:"+t},Ys=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Se(e,".sv"),"Priority must be a string or number.")}else f(t===In||t.isEmpty(),"priority of unexpected type.");f(t===In||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki;class X{static set __childrenNodeConstructor(e){Ki=e}static get __childrenNodeConstructor(){return Ki}constructor(e,n=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ys(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:T(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=T(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ks(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ws(this.value_):e+=this.value_,this.lazyHash_=ys(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=X.VALUE_TYPE_ORDER.indexOf(n),r=X.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs,$s;function $l(t){Qs=t}function jl(t){$s=t}class Xl extends jt{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ze(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return S.MIN}maxPost(){return new S(De,new X("[PRIORITY-POST]",$s))}makePost(e,n){const i=Qs(e);return new S(n,new X("[PRIORITY-POST]",i))}toString(){return".priority"}}const K=new Xl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=Math.log(2);class Jl{constructor(e){const n=r=>parseInt(Math.log(r)/Zl,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ft=function(t,e,n,i){t.sort(e);const s=function(a,u){const h=u-a;let c,d;if(h===0)return null;if(h===1)return c=t[a],d=n?n(c):c,new Z(d,c.node,Z.BLACK,null,null);{const p=parseInt(h/2,10)+a,y=s(a,p),I=s(p+1,u);return c=t[p],d=n?n(c):c,new Z(d,c.node,Z.BLACK,y,I)}},r=function(a){let u=null,h=null,c=t.length;const d=function(y,I){const A=c-y,Q=c;c-=y;const W=s(A+1,Q),fe=t[A],le=n?n(fe):fe;p(new Z(le,fe.node,I,null,W))},p=function(y){u?(u.left=y,u=y):(h=y,u=y)};for(let y=0;y<a.count;++y){const I=a.nextBitIsOne(),A=Math.pow(2,a.count-(y+1));I?d(A,Z.BLACK):(d(A,Z.BLACK),d(A,Z.RED))}return h},o=new Jl(t.length),l=r(o);return new ue(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const He={};class Ee{static get Default(){return f(He&&K,"ChildrenNode.ts has not been loaded"),hn=hn||new Ee({".priority":He},{".priority":K}),hn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Qe(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ue?n:null}hasIndex(e){return Se(this.indexSet_,e.toString())}addIndex(e,n){f(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(S.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=Ft(i,e.getCompare()):l=He;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new Ee(h,u)}addToIndexes(e,n){const i=Pt(this.indexes_,(s,r)=>{const o=Qe(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===He)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(S.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ft(l,o.getCompare())}else return He;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new S(e.name,l))),a.insert(e,e.node)}});return new Ee(i,this.indexSet_)}removeFromIndexes(e,n){const i=Pt(this.indexes_,s=>{if(s===He)return s;{const r=n.get(e.name);return r?s.remove(new S(e.name,r)):s}});return new Ee(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt;class w{static get EMPTY_NODE(){return rt||(rt=new w(new ue(Gn),null,Ee.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ys(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rt}updatePriority(e){return this.children_.isEmpty()?this:new w(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rt:n}}getChild(e){const n=T(e);return n===null?this:this.getImmediateChild(n).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new S(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?rt:this.priorityNode_;return new w(s,o,r)}}updateChild(e,n){const i=T(e);if(i===null)return n;{f(T(e)!==".priority"||ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(V(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(K,(o,l)=>{n[o]=l.val(e),i++,r&&w.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ks(this.getPriority().val())+":"),this.forEachChild(K,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ys(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new S(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===It?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new w(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(K),s=n.getIterator(K);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}w.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ea extends w{constructor(){super(new ue(Gn),w.EMPTY_NODE,Ee.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return w.EMPTY_NODE}isEmpty(){return!1}}const It=new ea;Object.defineProperties(S,{MIN:{value:new S($e,w.EMPTY_NODE)},MAX:{value:new S(De,It)}});zs.__EMPTY_NODE=w.EMPTY_NODE;X.__childrenNodeConstructor=w;Ql(It);jl(It);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=!0;function te(t,e=null){if(t===null)return w.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new X(n,te(e))}if(!(t instanceof Array)&&ta){const n=[];let i=!1;if(he(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=te(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new S(o,a)))}}),n.length===0)return w.EMPTY_NODE;const r=Ft(n,Yl,o=>o.name,Gn);if(i){const o=Ft(n,K.getCompare());return new w(r,te(e),new Ee({".priority":o},{".priority":K}))}else return new w(r,te(e),Ee.Default)}else{let n=w.EMPTY_NODE;return he(t,(i,s)=>{if(Se(t,i)&&i.substring(0,1)!=="."){const r=te(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(te(e))}}$l(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends jt{constructor(e){super(),this.indexPath_=e,f(!b(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ze(e.name,n.name):r}makePost(e,n){const i=te(e),s=w.EMPTY_NODE.updateChild(this.indexPath_,i);return new S(n,s)}maxPost(){const e=w.EMPTY_NODE.updateChild(this.indexPath_,It);return new S(De,e)}toString(){return Bs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends jt{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ze(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,n){const i=te(e);return new S(n,i)}toString(){return".value"}}const sa=new ia;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return{type:"value",snapshotNode:t}}function je(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _t(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ra(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(_t(n,l)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(je(n,i)):o.trackChildChange(pt(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(K,(s,r)=>{n.hasChild(s)||i.trackChildChange(_t(s,r))}),n.isLeafNode()||n.forEachChild(K,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(pt(s,r,o))}else i.trackChildChange(je(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?w.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.indexedFilter_=new zn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gt.getStartPost_(e),this.endPost_=gt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new S(n,i))||(i=w.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=w.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(w.EMPTY_NODE);const r=this;return n.forEachChild(K,(o,l)=>{r.matches(new S(o,l))||(s=s.updateImmediateChild(o,w.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new S(n,i))||(i=w.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=w.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=w.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(w.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,w.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,p)=>c(p,d)}else o=this.index_.getCompare();const l=e;f(l.numChildren()===this.limit_,"");const a=new S(n,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(h&&!i.isEmpty()&&p>=0)return r?.trackChildChange(pt(n,i,c)),l.updateImmediateChild(n,i);{r?.trackChildChange(_t(n,c));const I=l.updateImmediateChild(n,w.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(je(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return i.isEmpty()?e:h&&o(u,a)>=0?(r!=null&&(r.trackChildChange(_t(u.name,u.node)),r.trackChildChange(je(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(u.name,w.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$e}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:De}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new Kn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function la(t){return t.loadsAllData()?new zn(t.getIndex()):t.hasLimit()?new oa(t):new gt(t)}function Yi(t){const e={};if(t.isDefault())return e;let n;if(t.index_===K?n="$priority":t.index_===sa?n="$value":t.index_===Ke?n="$key":(f(t.index_ instanceof na,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=J(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=J(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+J(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=J(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+J(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qi(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==K&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Vs{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=wt("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Lt.getListenId_(e,i),l={};this.listens_[o]=l;const a=Yi(e._queryParams);this.restRequest_(r+".json",a,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(r,c,!1,i),Qe(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",s(d,null)}})}unlisten(e,n){const i=Lt.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Yi(e._queryParams),i=e._path.toString(),s=new Dn;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+io(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ln(l.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.rootNode_=w.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return{value:null,children:new Map}}function Xs(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=T(e);t.children.has(i)||t.children.set(i,qt());const s=t.children.get(i);e=V(e),Xs(s,e,n)}}function Tn(t,e,n){t.value!==null?n(e,t.value):ua(t,(i,s)=>{const r=new L(e.toString()+"/"+i);Tn(s,r,n)})}function ua(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&he(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=10*1e3,ha=30*1e3,da=5*60*1e3;class fa{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ca(e);const i=$i+(ha-$i)*Math.random();ut(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;he(e,(s,r)=>{r>0&&Se(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ut(this.reportStats_.bind(this),Math.floor(Math.random()*2*da))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ve||(ve={}));function Zs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ve.ACK_USER_WRITE,this.source=Zs()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new L(e));return new Vt(M(),n,this.revert)}}else return f(T(this.path)===e,"operationForChild called for unrelated child."),new Vt(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.source=e,this.path=n,this.type=ve.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new mt(this.source,M()):new mt(this.source,V(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ve.OVERWRITE}operationForChild(e){return b(this.path)?new Fe(this.source,M(),this.snap.getImmediateChild(e)):new Fe(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ve.MERGE}operationForChild(e){if(b(this.path)){const n=this.children.subtree(new L(e));return n.isEmpty()?null:n.value?new Fe(this.source,M(),n.value):new vt(this.source,M(),n)}else return f(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vt(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const n=T(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pa(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ra(o.childName,o.snapshotNode))}),ot(t,s,"child_removed",e,i,n),ot(t,s,"child_added",e,i,n),ot(t,s,"child_moved",r,i,n),ot(t,s,"child_changed",e,i,n),ot(t,s,"value",e,i,n),s}function ot(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>ma(t,l,a)),o.forEach(l=>{const a=ga(t,l,r);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function ga(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ma(t,e,n){if(e.childName==null||n.childName==null)throw Ct("Should only compare child_ events.");const i=new S(e.childName,e.snapshotNode),s=new S(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){return{eventCache:t,serverCache:e}}function ct(t,e,n,i){return Xt(new Le(e,n,i),t.serverCache)}function Js(t,e,n,i){return Xt(t.eventCache,new Le(e,n,i))}function Sn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const va=()=>(dn||(dn=new ue(il)),dn);class B{static fromObject(e){let n=new B(null);return he(e,(i,s)=>{n=n.set(new L(i),s)}),n}constructor(e,n=va()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:M(),value:this.value};if(b(e))return null;{const i=T(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(V(e),n);return r!=null?{path:$(new L(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const n=T(e),i=this.children.get(n);return i!==null?i.subtree(V(e)):new B(null)}}set(e,n){if(b(e))return new B(n,this.children);{const i=T(e),r=(this.children.get(i)||new B(null)).set(V(e),n),o=this.children.insert(i,r);return new B(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const n=T(e),i=this.children.get(n);if(i){const s=i.remove(V(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const n=T(e),i=this.children.get(n);return i?i.get(V(e)):null}}setTree(e,n){if(b(e))return n;{const i=T(e),r=(this.children.get(i)||new B(null)).setTree(V(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new B(this.value,o)}}fold(e){return this.fold_(M(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_($(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,M(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(b(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(V(e),$(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,M(),n)}foreachOnPath_(e,n,i){if(b(e))return this;{this.value&&i(n,this.value);const s=T(e),r=this.children.get(s);return r?r.foreachOnPath_(V(e),$(n,s),i):new B(null)}}foreach(e){this.foreach_(M(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_($(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.writeTree_=e}static empty(){return new ye(new B(null))}}function ht(t,e,n){if(b(e))return new ye(new B(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,n),new ye(t.writeTree_.set(s,r))}else{const s=new B(n),r=t.writeTree_.setTree(e,s);return new ye(r)}}}function ji(t,e,n){let i=t;return he(n,(s,r)=>{i=ht(i,$(e,s),r)}),i}function Xi(t,e){if(b(e))return ye.empty();{const n=t.writeTree_.setTree(e,new B(null));return new ye(n)}}function bn(t,e){return We(t,e)!=null}function We(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ae(n.path,e)):null}function Zi(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(K,(i,s)=>{e.push(new S(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new S(i,s.value))}),e}function be(t,e){if(b(e))return t;{const n=We(t,e);return n!=null?new ye(new B(n)):new ye(t.writeTree_.subtree(e))}}function kn(t){return t.writeTree_.isEmpty()}function Xe(t,e){return er(M(),t.writeTree_,e)}function er(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=er($(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild($(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){return sr(e,t)}function ya(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=ht(t.visibleWrites,e,n)),t.lastWriteId=i}function Ca(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Ea(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&wa(l,i.path)?s=!1:me(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Ia(t),!0;if(i.snap)t.visibleWrites=Xi(t.visibleWrites,i.path);else{const l=i.children;he(l,a=>{t.visibleWrites=Xi(t.visibleWrites,$(i.path,a))})}return!0}else return!1}function wa(t,e){if(t.snap)return me(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&me($(t.path,n),e))return!0;return!1}function Ia(t){t.visibleWrites=tr(t.allWrites,Ta,M()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ta(t){return t.visible}function tr(t,e,n){let i=ye.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)me(n,o)?(l=ae(n,o),i=ht(i,l,r.snap)):me(o,n)&&(l=ae(o,n),i=ht(i,M(),r.snap.getChild(l)));else if(r.children){if(me(n,o))l=ae(n,o),i=ji(i,l,r.children);else if(me(o,n))if(l=ae(o,n),b(l))i=ji(i,M(),r.children);else{const a=Qe(r.children,T(l));if(a){const u=a.getChild(V(l));i=ht(i,M(),u)}}}else throw Ct("WriteRecord should have .snap or .children")}}return i}function nr(t,e,n,i,s){if(!i&&!s){const r=We(t.visibleWrites,e);if(r!=null)return r;{const o=be(t.visibleWrites,e);if(kn(o))return n;if(n==null&&!bn(o,M()))return null;{const l=n||w.EMPTY_NODE;return Xe(o,l)}}}else{const r=be(t.visibleWrites,e);if(!s&&kn(r))return n;if(!s&&n==null&&!bn(r,M()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(me(u.path,e)||me(e,u.path))},l=tr(t.allWrites,o,e),a=n||w.EMPTY_NODE;return Xe(l,a)}}}function Sa(t,e,n){let i=w.EMPTY_NODE;const s=We(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(K,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=be(t.visibleWrites,e);return n.forEachChild(K,(o,l)=>{const a=Xe(be(r,new L(o)),l);i=i.updateImmediateChild(o,a)}),Zi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=be(t.visibleWrites,e);return Zi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ba(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=$(e,n);if(bn(t.visibleWrites,r))return null;{const o=be(t.visibleWrites,r);return kn(o)?s.getChild(n):Xe(o,s.getChild(n))}}function ka(t,e,n,i){const s=$(e,n),r=We(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=be(t.visibleWrites,s);return Xe(o,i.getNode().getImmediateChild(n))}else return null}function Ra(t,e){return We(t.visibleWrites,e)}function Na(t,e,n,i,s,r,o){let l;const a=be(t.visibleWrites,e),u=We(a,M());if(u!=null)l=u;else if(n!=null)l=Xe(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],c=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let p=d.getNext();for(;p&&h.length<s;)c(p,i)!==0&&h.push(p),p=d.getNext();return h}else return[]}function xa(){return{visibleWrites:ye.empty(),allWrites:[],lastWriteId:-1}}function Wt(t,e,n,i){return nr(t.writeTree,t.treePath,e,n,i)}function jn(t,e){return Sa(t.writeTree,t.treePath,e)}function Ji(t,e,n,i){return ba(t.writeTree,t.treePath,e,n,i)}function Ut(t,e){return Ra(t.writeTree,$(t.treePath,e))}function Aa(t,e,n,i,s,r){return Na(t.writeTree,t.treePath,e,n,i,s,r)}function Xn(t,e,n){return ka(t.writeTree,t.treePath,e,n)}function ir(t,e){return sr($(t.treePath,e),t.writeTree)}function sr(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,pt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,_t(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,je(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,pt(i,e.snapshotNode,s.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const rr=new Ma;class Zn{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Le(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xn(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),r=Aa(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t){return{filter:t}}function Da(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fa(t,e,n,i,s){const r=new Pa;let o,l;if(n.type===ve.OVERWRITE){const u=n;u.source.fromUser?o=Rn(t,e,u.path,u.snap,i,s,r):(f(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!b(u.path),o=Bt(t,e,u.path,u.snap,i,s,l,r))}else if(n.type===ve.MERGE){const u=n;u.source.fromUser?o=qa(t,e,u.path,u.children,i,s,r):(f(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Nn(t,e,u.path,u.children,i,s,l,r))}else if(n.type===ve.ACK_USER_WRITE){const u=n;u.revert?o=Ua(t,e,u.path,i,s,r):o=Va(t,e,u.path,u.affectedTree,i,s,r)}else if(n.type===ve.LISTEN_COMPLETE)o=Wa(t,e,n.path,i,r);else throw Ct("Unknown operation type: "+n.type);const a=r.getChanges();return La(e,o,a),{viewCache:o,changes:a}}function La(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Sn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(js(Sn(e)))}}function or(t,e,n,i,s,r){const o=e.eventCache;if(Ut(i,n)!=null)return e;{let l,a;if(b(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qe(e),h=u instanceof w?u:w.EMPTY_NODE,c=jn(i,h);l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const u=Wt(i,qe(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=T(n);if(u===".priority"){f(ke(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const c=Ji(i,n,h,a);c!=null?l=t.filter.updatePriority(h,c):l=o.getNode()}else{const h=V(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Ji(i,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=Xn(i,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,h,s,r):l=o.getNode()}}return ct(e,l,o.isFullyInitialized()||b(n),t.filter.filtersNodes())}}function Bt(t,e,n,i,s,r,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(b(n))u=h.updateFullNode(a.getNode(),i,null);else if(h.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,i);u=h.updateFullNode(a.getNode(),p,null)}else{const p=T(n);if(!a.isCompleteForPath(n)&&ke(n)>1)return e;const y=V(n),A=a.getNode().getImmediateChild(p).updateChild(y,i);p===".priority"?u=h.updatePriority(a.getNode(),A):u=h.updateChild(a.getNode(),p,A,y,rr,null)}const c=Js(e,u,a.isFullyInitialized()||b(n),h.filtersNodes()),d=new Zn(s,c,r);return or(t,c,n,s,d,l)}function Rn(t,e,n,i,s,r,o){const l=e.eventCache;let a,u;const h=new Zn(s,e,r);if(b(n))u=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=ct(e,u,!0,t.filter.filtersNodes());else{const c=T(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),i),a=ct(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=V(n),p=l.getNode().getImmediateChild(c);let y;if(b(d))y=i;else{const I=h.getCompleteChild(c);I!=null?Us(d)===".priority"&&I.getChild(Hs(d)).isEmpty()?y=I:y=I.updateChild(d,i):y=w.EMPTY_NODE}if(p.equals(y))a=e;else{const I=t.filter.updateChild(l.getNode(),c,y,d,h,o);a=ct(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function es(t,e){return t.eventCache.isCompleteForChild(e)}function qa(t,e,n,i,s,r,o){let l=e;return i.foreach((a,u)=>{const h=$(n,a);es(e,T(h))&&(l=Rn(t,l,h,u,s,r,o))}),i.foreach((a,u)=>{const h=$(n,a);es(e,T(h))||(l=Rn(t,l,h,u,s,r,o))}),l}function ts(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Nn(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;b(n)?u=i:u=new B(null).setTree(n,i);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),y=ts(t,p,d);a=Bt(t,a,new L(c),y,s,r,o,l)}}),u.children.inorderTraversal((c,d)=>{const p=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!p){const y=e.serverCache.getNode().getImmediateChild(c),I=ts(t,y,d);a=Bt(t,a,new L(c),I,s,r,o,l)}}),a}function Va(t,e,n,i,s,r,o){if(Ut(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(b(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Bt(t,e,n,a.getNode().getChild(n),s,r,l,o);if(b(n)){let u=new B(null);return a.getNode().forEachChild(Ke,(h,c)=>{u=u.set(new L(h),c)}),Nn(t,e,n,u,s,r,l,o)}else return e}else{let u=new B(null);return i.foreach((h,c)=>{const d=$(n,h);a.isCompleteForPath(d)&&(u=u.set(h,a.getNode().getChild(d)))}),Nn(t,e,n,u,s,r,l,o)}}function Wa(t,e,n,i,s){const r=e.serverCache,o=Js(e,r.getNode(),r.isFullyInitialized()||b(n),r.isFiltered());return or(t,o,n,i,rr,s)}function Ua(t,e,n,i,s,r){let o;if(Ut(i,n)!=null)return e;{const l=new Zn(i,e,s),a=e.eventCache.getNode();let u;if(b(n)||T(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Wt(i,qe(e));else{const c=e.serverCache.getNode();f(c instanceof w,"serverChildren would be complete if leaf node"),h=jn(i,c)}h=h,u=t.filter.updateFullNode(a,h,r)}else{const h=T(n);let c=Xn(i,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=a.getImmediateChild(h)),c!=null?u=t.filter.updateChild(a,h,c,V(n),l,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,w.EMPTY_NODE,V(n),l,r):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wt(i,qe(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Ut(i,M())!=null,ct(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new zn(i.getIndex()),r=la(i);this.processor_=Oa(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(w.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(w.EMPTY_NODE,l.getNode(),null),h=new Le(a,o.isFullyInitialized(),s.filtersNodes()),c=new Le(u,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Xt(c,h),this.eventGenerator_=new _a(this.query_)}get query(){return this.query_}}function Ha(t){return t.viewCache_.serverCache.getNode()}function Ga(t,e){const n=qe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(T(e)).isEmpty())?n.getChild(e):null}function ns(t){return t.eventRegistrations_.length===0}function za(t,e){t.eventRegistrations_.push(e)}function is(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function ss(t,e,n,i){e.type===ve.MERGE&&e.source.queryId!==null&&(f(qe(t.viewCache_),"We should always have a full cache before handling merges"),f(Sn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Fa(t.processor_,s,e,n,i);return Da(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,lr(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ka(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(K,(r,o)=>{i.push(je(r,o))}),n.isFullyInitialized()&&i.push(js(n.getNode())),lr(t,i,n.getNode(),e)}function lr(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return pa(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class Ya{constructor(){this.views=new Map}}function Qa(t){f(!Ht,"__referenceConstructor has already been defined"),Ht=t}function $a(){return f(Ht,"Reference.ts has not been loaded"),Ht}function ja(t){return t.views.size===0}function Jn(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),ss(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ss(o,e,n,i));return r}}function Xa(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Wt(n,s?i:null),a=!1;l?a=!0:i instanceof w?(l=jn(n,i),a=!1):(l=w.EMPTY_NODE,a=!1);const u=Xt(new Le(l,a,!1),new Le(i,s,!1));return new Ba(e,u)}return o}function Za(t,e,n,i,s,r){const o=Xa(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),za(o,n),Ka(o,n)}function Ja(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const l=Re(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(is(u,n,i)),ns(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||r.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(is(a,n,i)),ns(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Re(t)&&r.push(new($a())(e._repo,e._path)),{removed:r,events:o}}function ar(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ye(t,e){let n=null;for(const i of t.views.values())n=n||Ga(i,e);return n}function ur(t,e){if(e._queryParams.loadsAllData())return Zt(t);{const i=e._queryIdentifier;return t.views.get(i)}}function cr(t,e){return ur(t,e)!=null}function Re(t){return Zt(t)!=null}function Zt(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function eu(t){f(!Gt,"__referenceConstructor has already been defined"),Gt=t}function tu(){return f(Gt,"Reference.ts has not been loaded"),Gt}let nu=1;class rs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=xa(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hr(t,e,n,i,s){return ya(t.pendingWriteTree_,e,n,i,s),s?Tt(t,new Fe(Zs(),e,n)):[]}function Oe(t,e,n=!1){const i=Ca(t.pendingWriteTree_,e);if(Ea(t.pendingWriteTree_,e)){let r=new B(null);return i.snap!=null?r=r.set(M(),!0):he(i.children,o=>{r=r.set(new L(o),!0)}),Tt(t,new Vt(i.path,r,n))}else return[]}function Jt(t,e,n){return Tt(t,new Fe(Yn(),e,n))}function iu(t,e,n){const i=B.fromObject(n);return Tt(t,new vt(Yn(),e,i))}function su(t,e){return Tt(t,new mt(Yn(),e))}function ru(t,e,n){const i=ti(t,n);if(i){const s=ni(i),r=s.path,o=s.queryId,l=ae(r,e),a=new mt(Qn(o),l);return ii(t,r,a)}else return[]}function xn(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||cr(o,e))){const a=Ja(o,e,n,i);ja(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=a.removed;if(l=a.events,!s){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(r,(d,p)=>Re(p));if(h&&!c){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=au(d);for(let y=0;y<p.length;++y){const I=p[y],A=I.query,Q=_r(t,I);t.listenProvider_.startListening(dt(A),zt(t,A),Q.hashFn,Q.onComplete)}}}!c&&u.length>0&&!i&&(h?t.listenProvider_.stopListening(dt(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(en(d));t.listenProvider_.stopListening(dt(d),p)}))}uu(t,u)}return l}function ou(t,e,n,i){const s=ti(t,i);if(s!=null){const r=ni(s),o=r.path,l=r.queryId,a=ae(o,e),u=new Fe(Qn(l),a,n);return ii(t,o,u)}else return[]}function lu(t,e,n,i){const s=ti(t,i);if(s){const r=ni(s),o=r.path,l=r.queryId,a=ae(o,e),u=B.fromObject(n),h=new vt(Qn(l),a,u);return ii(t,o,h)}else return[]}function os(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,p)=>{const y=ae(d,s);r=r||Ye(p,y),o=o||Re(p)});let l=t.syncPointTree_.get(s);l?(o=o||Re(l),r=r||Ye(l,M())):(l=new Ya,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;r!=null?a=!0:(a=!1,r=w.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,y)=>{const I=Ye(y,M());I&&(r=r.updateImmediateChild(p,I))}));const u=cr(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=en(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=cu();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const h=$n(t.pendingWriteTree_,s);let c=Za(l,e,n,h,r,a);if(!u&&!o&&!i){const d=ur(l,e);c=c.concat(hu(t,e,d))}return c}function ei(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ae(o,e),u=Ye(l,a);if(u)return u});return nr(s,e,r,n,!0)}function Tt(t,e){return dr(e,t.syncPointTree_,null,$n(t.pendingWriteTree_,M()))}function dr(t,e,n,i){if(b(t.path))return fr(t,e,n,i);{const s=e.get(M());n==null&&s!=null&&(n=Ye(s,M()));let r=[];const o=T(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=ir(i,o);r=r.concat(dr(l,a,u,h))}return s&&(r=r.concat(Jn(s,t,i,n))),r}}function fr(t,e,n,i){const s=e.get(M());n==null&&s!=null&&(n=Ye(s,M()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ir(i,o),h=t.operationForChild(o);h&&(r=r.concat(fr(h,l,a,u)))}),s&&(r=r.concat(Jn(s,t,i,n))),r}function _r(t,e){const n=e.query,i=zt(t,n);return{hashFn:()=>(Ha(e)||w.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?ru(t,n._path,i):su(t,n._path);{const r=ol(s,n);return xn(t,n,null,r)}}}}function zt(t,e){const n=en(e);return t.queryToTagMap.get(n)}function en(t){return t._path.toString()+"$"+t._queryIdentifier}function ti(t,e){return t.tagToQueryMap.get(e)}function ni(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new L(t.substr(0,e))}}function ii(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=$n(t.pendingWriteTree_,e);return Jn(i,n,s,null)}function au(t){return t.fold((e,n,i)=>{if(n&&Re(n))return[Zt(n)];{let s=[];return n&&(s=ar(n)),he(i,(r,o)=>{s=s.concat(o)}),s}})}function dt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tu())(t._repo,t._path):t}function uu(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=en(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function cu(){return nu++}function hu(t,e,n){const i=e._path,s=zt(t,e),r=_r(t,n),o=t.listenProvider_.startListening(dt(e),s,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(i);if(s)f(!Re(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,c)=>{if(!b(u)&&h&&Re(h))return[Zt(h).query];{let d=[];return h&&(d=d.concat(ar(h).map(p=>p.query))),he(c,(p,y)=>{d=d.concat(y)}),d}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(dt(h),zt(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new si(n)}node(){return this.node_}}class ri{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$(this.path_,e);return new ri(this.syncTree_,n)}node(){return ei(this.syncTree_,this.path_)}}const du=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ls=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return fu(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _u(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},fu=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},_u=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},pu=function(t,e,n,i){return oi(e,new ri(n,t),i)},pr=function(t,e,n){return oi(t,new si(e),n)};function oi(t,e,n){const i=t.getPriority().val(),s=ls(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ls(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new X(l,te(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new X(s))),o.forEachChild(K,(l,a)=>{const u=oi(a,e.getImmediateChild(l),n);u!==a&&(r=r.updateImmediateChild(l,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ai(t,e){let n=e instanceof L?e:new L(e),i=t,s=T(n);for(;s!==null;){const r=Qe(i.node.children,s)||{children:{},childCount:0};i=new li(s,i,r),n=V(n),s=T(n)}return i}function et(t){return t.node.value}function gr(t,e){t.node.value=e,An(t)}function mr(t){return t.node.childCount>0}function gu(t){return et(t)===void 0&&!mr(t)}function tn(t,e){he(t.node.children,(n,i)=>{e(new li(n,t,i))})}function vr(t,e,n,i){n&&!i&&e(t),tn(t,s=>{vr(s,e,!0,i)}),n&&i&&e(t)}function mu(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function St(t){return new L(t.parent===null?t.name:St(t.parent)+"/"+t.name)}function An(t){t.parent!==null&&vu(t.parent,t.name,t)}function vu(t,e,n){const i=gu(n),s=Se(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,An(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,An(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=/[\[\].#$\/\u0000-\u001F\u007F]/,Cu=/[\[\].#$\u0000-\u001F\u007F]/,fn=10*1024*1024,yr=function(t){return typeof t=="string"&&t.length!==0&&!yu.test(t)},Cr=function(t){return typeof t=="string"&&t.length!==0&&!Cu.test(t)},Eu=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cr(t)},wu=function(t,e,n,i){ui(Fn(t,"value"),e,n)},ui=function(t,e,n){const i=n instanceof L?new Vl(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ae(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ae(i)+" with contents = "+e.toString());if(Cs(e))throw new Error(t+"contains "+e.toString()+" "+Ae(i));if(typeof e=="string"&&e.length>fn/3&&$t(e)>fn)throw new Error(t+"contains a string greater than "+fn+" utf8 bytes "+Ae(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(he(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yr(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ae(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wl(i,o),ui(t,l,i),Ul(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ae(i)+" in addition to actual children.")}},Er=function(t,e,n,i){if(!Cr(n))throw new Error(Fn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Iu=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Er(t,e,n)},Tu=function(t,e){if(T(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Su=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Eu(n))throw new Error(Fn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ci(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Bn(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function wr(t,e,n){ci(t,n),Ir(t,i=>Bn(i,e))}function Te(t,e,n){ci(t,n),Ir(t,i=>me(i,e)||me(e,i))}function Ir(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(ku(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ku(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();at&&ne("event: "+n.toString()),Je(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="repo_interrupt",Nu=25;class xu{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qt(),this.transactionQueueTree_=new li,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Au(t,e,n){if(t.stats_=Wn(t.repoInfo_),t.forceRestClient_||cl())t.server_=new Lt(t.repoInfo_,(i,s,r,o)=>{as(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>us(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{J(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new we(t.repoInfo_,e,(i,s,r,o)=>{as(t,i,s,r,o)},i=>{us(t,i)},i=>{Mu(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=pl(t.repoInfo_,()=>new fa(t.stats_,t.server_)),t.infoData_=new aa,t.infoSyncTree_=new rs({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=Jt(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),di(t,"connected",!1),t.serverSyncTree_=new rs({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const u=o(l,a);Te(t.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Pu(t){const n=t.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hi(t){return du({timestamp:Pu(t)})}function as(t,e,n,i,s){t.dataUpdateCount++;const r=new L(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=Pt(n,u=>te(u));o=lu(t.serverSyncTree_,r,a,s)}else{const a=te(n);o=ou(t.serverSyncTree_,r,a,s)}else if(i){const a=Pt(n,u=>te(u));o=iu(t.serverSyncTree_,r,a)}else{const a=te(n);o=Jt(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=nn(t,r)),Te(t.eventQueue_,l,o)}function us(t,e){di(t,"connected",e),e===!1&&Du(t)}function Mu(t,e){he(e,(n,i)=>{di(t,n,i)})}function di(t,e,n){const i=new L("/.info/"+e),s=te(n);t.infoData_.updateSnapshot(i,s);const r=Jt(t.infoSyncTree_,i,s);Te(t.eventQueue_,i,r)}function Tr(t){return t.nextWriteId_++}function Ou(t,e,n,i,s){fi(t,"set",{path:e.toString(),value:n,priority:i});const r=hi(t),o=te(n,i),l=ei(t.serverSyncTree_,e),a=pr(o,l,r),u=Tr(t),h=hr(t.serverSyncTree_,e,a,u,!0);ci(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||ce("set at "+e+" failed: "+d);const I=Oe(t.serverSyncTree_,u,!y);Te(t.eventQueue_,e,I),Vu(t,s,d,p)});const c=Nr(t,e);nn(t,c),Te(t.eventQueue_,c,[])}function Du(t){fi(t,"onDisconnectEvents");const e=hi(t),n=qt();Tn(t.onDisconnect_,M(),(s,r)=>{const o=pu(s,r,t.serverSyncTree_,e);Xs(n,s,o)});let i=[];Tn(n,M(),(s,r)=>{i=i.concat(Jt(t.serverSyncTree_,s,r));const o=Nr(t,s);nn(t,o)}),t.onDisconnect_=qt(),Te(t.eventQueue_,M(),i)}function Fu(t,e,n){let i;T(e._path)===".info"?i=os(t.infoSyncTree_,e,n):i=os(t.serverSyncTree_,e,n),wr(t.eventQueue_,e._path,i)}function Lu(t,e,n){let i;T(e._path)===".info"?i=xn(t.infoSyncTree_,e,n):i=xn(t.serverSyncTree_,e,n),wr(t.eventQueue_,e._path,i)}function qu(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ru)}function fi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ne(n,...e)}function Vu(t,e,n,i){e&&Je(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Sr(t,e,n){return ei(t.serverSyncTree_,e,n)||w.EMPTY_NODE}function _i(t,e=t.transactionQueueTree_){if(e||sn(t,e),et(e)){const n=kr(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Wu(t,St(e),n)}else mr(e)&&tn(e,n=>{_i(t,n)})}function Wu(t,e,n){const i=n.map(u=>u.currentWriteId),s=Sr(t,e,i);let r=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=ae(e,h.path);r=r.updateChild(c,h.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,u=>{fi(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Oe(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();sn(t,ai(t.transactionQueueTree_,e)),_i(t,t.transactionQueueTree_),Te(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)Je(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ce("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}nn(t,e)}},o)}function nn(t,e){const n=br(t,e),i=St(n),s=kr(t,n);return Uu(t,s,i),i}function Uu(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ae(n,a.path);let h=!1,c;if(f(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,c=a.abortReason,s=s.concat(Oe(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Nu)h=!0,c="maxretry",s=s.concat(Oe(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Sr(t,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){ui("transaction failed: Data returned ",p,a.path);let y=te(p);typeof p=="object"&&p!=null&&Se(p,".priority")||(y=y.updatePriority(d.getPriority()));const A=a.currentWriteId,Q=hi(t),W=pr(y,d,Q);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=W,a.currentWriteId=Tr(t),o.splice(o.indexOf(A),1),s=s.concat(hr(t.serverSyncTree_,a.path,W,a.currentWriteId,a.applyLocally)),s=s.concat(Oe(t.serverSyncTree_,A,!0))}else h=!0,c="nodata",s=s.concat(Oe(t.serverSyncTree_,a.currentWriteId,!0))}Te(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(c),!1,null))))}sn(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)Je(i[l]);_i(t,t.transactionQueueTree_)}function br(t,e){let n,i=t.transactionQueueTree_;for(n=T(e);n!==null&&et(i)===void 0;)i=ai(i,n),e=V(e),n=T(e);return i}function kr(t,e){const n=[];return Rr(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Rr(t,e,n){const i=et(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);tn(e,s=>{Rr(t,s,n)})}function sn(t,e){const n=et(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,gr(e,n.length>0?n:void 0)}tn(e,i=>{sn(t,i)})}function Nr(t,e){const n=St(br(t,e)),i=ai(t.transactionQueueTree_,e);return mu(i,s=>{_n(t,s)}),_n(t,i),vr(i,s=>{_n(t,s)}),n}function _n(t,e){const n=et(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Oe(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?gr(e,void 0):n.length=r+1,Te(t.eventQueue_,St(e),s);for(let o=0;o<i.length;o++)Je(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Hu(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${n}' in query '${t}'`)}return e}const cs=function(t,e){const n=Gu(t),i=n.namespace;n.domain==="firebase.com"&&Ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tl();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ps(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new L(n.pathString)}},Gu=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(s=Bu(t.substring(h,c)));const d=Hu(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");i=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+J(this.snapshot.exportVal())}}class Ku{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return b(this._path)?null:Us(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=Qi(this._queryParams),n=qn(e);return n==="{}"?"default":n}get _queryObject(){return Qi(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof pi))return!1;const n=this._repo===e._repo,i=Bn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ql(this._path)}}class Ne extends pi{constructor(e,n){super(e,n,new Kn,!1)}get parent(){const e=Hs(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new L(e),i=Pn(this.ref,e);return new Kt(this._node.getChild(n),i,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Kt(s,Pn(this.ref,i),K)))}hasChild(e){const n=new L(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pn(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?Pn(t._root,e):t._root}function Pn(t,e){return t=yt(t),T(t._path)===null?Iu("child","path",e):Er("child","path",e),new Ne(t._repo,$(t._path,e))}function hs(t,e){t=yt(t),Tu("set",t._path),wu("set",e,t._path);const n=new Dn;return Ou(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new zu("value",this,new Kt(e.snapshotNode,new Ne(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ku(this,e,n):null}matches(e){return e instanceof gi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qu(t,e,n,i,s){const r=new Yu(n,void 0),o=new gi(r);return Fu(t._repo,t,o),()=>Lu(t._repo,t,o)}function $u(t,e,n,i){return Qu(t,"value",e)}Qa(Ne);eu(Ne);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="FIREBASE_DATABASE_EMULATOR_HOST",Mn={};let Xu=!1;function Zu(t,e,n,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=fs(r);t.repoInfo_=new Ps(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function Ju(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cs(r,s),l=o.repoInfo,a;typeof process<"u"&&xi&&(a=xi[ju]),a?(r=`http://${a}?ns=${l.namespace}`,o=cs(r,s),l=o.repoInfo):o.repoInfo.secure;const u=new dl(t.name,t.options,e);Su("Invalid Firebase Database URL",o),b(o.path)||Ie("Database URL must point to the root of a Firebase Database (not including a child path).");const h=tc(l,t,u,new hl(t,n));return new nc(h,t)}function ec(t,e){const n=Mn[e];(!n||n[t.key]!==t)&&Ie(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qu(t),delete n[t.key]}function tc(t,e,n,i){let s=Mn[e.name];s||(s={},Mn[e.name]=s);let r=s[t.toURLString()];return r&&Ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xu(t,Xu,n,i),s[t.toURLString()]=r,r}class nc{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Au(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,M())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ec(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ie("Cannot call "+e+" on a deleted database.")}}function ic(t=Br(),e){const n=Hr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Gr("database");i&&sc(n,...i)}return n}function sc(t,e,n,i={}){t=yt(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Kr(i,r.repoInfo_.emulatorOptions))return;Ie("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new At(At.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:Yr(i.mockUserToken,t.app.options.projectId);o=new At(l)}fs(e)&&(Qr(e),$r("Database",!0)),Zu(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){$o(co),eo(new to("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ju(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),vi(Ai,Pi,t),vi(Ai,Pi,"esm2017")}we.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};we.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rc();const gn=ic(),oc={data(){return{userId:"",tab:"user",listUser:[]}},computed:{},methods:{addUser(){hs(pn(gn,"users/"+this.userId),{ttl:0,tltsl:0,tltt:0,svtg:0}),this.userId=""},update(t,e,n){console.log(n,e);let i={ttl:e.ttl,tltsl:e.tltsl,tltt:e.tltt,svtg:e.svtg};i[n]=i[n]+1,hs(pn(gn,"users/"+t),i)},getData(){$u(pn(gn,"/users"),t=>{this.listUser=t.val()})},percentageFormatter(t,e){let n=(t||0)/(e||0)*100;return new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format(n/100)}},created(){},mounted(){this.getData()}},lc={class:"row q-mb-md"},ac={class:"row justify-between items-center"},uc={class:"col-2 text-bold"},cc={class:"col-12 row justify-between items-center q-mt-sm"},hc={class:"col-12 row justify-between items-center q-mt-sm"},dc={class:"col-12 row justify-between items-center q-mt-sm"},fc={class:"col-12 row justify-between items-center q-mt-sm"};function _c(t,e,n,i,s,r){return rn(),ho(Qo,{class:"q-pa-md"},{default:fo(()=>[re("div",lc,[xe(Ko,{outlined:"",modelValue:s.userId,"onUpdate:modelValue":e[0]||(e[0]=o=>s.userId=o),label:"Tên người chơi",class:"col-8"},null,8,["modelValue"]),xe(Yo),xe(nt,{color:"primary",label:"Thêm",class:"col-3",onClick:e[1]||(e[1]=o=>r.addUser())})]),(rn(!0),Ci(_o,null,po(s.listUser,(o,l)=>(rn(),Ci("div",{key:l,class:"q-pa-sm"},[re("div",ac,[re("div",uc,pe(l),1),re("div",cc,[e[2]||(e[2]=re("div",{class:"col-4"},"Tham gia",-1)),re("div",null,pe(o.svtg||0),1),xe(nt,{color:"primary",label:"Tăng",onClick:a=>r.update(l,o,"svtg")},null,8,["onClick"])]),re("div",hc,[e[3]||(e[3]=re("div",{class:"col-4"},"Tỉ lệ thắng",-1)),re("div",null,pe(o.ttl||0)+" / "+pe(o.svtg||0)+" ("+pe(r.percentageFormatter(o.ttl,o.svtg))+")",1),xe(nt,{color:"primary",label:"Tăng",onClick:a=>r.update(l,o,"ttl")},null,8,["onClick"])]),re("div",dc,[e[4]||(e[4]=re("div",{class:"col-4"},"Tỉ lệ thắng solo",-1)),re("div",null,pe(o.tltsl||0)+" / "+pe(o.svtg||0)+" ("+pe(r.percentageFormatter(o.tltsl,o.svtg))+")",1),xe(nt,{color:"primary",label:"Tăng",onClick:a=>r.update(l,o,"tltsl")},null,8,["onClick"])]),re("div",fc,[e[5]||(e[5]=re("div",{class:"col-4"}," Tỉ lệ thắng team",-1)),re("div",null,pe(o.tltt||0)+" / "+pe(o.svtg||0)+" ("+pe(r.percentageFormatter(o.tltt,o.svtg))+")",1),xe(nt,{color:"primary",label:"Tăng",onClick:a=>r.update(l,o,"tltt")},null,8,["onClick"])])])]))),128))]),_:1})}const yc=mo(oc,[["render",_c]]);export{yc as default};
