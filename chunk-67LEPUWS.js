import {
  ChatHistoryMenuData
} from "./chunk-X4QAW7BO.js";
import {
  CdkDrag,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatListItem,
  MatListItemTitle,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatSelect,
  MatSlideToggle,
  MenuComponent,
  SharedModule
} from "./chunk-6RKG7DTU.js";
import "./chunk-Y74WFPEB.js";
import {
  DataAbstract,
  GlobalService,
  MatChip,
  MatChipListbox,
  MatChipRemove,
  MatFormField,
  MatInput,
  MatLabel,
  MatTab,
  MatTabGroup,
  StoreAbstract
} from "./chunk-XCS5X75A.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  MatButton,
  MatIcon,
  MatIconButton,
  MatOption,
  MatRipple,
  NgControlStatus,
  NgModel,
  Router,
  RouterModule
} from "./chunk-FDZZSR5M.js";
import "./chunk-KGFIP23Z.js";
import {
  ElementRef,
  EventEmitter,
  NgClass,
  ViewContainerRef,
  filter,
  inject,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-A2LCPREI.js";

// Modules/pages/chatflow/page/chatflow-detail/chatflow-detail.component.ts
var _c0 = ["container"];
var _ChatflowDetailComponent = class _ChatflowDetailComponent extends StoreAbstract {
  ngOnInit() {
    this.logicService.nodeDetailContainer = this.container;
  }
};
_ChatflowDetailComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatflowDetailComponent_BaseFactory;
  return function ChatflowDetailComponent_Factory(t) {
    return (\u0275ChatflowDetailComponent_BaseFactory || (\u0275ChatflowDetailComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatflowDetailComponent)))(t || _ChatflowDetailComponent);
  };
})();
_ChatflowDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowDetailComponent, selectors: [["app-chatflow-detail"]], viewQuery: function ChatflowDetailComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 0, consts: [[2, "display", "flex", "justify-content", "flex-end"], ["mat-icon-button", "", 3, "click"], ["container", ""]], template: function ChatflowDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function ChatflowDetailComponent_Template_button_click_1_listener() {
      return ctx.logicService.nodeDetailDrawer.close();
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainer(4, null, 2);
  }
}, dependencies: [MatIconButton, MatIcon], styles: ["\n\n/*# sourceMappingURL=chatflow-detail.component.css.map */"] });
var ChatflowDetailComponent = _ChatflowDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowDetailComponent, { className: "ChatflowDetailComponent", filePath: "Modules\\pages\\chatflow\\page\\chatflow-detail\\chatflow-detail.component.ts", lineNumber: 9 });
})();

// Modules/core/classes/node-detail.abstract.ts
var NodeDetailAbstract = class extends DataAbstract {
  addResult(choice) {
    if (choice) {
      this.currentData.result = [...this.currentData.result, choice];
      this.logicService.setChatflow(this.logicService.selectedLogic, {
        id: this.data.id,
        node: {
          category: this.data.node.category,
          result: this.currentData.result,
          isAwait: this.data.node.isAwait
        }
      });
      this.deliver("save", {
        id: this.data.id,
        node: {
          category: this.data.node.category,
          result: this.currentData.result,
          isAwait: this.data.node.isAwait
        }
      });
    }
    this.inputElement.nativeElement.value = "";
  }
  removeResult(index) {
    if (index >= 0) {
      this.currentData.result = this.currentData.result.filter((_, i) => i !== index);
      this.logicService.setChatflow(this.logicService.selectedLogic, {
        id: this.data.id,
        node: {
          category: this.data.node.category,
          result: this.currentData.result,
          isAwait: this.data.node.isAwait
        }
      });
      this.deliver("save", {
        id: this.data.id,
        node: {
          category: this.data.node.category,
          result: this.currentData.result,
          isAwait: this.data.node.isAwait
        }
      });
    }
  }
  onNodeCategoryChange(event) {
    this.currentData.category = event;
    this.logicService.setChatflow(this.logicService.selectedLogic, {
      id: this.data.id,
      node: {
        category: event,
        result: this.data.node.result,
        isAwait: this.data.node.isAwait
      }
    });
    this.deliver("save", {
      id: this.data.id,
      node: {
        category: event,
        result: this.data.node.result,
        isAwait: this.data.node.isAwait
      }
    });
  }
  onResultChange(event) {
    this.logicService.setChatflow(this.logicService.selectedLogic, {
      id: this.data.id,
      node: {
        category: this.data.node.category,
        result: [event],
        isAwait: this.data.node.isAwait
      }
    });
    this.deliver("save", {
      id: this.data.id,
      node: {
        category: this.data.node.category,
        result: [event],
        isAwait: this.data.node.isAwait
      }
    });
  }
  onIsAwaitChange(event) {
    this.currentData.isAwait = event;
    this.logicService.setChatflow(this.logicService.selectedLogic, {
      id: this.data.id,
      node: {
        category: this.data.node.category,
        result: this.data.node.result,
        isAwait: event
      }
    });
    this.deliver("save", {
      id: this.data.id,
      node: {
        category: this.data.node.category,
        result: this.data.node.result,
        isAwait: event
      }
    });
  }
  onIndexChange(event) {
    this.logicService.setChatflow(this.logicService.selectedLogic, {
      id: this.data.id,
      index: event
    });
    this.deliver("save", {
      id: this.data.id,
      index: event
    });
  }
};

