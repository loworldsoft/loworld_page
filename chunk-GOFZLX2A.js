import {
  BottomSheetComponent,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSelect,
  SelectButtonDialogComponent,
  SharedModule
} from "./chunk-YAHTS4HN.js";
import "./chunk-JEJ25PGL.js";
import {
  DataAbstract,
  FactoryService,
  LogicSketchflowService,
  MatBottomSheet,
  MatDialog,
  MatFormField,
  MatInput,
  MatLabel,
  TextComponent
} from "./chunk-P6TI5SFJ.js";
import {
  ActivatedRoute,
  DefaultValueAccessor,
  MatIcon,
  MatIconButton,
  MatOption,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  Router,
  RouterModule
} from "./chunk-QWAJT647.js";
import "./chunk-N5CV7AUJ.js";
import {
  NgClass,
  inject,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WWQYCCAG.js";

// Modules/pages/sketchflow/classes/layout.action.ts
var LayoutAction = class {
  constructor() {
    this.dialog = inject(MatDialog);
    this.bottomSheet = inject(MatBottomSheet);
    this.logicSketchflowService = inject(LogicSketchflowService);
    this.factoryService = inject(FactoryService);
  }
  modalLayout() {
    const dialogRef = this.dialog.open(SelectButtonDialogComponent, {
      data: {
        title: "Modal Layout will pop up like this.",
        content: "",
        items: [],
        btnNo: "\uB2EB\uAE30"
      }
    });
  }
  bottomSheetLayout() {
    this.bottomSheet.open(BottomSheetComponent, {
      data: {
        title: "Bottom Sheet will pop up like this.",
        content: `Bottom Sheet Content --- Bottom Sheet Content --- Bottom Sheet Content`
      }
    });
  }
  sidenavLeftLayout() {
    this.logicSketchflowService.rowDetailContainer.clear();
    this.logicSketchflowService.rowInputComponent = null;
    this.factoryService.createComponent(TextComponent, this.logicSketchflowService.rowDetailContainer, {
      text: "Sidenav Left will pop up like this.",
      position: {
        x: 10,
        y: 10
      },
      font: {
        weight: 100,
        size: "large"
      }
    });
    this.logicSketchflowService.sketchflowDrawerPosition = "start";
    this.logicSketchflowService.sketchflowDrawer.toggle();
  }
  sidenavRightLayout() {
    this.logicSketchflowService.rowDetailContainer.clear();
    this.logicSketchflowService.rowInputComponent = null;
    this.factoryService.createComponent(TextComponent, this.logicSketchflowService.rowDetailContainer, {
      text: "Sidenav Right will pop up like this.",
      position: {
        x: 10,
        y: 10
      },
      font: {
        weight: 100,
        size: "large"
      }
    });
    this.logicSketchflowService.sketchflowDrawerPosition = "end";
    this.logicSketchflowService.sketchflowDrawer.toggle();
  }
};

// Modules/pages/sketchflow/classes/sketchflow.layout.action.ts
var SketchflowLayoutAction = class extends LayoutAction {
};

// Modules/pages/sketchflow/classes/data/sketchflow.component.const.ts
var SketchflowLayoutComponentConst = class {
  constructor() {
    this.components = [
      {
        key: "input",
        value: {
          name: "\uC785\uB825",
          data: null
        }
      },
      {
        key: "button",
        value: {
          name: "\uBC84\uD2BC",
          data: [
            {
              itemName: "",
              icon: "",
              color: "",
              scale: ""
            }
          ]
        }
      },
      {
        key: "text",
        value: {
          name: "\uAE00",
          data: ""
        }
      }
    ];
  }
  isContain(key) {
    return this.components.some((layout) => layout.key === key);
  }
};

// Modules/pages/sketchflow/components/box/box.component.ts
function BoxComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" path: ", "/" + ctx_r0.path, " ");
  }
}
function BoxComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" value: ", ctx_r1.value, " ");
  }
}
var _c0 = (a0, a1) => ({ "selected": a0, "base": a1 });
var _BoxComponent = class _BoxComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.id = "";
    this.type = "box";
    this.name = "";
    this.value = "";
    this.path = null;
    this.isSelected = false;
    this.sketchflowLayoutAction = new SketchflowLayoutAction();
    this.layoutComponentConst = new SketchflowLayoutComponentConst();
  }
  dataInit() {
    if (this.data.id)
      this.id = this.data.id;
    if (this.data.type)
      this.type = this.data.type;
    if (this.data.name)
      this.name = this.data.name;
    if (this.data.value)
      this.value = this.data.value;
    if (this.data?.size?.width) {
      this.width = this.data.size.width;
      this.maxWidth = this.layoutService.convertStringToNumber(this.data.size.width);
    }
    if (this.data?.size?.height) {
      this.height = this.data.size.height;
      this.maxHeight = this.layoutService.convertStringToNumber(this.data.size.height);
    }
    if (this.data?.position?.x)
      this.x = this.data.position.x;
    if (this.data?.position?.y)
      this.y = this.data.position.y;
    if (this.data?.cell?.colSpan)
      this.colSpan = this.data.cell.colSpan;
    if (this.data.path)
      this.path = this.data.path;
  }
  ngOnInit() {
    console.log("box component OnInit");
    this.route.queryParams.subscribe((params) => {
      const selectedId = params["boxId"];
      this.isSelected = false;
      if (this.id === selectedId)
        this.isSelected = true;
    });
  }
  onClickBox(event) {
    event.stopPropagation();
    console.log("click box");
    this.router.navigate([`/sketchflow/${this.logicSketchflowService.currentPage}`], {
      queryParams: {
        rowId: this.parentId,
        boxId: this.id
      }
    });
    const dialogRef = this.dialog.open(SelectButtonDialogComponent, {
      data: {
        title: "Select your next step",
        content: "",
        items: ["Change Detail", "Component Action"],
        btnNo: "\uB2EB\uAE30"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (d == null || d.close === false) {
        return;
      }
      if (d.data === "Change Detail") {
        this.logicSketchflowService.sketchflowDrawerPosition = "end";
        this.logicSketchflowService.sketchflowDrawer.toggle();
        const boxData = {
          id: this.id,
          type: this.type,
          name: this.name,
          value: this.value,
          size: {
            width: this.width,
            height: this.height
          },
          position: {
            x: this.x,
            y: this.y
          },
          cell: {
            colSpan: this.colSpan
          },
          path: "",
          boxs: []
        };
        if (this.logicSketchflowService.rowInputComponent == null) {
          this.logicSketchflowService.rowDetailContainer.clear();
          this.logicSketchflowService.rowInputComponent = this.factoryService.createComponent(RowInputComponent, this.logicSketchflowService.rowDetailContainer, boxData);
        }
        this.logicSketchflowService.rowInputComponent.instance.data = boxData;
        return;
      }
      if (d.data === "Component Action") {
        if (this.path == null && this.name === "") {
          return;
        }
        switch (this.name) {
          case "page":
            this.router.navigateByUrl(`/sketchflow/${this.path}`);
            break;
          case "modal":
            this.sketchflowLayoutAction.modalLayout();
            break;
          case "bottomSheet":
            this.sketchflowLayoutAction.bottomSheetLayout();
            break;
          case "sidenav-left":
            this.sketchflowLayoutAction.sidenavLeftLayout();
            break;
          case "sidenav-right":
            this.sketchflowLayoutAction.sidenavRightLayout();
            break;
        }
      }
    });
  }
  ngOnDestroy() {
    console.log("box component OnDestroy");
  }
  stringify(obj) {
    return JSON.stringify(obj, null, 2);
  }
};
_BoxComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275BoxComponent_BaseFactory;
  return function BoxComponent_Factory(t) {
    return (\u0275BoxComponent_BaseFactory || (\u0275BoxComponent_BaseFactory = \u0275\u0275getInheritedFactory(_BoxComponent)))(t || _BoxComponent);
  };
})();
_BoxComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BoxComponent, selectors: [["app-box"]], inputs: { parentId: "parentId" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 16, consts: [[1, "outer-box", 3, "id", "click"], [1, "inner-box", 3, "ngClass"]], template: function BoxComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function BoxComponent_Template_div_click_0_listener($event) {
      return ctx.onClickBox($event);
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275template(4, BoxComponent_Conditional_4_Template, 1, 1)(5, BoxComponent_Conditional_5_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.width)("height", ctx.height)("padding-left", ctx.x, "px")("padding-top", ctx.y, "px");
    \u0275\u0275property("id", ctx.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c0, ctx.isSelected, !ctx.isSelected));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" name: ", ctx.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ctx.name === "page" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx.value && ctx.layoutComponentConst.isContain(ctx.name) ? 5 : -1);
  }
}, dependencies: [NgClass], styles: ["\n\n.outer-box[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  z-index: 1;\n}\n.inner-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  background-color: pink;\n  color: black;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 3px dotted #227b4f;\n}\n.base[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=box.component.css.map */"] });
var BoxComponent = _BoxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BoxComponent, { className: "BoxComponent", filePath: "Modules\\pages\\sketchflow\\components\\box\\box.component.ts", lineNumber: 17 });
})();

