import {
  ChatHistoryRest,
  ListComponent
} from "./chunk-4DU3AKEP.js";
import {
  SharedModule,
  SplitterDirective
} from "./chunk-7EJGC4OO.js";
import "./chunk-ZG6TFU3E.js";
import {
  GlobalService,
  StoreAbstract
} from "./chunk-3LOGTTFB.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-WDMB75ZP.js";
import "./chunk-JBIIG4YR.js";
import {
  ElementRef,
  ViewContainerRef,
  inject,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-MCEJEMSJ.js";

// Modules/pages/chatbot/components/chat/chat.component.ts
var _c0 = ["container"];
var _ChatComponent = class _ChatComponent {
  constructor(globalService) {
    this.globalService = globalService;
    this.pageId = null;
  }
  ngOnInit() {
    if (this.pageId == null) {
      this.pageId = this.globalService.logicService.getGUID();
      this.globalService.historyService.currentChatPageId = this.pageId;
      this.globalService.liskovChatflow.layoutManager.find("chatpage")?.prepare(this.container);
      this.globalService.chatflow.scenario("chatbot");
    } else {
      this.globalService.historyService.currentChatPageId = this.pageId;
      this.globalService.dalService.chatHistoryHttp.get(this.globalService.currentUser.userData.userIdx).subscribe((response) => {
        this.globalService.historyService.allhistoryList = JSON.parse(response.data);
        this.globalService.historyService.pageHistoryList = this.globalService.historyService.allhistoryList.find((page) => page.key === this.globalService.historyService.currentChatPageId);
        this.globalService.liskovChatflow.layoutManager.find("chatpage")?.prepare(this.container);
        this.globalService.chatflow.scenario("history");
      });
    }
  }
  ngOnDestroy() {
    this.globalService.liskovChatflow.layoutManager.find("chatpage").clear();
  }
};
_ChatComponent.\u0275fac = function ChatComponent_Factory(t) {
  return new (t || _ChatComponent)(\u0275\u0275directiveInject(GlobalService));
};
_ChatComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, inputs: { pageId: "pageId" }, decls: 3, vars: 0, consts: [[2, "width", "870px", "margin", "0 auto"], ["container", ""]], template: function ChatComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275elementContainer(1, null, 1);
    \u0275\u0275elementEnd();
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.full-balloon[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  padding: 2rem 1rem;\n}\n.form-full-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2.5rem;\n}\n.form-property[_ngcontent-%COMP%], .form-input-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.form-property[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-property[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form-input-bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n/*# sourceMappingURL=chat.component.css.map */'] });
var ChatComponent = _ChatComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "Modules\\pages\\chatbot\\components\\chat\\chat.component.ts", lineNumber: 9 });
})();

// Modules/pages/chatbot/components/chat-history/chat-history.component.ts
var _c02 = ["container"];
var _c1 = ["scrollBody"];
var _ChatHistoryComponent = class _ChatHistoryComponent extends StoreAbstract {
  ngOnInit() {
    this.globalService.liskovChatflow.layoutManager.find("chathistorypage")?.prepare(this.container);
    this.dalService.chatHistoryHttp.get(this.currentUser.userData.userIdx).subscribe((response) => {
      if (response == null)
        return;
      this.historyService.allhistoryList = JSON.parse(response.data);
      const groupHistoryList = this.historyService.groupHistoryList();
      this.dynamicLayoutService.historyListContainer = this.factoryService.createComponent(ListComponent, this.container, groupHistoryList);
    });
  }
  ngOnDestroy() {
    this.globalService.liskovChatflow.layoutManager.find("chathistorypage").clear();
  }
};
_ChatHistoryComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatHistoryComponent_BaseFactory;
  return function ChatHistoryComponent_Factory(t) {
    return (\u0275ChatHistoryComponent_BaseFactory || (\u0275ChatHistoryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatHistoryComponent)))(t || _ChatHistoryComponent);
  };
})();
_ChatHistoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatHistoryComponent, selectors: [["app-chat-history"]], viewQuery: function ChatHistoryComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 7, ViewContainerRef);
    \u0275\u0275viewQuery(_c1, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollBody = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 0, consts: [[2, "margin", "10px"], ["scrollBody", "", "container", ""]], template: function ChatHistoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275elementContainer(1, null, 1);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=chat-history.component.css.map */"] });
var ChatHistoryComponent = _ChatHistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatHistoryComponent, { className: "ChatHistoryComponent", filePath: "Modules\\pages\\chatbot\\components\\chat-history\\chat-history.component.ts", lineNumber: 10 });
})();

