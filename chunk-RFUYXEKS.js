import {
  select_default
} from "./chunk-XBPCQIDH.js";
import {
  GlobalService
} from "./chunk-WWIBHEXQ.js";
import {
  RouterModule
} from "./chunk-MZEG7Z3L.js";
import "./chunk-KGFIP23Z.js";
import {
  BehaviorSubject,
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-A2LCPREI.js";

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// Modules/editor/services/editor.service.ts
var _EditorService = class _EditorService {
  constructor() {
    this.slides = [
      {
        id: nanoid(),
        value: [{
          id: "id1",
          position: {
            start: {
              x: 200,
              y: 100
            },
            end: {
              x: 300,
              y: 300
            }
          },
          path: "M200,100 l100,0 l0,200 l-100,0 l0,-200z",
          stroke: "black",
          fill: "green",
          transform: ""
        }]
      },
      {
        id: nanoid(),
        value: [{
          id: "id2",
          position: {
            start: {
              x: 150,
              y: 150
            },
            end: {
              x: 250,
              y: 250
            }
          },
          path: "M200,200 m-50,0 a50,50,0,1,0,100,0 a50,50,0,1,0,-100,0",
          stroke: "black",
          fill: "green",
          transform: ""
        }]
      }
    ];
    this.$slideId = new BehaviorSubject(this.slides.first().id);
    this.currentSlideId = "";
    this.selectedShapeId = "";
    this.$changedShapeId = new BehaviorSubject("");
    this.isRotating = false;
    this.mousePosition = {
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 0,
        y: 0
      }
    };
    this.marginLeft = 250;
    this.marginTop = 64;
    this.previewClass = null;
  }
  findSlide(id) {
    return this.slides.find((d) => d.id === id);
  }
};
_EditorService.\u0275fac = function EditorService_Factory(t) {
  return new (t || _EditorService)();
};
_EditorService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EditorService, factory: _EditorService.\u0275fac });
var EditorService = _EditorService;

// Modules/editor/classes/slide.class.ts
var Slide = class {
  constructor(editorService, data) {
    this.editorService = editorService;
    this.isClicked = false;
    this.id = "";
    this.text = "";
    this.shapes = [];
    this.svg = data.svg;
    this.id = data.id;
    this.background = data.background;
    this.text = data.text;
  }
  addHoverEvent() {
  }
  addClickEvent() {
    this.svg.on("click", (event) => {
      this.editorService.$slideId.next(this.id);
    });
  }
  removeClickEvent() {
    this.svg.on("click", null);
  }
  removeBorder() {
    this.background.attr("style", "");
  }
  addBorder() {
    this.background.attr("style", "stroke: rgb(11, 87, 208); stroke-width: 20px;");
  }
  show() {
    this.svg.attr("class", "editor-show");
  }
  hide() {
    this.svg.attr("class", "editor-hide");
  }
  destroy() {
  }
};

// Modules/editor/classes/shape.class.ts
var Shape = class {
  constructor(editorService, data) {
    this.editorService = editorService;
    this.id = data.id;
    this.path = data.path;
    this.pagesDiv = data.pagesDiv;
  }
  //도형 이벤트
  hoverShape(path) {
    path.on("mouseenter", () => {
      if (this.editorService.isRotating)
        return;
      if (this.pagesDiv === null)
        return;
      this.pagesDiv.attr("class", "cursor-move");
    });
    path.on("mouseleave", () => {
      console.log("\uC5EC\uAE30\uB97C \uBD10!", this.pagesDiv);
      if (this.pagesDiv === null)
        return;
      this.pagesDiv.attr("class", "cursor-default");
    });
  }
};