// Modules/pages/sketchflow/classes/data/sketchflow.action.const.ts
var SketchflowLayoutActionConst = class {
  constructor() {
    this.actions = [
      {
        key: "modal",
        value: {
          name: "\uBAA8\uB2EC"
        }
      },
      {
        key: "bottomSheet",
        value: {
          name: "\uBC14\uD140 \uC2DC\uD2B8"
        }
      },
      {
        key: "sidenav-left",
        value: {
          name: "\uC0AC\uC774\uB4DC \uC67C\uCABD"
        }
      },
      {
        key: "sidenav-right",
        value: {
          name: "\uC0AC\uC774\uB4DC \uC624\uB978\uCABD"
        }
      },
      {
        key: "page",
        value: {
          name: "\uD398\uC774\uC9C0"
        }
      }
    ];
  }
  isContain(key) {
    return this.actions.some((layout) => layout.key === key);
  }
};

// Modules/pages/sketchflow/components/row-input/row-input.component.ts
function RowInputComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "h2");
    \u0275\u0275text(5, "Row Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 3)(7, "mat-label");
    \u0275\u0275text(8, "Row width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 4);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_0_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logicSketchflowService.onChangeRowData(ctx_r2.id, "width", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
    \u0275\u0275text(12, "Row Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 4);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.logicSketchflowService.onChangeRowData(ctx_r4.id, "height", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h2");
    \u0275\u0275text(15, "Row Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 3)(17, "mat-label");
    \u0275\u0275text(18, "X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 5);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_0_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.logicSketchflowService.onChangeRowData(ctx_r5.id, "x", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
    \u0275\u0275text(22, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 5);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.logicSketchflowService.onChangeRowData(ctx_r6.id, "y", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 2)(25, "h2");
    \u0275\u0275text(26, "Col Span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 3)(28, "mat-label");
    \u0275\u0275text(29, "Col Span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 5);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_0_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onColSpanChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r0.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.name);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.width);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.height);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r0.x);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.y);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.colSpan);
  }
}
function RowInputComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const layout_r12 = ctx.$implicit;
    \u0275\u0275property("value", layout_r12.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(layout_r12.value.name);
  }
}
function RowInputComponent_Conditional_1_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const component_r17 = ctx.$implicit;
    \u0275\u0275property("value", component_r17.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(component_r17.value.name);
  }
}
function RowInputComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 3)(3, "mat-label");
    \u0275\u0275text(4, "Box Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 11);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Conditional_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r22 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r22.logicSketchflowService.onChangeBoxData(ctx_r22.routerRowId, ctx_r22.id, "value", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r10.value);
  }
}
function RowInputComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Path");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 3)(3, "mat-label");
    \u0275\u0275text(4, "Path");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 12);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Conditional_32_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r24 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r24.logicSketchflowService.onChangeBoxData(ctx_r24.routerRowId, ctx_r24.id, "path", $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r11.path);
  }
}
function RowInputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
    \u0275\u0275text(4, "Layout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 6);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r26 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r26.name = $event);
    })("selectionChange", function RowInputComponent_Conditional_1_Template_mat_select_selectionChange_5_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r28 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r28.logicSketchflowService.onChangeBoxData(ctx_r28.routerRowId, ctx_r28.id, "name", $event.value));
    });
    \u0275\u0275repeaterCreate(6, RowInputComponent_Conditional_1_For_7_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 3)(9, "mat-label");
    \u0275\u0275text(10, "Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 6);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r29 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r29.name = $event);
    })("selectionChange", function RowInputComponent_Conditional_1_Template_mat_select_selectionChange_11_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r30 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r30.logicSketchflowService.onChangeBoxData(ctx_r30.routerRowId, ctx_r30.id, "name", $event.value));
    });
    \u0275\u0275repeaterCreate(12, RowInputComponent_Conditional_1_For_13_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 2);
    \u0275\u0275template(15, RowInputComponent_Conditional_1_Conditional_15_Template, 6, 1);
    \u0275\u0275elementStart(16, "h2");
    \u0275\u0275text(17, "Box Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 3)(19, "mat-label");
    \u0275\u0275text(20, "Row width");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 7);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r31 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r31.logicSketchflowService.onChangeBoxData(ctx_r31.routerRowId, ctx_r31.id, "width", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "h2");
    \u0275\u0275text(23, "Box Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 3)(25, "mat-label");
    \u0275\u0275text(26, "X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 8);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r32 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r32.logicSketchflowService.onChangeBoxData(ctx_r32.routerRowId, ctx_r32.id, "x", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 3)(29, "mat-label");
    \u0275\u0275text(30, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 9);
    \u0275\u0275listener("ngModelChange", function RowInputComponent_Conditional_1_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r33 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r33.logicSketchflowService.onChangeBoxData(ctx_r33.routerRowId, ctx_r33.id, "y", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, RowInputComponent_Conditional_1_Conditional_32_Template, 6, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r1.id);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sketchflowLayoutConst.actions);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.sketchflowLayoutComponentConst.components);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(15, ctx_r1.name === "text" ? 15 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.width);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.x);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.y);
    \u0275\u0275advance();
    \u0275\u0275conditional(32, ctx_r1.name === "page" ? 32 : -1);
  }
}
var _RowInputComponent = class _RowInputComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.route = inject(ActivatedRoute);
    this.id = "";
    this.type = "";
    this.name = "";
    this.value = "";
    this.boxs = [];
    this.boxComponents = [];
    this.sketchflowLayoutConst = new SketchflowLayoutActionConst();
    this.sketchflowLayoutComponentConst = new SketchflowLayoutComponentConst();
    this.initialBoxItem = {
      id: this.logicService.getGUID(),
      type: "box",
      name: "",
      value: "",
      size: {
        width: "*",
        height: ""
      },
      position: {
        x: 0,
        y: 0
      },
      cell: {
        colSpan: 0
      },
      path: "",
      boxs: []
    };
  }
  dataInit() {
    this.id = this.data.id;
    this.type = this.data.type;
    this.name = this.data.name;
    this.value = this.data.value;
    this.width = this.data.size.width;
    this.height = this.data.size.height;
    this.x = this.data.position.x;
    this.y = this.data.position.y;
    this.colSpan = this.data.cell.colSpan;
    this.path = this.data.path;
    this.boxs = [...this.data.boxs];
    this.initialBoxItem.size.height = this.height;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.routerRowId = params["rowId"];
      this.routerBoxId = params["boxId"];
    });
  }
  onColSpanChange(event) {
    const currentCount = this.boxs.length;
    const rowInstance = this.logicSketchflowService.rows.find((row) => row.instance.id === this.id)?.instance;
    if (!rowInstance)
      return;
    if (event <= 0) {
      this.boxs.forEach((box, index) => {
        rowInstance.container.remove(index);
      });
      this.boxs = [];
      this.boxComponents = [];
      this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "boxs", this.id, this.boxs);
      return;
    }
    if (event < currentCount) {
      this.boxs.slice(event).forEach((box, index) => {
        rowInstance.container.remove(event + index);
      });
      this.boxs = this.boxs.slice(0, event);
      this.boxs.forEach((box) => {
        box.size.width = this.layoutService.convertStarWidth(this.layoutService.calculateWidth(this.width, this.x), event);
      });
      this.boxComponents = this.boxComponents.slice(0, event);
      this.boxComponents.forEach((boxComponent) => boxComponent.instance.data = { size: { width: this.layoutService.convertStarWidth(this.layoutService.calculateWidth(this.width, this.x), event) } });
    } else {
      for (let i = currentCount; i < event; i++) {
        let newBox = JSON.parse(JSON.stringify(this.initialBoxItem));
        newBox.id = this.logicService.getGUID();
        newBox.size.height = this.layoutService.calculateHeight(this.height, this.y);
        newBox.size.width = this.layoutService.convertStarWidth(this.layoutService.calculateWidth(this.width, this.x), event);
        let component = this.factoryService.createComponent(BoxComponent, rowInstance.container, newBox);
        component.instance.parentId = this.id;
        this.boxs.push(component.instance.data);
        this.boxComponents.push(component);
        this.boxs.forEach((box) => box = { size: { width: newBox.size.width, height: newBox.size.height } });
        this.boxComponents.forEach((boxComponent) => boxComponent.instance.data = { size: { width: newBox.size.width } });
      }
    }
    this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "boxs", this.id, this.boxs);
    this.logicSketchflowService.onChangeRowData(this.id, "colSpan", event);
  }
};
_RowInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RowInputComponent_BaseFactory;
  return function RowInputComponent_Factory(t) {
    return (\u0275RowInputComponent_BaseFactory || (\u0275RowInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RowInputComponent)))(t || _RowInputComponent);
  };
})();
_RowInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RowInputComponent, selectors: [["app-row-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "mg-10", 3, "id"], [1, "mg-10", 3, "id"], [1, "mg-10"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "selectionChange"], ["matInput", "", "name", "width", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "x", "type", "number", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "y", "type", "number", 3, "ngModel", "ngModelChange"], [3, "value"], ["matInput", "", "name", "value", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "path", 3, "ngModel", "ngModelChange"]], template: function RowInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RowInputComponent_Conditional_0_Template, 31, 7, "div", 0)(1, RowInputComponent_Conditional_1_Template, 33, 8, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(0, ctx.type === "row" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.type === "box" ? 1 : -1);
  }
}, dependencies: [DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatSelect, MatOption, MatInput], styles: ["\n\n.mg-10[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=row-input.component.css.map */"] });
var RowInputComponent = _RowInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RowInputComponent, { className: "RowInputComponent", filePath: "Modules\\pages\\sketchflow\\components\\row-input\\row-input.component.ts", lineNumber: 14 });
})();

