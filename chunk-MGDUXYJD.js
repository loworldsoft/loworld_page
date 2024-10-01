import {
  basis_default,
  drag_default,
  identity,
  line_default,
  pointers_default,
  selectAll_default,
  select_default,
  zoom_default
} from "./chunk-S34LXEKR.js";
import {
  CategoryMenuData,
  CategoryRest
} from "./chunk-LZC6B32N.js";
import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatRadioButton,
  MatRadioGroup,
  MatSlideToggle,
  SharedModule,
  moveItemInArray
} from "./chunk-7EJGC4OO.js";
import {
  MatToolbar,
  MatToolbarRow
} from "./chunk-ZG6TFU3E.js";
import {
  Autoplay,
  CategoryCode,
  DataAbstract,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  GlobalService,
  HttpService,
  MatAutocomplete,
  MatAutocompleteTrigger,
  MatDialog,
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
  MatSnackBar,
  MatSuffix,
  NullCheckParameters,
  Swiper,
  TreeviewComponent
} from "./chunk-3LOGTTFB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MatButton,
  MatIcon,
  MatIconButton,
  MatOptgroup,
  MatOption,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  RouterModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WDMB75ZP.js";
import "./chunk-JBIIG4YR.js";
import {
  AsyncPipe,
  BehaviorSubject,
  EMPTY,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  ViewContainerRef,
  __async,
  __decorate,
  __spreadProps,
  __spreadValues,
  catchError,
  inject,
  map,
  startWith,
  tap,
  throwError,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsetComponentScope,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-MCEJEMSJ.js";

// Modules/pages/slots/service/select-calculate.service.ts
var _SelectCalculateService = class _SelectCalculateService {
  constructor() {
    this.squares = [];
    this.squareSize = 50;
    this.startHeight = 64 + 40 + 10;
    this.startWidth = 0;
    this.calcurateHeight = 50;
    this.borderSize = 0.1;
    this.mouseX = 0;
    this.mouseY = 0;
    this.horizontalTicks = [];
    this.verticalTicks = [];
    this.currentSquareIndex = null;
    this.zoomLevel = 1;
    this.fontSize = 14;
    this.isDragging = false;
    this.dragStart = null;
    this.dragEnd = null;
    this.dragging = false;
    this.draggedColumns = 0;
    this.draggedRows = 0;
    this.numColumns = 21;
    this.containerWidth = this.numColumns * this.squareSize;
    this.numRows = 15;
    this.sizeInfo = {};
  }
  // 마우스 위치를 기반으로 현재 사각형의 인덱스를 계산하는 함수
  calculateCurrentSquareIndex(x, y) {
    const effectiveX = x - this.startWidth;
    const effectiveY = y - this.startHeight;
    console.log("calculateCurrentSquareIndex", this.startWidth);
    if (effectiveX < 0 || effectiveY < 0) {
      this.currentSquareIndex = null;
      return;
    }
    const column = Math.floor(effectiveX / this.squareSize);
    const row = Math.floor(effectiveY / this.squareSize);
    this.currentSquareIndex = row * this.numColumns + column;
  }
  // 줌 수준에 따라 사각형의 크기와 화면에 표시될 사각형의 총 개수를 조정하는 함수
  calculateSquares() {
    const baseSquareSize = 50;
    this.squareSize = baseSquareSize / this.zoomLevel;
    this.fontSize = this.squareSize / 3;
    const totalSquares = this.numColumns * this.numRows;
    this.squares = Array.from({ length: totalSquares }, (_, index) => {
      return {
        index,
        isSelected: false,
        matched: false,
        size: { width: this.squareSize, height: this.squareSize, position: this.getSquareSize(index) }
      };
    });
  }
  calculateDragBoxStyle() {
    let dragStartX = 0;
    let dragStartY = 0;
    let dragEndX = 0;
    let dragEndY = 0;
    if (this.dragStart) {
      dragStartX = this.dragStart.x - this.startWidth;
      dragStartY = this.dragStart.y;
    }
    if (this.dragEnd) {
      dragEndX = this.dragEnd.x - this.startWidth;
      dragEndY = this.dragEnd.y - this.calcurateHeight;
    }
    const position = {
      left: Math.min(dragStartX, dragEndX) + "px",
      top: Math.min(dragStartY, dragEndY) + "px"
    };
    const size = {
      width: Math.abs(dragEndX - dragStartX) + "px",
      height: Math.abs(dragEndY - dragStartY) + "px"
    };
    return __spreadValues(__spreadValues({}, position), size);
  }
  getSquareSize(index) {
    const squareX = index % this.numColumns * this.squareSize + this.startWidth;
    const squareY = Math.floor(index / this.numColumns) * this.squareSize + this.startHeight;
    return { x: squareX, y: squareY };
  }
  // 드래그한 영역의 컬럼 수를 계산하는 메서드
  calculateDraggedColumns(dragStartX, dragEndX) {
    const startColumn = Math.floor((dragStartX - this.startWidth) / this.squareSize);
    const endColumn = Math.floor((dragEndX - this.startWidth) / this.squareSize);
    return Math.abs(endColumn - startColumn) + 1;
  }
  // 드래그한 영역의 행 수를 계산하는 메서드
  calculateDraggedRows(dragStartY, dragEndY) {
    const startY = dragStartY - this.startHeight;
    const endY = dragEndY - this.startHeight;
    const startRow = Math.floor(startY / this.squareSize);
    const endRow = Math.floor(endY / this.squareSize);
    return Math.abs(endRow - startRow) + 1;
  }
  showSelectedSquareIndices() {
    const selectedIndices = this.squares.filter((square) => square.isSelected).map((square) => square.index);
    this.sizeInfo.selectedIndices = selectedIndices;
  }
  calculateSelectedAreaDimensions() {
    if (this.squares.every((square) => !square.isSelected)) {
      return { width: 0, height: 0 };
    }
    const selectedSquares = this.squares.filter((square) => square.isSelected).map((square) => {
      return {
        row: Math.floor(square.index / this.numColumns),
        column: square.index % this.numColumns
      };
    });
    const minColumn = Math.min(...selectedSquares.map((square) => square.column));
    const maxColumn = Math.max(...selectedSquares.map((square) => square.column));
    const minRow = Math.min(...selectedSquares.map((square) => square.row));
    const maxRow = Math.max(...selectedSquares.map((square) => square.row));
    const width = (maxColumn - minColumn + 1) * this.squareSize;
    const height = (maxRow - minRow + 1) * this.squareSize;
    return { width, height };
  }
  showSelectedAreaDimensions() {
    const { width, height } = this.calculateSelectedAreaDimensions();
    this.sizeInfo.size = { width, height };
  }
  calculateSelectedAreaCorners() {
    const selectedSquares = this.squares.filter((square) => square.isSelected).map((square) => {
      return {
        row: Math.floor(square.index / this.numColumns),
        column: square.index % this.numColumns
      };
    });
    if (selectedSquares.length === 0) {
      return { topLeft: { x: 0, y: 0 }, topRight: { x: 0, y: 0 }, bottomLeft: { x: 0, y: 0 }, bottomRight: { x: 0, y: 0 } };
    }
    const minColumn = Math.min(...selectedSquares.map((square) => square.column));
    const maxColumn = Math.max(...selectedSquares.map((square) => square.column));
    const minRow = Math.min(...selectedSquares.map((square) => square.row));
    const maxRow = Math.max(...selectedSquares.map((square) => square.row));
    const topLeft = { x: minColumn * this.squareSize, y: minRow * this.squareSize };
    const topRight = { x: (maxColumn + 1) * this.squareSize, y: minRow * this.squareSize };
    const bottomLeft = { x: minColumn * this.squareSize, y: (maxRow + 1) * this.squareSize };
    const bottomRight = { x: (maxColumn + 1) * this.squareSize, y: (maxRow + 1) * this.squareSize };
    return { topLeft, topRight, bottomLeft, bottomRight };
  }
  showSelectedAreaCorners() {
    const corners = this.calculateSelectedAreaCorners();
    this.sizeInfo.corners = corners;
    this.sizeInfo.size.position = { x: corners.topLeft.x, y: corners.topLeft.y };
  }
  selection() {
    if (!this.dragStart || !this.dragEnd)
      return;
    const dragStartX = Math.min(this.dragStart.x - this.startWidth, this.dragEnd.x - this.startWidth);
    const dragEndX = Math.max(this.dragStart.x - this.startWidth, this.dragEnd.x - this.startWidth);
    const dragStartY = Math.min(this.dragStart.y, this.dragEnd.y);
    const dragEndY = Math.max(this.dragStart.y, this.dragEnd.y) - this.calcurateHeight;
    this.draggedColumns = this.calculateDraggedColumns(dragStartX, dragEndX);
    this.draggedRows = this.calculateDraggedRows(dragStartY, dragEndY);
    this.squares.forEach((square) => {
      const squareX = square.index % this.numColumns * this.squareSize;
      const squareY = Math.floor(square.index / this.numColumns) * this.squareSize;
      const squareEndX = squareX + this.squareSize;
      const squareEndY = squareY + this.squareSize;
      if (squareX < dragEndX && squareEndX > dragStartX && squareY < dragEndY && squareEndY > dragStartY) {
        square.isSelected = !square.isSelected;
      }
    });
    this.dragStart = null;
    this.dragEnd = null;
    this.showSelectedSquareIndices();
    this.showSelectedAreaDimensions();
    this.showSelectedAreaCorners();
  }
};
_SelectCalculateService.\u0275fac = function SelectCalculateService_Factory(t) {
  return new (t || _SelectCalculateService)();
};
_SelectCalculateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SelectCalculateService, factory: _SelectCalculateService.\u0275fac, providedIn: "root" });
var SelectCalculateService = _SelectCalculateService;

// Modules/pages/slots/svg/event.abstract.ts
var _EventAbstract = class _EventAbstract extends DataAbstract {
  constructor(globalService) {
    super();
    this.globalService = globalService;
    this.loaded = new EventEmitter();
    this.changed = new EventEmitter();
    this.delegate = new EventEmitter();
  }
  reduxRemove() {
  }
  reduxData() {
  }
  add(data) {
  }
  delete() {
  }
  sizeWith(data) {
  }
  resize(data) {
  }
};
_EventAbstract.\u0275fac = function EventAbstract_Factory(t) {
  return new (t || _EventAbstract)(\u0275\u0275directiveInject(GlobalService));
};
_EventAbstract.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _EventAbstract, outputs: { loaded: "loaded", changed: "changed", delegate: "delegate" }, features: [\u0275\u0275InheritDefinitionFeature] });
var EventAbstract = _EventAbstract;

// Modules/pages/slots/svg/svg.enum.ts
var DataType;
(function(DataType2) {
  DataType2["add"] = "add";
  DataType2["delete"] = "delete";
  DataType2["none"] = "none";
  DataType2["confirm"] = "confirm";
  DataType2["sizeWith"] = "sizeWith";
  DataType2["resize"] = "resize";
})(DataType || (DataType = {}));
var DrawColor;
(function(DrawColor2) {
  DrawColor2["transparent"] = "transparent";
  DrawColor2["none"] = "none";
  DrawColor2["white"] = "white";
  DrawColor2["White1"] = "#F6F6F6";
  DrawColor2["black"] = "black";
  DrawColor2["black1"] = "#202328";
  DrawColor2["black2"] = "#272b30";
  DrawColor2["dark1"] = "#2c2d30";
  DrawColor2["dark2"] = "#1e1f21";
  DrawColor2["gray1"] = "#EAEAEA";
  DrawColor2["gray2"] = "#D5D5D5";
  DrawColor2["gray3"] = "#BDBDBD";
  DrawColor2["gray4"] = "#8C8C8C";
  DrawColor2["gray5"] = "#5D5D5D";
  DrawColor2["gray6"] = "#353535";
  DrawColor2["gray7"] = "#282828";
  DrawColor2["gray8"] = "#161616";
  DrawColor2["blue"] = "#4374D9";
  DrawColor2["sky"] = "#5CD1E5";
  DrawColor2["green"] = "#46B29D";
  DrawColor2["red"] = "#CC3D3D";
  DrawColor2["brown"] = "#783712";
  DrawColor2["yellow"] = "#FFBB00";
  DrawColor2["glassBack"] = "#BAE9F9";
  DrawColor2["Math1"] = "#FF5E00";
  DrawColor2["Math4"] = "#D941C5";
  DrawColor2["Math5"] = "#A566FF";
  DrawColor2["Math6"] = "#F361A6";
  DrawColor2["Math7"] = "#f44336";
  DrawColor2["Math9"] = "#6799FF";
  DrawColor2["Math10"] = " #46B29D";
  DrawColor2["Step1"] = "#F15F5F";
  DrawColor2["Step2"] = "#F29661";
  DrawColor2["Step3"] = "#F2CB61";
  DrawColor2["Step4"] = "#E5D85C";
  DrawColor2["Step5"] = "#BCE55C";
  DrawColor2["Step6"] = "#86E57F";
  DrawColor2["Step9"] = "#6B66FF";
  DrawColor2["Step11"] = "#F361DC";
})(DrawColor || (DrawColor = {}));
var DrawType;
(function(DrawType2) {
  DrawType2["rect"] = "rect";
  DrawType2["ellipse"] = "ellipse";
  DrawType2["image"] = "image";
  DrawType2["circle"] = "circle";
  DrawType2["text"] = "text";
  DrawType2["path"] = "path";
  DrawType2["line"] = "line";
  DrawType2["foreignObject"] = "foreignObject";
  DrawType2["div"] = "xhtml:div";
})(DrawType || (DrawType = {}));
var EventType;
(function(EventType2) {
  EventType2["click"] = "click";
  EventType2["drag_start"] = "start";
  EventType2["drag_dragging"] = "drag";
  EventType2["drag_end"] = "end";
})(EventType || (EventType = {}));