// Modules/editor/components/organisms/filmstrip/filmstrip.component.ts
var _c0 = ["thumnails"];
var _FilmstripComponent = class _FilmstripComponent {
  constructor(globalService, editorService) {
    this.editorService = editorService;
    this.slides = [];
    this.previousId = 0;
    this.height = globalService.layoutService.getBodyHeight();
  }
  ngOnInit() {
    this.canvas = select_default(this.thumnails.nativeElement);
    this.editorService.slides.forEach((slideData, index) => {
      const slideClass = this.createSlide(slideData, index);
      slideClass.addClickEvent();
      this.slides.push(slideClass);
      slideData.value.forEach((shapeData) => {
        const shapePath = slideClass.svg.append("g").attr("id", shapeData.id).append("path");
        this.drawShape(shapePath, shapeData);
        const shapeClass = new Shape(this.editorService, { id: shapeData.id, path: shapePath, pagesDiv: null });
        slideClass.shapes.push(shapeClass);
      });
    });
    this.editorService.$slideId.subscribe((id) => {
      console.log("slideId", id);
      this.slides.forEach((slide) => {
        if (id === slide.id) {
          slide.isClicked = true;
          slide.addBorder();
          console.log();
          return;
        }
        slide.removeBorder();
        slide.isClicked = false;
      });
    });
    this.editorService.$changedShapeId.subscribe((id) => {
      console.log("\uC774\uBCA4\uD2B8 \uB4E4\uC5B4\uC634!@");
      if (!id)
        return;
      const shapeData = this.editorService.findSlide(this.editorService.currentSlideId)?.value.find((d) => d.id === this.editorService.selectedShapeId);
      if (!shapeData) {
        console.log("\uD574\uB2F9\uD558\uB294 \uB3C4\uD615\uC774 \uC5C6\uC74C");
        return;
      }
      const slideClass = this.slides.find((d) => d.id === this.editorService.currentSlideId);
      console.log("\uCC3E\uC740 \uD074\uB798\uC2A4", slideClass);
      if (!slideClass)
        return;
      const shape = slideClass?.shapes.find((d) => d.id === this.editorService.selectedShapeId);
      console.log("\uCC3E\uC740 \uB3C4\uD615", shape);
      this.drawShape(shape?.path, shapeData);
    });
  }
  ///svg 돔 덩어리들을 컴포넌트들처럼 생명주기를 달고 관리할 수는 없을까???????????????????????????????????????????????
  /**페이지 생성하기 */
  createSlide(slideData, index) {
    const slideGroup = this.canvas.append("g").attr("transform", `translate(0, ${2 + 102 * index})`);
    const text = slideGroup.append("text").attr("x", 31).attr("y", 20).text(index + 1);
    const svg = slideGroup.append("g").attr("transform", "translate(46,9)").append("svg").attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlns:xlink", "http://www.w3.org/1999/xlink").attr("width", 150).attr("height", 90).attr("viewBox", "0 0 800 400").attr("id", slideData.id);
    const background = svg.append("rect").attr("fill", "#ffffff").attr("width", "100%").attr("height", "100%").attr("rx", 60).attr("ry", 60);
    const slide = new Slide(this.editorService, {
      svg,
      id: slideData.id,
      background,
      text
    });
    return slide;
  }
  drawShape(svg, shape) {
    svg.attr("d", shape.path).attr("stroke", shape.stroke).attr("fill", shape.fill).attr("transform", shape.transform);
  }
};
_FilmstripComponent.\u0275fac = function FilmstripComponent_Factory(t) {
  return new (t || _FilmstripComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(EditorService));
};
_FilmstripComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilmstripComponent, selectors: [["app-filmstrip"]], viewQuery: function FilmstripComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.thumnails = _t.first);
  }
}, decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "200", 2, "height", "calc(100% - 4px)"], ["thumnails", ""], ["fill", "#fff", "fill-opacity", "0", "width", "100%", "height", "100%"]], template: function FilmstripComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 0, 1);
    \u0275\u0275element(2, "rect", 2);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=filmstrip.component.css.map */"] });
var FilmstripComponent = _FilmstripComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilmstripComponent, { className: "FilmstripComponent", filePath: "Modules\\editor\\components\\organisms\\filmstrip\\filmstrip.component.ts", lineNumber: 13 });
})();

// Modules/editor/classes/tool.class.ts
var Tool = class _Tool {
  static dx(position) {
    return position.end.x - position.start.x;
  }
  static dy(position) {
    return position.end.y - position.start.y;
  }
  static center(position) {
    return {
      x: Math.min(position.start.x, position.end.x) + Math.abs(_Tool.dx(position)) / 2,
      y: Math.min(position.start.y, position.end.y) + Math.abs(_Tool.dy(position)) / 2
    };
  }
};