// Modules/pages/chatflow/components/details/input/input.component.ts
var _InputDetailComponent = class _InputDetailComponent extends NodeDetailAbstract {
  constructor() {
    super(...arguments);
    this.received = new EventEmitter();
  }
  dataInit() {
    this.type = this.data.type;
    this.currentData = this.data.node;
    this.index = this.data.index;
  }
};
_InputDetailComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275InputDetailComponent_BaseFactory;
  return function InputDetailComponent_Factory(t) {
    return (\u0275InputDetailComponent_BaseFactory || (\u0275InputDetailComponent_BaseFactory = \u0275\u0275getInheritedFactory(_InputDetailComponent)))(t || _InputDetailComponent);
  };
})();
_InputDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputDetailComponent, selectors: [["app-input"]], outputs: { received: "received" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 3, consts: [["matInput", "", "placeholder", "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "chatflow \uC21C\uC11C\uB97C \uC22B\uC790\uB85C \uC785\uB825\uD558\uC138\uC694.", 3, "ngModel", "ngModelChange"]], template: function InputDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field")(3, "mat-label");
    \u0275\u0275text(4, "\uBC1C\uD654\uBB38 \uCD94\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 0);
    \u0275\u0275listener("ngModelChange", function InputDetailComponent_Template_input_ngModelChange_5_listener($event) {
      return ctx.onResultChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field")(7, "mat-label");
    \u0275\u0275text(8, "Index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 1);
    \u0275\u0275listener("ngModelChange", function InputDetailComponent_Template_input_ngModelChange_9_listener($event) {
      return ctx.onIndexChange($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.currentData.result);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.index);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=input.component.css.map */"] });
var InputDetailComponent = _InputDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputDetailComponent, { className: "InputDetailComponent", filePath: "Modules\\pages\\chatflow\\components\\details\\input\\input.component.ts", lineNumber: 9 });
})();

// Modules/pages/chatflow/components/details/list-box/list-box.component.ts
var _c02 = ["choiceInput"];
function ListBoxComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 4);
    \u0275\u0275listener("removed", function ListBoxComponent_For_9_Template_mat_chip_removed_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r8);
      const $index_r3 = restoredCtx.$index;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.removeResult($index_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 5);
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r2, " ");
  }
}
var _ListBoxComponent = class _ListBoxComponent extends NodeDetailAbstract {
  constructor() {
    super(...arguments);
    this.received = new EventEmitter();
  }
  dataInit() {
    this.type = this.data.type;
    this.currentData = this.data.node;
    this.index = this.data.index;
    this.inputElement = this.choiceInput;
  }
};
_ListBoxComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ListBoxComponent_BaseFactory;
  return function ListBoxComponent_Factory(t) {
    return (\u0275ListBoxComponent_BaseFactory || (\u0275ListBoxComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ListBoxComponent)))(t || _ListBoxComponent);
  };
})();
_ListBoxComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListBoxComponent, selectors: [["app-list-box"]], viewQuery: function ListBoxComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.choiceInput = _t.first);
  }
}, outputs: { received: "received" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 2, consts: [["appearance", "fill"], ["matInput", "", "placeholder", "\uC635\uC158 \uC785\uB825 \uD6C4 \uC5D4\uD130", 3, "keyup.enter"], ["choiceInput", ""], ["matInput", "", "placeholder", "chatflow \uC21C\uC11C\uB97C \uC22B\uC790\uB85C \uC785\uB825\uD558\uC138\uC694.", 3, "ngModel", "ngModelChange"], [3, "removed"], ["matChipRemove", ""]], template: function ListBoxComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 0)(3, "mat-label");
    \u0275\u0275text(4, "\uC120\uD0DD\uC9C0 \uCD94\uAC00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 1, 2);
    \u0275\u0275listener("keyup.enter", function ListBoxComponent_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r9);
      const _r0 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx.addResult(_r0.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-chip-listbox");
    \u0275\u0275repeaterCreate(8, ListBoxComponent_For_9_Template, 4, 1, "mat-chip", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label");
    \u0275\u0275text(12, "Index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 3);
    \u0275\u0275listener("ngModelChange", function ListBoxComponent_Template_input_ngModelChange_13_listener($event) {
      return ctx.onIndexChange($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.type);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx.currentData.result);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.index);
  }
}, dependencies: [MatIcon, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput, MatChip, MatChipListbox, MatChipRemove], styles: ["\n\nmat-chip-listbox[_ngcontent-%COMP%], mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=list-box.component.css.map */"] });
var ListBoxComponent = _ListBoxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListBoxComponent, { className: "ListBoxComponent", filePath: "Modules\\pages\\chatflow\\components\\details\\list-box\\list-box.component.ts", lineNumber: 9 });
})();