// Modules/pages/sketchflow/components/row/row.component.ts
var _c02 = (a0, a1) => ({ "selected": a0, "base": a1 });
var _RowComponent = class _RowComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.id = "";
    this.type = "row";
    this.name = "";
    this.value = "";
    this.boxs = [];
    this.boxComponents = [];
    this.isSelected = false;
  }
  dataInit() {
    if (this.data.id)
      this.id = this.data.id;
    if (this.data.type)
      this.type = this.data.type;
    if (this.data.name)
      this.name = this.data.name;
    if (this.data.value)
      this.value = this.data.value;
    if (this.data?.size?.width)
      this.width = this.data.size.width;
    if (this.data?.size?.height)
      this.height = this.data.size.height;
    if (this.data?.position?.x)
      this.x = this.data.position.x;
    if (this.data?.position?.y)
      this.y = this.data.position.y;
    if (this.data?.boxs)
      this.boxs = [...this.data.boxs];
    if (this.data?.cell?.colSpan)
      this.colSpan = this.data.cell.colSpan;
  }
  ngOnInit() {
    console.log("row component OnInit");
    this.route.queryParams.subscribe((params) => {
      const selectedId = params["rowId"];
      const boxId = params["boxId"];
      if (boxId) {
        this.isSelected = false;
        return;
      }
      this.isSelected = false;
      if (this.id === selectedId)
        this.isSelected = true;
    });
    const rowInstance = this.logicSketchflowService.rows.find((row) => row.instance.id === this.id)?.instance;
    if (!rowInstance)
      return;
    if (this.boxs.isEmpty())
      return;
    this.boxComponents = [];
    this.boxs.forEach((box, index) => {
      box.size.width = this.layoutService.convertStarWidth(this.layoutService.calculateWidth(this.width, this.x), this.colSpan);
      this.component = this.factoryService.createComponent(BoxComponent, rowInstance.container, box);
      this.component.instance.parentId = this.id;
      this.boxComponents.push(this.component);
    });
  }
  onClickDetail() {
    console.log("click row");
    this.logicSketchflowService.sketchflowDrawerPosition = "end";
    this.logicSketchflowService.sketchflowDrawer.toggle();
    this.router.navigate([`/sketchflow/${this.logicSketchflowService.currentPage}`], {
      queryParams: {
        rowId: this.id
      }
    });
    const rowData = {
      id: this.id,
      type: this.type,
      name: this.name,
      value: this.value,
      size: {
        width: this.width,
        height: this.height
      },
      position: {
        x: this.x,
        y: this.y
      },
      cell: {
        colSpan: this.colSpan
      },
      path: "",
      boxs: this.boxs
    };
    if (this.logicSketchflowService.rowInputComponent == null) {
      this.logicSketchflowService.rowDetailContainer.clear();
      this.logicSketchflowService.rowInputComponent = this.factoryService.createComponent(RowInputComponent, this.logicSketchflowService.rowDetailContainer, rowData);
    }
    this.logicSketchflowService.rowInputComponent.instance.data = rowData;
  }
  ngOnDestroy() {
    console.log("row component OnDestroy");
    const index = this.logicSketchflowService.rows.findIndex((ref) => ref.instance.id === this.id);
    if (index !== -1) {
      this.logicSketchflowService.rows.splice(index, 1);
    }
  }
};
_RowComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RowComponent_BaseFactory;
  return function RowComponent_Factory(t) {
    return (\u0275RowComponent_BaseFactory || (\u0275RowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RowComponent)))(t || _RowComponent);
  };
})();
_RowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RowComponent, selectors: [["app-row"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 13, consts: [[1, "outer-box", 3, "id", "click"], [1, "flex-row", "inner-box", 3, "ngClass"], ["container", ""]], template: function RowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function RowComponent_Template_div_click_0_listener() {
      return ctx.onClickDetail();
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275elementContainer(2, null, 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("width", ctx.width)("height", ctx.height)("padding-left", ctx.x, "px")("padding-top", ctx.y, "px");
    \u0275\u0275property("id", ctx.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c02, ctx.isSelected, !ctx.isSelected));
  }
}, dependencies: [NgClass], styles: ["\n\n.outer-box[_ngcontent-%COMP%] {\n  color: black;\n}\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.inner-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  color: black;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 3px dotted #227b4f;\n}\n.base[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=row.component.css.map */"] });
var RowComponent = _RowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RowComponent, { className: "RowComponent", filePath: "Modules\\pages\\sketchflow\\components\\row\\row.component.ts", lineNumber: 13 });
})();