// Modules/editor/classes/preview.class.ts
var Preview = class {
  constructor(editorService, data) {
    this.editorService = editorService;
    this.preview = data.preview;
    this.group = data.group;
    this.groupLine = data.groupLine;
    this.groupRotate = data.groupRotate;
    this.groupDots = data.groupDots;
    this.rotateButton = data.rotateButton;
    this.shapePosition = data.shapePosition;
    this.addMousedownRotateButton();
    this.addMouseenterRotateButton();
    this.addMouseleaveRotateButton();
  }
  addMousedownRotateButton() {
    this.rotateButton.on("mousedown", (event) => {
      console.log("click", event);
      event.stopPropagation();
      this.editorService.isRotating = true;
      const shapeId = this.editorService.selectedShapeId;
      this.editorService.mousePosition.start = {
        x: this.shapePosition.start.x + Tool.dx(this.shapePosition) / 2,
        y: event.y - this.editorService.marginTop
        //TODO filmstrip 크기 저장해놓기
      };
    });
  }
  // addClickGroup(){
  //     this.group.on('mousedown', (event: MouseEvent)=>{
  //         console.log('dddd');
  //         event.stopPropagation();
  //     })
  // }
  removeMousedownRotateButton() {
    this.rotateButton.on("mousedown", null);
  }
  addMouseenterRotateButton() {
    this.rotateButton.on("mouseenter", () => {
      console.log("enter enter");
      this.preview.attr("class", "cursor-cross");
    });
  }
  removeMouseenterRotateButton() {
    this.rotateButton.on("mouseenter", null);
  }
  removePath() {
  }
  destroy() {
    this.removeMousedownRotateButton();
    this.removeMouseenterRotateButton();
    this.preview.select("*").remove();
    this.preview.attr("pointer-events", "none");
    this.preview = null;
    this.group = null;
    this.groupLine = null;
    this.groupRotate = null;
    this.groupDots = null;
    this.rotateButton = null;
  }
  addMouseleaveRotateButton() {
    this.rotateButton.on("mouseleave", () => {
      console.log("leave leave");
      this.preview.attr("class", "cursor-default");
    });
  }
};