// Modules/pages/chatflow/components/details/select/select.component.ts
function SelectComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const behavior_r2 = ctx.$implicit;
    \u0275\u0275property("value", behavior_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", behavior_r2, " ");
  }
}
function SelectComponent_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 4);
    \u0275\u0275listener("ngModelChange", function SelectComponent_Conditional_8_Conditional_2_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r8.onResultChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r7.type, " Type Data");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r7.currentData.result);
  }
}
function SelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 3);
    \u0275\u0275listener("ngModelChange", function SelectComponent_Conditional_8_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.onIsAwaitChange($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, SelectComponent_Conditional_8_Conditional_2_Template, 4, 2, "mat-form-field");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.currentData.isAwait);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentData.isAwait ? "\uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD504\uB86C\uD504\uD2B8 \uC791\uC131\uBC1B\uAE30" : "\uC9C0\uAE08 \uD504\uB86C\uD504\uD2B8 \uC791\uC131\uD558\uAE30", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(2, !ctx_r1.currentData.isAwait ? 2 : -1);
  }
}
var _SelectComponent = class _SelectComponent extends NodeDetailAbstract {
  constructor() {
    super(...arguments);
    this.behaviors = ["concat", "prompt", "llm", "category", "embedding"];
  }
  dataInit() {
    this.type = this.data.type;
    this.currentData = this.data.node;
    this.index = this.data.index;
  }
  onSelectChange(event) {
    this.onIsAwaitChange(true);
    this.onNodeCategoryChange(event);
    switch (event) {
      case "llm":
        this.onResultChange("\uBB38\uC11C \uC870\uD68C \uC911");
        break;
      case "category":
        this.onResultChange("\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        break;
      case "embedding":
        this.onResultChange("\uBB38\uC11C \uD559\uC2B5 \uC911");
        break;
      default:
        this.onIsAwaitChange(false);
    }
  }
};
_SelectComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectComponent_BaseFactory;
  return function SelectComponent_Factory(t) {
    return (\u0275SelectComponent_BaseFactory || (\u0275SelectComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectComponent)))(t || _SelectComponent);
  };
})();
_SelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 5, consts: [[3, "value", "valueChange"], ["matInput", "", "placeholder", "chatflow \uC21C\uC11C\uB97C \uC22B\uC790\uB85C \uC785\uB825\uD558\uC138\uC694.", 3, "ngModel", "ngModelChange"], [3, "value"], [3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "\uD504\uB86C\uD504\uD2B8\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.", 3, "ngModel", "ngModelChange"]], template: function SelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field")(3, "mat-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 0);
    \u0275\u0275listener("valueChange", function SelectComponent_Template_mat_select_valueChange_5_listener($event) {
      return ctx.onSelectChange($event);
    });
    \u0275\u0275repeaterCreate(6, SelectComponent_For_7_Template, 2, 2, "mat-option", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SelectComponent_Conditional_8_Template, 3, 3);
    \u0275\u0275elementStart(9, "mat-form-field")(10, "mat-label");
    \u0275\u0275text(11, "Index");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 1);
    \u0275\u0275listener("ngModelChange", function SelectComponent_Template_input_ngModelChange_12_listener($event) {
      return ctx.onIndexChange($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.currentData.category, " Type");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.currentData.category);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.behaviors);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, ctx.currentData.category === "prompt" ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.index);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatSelect, MatOption, MatInput, MatSlideToggle], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=select.component.css.map */"] });
var SelectComponent = _SelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "Modules\\pages\\chatflow\\components\\details\\select\\select.component.ts", lineNumber: 9 });
})();

// Modules/pages/chatflow/components/node/node.component.ts
var DetailComponentType = {
  "speak": InputDetailComponent,
  "slot": ListBoxComponent,
  "behavior": SelectComponent
};
var _NodeComponent = class _NodeComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.left = false;
    this.right = false;
    this.componentEmit = new EventEmitter();
  }
  // @Output() coordinateEmitter = new EventEmitter<any>();
  //@Output() dragNodeEmitter = new EventEmitter<any>();
  dataInit() {
    this.id = this.data.id;
    this.type = this.data.type;
    this.node = this.data.node;
    this.index = this.data.index;
    this.left = this.data.left;
    this.right = this.data.right;
  }
  ngOnInit() {
    this.subscription = this.deliver$.subscribe((d) => {
      if (d.data.id !== this.id)
        return;
      if (d.data.node)
        this.node = d.data.node;
      if (d.data.index)
        this.index = d.data.index;
      if (d.data.left)
        this.left = d.data.left;
      if (d.data.right)
        this.right = d.data.right;
    });
  }
  clickDetail() {
    this.logicService.nodeDetailDrawer.toggle();
    const data = {
      id: this.id,
      type: this.type,
      node: {
        category: this.node.category,
        result: this.node.result,
        isAwait: this.node.isAwait
      },
      index: this.index,
      left: this.left,
      right: this.right
    };
    this.logicService.nodeDetailContainer.clear();
    this.factoryService.createComponent(DetailComponentType[this.type], this.logicService.nodeDetailContainer, data);
  }
  clickDelete(event) {
    const data = this.logicService.getChatflowComponentRef(this.logicService.selectedLogic, this.id);
    this.componentEmit.emit({
      id: data.id,
      componentRef: data.componentRef
    });
  }
  stringify(obj) {
    return JSON.stringify(obj, null, 2);
  }
  ngOnDestroy() {
    console.log("nodeComponent ngOnDestroy");
    if (this.subscription)
      this.subscription.unsubscribe();
  }
};
_NodeComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275NodeComponent_BaseFactory;
  return function NodeComponent_Factory(t) {
    return (\u0275NodeComponent_BaseFactory || (\u0275NodeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NodeComponent)))(t || _NodeComponent);
  };
})();
_NodeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NodeComponent, selectors: [["app-node"]], outputs: { componentEmit: "componentEmit" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 8, consts: [["cdkDrag", "", 2, "display", "flex", "align-items", "center", "justify-content", "center", 3, "cdkDragDisabled"], [1, "node-box", 3, "click"], ["mat-button", "", 1, "node-button", 3, "matMenuTriggerFor", "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function NodeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275listener("click", function NodeComponent_Template_div_click_1_listener() {
      return ctx.clickDetail();
    });
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", function NodeComponent_Template_button_click_2_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 3)(7, "button", 4);
    \u0275\u0275listener("click", function NodeComponent_Template_button_click_7_listener($event) {
      return ctx.clickDelete($event);
    });
    \u0275\u0275text(8, "\uC0AD\uC81C");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const _r0 = \u0275\u0275reference(6);
    \u0275\u0275property("cdkDragDisabled", ctx.layoutService.isDragDisable);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", _r0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.stringify(ctx.node));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.index);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("left: ", ctx.left, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("right: ", ctx.right, "");
  }
}, dependencies: [MatButton, MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, CdkDrag], styles: ["\n\n.node-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.node-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n/*# sourceMappingURL=node.component.css.map */"] });
var NodeComponent = _NodeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NodeComponent, { className: "NodeComponent", filePath: "Modules\\pages\\chatflow\\components\\node\\node.component.ts", lineNumber: 20 });
})();