// Modules/pages/slots/svg/svg.abstract.ts
var _c0 = ["canvas"];
var _c1 = ["container"];
var _SvgAbstract = class _SvgAbstract extends EventAbstract {
  constructor(globalService) {
    super(globalService);
    this.globalService = globalService;
    this.title = "";
    this.childComponentRefs = [];
    this.linePoints = [[0, 0], [0, 0], [100, 100]];
    this.isCurve = true;
    this.eventState = {
      x: 0,
      y: 0,
      tempX: 0,
      tempY: 0,
      active: false
    };
    this.position = { x: 0, y: 0 };
    this.zoomInit = { x: 0, y: 0, s: 1 };
    this.size = { width: 100, height: 100 };
    this.colorPalette = [
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
      "#795548",
      "#607D8B",
      "#9E9E9E",
      "#212121",
      "#000000"
      // 검정
    ];
  }
  initSVG() {
    this.componentSVG = select_default(this.canvas.nativeElement);
    this.initBackground();
  }
  initSvgWithZoom() {
    this.initSVG();
    const zoom = { x: 0, y: 0, k: 1, isZoom: true };
    const transform = identity;
    transform.x = zoom.x;
    transform.y = zoom.y;
    transform.k = zoom.k;
    const d3Zoom = zoom_default().scaleExtent([0.05, 50]).extent([
      [0, 0],
      [300, 300]
    ]).on("zoom", (event) => {
      if (zoom.isZoom) {
        this.zoomInit.s = event.transform.k;
        this.zoomInit.x = event.transform.x;
        this.zoomInit.y = event.transform.y;
        this.forwardGroundSVG.attr("transform", `translate(${this.zoomInit.x}, ${this.zoomInit.y})scale(${this.zoomInit.s})`);
      }
    });
    this.componentSVG.call(d3Zoom).call(d3Zoom.transform, transform).on("dblclick.zoom", null);
  }
  initBackground() {
    this.backgroundSVG = this.createGroup(this.componentSVG, { x: 0, y: 0 }, "back");
    this.forwardGroundSVG = this.createGroup(this.componentSVG, { x: 0, y: 0 }, "forward");
    this.forwardGroundSVG.line = this.createGroup(this.forwardGroundSVG, { x: 0, y: 0 }, "forwardLine0");
    this.forwardGroundSVG.node = this.createGroup(this.forwardGroundSVG, { x: 0, y: 0 }, "forwardNode");
  }
  loadedChild() {
  }
  createCard(position) {
  }
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  getRandomNumberBetween(index) {
    return Math.floor(Math.random() * index + 1);
  }
  getRandomGrayColor() {
    const value = Math.floor(Math.random() * 256).toString(16);
    const gray = value.padStart(2, "0");
    return "#" + gray + gray + gray;
  }
  getBrighterColorByIndex(index, baseColor = "#000000") {
    const maxIndex = 10;
    const brightnessStep = 255 / maxIndex;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    const brightness = Math.round(clampedIndex * brightnessStep);
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);
    const newR = Math.min(r + brightness, 255);
    const newG = Math.min(g + brightness, 255);
    const newB = Math.min(b + brightness, 255);
    const newColor = `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
    return newColor;
  }
  sizeSVG(width, height) {
    this.componentSVG.attr("height", height);
    this.componentSVG.attr("width", width);
  }
  createGroup(entity, position = { x: 0, y: 0 }, name) {
    const group = entity.append("g").attr("transform", `translate(${position.x}, ${position.y})`);
    group.attr("id", name);
    return group;
  }
  createSVG(entity, values) {
    const item = entity.append(values.type).attr("id", values.id).attr("class", values.class).attr("xlink:href", values.href).attr("d", values.geometry).attr("x", values.x).attr("x1", values.x1).attr("x2", values.x2).attr("y", values.y).attr("y1", values.y1).attr("y2", values.y2).attr("cx", values.cx).attr("cy", values.cy).attr("r", values.r).attr("rx", values.rx).attr("ry", values.ry).attr("width", values.width).attr("height", values.height).attr("fill", values.fill).attr("filter", values.filter).attr("clip-path", values.clipPath).attr("stroke", values.stroke).attr("stroke-dasharray", values.strokeDasharray).attr("stroke-width", values.strokeWidth).attr("stroke-linecap", values.strokeLinecap).attr("stroke-linejoin", values.strokeLinejoin).attr("stroke-miterlimit", values.strokeMiterlimit).attr("font-size", values.fontSize).attr("font-weight", values.fontWeight).attr("opacity", values.opacity).attr("fill-opacity", values.fillOpacity).attr("transform", `translate(${values.translate ? values.translate.x : 0}, ${values.translate ? values.translate.y : 0})`);
    if (values.type === DrawType.text) {
      item.text(values.text);
    }
    return item;
  }
  select(entity, valueFunction) {
    entity.on(EventType.click, (event) => {
      valueFunction(EventType.click);
    });
  }
  drag(entity, callback = () => {
  }, action = this.dragEvent.bind(this, entity, callback)) {
    entity.call(drag_default().on(EventType.drag_start, (event) => {
      action(EventType.drag_start, event);
    }).on(EventType.drag_dragging, (event) => {
      action(EventType.drag_dragging, event);
    }).on(EventType.drag_end, (event) => {
      action(EventType.drag_end, event);
    }));
    entity.attr("cursor", "pointer");
  }
  dragEvent(target, action, type, event) {
    switch (type) {
      case EventType.drag_start:
        this.currentCard.attr("fill", this.getRandomColor());
        target.node().parentNode.parentNode.appendChild(this.componentSVG.node());
        this.mousePoint = this.getPointer(event, target);
        break;
      case EventType.drag_dragging:
        const x = event.x - this.mousePoint.x;
        const y = event.y - this.mousePoint.y;
        this.eventState.x = x;
        this.eventState.y = y;
        this.position.x = this.eventState.x;
        this.position.y = this.eventState.y;
        target.attr("transform", `translate(${x}, ${y})`);
        if (action) {
          action();
        }
        break;
      case EventType.drag_end:
        break;
    }
  }
  getPointer(event, node, minus = { x: 0, y: 0 }) {
    const pointer = pointers_default(event, node.node())[0];
    return { x: pointer[0] - minus.x, y: pointer[1] - minus.y };
  }
  setInitData() {
    this.size = this.initData?.size ?? this.size;
    this.position = this.initData?.position ?? this.position;
  }
  setMultiTextLimit(target, text, width, lineH = 25, x = 0, y = 0) {
    if (text == null) {
      return 0;
    }
    const words = text.split(/\s+/).reverse();
    let word, line = [], lineNumber = 0, lineHeight = 1.1;
    let tspan = target.text(null).append("tspan");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        lineNumber++;
        if (lineNumber < 2) {
          const height = lineNumber * lineH + y;
          tspan = target.append("tspan").attr("x", x).attr("y", height).text(word);
        }
      }
    }
    return lineNumber;
  }
  setMultiText(target, text, width, lineH = 25, x = 0, y = 0) {
    if (text == null) {
      return 0;
    }
    const words = text.split(/\s+/).reverse();
    let isBr = false;
    let word, line = [], lineNumber = 0, lineHeight = 1.1;
    let tspan = target.text(null).append("tspan");
    while (word = words.pop()) {
      if (word === "|") {
        lineNumber++;
        isBr = true;
      }
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width || isBr) {
        isBr = false;
        line.pop();
        tspan.text(line.join(" "));
        line = [word.replaceAll("|", "")];
        lineNumber++;
        const height = lineNumber * lineH + y;
        tspan = target.append("tspan").attr("x", x).attr("y", height).text(word);
      }
    }
    return lineNumber;
  }
  setTranslate(entity, x, y) {
    if (entity == null)
      return;
    return entity.attr("transform", `translate(${x},${y})`);
  }
  getStartXAxis(target, baseTarget, min) {
    const sum = 1;
    const targetWidth = target.node().getBoundingClientRect().width * sum / 2, center = baseTarget.node().getBoundingClientRect().width * sum / 2, myWidth = center - targetWidth;
    if (myWidth < min) {
      return min;
    } else {
      return myWidth;
    }
  }
  setItemCenter(target, baseTarget, x = 0, y = 0, min = 0) {
    const xWidth = this.getStartXAxis(target, baseTarget, min);
    target.attr("transform", `translate(${xWidth + x},${y})`);
    return xWidth + x;
  }
  getLinePoint(end, start, isOpposite) {
    let x, y, endx, endy;
    if (isOpposite) {
      endx = start.x + this.position.x;
      endy = start.y + this.position.y;
      x = end.x + start.x;
      y = end.y + start.y;
    } else {
      x = start.x + this.position.x;
      y = start.y + this.position.y;
      endx = end.x + start.x;
      endy = end.y + start.y;
    }
    this.linePoints[0] = [x, y];
    this.linePoints[2] = [endx, endy];
    if (this.isCurve) {
      const length = endx - x;
      const centerX = x + length / 50;
      const centerY = endy;
      this.linePoints[1] = [centerX, centerY];
    } else {
      this.linePoints[1] = [x, y];
    }
  }
  createCurveLine(end, start, isOpposite = false) {
    this.getLinePoint(end, start, isOpposite);
    const lineGenerator = line_default().curve(basis_default);
    const pathData = lineGenerator(this.linePoints);
    const lineNode = this.createSVG(this.forwardGroundSVG.line, {
      type: DrawType.path,
      id: "nodeLine",
      geometry: pathData,
      fill: DrawColor.transparent,
      strokeWidth: 6,
      stroke: this.getRandomColor(),
      opacity: 0.7
    });
    const nodeBack = select_default("#forwardLine0").node();
    nodeBack.appendChild(lineNode.node());
  }
  deletelines() {
    selectAll_default("#nodeLine").remove();
  }
};
_SvgAbstract.\u0275fac = function SvgAbstract_Factory(t) {
  return new (t || _SvgAbstract)(\u0275\u0275directiveInject(GlobalService));
};
_SvgAbstract.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SvgAbstract, viewQuery: function SvgAbstract_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
    \u0275\u0275viewQuery(_c1, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvas = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature] });
var SvgAbstract = _SvgAbstract;

// Modules/pages/slots/slot.abstract.ts
var _SlotAbstract = class _SlotAbstract extends SvgAbstract {
  constructor() {
    super(...arguments);
    this.formValue = "contentValue";
    this.parentStyle = {
      position: "absolute",
      zIndex: "999",
      top: "0px",
      left: "0px"
    };
    this.style = {
      width: "100px",
      height: "100px",
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      top: "10px",
      left: "40px",
      opacity: "0.9",
      border: "0.1px solid black",
      overflowX: "hidden"
    };
    this.layerStyle = {
      width: "100px",
      height: "100px",
      position: "absolute",
      overflow: "hidden",
      top: "10px",
      left: "40px"
    };
  }
  dataInit() {
    this.title = `${this.data.title ?? "NONE"}`;
    this.style.width = `${this.data.size.width}px`;
    this.style.height = `${this.data.size.height}px`;
    this.style.left = `${this.data.size.position.x}px`;
    this.style.top = `${this.data.size.position.y}px`;
    this.parentStyle.top = `${this.data.size.position.y + 3}px`;
    this.parentStyle.left = `${this.data.size.position.x + 5}px`;
    this.layerStyle.width = `${this.data.size.width}px`;
    this.layerStyle.height = `${this.data.size.height}px`;
    this.layerStyle.left = `${this.data.size.position.x}px`;
    this.layerStyle.top = `${this.data.size.position.y}px`;
  }
  bodyBind() {
    if (this.globalService.slotService.isBodyBind || this.data.isBodyBind) {
      this.globalService.slotService.bodyZoneInstance.bind(this);
    }
  }
  bindInstance() {
    this.data.selectedIndices.forEach((d) => {
      this.globalService.slotService.dockingService.slots.selectService.squares[d].instance.bind(this);
    });
    this.bodyBind();
  }
  loadSlot() {
    this.globalService.slotService.dockingService.clearAllComponent();
    const slot = localStorage.getItem("slot");
    if (!slot)
      return;
    this.globalService.slotService.dockingService.slotData = JSON.parse(slot);
    this.globalService.slotService.dockingService.slotData?.forEach((d) => {
      const zoneName = "default";
      this.globalService.slotService.dockingService.createComponent(zoneName, SlotDefaultComponent, d);
    });
    this.loadBodySlot();
  }
  loadBodySlot() {
    const bodyData = JSON.parse(localStorage.getItem("slotBody"));
    console.log("slotBody data", bodyData);
    this.globalService.slotService.dockingService.bodySlotData = bodyData ?? [];
    bodyData?.filter((d) => d.key === this.globalService.slotService.currentBodyKey)?.forEach((d) => {
      const zoneName = "body";
      this.globalService.slotService.dockingService.createComponent(zoneName, SlotDefaultComponent, d.value);
    });
  }
  clearSlot() {
    this.globalService.slotService.dockingService.slotData = [];
    localStorage.setItem("slot", JSON.stringify(this.globalService.slotService.dockingService.slotData));
    this.globalService.httpService.snackBar("\uCD08\uAE30\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
  }
  clearBodySlotByIndex(key) {
    this.globalService.slotService.dockingService.bodySlotData = this.globalService.slotService.dockingService.bodySlotData?.filter((d) => d.key !== key);
    localStorage.setItem("slotBody", JSON.stringify(this.globalService.slotService.dockingService.bodySlotData));
    this.globalService.httpService.snackBar(`${key} Body Slot \uCD08\uAE30\uD654 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.`);
  }
  clearBodySlot() {
    this.globalService.slotService.dockingService.bodySlotData = [];
    localStorage.setItem("slotBody", JSON.stringify(this.globalService.slotService.dockingService.bodySlotData));
  }
  setSlot(data) {
    if (data.isBodyBind) {
      this.setBodySlot(this.globalService.slotService.isBodyMatch, data);
    } else {
      this.globalService.slotService.dockingService.slotData = this.globalService.slotService.dockingService.slotData ?? [];
      this.globalService.slotService.dockingService.slotData.push(structuredClone(data));
      localStorage.setItem("slot", this.globalService.slotService.dockingService.slotData.stringify());
    }
  }
  removeBodySlotByKey() {
    const updatedBodySlotData = this.globalService.slotService.dockingService.bodySlotData.filter((item) => item.key !== this.globalService.slotService.currentBodyKey);
    this.globalService.slotService.dockingService.bodySlotData = structuredClone(updatedBodySlotData);
  }
  setBodySlot(isBodyMatch, data) {
    const slotBodyData = this.globalService.slotService.dockingService.bodySlotData;
    const result = {
      key: this.globalService.slotService.currentBodyKey,
      value: structuredClone(data)
    };
    slotBodyData.push(result);
    localStorage.setItem("slotBody", JSON.stringify(this.globalService.slotService.dockingService.bodySlotData));
  }
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  notSlotDrag(event) {
    console.log("notSlotDrag");
    this.globalService.slotService.isPossibleSlotDrag = false;
  }
  setFormData() {
    this.data.customData.key = this.formValue;
    localStorage.setItem("slotBody", JSON.stringify(this.globalService.slotService.dockingService.bodySlotData));
  }
};
_SlotAbstract.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotAbstract_BaseFactory;
  return function SlotAbstract_Factory(t) {
    return (\u0275SlotAbstract_BaseFactory || (\u0275SlotAbstract_BaseFactory = \u0275\u0275getInheritedFactory(_SlotAbstract)))(t || _SlotAbstract);
  };
})();
_SlotAbstract.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SlotAbstract, features: [\u0275\u0275InheritDefinitionFeature] });
var SlotAbstract = _SlotAbstract;
__decorate([
  NullCheckParameters
], SlotAbstract.prototype, "setBodySlot", null);

// Modules/pages/slots/components/default/default.component.ts
var _SlotDefaultComponent = class _SlotDefaultComponent extends SlotAbstract {
  dataInit() {
    super.dataInit();
    this.createComponentType();
  }
  createComponentType() {
    const item = this.globalService.slotService.dockingService.states.find((d) => d.name === this.title) ?? this.globalService.slotService.dockingService.states.first();
    this.globalService.slotService.dockingService.createComponent(item.type, item.component, this.data);
  }
};
_SlotDefaultComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotDefaultComponent_BaseFactory;
  return function SlotDefaultComponent_Factory(t) {
    return (\u0275SlotDefaultComponent_BaseFactory || (\u0275SlotDefaultComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotDefaultComponent)))(t || _SlotDefaultComponent);
  };
})();
_SlotDefaultComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotDefaultComponent, selectors: [["app-slot-default"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function SlotDefaultComponent_Template(rf, ctx) {
}, styles: ["\n\n/*# sourceMappingURL=default.component.css.map */"] });
var SlotDefaultComponent = _SlotDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotDefaultComponent, { className: "SlotDefaultComponent", filePath: "Modules\\pages\\slots\\components\\default\\default.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/zone-body/zone-body.component.ts
var _SlotZoneBodyComponent = class _SlotZoneBodyComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.components = [];
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.slotService.bodyZoneInstance = this;
    this.style.opacity = "0.3";
  }
  bind(instance) {
    this.components.push(instance);
  }
  click() {
    return __async(this, null, function* () {
      this.globalService.slotService.openSlotBottomSheetBody();
      return true;
    });
  }
};
_SlotZoneBodyComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotZoneBodyComponent_BaseFactory;
  return function SlotZoneBodyComponent_Factory(t) {
    return (\u0275SlotZoneBodyComponent_BaseFactory || (\u0275SlotZoneBodyComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotZoneBodyComponent)))(t || _SlotZoneBodyComponent);
  };
})();
_SlotZoneBodyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotZoneBodyComponent, selectors: [["app-slot-zone-body"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngStyle"]], template: function SlotZoneBodyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=zone-body.component.css.map */"] });
var SlotZoneBodyComponent = _SlotZoneBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotZoneBodyComponent, { className: "SlotZoneBodyComponent", filePath: "Modules\\pages\\slots\\components\\zone-body\\zone-body.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/bar-navigation/navigation-bar.component.ts
var _c02 = (a0) => ({ "selected-menu-item": a0 });
function SlotNavigationBarComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function SlotNavigationBarComponent_For_15_Template_button_click_0_listener($event) {
      const restoredCtx = \u0275\u0275restoreView(_r9);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onClick(item_r3, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const _r0 = \u0275\u0275reference(2);
    \u0275\u0275property("matMenuTriggerFor", _r0)("ngClass", \u0275\u0275pureFunction1(3, _c02, ctx_r1.selectedMenuItem === item_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.title, " ");
  }
}
function SlotNavigationBarComponent_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Add a menu ");
  }
}
var _SlotNavigationBarComponent = class _SlotNavigationBarComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.matchingName = "\uB9E4\uCE6D \uC2DC\uC791";
  }
  ngOnInit() {
    console.log("navigation", this.data.customData.menu);
    this.globalService.slotService.slot.linkService.navigationData = this.data.customData.menu;
    this.bindInstance();
  }
  ngAfterViewInit() {
  }
  bodyLink() {
    this.globalService.slotService.currentBodyKey = this.selectedMenuItem.title;
    console.log("currentBodyKey", this.globalService.slotService.currentBodyKey);
    localStorage.setItem("bodyLink", this.globalService.slotService.currentBodyKey);
    this.globalService.slotService.dockingService.linkComponent("body");
    this.loadBodySlot();
  }
  setMatching() {
    if (!this.globalService.slotService.isBodyMatch) {
      this.globalService.slotService.isBodyMatch = true;
      this.globalService.slotService.isSlotWork = true;
      this.matchingName = "\uB9E4\uCE6D \uC644\uB8CC";
    } else {
      this.globalService.slotService.isBodyMatch = false;
      this.globalService.slotService.isSlotWork = false;
      this.matchingName = "\uB9E4\uCE6D \uC2DC\uC791";
    }
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  onContextMenu(event) {
    this.menu.openMenu();
    event.preventDefault();
  }
  onClick(item, event) {
    this.bindBodyKey(item);
    if (event.button === 0) {
    }
  }
  bindBodyKey(item) {
    this.selectedMenuItem = item;
  }
  destroyAllComponent() {
    this.globalService.slotService.dockingService.destroyComponent("body");
  }
  destroyBodyIndexComponent() {
    this.globalService.slotService.dockingService.destroyComponent("body");
  }
};
_SlotNavigationBarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotNavigationBarComponent_BaseFactory;
  return function SlotNavigationBarComponent_Factory(t) {
    return (\u0275SlotNavigationBarComponent_BaseFactory || (\u0275SlotNavigationBarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotNavigationBarComponent)))(t || _SlotNavigationBarComponent);
  };
})();
_SlotNavigationBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotNavigationBarComponent, selectors: [["app-slot-navigation-bar"]], viewQuery: function SlotNavigationBarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatMenuTrigger, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menu = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 6, consts: [[3, "ngStyle"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [2, "margin-top", "-10px"], [1, "selected-menu-item"], [1, "spacer"], ["mat-button", "", 2, "margin-left", "10px", "color", "black !important", "border", "2px solid black", "font-weight", "bold", 3, "matMenuTriggerFor", "ngClass", "click"], ["mat-button", "", "style", "margin-left: 10px; color:black !important; border: 2px solid black; font-weight: bold;", 3, "matMenuTriggerFor", "ngClass"]], template: function SlotNavigationBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-menu", null, 1)(3, "button", 2);
    \u0275\u0275listener("click", function SlotNavigationBarComponent_Template_button_click_3_listener() {
      return ctx.bodyLink();
    });
    \u0275\u0275text(4, "Link");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 2);
    \u0275\u0275listener("click", function SlotNavigationBarComponent_Template_button_click_5_listener() {
      return ctx.destroyBodyIndexComponent();
    });
    \u0275\u0275text(6, "Destory");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-toolbar")(8, "mat-toolbar-row", 3)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 5);
    \u0275\u0275repeaterCreate(14, SlotNavigationBarComponent_For_15_Template, 2, 5, "button", 7, \u0275\u0275repeaterTrackByIndex, false, SlotNavigationBarComponent_ForEmpty_16_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(9);
    \u0275\u0275styleProp("color", "black");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.data.customData.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" - ", ctx.globalService.slotService.currentBodyKey, "");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.globalService.slotService.slot.linkService.navigationData);
  }
}, dependencies: [NgClass, NgStyle, MatButton, MatMenu, MatMenuItem, MatMenuTrigger, MatToolbar, MatToolbarRow], styles: ['@charset "UTF-8";\n\n\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.selected-menu-item[_ngcontent-%COMP%] {\n  color: rgb(235, 160, 29);\n}\n/*# sourceMappingURL=navigation-bar.component.css.map */'] });
var SlotNavigationBarComponent = _SlotNavigationBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotNavigationBarComponent, { className: "SlotNavigationBarComponent", filePath: "Modules\\pages\\slots\\components\\bar-navigation\\navigation-bar.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/components/bar-menu/menu-bar.component.ts
var _SlotMenuBarComponent = class _SlotMenuBarComponent extends SlotAbstract {
};
_SlotMenuBarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotMenuBarComponent_BaseFactory;
  return function SlotMenuBarComponent_Factory(t) {
    return (\u0275SlotMenuBarComponent_BaseFactory || (\u0275SlotMenuBarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotMenuBarComponent)))(t || _SlotMenuBarComponent);
  };
})();
_SlotMenuBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotMenuBarComponent, selectors: [["app-slot-menu-bar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotMenuBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=menu-bar.component.css.map */"] });
var SlotMenuBarComponent = _SlotMenuBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotMenuBarComponent, { className: "SlotMenuBarComponent", filePath: "Modules\\pages\\slots\\components\\bar-menu\\menu-bar.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/bar-content-list/content-list-bar.component.ts
var _SlotContentListBarComponent = class _SlotContentListBarComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("SlotContentListBarComponent Click");
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_SlotContentListBarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotContentListBarComponent_BaseFactory;
  return function SlotContentListBarComponent_Factory(t) {
    return (\u0275SlotContentListBarComponent_BaseFactory || (\u0275SlotContentListBarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotContentListBarComponent)))(t || _SlotContentListBarComponent);
  };
})();
_SlotContentListBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotContentListBarComponent, selectors: [["app-slot-content-list-bar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotContentListBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=content-list-bar.component.css.map */"] });
var SlotContentListBarComponent = _SlotContentListBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotContentListBarComponent, { className: "SlotContentListBarComponent", filePath: "Modules\\pages\\slots\\components\\bar-content-list\\content-list-bar.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/bar-content-view/content-view-bar.component.ts
var _SlotContentViewBarComponent = class _SlotContentViewBarComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("SlotContentViewBarComponent Click");
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_SlotContentViewBarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotContentViewBarComponent_BaseFactory;
  return function SlotContentViewBarComponent_Factory(t) {
    return (\u0275SlotContentViewBarComponent_BaseFactory || (\u0275SlotContentViewBarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotContentViewBarComponent)))(t || _SlotContentViewBarComponent);
  };
})();
_SlotContentViewBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotContentViewBarComponent, selectors: [["app-slot-content-view-bar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotContentViewBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=content-view-bar.component.css.map */"] });
var SlotContentViewBarComponent = _SlotContentViewBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotContentViewBarComponent, { className: "SlotContentViewBarComponent", filePath: "Modules\\pages\\slots\\components\\bar-content-view\\content-view-bar.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/mat-menu/menu-mat.component.ts
var _SlotMenuMatComponent = class _SlotMenuMatComponent extends SlotAbstract {
  openMenu() {
    this.trigger1.openMenu();
  }
  closeMenu() {
    this.trigger1.closeMenu();
  }
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  Reset() {
    this.clearSlot();
  }
  restore() {
    this.globalService.httpService.snackBar("\uC0D8\uD50C \uB370\uC774\uD130 \uC800\uC7A5\uC18C\uC5D0\uC11C \uBD88\uB7EC\uC628\uB2E4.");
  }
};
_SlotMenuMatComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotMenuMatComponent_BaseFactory;
  return function SlotMenuMatComponent_Factory(t) {
    return (\u0275SlotMenuMatComponent_BaseFactory || (\u0275SlotMenuMatComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotMenuMatComponent)))(t || _SlotMenuMatComponent);
  };
})();
_SlotMenuMatComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotMenuMatComponent, selectors: [["app-slot-menu-mat"]], viewQuery: function SlotMenuMatComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatMenuTrigger, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger1 = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 2, consts: [[3, "ngStyle"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function SlotMenuMatComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "button", 1);
    \u0275\u0275elementStart(2, "mat-menu", null, 2)(4, "button", 3);
    \u0275\u0275listener("click", function SlotMenuMatComponent_Template_button_click_4_listener() {
      return ctx.Reset();
    });
    \u0275\u0275text(5, "\uCD08\uAE30\uD654");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 3);
    \u0275\u0275listener("click", function SlotMenuMatComponent_Template_button_click_6_listener() {
      return ctx.restore();
    });
    \u0275\u0275text(7, "\uBCF5\uC6D0");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const _r0 = \u0275\u0275reference(3);
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", _r0);
  }
}, dependencies: [NgStyle, MatButton, MatMenu, MatMenuItem, MatMenuTrigger], styles: ["\n\n/*# sourceMappingURL=menu-mat.component.css.map */"] });
var SlotMenuMatComponent = _SlotMenuMatComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotMenuMatComponent, { className: "SlotMenuMatComponent", filePath: "Modules\\pages\\slots\\components\\mat-menu\\menu-mat.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/components/app-chatbot/app-chatbot.component.ts
var _SlotAppChatbotComponent = class _SlotAppChatbotComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_SlotAppChatbotComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotAppChatbotComponent_BaseFactory;
  return function SlotAppChatbotComponent_Factory(t) {
    return (\u0275SlotAppChatbotComponent_BaseFactory || (\u0275SlotAppChatbotComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotAppChatbotComponent)))(t || _SlotAppChatbotComponent);
  };
})();
_SlotAppChatbotComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotAppChatbotComponent, selectors: [["app-slot-app-chatbot"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotAppChatbotComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=app-chatbot.component.css.map */"] });
var SlotAppChatbotComponent = _SlotAppChatbotComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotAppChatbotComponent, { className: "SlotAppChatbotComponent", filePath: "Modules\\pages\\slots\\components\\app-chatbot\\app-chatbot.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/character-mp/character-mp.component.ts
var _CharacterMpComponent = class _CharacterMpComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("CharacterMpComponent Click");
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_CharacterMpComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CharacterMpComponent_BaseFactory;
  return function CharacterMpComponent_Factory(t) {
    return (\u0275CharacterMpComponent_BaseFactory || (\u0275CharacterMpComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CharacterMpComponent)))(t || _CharacterMpComponent);
  };
})();
_CharacterMpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CharacterMpComponent, selectors: [["app-character-mp"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function CharacterMpComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=character-mp.component.css.map */"] });
var CharacterMpComponent = _CharacterMpComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CharacterMpComponent, { className: "CharacterMpComponent", filePath: "Modules\\pages\\slots\\components\\character-mp\\character-mp.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/character-hp/character-hp.component.ts
var _CharacterHpComponent = class _CharacterHpComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("CharacterHpComponent Click");
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_CharacterHpComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CharacterHpComponent_BaseFactory;
  return function CharacterHpComponent_Factory(t) {
    return (\u0275CharacterHpComponent_BaseFactory || (\u0275CharacterHpComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CharacterHpComponent)))(t || _CharacterHpComponent);
  };
})();
_CharacterHpComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CharacterHpComponent, selectors: [["app-character-hp"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function CharacterHpComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=character-hp.component.css.map */"] });
var CharacterHpComponent = _CharacterHpComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CharacterHpComponent, { className: "CharacterHpComponent", filePath: "Modules\\pages\\slots\\components\\character-hp\\character-hp.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/character-profile/character-profile.component.ts
var _CharacterProfileComponent = class _CharacterProfileComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("CharacterProfileComponent Click");
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_CharacterProfileComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CharacterProfileComponent_BaseFactory;
  return function CharacterProfileComponent_Factory(t) {
    return (\u0275CharacterProfileComponent_BaseFactory || (\u0275CharacterProfileComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CharacterProfileComponent)))(t || _CharacterProfileComponent);
  };
})();
_CharacterProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CharacterProfileComponent, selectors: [["app-character-profile"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function CharacterProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=character-profile.component.css.map */"] });
var CharacterProfileComponent = _CharacterProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CharacterProfileComponent, { className: "CharacterProfileComponent", filePath: "Modules\\pages\\slots\\components\\character-profile\\character-profile.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/flow-list/flow-list.component.ts
var _FlowListComponent = class _FlowListComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.flowService.load();
  }
};
_FlowListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FlowListComponent_BaseFactory;
  return function FlowListComponent_Factory(t) {
    return (\u0275FlowListComponent_BaseFactory || (\u0275FlowListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FlowListComponent)))(t || _FlowListComponent);
  };
})();
_FlowListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowListComponent, selectors: [["app-flow-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function FlowListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=flow-list.component.css.map */"] });
var FlowListComponent = _FlowListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowListComponent, { className: "FlowListComponent", filePath: "Modules\\pages\\slots\\components\\flow-list\\flow-list.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/flow-item/flow-item.component.ts
var _FlowItemComponent = class _FlowItemComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.isSelected = false;
  }
  toggleSelection() {
    this.isSelected = !this.isSelected;
  }
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  ngOnInit() {
    this.style.border = "";
    this.globalService.flowService.LogicItemComponents.push(this);
  }
  selectAction() {
    console.log("Select Action");
  }
  getFormData() {
    return [
      {
        key: "form-values",
        value: [
          {
            category: "input",
            type: "text",
            name: "title",
            value: this.data.customData.key,
            placeholder: "provide a value",
            validations: [
              {
                name: "required",
                validator: "required",
                message: "Please provide a value"
              },
              {
                name: "maxLength",
                validator: "maxLength-40",
                message: "Please enter less than 40 characters"
              }
            ]
          }
        ]
      }
    ];
  }
};
_FlowItemComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FlowItemComponent_BaseFactory;
  return function FlowItemComponent_Factory(t) {
    return (\u0275FlowItemComponent_BaseFactory || (\u0275FlowItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FlowItemComponent)))(t || _FlowItemComponent);
  };
})();
_FlowItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowItemComponent, selectors: [["app-flow-item"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 7, consts: [[1, "centered-name", 2, "z-index", "10", 3, "ngStyle", "click"], [1, "animated-text"], [1, "action-value"]], template: function FlowItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function FlowItemComponent_Template_div_click_0_listener() {
      return ctx.selectAction();
    });
    \u0275\u0275elementStart(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("selected", ctx.isSelected);
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.data.item.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-value", ctx.data.item.data == null ? null : ctx.data.item.data.actionValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.data.item.data == null ? null : ctx.data.item.data.actionValue, " ");
  }
}, dependencies: [NgStyle], styles: ['@charset "UTF-8";\n\n\n\n.centered-name[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.action-value[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.action-value.has-value[_ngcontent-%COMP%] {\n  background-color: rgb(50, 89, 196);\n  color: white;\n  width: 100%;\n}\n.centered-name.selected[_ngcontent-%COMP%] {\n  border-image:\n    linear-gradient(\n      to right,\n      red,\n      blue);\n  border-image-slice: 1;\n  animation: _ngcontent-%COMP%_border-animation 3s linear infinite;\n  border-width: 3px;\n}\n@keyframes _ngcontent-%COMP%_border-animation {\n  0% {\n    border-image-source:\n      linear-gradient(\n        to right,\n        rgb(50, 50, 244),\n        rgb(249, 41, 41));\n  }\n  50% {\n    border-image-source:\n      linear-gradient(\n        to right,\n        rgb(249, 41, 41),\n        rgb(50, 50, 244));\n  }\n  100% {\n    border-image-source:\n      linear-gradient(\n        to right,\n        rgb(50, 50, 244),\n        rgb(249, 41, 41));\n  }\n}\n.animated-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.centered-name.selected[_ngcontent-%COMP%]   .animated-text[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_text-animation 5s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_text-animation {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n.centered-name.selected[_ngcontent-%COMP%]   .action-value.has-value[_ngcontent-%COMP%] {\n  background-color: rgb(255, 98, 0);\n}\n/*# sourceMappingURL=flow-item.component.css.map */'] });
var FlowItemComponent = _FlowItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowItemComponent, { className: "FlowItemComponent", filePath: "Modules\\pages\\slots\\components\\flow-item\\flow-item.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/flow-view/flow-view.component.ts
var _FlowViewComponent = class _FlowViewComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.categories = [];
  }
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.slotService.flowViewComponent = this;
    this.componentSVG = select_default(this.canvas.nativeElement);
    this.componentSVG.line = this.createGroup(this.componentSVG, { x: 0, y: 0 }, "forwardLine");
    this.createLogic();
  }
  createLogic() {
    this.categories = this.globalService.categoryService.load();
    const startX = 50;
    const startY = 50;
    this.categories.forEach((d, i) => {
      const x = startX + i % 4 * 150;
      const y = startY + Math.floor(i / 4) * 100;
      this.loadItem({
        title: "items",
        desc: "items",
        item: d,
        size: {
          width: 100,
          height: 50,
          position: { x, y }
        }
      });
      if (i !== this.categories.length - 1 && Math.floor(i % 4) < 3) {
        this.drawLine1({ x: x + 100, y: y + 25 }, { x: 50, y: 0 });
      }
    });
  }
  loadItem(data) {
    this.globalService.factoryService.createComponent(FlowItemComponent, this.container, data);
  }
  onLineEvent(isDrawLine, x, y) {
    this.drawLine({ x, y });
  }
  drawLine1(start, end) {
    this.getLinePoint(end, start, false);
    const lineGenerator = line_default().curve(basis_default);
    const pathData = lineGenerator(this.linePoints);
    this.newLine(pathData);
  }
  drawLine(end) {
    this.getLinePoint(this.subtractPoints(end, this.globalService.flowService.currentLineItemPosition, -62, -22), this.subtractPoints(this.globalService.flowService.currentLineItemPosition, this.data.size.position, 25, 25), false);
    const lineGenerator = line_default().curve(basis_default);
    const pathData = lineGenerator(this.linePoints);
    this.lineNode ? this.updateLine(pathData) : this.newLine(pathData);
  }
  subtractPoints(point1, point2, yMargin = 0, xMargin = 0) {
    return {
      x: point1.x - point2.x + xMargin,
      y: point1.y - point2.y + yMargin
    };
  }
  updateLine(pathData) {
    this.lineNode.attr("d", pathData);
  }
  newLine(pathData) {
    this.lineNode = this.createSVG(this.componentSVG.line, {
      type: DrawType.path,
      id: "nodeLine",
      geometry: pathData,
      fill: DrawColor.transparent,
      strokeWidth: 6,
      stroke: this.getRandomColor(),
      opacity: 1
    });
  }
};
_FlowViewComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FlowViewComponent_BaseFactory;
  return function FlowViewComponent_Factory(t) {
    return (\u0275FlowViewComponent_BaseFactory || (\u0275FlowViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FlowViewComponent)))(t || _FlowViewComponent);
  };
})();
_FlowViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlowViewComponent, selectors: [["app-flow-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [[3, "ngStyle"], [2, "z-index", "10", 3, "ngStyle"], ["container", ""], [2, "z-index", "5", 3, "ngStyle"], ["canvas", ""]], template: function FlowViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, " Dynamic Logic\n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275elementContainer(3, null, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(5, "svg", 3, 4);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", ctx.layerStyle);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=flow-view.component.css.map */"] });
var FlowViewComponent = _FlowViewComponent;
__decorate([
  NullCheckParameters
], FlowViewComponent.prototype, "onLineEvent", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlowViewComponent, { className: "FlowViewComponent", filePath: "Modules\\pages\\slots\\components\\flow-view\\flow-view.component.ts", lineNumber: 16 });
})();

// Modules/pages/slots/components/zone-body-line/zone-body-line.component.ts
var _SlotZoneBodyLineComponent = class _SlotZoneBodyLineComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.components = [];
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.slotService.bodyZoneInstance = this;
  }
  bind(instance) {
    this.components.push(instance);
  }
  click() {
    return __async(this, null, function* () {
      this.globalService.httpService.snackBar("LineZONE COMPONENT OPEN");
      this.globalService.slotService.openSlotBottomSheetBody();
      return true;
    });
  }
};
_SlotZoneBodyLineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotZoneBodyLineComponent_BaseFactory;
  return function SlotZoneBodyLineComponent_Factory(t) {
    return (\u0275SlotZoneBodyLineComponent_BaseFactory || (\u0275SlotZoneBodyLineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotZoneBodyLineComponent)))(t || _SlotZoneBodyLineComponent);
  };
})();
_SlotZoneBodyLineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotZoneBodyLineComponent, selectors: [["app-slot-zone-body-line"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotZoneBodyLineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=zone-body-line.component.css.map */"] });
var SlotZoneBodyLineComponent = _SlotZoneBodyLineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotZoneBodyLineComponent, { className: "SlotZoneBodyLineComponent", filePath: "Modules\\pages\\slots\\components\\zone-body-line\\zone-body-line.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-story-item/slot-story-item.component.ts
function SlotStoryItemComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.item.desc, " ");
  }
}
function SlotStoryItemComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.data.item.ai, " ");
  }
}
function SlotStoryItemComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u{1F916}", ctx_r4.data.item.geminiData, " ");
  }
}
function SlotStoryItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SlotStoryItemComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 0)(6, SlotStoryItemComponent_ng_container_0_ng_container_6_Template, 3, 1, "ng-container", 0)(7, SlotStoryItemComponent_ng_container_0_ng_container_7_Template, 3, 1, "ng-container", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.data.item.css);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.data.item.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.item.desc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.item.ai);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.data.item.geminiData);
  }
}
function SlotStoryItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, " \uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
var _SlotStoryItemComponent = class _SlotStoryItemComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.userInput = "";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
  }
  send() {
    return __async(this, null, function* () {
    });
  }
};
_SlotStoryItemComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStoryItemComponent_BaseFactory;
  return function SlotStoryItemComponent_Factory(t) {
    return (\u0275SlotStoryItemComponent_BaseFactory || (\u0275SlotStoryItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStoryItemComponent)))(t || _SlotStoryItemComponent);
  };
})();
_SlotStoryItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStoryItemComponent, selectors: [["app-slot-story-item"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-box", 3, "ngClass"], [1, "item-content"], [1, "item-title"], [1, "item-desc"], [1, "example-box"]], template: function SlotStoryItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SlotStoryItemComponent_ng_container_0_Template, 8, 5, "ng-container", 0)(1, SlotStoryItemComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.data.item);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.data.item);
  }
}, dependencies: [NgClass, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.example-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-height: 50px;\n  display: block;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  min-height: 50px;\n  padding: 10px;\n  border-bottom: none;\n  color: rgb(0, 0, 0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.user-message[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n.bot-message[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: rgba(204, 204, 204, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-height: 100px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.example-box[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.example-box[_ngcontent-%COMP%]   .item-desc[_ngcontent-%COMP%] {\n  font-size: smaller;\n  margin-top: 5px;\n}\n.item-desc[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-x: auto;\n  max-width: 100%;\n}\n/*# sourceMappingURL=slot-story-item.component.css.map */'] });
var SlotStoryItemComponent = _SlotStoryItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStoryItemComponent, { className: "SlotStoryItemComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-item\\slot-story-item.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-story-swiper-card/slot-story-swiper-card.component.ts
var _c03 = ["swiper"];
var _c12 = ["swiperTitle"];
function SlotStorySwieprCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.desc);
  }
}
var _SlotStorySwieprCardComponent = class _SlotStorySwieprCardComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.selectedValue = "";
    this.selectedDesc = "";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    timer(100).subscribe((d) => {
      this.make();
    });
  }
  ngAfterViewInit() {
  }
  make() {
    if (this.data.items[0] == null)
      return;
    this.selectedValue = this.data.items[0].title;
    this.selectedDesc = this.data.items[0].desc;
    this.$swiper = new Swiper(this.swiper.nativeElement, {
      grabCursor: true,
      effect: "cards",
      cardsEffect: {
        slideShadows: true
      },
      modules: [EffectCards, Autoplay],
      autoplay: {
        delay: 1e3,
        disableOnInteraction: true
        // 사용자 상호작용 후에도 계속 자동 재생
      },
      on: {
        slideChange: (swiper) => {
          this.slideChange(swiper);
        }
      }
    });
  }
  startSlideShow() {
    return __async(this, null, function* () {
      const delay = 300;
      const selectionProbability = 0.2;
      let forward = true;
      let firstRound = true;
      while (true) {
        const indices = forward ? Array.from(Array(this.data.items.length).keys()) : Array.from(Array(this.data.items.length).keys()).reverse();
        for (const i of indices) {
          yield new Promise((resolve) => setTimeout(resolve, delay));
          this.$swiper.slideTo(i);
          if (!firstRound && Math.random() < selectionProbability) {
            const randomIndex = this.getRandomSlideIndex();
            this.$swiper.slideTo(randomIndex);
            this.applyCongratsEffect();
            return;
          }
        }
        forward = !forward;
        firstRound = false;
      }
    });
  }
  getRandomSlideIndex() {
    return Math.floor(Math.random() * this.data.items.length);
  }
  slideChange(swiper) {
    const activeIndex = swiper.activeIndex;
    this.selectedValue = this.data.items[activeIndex].title;
    this.selectedDesc = this.data.items[activeIndex].desc;
  }
  applyCongratsEffect() {
  }
  send() {
    return __async(this, null, function* () {
    });
  }
};
_SlotStorySwieprCardComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStorySwieprCardComponent_BaseFactory;
  return function SlotStorySwieprCardComponent_Factory(t) {
    return (\u0275SlotStorySwieprCardComponent_BaseFactory || (\u0275SlotStorySwieprCardComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStorySwieprCardComponent)))(t || _SlotStorySwieprCardComponent);
  };
})();
_SlotStorySwieprCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStorySwieprCardComponent, selectors: [["app-slot-story-swiper-card"]], viewQuery: function SlotStorySwieprCardComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 7);
    \u0275\u0275viewQuery(_c12, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiper = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiperTitle = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 3, consts: [[1, "title-container"], [1, "title-text"], [1, "swiper"], ["swiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "selected-item-container"], [1, "selected-item-text"], [1, "swiper-slide"], [1, "slide-content"], [1, "slide-title"], [1, "slide-desc"]], template: function SlotStorySwieprCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 2, 3)(5, "div", 4);
    \u0275\u0275template(6, SlotStorySwieprCardComponent_div_6_Template, 6, 2, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("- ", ctx.title, " -");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.data.items);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectedValue);
  }
}, dependencies: [NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.swiper[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 200px;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  background-color: #3d79cd;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-slide-active[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.slide-content[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n}\n.slide-content[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n  text-align: center;\n  font-size: 16px;\n}\n.slide-content[_ngcontent-%COMP%]   .slide-desc[_ngcontent-%COMP%] {\n  width: 100%;\n  word-break: break-all;\n  white-space: normal !important;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.title-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #333;\n  margin-bottom: 10px;\n  word-wrap: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.title-text[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-in-out;\n}\n.selected-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n.selected-item-text[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: bold;\n  color: #eb7222;\n}\n.selected-item-text[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-in-out;\n}\n/*# sourceMappingURL=slot-story-swiper-card.component.css.map */'] });
var SlotStorySwieprCardComponent = _SlotStorySwieprCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStorySwieprCardComponent, { className: "SlotStorySwieprCardComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-swiper-card\\slot-story-swiper-card.component.ts", lineNumber: 12 });
})();

// Modules/pages/slots/items/slot-story-swiper-fighting/slot-story-swiper-fighting.component.ts
function SlotStorySwieprFightingComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-clan-battle-visual", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("clan1Members", ctx_r0.clan1Members)("clan2Members", ctx_r0.clan2Members);
  }
}
var _SlotStorySwieprFightingComponent = class _SlotStorySwieprFightingComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.isAction = false;
    this.isShimmer = false;
    this.isDisabled = true;
    this.stateTitle = "Observe battle";
    this.stateTitle1 = "Turn it into a story";
    this.skillLog = "";
    this.clan1Members = [];
    this.clan2Members = [];
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.globalService.flowService.currentFighting = this;
    this.data.items.filter((d) => d.key === 0).forEach((d) => {
      this.clan1Members.push(d.desc);
    });
    this.data.items.filter((d) => d.key === 1).forEach((d) => {
      this.clan2Members.push(d.desc);
    });
  }
  ngOnDestroy() {
  }
  action() {
    this.isAction = true;
    this.stateTitle = "Processing data..";
  }
  loadItem(d) {
    const data = {
      title: "items",
      desc: "items",
      item: d,
      size: { width: 100, height: 100, position: { x: 0, y: 0 } }
    };
    this.globalService.factoryService.createComponent(SlotStoryItemComponent, this.container, data);
  }
  aiAction() {
    this.stateTitle1 = "Live generating..";
    this.isShimmer = true;
    const prompt = `\uB2E4\uC74C \uCF58\uD150\uCE20\uB97C \uBD84\uC11D\uD558\uC5EC \uD310\uD0C0\uC9C0 \uC18C\uC124 \uC804\uD22C \uC7A5\uBA74\uC744 \uB9CC\uB4DC\uC138\uC694. \uCD9C\uB825\uBB3C\uC5D0 \uC801\uC808\uD55C \uAC04\uACA9\uC744 \uD655\uBCF4\uD558\uC138\uC694. : ${this.skillLog}`;
    this.globalService.geminiService.createAiData(prompt).subscribe({
      next: (text) => {
        if (text.parts) {
          this.loadItem({ title: "Generate a story based on skill logs", desc: "", geminiData: text.parts[0].text });
        }
        this.isShimmer = false;
        this.stateTitle1 = "Generation finished";
      },
      error: (error) => {
        console.error("\uC18C\uC124 \uB0B4\uC6A9 \uC0DD\uC131 \uC911 \uC5D0\uB7EC \uBC1C\uC0DD:", error);
        this.globalService.geminiService.isUse = false;
        this.isShimmer = false;
        this.stateTitle1 = "Generation finished";
      }
    });
  }
  endBattle(skillLog) {
    this.isAction = false;
    this.stateTitle = "Fight over";
    this.isDisabled = false;
    this.skillLog = skillLog;
    this.aiAction();
  }
  send() {
    return __async(this, null, function* () {
    });
  }
};
_SlotStorySwieprFightingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStorySwieprFightingComponent_BaseFactory;
  return function SlotStorySwieprFightingComponent_Factory(t) {
    return (\u0275SlotStorySwieprFightingComponent_BaseFactory || (\u0275SlotStorySwieprFightingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStorySwieprFightingComponent)))(t || _SlotStorySwieprFightingComponent);
  };
})();
_SlotStorySwieprFightingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStorySwieprFightingComponent, selectors: [["app-slot-story-swiper-fighting"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 8, consts: [[2, "margin", "10px 0"], [1, "button-container"], [1, "my-custom-button", 3, "disabled", "click"], [1, "my-custom-button", 3, "disabled"], [1, "button-image", 2, "height", "20px", 3, "src"], [4, "ngIf"], ["container", ""], [3, "clan1Members", "clan2Members"]], template: function SlotStorySwieprFightingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function SlotStorySwieprFightingComponent_Template_button_click_2_listener() {
      return ctx.action();
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 3)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "img", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, SlotStorySwieprFightingComponent_ng_container_9_Template, 2, 2, "ng-container", 5);
    \u0275\u0275elementContainer(10, null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.isDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.stateTitle);
    \u0275\u0275advance();
    \u0275\u0275classProp("shimmer-effect", ctx.isShimmer);
    \u0275\u0275property("disabled", ctx.isDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.stateTitle1);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.globalService.aiService.selectedaiPromptImg, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isAction);
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.my-custom-button[_ngcontent-%COMP%] {\n  width: 45%;\n  border-radius: 0px;\n  background-color: white;\n  padding: 5px;\n  color: rgb(71, 141, 206);\n  height: 45px;\n  font-size: 12px;\n}\n.my-custom-button[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  color: #666;\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 10px;\n}\n.shimmer-effect[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      -45deg,\n      #00BFFF,\n      #f07816);\n  background-size: 400% 400%;\n  animation: _ngcontent-%COMP%_shimmer 1s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.my-custom-button.shimmer-effect[_ngcontent-%COMP%] {\n  border: none;\n  color: transparent;\n}\n.my-custom-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.my-custom-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.my-custom-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.my-custom-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.my-custom-button.shimmer-effect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=slot-story-swiper-fighting.component.css.map */'] });
var SlotStorySwieprFightingComponent = _SlotStorySwieprFightingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStorySwieprFightingComponent, { className: "SlotStorySwieprFightingComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-swiper-fighting\\slot-story-swiper-fighting.component.ts", lineNumber: 24 });
})();

// Modules/pages/slots/components/simulator/simulator.component.ts
function SlotSimulatorComponent_button_6_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, " [AI] ");
    \u0275\u0275elementEnd();
  }
}
function SlotSimulatorComponent_button_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "NEXT");
    \u0275\u0275template(2, SlotSimulatorComponent_button_6_span_1_span_2_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.globalService.geminiService.isUse);
  }
}
function SlotSimulatorComponent_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Writing an AI...");
    \u0275\u0275elementEnd();
  }
}
function SlotSimulatorComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function SlotSimulatorComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.next());
    });
    \u0275\u0275template(1, SlotSimulatorComponent_button_6_span_1_Template, 3, 1, "span", 7)(2, SlotSimulatorComponent_button_6_span_2_Template, 2, 0, "span", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("shimmer-effect", ctx_r2.isShimmer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isShimmer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isShimmer);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.globalService.aiService.selectedaiPromptImg, \u0275\u0275sanitizeUrl);
  }
}
var _SlotSimulatorComponent = class _SlotSimulatorComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.isShimmer = false;
    this.items = [
      {
        title: "AI Novel + Game Simulator",
        css: "bot-message",
        desc: "",
        action: ""
      }
    ];
    this.dragImg = "./assets/svg/items/item2.svg";
    this.currentItem = null;
    this.categories = [];
    this.character = [];
    this.actionMap = {
      // 직업선택: this.loadCards.bind(this, 'selectJob'),
      Item: this.loadCards.bind(this, "selectItem"),
      // 동료: this.loadCards.bind(this, 'selectMember'),
      // 미션: this.loadCards.bind(this, 'selectMission'),
      Battle: this.loadFighting.bind(this, "selectFight")
    };
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.aiService.converstionComponent = this;
    this.globalService.categoryService.currentSimulator = this;
    this.style.overflow = "auto";
    this.create();
  }
  reload() {
    timer(500).subscribe((d) => {
      this.container.clear();
      this.items = [];
      this.create();
    });
  }
  create() {
    this.categories = this.globalService.categoryService.load();
    const flattenedNodes = this.flattenNodes(this.categories);
    flattenedNodes.forEach((node) => {
      this.items.push({
        title: node.name,
        action: node.data?.actionValue,
        desc: node.data?.contentValue,
        ai: node.data?.aiValue,
        css: "bot-message"
      });
    });
    console.log(this.items);
    this.init();
  }
  init() {
    timer(1e3).subscribe((d) => {
      this.globalService.flowService.logicFlow();
    });
    this.globalService.flowService.currentFlowIndex = 0;
    if (!this.globalService.geminiService.isPlay) {
      this.story();
    } else {
      this.play();
      this.play3d();
    }
  }
  next() {
    this.globalService.flowService.currentFlowIndex++;
    this.globalService.flowService.logicFlow();
    this.play();
    this.play3d();
  }
  play() {
    return __async(this, null, function* () {
      this.globalService.flowService.currentDataItem = this.items[this.globalService.flowService.currentFlowIndex];
      this.globalService.flowService.currentDataItem.currentFlowIndex = this.globalService.flowService.currentFlowIndex;
      this.aiPlay();
    });
  }
  test() {
    this.loadItem(this.items[this.globalService.flowService.currentFlowIndex]);
    this.globalService.flowService.currentFlowIndex++;
  }
  play3d() {
    console.log("play 3d play");
    this.globalService.commandService.current3d.startMovingBoxes();
  }
  story() {
    this.items.forEach((d) => {
      this.loadItem(d);
    });
  }
  aiPlay() {
    this.isShimmer = true;
    const prompt = `\uB2E4\uC74C \uB0B4\uC6A9\uC744 \uBD84\uC11D\uD558\uACE0 \uADF8\uC5D0 \uAE30\uBC18\uD55C \uC18C\uC124\uC744 \uC368\uC8FC\uC138\uC694. : ${this.globalService.flowService.currentDataItem.desc}`;
    this.globalService.geminiService.createAiData(prompt).subscribe({
      next: (text) => {
        if (text.parts) {
          this.globalService.flowService.currentDataItem.geminiData = text.parts[0].text;
        }
        this.isShimmer = false;
        this.loadItem(this.globalService.flowService.currentDataItem);
        this.actions();
      },
      error: (error) => {
        console.error("Error occurred during content generation:", error);
      }
    });
  }
  actions() {
    this.actionMap[this.globalService.flowService.currentDataItem.action]?.();
  }
  loadFighting(actionName) {
    const result = this.globalService.characterService[actionName]();
    this.globalService.factoryService.createComponent(SlotStorySwieprFightingComponent, this.container, result);
  }
  loadCards(actionName) {
    const result = this.globalService.characterService[actionName]();
    this.globalService.factoryService.createComponent(SlotStorySwieprCardComponent, this.container, result);
  }
  loadItem(d) {
    const data = {
      title: "items",
      desc: "items",
      item: d,
      size: { width: 100, height: 100, position: { x: 0, y: 0 } }
    };
    this.globalService.factoryService.createComponent(SlotStoryItemComponent, this.container, data);
  }
  flattenNodes(nodes) {
    const result = [];
    const queue = [...nodes];
    const visited = /* @__PURE__ */ new Set();
    while (queue.length > 0) {
      const node = queue.shift();
      const nodeId = Number(node.id);
      if (visited.has(nodeId))
        continue;
      visited.add(nodeId);
      result.unshift(node);
      for (let i = node.children.length - 1; i >= 0; i--) {
        const childId = Number(node.children[i]);
        const childNode = nodes.find((n) => Number(n.id) === childId);
        if (childNode && !visited.has(childId)) {
          queue.unshift(childNode);
        }
      }
    }
    return result.reverse();
  }
  onDragMove(event) {
  }
  getMousePositionOnDragMove(event) {
    const transform = event.source.element.nativeElement.style.transform;
    const matrix = new WebKitCSSMatrix(transform);
    const x = matrix.m41 + event.pointerPosition.x;
    const y = matrix.m42 + event.pointerPosition.y;
    return { x, y };
  }
  drop(event) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.globalService.slotService.isPossibleSlotDrag = true;
  }
  add(data) {
    const item = { title: data, desc: "", css: "user-message" };
    this.items.push({ title: data, desc: "", css: "user-message" });
    this.loadItem(item);
  }
  streamAdd(data) {
    this.currentItem = { title: "[Artificial Intelligence]", desc: "", css: "bot-message" };
    this.items.push(this.currentItem);
    this.loadItem(this.currentItem);
  }
  streamConnecting(d) {
    this.currentItem.desc = this.currentItem.desc + d;
    this.scrollBody.nativeElement.scrollTop = this.scrollBody.nativeElement.scrollHeight;
  }
};
_SlotSimulatorComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotSimulatorComponent_BaseFactory;
  return function SlotSimulatorComponent_Factory(t) {
    return (\u0275SlotSimulatorComponent_BaseFactory || (\u0275SlotSimulatorComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotSimulatorComponent)))(t || _SlotSimulatorComponent);
  };
})();
_SlotSimulatorComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotSimulatorComponent, selectors: [["app-slot-simulator"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 2, consts: [[3, "ngStyle"], ["scrollBody", ""], ["cdkDropList", "", 1, "example-list"], ["container", ""], [1, "button-container"], ["class", "my-custom-button", 3, "shimmer-effect", "click", 4, "ngIf"], [1, "my-custom-button", 3, "click"], [4, "ngIf"], [1, "button-image", 2, "height", "20px", "margin-right", "10px", 3, "src"], ["style", "color: rgb(239, 167, 23);", 4, "ngIf"], [2, "color", "rgb(239, 167, 23)"]], template: function SlotSimulatorComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0, 1)(2, "div", 2);
    \u0275\u0275elementContainer(3, null, 3);
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275template(6, SlotSimulatorComponent_button_6_Template, 4, 5, "button", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.globalService.geminiService.isPlay);
  }
}, dependencies: [NgIf, NgStyle, CdkDropList], styles: ['@charset "UTF-8";\n\n\n\n.my-custom-button[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0px;\n  background-color: rgb(76, 131, 220);\n  padding: 5px;\n  color: rgb(38, 39, 40);\n  height: 45px;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.shimmer-effect[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      -45deg,\n      #00BFFF,\n      #f07816);\n  background-size: 400% 400%;\n  animation: _ngcontent-%COMP%_shimmer 1s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n.my-custom-button.shimmer-effect[_ngcontent-%COMP%] {\n  border: none;\n  color: transparent;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.my-custom-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.my-custom-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.my-custom-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.my-custom-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.my-custom-button.shimmer-effect[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black !important;\n}\n/*# sourceMappingURL=simulator.component.css.map */'] });
var SlotSimulatorComponent = _SlotSimulatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotSimulatorComponent, { className: "SlotSimulatorComponent", filePath: "Modules\\pages\\slots\\components\\simulator\\simulator.component.ts", lineNumber: 19 });
})();

// Modules/pages/slots/items/slot-list-drag/slot-list-drag.component.ts
function SlotListDragComponent_For_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function SlotListDragComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, SlotListDragComponent_For_3_div_1_Template, 1, 0, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", movie_r1, " ");
  }
}
var _SlotListDragComponent = class _SlotListDragComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.movies = [
      "\uD14C\uC2A4\uD2B8 \uC544\uC774\uD15C 1",
      "\uD14C\uC2A4\uD2B8 \uC544\uC774\uD15C 2",
      "\uD14C\uC2A4\uD2B8 \uC544\uC774\uD15C 3",
      "\uD14C\uC2A4\uD2B8 \uC544\uC774\uD15C 4",
      "\uD14C\uC2A4\uD2B8 \uC544\uC774\uD15C 5"
    ];
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  drop(event) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.globalService.slotService.isPossibleSlotDrag = true;
  }
};
_SlotListDragComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotListDragComponent_BaseFactory;
  return function SlotListDragComponent_Factory(t) {
    return (\u0275SlotListDragComponent_BaseFactory || (\u0275SlotListDragComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotListDragComponent)))(t || _SlotListDragComponent);
  };
})();
_SlotListDragComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotListDragComponent, selectors: [["app-slot-list-drag"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "ngStyle", "mousedown"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "example-custom-placeholder"], ["class", "example-box", "cdkDrag", ""]], template: function SlotListDragComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("mousedown", function SlotListDragComponent_Template_div_mousedown_0_listener($event) {
      return ctx.notSlotDrag($event);
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("cdkDropListDropped", function SlotListDragComponent_Template_div_cdkDropListDropped_1_listener($event) {
      return ctx.drop($event);
    });
    \u0275\u0275repeaterCreate(2, SlotListDragComponent_For_3_Template, 3, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.movies);
  }
}, dependencies: [NgStyle, CdkDropList, CdkDrag, CdkDragPlaceholder], styles: ['@charset "UTF-8";\n\n\n\n.example-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: rgba(204, 204, 204, 0.5);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=slot-list-drag.component.css.map */'] });
var SlotListDragComponent = _SlotListDragComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotListDragComponent, { className: "SlotListDragComponent", filePath: "Modules\\pages\\slots\\items\\slot-list-drag\\slot-list-drag.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/items/slot-item-add/slot-item-add.component.ts
var _SlotItemAddComponent = class _SlotItemAddComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  add(event) {
    this.globalService.slotService.slot.slotDrawer.toggle();
    this.globalService.slotService.isPossibleSlotDrag = true;
  }
};
_SlotItemAddComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemAddComponent_BaseFactory;
  return function SlotItemAddComponent_Factory(t) {
    return (\u0275SlotItemAddComponent_BaseFactory || (\u0275SlotItemAddComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemAddComponent)))(t || _SlotItemAddComponent);
  };
})();
_SlotItemAddComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemAddComponent, selectors: [["app-slot-item-add"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"]], template: function SlotItemAddComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotItemAddComponent_Template_button_click_1_listener($event) {
      return ctx.add($event);
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle, MatIconButton, MatIcon], styles: ["\n\n/*# sourceMappingURL=slot-item-add.component.css.map */"] });
var SlotItemAddComponent = _SlotItemAddComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemAddComponent, { className: "SlotItemAddComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-add\\slot-item-add.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-play/slot-item-play.component.ts
var _SlotItemPlayComponent = class _SlotItemPlayComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.playIcon = "./assets/svg/item_play.svg";
    this.playingIcon = "./assets/svg/item_playing.svg";
    this.svgIcon = this.playIcon;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  working() {
    this.svgIcon === this.playingIcon ? this.playing() : this.play();
  }
  play() {
    this.svgIcon = this.playingIcon;
    console.log("isPossibleSlotDrag", this.globalService.slotService.isPossibleSlotDrag);
    this.globalService.slotService.isSlotWork = true;
    this.globalService.slotService.isBodyMatch = true;
  }
  playing() {
    console.log("isPossibleSlotDrag playing", this.globalService.slotService.isPossibleSlotDrag);
    this.svgIcon = this.playIcon;
    this.globalService.slotService.isSlotWork = false;
    this.globalService.slotService.isBodyMatch = false;
  }
};
_SlotItemPlayComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemPlayComponent_BaseFactory;
  return function SlotItemPlayComponent_Factory(t) {
    return (\u0275SlotItemPlayComponent_BaseFactory || (\u0275SlotItemPlayComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemPlayComponent)))(t || _SlotItemPlayComponent);
  };
})();
_SlotItemPlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemPlayComponent, selectors: [["app-slot-item-play"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"], ["alt", "", "height", "25", 1, "example-option-img", 3, "src"]], template: function SlotItemPlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotItemPlayComponent_Template_button_click_1_listener() {
      return ctx.working();
    });
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.svgIcon, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgStyle, MatIconButton], styles: ["\n\n/*# sourceMappingURL=slot-item-play.component.css.map */"] });
var SlotItemPlayComponent = _SlotItemPlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemPlayComponent, { className: "SlotItemPlayComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-play\\slot-item-play.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-pin-line/slot-item-pin-line.component.ts
var _SlotItemPinLineComponent = class _SlotItemPinLineComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.playIcon = "./assets/svg/item_playing.svg";
    this.playingIcon = "./assets/svg/item_playing.svg";
    this.svgIcon = this.playIcon;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  working() {
    this.globalService.slotService.isDrawLine ? this.connected() : this.start();
  }
  start() {
    this.svgIcon = this.playingIcon;
    this.globalService.slotService.isDrawLine = true;
    this.globalService.flowService.currentLineItem = this;
    this.globalService.flowService.currentLineItemPosition = this.data.size.position;
  }
  connected() {
    this.svgIcon = this.playingIcon;
    this.globalService.slotService.isDrawLine = false;
    this.globalService.flowService.currentLineEndItem = this;
  }
};
_SlotItemPinLineComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemPinLineComponent_BaseFactory;
  return function SlotItemPinLineComponent_Factory(t) {
    return (\u0275SlotItemPinLineComponent_BaseFactory || (\u0275SlotItemPinLineComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemPinLineComponent)))(t || _SlotItemPinLineComponent);
  };
})();
_SlotItemPinLineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemPinLineComponent, selectors: [["app-slot-item-pin-line"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "mousedown"], ["alt", "", "height", "25", 1, "example-option-img", "svgFill", 3, "src"]], template: function SlotItemPinLineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("mousedown", function SlotItemPinLineComponent_Template_button_mousedown_1_listener() {
      return ctx.working();
    });
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.svgIcon, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgStyle, MatIconButton], styles: ["\n\n.svgFill[_ngcontent-%COMP%] {\n  fill: red;\n}\n/*# sourceMappingURL=slot-item-pin-line.component.css.map */"] });
var SlotItemPinLineComponent = _SlotItemPinLineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemPinLineComponent, { className: "SlotItemPinLineComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-pin-line\\slot-item-pin-line.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-input/slot-item-input.component.ts
var _SlotItemInputComponent = class _SlotItemInputComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "Write a message for AI";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  getAnswer(event) {
    if (event.isComposing)
      return;
    this.globalService.aiService.senderComponent.send();
    this.globalService.aiService.messageValue = "";
  }
};
_SlotItemInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemInputComponent_BaseFactory;
  return function SlotItemInputComponent_Factory(t) {
    return (\u0275SlotItemInputComponent_BaseFactory || (\u0275SlotItemInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemInputComponent)))(t || _SlotItemInputComponent);
  };
})();
_SlotItemInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemInputComponent, selectors: [["app-slot-item-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"]], template: function SlotItemInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "AI Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2);
    \u0275\u0275listener("ngModelChange", function SlotItemInputComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.globalService.aiService.messageValue = $event;
    })("keydown.enter", function SlotItemInputComponent_Template_input_keydown_enter_4_listener($event) {
      return ctx.getAnswer($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx.Placeholder)("ngModel", ctx.globalService.aiService.messageValue);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\n/*# sourceMappingURL=slot-item-input.component.css.map */"] });
var SlotItemInputComponent = _SlotItemInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemInputComponent, { className: "SlotItemInputComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-input\\slot-item-input.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-sender/slot-item-sender.component.ts
var _SlotItemSenderComponent = class _SlotItemSenderComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.userInput = "\uB098\uB294 \uC624\uB298 \uBCF5\uC218\uB97C \uD558\uB7EC \uAC08\uAC70\uC57C";
    this.isShimmer = false;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.aiService.senderComponent = this;
  }
  send() {
    return __async(this, null, function* () {
      console.log("ai message on chatbot", this.globalService.aiService.messageValue);
      this.globalService.aiService.converstionComponent.add(this.globalService.aiService.messageValue);
      this.globalService.aiService.converstionComponent.streamAdd("AI : ");
      this.globalService.aiService.messages[1].content = this.globalService.aiService.messageValue;
      this.globalService.aiService.getOpenAISteam(this.globalService.aiService.messages).then((stream$) => {
        stream$.subscribe({
          next: (content) => {
            this.globalService.aiService.converstionComponent.streamConnecting(content);
          },
          error: (error) => console.error(error)
          // complete: () => console.log('스트림 완료!') // 필요한 경우 추가
        });
      }).catch((error) => console.error(error));
    });
  }
};
_SlotItemSenderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemSenderComponent_BaseFactory;
  return function SlotItemSenderComponent_Factory(t) {
    return (\u0275SlotItemSenderComponent_BaseFactory || (\u0275SlotItemSenderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemSenderComponent)))(t || _SlotItemSenderComponent);
  };
})();
_SlotItemSenderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemSenderComponent, selectors: [["app-slot-item-sender"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"]], template: function SlotItemSenderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotItemSenderComponent_Template_button_click_1_listener() {
      return ctx.send();
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle, MatIconButton, MatIcon], styles: ["\n\n/*# sourceMappingURL=slot-item-sender.component.css.map */"] });
var SlotItemSenderComponent = _SlotItemSenderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemSenderComponent, { className: "SlotItemSenderComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-sender\\slot-item-sender.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-conversation/slot-item-conversation.component.ts
function SlotItemConversationComponent_For_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function SlotItemConversationComponent_For_4_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r8.dragImg, \u0275\u0275sanitizeUrl);
  }
}
function SlotItemConversationComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("cdkDragMoved", function SlotItemConversationComponent_For_4_Template_div_cdkDragMoved_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.onDragMove($event));
    });
    \u0275\u0275template(1, SlotItemConversationComponent_For_4_div_1_Template, 1, 0, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275template(3, SlotItemConversationComponent_For_4_img_3_Template, 1, 1, "img", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", item_r2.css);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2.title, " ");
  }
}
var _SlotItemConversationComponent = class _SlotItemConversationComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.items = [
      { title: "\uC800\uB294 \uC219\uB828\uB41C AI \uC791\uAC00\uC785\uB2C8\uB2E4.", css: "bot-message" }
    ];
    this.dragImg = "./assets/svg/items/item2.svg";
    this.currentItem = null;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.aiService.converstionComponent = this;
    this.style.overflow = "auto";
  }
  onDragMove(event) {
  }
  getMousePositionOnDragMove(event) {
    const transform = event.source.element.nativeElement.style.transform;
    const matrix = new WebKitCSSMatrix(transform);
    const x = matrix.m41 + event.pointerPosition.x;
    const y = matrix.m42 + event.pointerPosition.y;
    return { x, y };
  }
  drop(event) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this.globalService.slotService.isPossibleSlotDrag = true;
  }
  add(data) {
    this.items.push({ title: data, css: "user-message" });
  }
  streamAdd(data) {
    this.currentItem = { title: data, css: "bot-message" };
    this.items.push(this.currentItem);
  }
  streamConnecting(d) {
    this.currentItem.title = this.currentItem.title + d;
    this.scrollBody.nativeElement.scrollTop = this.scrollBody.nativeElement.scrollHeight;
  }
};
_SlotItemConversationComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemConversationComponent_BaseFactory;
  return function SlotItemConversationComponent_Factory(t) {
    return (\u0275SlotItemConversationComponent_BaseFactory || (\u0275SlotItemConversationComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemConversationComponent)))(t || _SlotItemConversationComponent);
  };
})();
_SlotItemConversationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemConversationComponent, selectors: [["app-slot-item-conversation"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [[3, "ngStyle", "mousedown"], ["scrollBody", ""], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "ngClass", "cdkDragMoved"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [3, "src", 4, "cdkDragPreview"], [1, "example-custom-placeholder"], [3, "src"], ["class", "example-box", "cdkDrag", "", 3, "ngClass"]], template: function SlotItemConversationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0, 1);
    \u0275\u0275listener("mousedown", function SlotItemConversationComponent_Template_div_mousedown_0_listener($event) {
      return ctx.notSlotDrag($event);
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275listener("cdkDropListDropped", function SlotItemConversationComponent_Template_div_cdkDropListDropped_2_listener($event) {
      return ctx.drop($event);
    });
    \u0275\u0275repeaterCreate(3, SlotItemConversationComponent_For_4_Template, 4, 2, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.items);
  }
}, dependencies: [NgClass, NgStyle, CdkDropList, CdkDrag, CdkDragPreview, CdkDragPlaceholder], styles: ['@charset "UTF-8";\n\n\n\n.example-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-height: 50px;\n  display: block;\n  overflow: hidden;\n}\n.example-box[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  min-height: 50px;\n  padding: 10px;\n  border-bottom: none;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n}\n.user-message[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: right;\n  margin-left: 20%;\n}\n.bot-message[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100px;\n  height: 100px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: rgba(204, 204, 204, 0.5);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  min-height: 50px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=slot-item-conversation.component.css.map */'] });
var SlotItemConversationComponent = _SlotItemConversationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemConversationComponent, { className: "SlotItemConversationComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-conversation\\slot-item-conversation.component.ts", lineNumber: 11 });
})();

// Modules/pages/slots/items/slot-item-prompt/slot-item-prompt.component.ts
var _SlotItemPromptComponent = class _SlotItemPromptComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  send() {
    return __async(this, null, function* () {
      console.log("\uC790\uCCB4 \uD504\uB86C\uD504\uD2B8\uB97C \uCD9C\uB825\uD558\uC790.");
      this.globalService.slotService.openSlotPromptBottomSheetBody();
    });
  }
};
_SlotItemPromptComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemPromptComponent_BaseFactory;
  return function SlotItemPromptComponent_Factory(t) {
    return (\u0275SlotItemPromptComponent_BaseFactory || (\u0275SlotItemPromptComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemPromptComponent)))(t || _SlotItemPromptComponent);
  };
})();
_SlotItemPromptComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemPromptComponent, selectors: [["app-slot-item-prompt"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"], [3, "src"]], template: function SlotItemPromptComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotItemPromptComponent_Template_button_click_1_listener() {
      return ctx.send();
    });
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.globalService.aiService.selectedPromptImg, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgStyle, MatIconButton], styles: ["\n\n/*# sourceMappingURL=slot-item-prompt.component.css.map */"] });
var SlotItemPromptComponent = _SlotItemPromptComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemPromptComponent, { className: "SlotItemPromptComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-prompt\\slot-item-prompt.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-category/slot-item-category.component.ts
var _SlotItemCategoryComponent = class _SlotItemCategoryComponent extends SlotAbstract {
  constructor(globalService, dialog, _snackBar) {
    super(globalService);
    this.globalService = globalService;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.categoryClicked = new EventEmitter();
    this.users = [];
    this.categories = [];
    this.categoryCode = new CategoryCode();
    this.categoryRest = new CategoryRest(dialog, _snackBar, globalService);
    this.categoryMenu = new CategoryMenuData(this.categoryRest);
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.currentCategoryService = this.globalService.categoryService;
    this.categories = this.globalService.categoryService.load();
    this.style.overflow = "auto";
  }
  onCategoryClick(categoryId, treeView) {
    const categoryIdPath = treeView.treeService.findPath(categoryId);
    this.categoryClicked.emit({
      id: categoryId,
      categoryNamePath: this.setCategoryPath(categoryId, treeView.treeService),
      categoryIdPath
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
_SlotItemCategoryComponent.\u0275fac = function SlotItemCategoryComponent_Factory(t) {
  return new (t || _SlotItemCategoryComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar));
};
_SlotItemCategoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemCategoryComponent, selectors: [["app-slot-item-category"]], outputs: { categoryClicked: "categoryClicked" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "ngStyle"], [3, "datasource", "menuClass", "who", "clickEvent", "moveData"], ["treeview2", ""]], template: function SlotItemCategoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "app-treeview", 1, 2);
    \u0275\u0275listener("clickEvent", function SlotItemCategoryComponent_Template_app_treeview_clickEvent_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const _r0 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.onCategoryClick($event, _r0));
    })("moveData", function SlotItemCategoryComponent_Template_app_treeview_moveData_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const _r0 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.categoryRest.move($event, _r0));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance();
    \u0275\u0275property("datasource", ctx.categories)("menuClass", ctx.categoryMenu)("who", "admin");
  }
}, dependencies: [NgStyle, TreeviewComponent], styles: ["\n\n/*# sourceMappingURL=slot-item-category.component.css.map */"] });
var SlotItemCategoryComponent = _SlotItemCategoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemCategoryComponent, { className: "SlotItemCategoryComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-category\\slot-item-category.component.ts", lineNumber: 33 });
})();

// Modules/pages/slots/items/slot-story-input/slot-story-input.component.ts
var _SlotStoryInputComponent = class _SlotStoryInputComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "Write a story";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  getAnswer(event) {
    if (event.isComposing)
      return;
    this.globalService.categoryService.send();
    this.globalService.categoryService.messageValue = "";
  }
};
_SlotStoryInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStoryInputComponent_BaseFactory;
  return function SlotStoryInputComponent_Factory(t) {
    return (\u0275SlotStoryInputComponent_BaseFactory || (\u0275SlotStoryInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStoryInputComponent)))(t || _SlotStoryInputComponent);
  };
})();
_SlotStoryInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStoryInputComponent, selectors: [["app-slot-story-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"]], template: function SlotStoryInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "Story Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2);
    \u0275\u0275listener("ngModelChange", function SlotStoryInputComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.globalService.categoryService.messageValue = $event;
    })("keydown.enter", function SlotStoryInputComponent_Template_input_keydown_enter_4_listener($event) {
      return ctx.getAnswer($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx.Placeholder)("ngModel", ctx.globalService.categoryService.messageValue);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\n/*# sourceMappingURL=slot-story-input.component.css.map */"] });
var SlotStoryInputComponent = _SlotStoryInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStoryInputComponent, { className: "SlotStoryInputComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-input\\slot-story-input.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-story-viewer/slot-story-viewer.component.ts
var _SlotStoryViewerComponent = class _SlotStoryViewerComponent extends SlotAbstract {
  click() {
    return __async(this, null, function* () {
      return true;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
};
_SlotStoryViewerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStoryViewerComponent_BaseFactory;
  return function SlotStoryViewerComponent_Factory(t) {
    return (\u0275SlotStoryViewerComponent_BaseFactory || (\u0275SlotStoryViewerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStoryViewerComponent)))(t || _SlotStoryViewerComponent);
  };
})();
_SlotStoryViewerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStoryViewerComponent, selectors: [["app-slot-story-viewer"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 3, consts: [[3, "ngStyle"]], template: function SlotStoryViewerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=slot-story-viewer.component.css.map */"] });
var SlotStoryViewerComponent = _SlotStoryViewerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStoryViewerComponent, { className: "SlotStoryViewerComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-viewer\\slot-story-viewer.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/forms/slot-form-input/slot-form-input.component.ts
var _SlotFormInputComponent = class _SlotFormInputComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "Write a form";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  getAnswer(event) {
    if (event.isComposing)
      return;
    this.globalService.currentCategoryService.rename(this.globalService.slotFormService.titleValue);
  }
};
_SlotFormInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotFormInputComponent_BaseFactory;
  return function SlotFormInputComponent_Factory(t) {
    return (\u0275SlotFormInputComponent_BaseFactory || (\u0275SlotFormInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotFormInputComponent)))(t || _SlotFormInputComponent);
  };
})();
_SlotFormInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotFormInputComponent, selectors: [["app-slot-form-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"]], template: function SlotFormInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "Input Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2);
    \u0275\u0275listener("ngModelChange", function SlotFormInputComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.globalService.slotFormService.titleValue = $event;
    })("keydown.enter", function SlotFormInputComponent_Template_input_keydown_enter_4_listener($event) {
      return ctx.getAnswer($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx.Placeholder)("ngModel", ctx.globalService.slotFormService.titleValue);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\n/*# sourceMappingURL=slot-form-input.component.css.map */"] });
var SlotFormInputComponent = _SlotFormInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotFormInputComponent, { className: "SlotFormInputComponent", filePath: "Modules\\pages\\slots\\items\\forms\\slot-form-input\\slot-form-input.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/forms/slot-form-textarea/slot-form-textarea.component.ts
var _c04 = ["textareaElement"];
var _SlotFormTextAreaComponent = class _SlotFormTextAreaComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "Write a form";
    this.aiData = "";
    this.txtHeight = 100;
  }
  click() {
    return __async(this, null, function* () {
      this.globalService.slotService.openDynamicForm(this, this.getFormData());
      return false;
    });
  }
  getDynamicValue() {
    const value = this.globalService.slotFormService[this.formValue];
    return typeof value === "string" ? value : JSON.stringify(value);
  }
  getFormData() {
    return [
      {
        key: "form-values",
        value: [
          {
            category: "input",
            type: "text",
            name: "title",
            value: this.data.customData.key,
            placeholder: "provide a value",
            validations: [
              {
                name: "required",
                validator: "required",
                message: "Please provide a value"
              },
              {
                name: "maxLength",
                validator: "maxLength-40",
                message: "Please enter less than 40 characters"
              }
            ]
          }
        ]
      }
    ];
  }
  ngOnInit() {
    this.bindInstance();
    this.formValue = this.data.customData.key;
    this.txtHeight = this.data.size.height - 32;
    this.globalService.slotFormService.streamComponentList.push(this);
  }
  getAnswer(event) {
    if (event.isComposing)
      return;
    const message = event.target.value;
    this.globalService.slotFormService[this.formValue] = message;
    this.globalService.slotFormService.setContent();
    this.globalService.currentCategoryService.setCategories();
  }
  streamStart() {
    this.aiData = "";
    this.textareaElement.nativeElement.value = "";
  }
  streamConnecting(content) {
    this.aiData = this.aiData + content;
    this.textareaElement.nativeElement.value = this.aiData;
    this.scrollBody.nativeElement.scrollTop = this.scrollBody.nativeElement.scrollHeight;
  }
  streamEnd() {
    timer(100).subscribe((d) => {
      this.globalService.slotFormService[this.formValue] = this.textareaElement.nativeElement.value;
      this.globalService.slotFormService.setContent();
      this.globalService.currentCategoryService.setCategories();
    });
  }
};
_SlotFormTextAreaComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotFormTextAreaComponent_BaseFactory;
  return function SlotFormTextAreaComponent_Factory(t) {
    return (\u0275SlotFormTextAreaComponent_BaseFactory || (\u0275SlotFormTextAreaComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotFormTextAreaComponent)))(t || _SlotFormTextAreaComponent);
  };
})();
_SlotFormTextAreaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotFormTextAreaComponent, selectors: [["app-slot-form-textarea"]], viewQuery: function SlotFormTextAreaComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textareaElement = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 5, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "placeholder", "value", "keydown.enter"], ["scrollBody", "", "textareaElement", ""]], template: function SlotFormTextAreaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "Textarea Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 2, 3);
    \u0275\u0275listener("keydown.enter", function SlotFormTextAreaComponent_Template_textarea_keydown_enter_4_listener($event) {
      return ctx.getAnswer($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("height", ctx.txtHeight, "px");
    \u0275\u0275property("placeholder", ctx.Placeholder)("value", ctx.getDynamicValue() || "");
  }
}, dependencies: [NgStyle, MatFormField, MatLabel, MatInput], styles: ["\n\n/*# sourceMappingURL=slot-form-textarea.component.css.map */"] });
var SlotFormTextAreaComponent = _SlotFormTextAreaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotFormTextAreaComponent, { className: "SlotFormTextAreaComponent", filePath: "Modules\\pages\\slots\\items\\forms\\slot-form-textarea\\slot-form-textarea.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/items/slot-story-ai-sender/slot-story-ai-sender.component.ts
function SlotStoryAiSenderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
var _SlotStoryAiSenderComponent = class _SlotStoryAiSenderComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.userInput = "";
    this.isShimmer = false;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.aiService.geminiSenderComponent = this;
  }
  send(prompt) {
    if (!this.globalService.geminiService.isUse)
      return EMPTY;
    if (!prompt)
      return EMPTY;
    this.isShimmer = true;
    return this.globalService.geminiService.createAiData(prompt).pipe(
      tap(() => this.isShimmer = false),
      // 응답 받으면 로딩 상태 해제
      tap((text) => {
        if (text.parts) {
          console.log("text parts", text.parts);
        } else {
          this.globalService.httpService.snackBar("Gemini Data \uC624\uB958 : " + JSON.stringify(text));
        }
      }),
      catchError((error) => {
        this.isShimmer = false;
        this.globalService.httpService.snackBar("Error occurred during content generation:", error);
        return throwError(() => error);
      })
    );
  }
  sendOpenAI() {
    return __async(this, null, function* () {
      if (!this.globalService.geminiService.isUse)
        return;
      const streamComponent = this.globalService.slotFormService.streamComponentList.find((d) => d.formValue === "aiValue");
      const message = this.globalService.slotFormService.contentValue ?? "\uB0B4\uC6A9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";
      console.log("message", message);
      const messages = [
        {
          role: "system",
          content: this.globalService.aiService.novelPrompt + " \uC774 \uD504\uB86C\uD504\uD2B8\uB97C \uAE30\uBC18\uC73C\uB85C \uAC01 \uC7A5\uC758 \uC138\uBD80 \uB0B4\uC6A9\uC744 \uD48D\uBD80\uD558\uAC8C \uC791\uC131\uD558\uC5EC \uD765\uBBF8\uC9C4\uC9C4\uD55C \uD310\uD0C0\uC9C0 \uC18C\uC124\uC744 \uC644\uC131\uD574 \uBCF4\uC138\uC694!"
        },
        { role: "user", content: message }
      ];
      console.log("messages", message);
      this.isShimmer = true;
      streamComponent?.streamStart();
      this.globalService.aiService.getOpenAISteam(messages).then((stream$) => {
        stream$.subscribe({
          next: (content) => {
            streamComponent?.streamConnecting(content);
          },
          error: (error) => console.error(error),
          complete: () => {
            streamComponent?.streamEnd();
            this.isShimmer = false;
          }
          // 필요한 경우 추가
        });
      }).catch((error) => console.error(error));
    });
  }
};
_SlotStoryAiSenderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStoryAiSenderComponent_BaseFactory;
  return function SlotStoryAiSenderComponent_Factory(t) {
    return (\u0275SlotStoryAiSenderComponent_BaseFactory || (\u0275SlotStoryAiSenderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStoryAiSenderComponent)))(t || _SlotStoryAiSenderComponent);
  };
})();
_SlotStoryAiSenderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStoryAiSenderComponent, selectors: [["app-slot-story-ai-sender"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 3, consts: [[1, "shimmer-container", 3, "ngStyle"], ["class", "shimmer-animation", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [3, "src"], [1, "shimmer-animation"]], template: function SlotStoryAiSenderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, SlotStoryAiSenderComponent_div_1_Template, 1, 0, "div", 1);
    \u0275\u0275elementStart(2, "button", 2);
    \u0275\u0275listener("click", function SlotStoryAiSenderComponent_Template_button_click_2_listener() {
      return ctx.sendOpenAI();
    });
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isShimmer);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.globalService.aiService.selectedaiPromptImg, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgIf, NgStyle, MatIconButton], styles: ["\n\n.shimmer-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.shimmer-animation[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      -45deg,\n      #0062ff 25%,\n      #ff9900 50%,\n      #0062ff 75%);\n  background-size: 400% 400%;\n  animation: _ngcontent-%COMP%_shimmer 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 0% 0%;\n  }\n  100% {\n    background-position: 100% 100%;\n  }\n}\n/*# sourceMappingURL=slot-story-ai-sender.component.css.map */"] });
var SlotStoryAiSenderComponent = _SlotStoryAiSenderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStoryAiSenderComponent, { className: "SlotStoryAiSenderComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-ai-sender\\slot-story-ai-sender.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/items/slot-story-save-sender/slot-story-save-sender.component.ts
var _SlotStorySaveSenderComponent = class _SlotStorySaveSenderComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.userInput = "";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  send() {
    return __async(this, null, function* () {
      const jsonString = JSON.stringify(this.globalService.categoryService.categories, null, 2);
      yield navigator.clipboard.writeText(jsonString);
      alert(jsonString);
    });
  }
};
_SlotStorySaveSenderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStorySaveSenderComponent_BaseFactory;
  return function SlotStorySaveSenderComponent_Factory(t) {
    return (\u0275SlotStorySaveSenderComponent_BaseFactory || (\u0275SlotStorySaveSenderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStorySaveSenderComponent)))(t || _SlotStorySaveSenderComponent);
  };
})();
_SlotStorySaveSenderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStorySaveSenderComponent, selectors: [["app-slot-story-save-sender"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"], [3, "src"]], template: function SlotStorySaveSenderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotStorySaveSenderComponent_Template_button_click_1_listener() {
      return ctx.send();
    });
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.globalService.aiService.selectedSavePromptImg, \u0275\u0275sanitizeUrl);
  }
}, dependencies: [NgStyle, MatIconButton], styles: ["\n\n/*# sourceMappingURL=slot-story-save-sender.component.css.map */"] });
var SlotStorySaveSenderComponent = _SlotStorySaveSenderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStorySaveSenderComponent, { className: "SlotStorySaveSenderComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-save-sender\\slot-story-save-sender.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-item-character/slot-item-character.component.ts
var _SlotItemCharacterComponent = class _SlotItemCharacterComponent extends SlotAbstract {
  constructor(globalService, dialog, _snackBar) {
    super(globalService);
    this.globalService = globalService;
    this.dialog = dialog;
    this._snackBar = _snackBar;
    this.categoryClicked = new EventEmitter();
    this.users = [];
    this.categories = [];
    this.categoryCode = new CategoryCode();
    this.categoryRest = new CategoryRest(dialog, _snackBar, globalService);
    this.categoryMenu = new CategoryMenuData(this.categoryRest);
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.currentCategoryService = this.globalService.characterService;
    this.categories = this.globalService.characterService.load();
    this.style.overflow = "auto";
  }
  onCategoryClick(categoryId, treeView) {
    const categoryIdPath = treeView.treeService.findPath(categoryId);
    this.categoryClicked.emit({
      id: categoryId,
      categoryNamePath: this.setCategoryPath(categoryId, treeView.treeService),
      categoryIdPath
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
_SlotItemCharacterComponent.\u0275fac = function SlotItemCharacterComponent_Factory(t) {
  return new (t || _SlotItemCharacterComponent)(\u0275\u0275directiveInject(GlobalService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar));
};
_SlotItemCharacterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemCharacterComponent, selectors: [["app-slot-item-character"]], outputs: { categoryClicked: "categoryClicked" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "ngStyle"], [3, "datasource", "menuClass", "who", "clickEvent", "moveData"], ["treeview2", ""]], template: function SlotItemCharacterComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "app-treeview", 1, 2);
    \u0275\u0275listener("clickEvent", function SlotItemCharacterComponent_Template_app_treeview_clickEvent_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const _r0 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.onCategoryClick($event, _r0));
    })("moveData", function SlotItemCharacterComponent_Template_app_treeview_moveData_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const _r0 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx.categoryRest.move($event, _r0));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance();
    \u0275\u0275property("datasource", ctx.categories)("menuClass", ctx.categoryMenu)("who", "admin");
  }
}, dependencies: [NgStyle, TreeviewComponent], styles: ["\n\n/*# sourceMappingURL=slot-item-character.component.css.map */"] });
var SlotItemCharacterComponent = _SlotItemCharacterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemCharacterComponent, { className: "SlotItemCharacterComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-character\\slot-item-character.component.ts", lineNumber: 33 });
})();

// Modules/pages/slots/items/slot-character-input/slot-character-input.component.ts
var _SlotCharacterInputComponent = class _SlotCharacterInputComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "Write a Object";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  getAnswer(event) {
    if (event.isComposing)
      return;
    this.globalService.characterService.send();
    this.globalService.characterService.messageValue = "";
  }
};
_SlotCharacterInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotCharacterInputComponent_BaseFactory;
  return function SlotCharacterInputComponent_Factory(t) {
    return (\u0275SlotCharacterInputComponent_BaseFactory || (\u0275SlotCharacterInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotCharacterInputComponent)))(t || _SlotCharacterInputComponent);
  };
})();
_SlotCharacterInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotCharacterInputComponent, selectors: [["app-slot-character-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 3, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"]], template: function SlotCharacterInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "Object Messages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 2);
    \u0275\u0275listener("ngModelChange", function SlotCharacterInputComponent_Template_input_ngModelChange_4_listener($event) {
      return ctx.globalService.characterService.messageValue = $event;
    })("keydown.enter", function SlotCharacterInputComponent_Template_input_keydown_enter_4_listener($event) {
      return ctx.getAnswer($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx.Placeholder)("ngModel", ctx.globalService.characterService.messageValue);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\n/*# sourceMappingURL=slot-character-input.component.css.map */"] });
var SlotCharacterInputComponent = _SlotCharacterInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotCharacterInputComponent, { className: "SlotCharacterInputComponent", filePath: "Modules\\pages\\slots\\items\\slot-character-input\\slot-character-input.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/forms/slot-gemini-input/slot-gemini-input.component.ts
function SlotGeminiInputComponent_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 4);
    \u0275\u0275listener("ngModelChange", function SlotGeminiInputComponent_input_4_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.globalService.geminiInput = $event);
    })("keydown.enter", function SlotGeminiInputComponent_input_4_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.getAnswer($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r0.Placeholder)("ngModel", ctx_r0.globalService.geminiInput);
  }
}
function SlotGeminiInputComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 5);
    \u0275\u0275listener("ngModelChange", function SlotGeminiInputComponent_input_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.globalService.geminiInput = $event);
    })("keydown.enter", function SlotGeminiInputComponent_input_5_Template_input_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.getAnswer($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r1.Placeholder)("ngModel", ctx_r1.globalService.geminiInput);
  }
}
var _SlotGeminiInputComponent = class _SlotGeminiInputComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.Placeholder = "AI Gemini";
    this.isLoading = false;
    this.commandList = {
      "Error in AI Output": {
        filePath: void 0,
        type: "slot",
        action: () => {
          this.globalService.httpService.snackBar("Error in AI Output : " + JSON.stringify(this.similarities));
        }
      },
      "Add menu item": {
        filePath: void 0,
        type: "slot",
        actionType: "addMenuItem",
        action: () => {
          this.updateNavigation();
        }
      },
      "Create a project": {
        filePath: "./assets/json/factory/navigation.json",
        type: "slot",
        actionType: "updateTitle",
        callback: () => {
          this.updateNavigation();
        }
      },
      "Create a story generation tool": {
        filePath: "./assets/json/factory/novel.json",
        type: "slotBody"
      },
      "Show simulator": {
        filePath: "/assets/json/factory/simulator.json",
        type: "slotBody"
      },
      "Create an object tool": {
        filePath: "/assets/json/factory/object.json",
        type: "slotBody"
      },
      "Create story data": {
        filePath: "",
        type: "categories",
        action: () => {
          this.createStory();
        }
      },
      "Generate object data": {
        filePath: "",
        type: "character",
        action: () => {
          this.createCharacter();
        }
      },
      "Generate game logic": {
        filePath: "",
        type: "",
        action: () => {
          this.createGame();
        }
      },
      "Create a game generation tool": {
        filePath: "/assets/json/factory/gameLogic.json",
        type: "slotBody"
      },
      "Remove all content": {
        filePath: "",
        type: "slot",
        action: () => {
          this.clearSlot();
          this.clearBodySlot();
          this.loadSlot();
          this.loadBodySlot();
        }
      }
    };
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
  }
  createGame() {
    const actions = ["", "Item", "Battle"];
    this.globalService.categoryService.categories.forEach((category, index) => {
      category.data.actionValue = actions[index] ?? "";
    });
    localStorage.setItem("categories", JSON.stringify(this.globalService.categoryService.categories));
    console.log("createGame", this.globalService.categoryService.categories);
    this.globalService.slotService.dockingService.linkComponent("body");
    this.loadBodySlot();
  }
  createCharacter() {
    this.globalService.httpService.snackBar("Gemini is creating object information...");
    const storyCategory = this.globalService.categoryService.categories[0];
    const prompt = this.globalService.promptService.generateCharacterPrompt(storyCategory?.name);
    this.globalService.aiService.geminiSenderComponent.send(prompt).subscribe({
      next: (text) => {
        const result = text?.parts?.[0]?.text.replace(/\n/g, "");
        console.log("result", result);
        const jsonResult = this.globalService.geminiService.parseJsonFromDelimitedString(result, /```json{/, /}```/, false);
        console.log("createCharacter result", jsonResult);
        this.bindCurrentCategoryData(jsonResult, "character");
      },
      error: (error) => {
      }
    });
  }
  createStory() {
    this.globalService.httpService.snackBar("AI is creating a story...");
    const prompt = this.globalService.promptService.generateNovelPrompt();
    this.globalService.aiService.geminiSenderComponent.send(prompt).subscribe({
      next: (text) => {
        const result = text?.parts?.[0]?.text.replace(/\n/g, "");
        console.log("result", result);
        const jsonResult = this.globalService.geminiService.parseJsonFromDelimitedString(result, /```json{/, /}```/, false);
        console.log("jsonResult", jsonResult);
        this.bindCurrentCategoryData(jsonResult, "categories");
      },
      error: (error) => {
      }
    });
  }
  bindCurrentCategoryData(jsonResult, type) {
    this.globalService.currentCategoryService.categories = [
      {
        id: 1,
        name: `${jsonResult.title} [${jsonResult.genre}]`,
        rootId: 1,
        depth: 0,
        type: "title",
        children: [],
        data: {
          contentValue: jsonResult.summary
        }
      }
    ];
    let nextId = 2;
    const processStory = (contents, parentId, depth) => {
      for (const item of contents) {
        const newCategory = {
          id: nextId++,
          name: item.name,
          rootId: 1,
          depth,
          type: item.type,
          children: [],
          data: {
            contentValue: item.content
          }
        };
        this.globalService.currentCategoryService.categories.find((c) => c.id === parentId)?.children.push(newCategory.id);
        this.globalService.currentCategoryService.categories.push(newCategory);
        if (item.children && item.children.length > 0) {
          processStory(item.children, newCategory.id, depth + 1);
        }
      }
    };
    processStory(jsonResult.content, 1, 1);
    localStorage.setItem(type, JSON.stringify(this.globalService.currentCategoryService.categories));
    this.globalService.slotService.dockingService.linkComponent("body");
    this.loadBodySlot();
  }
  updateNavigation() {
    const existingSlotData = localStorage.getItem("slot");
    if (existingSlotData) {
      const parsedExistingData = JSON.parse(existingSlotData);
      const targetSlot = parsedExistingData.find((item) => {
        return item.selectedIndices && item.selectedIndices.length > 0 && item.title === "\uB124\uBE44\uAC8C\uC774\uC158";
      });
      if (targetSlot) {
        if (!targetSlot.customData) {
          targetSlot.customData = {
            menu: [],
            title: this.highestSimilarity.name
          };
        }
        const commandData = this.commandList[this.highestSimilarity.command];
        if (commandData && commandData.actionType === "addMenuItem" && targetSlot.customData.menu) {
          targetSlot.customData.menu.push({
            title: this.highestSimilarity.name,
            components: []
          });
          this.globalService.slotService.currentBodyKey = this.highestSimilarity.name;
        }
        localStorage.setItem("slot", JSON.stringify(parsedExistingData));
        this.loadSlot();
      } else {
        console.log("selectedIndices\uB97C \uAC00\uC9C4 '\uB124\uBE44\uAC8C\uC774\uC158' \uC2AC\uB86F\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
      }
    } else {
      console.log("\uB85C\uCEEC \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 'slot' \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
  }
  handleCommand(commandData, data) {
    if (commandData.filePath) {
      this.createMenu(commandData.filePath, commandData.type, commandData.callback);
    } else if (commandData.action) {
      commandData.action();
    }
  }
  createMenu(filePath, type, callback) {
    this.getLocalJsonData(filePath).subscribe((data) => {
      this.processMenuData(data, type);
      if (callback) {
        callback();
      }
    });
  }
  getLocalJsonData(filePath) {
    return this.globalService.httpService.GetJson(filePath);
  }
  processMenuData(data, type) {
    const existingSlotBody = localStorage.getItem(type) || "[]";
    let parsedExistingData = JSON.parse(existingSlotBody);
    const actionType = this.commandList[this.highestSimilarity.command].actionType;
    if (actionType === "replaceData") {
      parsedExistingData = [];
    }
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this.addItemIfNotDuplicate(parsedExistingData, item, type);
      });
    } else {
      this.addItemIfNotDuplicate(parsedExistingData, data, type);
    }
    localStorage.setItem(type, JSON.stringify(parsedExistingData));
    if (type === "slot") {
      this.loadSlot();
    } else {
      this.globalService.slotService.dockingService.linkComponent("body");
      this.loadBodySlot();
    }
  }
  addItemIfNotDuplicate(parsedExistingData, item, type) {
    Object.keys(item).forEach((key) => {
      item.key = this.globalService.slotService.currentBodyKey;
    });
    const isDuplicate = parsedExistingData.some((existingItem) => JSON.stringify(existingItem) === JSON.stringify(item));
    if (!isDuplicate) {
      if (type === "slotBody") {
        parsedExistingData.push(item);
      } else {
        parsedExistingData.push(item);
      }
    } else {
      this.globalService.httpService.snackBar("Identical schema exists on the page : " + JSON.stringify(item));
    }
  }
  sortBySimilarity(commands) {
    return commands.sort((a, b) => b.similarity - a.similarity);
  }
  getAnswer(event) {
    return __async(this, null, function* () {
      if (event.isComposing)
        return;
      if (!this.globalService.geminiService.isUse)
        return;
      const userInput = this.globalService.geminiInput;
      const prompt = this.buildSimilarityPrompt(userInput);
      this.isLoading = true;
      this.globalService.geminiService.createAiData(prompt).subscribe({
        next: (similaritiesText) => {
          this.similarities = this.parseSimilarities(similaritiesText);
          this.highestSimilarity = this.sortBySimilarity(this.similarities)[0];
          this.globalService.slotService.currentFactoryMessage = JSON.stringify(this.highestSimilarity);
          if (this.highestSimilarity && this.highestSimilarity.similarity >= 0.7) {
            const commandData = this.commandList[this.highestSimilarity.command];
            if (commandData && (commandData.filePath || commandData.action)) {
              this.handleCommand(commandData);
            }
          } else {
            this.globalService.httpService.snackBar("Similarity is low or there are no matching commands:" + JSON.stringify(this.highestSimilarity));
          }
          this.globalService.geminiInput = "";
          this.isLoading = false;
        },
        error: (error) => {
          console.log("Gemini API \uD638\uCD9C \uC911 \uC624\uB958 \uBC1C\uC0DD:", error);
          this.globalService.httpService.snackBar("Gemini API \uD638\uCD9C \uC911 \uC624\uB958 \uBC1C\uC0DD : " + error);
        }
      });
    });
  }
  buildSimilarityPrompt(userInput) {
    const commands = Object.keys(this.commandList);
    return `Please evaluate the similarity between the following input sentence and the commands, using a number between 0 and 1. 1 indicates a perfect match, and 0 indicates no match at all. If the sentence requests adding a menu, please identify the name; if no name is provided, set the default name to "No Name".
            Input sentence: ${userInput}
            Commands: ${commands.join(", ")}
            Answer: [{ command: command, similarity: similarity, name: name }] 
            `;
  }
  parseSimilarities(similaritiesText) {
    console.log("parseSimilarities", similaritiesText);
    const similarities = similaritiesText?.parts?.[0]?.text.replace(/\n/g, "");
    return this.globalService.geminiService.parseJsonFromDelimitedString(similarities, /```json\[/, /]```/, true);
  }
};
_SlotGeminiInputComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotGeminiInputComponent_BaseFactory;
  return function SlotGeminiInputComponent_Factory(t) {
    return (\u0275SlotGeminiInputComponent_BaseFactory || (\u0275SlotGeminiInputComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotGeminiInputComponent)))(t || _SlotGeminiInputComponent);
  };
})();
_SlotGeminiInputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotGeminiInputComponent, selectors: [["app-slot-gemini-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 3, consts: [[3, "ngStyle"], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "class", "shimmer-loading", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter", 4, "ngIf"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter", 4, "ngIf"], ["matInput", "", 1, "shimmer-loading", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", "keydown.enter"]], template: function SlotGeminiInputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3, "Gemini Factory");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SlotGeminiInputComponent_input_4_Template, 1, 2, "input", 2)(5, SlotGeminiInputComponent_input_5_Template, 1, 2, "input", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isLoading);
  }
}, dependencies: [NgIf, NgStyle, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatLabel, MatInput], styles: ["\n\n.shimmer-loading[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to right,\n      #00BFFF,\n      #f07816,\n      #00BFFF);\n  background-size: 1200px 104px;\n  position: relative;\n  animation: _ngcontent-%COMP%_loading 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0% {\n    background-position: 0px 0;\n  }\n  50% {\n    background-position: 1200px 0;\n  }\n  100% {\n    background-position: 0px 0;\n  }\n}\n/*# sourceMappingURL=slot-gemini-input.component.css.map */"] });
var SlotGeminiInputComponent = _SlotGeminiInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotGeminiInputComponent, { className: "SlotGeminiInputComponent", filePath: "Modules\\pages\\slots\\items\\forms\\slot-gemini-input\\slot-gemini-input.component.ts", lineNumber: 39 });
})();

// Modules/pages/slots/components/babylon-vector-game/babylon-vector-game.component.ts
var _c05 = ["renderCanvas"];
var _SlotVectorBabaylonGameComponent = class _SlotVectorBabaylonGameComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.yBotPosionX = 0;
    this.yBotPosionY = 0;
    this.yBotPosionZ = 0;
    this.yBotPosionAngle = 0;
    this.isFirstLargeGround = true;
    this.animationData = [
      { label: "YBot_Idle", range: { from: 0, to: 0 } },
      { label: "YBot_Walk", range: { from: 0, to: 0 } },
      { label: "YBot_Run", range: { from: 0, to: 0 } },
      { label: "YBot_LeftStrafeWalk", range: { from: 0, to: 0 } },
      { label: "YBot_RightStrafeWalk", range: { from: 0, to: 0 } }
    ];
    this.boxes = [];
    this.originalBoxPositions = [];
    this.showLabels = false;
    this.initialBoxPositions = [];
    this.grounds = [];
    this.selectedGround = null;
    this.initialGroundPositions = [];
    this.categories = [];
    this.ybotMoveIndex = 0;
    this.ybotMoveState = 1;
    this.isMoving = false;
    this.alternateRotation = true;
    this.totalMovedDistance = 0;
  }
  ngOnInit() {
    this.globalService.commandService.current3d = this;
    this.bindInstance();
    console.log("vector babylon");
  }
  ngOnDestroy() {
    this.stopMovingBoxes();
  }
  getStoryData() {
    this.categories = this.globalService.categoryService.load();
    console.log("3d logic categories", this.categories);
  }
  ngAfterViewInit() {
    this.size = { width: this.data.size.width, height: this.data.size.height };
    this.renderCanvas.nativeElement.style.width = this.size.width + "px";
    this.renderCanvas.nativeElement.style.height = this.size.height + "px";
    this.getStoryData();
    this.load();
    this.advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    this.createGrounds();
    window.onresize = () => {
      this.size = {
        width: this.data.size.width,
        height: this.data.size.height
      };
      this.renderCanvas.nativeElement.style.width = this.size.width + "px";
      this.renderCanvas.nativeElement.style.height = this.size.height + "px";
    };
  }
  load() {
    this.engine = new BABYLON.Engine(this.renderCanvas.nativeElement, true);
    this.scene = this.createScene();
    this.engine.runRenderLoop(() => this.scene.render());
    this.scene.enablePhysics(new BABYLON.Vector3(0, -9.81, 0), new BABYLON.CannonJSPlugin());
  }
  createScene() {
    this.engine.enableOfflineSupport = false;
    BABYLON.Animation.AllowMatricesInterpolation = true;
    const scene = new BABYLON.Scene(this.engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    this.setupCamera(scene);
    this.setupLighting(scene);
    const shadowGenerator = this.setupShadows(scene);
    this.engine.displayLoadingUI();
    this.loadModelAndAnimations(scene, shadowGenerator);
    return scene;
  }
  setupLighting(scene) {
    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.6;
    light.specular = BABYLON.Color3.Black();
    const light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, -1), scene);
    light2.intensity = 0.6;
    light2.position = new BABYLON.Vector3(0, 5, 5);
  }
  setupShadows(scene) {
    const light2 = scene.getLightByName("dir01");
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurKernel = 32;
    return shadowGenerator;
  }
  loadModelAndAnimations(scene, shadowGenerator) {
    BABYLON.SceneLoader.ImportMesh("", "./assets/babylon/scenes/", "dummy3.babylon", scene, (newMeshes, particleSystems, skeletons) => {
      this.skeleton = skeletons[0];
      shadowGenerator.addShadowCaster(scene.meshes[0], true);
      for (let index = 0; index < newMeshes.length; index++) {
        newMeshes[index].receiveShadows = false;
      }
      this.skeleton.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
      this.skeleton.animationPropertiesOverride.enableBlending = true;
      this.skeleton.animationPropertiesOverride.blendingSpeed = 0.05;
      this.skeleton.animationPropertiesOverride.loopMode = 1;
      this.animationRanges = this.initializeAnimations(scene, skeletons[0]);
      this.ybotMesh = newMeshes[0];
      this.createCircleUnderYbot(scene);
      this.createAnotherCircleUnderYbot(scene);
      this.initialYbotRotation = this.ybotMesh.rotation.clone();
      this.createUI(scene, this.skeleton, this.animationRanges);
      this.engine.hideLoadingUI();
    });
  }
  createGroundControlPanel() {
    const panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    this.advancedTexture.addControl(panel);
    let selectedGround = null;
    this.grounds.forEach((ground, index) => {
      this.addButtonToPanel(panel, `Select Ground ${index}`, "blue", () => {
        selectedGround = ground;
      });
    });
    ["X", "Y", "Z"].forEach((axis) => {
      const slider = new BABYLON.GUI.Slider();
      slider.minimum = -10;
      slider.maximum = 10;
      slider.value = selectedGround ? selectedGround.position[axis.toLowerCase()] : 0;
      slider.height = "20px";
      slider.width = "200px";
      slider.onValueChangedObservable.add((value) => {
        if (selectedGround) {
          selectedGround.position[axis.toLowerCase()] = value;
        }
      });
      const label = new BABYLON.GUI.TextBlock();
      label.text = `${axis}: `;
      label.height = "20px";
      label.width = "40px";
      const container = new BABYLON.GUI.Rectangle();
      container.height = "40px";
      container.addControl(label);
      container.addControl(slider);
      panel.addControl(container);
    });
    ["X", "Z"].forEach((axis) => {
      const slider = new BABYLON.GUI.Slider();
      slider.minimum = 0.1;
      slider.maximum = 5;
      slider.value = selectedGround ? selectedGround.scaling[axis.toLowerCase()] : 1;
      slider.height = "20px";
      slider.width = "200px";
      slider.onValueChangedObservable.add((value) => {
        if (selectedGround) {
          selectedGround.scaling[axis.toLowerCase()] = value;
        }
      });
      const label = new BABYLON.GUI.TextBlock();
      label.text = `Scale ${axis}: `;
      label.height = "20px";
      label.width = "60px";
      const container = new BABYLON.GUI.Rectangle();
      container.height = "40px";
      container.addControl(label);
      container.addControl(slider);
      panel.addControl(container);
    });
    this.scene.onBeforeRenderObservable.add(() => {
      ["X", "Y", "Z"].forEach((axis) => {
        const slider = this.advancedTexture.getControlByName(`slider-${axis}`);
        if (slider) {
          slider.value = this.selectedGround ? this.selectedGround.position[axis.toLowerCase()] : 0;
        }
      });
      ["X", "Z"].forEach((axis) => {
        const slider = this.advancedTexture.getControlByName(`slider-scale-${axis}`);
        if (slider) {
          slider.value = this.selectedGround ? this.selectedGround.scaling[axis.toLowerCase()] : 1;
        }
      });
    });
  }
  generateRandomGroundData() {
    const data = [
      {
        position: { x: 0, z: 0 },
        direction: "forward",
        width: 2,
        height: 5,
        distance: 5.5,
        index: 0
      },
      ...Array.from({ length: 4 }, () => ({
        position: { x: 0, z: 0 },
        direction: "",
        width: 2,
        height: 5,
        distance: 3.5,
        index: 1
      })),
      {
        position: { x: 0, z: 0 },
        direction: "forward",
        width: 2,
        height: 5,
        distance: 5.5,
        index: 5
      },
      {
        position: { x: 0, z: 0 },
        direction: "forward",
        width: 20,
        height: 20,
        distance: 20,
        type: "large",
        title: "Large Ground",
        index: 6
      }
    ];
    const directions = [
      { direction: "forward", distance: 5.5 },
      { direction: "left", distance: 3 },
      { direction: "right", distance: 3 }
    ];
    for (let i = 1; i < 5; i++) {
      const prevDirection = data[i - 1].direction;
      let chosenDirection;
      if (prevDirection === "left" || prevDirection === "right") {
        const options = directions.map((d) => d.direction === "forward" ? __spreadProps(__spreadValues({}, d), { distance: 7 }) : d).filter((d) => d.direction === prevDirection || d.direction === "forward");
        chosenDirection = this.randomChoice(options);
      } else {
        chosenDirection = this.randomChoice(directions);
      }
      if (chosenDirection.direction === prevDirection) {
        chosenDirection.distance = 5;
      }
      data[i].direction = chosenDirection.direction;
      data[i].distance = chosenDirection.distance;
      data[i].index = i;
    }
    return data;
  }
  randomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  createGrounds() {
    this.isFirstLargeGround = true;
    const names = this.categories.map((item) => item.name);
    const result = names.map((name, index) => {
      const groundDataArray = [];
      const randomData = this.generateRandomGroundData();
      const largeTypeIndex = randomData.findIndex((item) => item.type === "large");
      if (largeTypeIndex !== -1) {
        randomData[largeTypeIndex].title = name;
        randomData[largeTypeIndex].index = index;
      }
      groundDataArray.push(...randomData);
      return groundDataArray;
    });
    let previousGround = null;
    let currentPosition = { x: 0, z: 0 };
    result.forEach((groundsData, i) => {
      groundsData.forEach((groundData, index) => {
        const ground = BABYLON.MeshBuilder.CreateGround("ground" + index, {
          width: groundData.width,
          height: groundData.height,
          subdivisions: 4
        }, this.scene);
        ground.material = new BABYLON.StandardMaterial("groundMaterial" + index, this.scene);
        ground.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        ground.material.alpha = 0.4;
        ground.isPickable = true;
        ground.type = groundData.type;
        ground.width = groundData.width;
        ground.height = groundData.height;
        ground.direction = groundData.direction;
        ground.index = groundData.index;
        ground.distance = groundData.distance;
        ground.onPointerDown = () => {
          this.selectGround(ground);
        };
        if (previousGround == null) {
          previousGround = groundData;
        }
        this.offsetGround(groundData, currentPosition, previousGround, ground);
        this.createGroundLabel(i, groundData, ground);
        this.grounds.push(ground);
        previousGround = groundData;
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(
          ground,
          BABYLON.PhysicsImpostor.BoxImpostor,
          { mass: 0, restitution: 0.9 },
          // ground는 움직이지 않도록 질량 0 설정
          this.scene
        );
      });
    });
    this.initialGroundPositions = this.grounds.map((ground) => ground.position.clone());
  }
  offsetGround(groundData, currentPosition, previousGround, ground) {
    let xOffset = 0;
    let zOffset = 0;
    switch (groundData.direction) {
      case "forward":
        zOffset = groundData.height - (groundData.height === 20 ? 7.5 : 0);
        if (previousGround.direction === "right") {
          zOffset -= 1.5;
        }
        break;
      case "right":
        ground.rotation.y = Math.PI / 2;
        xOffset = groundData.height - (previousGround.direction === "forward" ? 3.5 : 1.5);
        if (previousGround.direction === "forward") {
          zOffset = groundData.width + 1.5;
        }
        break;
      case "left":
        ground.rotation.y = -Math.PI / 2;
        xOffset = -(groundData.height - (previousGround.direction === "forward" ? 3.5 : 1.5));
        zOffset = previousGround.direction === "forward" ? groundData.width + 1.5 : 1.5;
        break;
    }
    currentPosition.x += xOffset;
    currentPosition.z += zOffset;
    ground.position.z = currentPosition.z - 3;
    ground.position.x = currentPosition.x;
    switch (groundData.direction) {
      case "forward":
        if (groundData.type === "large") {
          currentPosition.z += 7.5;
        }
        break;
      case "right":
        currentPosition.x += 1.5;
        break;
      case "left":
        currentPosition.x -= 1.5;
        currentPosition.z -= 1.5;
        break;
    }
  }
  createGroundLabel(index, groundData, ground) {
    if (!groundData.title)
      return;
    const label = new BABYLON.GUI.TextBlock(`ground${index}`);
    label.text = `(${groundData.title})`;
    label.color = "black";
    label.fontSize = 12;
    label.isVisible = index === 0 ? true : false;
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", { size: 1 }, this.scene);
    plane.parent = ground;
    plane.position.y = 0.5 / 2 + 0.2;
    plane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    const planeMaterial = new BABYLON.StandardMaterial("planeMaterial", this.scene);
    planeMaterial.alpha = 0;
    plane.material = planeMaterial;
    this.advancedTexture.addControl(label);
    label.linkWithMesh(plane);
    label.linkOffsetY = -30;
    this.isFirstLargeGround = false;
  }
  getCurrentGround() {
    for (const ground of this.grounds) {
      if (this.ybotMesh.intersectsMesh(ground, false)) {
        return ground;
      }
    }
    return null;
  }
  selectGround(ground) {
    this.selectedGround = ground;
    if (this.selectedGround) {
      this.selectedGround.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    }
    if (this.selectedGround !== ground && this.grounds.includes(ground)) {
      ground.material.emissiveColor = new BABYLON.Color3(0, 0, 0);
    }
  }
  createAnotherCircleUnderYbot(scene) {
    const radius = 0.5;
    const circle = BABYLON.MeshBuilder.CreateDisc(
      "anotherCircle",
      // 메쉬 이름을 다르게 설정
      { radius, tessellation: 32 },
      scene
    );
    this.anotherCircle = circle;
    circle.position = this.ybotMesh.position.clone();
    circle.position.y = 0;
    circle.rotation.x = Math.PI / 2;
    const circleMaterial = new BABYLON.StandardMaterial("anotherCircleMaterial", scene);
    circleMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
    circleMaterial.alpha = 0.5;
    circle.material = circleMaterial;
  }
  createCircleUnderYbot(scene) {
    const radius = 2;
    this.circle = BABYLON.MeshBuilder.CreateDisc("circle", { radius, tessellation: 32 }, scene);
    this.circle.position = this.ybotMesh.position.clone();
    this.circle.position.y = 0;
    this.circle.rotation.x = Math.PI / 2;
    const circleMaterial = new BABYLON.StandardMaterial("circleMaterial", scene);
    circleMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    circleMaterial.alpha = 0.5;
    this.circle.material = circleMaterial;
  }
  createAndArrangeBoxes(scene) {
    const numBoxes = 50;
    const boxSize = 0.5;
    const areaSize = 10;
    const minDistanceFromYbot = 3;
    const minDistanceBetweenBoxes = boxSize * 2;
    const boxes = [];
    for (let i = 0; i < numBoxes; i++) {
      let x, z, y, isOverlapping;
      do {
        x = (Math.random() - 0.5) * areaSize;
        z = (Math.random() - 0.5) * areaSize;
        y = Math.random() * 10 + 5;
        isOverlapping = false;
        if (BABYLON.Vector3.Distance(new BABYLON.Vector3(x, 0, z), this.ybotMesh.position) < minDistanceFromYbot) {
          isOverlapping = true;
          continue;
        }
        for (let j = 0; j < i; j++) {
          if (BABYLON.Vector3.Distance(new BABYLON.Vector3(x, y, z), boxes[j].position) < minDistanceBetweenBoxes) {
            isOverlapping = true;
            break;
          }
        }
      } while (isOverlapping);
      const box = BABYLON.MeshBuilder.CreateBox(`box${i}`, { size: boxSize }, scene);
      box.position = new BABYLON.Vector3(x, y, z);
      box.receiveShadows = true;
      const material = new BABYLON.StandardMaterial(`boxMaterial${i}`, scene);
      material.diffuseColor = new BABYLON.Color3.Random();
      material.alpha = 0.8;
      box.material = material;
      box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.2 }, scene);
      const label = new BABYLON.GUI.TextBlock(`label${i}`);
      label.text = `(${box.position.x.toFixed(2)}, ${box.position.y.toFixed(2)}, ${box.position.z.toFixed(2)})`;
      label.color = "black";
      label.fontSize = 12;
      label.isVisible = this.showLabels;
      const plane = BABYLON.MeshBuilder.CreatePlane("plane", { size: 1 }, scene);
      plane.parent = box;
      plane.position.y = boxSize / 2 + 0.2;
      plane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
      const planeMaterial = new BABYLON.StandardMaterial("planeMaterial", scene);
      planeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      planeMaterial.alpha = 0;
      plane.material = planeMaterial;
      this.advancedTexture.addControl(label);
      label.linkWithMesh(plane);
      label.linkOffsetY = -30;
      boxes.push(box);
      this.originalBoxPositions.push(box.position.clone());
    }
    this.boxes = this.boxes.concat(boxes);
    return boxes;
  }
  createUI(scene, skeleton, animationRanges) {
  }
  // ybot을 왼쪽으로 15도 회전시키는 함수 추가
  rotateYbotLeft() {
    this.ybotMesh.rotation.y -= BABYLON.Tools.ToRadians(15);
    this.yBotPosionAngle = this.ybotMesh.rotation.y;
    this.circle.rotation.y = this.ybotMesh.rotation.y;
  }
  rotateYbotRight() {
    this.ybotMesh.rotation.y += BABYLON.Tools.ToRadians(15);
    this.yBotPosionAngle = this.ybotMesh.rotation.y;
    this.circle.rotation.y = this.ybotMesh.rotation.y;
  }
  // 라벨 표시/숨김 토글 함수
  toggleLabels() {
    this.showLabels = !this.showLabels;
    this.boxes.forEach((_, index) => {
      const label = this.advancedTexture.getControlByName(`label${index}`);
      if (label) {
        label.isVisible = this.showLabels;
      }
    });
  }
  resetBoxes() {
    this.stopMovingBoxes();
    for (let i = 0; i < this.boxes.length; i++) {
      this.boxes[i].position = this.originalBoxPositions[i].clone();
    }
    this.anotherCircle.position.x = 0;
    this.anotherCircle.position.z = 0;
    this.anotherCircle.position.y = 0;
    this.grounds.forEach((ground, index) => {
      ground.position = this.initialGroundPositions[index].clone();
    });
    this.ybotMesh.rotation = this.initialYbotRotation.clone();
  }
  moveBoxes() {
    const ybotRotationRadians = -this.ybotMesh.rotation.y;
    const moveDirection = new BABYLON.Vector3(
      Math.sin(ybotRotationRadians),
      // x 방향 이동량 (sin 함수 사용, 부호 반전)
      0,
      // y 방향 이동량 (변경 없음)
      -Math.cos(ybotRotationRadians)
      // z 방향 이동량 (cos 함수 사용, 부호 반전)
    ).normalize();
    this.ybotMove(this.grounds[this.ybotMoveIndex]);
    this.anotherCircle.position.addInPlace(moveDirection.scale(0.2));
    this.grounds.forEach((d) => {
      d?.position?.addInPlace(moveDirection.scale(0.2));
    });
    this.yBotPosionX = this.anotherCircle.position.x;
    this.yBotPosionY = this.anotherCircle.position.y;
    this.yBotPosionZ = this.anotherCircle.position.z;
    this.boxes.forEach((object, index) => {
      object.position.addInPlace(moveDirection.scale(0.2));
      if (object.intersectsMesh(this.circle, false)) {
        const material = object.material;
        if (material && material instanceof BABYLON.StandardMaterial) {
          material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        }
      }
    });
  }
  ybotMove(currentGround) {
    const currentGroundLength = currentGround.height;
    this.totalMovedDistance += 0.2;
    if (this.ybotMoveState - 1 === this.grounds[this.ybotMoveIndex].index && this.grounds[this.ybotMoveIndex].type === "large" && this.totalMovedDistance > 8) {
      this.stopMovingBoxes();
      const label = this.advancedTexture.getControlByName(`ground${this.ybotMoveState}`);
      if (label) {
        label.isVisible = true;
        this.ybotMoveState++;
        this.createAndArrangeBoxes(this.scene);
      }
      return;
    }
    if (this.totalMovedDistance > this.grounds[this.ybotMoveIndex].distance) {
      this.ybotMoveIndex += 1;
      this.totalMovedDistance = 0;
      if (this.grounds[this.ybotMoveIndex] == null) {
        this.stopMovingBoxes();
        return;
      }
      this.ybotMesh.rotation.y = this.getDirectionFromGroundData(this.grounds[this.ybotMoveIndex].direction);
      this.yBotPosionAngle = this.ybotMesh.rotation.y;
    }
  }
  // GroundData의 direction 정보를 기반으로 ybot의 회전 각도를 반환하는 함수
  getDirectionFromGroundData(groundDirection) {
    if (groundDirection === "forward") {
      return 0;
    } else if (groundDirection === "right") {
      return Math.PI / 2;
    } else if (groundDirection === "left") {
      return -Math.PI / 2;
    } else {
      return 0;
    }
  }
  startMovingBoxes() {
    this.initialBoxPositions = this.boxes.map((box) => box.position.clone());
    this.moveInterval = setInterval(this.moveBoxes.bind(this), 30);
    if (this.animationRanges && this.animationRanges.runRange) {
      this.scene.beginAnimation(this.skeleton, this.animationRanges.runRange.from, this.animationRanges.runRange.to, true);
    }
    this.isMoving = true;
  }
  // 박스 움직임 멈추는 함수
  stopMovingBoxes() {
    clearInterval(this.moveInterval);
    if (this.animationRanges && this.animationRanges.idleRange) {
      this.scene.beginAnimation(this.skeleton, this.animationRanges.idleRange.from, this.animationRanges.idleRange.to, true);
    }
    this.isMoving = false;
  }
  setupCamera(scene) {
    this.initialAlpha = Math.PI / 4;
    this.initialBeta = Math.PI / 4;
    const camera = new BABYLON.ArcRotateCamera("camera1", this.initialAlpha, this.initialBeta, 8, new BABYLON.Vector3(0, 1, 0), scene);
    camera.attachControl(this.renderCanvas.nativeElement, true);
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 10;
    camera.wheelDeltaPercentage = 0.01;
  }
  initializeAnimations(scene, skeleton) {
    this.animationData.forEach((data) => {
      data.range = skeleton.getAnimationRange(data.label);
    });
    if (this.animationData[0].range) {
      scene.beginAnimation(skeleton, this.animationData[0].range.from, this.animationData[0].range.to, true);
    }
    const animationRanges = this.animationData.reduce((acc, data) => {
      acc[data.label.replace("YBot_", "").toLowerCase() + "Range"] = data.range;
      return acc;
    }, {});
    return animationRanges;
  }
  addAnimationControlButtons(panel, scene, skeleton, animationRanges) {
    this.animationData.forEach((data) => {
      this.addButtonToPanel(panel, data.label, "gray", () => {
        if (data.range) {
          scene.beginAnimation(skeleton, data.range.from, data.range.to, true);
        }
      });
    });
    this.addButtonToPanel(panel, "Play Blend", "gray", () => {
      if (animationRanges.walkRange && animationRanges.leftRange) {
        scene.stopAnimation(skeleton);
        const walkAnim = scene.beginWeightedAnimation(skeleton, animationRanges.walkRange.from, animationRanges.walkRange.to, 0.5, true);
        const leftAnim = scene.beginWeightedAnimation(skeleton, animationRanges.leftRange.from, animationRanges.leftRange.to, 0.5, true);
        walkAnim.syncWith(null);
        leftAnim.syncWith(walkAnim);
      }
    });
  }
  // Helper function to add buttons to the UI panel
  addButtonToPanel(panel, label, color, onClick) {
    const button = BABYLON.GUI.Button.CreateSimpleButton(`but-${label}`, label);
    button.paddingTop = "10px";
    button.width = "100px";
    button.height = "50px";
    button.color = "white";
    button.background = color;
    button.onPointerDownObservable.add(onClick);
    panel.addControl(button);
  }
};
_SlotVectorBabaylonGameComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotVectorBabaylonGameComponent_BaseFactory;
  return function SlotVectorBabaylonGameComponent_Factory(t) {
    return (\u0275SlotVectorBabaylonGameComponent_BaseFactory || (\u0275SlotVectorBabaylonGameComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotVectorBabaylonGameComponent)))(t || _SlotVectorBabaylonGameComponent);
  };
})();
_SlotVectorBabaylonGameComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotVectorBabaylonGameComponent, selectors: [["app-babylon-vector-game"]], viewQuery: function SlotVectorBabaylonGameComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c05, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.renderCanvas = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [[3, "ngStyle"], ["renderCanvas", ""]], template: function SlotVectorBabaylonGameComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "canvas", null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\ncanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n}\n.quiz[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n}\n/*# sourceMappingURL=babylon-vector-game.component.css.map */"] });
var SlotVectorBabaylonGameComponent = _SlotVectorBabaylonGameComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotVectorBabaylonGameComponent, { className: "SlotVectorBabaylonGameComponent", filePath: "Modules\\pages\\slots\\components\\babylon-vector-game\\babylon-vector-game.component.ts", lineNumber: 27 });
})();

// Modules/pages/slots/service/docking.service.ts
var _DockingService = class _DockingService extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.selectService = inject(SelectCalculateService);
    this.allComponents = [];
    this.slotData = [];
    this.bodySlotData = [];
    this.states = [
      {
        name: "AI \uC18C\uC124 + \uAC8C\uC784 \uB9CC\uB4E4\uAE30",
        type: "bar",
        flag: "./assets/svg/component1.svg",
        component: SlotNavigationBarComponent
      },
      {
        name: "AI Factory",
        type: "bar",
        flag: "./assets/svg/component1.svg",
        component: SlotGeminiInputComponent,
        visible: true
      },
      {
        name: "Menu Bar",
        type: "bar",
        flag: "./assets/svg/component2.svg",
        component: SlotMenuBarComponent
      },
      {
        name: "Content List",
        type: "body",
        flag: "./assets/svg/component3.svg",
        component: SlotContentListBarComponent
      },
      {
        name: "Content View",
        type: "body",
        flag: "./assets/svg/component4.svg",
        component: SlotContentViewBarComponent
      },
      {
        name: "Menu Mat",
        type: "menu",
        flag: "./assets/svg/component2.svg",
        component: SlotMenuMatComponent
      },
      {
        name: "AI Automated Workspace",
        type: "Zone",
        flag: "./assets/svg/component1.svg",
        component: SlotZoneBodyComponent
      },
      {
        name: "Body Line Zone",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotZoneBodyLineComponent
      },
      {
        name: "ChatBot",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotAppChatbotComponent
      },
      {
        name: "CharacterMP",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: CharacterMpComponent
      },
      {
        name: "CharacterHP",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: CharacterHpComponent
      },
      {
        name: "CharacterProfile",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: CharacterProfileComponent
      },
      {
        name: "FlowList",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: FlowListComponent
      },
      {
        name: "AI \uB85C\uC9C1 \uC0DD\uC131 \uD234",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: FlowViewComponent
      },
      {
        name: "Simulator",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotSimulatorComponent
      },
      {
        name: "item_list_drag",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotListDragComponent
      },
      {
        name: "item_add",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemAddComponent
      },
      {
        name: "item_play",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemPlayComponent
      },
      {
        name: "flow_item",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: FlowItemComponent
      },
      {
        name: "flow_item_line_pin",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemPinLineComponent
      },
      {
        name: "\uC2DC\uBB3C\uB808\uC774\uD130 INPUT",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemInputComponent
      },
      {
        name: "AI \uC18C\uC124 \uC218\uB3D9 \uC785\uB825",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotStoryInputComponent
      },
      {
        name: "AI \uC624\uBE0C\uC81D\uD2B8 \uC785\uB825",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotCharacterInputComponent
      },
      {
        name: "AI \uC18C\uC124 \uD0C0\uC774\uD2C0",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotFormInputComponent
      },
      {
        name: "AI \uC18C\uC124 \uC624\uBE0C\uC81D\uD2B8 \uC0C1\uC138 \uC124\uC815",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotFormTextAreaComponent
      },
      {
        name: "AI Text Area",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotFormTextAreaComponent,
        visible: true
      },
      {
        name: "story_viewer",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotStoryViewerComponent
      },
      {
        name: "\uC2DC\uBB3C\uB808\uC774\uD130 AI \uBC84\uD2BC",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemSenderComponent
      },
      {
        name: "AI Sender",
        type: "bar",
        flag: "./assets/svg/component1.svg",
        component: SlotStoryAiSenderComponent,
        visible: true
      },
      {
        name: "story_save_sender",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotStorySaveSenderComponent
      },
      {
        name: "flow_item_conversation",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemConversationComponent
      },
      {
        name: "AI \uC18C\uC124 \uC0DD\uC131 \uD234",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemCategoryComponent
      },
      {
        name: "AI \uC624\uBE0C\uC81D\uD2B8 \uC0DD\uC131 \uD234",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemCharacterComponent
      },
      {
        name: "flow_item_prompt",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotItemPromptComponent
      },
      {
        name: "3d-logic",
        type: "body",
        flag: "./assets/svg/component1.svg",
        component: SlotVectorBabaylonGameComponent,
        visible: true
      }
    ];
  }
  setDefault(componetName) {
    const data = this.slots.selectService.sizeInfo;
    data.title = componetName;
    data.isBodyBind = this.globalService.slotService.isBodyBind;
    data.id = this.globalService.logicService.getGUID();
    data.customData = {};
    this.createComponent("default", SlotDefaultComponent, data);
    this.setSlot(data);
  }
  slotUseGemini() {
    this.states = this.states.map((state) => {
      if (state.name.toLowerCase().includes("gemini")) {
        return __spreadProps(__spreadValues({}, state), { visible: true });
      } else {
        return state;
      }
    });
  }
  forEachAsync(array, callback) {
    return __async(this, null, function* () {
      for (const item of array) {
        const result = yield callback(item);
        if (!result) {
          break;
        }
      }
    });
  }
  selectedSlot() {
    this.slots.selectService.sizeInfo.selectedIndices?.forEach((d) => __async(this, null, function* () {
      const components = this.slots.selectService.squares[d].instance.components;
      if (components?.length > 0) {
        yield this.flowClicks(components);
      } else {
        this.globalService.slotService.openSlotBottomSheet();
      }
    }));
  }
  flowClicks(components) {
    return __async(this, null, function* () {
      for (const component of components.toReversed()) {
        if (!(yield component.click())) {
          break;
        }
      }
    });
  }
  clearAllComponent() {
    this.allComponents.forEach((d) => {
      this.globalService.factoryService.destroyComponent(d.value);
    });
    this.slots.selectService.squares.forEach((d) => {
      if (d.instance?.components?.first() instanceof SlotZoneBodyComponent) {
        d.instance.components.splice(1);
      }
    });
  }
  linkComponent(key) {
    this.allComponents.filter((d) => d.key === key).forEach((d) => {
      this.globalService.factoryService.destroyComponent(d.value);
    });
    this.slots.selectService.squares.forEach((d) => {
      if (d.instance.components?.first() instanceof SlotZoneBodyComponent) {
        d.instance.components.splice(1);
      }
    });
  }
  destroyComponent(key) {
    const dialogRef = this.globalService.httpService.openDeleteConfirmDialog();
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.destroyByIndex(key);
      }
    });
  }
  destroyByIndex(key) {
    this.allComponents.filter((d) => d.key === key).forEach((d) => {
      this.globalService.factoryService.destroyComponent(d.value);
    });
    this.slots.selectService.squares.forEach((d) => {
      if (d.instance.components?.first() instanceof SlotZoneBodyComponent) {
        d.instance.components.splice(1);
      }
    });
    this.clearBodySlotByIndex(this.globalService.slotService.currentBodyKey);
  }
  destroyAllComponent() {
    this.allComponents.forEach((d) => {
      this.globalService.factoryService.destroyComponent(d.value);
    });
    this.slots.selectService.squares.forEach((d) => {
      d.instance.components = [];
    });
  }
  createComponent(key, component, data) {
    this.allComponents.push({
      key,
      value: this.globalService.factoryService.createComponent(component, this.container, data)
    });
  }
};
_DockingService.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DockingService_BaseFactory;
  return function DockingService_Factory(t) {
    return (\u0275DockingService_BaseFactory || (\u0275DockingService_BaseFactory = \u0275\u0275getInheritedFactory(_DockingService)))(t || _DockingService);
  };
})();
_DockingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DockingService, factory: _DockingService.\u0275fac, providedIn: "root" });
var DockingService = _DockingService;

// Modules/pages/slots/service/move.service.ts
var _MoveService = class _MoveService {
  constructor(globalService) {
    this.globalService = globalService;
  }
  init() {
  }
  tset() {
    const initialState = {
      squares: [],
      moveDirection: null
    };
    const squareStateSubject = new BehaviorSubject(initialState);
    squareStateSubject.subscribe((state) => {
      const newSquares = state.squares.map((square) => {
        if (state.moveDirection) {
          switch (state.moveDirection) {
            case "up":
              if (square.size.y > 0) {
                return __spreadProps(__spreadValues({}, square), { y: square.size.y - 1 });
              } else {
                return square;
              }
            case "down":
              if (square.size.y < 17) {
                return __spreadProps(__spreadValues({}, square), { y: square.size.y + 1 });
              } else {
                return square;
              }
            case "left":
              if (square.size.x > 0) {
                return __spreadProps(__spreadValues({}, square), { x: square.size.x - 1 });
              } else {
                return square;
              }
            case "right":
              if (square.size.x < 14) {
                return __spreadProps(__spreadValues({}, square), { x: square.size.x + 1 });
              } else {
                return square;
              }
          }
        } else {
          return square;
        }
      });
      squareStateSubject.next(__spreadProps(__spreadValues({}, state), { squares: newSquares }));
    });
  }
};
_MoveService.\u0275fac = function MoveService_Factory(t) {
  return new (t || _MoveService)(\u0275\u0275inject(GlobalService));
};
_MoveService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MoveService, factory: _MoveService.\u0275fac, providedIn: "root" });
var MoveService = _MoveService;

// Modules/pages/slots/service/link.service.ts
var _LinkService = class _LinkService {
  constructor(globalService) {
    this.globalService = globalService;
    this.navigationData = [
      {
        title: "Please add a menu item",
        components: []
      }
    ];
    this.globalService.slotService.currentBodyKey = localStorage.getItem("bodyLink") ?? this.navigationData.first().title;
  }
  link(title) {
    this.globalService.httpService.snackBar("link : " + title);
  }
};
_LinkService.\u0275fac = function LinkService_Factory(t) {
  return new (t || _LinkService)(\u0275\u0275inject(GlobalService));
};
_LinkService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LinkService, factory: _LinkService.\u0275fac, providedIn: "root" });
var LinkService = _LinkService;

// Modules/pages/slots/slot/slot.component.ts
var _c06 = ["slotDrawer"];
var _c13 = ["squreContainer"];
function SlotComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r1.selectService.calculateDragBoxStyle());
  }
}
function SlotComponent_app_square_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-square", 25);
  }
  if (rf & 2) {
    const square_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("index", square_r5.index)("data", square_r5)("isSelected", square_r5.isSelected)("squareSize", ctx_r3.selectService.squareSize)("fontSize", ctx_r3.selectService.fontSize);
  }
}
var _SlotComponent = class _SlotComponent extends SlotAbstract {
  constructor(globalService) {
    super(globalService);
    this.globalService = globalService;
    this.selectService = inject(SelectCalculateService);
    this.dockingtService = inject(DockingService);
    this.moveService = inject(MoveService);
    this.linkService = inject(LinkService);
    this.width = 1090;
    this.innerStyle = {
      width: `${window.innerWidth - 20}px`
    };
  }
  ngOnInit() {
    super.reduxData();
    this.selectService.calculateSquares();
    timer(1e3).subscribe((d) => {
      const contentWidth = document.querySelector("mat-drawer-content").offsetWidth;
      const startWidth = (window.innerWidth - contentWidth) / 2;
      console.log(contentWidth, startWidth);
      this.selectService.startWidth = startWidth;
    });
    this.dockingtService.container = this.container;
    this.globalService.slotService.dockingService = this.dockingtService;
    this.dockingtService.slots = this;
    this.moveService.slots = this;
    this.globalService.slotService.slot = this;
    this.loadSlot();
    this.width = this.selectService.containerWidth;
  }
  onWhiteChange(event) {
    this.globalService.isWhite = event.checked;
    this.globalService.isWhite = event.checked;
  }
  onToggleChange(event) {
    this.globalService.slotService.isSlotWork = event.checked;
    this.globalService.slotService.isBodyMatch = event.checked;
  }
  onGeminiChange(event) {
    this.globalService.geminiService.isUse = event.checked;
  }
  onPlayChange(event) {
    this.globalService.geminiService.isPlay = event.checked;
    this.globalService.categoryService.currentSimulator.reload();
  }
  close() {
    this.slotDrawer.toggle();
  }
  onResize(event) {
  }
  zoomIn() {
    this.selectService.zoomLevel *= 1.1;
    this.selectService.calculateSquares();
  }
  zoomOut() {
    this.selectService.zoomLevel *= 0.9;
    this.selectService.calculateSquares();
  }
  calculateEvent(event) {
    const { clientX, clientY } = event;
    this.selectService.mouseX = clientX;
    this.selectService.mouseY = clientY;
    this.selectService.calculateCurrentSquareIndex(clientX, clientY);
    this.globalService.slotService.flowViewComponent?.onLineEvent(this.globalService.slotService.isDrawLine, clientX, clientY);
    if (!this.selectService.dragging)
      return;
    this.selectService.dragEnd = {
      x: event.clientX,
      y: event.clientY - this.selectService.squareSize
    };
  }
  //@HostListener('mousedown', ['$event'])
  onMouseDown(event, isPossibleSlotDrag, isSlotWork) {
    const target = event.target;
    this.selectService.dragging = true;
    this.selectService.dragStart = {
      x: event.clientX,
      y: event.clientY - this.selectService.startHeight
    };
    this.selectService.dragEnd = null;
    this.selectService.squares.forEach((square) => {
      square.isSelected = false;
    });
  }
  // @HostListener('mousemove', ['$event'])
  onMouseMove(event, isPossibleSlotDrag, isSlotWork) {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      selection.removeAllRanges();
    }
    this.calculateEvent(event);
    event.preventDefault();
  }
  // @HostListener('mouseup', ['$event'])
  onMouseUp(event, isPossibleSlotDrag, isSlotWork) {
    const target = event.target;
    this.calculateEvent(event);
    this.selectService.dragging = false;
    if (this.globalService.slotService.isDrawLine)
      return;
    this.selectService.selection();
    this.dockingtService.selectedSlot();
  }
};
_SlotComponent.\u0275fac = function SlotComponent_Factory(t) {
  return new (t || _SlotComponent)(\u0275\u0275directiveInject(GlobalService));
};
_SlotComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotComponent, selectors: [["app-slot"]], viewQuery: function SlotComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c06, 7);
    \u0275\u0275viewQuery(_c13, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slotDrawer = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.squreContainer = _t.first);
  }
}, hostBindings: function SlotComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function SlotComponent_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 22, consts: [[1, "info"], [1, "info-text-container"], [1, "squares-key"], [1, "squares-message"], [1, "squares-length-value"], [1, "current-square-index"], [1, "dragged-columns"], [1, "dragged-rows"], [1, "selected-indices"], [1, "toggle-container"], [3, "checked", "change"], ["hasBackdrop", "false"], ["mode", "over", "position", "end"], ["slotDrawer", ""], [1, "mat-drawer-close"], ["mat-icon-button", "", 3, "click"], [2, "margin-top", "50px", "margin-left", "20px"], ["key", "form-values", 3, "button"], [3, "mousedown", "mousemove", "mouseup"], ["class", "drag-box", 3, "ngStyle", 4, "ngIf"], [1, "square-container"], ["squreContainer", ""], [3, "index", "data", "isSelected", "squareSize", "fontSize", 4, "ngFor", "ngForOf"], ["container", ""], [1, "drag-box", 3, "ngStyle"], [3, "index", "data", "isSelected", "squareSize", "fontSize"]], template: function SlotComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ", ");
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ", ");
    \u0275\u0275elementStart(12, "span", 6);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, ", ");
    \u0275\u0275elementStart(15, "span", 7);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 9)(20, "mat-slide-toggle", 10);
    \u0275\u0275listener("change", function SlotComponent_Template_mat_slide_toggle_change_20_listener($event) {
      return ctx.onWhiteChange($event);
    });
    \u0275\u0275text(21, "white");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-slide-toggle", 10);
    \u0275\u0275listener("change", function SlotComponent_Template_mat_slide_toggle_change_22_listener($event) {
      return ctx.onToggleChange($event);
    });
    \u0275\u0275text(23, "factory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-slide-toggle", 10);
    \u0275\u0275listener("change", function SlotComponent_Template_mat_slide_toggle_change_24_listener($event) {
      return ctx.onGeminiChange($event);
    });
    \u0275\u0275text(25, "ai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-slide-toggle", 10);
    \u0275\u0275listener("change", function SlotComponent_Template_mat_slide_toggle_change_26_listener($event) {
      return ctx.onPlayChange($event);
    });
    \u0275\u0275text(27, "play");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-drawer-container", 11)(29, "mat-drawer", 12, 13)(31, "div", 14)(32, "button", 15);
    \u0275\u0275listener("click", function SlotComponent_Template_button_click_32_listener() {
      return ctx.close();
    });
    \u0275\u0275elementStart(33, "mat-icon");
    \u0275\u0275text(34, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 16);
    \u0275\u0275element(36, "app-dynamic-form", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-drawer-content", 18);
    \u0275\u0275listener("mousedown", function SlotComponent_Template_mat_drawer_content_mousedown_37_listener($event) {
      return ctx.onMouseDown($event, ctx.globalService.slotService.isPossibleSlotDrag, ctx.globalService.slotService.isSlotWork);
    })("mousemove", function SlotComponent_Template_mat_drawer_content_mousemove_37_listener($event) {
      return ctx.onMouseMove($event, ctx.globalService.slotService.isPossibleSlotDrag, ctx.globalService.slotService.isSlotWork);
    })("mouseup", function SlotComponent_Template_mat_drawer_content_mouseup_37_listener($event) {
      return ctx.onMouseUp($event, ctx.globalService.slotService.isPossibleSlotDrag, ctx.globalService.slotService.isSlotWork);
    });
    \u0275\u0275template(38, SlotComponent_div_38_Template, 1, 1, "div", 19);
    \u0275\u0275elementStart(39, "div", 20, 21);
    \u0275\u0275template(41, SlotComponent_app_square_41_Template, 1, 5, "app-square", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(42, null, 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(ctx.innerStyle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.globalService.slotService.currentBodyKey);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.globalService.slotService.currentFactoryMessage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.selectService.squares.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectService.currentSquareIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectService.draggedColumns);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectService.draggedRows);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" [", ctx.selectService.sizeInfo.selectedIndices, "]");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx.globalService.isWhite);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx.globalService.slotService.isSlotWork);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx.globalService.geminiService.isUse);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx.globalService.geminiService.isPlay);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(ctx.innerStyle);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", 300, "px");
    \u0275\u0275advance(7);
    \u0275\u0275property("button", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.globalService.slotService.isDrawLine && ctx.selectService.dragStart && ctx.selectService.dragEnd);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx.width, "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.selectService.squares);
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.ruler-horizontal[_ngcontent-%COMP%], .ruler-vertical[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: gray;\n  z-index: 1000;\n  color: black;\n  font-size: 12px;\n}\n.ruler-horizontal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n  top: 0;\n  text-align: right;\n}\n.ruler-vertical[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 20px;\n  left: 0;\n  top: 0;\n  writing-mode: vertical-lr;\n  text-align: center;\n}\n.tick[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #333;\n}\n.ruler-horizontal[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 10px;\n}\n.ruler-vertical[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 1px;\n}\n.mouse-line-horizontal[_ngcontent-%COMP%], .mouse-line-vertical[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: rgb(156, 156, 156);\n  z-index: 1001;\n}\n.mouse-line-horizontal[_ngcontent-%COMP%] {\n  left: 0;\n  width: 100%;\n  height: 1px;\n}\n.mouse-line-vertical[_ngcontent-%COMP%] {\n  top: 0;\n  height: 100%;\n  width: 1px;\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-auto-rows: 100px;\n  gap: 10px;\n  height: 100vh;\n  overflow: auto;\n}\n.current-square-info[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  background-color: #eee;\n  padding: 8px;\n  z-index: 10;\n}\n.square-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0px;\n  margin-left: 0px;\n}\n.square[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;\n  color: #eee;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #f00;\n}\n.drag-box[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 2px dashed #000;\n  z-index: 1000;\n  pointer-events: none;\n}\n.mat-drawer-close[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  opacity: 0.5;\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.info[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 3;\n  height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.info-text-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.squares-key[_ngcontent-%COMP%] {\n  color: orange;\n  margin-right: 10px;\n}\n.squares-message[_ngcontent-%COMP%] {\n  color: rgb(91, 91, 91);\n  margin-right: 10px;\n}\n.squares-length[_ngcontent-%COMP%] {\n  color: black;\n}\n.squares-length-value[_ngcontent-%COMP%] {\n  color: rgb(43, 43, 43);\n}\n.current-square-index[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n.dragged-columns[_ngcontent-%COMP%] {\n  color: gray;\n}\n.dragged-rows[_ngcontent-%COMP%] {\n  color: gray;\n}\n.selected-indices[_ngcontent-%COMP%] {\n  color: gray(108, 210, 241);\n}\nmat-drawer-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=slot.component.css.map */'] });
var SlotComponent = _SlotComponent;
__decorate([
  NullCheckParameters
], SlotComponent.prototype, "onMouseDown", null);
__decorate([
  NullCheckParameters
], SlotComponent.prototype, "onMouseMove", null);
__decorate([
  NullCheckParameters
], SlotComponent.prototype, "onMouseUp", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotComponent, { className: "SlotComponent", filePath: "Modules\\pages\\slots\\slot\\slot.component.ts", lineNumber: 23 });
})();

// Modules/pages/slots/slot-routing.module.ts
var routes = [
  {
    path: "",
    component: SlotComponent
  }
];
var _SlotRoutingModule = class _SlotRoutingModule {
};
_SlotRoutingModule.\u0275fac = function SlotRoutingModule_Factory(t) {
  return new (t || _SlotRoutingModule)();
};
_SlotRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SlotRoutingModule });
_SlotRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var SlotRoutingModule = _SlotRoutingModule;

// Modules/pages/slots/square/square.component.ts
var _c07 = (a0, a1, a2) => ({ "width.px": a0, "height.px": a1, "font-size.px": a2 });
var _SquareComponent = class _SquareComponent extends DataAbstract {
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(value) {
    this._isSelected = value;
  }
  constructor() {
    super();
    this._isSelected = false;
    this.components = [];
  }
  dataInit() {
    this.data.instance = this;
  }
  bind(instance) {
    this.components.push(instance);
  }
};
_SquareComponent.\u0275fac = function SquareComponent_Factory(t) {
  return new (t || _SquareComponent)();
};
_SquareComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SquareComponent, selectors: [["app-square"]], inputs: { index: "index", isSelected: "isSelected", squareSize: "squareSize", fontSize: "fontSize" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 8, consts: [[1, "square", 3, "ngStyle"]], template: function SquareComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("selected", ctx.isSelected);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction3(4, _c07, ctx.squareSize, ctx.squareSize, ctx.fontSize));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.index);
  }
}, dependencies: [NgStyle], styles: ['@charset "UTF-8";\n\n\n\n.square[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.5px solid rgba(69, 69, 69, 0.5215686275);\n  color: rgba(37, 37, 37, 0.7882352941);\n  background: rgba(255, 255, 255, 0.25);\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: rgba(66, 66, 66, 0.2823529412);\n  color: #e1e1e1;\n  border: 0.5px solid #e1e1e1;\n}\n/*# sourceMappingURL=square.component.css.map */'] });
var SquareComponent = _SquareComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SquareComponent, { className: "SquareComponent", filePath: "Modules\\pages\\slots\\square\\square.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/linear-algebra/linear-algebra.component.ts
var _LinearAlgebraComponent = class _LinearAlgebraComponent {
  constructor() {
    this.problem = "";
    this.problem = this.generateProblem();
  }
  generateMatrix() {
    return [
      [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
      [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    ];
  }
  generateProblem() {
    const matrixA = this.generateMatrix();
    const matrixB = this.generateMatrix();
    const operation = Math.random() > 0.5 ? "add" : "multiply";
    let problem = `Solve the following matrix ${operation}: 
Matrix A: ${JSON.stringify(matrixA)} 
Matrix B: ${JSON.stringify(matrixB)}`;
    return problem;
  }
};
_LinearAlgebraComponent.\u0275fac = function LinearAlgebraComponent_Factory(t) {
  return new (t || _LinearAlgebraComponent)();
};
_LinearAlgebraComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LinearAlgebraComponent, selectors: [["app-linear-algebra"]], decls: 7, vars: 1, consts: [[3, "click"]], template: function LinearAlgebraComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h2");
    \u0275\u0275text(2, "Linear Algebra Problem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 0);
    \u0275\u0275listener("click", function LinearAlgebraComponent_Template_button_click_5_listener() {
      return ctx.generateProblem();
    });
    \u0275\u0275text(6, "Generate New Problem");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.problem);
  }
}, styles: ["\n\n/*# sourceMappingURL=linear-algebra.component.css.map */"] });
var LinearAlgebraComponent = _LinearAlgebraComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LinearAlgebraComponent, { className: "LinearAlgebraComponent", filePath: "Modules\\pages\\slots\\components\\linear-algebra\\linear-algebra.component.ts", lineNumber: 8 });
})();

// Modules/pages/slots/components/fighter/fighter.component.ts
var _FighterComponent = class _FighterComponent extends SvgAbstract {
  constructor() {
    super(...arguments);
    this.style = {
      width: "100px",
      height: "100px",
      backgroundColor: this.getRandomColor(),
      position: "absolute",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      top: "10px",
      left: "40px",
      opacity: "0.5"
    };
  }
  dataInit() {
    this.data.instance.bind(this);
    this.title = `${this.data.character?.name ?? "NONE"}`;
    this.style.width = `${this.data.size.width}px`;
    this.style.height = `${this.data.size.height}px`;
    this.style.left = `${this.data.size.position.x}px`;
    this.style.top = `${this.data.size.position.y}px`;
  }
};
_FighterComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FighterComponent_BaseFactory;
  return function FighterComponent_Factory(t) {
    return (\u0275FighterComponent_BaseFactory || (\u0275FighterComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FighterComponent)))(t || _FighterComponent);
  };
})();
_FighterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FighterComponent, selectors: [["app-fighter"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [[3, "ngStyle"]], template: function FighterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.title, "\n");
  }
}, dependencies: [NgStyle], styles: ["\n\n/*# sourceMappingURL=fighter.component.css.map */"] });
var FighterComponent = _FighterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FighterComponent, { className: "FighterComponent", filePath: "Modules\\pages\\slots\\components\\fighter\\fighter.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/form/dynamic-form/custom-validator.ts
var EMAIL_DOMAIN_TYPE = {
  SM: "sm.ac.kr",
  SOOKMYUNG: "sookmyung.ac.kr"
};
var CustomValidator = class {
  emailDomain() {
    return (control) => {
      if (control.value && control.value.indexOf("@") !== -1) {
        const [_, domain] = control.value.split("@");
        if (!Object.values(EMAIL_DOMAIN_TYPE).includes(domain)) {
          return { domain: true };
        }
      }
      return null;
    };
  }
  maxLength(maxLength) {
    let [_, stringNum] = maxLength.split("-");
    let length = parseInt(stringNum, 10);
    return (control) => {
      return control.value.length > length ? { maxLength: length } : null;
    };
  }
  minLength(minLength) {
    let [_, stringNum] = minLength.split("-");
    let length = parseInt(stringNum, 10);
    return (control) => {
      return control.value.length < length ? { minLength: length } : null;
    };
  }
  /**
   *
   * @returns
      최소 영어 대소문자, 숫자, 특수문자를 각각 하나 이상 포함한 8자 이상 16자 이하
      (0-9 하나이상 포함, a-zA-Z 하나 이상 포함, !@#$%^&* 하나 이상 포함)
      - minLength-8
      - maxLength-16
   */
  password() {
    return (control) => {
      const value = control.value;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasSpecialChar = /[!@#$%^&*]/.test(value);
      const passwordValid = (hasUpperCase || hasLowerCase) && hasNumeric && hasSpecialChar;
      return !passwordValid ? { password: true } : null;
    };
  }
  passwordMatch() {
    return (control) => {
      const password = control.parent?.get("password")?.value;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { confirmPassword: true };
    };
  }
  koreanEnglish() {
    return (control) => {
      const koreanEnglishPattern = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;
      const isValid = koreanEnglishPattern.test(control.value);
      return !isValid ? { koreanEnglish: true } : null;
    };
  }
  /**
   *
   * 특수문자를 제외한 (ㄱ-ㅎ가-힣a-zA-Z0-9-_)
   */
  textPattern() {
    return (control) => {
      const nicknamePattern = /^[ㄱ-ㅎ가-힣a-zA-Z0-9-_]+$/;
      const isValid = nicknamePattern.test(control.value);
      return !isValid ? { textPattern: true } : null;
    };
  }
  /** 숫자인지를 확인하는 */
  isStudentNumber() {
    return (control) => {
      const isNumber = !isNaN(Number(control.value));
      const isSeven = /^\d{7}$/.test(control.value);
      return !(isNumber && isSeven) ? { studentNumber: true } : null;
    };
  }
  isNumber() {
    return (control) => {
      const isNumber = !isNaN(Number(control.value));
      return !isNumber ? { studentNumber: true } : null;
    };
  }
};

// Modules/pages/slots/form/dynamic-form/dynamic-form.component.ts
function DynamicFormComponent_Conditional_0_For_2_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 6)(1, "mat-label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const groupControl_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(groupControl_r16.label);
    \u0275\u0275advance();
    \u0275\u0275property("type", groupControl_r16.type)("placeholder", groupControl_r16.placeholder || "")("formControlName", groupControl_r16.name);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, DynamicFormComponent_Conditional_0_For_2_Conditional_0_For_2_Template, 4, 4, "mat-form-field", 6, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("formGroupName", control_r3.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(control_r3.controls);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-textarea", 4);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r9.dynamicForm);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 4);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r10.dynamicForm);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-password", 4);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r11.dynamicForm);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-select", 5);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r12.dynamicForm)("formStructure", ctx_r12.formData)("groupOptions", ctx_r12.groupOptions);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-radio-button", 4);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r13.dynamicForm);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-date-picker", 4);
  }
  if (rf & 2) {
    const control_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r14 = \u0275\u0275nextContext(2);
    \u0275\u0275property("control", control_r3)("dynamicForm", ctx_r14.dynamicForm);
  }
}
function DynamicFormComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicFormComponent_Conditional_0_For_2_Conditional_0_Template, 3, 1, "div", 3)(1, DynamicFormComponent_Conditional_0_For_2_Conditional_1_Template, 1, 2, "app-textarea", 4)(2, DynamicFormComponent_Conditional_0_For_2_Conditional_2_Template, 1, 2, "app-input", 4)(3, DynamicFormComponent_Conditional_0_For_2_Conditional_3_Template, 1, 2, "app-password", 4)(4, DynamicFormComponent_Conditional_0_For_2_Conditional_4_Template, 1, 4, "app-select", 5)(5, DynamicFormComponent_Conditional_0_For_2_Conditional_5_Template, 1, 2, "app-radio-button", 4)(6, DynamicFormComponent_Conditional_0_For_2_Conditional_6_Template, 1, 2, "app-date-picker", 4);
  }
  if (rf & 2) {
    const control_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, control_r3.category === "group" && ctx_r1.isIFormGroup(control_r3) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, control_r3.category === "textarea" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, control_r3.category === "input" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, control_r3.category === "password" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, control_r3.category === "select" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, control_r3.category === "radio-button" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, control_r3.category === "datepicker" ? 6 : -1);
  }
}
var _c08 = (a0) => ({ "background-color": a0, "color": "white" });
function DynamicFormComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c08, ctx_r2.BLUE1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.button);
  }
}
function DynamicFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1);
    \u0275\u0275listener("keydown.enter", function DynamicFormComponent_Conditional_0_Template_form_keydown_enter_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r28 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r28.onEnterSubmit($event));
    })("ngSubmit", function DynamicFormComponent_Conditional_0_Template_form_ngSubmit_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r30 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r30.onSubmit($event));
    });
    \u0275\u0275repeaterCreate(1, DynamicFormComponent_Conditional_0_For_2_Template, 7, 7, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(3, DynamicFormComponent_Conditional_0_Conditional_3_Template, 2, 4, "button", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.dynamicForm);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.formData);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r0.button != null ? 3 : -1);
  }
}
var BLUE1 = "#00368E";
var _FormService = class _FormService {
  constructor() {
    this.httpService = inject(HttpService);
  }
  getFormStructure() {
    return this.httpService.GetJson("./assets/json/form.json");
  }
};
_FormService.\u0275fac = function FormService_Factory(t) {
  return new (t || _FormService)();
};
_FormService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormService, factory: _FormService.\u0275fac, providedIn: "root" });
var FormService = _FormService;
var _filter = (opt, value) => {
  const filterValue = value.toLowerCase();
  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};
var _DynamicFormComponent = class _DynamicFormComponent {
  constructor(formBuilder, formService, globalService) {
    this.formBuilder = formBuilder;
    this.formService = formService;
    this.globalService = globalService;
    this.key = "sign-up";
    this.button = "Submit";
    this.submit = new EventEmitter();
    this.enter = new EventEmitter();
    this.BLUE1 = BLUE1;
    this.isLoading = true;
    this.formData = [];
    this.customValidator = new CustomValidator();
    this.groupOptions = [];
  }
  onLoadForm(d) {
    this.formData = d.find((item) => item.key === this.key)?.value;
    let entireGroup = {};
    this.formData.forEach((control) => {
      if (control.category === "group") {
        let formGroup = {};
        control.controls.forEach((groupControl) => {
          let validators = [];
          if (groupControl.validations != null) {
            validators = this.addValidation(groupControl.validations);
          }
          formGroup[groupControl.name] = [
            groupControl.value || "",
            validators
          ];
        });
        entireGroup[control.name] = this.formBuilder.group(formGroup);
      } else {
        let validators = [];
        if (control.validations != null) {
          validators = this.addValidation(control.validations);
        }
        entireGroup[control.name] = [control.value || "", validators];
      }
    });
    this.dynamicForm = this.formBuilder.group(entireGroup);
    this.formData.forEach((control) => {
      if (control.category === "select") {
        this.groupOptions.push(this.dynamicForm.get(control.name).valueChanges.pipe(startWith(""), map((value) => this.filterGroup(control.group, value || ""))));
      }
    });
    this.isLoading = false;
  }
  ngOnInit() {
    this.isLoading = true;
    this.globalService.slotService.dynamicForm = this;
  }
  filterGroup(currentGroup, value) {
    if (value) {
      return currentGroup.map((group) => ({ main: group.main, sub: _filter(group.sub, value) })).filter((group) => group.sub.length > 0);
    }
    return currentGroup;
  }
  addValidation(validations) {
    let controlValidators = [];
    if (validations) {
      validations.forEach((validation) => {
        if (validation.validator === "required")
          controlValidators.push(Validators.required);
        if (validation.validator === "email")
          controlValidators.push(Validators.email);
        if (validation.validator == "email-domain")
          controlValidators.push(this.customValidator.emailDomain());
        if (validation.validator.startsWith("maxLength"))
          controlValidators.push(this.customValidator.maxLength(validation.validator));
        if (validation.validator.startsWith("minLength"))
          controlValidators.push(this.customValidator.minLength(validation.validator));
        if (validation.validator === "password")
          controlValidators.push(this.customValidator.password());
        if (validation.validator === "password-match")
          controlValidators.push(this.customValidator.passwordMatch());
        if (validation.validator === "koreanEnglish")
          controlValidators.push(this.customValidator.koreanEnglish());
        if (validation.validator === "textPattern")
          controlValidators.push(this.customValidator.textPattern());
        if (validation.validator === "isStudentNumber")
          controlValidators.push(this.customValidator.isStudentNumber());
        if (validation.validator === "isNumber")
          controlValidators.push(this.customValidator.isNumber());
      });
    }
    return controlValidators;
  }
  onSubmit(event) {
    event.stopPropagation();
    if (this.dynamicForm.valid) {
      this.submit.emit({ value: this.dynamicForm.value });
    }
  }
  onEnterSubmit(event) {
    event.stopPropagation();
    if (this.dynamicForm.valid) {
      this.enter.emit({ value: this.dynamicForm.value });
    }
  }
  isIFormGroup(control) {
    return control.controls !== void 0;
  }
};
_DynamicFormComponent.\u0275fac = function DynamicFormComponent_Factory(t) {
  return new (t || _DynamicFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FormService), \u0275\u0275directiveInject(GlobalService));
};
_DynamicFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { key: "key", button: "button" }, outputs: { submit: "submit", enter: "enter" }, decls: 1, vars: 1, consts: [["class", "form-full-layout hide-scrollbar", 3, "formGroup"], [1, "form-full-layout", "hide-scrollbar", 3, "formGroup", "keydown.enter", "ngSubmit"], ["mat-flat-button", "", "type", "submit", 3, "ngStyle"], [3, "formGroupName"], [3, "control", "dynamicForm"], [3, "control", "dynamicForm", "formStructure", "groupOptions"], ["appearance", "outline"], ["matInput", "", 3, "type", "placeholder", "formControlName"]], template: function DynamicFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicFormComponent_Conditional_0_Template, 4, 2, "form", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(0, !ctx.isLoading ? 0 : -1);
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.form-full-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  gap: 1rem;\n}\n.hide-scrollbar[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.hide-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n.hide-scrollbar[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n/*# sourceMappingURL=dynamic-form.component.css.map */'] });
var DynamicFormComponent = _DynamicFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicFormComponent, { className: "DynamicFormComponent", filePath: "Modules\\pages\\slots\\form\\dynamic-form\\dynamic-form.component.ts", lineNumber: 96 });
})();

// Modules/pages/slots/form/form.abstract.ts
var _FormAbstract = class _FormAbstract {
  constructor() {
    this.formService = inject(FormService);
  }
  getErrorMessage(control, groupControl) {
    if (groupControl == null) {
      const formControl = this.dynamicForm.get(control.name);
      if (control.validations == null)
        return "";
      for (let validation of control.validations) {
        if (formControl?.hasError(validation.name)) {
          return validation.message;
        }
      }
      return "";
    } else {
      const formGroupControl = this.dynamicForm.get(control.name)?.get(groupControl.name);
      if (groupControl.validations == null)
        return "";
      for (let validation of groupControl.validations) {
        if (formGroupControl?.hasError(validation.name)) {
          return validation.message;
        }
      }
      return "";
    }
  }
};
_FormAbstract.\u0275fac = function FormAbstract_Factory(t) {
  return new (t || _FormAbstract)();
};
_FormAbstract.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FormAbstract, inputs: { control: "control", dynamicForm: "dynamicForm" } });
var FormAbstract = _FormAbstract;

// Modules/pages/slots/form/textarea/textarea.component.ts
function TextareaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function TextareaComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r1.control.styles == null ? null : ctx_r1.control.styles.textarea)("placeholder", ctx_r1.control.placeholder)("formControlName", ctx_r1.control.name);
  }
}
function TextareaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r2.control.placeholder)("formControlName", ctx_r2.control.name);
  }
}
function TextareaComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getErrorMessage(ctx_r3.control, null));
  }
}
var _TextareaComponent = class _TextareaComponent extends FormAbstract {
};
_TextareaComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275TextareaComponent_BaseFactory;
  return function TextareaComponent_Factory(t) {
    return (\u0275TextareaComponent_BaseFactory || (\u0275TextareaComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaComponent)))(t || _TextareaComponent);
  };
})();
_TextareaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextareaComponent, selectors: [["app-textarea"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], [3, "ngStyle", "placeholder", "formControlName"], ["style", "color: #BA1A1A;"], [3, "placeholder", "formControlName"], [2, "color", "#BA1A1A"]], template: function TextareaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, TextareaComponent_Conditional_1_Template, 2, 2, "div", 1)(2, TextareaComponent_Conditional_2_Template, 1, 3, "textarea", 2)(3, TextareaComponent_Conditional_3_Template, 1, 2)(4, TextareaComponent_Conditional_4_Template, 2, 1, "mat-error", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx.control.styles == null ? null : ctx.control.styles.textarea) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.touched) ? 4 : -1);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatError], styles: ["\n\n/*# sourceMappingURL=textarea.component.css.map */"] });
var TextareaComponent = _TextareaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextareaComponent, { className: "TextareaComponent", filePath: "Modules\\pages\\slots\\form\\textarea\\textarea.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/form/input/input.component.ts
function InputComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function InputComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage(ctx_r1.control, null), " ");
  }
}
var _InputComponent = class _InputComponent extends FormAbstract {
  constructor(globalService) {
    super();
    this.globalService = globalService;
  }
  keydown(event) {
    const controlValue = this.dynamicForm.get(this.control.name)?.value;
    this.globalService.slotService.setCurrentFormValue(controlValue);
  }
};
_InputComponent.\u0275fac = function InputComponent_Factory(t) {
  return new (t || _InputComponent)(\u0275\u0275directiveInject(GlobalService));
};
_InputComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputComponent, selectors: [["app-input"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 8, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], [2, "width", "100%"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", 3, "type", "placeholder", "formControlName", "ngStyle", "keydown.enter"], ["style", "color: #BA1A1A;"], [2, "color", "#BA1A1A"]], template: function InputComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, InputComponent_Conditional_1_Template, 2, 2, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "mat-form-field", 3)(4, "input", 4);
    \u0275\u0275listener("keydown.enter", function InputComponent_Template_input_keydown_enter_4_listener($event) {
      return ctx.keydown($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, InputComponent_Conditional_5_Template, 2, 1, "mat-error", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("type", ctx.control.type)("placeholder", ctx.control.placeholder || "")("formControlName", ctx.control.name)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.input);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ((tmp_7_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_7_0.touched) ? 5 : -1);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput], styles: ["\n\n/*# sourceMappingURL=input.component.css.map */"] });
var InputComponent = _InputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputComponent, { className: "InputComponent", filePath: "Modules\\pages\\slots\\form\\input\\input.component.ts", lineNumber: 10 });
})();

// Modules/pages/slots/form/password/password.component.ts
function PasswordComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function PasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "input", 6);
    \u0275\u0275elementStart(2, "button", 7);
    \u0275\u0275listener("click", function PasswordComponent_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.hide = !ctx_r4.hide);
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r1.hide ? "password" : "text")("placeholder", ctx_r1.control.placeholder || "")("formControlName", ctx_r1.control.name)("ngStyle", ctx_r1.control.styles == null ? null : ctx_r1.control.styles.password);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hide ? "visibility_off" : "visibility");
  }
}
function PasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 8);
    \u0275\u0275element(1, "input", 9);
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function PasswordComponent_Conditional_4_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.hide = !ctx_r6.hide);
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r2.hide ? "password" : "text")("placeholder", ctx_r2.control.placeholder || "")("formControlName", ctx_r2.control.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.hide ? "visibility_off" : "visibility");
  }
}
function PasswordComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getErrorMessage(ctx_r3.control, null));
  }
}
var _PasswordComponent = class _PasswordComponent extends FormAbstract {
  constructor() {
    super(...arguments);
    this.hide = true;
  }
};
_PasswordComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275PasswordComponent_BaseFactory;
  return function PasswordComponent_Factory(t) {
    return (\u0275PasswordComponent_BaseFactory || (\u0275PasswordComponent_BaseFactory = \u0275\u0275getInheritedFactory(_PasswordComponent)))(t || _PasswordComponent);
  };
})();
_PasswordComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordComponent, selectors: [["app-password"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], [2, "width", "100%"], ["style", "display: flex; width: 100%;"], ["style", "margin-top: -10px;"], [2, "display", "flex", "width", "100%"], ["matInput", "", 3, "type", "placeholder", "formControlName", "ngStyle"], ["mat-icon-button", "", 3, "click"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", 3, "type", "placeholder", "formControlName"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [2, "margin-top", "-10px"]], template: function PasswordComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, PasswordComponent_Conditional_1_Template, 2, 2, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, PasswordComponent_Conditional_3_Template, 5, 5, "div", 3)(4, PasswordComponent_Conditional_4_Template, 5, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PasswordComponent_Conditional_5_Template, 2, 1, "mat-error", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, (ctx.control.styles == null ? null : ctx.control.styles.password) ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.touched) ? 5 : -1);
  }
}, dependencies: [NgStyle, MatIconButton, MatIcon, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatSuffix, MatInput], styles: ["\n\n/*# sourceMappingURL=password.component.css.map */"] });
var PasswordComponent = _PasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordComponent, { className: "PasswordComponent", filePath: "Modules\\pages\\slots\\form\\password\\password.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/form/select/select.component.ts
function SelectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function SelectComponent_For_7_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275property("value", element_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r12);
  }
}
function SelectComponent_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SelectComponent_For_7_Conditional_0_For_1_Template, 2, 2, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(group_r4.sub);
  }
}
function SelectComponent_For_7_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    \u0275\u0275property("value", element_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(element_r19);
  }
}
function SelectComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-optgroup", 6);
    \u0275\u0275repeaterCreate(1, SelectComponent_For_7_Conditional_1_For_2_Template, 2, 2, "mat-option", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("label", group_r4.main);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r4.sub);
  }
}
function SelectComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectComponent_For_7_Conditional_0_Template, 2, 0)(1, SelectComponent_For_7_Conditional_1_Template, 3, 1);
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    \u0275\u0275conditional(0, group_r4.main === "" ? 0 : 1);
  }
}
function SelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getErrorMessage(ctx_r3.control, null));
  }
}
var _SelectComponent = class _SelectComponent extends FormAbstract {
  constructor() {
    super(...arguments);
    this.groupOptions = [];
    this.formStructure = [];
  }
  getSelectIndex(name) {
    const selects = this.formStructure.reduce((indices, item, index) => {
      if (item.category === "select") {
        indices.push({
          name: item.name,
          index
        });
      }
      return indices;
    }, []);
    return selects.findIndex((item) => item.name === name);
  }
};
_SelectComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SelectComponent_BaseFactory;
  return function SelectComponent_Factory(t) {
    return (\u0275SelectComponent_BaseFactory || (\u0275SelectComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SelectComponent)))(t || _SelectComponent);
  };
})();
_SelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectComponent, selectors: [["app-select"]], inputs: { groupOptions: "groupOptions", formStructure: "formStructure" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 11, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", 3, "type", "placeholder", "formControlName", "matAutocomplete", "ngStyle"], ["autoGroup", "matAutocomplete"], [3, "value"], [3, "label"]], template: function SelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, SelectComponent_Conditional_1_Template, 2, 2, "div", 1);
    \u0275\u0275elementStart(2, "mat-form-field", 2);
    \u0275\u0275element(3, "input", 3);
    \u0275\u0275elementStart(4, "mat-autocomplete", null, 4);
    \u0275\u0275repeaterCreate(6, SelectComponent_For_7_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SelectComponent_Conditional_9_Template, 2, 1, "mat-error");
  }
  if (rf & 2) {
    const _r1 = \u0275\u0275reference(5);
    let tmp_9_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("type", ctx.control.type)("placeholder", ctx.control.placeholder || "")("formControlName", ctx.control.name)("matAutocomplete", _r1)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.input);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 9, ctx.groupOptions[ctx.getSelectIndex(ctx.control.name)]));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(9, ((tmp_9_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_9_0.touched) ? 9 : -1);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatOption, MatOptgroup, MatInput, MatAutocomplete, MatAutocompleteTrigger, AsyncPipe], styles: ["\n\n/*# sourceMappingURL=select.component.css.map */"] });
var SelectComponent = _SelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "Modules\\pages\\slots\\form\\select\\select.component.ts", lineNumber: 11 });
})();

// Modules/pages/slots/form/radio-button/radio-button.component.ts
function RadioButtonComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function RadioButtonComponent_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("value", item_r5.main);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.sub.first());
  }
}
function RadioButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 2);
    \u0275\u0275repeaterCreate(1, RadioButtonComponent_Conditional_2_For_2_Template, 2, 2, "mat-radio-button", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r1.control.styles == null ? null : ctx_r1.control.styles.radioButton)("formControlName", ctx_r1.control.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.control.group);
  }
}
function RadioButtonComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("value", item_r11.main);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11.sub.first());
  }
}
function RadioButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-group", 5);
    \u0275\u0275repeaterCreate(1, RadioButtonComponent_Conditional_3_For_2_Template, 2, 2, "mat-radio-button", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formControlName", ctx_r2.control.name);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.control.group);
  }
}
function RadioButtonComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getErrorMessage(ctx_r3.control, null));
  }
}
var _RadioButtonComponent = class _RadioButtonComponent extends FormAbstract {
};
_RadioButtonComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RadioButtonComponent_BaseFactory;
  return function RadioButtonComponent_Factory(t) {
    return (\u0275RadioButtonComponent_BaseFactory || (\u0275RadioButtonComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RadioButtonComponent)))(t || _RadioButtonComponent);
  };
})();
_RadioButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadioButtonComponent, selectors: [["app-radio-button"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 5, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], [3, "ngStyle", "formControlName"], ["style", "margin-top: -10px;"], [3, "value"], [3, "formControlName"], [2, "margin-top", "-10px"]], template: function RadioButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, RadioButtonComponent_Conditional_1_Template, 2, 2, "div", 1)(2, RadioButtonComponent_Conditional_2_Template, 3, 2, "mat-radio-group", 2)(3, RadioButtonComponent_Conditional_3_Template, 3, 1)(4, RadioButtonComponent_Conditional_4_Template, 2, 1, "mat-error", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, (ctx.control.styles == null ? null : ctx.control.styles.radioButton) ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.touched) ? 4 : -1);
  }
}, dependencies: [NgStyle, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatError, MatRadioGroup, MatRadioButton], styles: ["\n\n/*# sourceMappingURL=radio-button.component.css.map */"] });
var RadioButtonComponent = _RadioButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadioButtonComponent, { className: "RadioButtonComponent", filePath: "Modules\\pages\\slots\\form\\radio-button\\radio-button.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/form/date-picker/date-picker.component.ts
function DatePickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", ctx_r0.control.styles == null ? null : ctx_r0.control.styles.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.control.label);
  }
}
function DatePickerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 4)(1, "mat-datepicker-toggle", 5)(2, "mat-datepicker", null, 6);
  }
  if (rf & 2) {
    const _r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matDatepicker", _r4)("placeholder", ctx_r1.control.placeholder || "")("formControlName", ctx_r1.control.name);
    \u0275\u0275advance();
    \u0275\u0275property("for", _r4);
  }
}
function DatePickerComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 7);
    \u0275\u0275element(1, "input", 4)(2, "mat-datepicker-toggle", 5)(3, "mat-datepicker", null, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const _r5 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", _r5)("placeholder", ctx_r2.control.placeholder || "")("formControlName", ctx_r2.control.name);
    \u0275\u0275advance();
    \u0275\u0275property("for", _r5);
  }
}
function DatePickerComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getErrorMessage(ctx_r3.control, null), " ");
  }
}
var _DatePickerComponent = class _DatePickerComponent extends FormAbstract {
};
_DatePickerComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DatePickerComponent_BaseFactory;
  return function DatePickerComponent_Factory(t) {
    return (\u0275DatePickerComponent_BaseFactory || (\u0275DatePickerComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DatePickerComponent)))(t || _DatePickerComponent);
  };
})();
_DatePickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DatePickerComponent, selectors: [["app-date-picker"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "formGroup", "ngStyle"], [3, "ngStyle"], [2, "width", "100%"], ["style", "color: #BA1A1A;"], ["matInput", "", 3, "matDatepicker", "placeholder", "formControlName"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 2, "width", "100%"], [2, "color", "#BA1A1A"]], template: function DatePickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, DatePickerComponent_Conditional_1_Template, 2, 2, "div", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, DatePickerComponent_Conditional_3_Template, 4, 4)(4, DatePickerComponent_Conditional_4_Template, 5, 4)(5, DatePickerComponent_Conditional_5_Template, 2, 1, "mat-error", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("formGroup", ctx.dynamicForm)("ngStyle", ctx.control.styles == null ? null : ctx.control.styles.layout);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.control.label ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, (ctx.control.styles == null ? null : ctx.control.styles.datepicker) ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.dynamicForm.get(ctx.control.name)) == null ? null : tmp_4_0.touched) ? 5 : -1);
  }
}, dependencies: [NgStyle, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatSuffix, MatInput, MatDatepicker, MatDatepickerInput, MatDatepickerToggle], styles: ["\n\n/*# sourceMappingURL=date-picker.component.css.map */"] });
var DatePickerComponent = _DatePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DatePickerComponent, { className: "DatePickerComponent", filePath: "Modules\\pages\\slots\\form\\date-picker\\date-picker.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/components/babylon-vector/babylon-vector.component.ts
var _c09 = ["canvas"];
var _SlotVectorBabaylonComponent = class _SlotVectorBabaylonComponent extends SlotAbstract {
  ngAfterViewInit() {
    this.size = { width: this.data.size.width, height: this.data.size.height };
    this.canvasRef.nativeElement.style.width = this.size.width + "px";
    this.canvasRef.nativeElement.style.height = this.size.height + "px";
    window.onresize = () => {
      this.size = { width: this.data.size.width, height: this.data.size.height };
      this.canvasRef.nativeElement.style.width = this.size.width + "px";
      this.canvasRef.nativeElement.style.height = this.size.height + "px";
    };
  }
  // private engine!: Engine;
  // private scene!: Scene;
  // private labels: Mesh[] = []; // 라벨을 저장할 배열
  // cameraAlpha: number = 0;
  // cameraBeta: number = 0;
  // cameraRadius: number = 0;
  // private camera!: ArcRotateCamera;
  // private alphaLine!: LinesMesh;
  // private betaLine!: LinesMesh;
  ngOnInit() {
    this.bindInstance();
    console.log("vector babylon");
  }
};
_SlotVectorBabaylonComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotVectorBabaylonComponent_BaseFactory;
  return function SlotVectorBabaylonComponent_Factory(t) {
    return (\u0275SlotVectorBabaylonComponent_BaseFactory || (\u0275SlotVectorBabaylonComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotVectorBabaylonComponent)))(t || _SlotVectorBabaylonComponent);
  };
})();
_SlotVectorBabaylonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotVectorBabaylonComponent, selectors: [["app-babylon-vector"]], viewQuery: function SlotVectorBabaylonComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c09, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasRef = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [[3, "ngStyle"], [1, "info-panel"], ["canvas", ""]], template: function SlotVectorBabaylonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
    \u0275\u0275text(3, "Vector Embedding ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " 128 dimensions to 3 dimensions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 0);
    \u0275\u0275element(7, "canvas", null, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.parentStyle);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle], styles: ["\n\ncanvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n}\n.quiz[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n}\n/*# sourceMappingURL=babylon-vector.component.css.map */"] });
var SlotVectorBabaylonComponent = _SlotVectorBabaylonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotVectorBabaylonComponent, { className: "SlotVectorBabaylonComponent", filePath: "Modules\\pages\\slots\\components\\babylon-vector\\babylon-vector.component.ts", lineNumber: 12 });
})();

// Modules/pages/slots/items/slot-item-sketch-sender/slot-item-sketch-sender.component.ts
var _SlotItemSketchSenderComponent = class _SlotItemSketchSenderComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.userInput = "\uB098\uB294 \uC624\uB298 \uBCF5\uC218\uB97C \uD558\uB7EC \uAC08\uAC70\uC57C";
    this.isShimmer = false;
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
    this.bindInstance();
    this.globalService.aiService.senderComponent = this;
  }
  send() {
    return __async(this, null, function* () {
      alert("sketch Sender");
    });
  }
};
_SlotItemSketchSenderComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotItemSketchSenderComponent_BaseFactory;
  return function SlotItemSketchSenderComponent_Factory(t) {
    return (\u0275SlotItemSketchSenderComponent_BaseFactory || (\u0275SlotItemSketchSenderComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotItemSketchSenderComponent)))(t || _SlotItemSketchSenderComponent);
  };
})();
_SlotItemSketchSenderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotItemSketchSenderComponent, selectors: [["app-slot-item-sketch-sender"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "ngStyle"], ["mat-icon-button", "", 3, "click"]], template: function SlotItemSketchSenderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function SlotItemSketchSenderComponent_Template_button_click_1_listener() {
      return ctx.send();
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("ngStyle", ctx.style);
  }
}, dependencies: [NgStyle, MatIconButton, MatIcon], styles: ["\n\n/*# sourceMappingURL=slot-item-sender.component.css.map */"] });
var SlotItemSketchSenderComponent = _SlotItemSketchSenderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotItemSketchSenderComponent, { className: "SlotItemSketchSenderComponent", filePath: "Modules\\pages\\slots\\items\\slot-item-sketch-sender\\slot-item-sketch-sender.component.ts", lineNumber: 9 });
})();

// Modules/pages/slots/items/slot-story-swiper/slot-story-swiper.component.ts
var _c010 = ["swiper"];
function SlotStorySwieprComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.title);
  }
}
var _SlotStorySwieprComponent = class _SlotStorySwieprComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.selectedValue = "";
    this.selectedDesc = "";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    timer(100).subscribe((d) => {
      this.make();
    });
  }
  make() {
    this.selectedValue = this.data.items[1].title;
    this.selectedDesc = this.data.items[1].desc;
    this.$swiper = new Swiper(this.swiper.nativeElement, {
      slidesPerView: 3,
      initialSlide: 0,
      effect: "coverflow",
      grabCursor: true,
      autoplay: {
        delay: 2e3,
        disableOnInteraction: true
        // 사용자 조작 후에도 자동 재생
      },
      modules: [EffectCoverflow, Autoplay],
      on: {
        slideChange: (d) => {
          this.slideChange(d);
        }
      }
    });
  }
  slideChange(d) {
    this.selectedValue = this.data.items[d.realIndex + 1].title;
    this.selectedDesc = this.data.items[d.realIndex + 1].desc;
  }
  send() {
    return __async(this, null, function* () {
    });
  }
};
_SlotStorySwieprComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStorySwieprComponent_BaseFactory;
  return function SlotStorySwieprComponent_Factory(t) {
    return (\u0275SlotStorySwieprComponent_BaseFactory || (\u0275SlotStorySwieprComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStorySwieprComponent)))(t || _SlotStorySwieprComponent);
  };
})();
_SlotStorySwieprComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStorySwieprComponent, selectors: [["app-slot-story-swiper"]], viewQuery: function SlotStorySwieprComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c010, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiper = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 4, consts: [[1, "swiper-title"], [1, "swiper"], ["swiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-desc"], [1, "swiper-desc1"], [1, "swiper-slide"]], template: function SlotStorySwieprComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1, 2)(4, "div", 3);
    \u0275\u0275template(5, SlotStorySwieprComponent_div_5_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7, "\uB2F9\uC2E0\uC758 \uC9C1\uC5C5\uC740 ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " \uC785\uB2C8\uB2E4.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.data.desc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.data.items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.selectedValue);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.selectedDesc);
  }
}, dependencies: [NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.swiper[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 5px;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  background-color: #3d79cd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  font-weight: bold;\n  color: #ffffff;\n  transition: transform 0.5s ease, box-shadow 0.3s ease;\n  overflow: hidden;\n}\n.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.swiper-slide-active[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\n.swiper-slide-next[_ngcontent-%COMP%], .swiper-slide-prev[_ngcontent-%COMP%] {\n  filter: brightness(0.8);\n}\n.swiper-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #333;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.swiper-desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  margin-top: 20px;\n  overflow: hidden;\n}\n.swiper-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(42, 72, 210);\n}\n.swiper-desc1[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  color: rgb(42, 72, 210);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=slot-story-swiper.component.css.map */'] });
var SlotStorySwieprComponent = _SlotStorySwieprComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStorySwieprComponent, { className: "SlotStorySwieprComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-swiper\\slot-story-swiper.component.ts", lineNumber: 12 });
})();

// Modules/pages/slots/items/slot-story-swiper-cube/slot-story-swiper-cube.component.ts
var _c011 = ["swiper"];
var _c14 = ["swiperTitle"];
function SlotStorySwieprCubeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.title);
  }
}
var _SlotStorySwieprCubeComponent = class _SlotStorySwieprCubeComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.selectedValue = "";
    this.selectedDesc = "";
  }
  click() {
    return __async(this, null, function* () {
      return false;
    });
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    timer(1e3).subscribe((d) => {
      this.make();
    });
  }
  make() {
    this.selectedValue = this.data.items[0].title;
    this.selectedDesc = this.data.items[0].desc;
    this.$swiper = new Swiper(this.swiper.nativeElement, {
      slidesPerView: 2,
      initialSlide: 0,
      effect: "cube",
      cubeEffect: {
        // cubeEffect 속성 추가
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
        // 그림자 크기 조절
      },
      allowTouchMove: false,
      modules: [EffectCube],
      on: {
        slideChange: (swiper) => {
          this.slideChange(swiper);
        }
      }
    });
    timer(1e3).subscribe((d) => {
      this.startSlideShow();
    });
  }
  startSlideShow() {
    return __async(this, null, function* () {
      const delay = 300;
      const selectionProbability = 0.2;
      let forward = true;
      let firstRound = true;
      while (true) {
        const indices = forward ? Array.from(Array(this.data.items.length).keys()) : Array.from(Array(this.data.items.length).keys()).reverse();
        for (const i of indices) {
          yield new Promise((resolve) => setTimeout(resolve, delay));
          this.$swiper.slideTo(i);
          if (!firstRound && Math.random() < selectionProbability) {
            const randomIndex = this.getRandomSlideIndex();
            this.$swiper.slideTo(randomIndex);
            this.applyCongratsEffect();
            return;
          }
        }
        forward = !forward;
        firstRound = false;
      }
    });
  }
  getRandomSlideIndex() {
    return Math.floor(Math.random() * this.data.items.length);
  }
  slideChange(swiper) {
    const activeIndex = swiper.activeIndex;
    this.selectedValue = this.data.items[activeIndex].title;
    this.selectedDesc = this.data.items[activeIndex].desc;
  }
  applyCongratsEffect() {
  }
  send() {
    return __async(this, null, function* () {
    });
  }
};
_SlotStorySwieprCubeComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275SlotStorySwieprCubeComponent_BaseFactory;
  return function SlotStorySwieprCubeComponent_Factory(t) {
    return (\u0275SlotStorySwieprCubeComponent_BaseFactory || (\u0275SlotStorySwieprCubeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SlotStorySwieprCubeComponent)))(t || _SlotStorySwieprCubeComponent);
  };
})();
_SlotStorySwieprCubeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SlotStorySwieprCubeComponent, selectors: [["app-slot-story-swiper-cube"]], viewQuery: function SlotStorySwieprCubeComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c011, 7);
    \u0275\u0275viewQuery(_c14, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiper = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.swiperTitle = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 4, consts: [[1, "swiper-title"], ["swiperTitle", ""], [1, "swiper"], ["swiper", ""], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-desc"], [1, "swiper-desc1"], [1, "swiper-slide"]], template: function SlotStorySwieprCubeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0, 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2, 3)(5, "div", 4);
    \u0275\u0275template(6, SlotStorySwieprCubeComponent_div_6_Template, 3, 1, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275text(8, "\uC120\uD0DD\uB41C \uC544\uC774\uD15C : ");
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.data.desc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.data.items);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.selectedValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.selectedDesc);
  }
}, dependencies: [NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.swiper[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 150px;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  background-color: #3d79cd;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  font-weight: bold;\n  color: #ffffff;\n  transition: transform 0.5s ease, box-shadow 0.3s ease;\n  overflow: hidden;\n}\n.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.swiper-slide-active[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n}\n.swiper-slide-next[_ngcontent-%COMP%], .swiper-slide-prev[_ngcontent-%COMP%] {\n  filter: brightness(0.8);\n}\n.swiper-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #333;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n.swiper-desc[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  margin-top: 20px;\n  overflow: hidden;\n}\n.swiper-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(42, 72, 210);\n}\n.swiper-desc1[_ngcontent-%COMP%] {\n  text-align: center;\n  overflow: hidden;\n  color: rgb(42, 72, 210);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.swiper-title[_ngcontent-%COMP%] {\n  transition: transform 0.5s ease, color 0.5s ease;\n}\n.swiper-title.congrats[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  color: gold;\n}\n.swiper-title[_ngcontent-%COMP%]   #flower[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transform-origin: 50% 50%;\n  transition: transform 1s ease-out;\n}\n.swiper-title.explode[_ngcontent-%COMP%]   #flower[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transform: translate(-31.3009419px, -36.8098058605px) rotate(111.377560095deg);\n}\n/*# sourceMappingURL=slot-story-swiper-cube.component.css.map */'] });
var SlotStorySwieprCubeComponent = _SlotStorySwieprCubeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SlotStorySwieprCubeComponent, { className: "SlotStorySwieprCubeComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-swiper-cube\\slot-story-swiper-cube.component.ts", lineNumber: 12 });
})();

// Modules/pages/slots/items/slot-story-swiper-fighting/clan-battle-visual/clan-battle-visual.component.ts
function ClanBattleVisualComponent_li_3_ng_container_3_span_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const damageValue_r8 = ctx.ngIf;
    const log_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r7 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", damageValue_r8 < 0 ? "green" : "blue");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r7.getSkillIcon(log_r6.skill.name, damageValue_r8), ": ", ctx_r7.getAbsoluteDamage(damageValue_r8), " ");
  }
}
function ClanBattleVisualComponent_li_3_ng_container_3_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClanBattleVisualComponent_li_3_ng_container_3_span_6_ng_container_1_ng_container_1_Template, 3, 4, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const log_r6 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", log_r6.damage[0] == null ? null : log_r6.damage[0].damage);
  }
}
function ClanBattleVisualComponent_li_3_ng_container_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, ClanBattleVisualComponent_li_3_ng_container_3_span_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.getMemberSkillLogs(item_r1.member));
  }
}
var _c012 = (a0, a1) => ({ "attacker": a0, "defender": a1 });
function ClanBattleVisualComponent_li_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9)(4, "div", 10);
    \u0275\u0275element(5, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ClanBattleVisualComponent_li_3_ng_container_3_span_6_Template, 2, 1, "span", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c012, item_r1.member.isAttacking, item_r1.member.isDefending));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1.member.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", item_r1.member.health / item_r1.member.maxHealth * 100 + "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.member.isAttacking || item_r1.member.isDefending);
  }
}
function ClanBattleVisualComponent_li_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.allMembers[0].member.name === ctx_r3.currentSkillLog.attacker ? "blue" : "red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r3.currentSkillLog.attacker, ": ", ctx_r3.currentSkillLog.skill.isHeal ? "\u2764\uFE0F" : "\u{1F4AB}", " ", ctx_r3.currentSkillLog.skill.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.currentAttackerDialogueOutName);
  }
}
var _c15 = (a0, a1) => ({ "clan1-icon": a0, "clan2-icon": a1 });
var _c2 = (a0) => ({ "shimmer": a0 });
function ClanBattleVisualComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 3);
    \u0275\u0275element(1, "span", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275template(3, ClanBattleVisualComponent_li_3_ng_container_3_Template, 7, 8, "ng-container", 6)(4, ClanBattleVisualComponent_li_3_div_4_Template, 5, 6, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c15, item_r1.clan === 1, item_r1.clan === 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c2, item_r1.member.isAttacking && ctx_r0.currentAttackerUsedSkill));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(item_r1.member.isAttacking && ctx_r0.currentAttackerUsedSkill));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r1.member.isAttacking && ctx_r0.currentAttackerUsedSkill && ctx_r0.currentSkillLog);
  }
}
var _ClanBattleVisualComponent = class _ClanBattleVisualComponent extends SlotAbstract {
  constructor() {
    super(...arguments);
    this.clan1Members = [];
    this.clan2Members = [];
    this.currentTurn = 0;
    this.timerPaused = false;
    this.remainingTime = 100;
    this.turnInterval = 50;
    this.clan1Name = "\uBB38\uD30C 1";
    this.clan2Name = "\uBB38\uD30C 2";
    this.currentAttackerUsedSkill = false;
    this.currentAttackerClan = null;
    this.currentDefenderClan = null;
    this.battleEnded = false;
    this.winner = "";
    this.winningClan = [];
    this.allMembers = [];
    this.currentSkillLog = null;
    this.currentAttackerDialogue = "";
    this.currentAttackerDialogueOutName = "";
    this.currentDefenderDialogue = "";
    this.attackerDialogues = [
      "Kneel before my sword!",
      "This is the true power of a martial arts master!",
      "Your shallow tricks won't work on me!",
      "This strike will end it all!",
      "How dare you face me, you are reckless!",
      "Your fate is already sealed!",
      "Can you withstand my wrath?",
      "I cannot lose to the likes of you!",
      "You cannot escape my attacks!",
      "It's your turn now. Come at me!",
      "My sword dances for justice!",
      "Pay for your sins with your life!",
      "This place will be your grave!",
      "I will prove my strength!",
      "Congratulations on your defeat!",
      "My victory was already foreseen!",
      "How brave of you to challenge me!",
      "Remember my name!",
      "I will watch your demise!",
      "Surrender to my power!"
    ];
    this.defenderDialogues = [
      "Ugh! It's not over yet!",
      "I won't yield to such an attack!",
      "My will is unbreakable!",
      "I will endure!",
      "I cannot retreat for the sake of my comrades!",
      "I cannot lose like this!",
      "Take my counterattack!",
      "I haven't shown my true power yet!",
      "Is that all you've got?",
      "You cannot pierce my shield!",
      "My body is like steel!",
      "My spirit is unyielding!",
      "My comrades will protect me!",
      "My faith is unwavering!",
      "I cannot abandon my pride!",
      "I will fight for my honor!",
      "I will fight with my life on the line!",
      "My sacrifice will not be in vain!",
      "My defeat is a new beginning!",
      "Await my revenge!"
    ];
    this.winnerMessages = [
      "'s overwhelming victory!",
      "'s glorious victory!",
      "has seized victory!",
      "has become the final victor!",
      "has knelt before 's mighty power!"
    ];
    this.loserMessages = [
      "has tasted the bitterness of defeat...",
      "has unfortunately been defeated...",
      "will have to wait for the next opportunity...",
      "'s challenge has ended in failure...",
      "had to swallow their tears..."
    ];
    this.winnerMessage = "";
    this.loserMessage = "";
    this.skillLogs = [];
  }
  ngOnInit() {
    this.allMembers = this.clan1Members.map((member) => ({ clan: 1, member }));
    this.allMembers = this.allMembers.concat(this.clan2Members.map((member) => ({ clan: 2, member })));
    this.startBattle();
  }
  startBattle() {
    this.battleInterval = setInterval(() => {
      if (!this.timerPaused) {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          this.endBattle();
        }
      }
    }, 100);
    this.nextTurn();
  }
  pauseTimerAndScheduleNextTurn(delay) {
    this.timerPaused = true;
    clearInterval(this.battleInterval);
    setTimeout(() => this.resumeTimerAndNextTurn(), delay);
  }
  resumeTimerAndNextTurn() {
    this.timerPaused = false;
    this.battleInterval = setInterval(() => {
      if (!this.timerPaused) {
        this.remainingTime--;
        if (this.remainingTime <= 0) {
          this.endBattle();
        }
      }
    }, 100);
    this.nextTurn();
  }
  scheduleNextTurn(delay) {
    setTimeout(() => this.nextTurn(), delay);
  }
  getAbsoluteDamage(damage) {
    return Math.abs(damage);
  }
  nextTurn() {
    const totalMembers = this.clan1Members.length + this.clan2Members.length;
    const attackerIndex = this.currentTurn % totalMembers;
    const attackerClan = attackerIndex < this.clan1Members.length ? this.clan1Members : this.clan2Members;
    const attacker = attackerClan[attackerIndex % attackerClan.length];
    const defenderClan = attackerClan === this.clan1Members ? this.clan2Members : this.clan1Members;
    const aliveDefenders = defenderClan.filter((member) => member.health > 0);
    if (aliveDefenders.length === 0) {
      this.endBattle();
      return;
    }
    this.reduceSkillCooldowns();
    const useSkill = Math.random() < 0.3;
    this.currentAttackerUsedSkill = useSkill;
    let defender = aliveDefenders[0];
    if (useSkill) {
      const skill = this.getRandomSkill(attacker);
      if (skill) {
        this.performSkillAttack(attacker, skill, aliveDefenders);
      } else {
        defender = this.selectDefender(aliveDefenders);
        this.performBasicAttack(attacker, defender);
      }
      this.pauseTimerAndScheduleNextTurn(200);
    } else {
      defender = this.selectDefender(aliveDefenders);
      this.performBasicAttack(attacker, defender);
      this.scheduleNextTurn(this.turnInterval);
    }
    if (!useSkill) {
      this.currentAttackerUsedSkill = false;
    }
    this.currentTurn++;
    this.resetAttackAndDefenseStates();
    this.currentAttackerClan = attackerClan;
    this.currentDefenderClan = defenderClan;
    attacker.isAttacking = true;
    defender.isDefending = true;
    this.currentSkillLog = this.skillLogs[this.skillLogs.length - 1];
  }
  selectDefender(aliveDefenders) {
    const defenderIndex = Math.floor(Math.random() * aliveDefenders.length);
    return aliveDefenders[defenderIndex];
  }
  getMemberSkillLogs(member) {
    const filteredLogs = this.skillLogs.filter((log) => log.attacker === member.name || log.targets.includes(member.name));
    return filteredLogs[filteredLogs.length - 1];
  }
  reduceSkillCooldowns() {
    this.clan1Members.forEach((member) => member.skills.forEach((skill) => skill.cooldown = Math.max(0, skill.cooldown - 1)));
    this.clan2Members.forEach((member) => member.skills.forEach((skill) => skill.cooldown = Math.max(0, skill.cooldown - 1)));
  }
  isAlly(attacker, defender) {
    const attackerClan = this.clan1Members.includes(attacker) ? this.clan1Members : this.clan2Members;
    return attackerClan.includes(defender);
  }
  getLowestHpAlly(attacker) {
    const attackerClan = this.clan1Members.includes(attacker) ? this.clan1Members : this.clan2Members;
    const aliveAllies = attackerClan.filter((member) => member.health > 0 && member !== attacker);
    if (aliveAllies.length === 0) {
      return null;
    }
    return aliveAllies.reduce((lowestHpMember, currentMember) => {
      return currentMember.health < lowestHpMember.health ? currentMember : lowestHpMember;
    });
  }
  getRandomDefenderDialogue() {
    const randomIndex = Math.floor(Math.random() * this.defenderDialogues.length);
    return this.defenderDialogues[randomIndex];
  }
  performSkillAttack(attacker, skill, aliveDefenders) {
    let targets = [];
    if (skill.isHeal) {
      const lowestHpAlly = this.getLowestHpAlly(attacker);
      if (lowestHpAlly) {
        targets = [lowestHpAlly];
      } else {
        return;
      }
    } else {
      targets = this.getRandomTargets(aliveDefenders, skill.targets);
    }
    this.currentAttackerDialogue = `${attacker.name}: ${this.getRandomAttackerDialogue(skill.name)}`;
    this.currentAttackerDialogueOutName = `${this.getRandomAttackerDialogue(skill.name)}`;
    const damages = [];
    let itemDamageBonus = 0;
    for (const defender of targets) {
      let damage = skill.damage;
      let originalDamage = damage;
      let damageOrHeal = skill.damage;
      let defenseBonusApplied = false;
      attacker.items.forEach((item) => {
        itemDamageBonus += item.attackPowerBonus || 0;
        damage += item.attackPowerBonus || 0;
      });
      defender.items.forEach((item) => {
        if (item.defensePowerBonus) {
          damageOrHeal -= item.defensePowerBonus;
          defenseBonusApplied = true;
        }
      });
      if (!skill.isHeal) {
        let blocked = false;
        for (const item of defender.items) {
          if (item.skillBlockCount && item.skillBlockCount > 0) {
            item.skillBlockCount--;
            blocked = true;
            this.currentDefenderDialogue = `${defender.name}: ${item.name}\uC73C\uB85C \uC2A4\uD0AC \uACF5\uACA9\uC744 \uB9C9\uC558\uB2E4!`;
            damageOrHeal = 0;
            break;
          }
        }
        if (!blocked) {
          defender.health = Math.max(0, defender.health - damageOrHeal);
          this.currentDefenderDialogue = `${defender.name}: ${this.getRandomDefenderDialogue()}`;
        }
      } else if (skill.isHeal && defender.health > 0 && this.isAlly(attacker, defender)) {
        defender.health = Math.min(defender.maxHealth, defender.health - damageOrHeal);
      }
      damages.push({
        damage: damageOrHeal,
        defenseBonusApplied,
        originalDamage: defenseBonusApplied ? originalDamage : 0
        // 방어 보너스 적용 시 원래 데미지 저장
      });
      if (skill.debuff) {
        this.applyDebuff(defender, skill.debuff);
        damage += skill.debuff.health || 0;
        defender.isDebuffed = true;
      }
      if (skill.buff) {
        this.applyBuff(defender, skill.buff);
      }
    }
    const clan1MembersCopy = this.clan1Members.map((member) => __spreadValues({}, member));
    const clan2MembersCopy = this.clan2Members.map((member) => __spreadValues({}, member));
    this.skillLogs.push({
      attacker: attacker.name,
      skill,
      targets: targets.map((t) => t.name),
      damage: damages,
      turn: this.currentTurn,
      attackerDialogue: this.currentAttackerDialogue,
      defenderDialogue: this.currentDefenderDialogue,
      clan1Members: clan1MembersCopy,
      clan2Members: clan2MembersCopy,
      isAdditionalSkill: attacker.skills.indexOf(skill) === -1,
      itemDamageBonus,
      attackerItems: attacker.items.map((item) => item.name),
      defenderItems: targets.map((defender) => defender.items.map((item) => item.name)).flat(),
      prompt: this.generatePrompt(attacker, aliveDefenders, skill, damages, itemDamageBonus)
    });
    if (skill.selfDamage) {
      attacker.health = Math.max(0, attacker.health - skill.selfDamage);
    }
  }
  getRandomAttackerDialogue(skillName) {
    const randomIndex = Math.floor(Math.random() * this.attackerDialogues.length);
    let dialogue = this.attackerDialogues[randomIndex];
    if (skillName) {
      dialogue = `${dialogue} ${skillName}!`;
    }
    return dialogue;
  }
  performBasicAttack(attacker, defender) {
    let damage = Math.max(0, attacker.attackPower);
    let itemDamageBonus = 0;
    attacker.items.forEach((item) => {
      itemDamageBonus += item.attackPowerBonus || 0;
      damage += item.attackPowerBonus || 0;
    });
    defender.health = Math.max(0, defender.health - damage);
    this.currentAttackerDialogue = `${attacker.name}: ${this.getRandomAttackerDialogue()}`;
    this.currentDefenderDialogue = `${defender.name}: ${this.getRandomDefenderDialogue()}`;
    const BASIC_ATTACK_SKILL = {
      name: "\uACF5\uACA9",
      damage: 0,
      targets: 1,
      cooldown: 0,
      maxCooldown: 0
      // 쿨다운 없음
    };
    const clan1MembersCopy = this.clan1Members.map((member) => __spreadValues({}, member));
    const clan2MembersCopy = this.clan2Members.map((member) => __spreadValues({}, member));
    this.skillLogs.push({
      attacker: attacker.name,
      skill: BASIC_ATTACK_SKILL,
      targets: [defender.name],
      damage: [
        { damage, defenseBonusApplied: false, originalDamage: 0 }
      ],
      turn: this.currentTurn,
      isBasicAttack: true,
      attackerDialogue: this.currentAttackerDialogue,
      defenderDialogue: this.currentDefenderDialogue,
      clan1Members: clan1MembersCopy,
      clan2Members: clan2MembersCopy,
      itemDamageBonus,
      attackerItems: attacker.items.map((item) => item.name),
      prompt: this.generatePrompt(attacker, [defender], BASIC_ATTACK_SKILL, [{ damage, defenseBonusApplied: false, originalDamage: 0 }], itemDamageBonus)
    });
  }
  generatePrompt(attacker, defenders, skill, damages, itemDamageBonus) {
    const attackerClanName = this.clan1Members.includes(attacker) ? this.clan1Name : this.clan2Name;
    let prompt = `${attackerClanName}\uC758 ${attacker.name}\uC774(\uAC00) `;
    if (skill) {
      const totalDamage = damages.reduce((sum, d) => sum + d.damage, 0);
      prompt += `${skill.name} \uC2A4\uD0AC\uC744 \uC0AC\uC6A9\uD558\uC5EC `;
      defenders.forEach((defender, index) => {
        const defenderClanName = this.clan1Members.includes(defender) ? this.clan1Name : this.clan2Name;
        const damageInfo = damages[index];
        if (damageInfo) {
          prompt += `${defenderClanName}\uC758 ${defender.name}\uC5D0\uAC8C ${damageInfo.damage}\uC758 \uD53C\uD574\uB97C \uC785\uD614\uC2B5\uB2C8\uB2E4.`;
          if (damageInfo.defenseBonusApplied) {
            prompt += ` (\uBC29\uC5B4 \uBCF4\uB108\uC2A4 \uC801\uC6A9 \uC804 ${damageInfo.originalDamage})`;
          }
        } else {
          prompt += `${defenderClanName}\uC758 ${defender.name}\uC5D0\uAC8C \uD53C\uD574\uB97C \uC785\uD788\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`;
        }
        if (index < defenders.length - 1) {
          prompt += ", ";
        }
      });
      if (itemDamageBonus > 0) {
        prompt += ` (\uC544\uC774\uD15C \uCD94\uAC00 \uD53C\uD574: +${itemDamageBonus})`;
      }
    } else {
      const totalDamage = damages.reduce((sum, d) => sum + d.damage, 0);
      prompt += `\uACF5\uACA9\uC73C\uB85C `;
      defenders.forEach((defender, index) => {
        const defenderClanName = this.clan1Members.includes(defender) ? this.clan1Name : this.clan2Name;
        const damageInfo = damages[index];
        if (damageInfo) {
          prompt += `${defenderClanName}\uC758 ${defender.name}\uC5D0\uAC8C ${damageInfo.damage}\uC758 \uD53C\uD574\uB97C \uC785\uD614\uC2B5\uB2C8\uB2E4.`;
        } else {
          prompt += `${defenderClanName}\uC758 ${defender.name}\uC5D0\uAC8C \uD53C\uD574\uB97C \uC785\uD788\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.`;
        }
        if (index < defenders.length - 1) {
          prompt += ", ";
        }
      });
      if (itemDamageBonus > 0) {
        prompt += ` (\uC544\uC774\uD15C \uCD94\uAC00 \uD53C\uD574: +${itemDamageBonus})`;
      }
    }
    return prompt;
  }
  getBuffDescription(buff) {
    let description = "";
    if (buff.health)
      description += `\uCCB4\uB825 ${buff.health} \uD68C\uBCF5, `;
    if (buff.attackPower)
      description += `\uACF5\uACA9\uB825 ${buff.attackPower} \uC99D\uAC00, `;
    if (buff.defensePower)
      description += `\uBC29\uC5B4\uB825 ${buff.defensePower} \uC99D\uAC00, `;
    if (buff.allDebuffs)
      description += `\uBAA8\uB4E0 \uB514\uBC84\uD504 \uD574\uC81C, `;
    return description.slice(0, -2);
  }
  getDebuffDescription(debuff) {
    let description = "";
    if (debuff.health)
      description += `\uCCB4\uB825 ${debuff.health} \uAC10\uC18C, `;
    if (debuff.attackPower)
      description += `\uACF5\uACA9\uB825 ${debuff.attackPower} \uAC10\uC18C, `;
    if (debuff.defensePower)
      description += `\uBC29\uC5B4\uB825 ${debuff.defensePower} \uAC10\uC18C, `;
    return description.slice(0, -2);
  }
  resetAttackAndDefenseStates() {
    this.clan1Members.forEach((member) => {
      member.isAttacking = false;
      member.isDefending = false;
      member.isDebuffed = false;
    });
    this.clan2Members.forEach((member) => {
      member.isAttacking = false;
      member.isDefending = false;
      member.isDebuffed = false;
    });
  }
  applyBuff(target, buff) {
    if (buff.health) {
      const healedAmount = Math.min(target.maxHealth - target.health, buff.health);
      target.health += healedAmount;
      this.currentDefenderDialogue += ` (\uCCB4\uB825 ${healedAmount} \uD68C\uBCF5!)`;
    }
    if (buff.attackPower)
      target.attackPower += buff.attackPower;
    if (buff.defensePower)
      target.defensePower += buff.defensePower;
    if (buff.allDebuffs) {
      target.attackPower = Math.max(0, target.attackPower);
      target.defensePower = Math.max(0, target.defensePower);
      this.currentDefenderDialogue += " (\uB514\uBC84\uD504 \uD574\uC81C!)";
    }
  }
  applyDebuff(target, debuff) {
    if (debuff.health)
      target.health = Math.max(0, target.health - debuff.health);
    if (debuff.attackPower)
      target.attackPower = Math.max(0, target.attackPower - debuff.attackPower);
    if (debuff.defensePower)
      target.defensePower = Math.max(0, target.defensePower - debuff.defensePower);
  }
  getRandomSkill(attacker) {
    let availableSkills = attacker.skills.filter((skill) => skill.cooldown === 0);
    attacker.items.forEach((item) => {
      availableSkills = availableSkills.concat(item.additionalSkills || []);
    });
    if (availableSkills.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableSkills.length);
    const selectedSkill = availableSkills[randomIndex];
    selectedSkill.cooldown = selectedSkill.maxCooldown;
    return selectedSkill;
  }
  getRandomTargets(defenders, numTargets) {
    const shuffledDefenders = defenders.sort(() => Math.random() - 0.5);
    return shuffledDefenders.slice(0, numTargets);
  }
  endBattle() {
    this.battleEnded = true;
    this.winner = this.clan1Members.some((member) => member.health > 0) ? this.clan1Name : this.clan2Name;
    this.winningClan = this.clan1Members.some((member) => member.health > 0) ? this.clan1Members : this.clan2Members;
    clearInterval(this.battleInterval);
    this.setWinLoseMessages();
    const prompts = this.skillLogs.map((log) => log.prompt).filter((prompt) => prompt !== void 0);
    const promptString = prompts.join(" ");
    this.globalService.flowService.currentFighting.endBattle(promptString);
  }
  setWinLoseMessages() {
    const randomWinnerIndex = Math.floor(Math.random() * this.winnerMessages.length);
    const randomLoserIndex = Math.floor(Math.random() * this.loserMessages.length);
    if (this.winner === this.clan1Name) {
      this.winnerMessage = `${this.clan1Name}${this.winnerMessages[randomWinnerIndex]}`;
      this.loserMessage = `${this.clan2Name}${this.loserMessages[randomLoserIndex]}`;
    } else if (this.winner === this.clan2Name) {
      this.winnerMessage = `${this.clan2Name}${this.winnerMessages[randomWinnerIndex]}`;
      this.loserMessage = `${this.clan1Name}${this.loserMessages[randomLoserIndex]}`;
    } else {
      this.winnerMessage = "\uBB34\uC2B9\uBD80! \uD33D\uD33D\uD55C \uC811\uC804\uC774\uC5C8\uB2E4.";
      this.loserMessage = "";
    }
  }
  getSkillIcon(name, damage) {
    let icon = "";
    if (name === "\uACF5\uACA9") {
      icon = "\u{1F5E1}\uFE0F";
    } else if (damage < 0) {
      icon = "\u2764\uFE0F";
    } else {
      icon = "\u{1F525}";
    }
    return icon;
  }
};
_ClanBattleVisualComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ClanBattleVisualComponent_BaseFactory;
  return function ClanBattleVisualComponent_Factory(t) {
    return (\u0275ClanBattleVisualComponent_BaseFactory || (\u0275ClanBattleVisualComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClanBattleVisualComponent)))(t || _ClanBattleVisualComponent);
  };
})();
_ClanBattleVisualComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClanBattleVisualComponent, selectors: [["app-clan-battle-visual"]], inputs: { clan1Members: "clan1Members", clan2Members: "clan2Members", clan1Name: "clan1Name", clan2Name: "clan2Name" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[1, "clan-battle-container"], [1, "clan-list"], ["class", "member", 4, "ngFor", "ngForOf"], [1, "member"], [1, "member-icon", 3, "ngClass"], [1, "member-info", 3, "ngClass"], [4, "ngIf"], ["class", "", 4, "ngIf"], [1, "name", 3, "ngClass"], [1, "member-stats"], [1, "health-bar"], [1, "health"], [1, ""], [1, "skill-name"], [1, "dialogue"]], template: function ClanBattleVisualComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ul");
    \u0275\u0275template(3, ClanBattleVisualComponent_li_3_Template, 5, 9, "li", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.allMembers);
  }
}, dependencies: [NgClass, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.clan-battle-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.clan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n.battle-arena[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.clan-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.clan-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.member[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.member[_ngcontent-%COMP%]:hover   .member-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.member-icon[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n.member-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n}\n.member-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.member-info[_ngcontent-%COMP%]   .name.attacker[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-weight: bold;\n}\n.member-info[_ngcontent-%COMP%]   .name.defender[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-weight: bold;\n}\n.member-info[_ngcontent-%COMP%]   .attack-icon[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.clan-list[_ngcontent-%COMP%]:nth-child(1)   .name[_ngcontent-%COMP%], .clan-list[_ngcontent-%COMP%]   .clan1-icon[_ngcontent-%COMP%]    + .member-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: rgb(20, 20, 230);\n}\n.clan-list[_ngcontent-%COMP%]:nth-child(2)   .name[_ngcontent-%COMP%], .clan-list[_ngcontent-%COMP%]   .clan2-icon[_ngcontent-%COMP%]    + .member-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: rgb(236, 29, 29);\n}\n.clan-list[_ngcontent-%COMP%]   .dialogue-area[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.skill-log[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  white-space: normal;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n.skill-log[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.name.attacker[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-weight: bold;\n}\n.name.defender[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-weight: bold;\n}\n.member-battle[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.health-bar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 10px;\n  border: 1px solid black;\n  display: inline-block;\n  margin: 0 5px;\n}\n.health-bar[_ngcontent-%COMP%]   .health[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: rgb(79, 141, 79);\n}\n.clan2-icon[_ngcontent-%COMP%]    + .member-info[_ngcontent-%COMP%]   .health-bar[_ngcontent-%COMP%]   .health[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n}\n.health-bar.debuffed[_ngcontent-%COMP%]   .health[_ngcontent-%COMP%] {\n  background-color: orange;\n}\n.status[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: gray;\n}\n.dialogue-area[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.dialogue[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  text-align: center;\n  padding: 10px;\n  margin-bottom: 10px;\n  position: relative;\n}\n.dialogue-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 20px;\n}\n.dialogue.attacker-dialogue[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  color: white;\n  border: 2px solid #217dbb;\n}\n.dialogue.attacker-dialogue.skill-used[_ngcontent-%COMP%] {\n  background-color: #9b59b6;\n  border: 2px solid #804399;\n}\n.dialogue.defender-dialogue[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  color: white;\n  border: 2px solid #d62c1a;\n}\n.skill-log[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.skill-log[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.skill-log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.skill-log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n}\n.skill-log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.skill-log[_ngcontent-%COMP%]   .member-name-level[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.log-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.log-box[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n.log-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.dialogues[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-style: italic;\n}\n.dialogues[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.heal-log[_ngcontent-%COMP%] {\n  background-color: #c7ecee;\n}\n.clan-message[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.clan-message.winner-message[_ngcontent-%COMP%] {\n  background-color: #2ecc71;\n  color: white;\n  font-weight: bold;\n}\n.clan-message.loser-message[_ngcontent-%COMP%] {\n  background-color: #e74c3c;\n  color: white;\n  opacity: 0.8;\n}\n.battle-result[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  text-align: center;\n}\n.battle-result[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 24px;\n}\n.battle-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.battle-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 20px 0;\n}\n.battle-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.defense-bonus-applied[_ngcontent-%COMP%] {\n  color: blue;\n}\n.shimmer[_ngcontent-%COMP%] {\n  background: none;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.shimmer[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: inherit;\n  z-index: 1;\n}\n.shimmer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.shimmer[_ngcontent-%COMP%]   .skill-info[_ngcontent-%COMP%] {\n  opacity: 1;\n  animation: none;\n  background: none;\n}\n.skill-info[_ngcontent-%COMP%]   .skill-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px;\n  text-align: center;\n}\n.skill-info[_ngcontent-%COMP%]   .dialogue[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgb(83, 83, 83);\n  text-align: center;\n}\n/*# sourceMappingURL=clan-battle-visual.component.css.map */'] });
var ClanBattleVisualComponent = _ClanBattleVisualComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClanBattleVisualComponent, { className: "ClanBattleVisualComponent", filePath: "Modules\\pages\\slots\\items\\slot-story-swiper-fighting\\clan-battle-visual\\clan-battle-visual.component.ts", lineNumber: 15 });
})();

// Modules/pages/slots/slot.module.ts
var _SlotModule = class _SlotModule {
};
_SlotModule.\u0275fac = function SlotModule_Factory(t) {
  return new (t || _SlotModule)();
};
_SlotModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SlotModule });
_SlotModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  SlotRoutingModule
] });
var SlotModule = _SlotModule;
\u0275\u0275setComponentScope(SlotComponent, [
  NgForOf,
  NgIf,
  NgStyle,
  MatIconButton,
  MatIcon,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSlideToggle,
  SquareComponent,
  DynamicFormComponent
], []);
\u0275\u0275setComponentScope(DynamicFormComponent, [
  NgStyle,
  MatButton,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName,
  FormGroupName,
  MatFormField,
  MatLabel,
  MatInput,
  TextareaComponent,
  InputComponent,
  PasswordComponent,
  SelectComponent,
  RadioButtonComponent,
  DatePickerComponent
], []);
\u0275\u0275setComponentScope(SlotStorySwieprFightingComponent, [NgIf, ClanBattleVisualComponent], []);
export {
  SlotModule
};
//# sourceMappingURL=chunk-MGDUXYJD.js.map