// Modules/pages/sketchflow/components/row-detail/row-detail.component.ts
var _RowDetailComponent = class _RowDetailComponent extends DataAbstract {
  ngOnInit() {
    this.logicSketchflowService.rowDetailContainer = this.container;
  }
  onClickClose() {
    this.logicSketchflowService.sketchflowDrawer.close();
  }
};
_RowDetailComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RowDetailComponent_BaseFactory;
  return function RowDetailComponent_Factory(t) {
    return (\u0275RowDetailComponent_BaseFactory || (\u0275RowDetailComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RowDetailComponent)))(t || _RowDetailComponent);
  };
})();
_RowDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RowDetailComponent, selectors: [["app-row-detail"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 0, consts: [[2, "display", "flex", "justify-content", "flex-end"], ["mat-icon-button", "", 3, "click"], ["container", ""]], template: function RowDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function RowDetailComponent_Template_button_click_1_listener() {
      return ctx.onClickClose();
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainer(4, null, 2);
  }
}, dependencies: [MatIconButton, MatIcon], styles: ["\n\n/*# sourceMappingURL=row-detail.component.css.map */"] });
var RowDetailComponent = _RowDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RowDetailComponent, { className: "RowDetailComponent", filePath: "Modules\\pages\\sketchflow\\components\\row-detail\\row-detail.component.ts", lineNumber: 9 });
})();