// Modules/pages/chatflow/page/chatflow-zoom/chatflow-zoom.component.ts
var _c03 = ["canvas"];
var _c1 = ["container"];
var _ChatflowZoomComponent = class _ChatflowZoomComponent extends StoreAbstract {
  constructor() {
    super(...arguments);
    this.sendContainer = new EventEmitter();
  }
  ngOnInit() {
    this.logicService.chatflow[this.tabIndex] = this.container;
    this.sendContainer.emit({
      tabIndex: this.tabIndex,
      container: this.container
    });
    this.subscribtion = this.node$.pipe(filter((d) => !!d.type && this.logicService.currentTabIndex === this.tabIndex)).subscribe((d) => {
      console.log("this.node$^^", d);
      this.component = this.factoryService.createComponent(NodeComponent, this.logicService.chatflowContainer[this.tabIndex], d);
      this.logicService.setChatflow(this.logicService.selectedLogic, d);
      this.logicService.setChatflowComponentRef(this.logicService.selectedLogic, {
        id: d.id,
        componentRef: this.component
      });
      const destroySubscription = this.component.instance.componentEmit.subscribe((d2) => {
        this.factoryService.destroyComponent(d2.componentRef);
        this.logicService.chatflowComponentRefs[this.logicService.selectedLogic] = this.logicService.getChatflowComponentRefLogic(this.logicService.selectedLogic).filter((node) => node.id !== d2.id);
        this.logicService.chatflow[this.logicService.selectedLogic] = this.logicService.getChatflow(this.logicService.selectedLogic).filter((node) => node.id !== d2.id);
        this.logicService.setLogic(this.logicService.selectedLogic);
        destroySubscription.unsubscribe();
      });
    });
  }
  ngOnDestroy() {
    console.log("zoomComponent ngOnDestroy", this.subscribtion);
    if (this.subscribtion)
      this.subscribtion.unsubscribe();
    this.clearNode();
  }
};
_ChatflowZoomComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatflowZoomComponent_BaseFactory;
  return function ChatflowZoomComponent_Factory(t) {
    return (\u0275ChatflowZoomComponent_BaseFactory || (\u0275ChatflowZoomComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatflowZoomComponent)))(t || _ChatflowZoomComponent);
  };
})();
_ChatflowZoomComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowZoomComponent, selectors: [["app-chatflow-zoom"]], viewQuery: function ChatflowZoomComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 7);
    \u0275\u0275viewQuery(_c1, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, inputs: { tabIndex: "tabIndex" }, outputs: { sendContainer: "sendContainer" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 4, consts: [[2, "position", "absolute", "width", "100%"], ["canvas", ""], [2, "background-color", "transparent", "width", "100%", "position", "absolute"], ["container", ""]], template: function ChatflowZoomComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 0, 1);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275elementContainer(3, null, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.layoutService.getChatflowContainerHeight());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.layoutService.getChatflowContainerHeight());
  }
}, styles: ["\n\n/*# sourceMappingURL=chatflow-zoom.component.css.map */"] });
var ChatflowZoomComponent = _ChatflowZoomComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowZoomComponent, { className: "ChatflowZoomComponent", filePath: "Modules\\pages\\chatflow\\page\\chatflow-zoom\\chatflow-zoom.component.ts", lineNumber: 16 });
})();

