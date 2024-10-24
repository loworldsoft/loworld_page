import {
  SharedModule
} from "./chunk-P7S4K4IA.js";
import "./chunk-ITDXBH2M.js";
import {
  ExpansionPanelComponent,
  StoreAbstract
} from "./chunk-EHYLDEJU.js";
import {
  RouterModule
} from "./chunk-H75O5MZX.js";
import "./chunk-JBIIG4YR.js";
import {
  ViewContainerRef,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-MCEJEMSJ.js";

// Modules/pages/history/history.component.ts
var _c0 = ["container"];
var _HistoryComponent = class _HistoryComponent extends StoreAbstract {
  ngOnInit() {
    const historyList = localStorage.getItem("history");
    let historyObj;
    if (historyList)
      historyObj = JSON.parse(historyList);
    historyObj.forEach((component) => {
      this.factoryService.createComponent(ExpansionPanelComponent, this.container, component);
    });
  }
};
_HistoryComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275HistoryComponent_BaseFactory;
  return function HistoryComponent_Factory(t) {
    return (\u0275HistoryComponent_BaseFactory || (\u0275HistoryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryComponent)))(t || _HistoryComponent);
  };
})();
_HistoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryComponent, selectors: [["app-history"]], viewQuery: function HistoryComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["container", ""]], template: function HistoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, null, 0);
  }
}, styles: ["\n\n/*# sourceMappingURL=history.component.css.map */"] });
var HistoryComponent = _HistoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryComponent, { className: "HistoryComponent" });
})();

// Modules/pages/history/history-routing.module.ts
var routes = [
  {
    path: "",
    component: HistoryComponent
  }
];
var _HistoryRoutingModule = class _HistoryRoutingModule {
};
_HistoryRoutingModule.\u0275fac = function HistoryRoutingModule_Factory(t) {
  return new (t || _HistoryRoutingModule)();
};
_HistoryRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HistoryRoutingModule });
_HistoryRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HistoryRoutingModule = _HistoryRoutingModule;

// Modules/pages/history/history.module.ts
var _HistoryModule = class _HistoryModule {
};
_HistoryModule.\u0275fac = function HistoryModule_Factory(t) {
  return new (t || _HistoryModule)();
};
_HistoryModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HistoryModule });
_HistoryModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  HistoryRoutingModule
] });
var HistoryModule = _HistoryModule;
export {
  HistoryModule
};
//# sourceMappingURL=chunk-4IO7AZ7K.js.map