// Modules/editor/components/organisms/workspace/workspace.component.ts
var _WorkspaceComponent = class _WorkspaceComponent {
  //나중에 slide 객체 안에 해당하는 shapes 정보가 들어있으면 좋겠다.
  constructor(editorService) {
    this.editorService = editorService;
    this.subscriptions = [];
    this.slides = [];
    this.rotateValue = "";
  }
  ngOnInit() {
    this.pagesDiv = select_default("#pages");
    this.previewSvg = select_default("#preview");
    this.editorService.slides.forEach((slideData, index) => {
      const slideClass = this.createSlide(slideData, this.pagesDiv);
      this.slides.push(slideClass);
      slideData.value.forEach((shapeData) => {
        const shapePath = slideClass.svg.append("g").attr("id", shapeData.id).append("path");
        this.drawShape(shapePath, shapeData);
        const shapeClass = new Shape(this.editorService, { id: shapeData.id, path: shapePath, pagesDiv: this.pagesDiv });
        slideClass.shapes.push(shapeClass);
        shapeClass.hoverShape(shapeClass.path);
        this.clickShape(shapeClass.path, shapeData);
      });
    });
    const subscription1 = this.editorService.$slideId.subscribe((id) => {
      console.log("id", id);
      this.editorService.currentSlideId = id;
      this.slides.forEach((slide) => {
        if (id === slide.id) {
          slide.isClicked = true;
          slide.show();
          return;
        }
        slide.hide();
        slide.isClicked = false;
      });
    });
    this.subscriptions.push(subscription1);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((d) => {
      d.unsubscribe();
    });
  }
  //페이지 생성하기
  createSlide(slideData, pages) {
    const svg = pages.append("svg").attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlns:xlink", "http://www.w3.org/1999/xlink").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 800 400").attr("style", "position:absolute; top:0px; left:0px").attr("id", slideData.id);
    const background = svg.append("rect").attr("fill", "#ffffff").attr("width", "100%").attr("height", "100%");
    const slide = new Slide(this.editorService, {
      svg,
      id: slideData.id,
      background,
      text: "slide1"
    });
    return slide;
  }
  //TODO 같은거 반복되는 중. 위에것도!
  drawShape(svg, shape) {
    svg.attr("d", shape.path).attr("stroke", shape.stroke).attr("fill", shape.fill).attr("transform", shape.transform);
  }
  /**
    * 클릭하면 outline이 preview에 생겨야 함.
  */
  clickShape(path, shapeData) {
    path.on("mousedown", (event) => {
      console.log("\uC57C\uD638\uC57C\uD638");
      event.stopPropagation();
      this.selectedShape = shapeData;
      this.editorService.selectedShapeId = shapeData.id;
      this.drawOutline(shapeData);
    });
  }
  drawOutline(shapeData) {
    this.previewSvg.select("*").remove();
    const previewGroup = this.previewSvg.append("g").append("g");
    previewGroup.attr("transform", this.rotateValue);
    const groupLine = previewGroup.append("g").attr("pointer-events", "visiblePainted");
    const groupRotate = previewGroup.append("g").attr("pointer-events", "visiblePainted");
    const groupDots = previewGroup.append("g").attr("pointer-events", "visiblePainted");
    groupLine.append("path").attr("d", shapeData.path).attr("fill", "none").attr("stroke", "#1a73e8").attr("stroke-width", 10);
    console.log("shapeData", shapeData, shapeData.position.start.x + Tool.dx(shapeData.position) / 2);
    const rotateButton = groupRotate.append("circle").attr("cx", shapeData.position.start.x + Tool.dx(shapeData.position) / 2).attr("cy", Math.min(shapeData.position.start.y, shapeData.position.end.y) - 20).attr("r", 5).attr("fill", "pink");
    this.editorService.previewClass = new Preview(this.editorService, {
      preview: this.previewSvg,
      group: previewGroup,
      groupLine,
      groupRotate,
      groupDots,
      rotateButton,
      shapePosition: this.selectedShape.position
    });
  }
  //host element나 descendnts의 이벤트까지 잡아옴.
  onMousemove(event) {
    if (!this.editorService.isRotating)
      return;
    this.editorService.mousePosition.end = {
      x: event.x - this.editorService.marginLeft,
      y: event.y - this.editorService.marginTop
    };
    const angle = this.calculateAngle(this.editorService.mousePosition);
    if (!this.editorService.previewClass)
      return;
    this.rotateValue = `rotate(${angle} ${Tool.center(this.selectedShape.position).x} ${Tool.center(this.selectedShape.position).y})`;
    this.editorService.previewClass.group.attr("transform", this.rotateValue);
  }
  onMouseUp(event) {
    if (this.editorService.isRotating) {
      this.editorService.isRotating = false;
      const shapeData = this.editorService.findSlide(this.editorService.currentSlideId)?.value.find((d) => d.id === this.editorService.selectedShapeId);
      if (!shapeData) {
        console.log("\uD574\uB2F9\uD558\uB294 \uB3C4\uD615\uC774 \uC5C6\uC74C");
        return;
      }
      shapeData.transform = this.rotateValue;
      const slideClass = this.slides.find((d) => d.id === this.editorService.currentSlideId);
      console.log("\uCC3E\uC740 \uD074\uB798\uC2A4", slideClass);
      if (!slideClass)
        return;
      const shape = slideClass?.shapes.find((d) => d.id === this.editorService.selectedShapeId);
      console.log("\uCC3E\uC740 \uB3C4\uD615", shape);
      this.drawShape(shape?.path, shapeData);
      this.editorService.$changedShapeId.next(this.editorService.selectedShapeId);
      return;
    }
  }
  onMouseDown(event) {
  }
  //TODO 계산이 제대로 안된다!!!
  calculateAngle(mousePosition) {
    const pointA = mousePosition.start;
    const pointB = mousePosition.end;
    const pointC = Tool.center(this.selectedShape.position);
    const vectorAC = { x: pointC.x - pointA.x, y: pointC.y - pointA.y };
    const vectorBC = { x: pointC.x - pointB.x, y: pointC.y - pointB.y };
    const angleRadians = Math.atan2(vectorBC.y, vectorBC.x) - Math.atan2(vectorAC.y, vectorAC.x);
    let angleDegrees = angleRadians * (180 / Math.PI);
    angleDegrees = (angleDegrees + 360) % 360;
    console.log(angleDegrees, angleDegrees, pointA, pointB, pointC);
    return angleDegrees;
  }
};
_WorkspaceComponent.\u0275fac = function WorkspaceComponent_Factory(t) {
  return new (t || _WorkspaceComponent)(\u0275\u0275directiveInject(EditorService));
};
_WorkspaceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkspaceComponent, selectors: [["app-workspace"]], hostBindings: function WorkspaceComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousemove", function WorkspaceComponent_mousemove_HostBindingHandler($event) {
      return ctx.onMousemove($event);
    })("mouseup", function WorkspaceComponent_mouseup_HostBindingHandler($event) {
      return ctx.onMouseUp($event);
    })("mousedown", function WorkspaceComponent_mousedown_HostBindingHandler($event) {
      return ctx.onMouseDown($event);
    });
  }
}, decls: 3, vars: 0, consts: [[2, "height", "100%", "position", "relative", "background-color", "rebeccapurple"], ["id", "pages"], ["id", "preview", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100%", "height", "100%", "viewBox", "0 0 800 400", "pointer-events", "none", 2, "position", "absolute", "top", "0px", "left", "0px"]], template: function WorkspaceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg", 2);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=workspace.component.css.map */"] });
var WorkspaceComponent = _WorkspaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkspaceComponent, { className: "WorkspaceComponent", filePath: "Modules\\editor\\components\\organisms\\workspace\\workspace.component.ts", lineNumber: 15 });
})();