// Modules/pages/chatflow/components/chatflow-header/chatflow-header.component.ts
function ChatflowHeaderComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2, "Logic Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 0);
    \u0275\u0275listener("ngModelChange", function ChatflowHeaderComponent_Conditional_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNameChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.createNode($event, ctx_r4.speakType));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.createNode($event, ctx_r5.slotType));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.createNode($event, ctx_r6.behaviorType));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.createNode($event, ctx_r7.inputType));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.createNode($event, ctx_r8.chatBoxType));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.createNode($event, ctx_r9.buttonType));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 2);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_1_Template_button_click_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.saveLogic($event));
    });
    \u0275\u0275text(17, "\uB85C\uC9C1 \uC800\uC7A5");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.logicService.selectedLogic);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.speakType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.slotType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.behaviorType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.inputType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.chatBoxType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.buttonType);
  }
}
function ChatflowHeaderComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const logic_r12 = ctx.$implicit;
    \u0275\u0275property("value", logic_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(logic_r12);
  }
}
function ChatflowHeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label");
    \u0275\u0275text(2, "Logic Options");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 3);
    \u0275\u0275listener("valueChange", function ChatflowHeaderComponent_Conditional_2_Template_mat_select_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.onChatflowChange($event));
    });
    \u0275\u0275elementStart(4, "mat-option");
    \u0275\u0275text(5, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, ChatflowHeaderComponent_Conditional_2_For_7_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_8_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.editNode($event, ctx_r19.speakType));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_10_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r20 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r20.editNode($event, ctx_r20.slotType));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_12_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.editNode($event, ctx_r21.behaviorType));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_14_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r22 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r22.createNode($event, ctx_r22.inputType));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_16_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r23 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r23.createNode($event, ctx_r23.chatBoxType));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 1);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_18_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r24 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r24.createNode($event, ctx_r24.buttonType));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 2);
    \u0275\u0275listener("click", function ChatflowHeaderComponent_Conditional_2_Template_button_click_20_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r25 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r25.updateLogic($event));
    });
    \u0275\u0275text(21, "\uB85C\uC9C1 \uC800\uC7A5");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.logicService.selectedLogic);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.logicService.logics);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.speakType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.slotType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.behaviorType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inputType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.chatBoxType);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.logicService.selectedLogic ? false : true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.buttonType);
  }
}
var _ChatflowHeaderComponent = class _ChatflowHeaderComponent extends StoreAbstract {
  constructor() {
    super(...arguments);
    this.speakType = "speak";
    this.slotType = "slot";
    this.behaviorType = "behavior";
    this.inputType = "input";
    this.chatBoxType = "chatBox";
    this.buttonType = "button";
  }
  /**
   * 노드 추가 함수
   *  - 생성의 경우, id를 그냥 가져가면 됨
   *  - 수정의 경우, id를 현재 노드의 id보다 하나 크게
   */
  createNode(event, nodeType) {
    const chatflow = this.logicService.getChatflow(this.logicService.selectedLogic);
    let index = 0;
    if (chatflow)
      index = this.logicService.getAvailableIndex(chatflow);
    const node = {
      id: this.logicService.getGUID(),
      type: nodeType,
      node: {
        category: nodeType,
        result: [],
        isAwait: false
      },
      index,
      left: false,
      right: false
    };
    this.addNode(node);
  }
  editNode(event, nodeType) {
    const chatflow = this.logicService.getChatflow(this.logicService.selectedLogic);
    const index = this.logicService.getAvailableIndex(chatflow);
    const node = {
      id: this.logicService.getGUID(),
      type: nodeType,
      node: {
        category: nodeType,
        result: [],
        isAwait: false
      },
      index,
      left: false,
      right: false
    };
    this.addNode(node);
  }
  onNameChange(event) {
    this.logicService.selectedLogic = event;
  }
  onChatflowChange(event) {
    this.logicService.selectedLogic = event;
    this.logicService.chatflowContainer[this.logicService.currentTabIndex].clear();
    const chatflow = this.logicService.getLogicValues(event);
    if (!chatflow)
      return;
    chatflow.forEach((node, index) => {
      this.addNode(node);
    });
  }
  saveLogic(event) {
    if (!this.logicService.selectedLogic)
      return;
    this.logicService.logics.push(this.logicService.selectedLogic);
    this.logicService.setLogic(this.logicService.selectedLogic);
    this.logicService.chatflowContainer[this.logicService.currentTabIndex].clear();
    this.logicService.selectedLogic = "";
  }
  updateLogic(event) {
    if (!this.logicService.selectedLogic)
      return;
    this.logicService.setLogic(this.logicService.selectedLogic);
  }
};
_ChatflowHeaderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatflowHeaderComponent_BaseFactory;
  return function ChatflowHeaderComponent_Factory(t) {
    return (\u0275ChatflowHeaderComponent_BaseFactory || (\u0275ChatflowHeaderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatflowHeaderComponent)))(t || _ChatflowHeaderComponent);
  };
})();
_ChatflowHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowHeaderComponent, selectors: [["app-chatflow-header"]], inputs: { tabIndex: "tabIndex" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["matInput", "", "placeholder", "Logic \uC774\uB984\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "button-margin", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 1, "button-margin", 3, "click"], [3, "value", "valueChange"], [3, "value"]], template: function ChatflowHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ChatflowHeaderComponent_Conditional_1_Template, 18, 13)(2, ChatflowHeaderComponent_Conditional_2_Template, 22, 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.tabIndex === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx.tabIndex === 1 ? 2 : -1);
  }
}, dependencies: [MatButton, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatSelect, MatOption, MatInput], styles: ["\n\n.button-margin[_ngcontent-%COMP%] {\n  margin: 0 2.5px;\n}\n/*# sourceMappingURL=chatflow-header.component.css.map */"] });
var ChatflowHeaderComponent = _ChatflowHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowHeaderComponent, { className: "ChatflowHeaderComponent", filePath: "Modules\\pages\\chatflow\\components\\chatflow-header\\chatflow-header.component.ts", lineNumber: 11 });
})();

