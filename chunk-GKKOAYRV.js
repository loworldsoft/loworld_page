import {
  ConfirmDialogComponent,
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListSubheaderCssMatStyler,
  TodayFormatPipe
} from "./chunk-YAHTS4HN.js";
import {
  DalService,
  DataAbstract,
  DynamicLayoutService,
  HistoryService,
  MatDialog,
  MatSnackBar
} from "./chunk-P6TI5SFJ.js";
import {
  ActivatedRoute,
  MatIcon,
  MatIconButton,
  MatRipple,
  Router
} from "./chunk-QWAJT647.js";
import {
  NgClass,
  inject,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-WWQYCCAG.js";

// Modules/pages/chatbot/components/classes/chat-history.rest.ts
var ChatHistoryRest = class {
  constructor() {
    this.router = inject(Router);
    this.dialog = inject(MatDialog);
    this._snackBar = inject(MatSnackBar);
    this.dalService = inject(DalService);
    this.dynamicLayoutService = inject(DynamicLayoutService);
    this.historyService = inject(HistoryService);
  }
  delete(request) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uD788\uC2A4\uD1A0\uB9AC \uC0AD\uC81C",
        content: `\uD788\uC2A4\uD1A0\uB9AC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?`,
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.dalService.chatHistoryHttp.delete(request).subscribe((response) => {
        this._snackBar.open("\uD788\uC2A4\uD1A0\uB9AC\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", "\uD655\uC778", {
          duration: 2e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        if (request.chatPageId === this.historyService.currentChatPageId) {
          this.router.navigateByUrl("/chatbot");
          return;
        }
        this.historyService.allhistoryList = JSON.parse(response.data);
        const groupHistoryList = this.historyService.groupHistoryList();
        this.dynamicLayoutService.historyListContainer.instance.historyList = groupHistoryList;
      });
    });
  }
};

// Modules/pages/chatbot/components/classes/chat-history.menu.ts
var ChatHistoryMenuData = class {
  constructor() {
    this.restApi = inject(ChatHistoryRest);
    this.menuData = [
      {
        itemName: "\uC0AD\uC81C",
        icon: "delete",
        itemFunc: this.restApi.delete.bind(this.restApi),
        checkDisabled() {
          return false;
        }
      }
    ];
  }
};

// Modules/pages/chatflow/components/atom/list/list.component.ts
var _c0 = ["menu"];
var _c1 = (a0, a1, a2) => ({ "checked": a0, "base": a1, "clicked": a2 });
function ListComponent_For_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 2);
    \u0275\u0275listener("click", function ListComponent_For_2_For_4_Template_mat_list_item_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r13);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r12 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r12.onClickListItem(item_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 5);
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function ListComponent_For_2_For_4_Template_button_click_5_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r13);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r14 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r14.deleteHistory($event, item_r7.id));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", item_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(3, _c1, ctx_r6.isChecked, !ctx_r6.isChecked, ctx_r6.getClicked(item_r7.id)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.type === "complain" ? "\uBBFC\uC6D0 \uCC98\uB9AC" : item_r7.message, " ");
  }
}
function ListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "todayFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ListComponent_For_2_For_4_Template, 8, 7, "mat-list-item", 7, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, element_r1.header));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(element_r1.items);
  }
}
var _ListComponent = class _ListComponent extends DataAbstract {
  constructor() {
    super(...arguments);
    this.historyList = [];
    this.isChecked = false;
    this.isClicked = false;
    this.historyDeleteData = {
      userIdx: this.currentUser.userData.userIdx,
      chatPageId: ""
    };
    this.dialog = inject(MatDialog);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this._snackBar = inject(MatSnackBar);
    this.historyMenu = new ChatHistoryMenuData();
  }
  dataInit() {
    this.historyList = this.data;
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
  deleteHistory(event, id) {
    event.stopPropagation();
    this.historyDeleteData = {
      userIdx: this.currentUser.userData.userIdx,
      chatPageId: id
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "\uD788\uC2A4\uD1A0\uB9AC \uC0AD\uC81C",
        content: "\uD788\uC2A4\uD1A0\uB9AC\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
        btnYes: "\uC608",
        btnNo: "\uC544\uB2C8\uC694"
      }
    });
    dialogRef.afterClosed().subscribe((d) => {
      if (!d)
        return;
      this.dalService.chatHistoryHttp.delete(this.historyDeleteData).subscribe((response) => {
        this._snackBar.open("\uD788\uC2A4\uD1A0\uB9AC\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4", "\uD655\uC778", {
          duration: 2e3,
          horizontalPosition: "center",
          verticalPosition: "top"
        });
        if (this.historyDeleteData.chatPageId === this.historyService.currentChatPageId) {
          this.router.navigateByUrl("/chatbot");
          return;
        }
        this.historyService.allhistoryList = JSON.parse(response.data);
        const groupHistoryList = this.historyService.groupHistoryList();
        this.dynamicLayoutService.historyListContainer.instance.historyList = groupHistoryList;
      });
    });
  }
  // TODO: DOM에서 호출하기 떄문에 개선 필요 (중요이슈)
  getClicked(id) {
    return id === this.route.params.value.chatPageId;
  }
};
_ListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ListComponent_BaseFactory;
  return function ListComponent_Factory(t) {
    return (\u0275ListComponent_BaseFactory || (\u0275ListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ListComponent)))(t || _ListComponent);
  };
})();
_ListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuComponent = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 0, consts: [[1, "text-ellipsis"], ["mat-subheader", "", 2, "font-weight", "600"], ["matRipple", "", 3, "id", "click"], [2, "display", "flex"], ["matListItemTitle", "", 3, "ngClass"], [1, "example-spacer"], ["mat-icon-button", "", 2, "transform", "translate(0px, -6.8px)", 3, "click"], ["matRipple", "", 3, "id"]], template: function ListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list", 0);
    \u0275\u0275repeaterCreate(1, ListComponent_For_2_Template, 5, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.historyList);
  }
}, dependencies: [NgClass, MatIconButton, MatRipple, MatIcon, MatList, MatListItem, MatListSubheaderCssMatStyler, MatListItemTitle, TodayFormatPipe], styles: ['@charset "UTF-8";\n\n\n\n.text-ellipsis[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.checked[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 100px;\n  color: #3584ce;\n}\n.clicked[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-radius: 100px;\n  color: #3584ce !important;\n}\n.base[_ngcontent-%COMP%] {\n  color: rgb(71, 71, 71);\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=list.component.css.map */'] });
var ListComponent = _ListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "Modules\\pages\\chatflow\\components\\atom\\list\\list.component.ts", lineNumber: 25 });
})();

export {
  ChatHistoryRest,
  ChatHistoryMenuData,
  ListComponent
};
//# sourceMappingURL=chunk-GKKOAYRV.js.map