// Modules/editor/components/pages/editor-page/editor-page.component.ts
var _EditorPageComponent = class _EditorPageComponent {
  constructor(globalService, editorService) {
    this.editorService = editorService;
    this.height = globalService.layoutService.getBodyHeight();
  }
  //다른 곳 누르면 outline 사라지게
  //이벤트가 자식에서부터 올라오는데, 이벤트 명이 같아야 함!
  onMouseDown(event) {
    console.log("from page");
    this.editorService.previewClass?.destroy();
    this.editorService.previewClass = null;
  }
};
_EditorPageComponent.\u0275fac = function EditorPageComponent_Factory(t) {
  return new (t || _EditorPageComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(EditorService));
};
_EditorPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditorPageComponent, selectors: [["app-editor-page"]], hostBindings: function EditorPageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function EditorPageComponent_mousedown_HostBindingHandler($event) {
      return ctx.onMouseDown($event);
    });
  }
}, decls: 5, vars: 4, consts: [[2, "display", "flex"], [2, "background-color", "salmon"], [2, "flex-grow", "1"]], template: function EditorPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-filmstrip");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "app-workspace");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("height", ctx.height);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 250, "px");
  }
}, dependencies: [FilmstripComponent, WorkspaceComponent], styles: ["\n\n/*# sourceMappingURL=editor-page.component.css.map */"] });
var EditorPageComponent = _EditorPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditorPageComponent, { className: "EditorPageComponent", filePath: "Modules\\editor\\components\\pages\\editor-page\\editor-page.component.ts", lineNumber: 10 });
})();

// Modules/editor/editor-routing.module.ts
var routes = [
  {
    path: "",
    component: EditorPageComponent
  }
];
var _EditorRoutingModule = class _EditorRoutingModule {
};
_EditorRoutingModule.\u0275fac = function EditorRoutingModule_Factory(t) {
  return new (t || _EditorRoutingModule)();
};
_EditorRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditorRoutingModule });
_EditorRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var EditorRoutingModule = _EditorRoutingModule;

// Modules/editor/editor.module.ts
var _EditorModule = class _EditorModule {
};
_EditorModule.\u0275fac = function EditorModule_Factory(t) {
  return new (t || _EditorModule)();
};
_EditorModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditorModule });
_EditorModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  EditorService
], imports: [
  CommonModule,
  EditorRoutingModule
] });
var EditorModule = _EditorModule;
export {
  EditorModule
};
//# sourceMappingURL=chunk-RFUYXEKS.js.map