// Modules/pages/chatflow/chatflow.component.ts
var _c04 = ["detailDrawer"];
var _ChatflowComponent = class _ChatflowComponent extends StoreAbstract {
  ngOnInit() {
    super.OnResizeRedux();
    this.logicService.nodeDetailDrawer = this.detailDrawer;
  }
  onTabIndexChange(event) {
    this.logicService.currentTabIndex = event;
    this.logicService.chatflowContainer.forEach((container) => {
      container.clear();
    });
    this.logicService.selectedLogic = "";
  }
  receivedContainer(event) {
    this.logicService.chatflowContainer[event.tabIndex] = event.container;
  }
  ngOnDestroy() {
    console.log("ChatflowComponent ngOnDestroy");
    this.logicService.selectedLogic = "";
    this.logicService.chatflowComponentRefs = {
      "main": []
    };
  }
};
_ChatflowComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ChatflowComponent_BaseFactory;
  return function ChatflowComponent_Factory(t) {
    return (\u0275ChatflowComponent_BaseFactory || (\u0275ChatflowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ChatflowComponent)))(t || _ChatflowComponent);
  };
})();
_ChatflowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatflowComponent, selectors: [["app-chatflow"]], viewQuery: function ChatflowComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.detailDrawer = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 12, consts: [["hasBackdrop", "false", 1, "example-container"], ["mode", "over", "position", "end"], ["detailDrawer", ""], [3, "selectedIndexChange"], ["label", "\uC0DD\uC131"], [3, "tabIndex"], [3, "tabIndex", "sendContainer"], ["label", "\uC218\uC815"]], template: function ChatflowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2);
    \u0275\u0275element(3, "app-chatflow-detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-drawer-content")(5, "mat-tab-group", 3);
    \u0275\u0275listener("selectedIndexChange", function ChatflowComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
      return ctx.onTabIndexChange($event);
    });
    \u0275\u0275elementStart(6, "mat-tab", 4)(7, "div");
    \u0275\u0275element(8, "app-chatflow-header", 5);
    \u0275\u0275elementStart(9, "app-chatflow-zoom", 6);
    \u0275\u0275listener("sendContainer", function ChatflowComponent_Template_app_chatflow_zoom_sendContainer_9_listener($event) {
      return ctx.receivedContainer($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-tab", 7)(11, "div");
    \u0275\u0275element(12, "app-chatflow-header", 5);
    \u0275\u0275elementStart(13, "app-chatflow-zoom", 6);
    \u0275\u0275listener("sendContainer", function ChatflowComponent_Template_app_chatflow_zoom_sendContainer_13_listener($event) {
      return ctx.receivedContainer($event);
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 300, "px");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("height", ctx.layoutService.getChatflowTabHeight());
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", 0);
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", 0);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.layoutService.getChatflowTabHeight());
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", 1);
    \u0275\u0275advance();
    \u0275\u0275property("tabIndex", 1);
  }
}, dependencies: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatTab, MatTabGroup, ChatflowDetailComponent, ChatflowZoomComponent, ChatflowHeaderComponent], styles: ["\n\n/*# sourceMappingURL=chatflow.component.css.map */"] });
var ChatflowComponent = _ChatflowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatflowComponent, { className: "ChatflowComponent", filePath: "Modules\\pages\\chatflow\\chatflow.component.ts", lineNumber: 17 });
})();

// Modules/pages/chatflow/chatflow-routing.module.ts
var routes = [
  {
    path: "",
    component: ChatflowComponent
  }
];
var _ChatflowRoutingModule = class _ChatflowRoutingModule {
};
_ChatflowRoutingModule.\u0275fac = function ChatflowRoutingModule_Factory(t) {
  return new (t || _ChatflowRoutingModule)();
};
_ChatflowRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatflowRoutingModule });
_ChatflowRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ChatflowRoutingModule = _ChatflowRoutingModule;

// Modules/pages/chatflow/components/spot/spot.component.ts
var _SpotComponent = class _SpotComponent {
};
_SpotComponent.\u0275fac = function SpotComponent_Factory(t) {
  return new (t || _SpotComponent)();
};
_SpotComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpotComponent, selectors: [["app-spot"]], decls: 2, vars: 0, consts: [["width", "10", "height", "10", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "5", "cy", "5", "r", "5", "fill", "black"]], template: function SpotComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 0);
    \u0275\u0275element(1, "circle", 1);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=spot.component.css.map */"] });
var SpotComponent = _SpotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpotComponent, { className: "SpotComponent", filePath: "Modules\\pages\\chatflow\\components\\spot\\spot.component.ts", lineNumber: 8 });
})();