// Modules/pages/sketchflow/sketchflow.component.ts
var _c03 = ["sketchflowDrawer"];
var _SketchflowComponent = class _SketchflowComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.route = inject(ActivatedRoute);
  }
  ngOnInit() {
    console.log("sketchflow!!!!!!");
    this.route.params.subscribe((params) => {
      this.logicSketchflowService.currentPage = params["pageName"];
      this.logicSketchflowService.sketchflowDrawer = this.sketchflowDrawer;
      this.container.clear();
      this.logicSketchflowService.getValue(this.logicSketchflowService.currentPage).forEach((component) => {
        this.logicSketchflowService.rows.push(this.factoryService.createComponent(RowComponent, this.container, component));
      });
    });
    this.logicSketchflowService.rowData.subscribe((d) => {
      if (d.prop === "")
        return;
      let rowInstance = this.logicSketchflowService.rows.find((row) => row.instance.id === d.id)?.instance;
      if (!rowInstance)
        return;
      switch (d.prop) {
        case "width":
          rowInstance.data = {
            size: {
              width: d.data
            }
          };
          this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "width", d.id, d.data);
          break;
        case "height":
          rowInstance.data = {
            size: {
              height: d.data
            }
          };
          this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "height", d.id, d.data);
          break;
        case "x":
          rowInstance.data = {
            position: {
              x: d.data
            }
          };
          this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "x", d.id, d.data);
          break;
        case "y":
          rowInstance.data = {
            position: {
              y: d.data
            }
          };
          this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "y", d.id, d.data);
          break;
        case "colSpan":
          rowInstance.data = {
            cell: {
              colSpan: d.data
            }
          };
          this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "colSpan", d.id, d.data);
          break;
      }
    });
    this.logicSketchflowService.boxData.subscribe((d) => {
      let rowInstance = this.logicSketchflowService.rows.find((row) => row.instance.id === d.rowId)?.instance;
      if (!rowInstance)
        return;
      let boxComponentInstance = rowInstance.boxComponents.find((boxComponent) => boxComponent.instance.id === d.id)?.instance;
      if (!boxComponentInstance)
        return;
      const currentBoxIndex = rowInstance.boxComponents.findIndex((boxComponent) => boxComponent.instance.id === d.id);
      const updateBox = JSON.parse(JSON.stringify(rowInstance.boxs.find((box) => box.id === d.id)));
      switch (d.prop) {
        case "name":
          boxComponentInstance.data = { name: d.data };
          updateBox[d.prop] = d.data;
          break;
        case "value":
          boxComponentInstance.data = { value: d.data };
          updateBox[d.prop] = d.data;
          break;
        case "width":
          boxComponentInstance.data = { size: { width: d.data } };
          updateBox.size.width = d.data;
          break;
        case "x":
          boxComponentInstance.data = { position: { x: d.data } };
          updateBox.position.x = d.data;
          break;
        case "y":
          boxComponentInstance.data = { position: { y: d.data } };
          updateBox.position.y = d.data;
          break;
        case "path":
          boxComponentInstance.data = { path: d.data };
          updateBox[d.prop] = d.data;
          break;
      }
      if (currentBoxIndex !== -1) {
        rowInstance.boxs = [
          ...rowInstance.boxs.slice(0, currentBoxIndex),
          updateBox,
          ...rowInstance.boxs.slice(currentBoxIndex + 1)
        ];
      }
      this.logicSketchflowService.setProp(this.logicSketchflowService.currentPage, "boxs", d.rowId, rowInstance.boxs);
    });
  }
  ngOnDestroy() {
    console.log("sketchflow ondestroy");
  }
};
_SketchflowComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SketchflowComponent_BaseFactory;
  return function SketchflowComponent_Factory(t) {
    return (\u0275SketchflowComponent_BaseFactory || (\u0275SketchflowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SketchflowComponent)))(t || _SketchflowComponent);
  };
})();
_SketchflowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SketchflowComponent, selectors: [["app-sketchflow"]], viewQuery: function SketchflowComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sketchflowDrawer = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["hasBackdrop", "false"], ["mode", "over", 3, "position"], ["sketchflowDrawer", ""], [1, "sketchflow-background-layer"], [1, "sketchflow-row"], ["container", ""]], template: function SketchflowComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2);
    \u0275\u0275element(3, "app-row-detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-drawer-content");
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275elementContainer(7, null, 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 300, "px");
    \u0275\u0275property("position", ctx.logicSketchflowService.sketchflowDrawerPosition);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx.layoutService.getBodyHeight());
  }
}, dependencies: [MatDrawer, MatDrawerContainer, MatDrawerContent, RowDetailComponent], styles: ["\n\n.sketchflow-background-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  background-color: grey;\n  opacity: 0.3;\n}\n.sketchflow-row[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  background-color: transparent;\n}\n/*# sourceMappingURL=sketchflow.component.css.map */"] });
var SketchflowComponent = _SketchflowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SketchflowComponent, { className: "SketchflowComponent", filePath: "Modules\\pages\\sketchflow\\sketchflow.component.ts", lineNumber: 13 });
})();

// Modules/pages/sketchflow/sketchflow-routing.module.ts
var routes = [
  {
    path: ":pageName",
    component: SketchflowComponent
  }
];
var _SketchflowRoutingModule = class _SketchflowRoutingModule {
};
_SketchflowRoutingModule.\u0275fac = function SketchflowRoutingModule_Factory(t) {
  return new (t || _SketchflowRoutingModule)();
};
_SketchflowRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SketchflowRoutingModule });
_SketchflowRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SketchflowRoutingModule = _SketchflowRoutingModule;

// Modules/pages/sketchflow/sketchflow.module.ts
var _SketchflowModule = class _SketchflowModule {
};
_SketchflowModule.\u0275fac = function SketchflowModule_Factory(t) {
  return new (t || _SketchflowModule)();
};
_SketchflowModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SketchflowModule });
_SketchflowModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  SketchflowRoutingModule
] });
var SketchflowModule = _SketchflowModule;
export {
  SketchflowModule
};
//# sourceMappingURL=chunk-GOFZLX2A.js.map