// Modules/pages/chatbot/chatbot.component.ts
function ChatbotComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 6);
  }
}
function ChatbotComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 7);
  }
}
function ChatbotComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275template(0, ChatbotComponent_Conditional_5_Conditional_0_Template, 1, 0, ":svg:path", 6)(1, ChatbotComponent_Conditional_5_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.layoutService.isButtonHover ? 0 : 1);
  }
}
function ChatbotComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 8);
  }
}
var _ChatbotComponent = class _ChatbotComponent extends StoreAbstract {
  constructor() {
    super(...arguments);
    this.chatPageId = null;
    this.route = inject(ActivatedRoute);
  }
  ngOnInit() {
    this.OnResizeRedux();
    this.historyService.currentChatPageId = "";
    this.historyService.allhistoryList = null;
    this.historyService.pageHistoryList = null;
    this.historyService.historyMetadata = [];
    this.route.paramMap.subscribe((params) => {
      this.chatPageId = params.get("chatPageId");
    });
  }
  OnResizeRedux() {
    this.resize$.subscribe((d) => {
      this.layoutService.leftWidh = d.leftWidth;
      this.layoutService.rightWidth = d.rightWidth;
    });
    this.resize({ leftWidth: 15, rightWidth: 85 });
  }
};
_ChatbotComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatbotComponent_BaseFactory;
  return function ChatbotComponent_Factory(t) {
    return (\u0275ChatbotComponent_BaseFactory || (\u0275ChatbotComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatbotComponent)))(t || _ChatbotComponent);
  };
})();
_ChatbotComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["app-chatbot"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 12, consts: [[1, "full-layout"], [1, "history-scroll", "back-color"], ["appSplitter", "", 1, "splitter"], [2, "align-self", "center", "transform", "translate(-15px, 0)", 3, "click", "mouseenter", "mouseleave"], ["width", "24", "height", "24", "viewBox", "0 0 50 50", "xmlns", "http://www.w3.org/2000/svg"], [3, "pageId"], ["d", "M 20,25 L 28,10 M 20,25 L 28,40", "stroke", "#9b9b9b", "stroke-width", "7", "fill", "none", "stroke-linecap", "round"], ["id", "line", "x1", "25", "y1", "15", "x2", "25", "y2", "45", "fill", "none", "stroke", "#9b9b9b", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M 30,25 L 22,10 M 30,25 L 22,40", "stroke", "#9b9b9b", "stroke-width", "7", "fill", "none", "stroke-linecap", "round"]], template: function ChatbotComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "app-chat-history", 1)(2, "button", 2);
    \u0275\u0275elementStart(3, "button", 3);
    \u0275\u0275listener("click", function ChatbotComponent_Template_button_click_3_listener($event) {
      return ctx.resizeButton($event);
    })("mouseenter", function ChatbotComponent_Template_button_mouseenter_3_listener() {
      return ctx.layoutService.isButtonHover = true;
    })("mouseleave", function ChatbotComponent_Template_button_mouseleave_3_listener() {
      return ctx.layoutService.isButtonHover = false;
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 4);
    \u0275\u0275template(5, ChatbotComponent_Conditional_5_Template, 2, 1)(6, ChatbotComponent_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(7, "app-chat", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx.layoutService.leftWidh, "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, ctx.layoutService.isOpen ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight())("width", ctx.layoutService.rightWidth, "%");
    \u0275\u0275property("pageId", ctx.chatPageId);
  }
}, dependencies: [SplitterDirective, ChatComponent, ChatHistoryComponent], styles: ['@charset "UTF-8";\n\n\n\n.history-scroll[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.history-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.back-color[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.3) !important;\n}\n/*# sourceMappingURL=chatbot.component.css.map */'] });
var ChatbotComponent = _ChatbotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "Modules\\pages\\chatbot\\chatbot.component.ts", lineNumber: 10 });
})();

// Modules/pages/chatbot/chatbot-routing.module.ts
var routes = [
  {
    path: "",
    component: ChatbotComponent
  },
  {
    path: ":chatPageId",
    component: ChatbotComponent
  }
];
var _ChatbotRoutingModule = class _ChatbotRoutingModule {
};
_ChatbotRoutingModule.\u0275fac = function ChatbotRoutingModule_Factory(t) {
  return new (t || _ChatbotRoutingModule)();
};
_ChatbotRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatbotRoutingModule });
_ChatbotRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ChatbotRoutingModule = _ChatbotRoutingModule;

// Modules/pages/chatbot/chatbot.module.ts
var _ChatbotModule = class _ChatbotModule {
};
_ChatbotModule.\u0275fac = function ChatbotModule_Factory(t) {
  return new (t || _ChatbotModule)();
};
_ChatbotModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatbotModule });
_ChatbotModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ChatHistoryRest], imports: [
  SharedModule,
  ChatbotRoutingModule
] });
var ChatbotModule = _ChatbotModule;
export {
  ChatbotModule
};
//# sourceMappingURL=chunk-QJUJLJY4.js.map