// Modules/pages/chatflow/directives/left-spot.directive.ts
var _LeftSpotDirective = class _LeftSpotDirective {
  constructor(el, globalService) {
    this.el = el;
    this.globalService = globalService;
    this.leftCoordinateEmitter = new EventEmitter();
    this.boundDrag = this.drag.bind(this);
    this.boundDragEnd = this.dragEnd.bind(this);
  }
  dragStart(event) {
    event.preventDefault();
    this.globalService.layoutService.isShow = true;
    this.globalService.layoutService.isDragDisable = true;
    document.addEventListener("mousemove", this.boundDrag);
    document.addEventListener("mouseup", this.boundDragEnd);
    this.leftCoordinateEmitter.emit({
      position: "left-mousedown",
      x: this.el.nativeElement.getBoundingClientRect().x,
      y: this.el.nativeElement.getBoundingClientRect().y,
      left: true,
      right: false
    });
  }
  mouseUp(event) {
    this.leftCoordinateEmitter.emit({
      position: "left-mouseup",
      x: this.el.nativeElement.getBoundingClientRect().x,
      y: this.el.nativeElement.getBoundingClientRect().y,
      left: true,
      right: false
    });
  }
  drag(event) {
    this.globalService.layoutService.isShow = true;
    this.globalService.layoutService.isDragDisable = true;
  }
  dragEnd(event) {
    document.removeEventListener("mousemove", this.boundDrag);
    document.removeEventListener("mouseup", this.boundDragEnd);
    this.globalService.layoutService.isDragDisable = false;
    this.globalService.layoutService.isShow = false;
  }
};
_LeftSpotDirective.\u0275fac = function LeftSpotDirective_Factory(t) {
  return new (t || _LeftSpotDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(GlobalService));
};
_LeftSpotDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _LeftSpotDirective, selectors: [["", "appLeftSpot", ""]], hostBindings: function LeftSpotDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function LeftSpotDirective_mousedown_HostBindingHandler($event) {
      return ctx.dragStart($event);
    })("mouseup", function LeftSpotDirective_mouseup_HostBindingHandler($event) {
      return ctx.mouseUp($event);
    });
  }
}, outputs: { leftCoordinateEmitter: "leftCoordinateEmitter" } });
var LeftSpotDirective = _LeftSpotDirective;

// Modules/pages/chatflow/directives/node.directive.ts
var _NodeDirective = class _NodeDirective {
  constructor(el, globalService) {
    this.el = el;
    this.globalService = globalService;
    this.moveCoordinateEmitter = new EventEmitter();
    this.boundDrag = this.drag.bind(this);
    this.boundDragEnd = this.dragEnd.bind(this);
  }
  mouseEnter() {
    this.globalService.layoutService.isShow = true;
  }
  mouseLeave() {
    this.globalService.layoutService.isShow = false;
  }
  dragStart(event) {
    event.preventDefault();
    if (this.globalService.layoutService.isDragDisable)
      return;
    document.addEventListener("mousemove", this.boundDrag);
    document.addEventListener("mouseup", this.boundDragEnd);
  }
  drag(event) {
    this.moveCoordinateEmitter.emit({
      left: {
        x: this.el.nativeElement.children[0].getBoundingClientRect().x,
        y: this.el.nativeElement.children[0].getBoundingClientRect().y
      },
      right: {
        x: this.el.nativeElement.children[2].getBoundingClientRect().x,
        y: this.el.nativeElement.children[2].getBoundingClientRect().y
      }
    });
  }
  dragEnd(event) {
    document.removeEventListener("mousemove", this.boundDrag);
    document.removeEventListener("mouseup", this.boundDragEnd);
  }
};
_NodeDirective.\u0275fac = function NodeDirective_Factory(t) {
  return new (t || _NodeDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(GlobalService));
};
_NodeDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NodeDirective, selectors: [["", "appNode", ""]], contentQueries: function NodeDirective_ContentQueries(rf, ctx, dirIndex) {
  if (rf & 1) {
    \u0275\u0275contentQuery(dirIndex, SpotComponent, 5);
    \u0275\u0275contentQuery(dirIndex, SpotComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.leftSpot = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.right = _t.first);
  }
}, hostBindings: function NodeDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mouseenter", function NodeDirective_mouseenter_HostBindingHandler($event) {
      return ctx.mouseEnter($event);
    })("mouseleave", function NodeDirective_mouseleave_HostBindingHandler($event) {
      return ctx.mouseLeave($event);
    })("mousedown", function NodeDirective_mousedown_HostBindingHandler($event) {
      return ctx.dragStart($event);
    });
  }
}, outputs: { moveCoordinateEmitter: "moveCoordinateEmitter" } });
var NodeDirective = _NodeDirective;

