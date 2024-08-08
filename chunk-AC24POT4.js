import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-M7YSVWV6.js";
import {
  ConfirmDialogComponent,
  MatList,
  MatListItem,
  MatListModule,
  MatListOption,
  MatSelect,
  MatSelectModule,
  MatSelectionList,
  MenuComponent,
  MenuItemModule,
  NavigationComponent,
  SharedModule,
  SplitterDirective,
  moveItemInArray
} from "./chunk-HFK3UAFY.js";
import "./chunk-JEJ25PGL.js";
import {
  CategoryCode,
  GlobalService,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDivider,
  MatFormField,
  MatInput,
  MatLabel,
  MatProgressBar,
  MatSnackBar,
  MatTab,
  MatTabGroup,
  MatTooltip,
  MatTooltipModule,
  StoreAbstract,
  TreeviewComponent
} from "./chunk-E357REMM.js";
import {
  DefaultValueAccessor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatOption,
  NgControlStatus,
  NgModel,
  Router,
  RouterModule
} from "./chunk-QWAJT647.js";
import "./chunk-N5CV7AUJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  ViewEncapsulation$1,
  __objRest,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  inject,
  map,
  numberAttribute,
  of,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WWQYCCAG.js";

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r6 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r6, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-select", 17);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r11 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r11._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(2, MatPaginator_Conditional_2_Conditional_3_For_3_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r3._formFieldAppearance)("color", ctx_r3.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.pageSize)("disabled", ctx_r3.disabled)("aria-labelledby", ctx_r3._pageSizeLabelId)("panelClass", ctx_r3.selectConfig.panelClass || "")("disableOptionCentering", ctx_r3.selectConfig.disableOptionCentering);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MatPaginator_Conditional_2_Conditional_3_Template, 4, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r0._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r0._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r0._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r13 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r13.firstPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r15.lastPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "path", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r2._intl.lastPageLabel)("matTooltipDisabled", ctx_r2._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r2._nextButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r2._intl.lastPageLabel);
  }
}
var _MatPaginatorIntl = class _MatPaginatorIntl {
  constructor() {
    this.changes = new Subject();
    this.itemsPerPageLabel = "Items per page:";
    this.nextPageLabel = "Next page";
    this.previousPageLabel = "Previous page";
    this.firstPageLabel = "First page";
    this.lastPageLabel = "Last page";
    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
    };
  }
};
_MatPaginatorIntl.\u0275fac = function MatPaginatorIntl_Factory(t) {
  return new (t || _MatPaginatorIntl)();
};
_MatPaginatorIntl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatPaginatorIntl,
  factory: _MatPaginatorIntl.\u0275fac,
  providedIn: "root"
});
var MatPaginatorIntl = _MatPaginatorIntl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var nextUniqueId = 0;
var _MatPaginator = class _MatPaginator {
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
    this._isInitialized = false;
    this._initializedStream = new ReplaySubject(1);
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    this.hidePageSize = false;
    this.showFirstLastButtons = false;
    this.selectConfig = {};
    this.disabled = false;
    this.page = new EventEmitter();
    this.initialized = this._initializedStream;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
};
_MatPaginator.\u0275fac = function MatPaginator_Factory(t) {
  return new (t || _MatPaginator)(\u0275\u0275directiveInject(MatPaginatorIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
};
_MatPaginator.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatPaginator,
  selectors: [["mat-paginator"]],
  hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
  inputs: {
    color: "color",
    pageIndex: [InputFlags.HasDecoratorInputTransform, "pageIndex", "pageIndex", numberAttribute],
    length: [InputFlags.HasDecoratorInputTransform, "length", "length", numberAttribute],
    pageSize: [InputFlags.HasDecoratorInputTransform, "pageSize", "pageSize", numberAttribute],
    pageSizeOptions: "pageSizeOptions",
    hidePageSize: [InputFlags.HasDecoratorInputTransform, "hidePageSize", "hidePageSize", booleanAttribute],
    showFirstLastButtons: [InputFlags.HasDecoratorInputTransform, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
    selectConfig: "selectConfig",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    page: "page"
  },
  exportAs: ["matPaginator"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  decls: 14,
  vars: 14,
  consts: [[1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], ["class", "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", "class", "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "class", "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-page-size-label"], ["class", "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], ["class", "mat-mdc-paginator-page-size-value"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], ["hideSingleSelectionIndicator", "", 3, "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering", "selectionChange"], [3, "value"], [1, "mat-mdc-paginator-page-size-value"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled", "click"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
  template: function MatPaginator_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 5);
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
        return ctx.previousPage();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 7);
      \u0275\u0275element(9, "path", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
        return ctx.nextPage();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 7);
      \u0275\u0275element(12, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, !ctx.hidePageSize ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(6, ctx.showFirstLastButtons ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
      \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
      \u0275\u0275advance(3);
      \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
      \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(13, ctx.showFirstLastButtons ? 13 : -1);
    }
  },
  dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
  styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatPaginator = _MatPaginator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: `<div class="mat-mdc-paginator-outer-container">
  <div class="mat-mdc-paginator-container">
    @if (!hidePageSize) {
      <div class="mat-mdc-paginator-page-size">
        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">
          {{_intl.itemsPerPageLabel}}
        </div>

        @if (_displayedPageSizeOptions.length > 1) {
          <mat-form-field
            [appearance]="_formFieldAppearance!"
            [color]="color"
            class="mat-mdc-paginator-page-size-select">
            <mat-select
              [value]="pageSize"
              [disabled]="disabled"
              [aria-labelledby]="_pageSizeLabelId"
              [panelClass]="selectConfig.panelClass || ''"
              [disableOptionCentering]="selectConfig.disableOptionCentering"
              (selectionChange)="_changePageSize($event.value)"
              hideSingleSelectionIndicator>
              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {
                <mat-option [value]="pageSizeOption">
                  {{pageSizeOption}}
                </mat-option>
              }
            </mat-select>
          </mat-form-field>
        }

        @if (_displayedPageSizeOptions.length <= 1) {
          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>
        }
      </div>
    }

    <div class="mat-mdc-paginator-range-actions">
      <div class="mat-mdc-paginator-range-label" aria-live="polite">
        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}
      </div>

      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-first"
                (click)="firstPage()"
                [attr.aria-label]="_intl.firstPageLabel"
                [matTooltip]="_intl.firstPageLabel"
                [matTooltipDisabled]="_previousButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_previousButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          </svg>
        </button>
      }
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-previous"
              (click)="previousPage()"
              [attr.aria-label]="_intl.previousPageLabel"
              [matTooltip]="_intl.previousPageLabel"
              [matTooltipDisabled]="_previousButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_previousButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-next"
              (click)="nextPage()"
              [attr.aria-label]="_intl.nextPageLabel"
              [matTooltip]="_intl.nextPageLabel"
              [matTooltipDisabled]="_nextButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_nextButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-last"
                (click)="lastPage()"
                [attr.aria-label]="_intl.lastPageLabel"
                [matTooltip]="_intl.lastPageLabel"
                [matTooltipDisabled]="_nextButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_nextButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          </svg>
        </button>
      }
    </div>
  </div>
</div>
`,
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var _MatPaginatorModule = class _MatPaginatorModule {
};
_MatPaginatorModule.\u0275fac = function MatPaginatorModule_Factory(t) {
  return new (t || _MatPaginatorModule)();
};
_MatPaginatorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatPaginatorModule
});
_MatPaginatorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MAT_PAGINATOR_INTL_PROVIDER],
  imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
});
var MatPaginatorModule = _MatPaginatorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// Modules/pages/category-manage/components/organisms/table/table.component.ts
var _c0 = ["menu"];
function TableComponent_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, " \uC774\uB984 ");
    \u0275\u0275elementEnd();
  }
}
function TableComponent_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.fileName, " ");
  }
}
function TableComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, " \uC720\uD615 ");
    \u0275\u0275elementEnd();
  }
}
function TableComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r13.fileFormat, " ");
  }
}
function TableComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, " \uD06C\uAE30 ");
    \u0275\u0275elementEnd();
  }
}
function TableComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.getSize(element_r14.fileSize), " ");
  }
}
function TableComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 12);
    \u0275\u0275text(1, " \uC218\uC815\uC77C ");
    \u0275\u0275elementEnd();
  }
}
function TableComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r7.getDate(element_r15.insertDate), " ");
  }
}
function TableComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 14);
    \u0275\u0275text(1, "\xA0");
    \u0275\u0275elementEnd();
  }
}
function TableComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 13)(1, "button", 15);
    \u0275\u0275listener("click", function TableComponent_td_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r19);
      const _r17 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(_r17.openMenu());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "app-menu", 16, 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("menuData", ctx_r9.menuClass.menuData)("neededData", element_r16);
  }
}
function TableComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 18);
  }
}
function TableComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 19);
  }
}
var _c1 = () => [5, 10, 20];
var _TableComponent = class _TableComponent {
  constructor() {
    this.menuClass = {
      menuData: []
    };
    this.rowClicked = new EventEmitter();
    this.displayedColumns = ["fileName", "fileFormat", "fileSize", "insertDate", "star"];
  }
  openMenu() {
    console.log("clicked", this.menuComponent);
    if (this.menuClass.menuData.length === 0)
      return;
    this.menuComponent.openMenu();
    this.menuComponent.menu.menuClosed.subscribe((d) => {
    });
  }
  getDate(date) {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}.${String(dateObj.getMonth()).padStart(2, "0")}.${String(dateObj.getDate()).padStart(2, "0")}`;
  }
  getSize(bytes) {
    return `${Math.ceil(bytes / 1024)}KB`;
  }
};
_TableComponent.\u0275fac = function TableComponent_Factory(t) {
  return new (t || _TableComponent)();
};
_TableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuComponent = _t.first);
  }
}, inputs: { headers: "headers", datasource: "datasource", menuClass: "menuClass" }, outputs: { rowClicked: "rowClicked" }, decls: 19, vars: 7, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "fileName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fileFormat"], ["matColumnDef", "fileSize"], ["matColumnDef", "insertDate"], ["matColumnDef", "star", "stickyEnd", ""], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-icon-button", "", 3, "click"], [3, "menuData", "neededData"], ["menu", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 0);
    \u0275\u0275elementContainerStart(1, 1);
    \u0275\u0275template(2, TableComponent_th_2_Template, 2, 0, "th", 2)(3, TableComponent_td_3_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 4);
    \u0275\u0275template(5, TableComponent_th_5_Template, 2, 0, "th", 2)(6, TableComponent_td_6_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 5);
    \u0275\u0275template(8, TableComponent_th_8_Template, 2, 0, "th", 2)(9, TableComponent_td_9_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 6);
    \u0275\u0275template(11, TableComponent_th_11_Template, 2, 0, "th", 2)(12, TableComponent_td_12_Template, 2, 1, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 7);
    \u0275\u0275template(14, TableComponent_th_14_Template, 2, 0, "th", 8)(15, TableComponent_td_15_Template, 6, 2, "td", 3);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, TableComponent_tr_16_Template, 1, 0, "tr", 9)(17, TableComponent_tr_17_Template, 1, 0, "tr", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "mat-paginator", 11);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("margin-top", "50px");
    \u0275\u0275property("dataSource", ctx.datasource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(6, _c1));
  }
}, dependencies: [MatIconButton, MatIcon, MenuComponent, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginator], styles: ["\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 700;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n}\n/*# sourceMappingURL=table.component.css.map */"] });
var TableComponent = _TableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableComponent, { className: "TableComponent", filePath: "Modules\\pages\\category-manage\\components\\organisms\\table\\table.component.ts", lineNumber: 16 });
})();

// Modules/pages/category-manage/components/organisms/dialog/upload-dialog/upload-dialog.component.ts
function UploadDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function UploadDialogComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClickNo());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.btnNo);
  }
}
var _UploadDialogComponent = class _UploadDialogComponent {
  //isDisableClose: boolean;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.value = 0;
    this.title = data.title;
    this.content = data.content;
    this.btnYes = data.btnYes;
    this.btnNo = data.btnNo;
    this.isBtnDisabled = data.isBtnDisabled ?? false;
    this.dialogRef.disableClose = data.isDisableClose ?? false;
  }
  onClickNo() {
    this.dialogRef.close(false);
  }
  onClickYes() {
    this.dialogRef.close(true);
  }
};
_UploadDialogComponent.\u0275fac = function UploadDialogComponent_Factory(t) {
  return new (t || _UploadDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_UploadDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadDialogComponent, selectors: [["app-upload-dialog"]], decls: 8, vars: 8, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "example-section"], ["color", "primary", "mode", "determinate", 1, "example-margin", 3, "value"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 3, "click"]], template: function UploadDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h1", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "section", 2);
    \u0275\u0275element(6, "mat-progress-bar", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, UploadDialogComponent_Conditional_7_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", 300, "px")("width", 300, "px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx.value);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, !ctx.isBtnDisabled ? 7 : -1);
  }
}, dependencies: [MatButton, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatProgressBar], styles: ["\n\n/*# sourceMappingURL=upload-dialog.component.css.map */"] });
var UploadDialogComponent = _UploadDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadDialogComponent, { className: "UploadDialogComponent", filePath: "Modules\\pages\\category-manage\\components\\organisms\\dialog\\upload-dialog\\upload-dialog.component.ts", lineNumber: 16 });
})();

// Modules/pages/category-manage/classes/rest/file.shared.ts
var FileShared = class {
  constructor(globalService, dialog) {
    this.globalService = globalService;
    this.dialog = dialog;
  }
  upload(fileList, categoryData) {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      data: {
        title: "\uD30C\uC77C \uC5C5\uB85C\uB4DC",
        content: `\uD30C\uC77C\uC744 \uD559\uC2B5\uD558\uB294 \uC911\uC785\uB2C8\uB2E4.`,
        isBtnDisabled: true,
        isDisableClose: true
      }
    });
    return this.globalService.socketService.fileSocket.connect().pipe(switchMap((socketId) => {
      const subscription = this.globalService.socketService.fileSocket.onUploadSteps().subscribe((d) => {
        const gap = 100 / d.maxStep;
        dialogRef.componentInstance.content = d.message;
        dialogRef.componentInstance.value = gap * d.step;
      });
      console.log("\uC5C5\uB85C\uB4DC \uC2DC idPath", categoryData.idPath);
      return this.globalService.dalService.fileHttp.upload({
        files: fileList,
        categoryId: categoryData.id,
        path: categoryData.idPath,
        socketId,
        improvedType: categoryData.docType
      }).pipe(switchMap((d) => {
        subscription.unsubscribe();
        this.globalService.socketService.fileSocket.disconnect();
        dialogRef.componentInstance.btnNo = "\uB2EB\uAE30";
        dialogRef.componentInstance.isBtnDisabled = false;
        if (!d.isSuccess) {
          dialogRef.componentInstance.content = `\uD30C\uC77C \uD559\uC2B5\uC774 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. ${d.message}`;
          return of(false);
        }
        dialogRef.componentInstance.content = "\uD30C\uC77C \uD559\uC2B5\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
        return of(true);
      }));
    }));
  }
};

// Modules/pages/category-manage/classes/rest/file.rest.ts
var FileRest = class extends FileShared {
  // categoryData = {//object는 REF를 받으니까. 이건 그냥 기본값만 셋팅해놓은 것이다.
  //     id: 0,
  //     idPath: '',
  //     docType: ''
  // };
  constructor(globalService, _snackBar, dialog, categoryService) {
    super(globalService, dialog);
    this._snackBar = _snackBar;
    this.categoryService = categoryService;
    this.currentFileId = -1;
  }
  getFiles(categoryId) {
    return this.globalService.dalService.fileHttp.get({
      categoryId
    }).pipe(map((d) => {
      return d.data;
    }));
  }
  uploadSuccess(fileList, fileBrowser) {
    this.upload(fileList, this.categoryService.categoryData).subscribe((d) => {
      fileBrowser.value = "";
      if (!d)
        return;
      this.getFiles(this.categoryService.categoryData.id).subscribe((d2) => {
        this.categoryService.files = d2;
      });
    });
  }
  //TODO 나중에 얘네들도 컴포넌트가 담당해야 한닥. 여기가 아니라!!!
  deleteFile(file) {
    console.log("deleteFile", file.fileId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uD30C\uC77C \uC0AD\uC81C",
        content: `${file.fileName}\uC744 \uC0AD\uC81C\uD558\uACA0\uC2B5\uB2C8\uAE4C?`,
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d)
        return;
      console.log("idPath", this.categoryService.categoryData.idPath);
      this.globalService.dalService.fileHttp.delete({
        fileIds: [file.fileId],
        categoryPath: this.categoryService.categoryData.idPath
      }).subscribe((d2) => {
        if (!d2.isSuccess) {
          this._snackBar.open(d2.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        this._snackBar.open("\uD30C\uC77C \uC0AD\uC81C\uAC00 \uC644\uB8CC\uB410\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        this.getFiles(this.categoryService.categoryData.id).subscribe((d3) => {
          this.categoryService.files = d3;
        });
      });
    });
  }
  download(file) {
    console.log("download data", file);
    this.globalService.dalService.fileHttp?.download(file.fileId).subscribe((response) => {
      console.log("download response", response.headers.get("content-type"));
      const blob = new Blob([response.body], { type: response.headers.get("content-type") });
      const linkEl = document.createElement("a");
      linkEl.style.display = "none";
      const url = window.URL.createObjectURL(blob);
      linkEl.href = url;
      linkEl.download = `${file.fileName}`;
      document.body.appendChild(linkEl);
      linkEl.click();
      document.body.removeChild(linkEl);
      window.URL.revokeObjectURL(url);
    });
  }
};

// Modules/pages/category-manage/services/category.service.ts
var _CategoryService = class _CategoryService {
  constructor() {
    this.files = [];
    this.categoryData = {
      id: 0,
      idPath: "",
      docType: "default",
      namePath: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694."
    };
  }
};
_CategoryService.\u0275fac = function CategoryService_Factory(t) {
  return new (t || _CategoryService)();
};
_CategoryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac });
var CategoryService = _CategoryService;

// Modules/pages/category-manage/components/templates/category-manage-template/category-manage-template.component.ts
function CategoryManageTemplateComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 5);
  }
}
function CategoryManageTemplateComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 6);
  }
}
function CategoryManageTemplateComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275template(0, CategoryManageTemplateComponent_Conditional_6_Conditional_0_Template, 1, 0, ":svg:path", 5)(1, CategoryManageTemplateComponent_Conditional_6_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.layoutService.isButtonHover ? 0 : 1);
  }
}
function CategoryManageTemplateComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 7);
  }
}
var _c02 = [[["", "left", ""]], [["", "right", ""]]];
var _c12 = ["[left]", "[right]"];
var _CategoryManageTemplateComponent = class _CategoryManageTemplateComponent extends StoreAbstract {
  ngOnInit() {
    this.OnResizeRedux();
  }
  OnResizeRedux() {
    this.resize$.subscribe((d) => {
      this.layoutService.leftWidh = d.leftWidth;
      this.layoutService.rightWidth = d.rightWidth;
    });
    this.resize({ leftWidth: 50, rightWidth: 50 });
  }
};
_CategoryManageTemplateComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CategoryManageTemplateComponent_BaseFactory;
  return function CategoryManageTemplateComponent_Factory(t) {
    return (\u0275CategoryManageTemplateComponent_BaseFactory || (\u0275CategoryManageTemplateComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CategoryManageTemplateComponent)))(t || _CategoryManageTemplateComponent);
  };
})();
_CategoryManageTemplateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManageTemplateComponent, selectors: [["app-category-manage-template"]], features: [\u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c12, decls: 10, vars: 15, consts: [[1, "full-layout"], [1, "back-color"], ["appSplitter", "", 1, "splitter"], [2, "align-self", "center", "transform", "translate(-15px, 0)", 3, "click", "mouseenter", "mouseleave"], ["width", "24", "height", "24", "viewBox", "0 0 50 50", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M 20,25 L 28,10 M 20,25 L 28,40", "stroke", "#9b9b9b", "stroke-width", "7", "fill", "none", "stroke-linecap", "round"], ["id", "line", "x1", "25", "y1", "15", "x2", "25", "y2", "45", "fill", "none", "stroke", "#9b9b9b", "stroke-width", "7", "stroke-linecap", "round"], ["d", "M 30,25 L 22,10 M 30,25 L 22,40", "stroke", "#9b9b9b", "stroke-width", "7", "fill", "none", "stroke-linecap", "round"]], template: function CategoryManageTemplateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c02);
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "button", 2);
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function CategoryManageTemplateComponent_Template_button_click_4_listener($event) {
      return ctx.resizeButton($event);
    })("mouseenter", function CategoryManageTemplateComponent_Template_button_mouseenter_4_listener() {
      return ctx.layoutService.isButtonHover = true;
    })("mouseleave", function CategoryManageTemplateComponent_Template_button_mouseleave_4_listener() {
      return ctx.layoutService.isButtonHover = false;
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 4);
    \u0275\u0275template(6, CategoryManageTemplateComponent_Conditional_6_Template, 2, 1)(7, CategoryManageTemplateComponent_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275projection(9, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.layoutService.getCategorySplitterHeight(), "px");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx.layoutService.leftWidh, "%")("height", ctx.layoutService.getCategorySideHeight());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.layoutService.getCategorySplitterHeight(), "px");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(6, ctx.layoutService.isOpen ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.layoutService.getCategorySideHeight())("width", ctx.layoutService.rightWidth, "%")("margin-top", 10, "px");
  }
}, dependencies: [SplitterDirective], styles: ["\n\n.m-t25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.m-t16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=category-manage-template.component.css.map */"] });
var CategoryManageTemplateComponent = _CategoryManageTemplateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManageTemplateComponent, { className: "CategoryManageTemplateComponent", filePath: "Modules\\pages\\category-manage\\components\\templates\\category-manage-template\\category-manage-template.component.ts", lineNumber: 10 });
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

// Modules/pages/category-manage/components/organisms/dialog/category-dialog/category-dialog.component.ts
function CategoryDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\uCE74\uD14C\uACE0\uB9AC\uBA85\uC740 \uD544\uC218\uC785\uB2C8\uB2E4.");
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
_CategoryDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryDialogComponent, selectors: [["app-category-dialog"]], decls: 13, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "placeholder", "\uCE74\uD14C\uACE0\uB9AC\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function CategoryDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1, "\uCE74\uD14C\uACE0\uB9AC \uB4F1\uB85D/\uC218\uC815");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "mat-form-field")(4, "mat-label");
    \u0275\u0275text(5, "\uCE74\uD14C\uACE0\uB9AC\uBA85");
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
      console.log("path", path);
      this.globalService.dalService.categoryHttp.create({
        parentId: parent.id,
        parentDepth: parent.depth,
        categoryName,
        insertName: this.globalService.currentUser.userData.name,
        type: parent.type,
        insertId: this.globalService.currentUser.userData.id,
        companyCode: "",
        path
      }).subscribe((d) => {
        if (!d.isSuccess) {
          this._snackBar.open(d.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        console.log(d, d.data);
        const found = treeService.findMe(parent.id);
        found.children.push(d.data.id);
        console.log("found", found);
        const _a = d.data, { steps, children } = _a, rest = __objRest(_a, ["steps", "children"]);
        treeService.datasource.push(__spreadProps(__spreadValues({}, rest), { children: JSON.parse(children) }));
        this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
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
      console.log("ddd", d);
      if (!d)
        return;
      const parent = treeService.findParent(data.id);
      const path = treeService.findPath(data.id);
      console.log("path", path);
      console.log("aaaa", { categoryId: data?.id, parentId: parent?.id, path });
      this.globalService.dalService.categoryHttp.delete({ categoryId: data.id, parentId: parent.id, path }).subscribe((d2) => {
        if (!d2.isSuccess) {
          this._snackBar.open(d2.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        console.log("delete id", data.id);
        treeService.datasource = treeService.datasource.filter((d3) => d3.id !== data.id);
        console.log("wow", treeService.datasource);
        const parent2 = treeService.findParent(data.id);
        const index = parent2.children.indexOf(data.id);
        parent2?.children.splice(index, 1);
        this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
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
      console.log("name", data.id, categoryName);
      this.globalService.dalService.categoryHttp.rename({
        categoryId: data.id,
        categoryName
      }).subscribe((d) => {
        if (!d.isSuccess) {
          this._snackBar.open(d.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        const me = treeService.findMe(data.id);
        me.name = categoryName;
        this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC \uC774\uB984\uC774 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
    });
  }
  patchCategoryMove(categoryInfo, treeView) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uCE74\uD14C\uACE0\uB9AC \uC774\uB3D9",
        content: `${categoryInfo.name}\uC744 \uC774\uB3D9\uD558\uACA0\uC2B5\uB2C8\uAE4C?`,
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d)
        return;
      console.log("before", JSON.stringify(treeView.treeService.datasource));
      const request = {
        parentId: categoryInfo.id,
        children: JSON.stringify(categoryInfo.children)
      };
      this.globalService.dalService.categoryHttp.move(request).subscribe((d2) => {
        if (!d2.isSuccess) {
          this._snackBar.open(d2.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC774\uB3D9\uB410\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
    });
  }
  move(event, treeView) {
    const parent = treeView.treeService.findMe(event.movedParentId);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uCE74\uD14C\uACE0\uB9AC \uC774\uB3D9",
        content: `${parent.name}\uC744 \uC774\uB3D9\uD558\uACA0\uC2B5\uB2C8\uAE4C?`,
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d) {
        moveItemInArray(parent.children, event.movedData.previousIndex, event.movedData.currentIndex);
        return;
      }
      console.log("before", JSON.stringify(treeView.treeService.datasource));
      const request = {
        parentId: parent.id,
        children: JSON.stringify(parent.children)
      };
      this.globalService.dalService.categoryHttp.move(request).subscribe((d2) => {
        if (!d2.isSuccess) {
          this._snackBar.open(d2.message, "\uD655\uC778", {
            horizontalPosition: "center",
            verticalPosition: "top"
          });
          return;
        }
        this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC\uAC00 \uC774\uB3D9\uB410\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
      });
    });
  }
};

// Modules/pages/category-manage/components/organisms/category/category.component.ts
function CategoryComponent_For_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    \u0275\u0275property("value", user_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r10.name);
  }
}
function CategoryComponent_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function CategoryComponent_For_3_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r15 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r15.drawerRef.toggle());
    });
    \u0275\u0275text(1, "\uAC1C\uC778 \uC120\uD0DD");
    \u0275\u0275elementEnd();
  }
}
function CategoryComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab", 2)(1, "app-navigation", 3);
    \u0275\u0275listener("drawerOut", function CategoryComponent_For_3_Template_app_navigation_drawerOut_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r17 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r17.drawerRef = $event);
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "mat-selection-list", 5, 6);
    \u0275\u0275listener("selectionChange", function CategoryComponent_For_3_Template_mat_selection_list_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r19 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r19.getUserCategory($event));
    });
    \u0275\u0275repeaterCreate(5, CategoryComponent_For_3_For_6_Template, 2, 2, "mat-list-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7);
    \u0275\u0275template(8, CategoryComponent_For_3_Conditional_8_Template, 2, 0, "button", 8);
    \u0275\u0275elementStart(9, "app-treeview", 9, 10);
    \u0275\u0275listener("clickEvent", function CategoryComponent_For_3_Template_app_treeview_clickEvent_9_listener($event) {
      \u0275\u0275restoreView(_r18);
      const _r9 = \u0275\u0275reference(10);
      const ctx_r20 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r20.onCategoryClick($event, _r9));
    })("moveData", function CategoryComponent_For_3_Template_app_treeview_moveData_9_listener($event) {
      \u0275\u0275restoreView(_r18);
      const _r9 = \u0275\u0275reference(10);
      const ctx_r21 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r21.categoryRest.move($event, _r9));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("label", item_r1.value.name);
    \u0275\u0275advance();
    \u0275\u0275property("height", ctx_r0.globalService.layoutService.getCategorySplitterHeight() - 25 - 48 - 48);
    \u0275\u0275advance();
    \u0275\u0275styleProp("overflow", "auto");
    \u0275\u0275advance();
    \u0275\u0275property("multiple", false);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.users);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(8, item_r1.key === "adminPersonal" ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("datasource", ctx_r0.categories)("menuClass", ctx_r0.categoryMenu)("who", item_r1.value.name);
  }
}
var _CategoryComponent = class _CategoryComponent {
  constructor(globalService, dialog, _snackBar) {
    this.globalService = globalService;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.categoryClicked = new EventEmitter();
    this.Object = Object;
    this.users = [];
    this.categories = [];
    this.categoryCode = new CategoryCode();
    this.categoryRest = new CategoryRest(dialog, _snackBar, globalService);
    this.categoryMenu = new CategoryMenuData(this.categoryRest);
  }
  ngOnDestroy() {
  }
  ngOnInit() {
    const user = this.globalService.currentUser.userData;
    if (!user.id)
      return;
    this.categoryRest.getCategories({ type: this.categoryCode.personal, id: user.id }).subscribe((d) => {
      this.categories = d;
    });
    this.globalService.dalService.userHttp.getUsers().subscribe((d) => {
      this.users = d.data;
    });
  }
  onTabChange(event) {
    console.log("event", event);
    if (this.categoryCode.codes[event.index].key === "adminPersonal") {
      this.categories = [];
      return;
    }
    this.categoryRest.getCategories({ type: this.categoryCode.codes[event.index].key, id: this.globalService.currentUser.userData.id }).subscribe((d) => {
      this.categories = d;
    });
  }
  onCategoryClick(categoryId, treeView) {
    console.log("treeview\uC5D0\uC11C\uBD80\uD130 \uC62C\uB77C\uC628 \uC774\uBCA4\uD2B8", categoryId);
    const categoryIdPath = treeView.treeService.findPath(categoryId);
    console.log("categoryPath", categoryIdPath);
    this.categoryClicked.emit({
      id: categoryId,
      categoryNamePath: this.setCategoryPath(categoryId, treeView.treeService),
      categoryIdPath
    });
  }
  getUserCategory(a) {
    console.log("aaaa", a, a.source._value);
    this.categoryRest.getCategories({ type: this.categoryCode.personal, id: a.source._value }).subscribe((d) => {
      this.categories = d;
    });
  }
  setCategoryPath(categoryId, treeService) {
    const parent = treeService.findParent(categoryId);
    const me = treeService.findMe(categoryId);
    this.currentCategoryId = categoryId;
    const parentName = parent?.name ?? "";
    const categoryName = parentName ? "> " + me.name : me.name;
    return `${parentName} ${categoryName}`;
  }
};
_CategoryComponent.\u0275fac = function CategoryComponent_Factory(t) {
  return new (t || _CategoryComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar));
};
_CategoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["app-category"]], outputs: { categoryClicked: "categoryClicked" }, decls: 4, vars: 0, consts: [[2, "margin", "10px"], [3, "selectedTabChange"], [3, "label"], ["triggerType", "versionsDrawer", "position", "start", 3, "height", "drawerOut"], ["drawer", ""], ["color", "primary", 3, "multiple", "selectionChange"], ["userList", ""], ["content", "", 2, "margin", "10px"], ["mat-raised-button", "", "color", "primary"], [3, "datasource", "menuClass", "who", "clickEvent", "moveData"], ["treeview2", ""], [3, "value"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1);
    \u0275\u0275listener("selectedTabChange", function CategoryComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
      return ctx.onTabChange($event);
    });
    \u0275\u0275repeaterCreate(2, CategoryComponent_For_3_Template, 11, 9, "mat-tab", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.categoryCode.getByRoles(ctx.globalService.currentUser.userData.role.roleId));
  }
}, dependencies: [MatButton, NavigationComponent, MatTab, MatTabGroup, TreeviewComponent, MatSelectionList, MatListOption], styles: ["\n\n.color-back[_ngcontent-%COMP%] {\n  background-color: #CFE0DA;\n}\n/*# sourceMappingURL=category.component.css.map */"] });
var CategoryComponent = _CategoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "Modules\\pages\\category-manage\\components\\organisms\\category\\category.component.ts", lineNumber: 26 });
})();

// Modules/pages/category-manage/classes/menu/file.menu.ts
var FileMenuData = class {
  constructor(restApi, router) {
    this.restApi = restApi;
    this.router = router;
    this.menuData = [
      {
        itemName: "\uC0AD\uC81C",
        icon: "delete",
        itemFunc: this.restApi.deleteFile.bind(this.restApi),
        checkDisabled() {
          return false;
        }
      },
      {
        itemName: "\uB2E4\uC6B4\uB85C\uB4DC",
        icon: "library_books",
        itemFunc: this.restApi.download.bind(this.restApi),
        checkDisabled() {
          return false;
        }
      },
      {
        itemName: "\uD30C\uC77C \uBCF4\uAE30",
        icon: "library_books",
        itemFunc: () => {
          this.router.navigateByUrl("/editor");
        },
        checkDisabled() {
          return false;
        }
      }
    ];
  }
};

// Modules/pages/category-manage/components/molecules/file-upload-dialog/file-upload-dialog.component.ts
function FileUploadDialogComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-list-item", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function FileUploadDialogComponent_For_7_Template_button_click_3_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r8);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onUnselect(item_r2));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
  }
}
function FileUploadDialogComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-list-item", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 8);
    \u0275\u0275listener("click", function FileUploadDialogComponent_For_12_Template_button_click_3_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r15);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r14 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r14.onSelect(item_r9));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.name);
  }
}
var _FileUploadDialogComponent = class _FileUploadDialogComponent {
  constructor(dialogRef, data) {
    this.data = data;
    this.unselected = [];
  }
  onUnselect(file) {
    const index = this.data.selected.indexOf(file);
    this.data.selected.splice(index, 1);
    this.unselected.push(file);
  }
  onSelect(file) {
    this.unselected = this.unselected.filter((d) => d !== file);
    this.data.selected.push(file);
  }
};
_FileUploadDialogComponent.\u0275fac = function FileUploadDialogComponent_Factory(t) {
  return new (t || _FileUploadDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
};
_FileUploadDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadDialogComponent, selectors: [["app-file-upload-dialog"]], decls: 18, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "width", "560px"], ["role", "list"], [2, "padding-top", "10px"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"], [2, "display", "flex", "align-items", "center"], ["role", "listitem"], ["mat-icon-button", "", "color", "accent", 3, "click"], ["style", "display: flex; align-items: center;"]], template: function FileUploadDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275text(1, "\uC5C5\uB85C\uB4DC\uB41C \uD30C\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "p");
    \u0275\u0275text(4, "\uC120\uD0DD\uB41C \uD30C\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-list", 2);
    \u0275\u0275repeaterCreate(6, FileUploadDialogComponent_For_7_Template, 6, 1, "div", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(8, "mat-divider");
    \u0275\u0275elementStart(9, "p", 3);
    \u0275\u0275text(10, "\uCDE8\uC18C\uB41C \uD30C\uC77C");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, FileUploadDialogComponent_For_12_Template, 6, 1, "div", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 4)(14, "button", 5);
    \u0275\u0275text(15, "\uC5C5\uB85C\uB4DC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 5);
    \u0275\u0275text(17, "\uCDE8\uC18C");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.data.selected);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.unselected);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", false);
  }
}, dependencies: [MatButton, MatIconButton, MatIcon, MatDivider, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatList, MatListItem], styles: ["\n\n/*# sourceMappingURL=file-upload-dialog.component.css.map */"] });
var FileUploadDialogComponent = _FileUploadDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadDialogComponent, { className: "FileUploadDialogComponent", filePath: "Modules\\pages\\category-manage\\components\\molecules\\file-upload-dialog\\file-upload-dialog.component.ts", lineNumber: 10 });
})();

// Modules/pages/category-manage/components/organisms/file/file.component.ts
var _c03 = ["fileBrowser"];
var _c13 = ["folderBrowser"];
function FileComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    \u0275\u0275property("value", doc_r3.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r3.name);
  }
}
var _FileComponent = class _FileComponent {
  constructor(globalService, dialog, _snackBar, categoryService) {
    this.globalService = globalService;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.categoryService = categoryService;
    this.fileRest = null;
    this.fileMenu = null;
    this.docTypes = [
      { code: "default", name: "\uAE30\uBCF8" }
    ];
    this.router = inject(Router);
  }
  ngOnInit() {
    if (!this.fileRest)
      return;
    this.fileMenu = new FileMenuData(this.fileRest, this.router);
    this.getDocTypes();
  }
  onFilesSelected(event, fileBrowser) {
    const fileList = event.target.files;
    const isFileValid = this.checkFileFormat(fileList);
    if (!isFileValid)
      return;
    if (!this.fileRest)
      return;
    this.fileRest.uploadSuccess(event.target.files, fileBrowser);
  }
  onFileBrowserClicked() {
    const isCategoryClicked = this.onInputClicked();
    if (!isCategoryClicked)
      return;
    this.fileBrowser.nativeElement.click();
  }
  onFolderSelected(event, folderBrowser) {
    console.log("folder testing", event, folderBrowser.value, event.target.files);
    const fileList = event.target.files;
    const isFileValid = this.checkFileFormat(fileList);
    if (!isFileValid)
      return;
    const files = [];
    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList.item(i));
    }
    folderBrowser.value = "";
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      data: {
        selected: files
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result", result, files);
      if (!result)
        return;
      const dataTransfer = new DataTransfer();
      files.forEach((file) => dataTransfer.items.add(file));
      console.log("sdfsdf", dataTransfer.files);
      if (!this.fileRest)
        return;
      this.fileRest.uploadSuccess(event.target.files, folderBrowser);
    });
  }
  onFolderBrowserClicked() {
    const isCategoryClicked = this.onInputClicked();
    if (!isCategoryClicked)
      return;
    this.folderBrowser.nativeElement.click();
  }
  getDocTypes() {
    this.globalService.dalService.codeHttp.getCommonCode("document").subscribe((d) => {
    });
  }
  // buildFileTree(files: File[]): any {
  //   const tree = {};
  //   files.forEach(file => {
  //     const pathParts = file.webkitRelativePath.split('/');
  //     console.log('pathParts', pathParts);
  //     let current: any = tree;
  //     for (let i = 0; i < pathParts.length; i++) {
  //       const part = pathParts[i];
  //       if (!current[part]) {
  //         if (i === pathParts.length - 1) {//파일이면
  //           current[part] = file;//파일이면 파일을 넣는다.
  //         } else {
  //           current[part] = {};//폴더면 폴더를 넣는다.
  //         }
  //       }
  //       // console.log('current', current, 'currentPart', current[part]);
  //       //debugger;
  //       current = current[part];//current를 옮겨줘야 한다. 하위로!
  //     }
  //   });
  //   return tree;
  // }
  onInputClicked() {
    if (!this.categoryService.categoryData.id) {
      this._snackBar.open("\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694", "\uD655\uC778", {
        horizontalPosition: "center",
        verticalPosition: "top"
      });
      return false;
    }
    return true;
  }
  checkFileFormat(fileList) {
    for (let i = 0; i < fileList.length; i++) {
      const type = fileList.item(i).type;
      console.log("file type", type);
      if (!type.includes("pdf")) {
        this._snackBar.open("pdf\uB9CC \uC5C5\uB85C\uB4DC \uAC00\uB2A5\uD569\uB2C8\uB2E4.", "\uD655\uC778", {
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        return false;
      }
    }
    return true;
  }
};
_FileComponent.\u0275fac = function FileComponent_Factory(t) {
  return new (t || _FileComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(CategoryService));
};
_FileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileComponent, selectors: [["app-file"]], viewQuery: function FileComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 7);
    \u0275\u0275viewQuery(_c13, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileBrowser = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.folderBrowser = _t.first);
  }
}, inputs: { fileRest: "fileRest" }, decls: 21, vars: 8, consts: [[1, "m-t16"], ["id", "my-input", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["fileBrowser", ""], ["id", "folder-input", "webkitdirectory", "", "type", "file", "multiple", "", 2, "display", "none", 3, "change"], ["folderBrowser", ""], [1, "flex"], [3, "ngModel", "ngModelChange"], [1, "right0"], ["mat-raised-button", "", "color", "primary", "for", "my-input", 3, "click"], ["mat-raised-button", "", "color", "primary", "for", "folder-input", 3, "click"], [3, "datasource", "menuClass"], [3, "value"]], template: function FileComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "h1", 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "input", 1, 2);
    \u0275\u0275listener("change", function FileComponent_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const _r0 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(ctx.onFilesSelected($event, _r0));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 3, 4);
    \u0275\u0275listener("change", function FileComponent_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const _r1 = \u0275\u0275reference(7);
      return \u0275\u0275resetView(ctx.onFolderSelected($event, _r1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "mat-form-field")(10, "mat-label");
    \u0275\u0275text(11, "\uC784\uBCA0\uB529 \uBB38\uC11C \uD0C0\uC785");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-select", 6);
    \u0275\u0275listener("ngModelChange", function FileComponent_Template_mat_select_ngModelChange_12_listener($event) {
      return ctx.categoryService.categoryData.docType = $event;
    });
    \u0275\u0275repeaterCreate(13, FileComponent_For_14_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "button", 8);
    \u0275\u0275listener("click", function FileComponent_Template_button_click_16_listener() {
      return ctx.onFileBrowserClicked();
    });
    \u0275\u0275text(17, "\uBB38\uC11C \uB4F1\uB85D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 9);
    \u0275\u0275listener("click", function FileComponent_Template_button_click_18_listener() {
      return ctx.onFolderBrowserClicked();
    });
    \u0275\u0275text(19, "\uD3F4\uB354 \uB4F1\uB85D");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(20, "app-table", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("margin-right", "48px");
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", "10");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.categoryService.categoryData.namePath);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx.categoryService.categoryData.docType);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.docTypes);
    \u0275\u0275advance(7);
    \u0275\u0275property("datasource", ctx.categoryService.files)("menuClass", ctx.fileMenu);
  }
}, dependencies: [MatButton, NgControlStatus, NgModel, MatFormField, MatLabel, MatSelect, MatOption, TableComponent], styles: ["\n\n/*# sourceMappingURL=file.component.css.map */"] });
var FileComponent = _FileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileComponent, { className: "FileComponent", filePath: "Modules\\pages\\category-manage\\components\\organisms\\file\\file.component.ts", lineNumber: 21 });
})();

// Modules/pages/category-manage/components/page/category-manage-page/category-manage-page.component.ts
var _c04 = ["fileBrowser"];
var _CategoryManagePageComponent = class _CategoryManagePageComponent {
  constructor(globalService, dialog, _snackBar, categoryService) {
    this.globalService = globalService;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.categoryService = categoryService;
    this.users = [];
    this.fileRest = new FileRest(globalService, _snackBar, dialog, categoryService);
  }
  ngOnInit() {
    const user = this.globalService.currentUser.userData;
    if (!user.id)
      return;
    this.globalService.dalService.userHttp.getUsers().subscribe((d) => {
      this.users = d.data;
    });
  }
  onCategoryClicked(event) {
    if (!event.categoryIdPath) {
      alert("\uCE74\uD14C\uACE0\uB9AC \uACBD\uB85C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
      return;
    }
    this.categoryService.categoryData.namePath = event.categoryNamePath;
    this.categoryService.files = [];
    this.categoryService.categoryData.idPath = event.categoryIdPath;
    this.categoryService.categoryData.id = event.id;
    this.fileRest.getFiles(event.id).subscribe((d) => {
      this.categoryService.files = d;
    });
  }
};
_CategoryManagePageComponent.\u0275fac = function CategoryManagePageComponent_Factory(t) {
  return new (t || _CategoryManagePageComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(CategoryService));
};
_CategoryManagePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryManagePageComponent, selectors: [["app-category-manage-page"]], viewQuery: function CategoryManagePageComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileBrowser = _t.first);
  }
}, decls: 5, vars: 1, consts: [["left", ""], [3, "categoryClicked"], ["right", ""], [3, "fileRest"]], template: function CategoryManagePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-category-manage-template")(1, "div", 0)(2, "app-category", 1);
    \u0275\u0275listener("categoryClicked", function CategoryManagePageComponent_Template_app_category_categoryClicked_2_listener($event) {
      return ctx.onCategoryClicked($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "app-file", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("fileRest", ctx.fileRest);
  }
}, dependencies: [CategoryManageTemplateComponent, CategoryComponent, FileComponent], styles: ["\n\n.m-t25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.m-t16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=category-manage-page.component.css.map */"] });
var CategoryManagePageComponent = _CategoryManagePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryManagePageComponent, { className: "CategoryManagePageComponent", filePath: "Modules\\pages\\category-manage\\components\\page\\category-manage-page\\category-manage-page.component.ts", lineNumber: 24 });
})();

// Modules/pages/category-manage/category-manage-routing.module.ts
var routes = [
  {
    path: "",
    component: CategoryManagePageComponent
  }
];
var _CategoryManageRoutingModule = class _CategoryManageRoutingModule {
};
_CategoryManageRoutingModule.\u0275fac = function CategoryManageRoutingModule_Factory(t) {
  return new (t || _CategoryManageRoutingModule)();
};
_CategoryManageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoryManageRoutingModule });
_CategoryManageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var CategoryManageRoutingModule = _CategoryManageRoutingModule;

// Modules/pages/category-manage/category-manage.module.ts
var _CategoryManageModule = class _CategoryManageModule {
};
_CategoryManageModule.\u0275fac = function CategoryManageModule_Factory(t) {
  return new (t || _CategoryManageModule)();
};
_CategoryManageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CategoryManageModule });
_CategoryManageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  CategoryService
], imports: [
  CommonModule,
  CategoryManageRoutingModule,
  SharedModule,
  MatTableModule,
  MatPaginatorModule,
  MenuItemModule,
  MatListModule
  // TreeviewModule
] });
var CategoryManageModule = _CategoryManageModule;
export {
  CategoryManageModule
};
//# sourceMappingURL=chunk-AC24POT4.js.map
