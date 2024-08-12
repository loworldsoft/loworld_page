import {
  ConfirmDialogComponent,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatFormField,
  MatInput,
  MatLabel
} from "./chunk-OYNGIGU4.js";
import {
  DefaultValueAccessor,
  MatButton,
  NgControlStatus,
  NgModel
} from "./chunk-6FQVR65V.js";
import {
  map,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-GPHGQ6Z6.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-REJARLXV.js";

// Modules/pages/category-manage/components/organisms/dialog/category-dialog/category-dialog.component.ts
function CategoryDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\uC2A4\uD1A0\uB9AC\uBA85\uC740 \uD544\uC218\uC785\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
  }
}
var _CategoryDialogComponent = class _CategoryDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.inputData = "";
    this.isInputEmpty = false;
    this.inputData = data.defaultValue;
  }
  onNoClick() {
    this.dialogRef.close();
  }
  onYesClick() {
    if (!this.inputData.trim()) {
      this.isInputEmpty = true;
    } else {
      this.dialogRef.close(this.inputData);
    }
  }
};
_CategoryDialogComponent.\u0275fac = function CategoryDialogComponent_Factory(t) {
  return new (t || _CategoryDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_CategoryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryDialogComponent, selectors: [["app-category-dialog"]], decls: 13, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "\uC2A4\uD1A0\uB9AC\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function CategoryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1, "\uC2A4\uD1A0\uB9AC \uB4F1\uB85D/\uC218\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "mat-form-field")(4, "mat-label");
    \u0275\u0275text(5, "\uC2A4\uD1A0\uB9AC \uD50C\uB85C\uC6B0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 2);
    \u0275\u0275listener("ngModelChange", function CategoryDialogComponent_Template_input_ngModelChange_6_listener($event) {
      return ctx.inputData = $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CategoryDialogComponent_Conditional_7_Template, 2, 0, "div");
    \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
    \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_9_listener() {
      return ctx.onYesClick();
    });
    \u0275\u0275text(10, "\uC800\uC7A5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 4);
    \u0275\u0275listener("click", function CategoryDialogComponent_Template_button_click_11_listener() {
      return ctx.onNoClick();
    });
    \u0275\u0275text(12, "\uCDE8\uC18C");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx.inputData);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, ctx.isInputEmpty ? 7 : -1);
  }
}, dependencies: [MatButton, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput, MatDialogTitle, MatDialogActions, MatDialogContent], styles: ["\n\n/*# sourceMappingURL=category-dialog.component.css.map */"] });
var CategoryDialogComponent = _CategoryDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryDialogComponent, { className: "CategoryDialogComponent", filePath: "Modules\\pages\\category-manage\\components\\organisms\\dialog\\category-dialog\\category-dialog.component.ts", lineNumber: 12 });
})();

// Modules/pages/category-manage/classes/menu/category.menu.ts
var CategoryMenuData = class {
  constructor(restApi) {
    this.restApi = restApi;
    this.menuData = [
      {
        itemName: "\uCD94\uAC00",
        icon: "add",
        itemFunc: this.restApi.createCategory.bind(this.restApi),
        checkDisabled(context) {
          return context.data.depth < 2 ? false : true;
        }
      },
      {
        itemName: "\uC0AD\uC81C",
        icon: "delete",
        itemFunc: this.restApi.deleteCategory.bind(this.restApi),
        checkDisabled(context) {
          return context.data.depth > 0 && context.data.children.length === 0 ? false : true;
        }
      },
      {
        itemName: "\uC774\uB984 \uBCC0\uACBD",
        icon: "edit",
        itemFunc: this.restApi.patchCategoryName.bind(this.restApi),
        checkDisabled(context) {
          return false;
        }
      }
    ];
  }
};

// Modules/pages/category-manage/classes/rest/category.rest.ts
var CategoryRest = class {
  constructor(dialog, _snackBar, globalService) {
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.globalService = globalService;
  }
  getCategories(request) {
    return this.globalService.dalService.categoryHttp.get(request).pipe(map((d) => {
      return d.data.map((d2) => {
        const _a = d2, { children } = _a, rest = __objRest(_a, ["children"]);
        return __spreadProps(__spreadValues({}, rest), {
          children: JSON.parse(d2.children)
        });
      });
    }));
  }
  createCategory(context) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: {
        defaultValue: ""
      }
    });
    dialogRef.afterClosed().subscribe((categoryName) => {
      if (!categoryName)
        return;
      const parent = context.data;
      const treeService = context.treeService;
      const path = treeService.findPath(parent.id);
      const id = this.globalService.currentCategoryService.getNextId();
      const childData = {
        id,
        name: categoryName,
        rootId: parent.id,
        depth: parent.depth + 1,
        steps: 0,
        type: "local",
        children: []
      };
      const found = treeService.findMe(parent.id);
      found.children.push(id);
      const _a = childData, { steps, children } = _a, rest = __objRest(_a, ["steps", "children"]);
      treeService.datasource.push(__spreadProps(__spreadValues({}, rest), { children }));
      this.globalService.currentCategoryService.setCategories();
    });
  }
  deleteCategory(context) {
    const data = context.data;
    const treeService = context.treeService;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uCE74\uD14C\uACE0\uB9AC \uC0AD\uC81C",
        content: `${data.name}\uC744 \uC0AD\uC81C\uD558\uACA0\uC2B5\uB2C8\uAE4C? \uCE74\uD14C\uACE0\uB9AC \uB0B4\uBD80\uC758 \uD30C\uC77C\uB3C4 \uD568\uAED8 \uC0AD\uC81C\uB429\uB2C8\uB2E4.`,
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d)
        return;
      const parent = treeService.findParent(data.id);
      const path = treeService.findPath(data.id);
      treeService.datasource = treeService.datasource.filter((d2) => d2.id !== data.id);
      const index = parent.children.indexOf(data.id);
      parent?.children.splice(index, 1);
      this.globalService.currentCategoryService.categories = treeService.datasource;
      this.globalService.currentCategoryService.setCategories();
    });
  }
  patchCategoryName(context) {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: {
        defaultValue: context.data.name
      }
    });
    dialogRef.afterClosed().subscribe((categoryName) => {
      if (!categoryName)
        return;
      const data = context.data;
      const treeService = context.treeService;
      const me = treeService.findMe(data.id);
      me.name = categoryName;
      this.globalService.currentCategoryService.categories = treeService.datasource;
      this.globalService.currentCategoryService.setCategories();
    });
  }
  patchCategoryMove(categoryInfo, treeView) {
    this.globalService.currentCategoryService.setCategories();
  }
  move(event, treeView) {
    const parent = treeView.treeService.findMe(event.movedParentId);
    this.globalService.currentCategoryService.setCategories();
    const request = {
      parentId: parent.id,
      children: JSON.stringify(parent.children)
    };
  }
};

export {
  CategoryMenuData,
  CategoryRest
};
//# sourceMappingURL=chunk-EFSK7YTF.js.map