// Modules/pages/chatflow/directives/right-spot.directive.ts
var _RightSpotDirective = class _RightSpotDirective {
  constructor(el, globalService) {
    this.el = el;
    this.globalService = globalService;
    this.rightCoordinateEmitter = new EventEmitter();
    this.boundDrag = this.drag.bind(this);
    this.boundDragEnd = this.dragEnd.bind(this);
  }
  dragStart(event) {
    event.preventDefault();
    this.globalService.layoutService.isShow = true;
    this.globalService.layoutService.isDragDisable = true;
    document.addEventListener("mousemove", this.boundDrag);
    document.addEventListener("mouseup", this.boundDragEnd);
    this.rightCoordinateEmitter.emit({
      position: "right-mousedown",
      x: this.el.nativeElement.getBoundingClientRect().x,
      y: this.el.nativeElement.getBoundingClientRect().y,
      left: false,
      right: true
    });
  }
  mouseUp(event) {
    this.rightCoordinateEmitter.emit({
      position: "right-mouseup",
      x: this.el.nativeElement.getBoundingClientRect().x,
      y: this.el.nativeElement.getBoundingClientRect().y,
      left: false,
      right: true
    });
  }
  drag(event) {
    this.globalService.layoutService.isShow = true;
    this.globalService.layoutService.isDragDisable = true;
  }
  dragEnd(event) {
    document.removeEventListener("mousemove", this.boundDrag);
    document.removeEventListener("mouseup", this.boundDragEnd);
    this.globalService.layoutService.isDragDisable = false;
    this.globalService.layoutService.isShow = false;
  }
};
_RightSpotDirective.\u0275fac = function RightSpotDirective_Factory(t) {
  return new (t || _RightSpotDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(GlobalService));
};
_RightSpotDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RightSpotDirective, selectors: [["", "appRightSpot", ""]], hostBindings: function RightSpotDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function RightSpotDirective_mousedown_HostBindingHandler($event) {
      return ctx.dragStart($event);
    })("mouseup", function RightSpotDirective_mouseup_HostBindingHandler($event) {
      return ctx.mouseUp($event);
    });
  }
}, outputs: { rightCoordinateEmitter: "rightCoordinateEmitter" } });
var RightSpotDirective = _RightSpotDirective;

// Modules/pages/chatflow/components/atom/list-item/list-item.component.ts
var _c05 = ["menu"];
var _c12 = (a0, a1, a2) => ({ "checked": a0, "base": a1, "clicked": a2 });
var _ListItemComponent = class _ListItemComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.id = "";
    this.message = "";
    this.type = "";
    this.isChecked = false;
    this.isClicked = false;
    this.historyDeleteData = {
      userIdx: this.currentUser.userData.userIdx,
      chatPageId: ""
    };
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.historyMenu = new ChatHistoryMenuData();
  }
  onClickListItem(pageId) {
    this.historyService.currentChatPageId = pageId;
    this.historyService.allhistoryList = null;
    this.historyService.pageHistoryList = null;
    this.historyService.historyMetadata = [];
    this.dalService.chatHistoryHttp.get(this.currentUser.userData.userIdx).subscribe((response) => {
      this.historyService.allhistoryList = JSON.parse(response.data);
      this.historyService.pageHistoryList = this.historyService.allhistoryList.find((page) => page.key === this.historyService.currentChatPageId);
      this.router.navigateByUrl(`/chatbot/${pageId}`);
      this.globalService.chatflow.scenario("history");
    });
  }
  onClickRight(event, id) {
    event.preventDefault();
    this.historyDeleteData = {
      userIdx: this.currentUser.userData.userIdx,
      chatPageId: id
    };
    this.menuComponent.openMenu();
  }
  // TODO: DOM에서 호출하기 떄문에 개선 필요 (중요이슈)
  getClicked(id) {
    return id === this.route.params.value.chatPageId;
  }
};
_ListItemComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ListItemComponent_BaseFactory;
  return function ListItemComponent_Factory(t) {
    return (\u0275ListItemComponent_BaseFactory || (\u0275ListItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ListItemComponent)))(t || _ListItemComponent);
  };
})();
_ListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListItemComponent, selectors: [["app-list-item"]], viewQuery: function ListItemComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuComponent = _t.first);
  }
}, inputs: { id: "id", message: "message", type: "type" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 11, consts: [["matRipple", "", 3, "id", "click", "contextmenu"], ["matListItemTitle", "", 3, "ngClass"], [3, "menuData", "neededData"], ["menu", ""]], template: function ListItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 0);
    \u0275\u0275listener("click", function ListItemComponent_Template_mat_list_item_click_0_listener() {
      return ctx.onClickListItem(ctx.id);
    })("contextmenu", function ListItemComponent_Template_mat_list_item_contextmenu_0_listener($event) {
      return ctx.onClickRight($event, ctx.id);
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(3, "app-menu", 2, 3);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", 30, "px");
    \u0275\u0275property("id", ctx.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c12, ctx.isChecked, !ctx.isChecked, ctx.getClicked(ctx.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.type === "complain" ? "\uBBFC\uC6D0 \uCC98\uB9AC" : ctx.message, " ");
    \u0275\u0275advance();
    \u0275\u0275property("menuData", ctx.historyMenu.menuData)("neededData", ctx.historyDeleteData);
  }
}, dependencies: [NgClass, MatRipple, MenuComponent, MatListItem, MatListItemTitle], styles: ["\n\n/*# sourceMappingURL=list-item.component.css.map */"] });
var ListItemComponent = _ListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListItemComponent, { className: "ListItemComponent", filePath: "Modules\\pages\\chatflow\\components\\atom\\list-item\\list-item.component.ts", lineNumber: 13 });
})();

// Modules/pages/chatflow/chatflow.module.ts
var _ChatflowModule = class _ChatflowModule {
};
_ChatflowModule.\u0275fac = function ChatflowModule_Factory(t) {
  return new (t || _ChatflowModule)();
};
_ChatflowModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ChatflowModule });
_ChatflowModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  ChatflowRoutingModule
] });
var ChatflowModule = _ChatflowModule;
export {
  ChatflowModule
};
//# sourceMappingURL=chunk-67LEPUWS.js.map
