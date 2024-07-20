import {
  SharedModule,
  TextComponent
} from "./chunk-XQHKTGCF.js";
import "./chunk-EBJGEC5I.js";
import {
  StoreAbstract,
  SwiperComponent
} from "./chunk-ZIMSTWUK.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  RouterModule
} from "./chunk-K6SENQKZ.js";
import "./chunk-KGFIP23Z.js";
import {
  ViewContainerRef,
  __async,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-A2LCPREI.js";

// Modules/pages/main/main.component.ts
var _c0 = ["container"];
var _MainComponent = class _MainComponent extends StoreAbstract {
  ngOnInit() {
    super.OnResizeRedux();
    this.index = 0;
    const value = this.logicService.getLogicValues("main");
    this.value(this.index, value);
  }
  speak(data) {
    this.factoryService.createComponent(TextComponent, this.container, data.node.result[0]);
    return Promise.resolve(++this.index).then((index) => {
      this.value(index);
    });
  }
  slot(data) {
    this.factoryService.createComponent(SwiperComponent, this.container, data.node.result);
    return Promise.resolve(++this.index).then((index) => {
      this.value(index);
    });
  }
  value(index, data) {
    return __async(this, null, function* () {
      if (data == null)
        return;
      if (index === 0)
        this.ownData = data;
      if (index === this.ownData.length)
        return;
      const node = this.ownData[index].node.category;
      yield this[node](this.ownData[index]);
    });
  }
};
_MainComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275MainComponent_BaseFactory;
  return function MainComponent_Factory(t) {
    return (\u0275MainComponent_BaseFactory || (\u0275MainComponent_BaseFactory = \u0275\u0275getInheritedFactory(_MainComponent)))(t || _MainComponent);
  };
})();
_MainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 0, consts: [["container", ""]], template: function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header");
    \u0275\u0275element(2, "mat-card-title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275elementContainer(4, null, 0);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [MatCard, MatCardContent, MatCardHeader, MatCardTitle], styles: ["\n\n/*# sourceMappingURL=main.component.css.map */"] });
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "Modules\\pages\\main\\main.component.ts", lineNumber: 11 });
})();

// Modules/pages/main/main-routing.module.ts
var routes = [
  {
    path: "",
    component: MainComponent
  }
];
var _MainRoutingModule = class _MainRoutingModule {
};
_MainRoutingModule.\u0275fac = function MainRoutingModule_Factory(t) {
  return new (t || _MainRoutingModule)();
};
_MainRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MainRoutingModule });
_MainRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var MainRoutingModule = _MainRoutingModule;

// Modules/pages/main/main.module.ts
var _MainModule = class _MainModule {
};
_MainModule.\u0275fac = function MainModule_Factory(t) {
  return new (t || _MainModule)();
};
_MainModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MainModule });
_MainModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  MainRoutingModule
] });
var MainModule = _MainModule;
export {
  MainModule
};
//# sourceMappingURL=chunk-BCFNOKJO.js.map
