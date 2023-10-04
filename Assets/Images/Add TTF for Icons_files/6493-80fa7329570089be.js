"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6493],{91809:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(35250),i=r(19841),a=r(94968),s=r(70671),o=(0,a.vU)({altText:{id:"AppLogo.altText",description:"The alt text for the app logo image",defaultMessage:"{name} logo"}});function l(e){var n=e.url,r=e.name,a=e.size,l=e.large,u=e.className,c=(0,s.Z)();return(0,t.jsxs)("div",{className:(0,i.default)("relative",u),style:{width:a,height:a},children:[(0,t.jsx)("img",{src:n,alt:c.formatMessage(o.altText,{name:r}),className:(0,i.default)("h-full w-full bg-white",l?"rounded-[5px]":"rounded-sm")}),(0,t.jsx)("div",{className:(0,i.default)("absolute inset-0 ring-1 ring-inset ring-black/10",l?"rounded-[5px]":"rounded-sm")})]})}},6038:function(e,n,r){r.d(n,{B0:function(){return P},Ph:function(){return Z},Yt:function(){return S},k$:function(){return y},zf:function(){return A}});var t=r(4337),i=r(35250),a=r(19841),s=r(19579),o=r.n(s),l=r(1454),u=r(13002),c=r(70671),d=r(94968),f=r(21389),m=r(62509),v=r(75641),x=r(78931),h=r(91809),p=r(88327);function g(){var e=(0,t._)(["relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center"]);return g=function(){return e},e}function b(){var e=(0,t._)(["\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ","\n  ","\n"]);return b=function(){return e},e}function j(){var e=(0,t._)(["text-white flex justify-center items-center relative tracking-widest"]);return j=function(){return e},e}function k(){var e=(0,t._)(["relative flex"]);return k=function(){return e},e}var w=f.Z.div(g()),N=f.Z.span(b(),function(e){return"warning"===e.$type&&"bg-orange-500 text-white"},function(e){return"danger"===e.$type&&"bg-red-500 text-white"}),y=function(e){var n=e.iconName,r=e.background,t=e.notice,a=p.nI;switch(n){case"globe":a=l.RsK;break;case"terminal":a=l.cDN;break;case"text":a=l.RUS;break;case"browsing":a=l.jRj;break;case"code":a=u.oT$;break;case"plugin":a=l.yG;break;case"user":a=l.fzv}return(0,i.jsxs)(w,{style:{backgroundColor:r},children:[(0,i.jsx)(p.ZP,{icon:a,size:"medium"}),t&&(0,i.jsx)(N,{$type:t,children:"!"})]})},Z=function(e){var n=e.plugin,r=e.notice;return(0,i.jsxs)(w,{className:"p-0",children:[(0,i.jsx)(h.Z,{url:n.manifest.logo_url,name:n.manifest.name_for_human,size:"100%"}),r&&(0,i.jsx)(N,{$type:r,children:"!"})]})},C=f.Z.div(j()),_=f.Z.div(k()),M={small:16,redesign:28,medium:36,large:48},R={small:"small",redesign:"small",medium:"medium",large:"medium"},S=function(e){var n,r=e.user,t=e.size,s=e.notice,u=s&&(0,i.jsx)(N,{$type:s,children:"!"});if((null==r?void 0:r.picture)!=null)return(0,i.jsxs)(_,{children:[(0,i.jsx)(o(),{src:r.picture,alt:"User",width:M[t],height:M[t],className:"rounded-sm"}),u]});var c=(null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"").split(" ").map(function(e){return e[0]}).join("");return(0,i.jsxs)(C,{className:(0,a.default)("bg-blue-300","redesign"===t?"h-7 w-7 text-xs":"small"===t?"h-5 w-5 text-xs":"h-[30px] w-[30px] text-sm","rounded-sm"),children:[c||(0,i.jsx)(p.ZP,{icon:l.fzv,size:R[t]}),u]})};function P(e){var n=e.size,r=void 0===n?"medium":n,t=(0,c.Z)();return(0,i.jsx)(_,{children:(0,i.jsx)(o(),{src:"/images/work-case-24x24.svg",alt:t.formatMessage(T.workspaceAvatarAlt),width:M[r],height:M[r],className:"rounded-sm bg-[#3C46FF]"})})}function A(e){var n=e.className,r=e.iconSize,t=void 0===r?"medium":r,s=e.notice,o=e.workspace,l=(0,x.ec)(function(e){return e.currentWorkspace});null!=o||(o=l);var u=(null==o?void 0:o.structure)===v.CZ.PERSONAL,c=(0,m.kP)().session;return(0,i.jsx)("div",{className:(0,a.default)("flex items-center justify-center rounded",n),children:!o||u&&(null==c?void 0:c.user)!==void 0?(0,i.jsx)(S,{user:null==c?void 0:c.user,size:t,notice:s}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(P,{size:t}),s&&(0,i.jsx)(N,{$type:s,children:"!"})]})})}var T=(0,d.vU)({workspaceAvatarAlt:{id:"Avatar.workspaceAvatarAlt",defaultMessage:"Avatar of a work briefcase",description:"Alt text for workspace avatar"}})},50744:function(e,n,r){var t=r(35250),i=r(55344),a=r.n(i);r(70079);var s=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:n})};n.Z=a()(function(){return Promise.resolve(s)},{ssr:!1})},82277:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(4337),i=r(35250),a=r(70079),s=r(21389),o=r(46020),l=r(33669),u=r(50744),c=r(13090);function d(){var e=(0,t._)(["overflow-hidden w-full h-full relative flex z-0"]);return d=function(){return e},e}function f(){var e=(0,t._)(["relative h-full w-full transition-width overflow-auto"]);return f=function(){return e},e}function m(e){var n=e.children,r=e.showNavigation,t=e.renderTitle,s=e.renderMobileHeaderRightContent,d=e.renderSidebar,f=(0,l.w$)(),h=[],p=null;return a.Children.forEach(n,function(e){a.isValidElement(e)&&(e.type===m.Sidebars?p=e:h.push(e))}),(0,i.jsxs)(v,{children:[f&&r&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.l6,{children:d})}),(0,i.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 overflow-hidden",children:[(0,i.jsxs)("div",{className:"flex h-full max-w-full flex-1 flex-col",children:[!f&&r&&(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.Vs,{onClickOpenSidebar:function(){return o.vm.toggleActiveSidebar("mobile-nav")},renderTitle:t,renderSidebar:d,renderRightContent:s})}),(0,i.jsx)(x,{className:"flex-1",children:h})]}),p]})]})}var v=s.Z.div(d()),x=s.Z.main(f());m.Sidebars=function(e){var n=e.children;return(0,i.jsx)(i.Fragment,{children:n})}},13090:function(e,n,r){r.d(n,{H:function(){return Z},MP:function(){return N},Vs:function(){return _},js:function(){return y},l6:function(){return M}});var t=r(39324),i=r(70216),a=r(35250),s=r(98359),o=r(20525),l=r(32148),u=r(97296),c=r(70737),d=r(60554),f=r(70079),m=r(1454),v=r(70671),x=r(32004),h=r(94968),p=r(46020),g=r(33669),b=r(42271),j=r(45635),k=r(88327),w=r(15329);function N(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)(w.zV,(0,t._)({onClick:n,className:"flex-grow overflow-hidden"},r))}function y(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,a.jsx)("button",(0,t._)({type:"button",className:"px-3",onClick:n},r))}function Z(){var e=(0,v.Z)();return(0,g.w$)()?(0,a.jsx)(j.u,{side:"right",label:e.formatMessage(R.closeSidebar),children:(0,a.jsxs)(w.zV,{onClick:p.vm.toggleDesktopNavCollapsed,className:"w-11 flex-shrink-0 items-center justify-center",children:[(0,a.jsx)(k.ZP,{icon:m.iYc}),(0,a.jsx)(l.f,{children:(0,a.jsx)(x.Z,(0,t._)({},R.closeSidebar))})]})}):null}var C=function(e){var n=e.onClose,r=e.sidebarOpen,i=e.children;return(0,a.jsx)(s.u.Root,{show:r,as:f.Fragment,children:(0,a.jsxs)(o.V,{as:"div",className:"relative",onClose:n,children:[(0,a.jsx)(s.u.Child,{as:f.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,a.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,a.jsx)(s.u.Child,{as:f.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,a.jsxs)(o.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",children:[(0,a.jsx)(s.u.Child,{as:f.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-2",children:(0,a.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(x.Z,(0,t._)({},R.closeSidebar))}),(0,a.jsx)(k.ZP,{icon:m.q5L,size:"medium",className:"text-white","aria-hidden":"true"})]})})}),i]})}),(0,a.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},_=function(e){var n=e.onClickOpenSidebar,r=e.renderTitle,i=e.renderSidebar,s=e.renderRightContent,o=(0,p.tN)(function(e){return e.activeSidebar}),l=(0,d.useRouter)().asPath;return(0,f.useEffect)(function(){"mobile-nav"===o&&p.vm.setActiveSidebar(!1)},[l]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",children:[(0,a.jsxs)("button",{type:"button",className:"-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",onClick:n,children:[(0,a.jsx)("span",{className:"sr-only",children:(0,a.jsx)(x.Z,(0,t._)({},R.openSidebar))}),(0,a.jsx)(k.ZP,{icon:m.cur,"aria-hidden":"true",size:"medium"})]}),(0,a.jsx)("h1",{className:"flex-1 text-center text-base font-normal",children:r}),s]}),(0,a.jsx)(C,{onClose:function(){p.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===o,children:i})]})};function M(e){var n=e.children,r=(0,v.Z)(),t=(0,f.useRef)(null),i=(0,p.tN)(function(e){return e.isDesktopNavCollapsed});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.E.div,{className:"dark flex-shrink-0 overflow-x-hidden bg-gray-900",ref:t,initial:!1,animate:{width:i?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:function(){t.current&&(t.current.style.visibility="visible")},onAnimationComplete:function(){t.current&&i&&(t.current.style.visibility="hidden")},children:(0,a.jsx)("div",{className:"h-full w-[260px]",children:(0,a.jsx)("div",{className:"flex h-full min-h-0 flex-col ",children:n})})}),(0,a.jsx)(c.M,{initial:!1,children:i&&(0,a.jsx)(u.E.div,{className:"absolute left-2 top-2 z-10 hidden md:inline-block",initial:{opacity:0},animate:{opacity:1,transition:{duration:.165,ease:"easeIn"}},children:(0,a.jsx)(j.u,{side:"right",label:r.formatMessage(R.openSidebar),children:(0,a.jsx)(b.O,{onClick:p.vm.toggleDesktopNavCollapsed,"aria-label":r.formatMessage(R.openSidebar),children:(0,a.jsx)(k.ZP,{className:"text-black dark:text-white",icon:m.iYc})})})})})]})}var R=(0,h.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar",description:"Open sidebar button label"}})},52696:function(e,n,r){r.d(n,{$3:function(){return m},Ap:function(){return c},CV:function(){return v},GA:function(){return f},Gk:function(){return g},Ix:function(){return h},_O:function(){return p},bE:function(){return b},cI:function(){return x},qH:function(){return d}});var t=r(96237),i=r(70079),a=r(70671),s=r(94968),o=r(62509),l=r(75641),u=r(78931);function c(){var e=(0,a.Z)(),n=e.formatMessage(j.adminRoleName),r=e.formatMessage(j.ownerRoleName),s=e.formatMessage(j.standardRoleName);return(0,i.useMemo)(function(){var e;return e={},(0,t._)(e,l.r3.OWNER,r),(0,t._)(e,l.r3.ADMIN,n),(0,t._)(e,l.r3.STANDARD,s),e},[r,n,s])}function d(e){var n=(0,a.Z)();return e?e.structure===l.CZ.PERSONAL?n.formatMessage(j.personalPlanName):n.formatMessage(j.enterprisePlanName):n.formatMessage(j.personalPlanName)}function f(e){return v((0,a.Z)(),e)}function m(){var e=(0,u.ec)(function(e){return e.currentWorkspace});return v((0,a.Z)(),e)}function v(e,n){var r;return n&&n.structure!==l.CZ.PERSONAL?null!==(r=n.name)&&void 0!==r?r:e.formatMessage(j.defaultWorkspaceTitle):e.formatMessage(j.personalWorkspaceTitle)}function x(){var e,n,r,t,i=(0,o.kP)().session;return null!==(t=null!==(r=null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.name)&&void 0!==r?r:null==i?void 0:null===(n=i.user)||void 0===n?void 0:n.email)&&void 0!==t?t:null}function h(e){var n=(0,u.ec)(function(e){return e.currentWorkspace}),r=(0,u.ec)(u.F_.isPersonalWorkspace),t=(0,u.$T)(),i=f(n),a=x();return e&&!t?e.structure===l.CZ.PERSONAL?a:e.name:n?r?a:i:a}function p(){return(0,u.ec)(function(e){return e.workspaces})}function g(e){var n=p().find(function(n){return n.id===e});return(null==n?void 0:n.role)===l.r3.OWNER}function b(e){var n=p().find(function(n){return n.id===e});return(null==n?void 0:n.role)===l.r3.ADMIN}var j=(0,s.vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace",description:"title for workspace without a name"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account",description:"title for personal workspace"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal",description:"label for personal tier account"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise",description:"label for enterprise tier account"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin",description:"Role name for an admin user"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner",description:"Role name for an owner user"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member",description:"Role name for a standard user"}})},42271:function(e,n,r){r.d(n,{O:function(){return o},h:function(){return l}});var t=r(4337),i=r(21389);function a(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return a=function(){return e},e}function s(){var e=(0,t._)(["h-11 w-11"]);return s=function(){return e},e}var o=i.Z.button(a()),l=i.Z.div(s())},15329:function(e,n,r){r.d(n,{R:function(){return h},Vq:function(){return p},ZB:function(){return v},ZP:function(){return m},zV:function(){return x}});var t=r(4337),i=r(35250),a=r(7813),s=r(19841),o=r(21389);function l(){var e=(0,t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return l=function(){return e},e}function u(){var e=(0,t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm"]);return u=function(){return e},e}function c(){var e=(0,t._)(["rounded-md border border-white/20 hover:bg-gray-500/10 h-11"]);return c=function(){return e},e}function d(){var e=(0,t._)(["my-1.5 h-px bg-white/20"]);return d=function(){return e},e}function f(){var e=(0,t._)(["",""]);return f=function(){return e},e}function m(e){var n=e.onClick,r=e.href,t=e.target,o=e.children;return(0,i.jsx)(a.v.Item,{children:function(e){var a=e.active;return(0,i.jsx)(v,{as:void 0!==r?"a":"button",onClick:n,href:r,target:t,className:(0,s.default)(a?"bg-gray-800":"hover:bg-gray-800"),children:o})}})}o.Z.a(l());var v=o.Z.a(u()),x=(0,o.Z)(v)(c()),h=o.Z.div(d()),p=(0,o.Z)(v)(f(),function(e){return e.$active?"bg-gray-800":"hover:bg-gray-800"})}}]);