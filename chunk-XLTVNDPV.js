import {
  arc_default,
  area_default,
  axisBottom,
  axisLeft,
  axisRight,
  band,
  bisector,
  category10_default,
  csv,
  extent,
  line_default,
  linear,
  max,
  ordinal,
  pie_default,
  pointer_default,
  selectAll_default,
  select_default,
  stack_default,
  sum,
  time,
  timeFormat,
  timeParse,
  timeYear,
  value_default,
  zoom_default
} from "./chunk-XBPCQIDH.js";
import {
  monthUpdteAction,
  pvAction,
  selectMonth,
  selectPageView
} from "./chunk-IH5UFRFR.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule,
  MatToolbar,
  MatToolbarModule,
  MatToolbarRow
} from "./chunk-JCP2WD6C.js";
import {
  DateTime,
  HttpClient,
  Interval,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatIcon,
  MatIconModule,
  RouterModule,
  Store,
  initPath
} from "./chunk-MZEG7Z3L.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  ElementRef,
  EventEmitter,
  Renderer2,
  ViewContainerRef,
  __decorate,
  filter,
  map,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-A2LCPREI.js";

// Modules/pages/monitoring/components/area-examle/area-examle.component.ts
var _AreaExamleComponent = class _AreaExamleComponent {
  constructor() {
    this.initChart();
  }
  ngOnInit() {
    this.drawChart();
  }
  initChart() {
    this.margin = {
      top: 70,
      right: 60,
      bottom: 50,
      left: 80
    };
    this.width = 1200 - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;
  }
  drawChart() {
    this.x = time().range([0, this.width]);
    this.y = linear().range([this.height, 0]);
    this.svg = select_default("#chart-container").append("svg").attr("class", "chart-svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom).append("g").attr("transform", `translate(${this.margin.left},${this.margin.top})`);
    const tooltip = select_default("#chart-container").append("div").attr("class", "chart-tooltip");
    const tooltipRawDate = select_default("#chart-container").append("div").attr("class", "chart-tooltip");
    csv("./assets/data/NTDOY.csv").then((data) => {
      const parseDate = timeParse("%Y-%m-%d");
      data.forEach((d) => {
        d.Date = parseDate(d.Date);
        d.Close = +d.Close;
      });
      console.log(data);
      this.x.domain(extent(data, (d) => d.Date));
      this.y.domain([0, max(data, (d) => d.Close)]);
      this.svg.append("g").attr("class", "x-axis").attr("transform", `translate(0,${this.height})`).style("font-size", "14px").call(axisBottom(this.x).tickValues(this.x.ticks(timeYear.every(1))).tickFormat(timeFormat("%Y"))).selectAll(".tick line").style("stroke-opacity", 1);
      this.svg.selectAll(".tick text").attr("fill", "#777");
      this.svg.append("g").attr("class", "y-axis").attr("transform", `translate(${this.width}, 0)`).style("font-size", "14px").call(axisRight(this.y).ticks(10).tickFormat((d) => {
        if (isNaN(d))
          return "";
        return `$${d.toFixed(2)}`;
      })).selectAll(".tick text").style("fill", "#777");
      const line = line_default().x((d) => this.x(d.Date)).y((d) => this.y(d.Close));
      const area = area_default().x((d) => this.x(d.Date)).y0(this.height).y1((d) => this.y(d.Close));
      this.svg.append("path").datum(data).attr("class", "area").attr("d", area).style("fill", "#85bb65").style("opacity", 0.5);
      const path = this.svg.append("path").datum(data).attr("class", "line").attr("fill", "none").attr("stroke", "#85bb65").attr("stroke-width", 1).attr("d", line);
      const circle = this.svg.append("circle").attr("r", 0).attr("fill", "red").style("stroke", "white").attr("opacity", 0.7).style("pointer-events", "none");
      const tooltipLineX = this.svg.append("line").attr("class", "tooltip-line").attr("id", "tooltip-line-x").attr("stroke", "red").attr("stroke-width", 1).attr("stroke-dasharray", "2,2");
      const tooltipLineY = this.svg.append("line").attr("class", "tooltip-line").attr("id", "tooltip-line-y").attr("stroke", "red").attr("stroke-width", 1).attr("stroke-dasharray", "2,2");
      const listeningRect = this.svg.append("rect").attr("width", this.width).attr("height", this.height).attr("fill", "transparent");
      listeningRect.on("mousemove", (e) => {
        const [xCoord] = pointer_default(e, this.svg.node());
        const bisectDate = bisector((d2) => d2.Date).left;
        const x0 = this.x.invert(xCoord);
        const i = bisectDate(data, x0, 1);
        const d0 = data[i - 1];
        const d1 = data[i];
        const d = x0 - d0.Date > d1.Date - x0 ? d1 : d0;
        const xPos = this.x(d.Date);
        const yPos = this.y(d.Close);
        circle.attr("cx", xPos).attr("cy", yPos);
        circle.transition().duration(50).attr("r", 5);
        tooltipLineX.style("display", "block").attr("x1", xPos).attr("x2", xPos).attr("y1", 0).attr("y2", this.height);
        tooltipLineY.style("display", "block").attr("y1", yPos).attr("y2", yPos).attr("x1", 0).attr("x2", this.width);
        tooltip.style("display", "block").style("left", `${this.width + 90}px`).style("top", `${yPos + 68}px`).html(`$${d.Close !== void 0 ? d.Close.toFixed(2) : "N/A"}`);
        tooltipRawDate.style("display", "block").style("left", `${xPos + 60}px`).style("top", `${this.height + 53}px`).html(`${d.Date !== void 0 ? d.Date.toISOString().slice(0, 10) : "N/A"}`);
        listeningRect.on("mouseleave", () => {
          circle.transition().duration(50).attr("r", 0);
          tooltip.style("display", "none");
          tooltipRawDate.style("display", "none");
          tooltipLineX.attr("x1", 0).attr("x2", 0);
          tooltipLineY.attr("y1", 0).attr("y2", 0);
          tooltipLineX.style("display", "none");
          tooltipLineY.style("display", "none");
        });
      });
    });
  }
};
_AreaExamleComponent.\u0275fac = function AreaExamleComponent_Factory(t) {
  return new (t || _AreaExamleComponent)();
};
_AreaExamleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaExamleComponent, selectors: [["app-area-examle"]], decls: 1, vars: 0, consts: [["id", "chart-container"]], template: function AreaExamleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0);
  }
}, styles: ["\n\n.chart-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 5px;\n  background-color: rgb(11, 40, 65);\n  color: white;\n  border: 0px solid white;\n  border-radius: 0px;\n  display: none;\n  opacity: 0.75;\n  font-size: 14px;\n}\n.tooltip-line[_ngcontent-%COMP%] {\n  stroke-opacity: 0.5;\n}\n/*# sourceMappingURL=area-examle.component.css.map */"] });
var AreaExamleComponent = _AreaExamleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaExamleComponent, { className: "AreaExamleComponent", filePath: "Modules\\pages\\monitoring\\components\\area-examle\\area-examle.component.ts", lineNumber: 10 });
})();

// Modules/pages/monitoring/components/d3chart/dummy_data.json
var data_mini = [{ cpuUsage: 60, memoryUsage: 36, diskUsage: 84 }, { cpuUsage: 52, memoryUsage: 70, diskUsage: 6 }, { cpuUsage: 50, memoryUsage: 53, diskUsage: 80 }, { cpuUsage: 31, memoryUsage: 47, diskUsage: 65 }, { cpuUsage: 82, memoryUsage: 70, diskUsage: 79 }, { cpuUsage: 28, memoryUsage: 72, diskUsage: 19 }, { cpuUsage: 25, memoryUsage: 29, diskUsage: 1 }, { cpuUsage: 47, memoryUsage: 89, diskUsage: 13 }, { cpuUsage: 2, memoryUsage: 47, diskUsage: 56 }, { cpuUsage: 89, memoryUsage: 22, diskUsage: 4 }];

// Modules/pages/monitoring/components/chart-tooltip/chart-tooltip.component.ts
var _c0 = ["cardRef"];
function ChartTooltipComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r2.key, " : ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.value);
  }
}
var _ChartTooltipComponent = class _ChartTooltipComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.data = "";
    this.dataArray = new Array();
    this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  }
  ngOnInit() {
    this.setData();
  }
  setData() {
    Object.entries(this.data).forEach(([key, value]) => {
      this.dataArray.push({ key, value });
    });
  }
  ngAfterViewInit() {
    const el = this.cardRef?.nativeElement;
    this.renderer.setStyle(el, "x", this.x);
    this.renderer.setStyle(el, "y", this.y);
    this.renderer.setStyle(el, "left", `${this.x + 20}px`);
    this.renderer.setStyle(el, "top", `${this.y + 50}px`);
  }
  onMouseMove(event) {
    this.x = event.clientX;
    this.y = event.clientY;
    const el = this.cardRef.nativeElement;
    this.renderer.setStyle(el, "left", `${this.x + 20}px`);
    this.renderer.setStyle(el, "top", `${this.y + 20}px`);
  }
};
_ChartTooltipComponent.\u0275fac = function ChartTooltipComponent_Factory(t) {
  return new (t || _ChartTooltipComponent)(\u0275\u0275directiveInject(Renderer2));
};
_ChartTooltipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartTooltipComponent, selectors: [["app-chart-tooltip"]], viewQuery: function ChartTooltipComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cardRef = _t.first);
  }
}, inputs: { data: "data", x: "x", y: "y" }, decls: 5, vars: 0, consts: [[1, "tooltip-content"], ["cardRef", ""]], template: function ChartTooltipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 0, 1)(2, "mat-card-content");
    \u0275\u0275repeaterCreate(3, ChartTooltipComponent_For_4_Template, 5, 2, "div", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.dataArray);
  }
}, dependencies: [MatCard, MatCardContent], styles: ['@charset "UTF-8";\n\n\n\n.tooltip-content[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  background-color: transparent;\n  -webkit-backdrop-filter: blur(40px);\n  backdrop-filter: blur(40px);\n}\n/*# sourceMappingURL=chart-tooltip.component.css.map */'] });
var ChartTooltipComponent = _ChartTooltipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartTooltipComponent, { className: "ChartTooltipComponent", filePath: "Modules\\pages\\monitoring\\components\\chart-tooltip\\chart-tooltip.component.ts", lineNumber: 8 });
})();

// Modules/pages/monitoring/components/d3chart/d3chart.component.ts
var _c02 = ["container"];
var _c1 = ["chart"];
var _D3chartComponent = class _D3chartComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.dataArray = new Array();
    this.width = 1e3;
    this.height = 500;
    this.marginTop = 70;
    this.marginRight = 60;
    this.marginLeft = 50;
    this.marginBottom = 80;
    this.xScale = band();
    this.yScale = linear();
  }
  ngOnInit() {
    this.dataArray = data_mini;
    this.getServerStatus();
  }
  getServerStatus() {
    this.visualizeData(data_mini);
  }
  visualizeData(dataArray) {
    this.svg = select_default("#chart").append("svg").attr("width", this.width).attr("height", this.height).style("background", "white").attr("transform", `translate(${this.marginLeft})`);
    this.xScale = band().domain(dataArray.map((data, i) => i.toString())).range([this.marginLeft, this.width - this.marginRight]);
    this.yScale = linear().domain([0, max(dataArray, (d) => Math.max(d.cpuUsage, d.memoryUsage, d.diskUsage))]).nice().range([this.height - this.marginBottom, this.marginTop]);
    const leftLimit = this.svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", this.width - this.marginLeft - this.marginRight).attr("height", this.height - this.marginTop - this.marginBottom).attr("x", this.marginLeft).attr("y", this.marginTop);
    this.barGroup = this.svg.append("g").attr("class", "bar-group").attr("clip-path", "url(#clip)");
    ["cpuUsage", "memoryUsage", "diskUsage"].forEach((key, index) => {
      this.bar = this.barGroup.selectAll(`.bar-${key}`).data(dataArray).enter().append("rect").attr("class", `bar-${key}`).style("stroke", "black").style("stroke-width", "0.5px").attr("x", (data, i) => this.xScale(i.toString()) + this.xScale.bandwidth() / 3 * index).attr("y", (d) => {
        return this.yScale(0);
      }).attr("width", this.xScale.bandwidth() / 3).attr("height", 0).attr("fill", "white").on("mouseover", (d) => this.barOver(d)).on("mouseout", (d) => this.barOut(d)).transition().duration(500).attr("fill", ["red", "green", "blue"][index]).attr("y", (d) => this.yScale(d[key])).attr("height", (d) => this.height - this.marginBottom - this.yScale(d[key]));
    });
    this.xAxis = axisBottom(this.xScale);
    this.yAxis = axisLeft(this.yScale);
    this.gx = this.svg.append("g").attr("class", "x-axis").attr("transform", `translate(0,${this.height - this.marginBottom})`).call(this.xAxis);
    this.gy = this.svg.append("g").attr("class", "y-axis").attr("yscale-margin", "margin-left:20px").attr("transform", `translate(${this.marginLeft},0)`).call(this.yAxis);
    this.line = line_default().x((d, i) => this.xScale(i.toString()) + this.xScale.bandwidth() / 2).y((d, index) => this.yScale(d.memoryUsage));
    this.path = this.svg.append("path").datum(dataArray).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2).attr("d", this.line).attr("class", "line").attr("clip-path", "url(#clip)");
    const totalLength = this.path.node()?.getTotalLength();
    console.log("\uAE38\uC774 ", this.path.node());
    this.path.attr("stroke-dashoffset", totalLength).transition();
    this.dots = this.svg.selectAll(".dot").data(dataArray).enter().append("circle").attr("class", "dot").attr("cx", (d, index) => this.xScale(index.toString()) + this.xScale.bandwidth() / 2).attr("cy", (d) => this.yScale(d.memoryUsage)).attr("r", 5).attr("fill", "black").attr("clip-path", "url(#clip)");
    const legendData = ["CPU Usage", "Memory Usage", "Disk Usage"];
    const colorScale = ordinal().domain(legendData).range(["red", "green", "blue"]);
    const legendPadding = 5;
    const legendWidth = 150;
    const legendHeight = legendData.length * 20 + legendPadding * 2;
    const legendContainer = this.svg.append("g").attr("class", "legend-container").attr("transform", `translate(${this.width - this.marginRight - legendWidth}, ${this.marginTop})`);
    const legend = legendContainer.selectAll(".legend").data(legendData).enter().append("g").attr("class", "legend").attr("transform", (d, i) => `translate(0, ${i * 20})`);
    const rectangleWidth = 18;
    const rectangleHeight = 18;
    legend.append("rect").attr("x", 0).attr("y", 0).attr("width", rectangleWidth).attr("height", rectangleHeight).style("fill", (d) => colorScale(d)).style("stroke", "black").style("stroke-width", "0.5px");
    legend.append("text").attr("x", rectangleWidth + legendPadding).attr("y", 9).attr("dy", ".35em").style("fill", "black").style("text-anchor", "start").text((d) => d);
    this.svg.append("rect").attr("class", "legend-border").attr("x", this.width - this.marginRight - legendWidth - legendPadding).attr("y", this.marginTop - legendPadding).attr("width", legendWidth).attr("height", legendHeight).style("fill", "none").style("stroke", "black").style("stroke-width", "0.5px");
    const zoom = zoom_default().scaleExtent([1, 8]).translateExtent([
      [this.marginLeft, this.marginTop],
      [this.width - this.marginRight, this.height - this.marginTop]
    ]).on("zoom", (event) => this.zoomed(event));
    this.svg.call(zoom);
  }
  zoomed(event) {
    console.log(event);
    this.xScale.range([this.marginLeft, this.width - this.marginRight].map((d) => {
      console.log("dd", event.transform.applyX(d));
      return event.transform.applyX(d);
    }));
    ["cpuUsage", "memoryUsage", "diskUsage"].forEach((key, index) => {
      this.barGroup.selectAll(`.bar-${key}`).attr("x", (d, i) => this.xScale(i.toString()) + this.xScale.bandwidth() / 3 * index).attr("width", this.xScale.bandwidth() / 3);
    });
    this.line = line_default().x((d, i) => this.xScale(i.toString()) + this.xScale.bandwidth() / 2).y((d, index) => this.yScale(d.memoryUsage));
    this.path.attr("d", this.line);
    this.dots.attr("cx", (d, index) => this.xScale(index.toString()) + this.xScale.bandwidth() / 2).attr("cy", (d) => this.yScale(d.memoryUsage));
    this.svg.selectAll(".x-axis").transition().duration(500).call(this.xAxis);
  }
  dragEnd(event) {
    console.log("end", event);
    const x0 = event.subject.x;
    const x1 = event.x;
    const newDomain = this.xScale.domain().filter((d, i) => {
      const xStartValue = this.xScale(i.toString());
      const xEndValue = xStartValue + this.xScale.bandwidth();
      return x0 <= xEndValue && x1 >= xStartValue;
    });
    const newArray = this.dataArray.slice(Number(newDomain[0]), Number(newDomain[-1]));
    this.xScale.domain(newDomain);
    ["cpuUsage", "memoryUsage", "diskUsage"].forEach((key, index) => {
      this.barGroup.selectAll(`.bar-${key}`).attr("x", (d, i) => {
        console.log("dd/", this.xScale(i.toString()));
        console.log("ss/", this.xScale.bandwidth() / 3);
        return this.xScale(i.toString()) + this.xScale.bandwidth() / 3 * index;
      }).attr("width", this.xScale.bandwidth() / 3);
    });
    this.svg.selectAll(".x-axis").transition().duration(500).call(this.xAxis);
  }
  barOver(event) {
    select_default(event.target).style("opacity", 0.5);
    const instance = this.container.createComponent(ChartTooltipComponent).instance;
    instance.x = event.clientX;
    instance.y = event.clientY;
    instance.data = event.target.__data__;
  }
  barOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  brushed(event) {
    console.log("\uB4DC\uB798\uADF8\uC2DC\uC791", event);
  }
  brushedEnd(event) {
    console.log("\uB4DC\uB798\uADF8 \uB05D", event);
    const selection = event.selection;
    if (selection === null)
      return;
    const [x0, x1] = selection.map((d) => {
      return d;
    });
    const selectedData = this.dataArray.filter((d, i) => {
      const xStartValue = this.xScale(i.toString());
      const xEndValue = xStartValue + this.xScale.bandwidth();
      return x0 <= xEndValue && x1 >= xStartValue;
    });
    console.log(selectedData);
    this.updateChart(selectedData);
  }
  updateChart(newArray) {
  }
};
_D3chartComponent.\u0275fac = function D3chartComponent_Factory(t) {
  return new (t || _D3chartComponent)(\u0275\u0275directiveInject(Renderer2));
};
_D3chartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _D3chartComponent, selectors: [["app-d3chart"]], viewQuery: function D3chartComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5, ViewContainerRef);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
  }
}, decls: 4, vars: 0, consts: [["id", "chart"], ["chart", ""], ["container", ""]], template: function D3chartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0, 1);
    \u0275\u0275elementContainer(2, null, 2);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=d3chart.component.css.map */"] });
var D3chartComponent = _D3chartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(D3chartComponent, { className: "D3chartComponent", filePath: "Modules\\pages\\monitoring\\components\\d3chart\\d3chart.component.ts", lineNumber: 11 });
})();

// Modules/pages/monitoring/components/month-picker/month-picker.component.ts
var _MonthPickerComponent = class _MonthPickerComponent {
  constructor(store) {
    this.store = store;
    this.picker = DateTime.now();
  }
  getLast() {
    this.store.dispatch(monthUpdteAction({ month: this.picker.minus({ month: 1 }) }));
  }
  getNext() {
    this.store.dispatch(monthUpdteAction({ month: this.picker.plus({ month: 1 }) }));
  }
  ngOnInit() {
    this.month = this.store.select(selectMonth).pipe(map((month) => {
      this.picker = month;
      return month.toFormat("MMM");
    }));
  }
};
_MonthPickerComponent.\u0275fac = function MonthPickerComponent_Factory(t) {
  return new (t || _MonthPickerComponent)(\u0275\u0275directiveInject(Store));
};
_MonthPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonthPickerComponent, selectors: [["app-month-picker"]], decls: 10, vars: 3, consts: [[1, "container"], [3, "click"], [1, "arrow-left"], [1, "month-text"], [1, "arrow-right"]], template: function MonthPickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function MonthPickerComponent_Template_button_click_1_listener() {
      return ctx.getLast();
    });
    \u0275\u0275elementStart(2, "mat-icon", 2);
    \u0275\u0275text(3, "arrow_back_ios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 1);
    \u0275\u0275listener("click", function MonthPickerComponent_Template_button_click_7_listener() {
      return ctx.getNext();
    });
    \u0275\u0275elementStart(8, "mat-icon", 4);
    \u0275\u0275text(9, "arrow_forward_ios");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, ctx.month));
  }
}, dependencies: [MatIcon, AsyncPipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px #d9d9e3 solid;\n  border-radius: 10%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.arrow-left[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.arrow-right[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=month-picker.component.css.map */"] });
var MonthPickerComponent = _MonthPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonthPickerComponent, { className: "MonthPickerComponent", filePath: "Modules\\pages\\monitoring\\components\\month-picker\\month-picker.component.ts", lineNumber: 14 });
})();

// Modules/pages/monitoring/components/monitoring-layout/usage-toolbar/usage-toolbar.component.ts
var _UsageToolbarComponent = class _UsageToolbarComponent {
};
_UsageToolbarComponent.\u0275fac = function UsageToolbarComponent_Factory(t) {
  return new (t || _UsageToolbarComponent)();
};
_UsageToolbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageToolbarComponent, selectors: [["app-usage-toolbar"]], decls: 17, vars: 1, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "", 3, "checked"], ["value", "italic"], ["value", "underline"], [1, "example-spacer"], ["mat-raised-button", "", "color", "warn", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function UsageToolbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-toolbar")(2, "mat-toolbar-row")(3, "span");
    \u0275\u0275text(4, "Usage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-toolbar-row")(6, "mat-button-toggle-group", 0)(7, "mat-button-toggle", 1);
    \u0275\u0275text(8, "Page View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-button-toggle", 2);
    \u0275\u0275text(10, "Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-button-toggle", 3);
    \u0275\u0275text(12, "Server Health");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "span", 4)(14, "app-month-picker");
    \u0275\u0275elementStart(15, "button", 5);
    \u0275\u0275text(16, " export ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("checked", true);
  }
}, dependencies: [MatToolbar, MatToolbarRow, MatButton, MatButtonToggleGroup, MatButtonToggle, MonthPickerComponent], styles: ["\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=usage-toolbar.component.css.map */"] });
var UsageToolbarComponent = _UsageToolbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageToolbarComponent, { className: "UsageToolbarComponent", filePath: "Modules\\pages\\monitoring\\components\\monitoring-layout\\usage-toolbar\\usage-toolbar.component.ts", lineNumber: 8 });
})();

// Modules/pages/monitoring/components/chart/chart.component.ts
var _c03 = ["chartContainer"];
var _ChartComponent = class _ChartComponent {
  constructor(elRef, store) {
    this.elRef = elRef;
    this.store = store;
    this.isLoading = true;
    this.event = new EventEmitter();
  }
  ngOnInit() {
    this.initData();
  }
  initData() {
    this.monthSubscription = this.store.select(selectMonth).subscribe({
      next: (month) => {
        this.isLoading = true;
        this.month = month;
        this.chart.removeChart();
        this.store.dispatch(pvAction());
      }
    });
    this.pvDataSubscription = this.store.select(selectPageView).pipe(filter((pvData) => {
      return pvData.length > 0;
    })).subscribe({
      next: (pvData) => {
        this.isLoading = false;
        this.chart.setInterval(this.month);
        this.chart.refineData(pvData, this.path);
        this.chart.drawChart();
      }
    });
  }
  ngOnDestroy() {
    this.monthSubscription.unsubscribe();
    this.pvDataSubscription.unsubscribe();
  }
};
_ChartComponent.\u0275fac = function ChartComponent_Factory(t) {
  return new (t || _ChartComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Store));
};
_ChartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChartComponent, selectors: [["app-chart"]], viewQuery: function ChartComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c03, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, inputs: { chart: "chart", path: "path" }, outputs: { event: "event" }, decls: 12, vars: 5, consts: [[1, "example-card"], [1, "graph-title"], ["id", "chart"], ["chartContainer", ""]], template: function ChartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "mat-card", 0)(2, "mat-card-header")(3, "mat-card-title")(4, "div", 1)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-card-content")(9, "div", 2);
    \u0275\u0275elementContainer(10, null, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx.path, " request ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx.isLoading ? "skeleton skeleton-title" : "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx.isLoading ? "skeleton skeleton-graph" : "");
  }
}, dependencies: [MatCard, MatCardContent, MatCardHeader, MatCardTitle], styles: ['@charset "UTF-8";\n\n\n\n.container[_ngcontent-%COMP%] {\n  min-width: 500px;\n  margin: 10px;\n}\n.skeleton[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  animation: _ngcontent-%COMP%_skeleton-loading 1s linear infinite alternate;\n}\n.skeleton-title[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-top: 7px;\n  width: 3em;\n  height: 1em;\n}\n.skeleton-graph[_ngcontent-%COMP%] {\n  width: 460px;\n  height: 300px;\n  margin-bottom: 0.25rem;\n  border-radius: 0.25rem;\n}\n.graph-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n}\n@keyframes _ngcontent-%COMP%_skeleton-loading {\n  0% {\n    background-color: hsl(200, 20%, 70%);\n  }\n  100% {\n    background-color: hsl(200, 20%, 95%);\n  }\n}\n/*# sourceMappingURL=chart.component.css.map */'] });
var ChartComponent = _ChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChartComponent, { className: "ChartComponent", filePath: "Modules\\pages\\monitoring\\components\\chart\\chart.component.ts", lineNumber: 15 });
})();

// Modules/pages/monitoring/components/chart/classes/chart.abstract.ts
var Chart = class {
  constructor(container, elementRef) {
    this.container = container;
    this.elementRef = elementRef;
    this.margin = {
      top: 10,
      right: 30,
      bottom: 60,
      left: 30
    };
    this.width = 460 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.svg = {};
    this.g = {};
    this.shapes = {};
    this.x = {};
    this.y = {};
    this.subX = {};
    this.xAxis = {};
    this.yAxis = {};
    this.groups = [];
    this.subgroups = [];
    this.interval = [];
    this.yGridline = {};
  }
  createSvg() {
    this.svg = select_default(this.elementRef).select("#chart").append("svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom);
  }
  setZoom() {
    this.svg.call(this.zoom.bind(this));
  }
  setMouseOver(selection) {
    selection.on("mouseover", (d) => this.mouseOver(d));
  }
  setMouseMove(selection) {
    selection.on("mousemove", (d) => this.mouseMove(d));
  }
  setMouseOut(selection) {
    selection.on("mouseout", (d) => this.mouseOut(d));
  }
  drawGrid() {
    this.yGridline = selectAll_default("g.y-axis g.tick").append("line").attr("class", "gridline").attr("x1", 0).attr("y1", 0).attr("x2", this.width).attr("y2", 0).attr("stroke", "#cde8d4").attr("stroke-dash", "4");
  }
  removeChart() {
    if (Object.keys(this.svg).length > 0) {
      this.svg.remove();
    }
  }
  setInterval(month) {
    this.interval = Interval.fromDateTimes(month.startOf("month"), month.endOf("month")).splitBy({
      day: 1
    }).map((date) => date.start?.toISODate());
  }
};

// Modules/pages/monitoring/components/chart/classes/bar-chart.class.ts
var BarChart = class extends Chart {
  drawChart() {
    this.createSvg();
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left},${this.margin.top})`);
    const defs = this.g.append("defs");
    defs.append("clipPath").attr("id", "clip").append("rect").attr("width", this.width).attr("height", this.height);
    const translateValue = [-30, 0];
    defs.append("clipPath").attr("id", "stack-clip").append("rect").attr("width", this.width + translateValue[0]).attr("height", this.height).attr("transform", `translate(${translateValue[0]},0)`);
    const interval = this.interval;
    this.y = linear().domain([0, max(this.data, (d) => Number(d.requests)) ?? 10]).nice().range([this.height, 0]).nice();
    this.g.append("g").attr("class", "y-axis").call(axisLeft(this.y)).style("font-family", "Pretendard-Regular");
    this.x = band().domain(interval).range([0, this.width]).padding(0.2);
    this.xAxis = axisBottom(this.x).tickSizeOuter(0);
    this.g.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${this.height})`).attr("clip-path", "url(#clip)").call(this.xAxis).selectAll("text").attr("transform", "translate(-10,0)rotate(-60)").style("text-anchor", "end").style("font-family", "Pretendard-Regular");
    this.shapes = this.g.selectAll(".mybar").data(this.data).join("rect").attr("clip-path", "url(#clip)").attr("class", "mybar").attr("x", (d) => this.x(d.date)).attr("y", (d) => this.height).attr("width", this.x.bandwidth()).attr("height", (d) => this.height - this.y(d.requests)).attr("fill", "#69b3a2");
    this.shapes.transition().duration(500).attr("y", (d) => this.y(d.requests));
    this.setZoom();
    this.setMouseOver(this.shapes);
    this.setMouseMove(this.shapes);
    this.setMouseOut(this.shapes);
    this.drawGrid();
  }
  zoom(svg) {
    const extent2 = [[0, this.margin.top], [this.width, this.height - this.margin.top]];
    svg.call(zoom_default().scaleExtent([1, 8]).translateExtent(extent2).extent(extent2).on("zoom", this.zoomed.bind(this)));
  }
  zoomed(event) {
    this.x.range([0, this.width].map((d) => event.transform.applyX(d)));
    this.svg.selectAll(".mybar").attr("x", (d) => {
      return this.x(d.date);
    }).attr("width", this.x.bandwidth());
    this.svg.selectAll(".x-axis").call(this.xAxis);
  }
  mouseOver(event) {
    select_default(event.target).style("opacity", 0.5);
    this.tooltip = this.container.createComponent(ChartTooltipComponent).instance;
    this.tooltip.x = event.clientX;
    this.tooltip.y = event.clientY;
    this.tooltip.data = event.target.__data__;
  }
  mouseMove(event) {
    this.tooltip.onMouseMove(event);
  }
  mouseOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  refineData(data, url) {
    this.data = data.filter((d) => d.url === url) ?? [];
    return data.filter((d) => d.url === url);
  }
};

// Modules/pages/monitoring/components/chart/classes/grouped-bar.class.ts
var GroupedBarChart = class extends Chart {
  // subgroup: Array<any> = [];
  drawChart() {
    this.createSvg();
    this.svg.call(this.zoom.bind(this));
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    this.g.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", this.width).attr("height", this.height);
    const interval = this.interval;
    const y = linear().domain([0, max(this.originalData, (d) => Number(d.requests))]).range([this.height, 0]).nice();
    this.g.append("g").attr("class", "y-axis").call(axisLeft(y)).style("font-family", "Pretendard-Regular");
    this.x = band().domain(interval).range([0, this.width]).padding(0.2);
    this.xAxis = axisBottom(this.x).tickSizeOuter(0);
    this.g.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${this.height})`).attr("clip-path", "url(#clip)").call(this.xAxis).selectAll("text").attr("transform", "translate(-10,0)rotate(-60)").style("text-anchor", "end").style("font-family", "Pretendard-Regular");
    this.subX = band().domain(this.subgroups).range([0, this.x.bandwidth()]).padding(0.05);
    const color = ordinal().domain(this.subgroups).range(category10_default);
    this.g.append("g").attr("clip-path", "url(#clip)").selectAll("g").data(this.data).join("g").attr("class", "bar-group").attr("transform", (d) => {
      return `translate(${this.x(d.date)}, 0)`;
    }).selectAll("rect").data((d, i) => {
      return this.subgroups.map((key) => {
        return { key, value: d[key] };
      });
    }).join("rect").attr("class", "mybar").attr("x", (d) => {
      return this.subX(d.key);
    }).attr("y", (d) => this.height).attr("width", this.subX.bandwidth()).attr("height", (d) => 0).attr("fill", (d) => color(d.key)).on("mouseover", (d) => this.mouseOver(d)).on("mousemove", (d) => this.mouseMove(d)).on("mouseout", (d) => this.mouseOut(d));
    this.g.selectAll(".mybar").transition().duration(300).attr("y", (d) => {
      return y(d.value);
    }).attr("height", (d) => this.height - y(d.value)).delay((d, i) => i * 10);
    const legendPosition = {
      x: this.width - this.margin.right * 1.5,
      y: this.margin.top
    };
    const size = 20;
    const legendGroup = this.svg.append("g").attr("opacity", 0.5);
    legendGroup.selectAll("mydots").data(this.subgroups).enter().append("rect").attr("x", legendPosition.x).attr("y", function(d, i) {
      return legendPosition.y + i * (size + 5);
    }).attr("width", size).attr("height", size).style("fill", function(d) {
      return color(d);
    });
    legendGroup.selectAll("mylabels").data(this.subgroups).join("text").attr("x", legendPosition.x + size * 1.2).attr("y", function(d, i) {
      return legendPosition.y + i * (size + 5) + size / 2;
    }).style("fill", function(d) {
      return color(d);
    }).text(function(d) {
      return d;
    }).attr("text-anchor", "left").style("alignment-baseline", "middle");
    this.drawGrid();
  }
  zoom(svg) {
    const extent2 = [[0, this.margin.top], [this.width, this.height - this.margin.top]];
    svg.call(zoom_default().scaleExtent([1, 15]).translateExtent(extent2).extent(extent2).on("zoom", this.zoomed.bind(this)));
  }
  zoomed(event) {
    this.x.range([0, this.width].map((d) => event.transform.applyX(d)));
    this.subX.rangeRound([0, this.x.bandwidth()]);
    this.svg.selectAll(".bar-group").attr("transform", (d) => {
      return `translate(${this.x(d.date)},0)`;
    });
    this.svg.selectAll(".mybar").attr("x", (d) => {
      return this.subX(d.key);
    }).attr("width", this.subX.bandwidth());
    this.svg.selectAll(".x-axis").call(this.xAxis);
  }
  mouseOver(event) {
    select_default(event.target).style("opacity", 0.5);
    this.tooltip = this.container.createComponent(ChartTooltipComponent).instance;
    this.tooltip.x = event.clientX;
    this.tooltip.y = event.clientY;
    this.tooltip.data = event.target.__data__;
  }
  mouseMove(event) {
    this.tooltip.onMouseMove(event);
  }
  mouseOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  refineData(data, url) {
    this.originalData = data;
    const check = /* @__PURE__ */ new Set();
    this.subgroups = data.filter((d) => {
      const cur = d.url;
      const exist = check.has(cur);
      check.add(cur);
      return !exist;
    }).map((d) => {
      return d.url === void 0 || d.url === "" ? "main" : d.url;
    });
    this.data = data.reduce((acc, cur) => {
      const existing = acc.find((d) => d.date === cur.date);
      const curUrl = cur.url === "" ? "main" : cur.url;
      if (existing) {
        existing[curUrl] = parseInt(cur.requests, 10);
      } else {
        const newItem = { date: cur.date, [curUrl]: parseInt(cur.requests, 10) };
        acc.push(newItem);
      }
      return acc;
    }, []);
    this.data = this.data.map((item) => {
      this.subgroups.forEach((url2) => {
        if (!item[url2]) {
          item[url2] = 0;
        }
      });
      return item;
    });
    this.sortDataByDate(this.data);
  }
  sortDataByDate(data) {
    return data.sort((a, b) => {
      const dateA = DateTime.fromISO(a.date);
      const dateB = DateTime.fromISO(b.date);
      return dateA.toMillis() - dateB.toMillis();
    });
  }
  // 선택한 달의 날짜 배열 구하기
  getIntervalDays(start, end) {
    return Interval.fromDateTimes(start.minus({ month: 1 }).startOf("month"), end.minus({ month: 1 }).endOf("month")).splitBy({
      day: 1
    }).map((date) => date.start?.toISODate());
  }
};

// Modules/pages/monitoring/components/chart/classes/donut-chart.class.ts
var DonutChart = class extends Chart {
  drawChart() {
    const margin = 10;
    const radius = Math.max(this.width, this.height) / 2 - margin;
    const total = sum(Object.values(this.data));
    const color = ordinal(category10_default);
    const pie = pie_default().value((d) => d[1]).padAngle(0.02).sort(null);
    const dataReady = pie(Object.entries(this.data));
    this.createSvg();
    this.g = this.svg.append("g").attr("transform", `translate(${this.width / 2 - 20}, ${this.height / 2})`);
    const arc = arc_default().innerRadius(radius * 0.5).outerRadius(radius * 0.8).cornerRadius(3);
    const arcAny = arc;
    const duration = 100;
    this.shapes = this.g.selectAll(".donut-arc").data(dataReady, (d) => d.id).join("path").attr("class", "donut-arc").attr("fill", (d) => color(d.data[0])).style("stroke-width", "1px");
    this.shapes.transition().delay((d, i) => i * duration).duration(duration).attrTween("d", (d) => {
      const i = value_default(d.startAngle, d.endAngle);
      return (t) => {
        d.endAngle = i(t);
        return arcAny(d);
      };
    });
    this.svg.append("text").attr("text-anchor", "middle").text("Total Request").style("font-size", "1.5em").attr("transform", "translate(" + (this.width / 2 - 20) + "," + (this.height / 2 - 20) + ")").transition().duration(500).attr("fill-opacity", 0.6);
    this.svg.append("text").attr("text-anchor", "middle").text(total).style("font-size", "2em").attr("transform", "translate(" + (this.width / 2 - 20) + "," + (this.height / 2 + 20) + ")").transition().duration(500).attr("fill-opacity", 0.6);
    const legendStart = this.width - 30;
    this.svg.append("g").attr("class", "donut-legend-circle").selectAll("mydots").data(this.subgroups).join("circle").attr("cx", legendStart).attr("cy", (d, i) => 20 + i * 25).attr("r", 7).style("fill", (d) => color(d));
    this.svg.append("g").attr("class", "donut-legend-labels").selectAll("mylabels").data(this.subgroups).join("text").attr("x", legendStart + 10).attr("y", (d, i) => 20 + i * 25).style("fill", (d) => color(d)).text((d) => d).attr("text-anchor", "left").style("alignment-baseline", "middle").style("font-family", "Pretendard-Regular");
    this.setMouseOver(this.shapes);
    this.setMouseMove(this.shapes);
    this.setMouseOut(this.shapes);
  }
  zoom(svg) {
    throw new Error("Method not implemented.");
  }
  zoomed(event) {
    throw new Error("Method not implemented.");
  }
  mouseOver(event) {
    select_default(event.target).style("opacity", 0.5);
    this.tooltip = this.container.createComponent(ChartTooltipComponent).instance;
    this.tooltip.x = event.clientX;
    this.tooltip.y = event.clientY;
    const tooltipData = { [event.target.__data__.data[0]]: event.target.__data__.data[1] };
    this.tooltip.data = tooltipData;
  }
  mouseMove(event) {
    this.tooltip.onMouseMove(event);
  }
  mouseOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  refineData(data, url) {
    data.filter((d) => d.url === "").map((d) => {
      d.url = "main";
      return d;
    });
    this.data = data.reduce((acc, cur) => {
      const curUrl = cur.url.split("-")[0];
      acc[curUrl] ? acc[curUrl] = acc[curUrl] + parseInt(cur.requests) : acc[curUrl] = parseInt(cur.requests);
      return acc;
    }, {});
    this.subgroups = Object.keys(this.data);
  }
};

// Modules/pages/monitoring/components/chart/classes/stack-bar.class.ts
var StackBarChart = class extends Chart {
  drawChart() {
    this.createSvg();
    this.svg.call(this.zoom.bind(this));
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    const defs = this.g.append("defs");
    defs.append("clipPath").attr("id", "clip").append("rect").attr("width", this.width).attr("height", this.height);
    const translateValue = [0, 0];
    defs.append("clipPath").attr("id", "stack-clip").append("rect").attr("width", this.width).attr("height", this.height).attr("transform", `translate(${translateValue[0]},0)`);
    const interval = this.interval;
    this.y = linear().domain([0, max(this.originalData, (d) => Number(d.requests))]).range([this.height, 0]).nice();
    this.yAxis = axisLeft(this.y);
    const y = this.g.append("g").attr("class", "y-axis").call(this.yAxis).style("font-family", "Pretendard-Regular");
    this.x = band().domain(interval).range([0, this.width]).padding(0.2);
    this.xAxis = axisBottom(this.x).tickSizeOuter(0);
    this.g.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${this.height})`).attr("clip-path", "url(#clip)").call(this.xAxis).selectAll("text").attr("transform", "translate(-10,0)rotate(-60)").attr("text-anchor", "end").style("font-family", "Pretendard-Regular");
    const color = ordinal().domain(this.subgroups).range(category10_default);
    const stackedData = stack_default().keys(this.subgroups)(this.data);
    this.g.append("g").attr("clip-path", "url(#clip)").selectAll("g").data(stackedData).join("g").attr("fill", (d) => color(d.key)).selectAll("rect").data((d) => d).join("rect").attr("class", "mybar").attr("x", (d) => this.x(d.data.date)).attr("y", (d) => this.height).attr("width", this.x.bandwidth()).on("mouseover", (d) => this.mouseOver(d)).on("mousemove", (d) => this.mouseMove(d)).on("mouseout", (d) => this.mouseOut(d)).transition().duration(800).attr("y", (d) => this.y(d[1])).attr("height", (d) => {
      return this.y(d[0]) - this.y(d[1]);
    });
    this.drawGrid();
  }
  zoom(svg) {
    const extent2 = [[0, 0], [this.width, this.height]];
    svg.call(zoom_default().scaleExtent([1, 8]).translateExtent(extent2).extent(extent2).on("zoom", this.zoomed.bind(this)));
  }
  zoomed(event) {
    this.x.range([0, this.width].map((d) => event.transform.applyX(d)));
    this.y.range([this.height, 0].map((d) => event.transform.applyY(d)));
    this.svg.selectAll(".mybar").attr("y", (d) => {
      return this.y(d[1]);
    }).attr("height", (d) => this.y(d[0]) - this.y(d[1]));
    this.svg.selectAll(".mybar").attr("x", (d) => {
      return this.x(d.data.date);
    }).attr("width", this.x.bandwidth());
    this.svg.selectAll(".y-axis").call(this.yAxis);
    this.svg.selectAll(".x-axis").call(this.xAxis);
  }
  mouseOver(event) {
    select_default(event.target).style("opacity", 0.5);
    this.tooltip = this.container.createComponent(ChartTooltipComponent).instance;
    this.tooltip.x = event.clientX;
    this.tooltip.y = event.clientY;
    const parentNode = select_default(event.target).node().parentNode;
    const data = select_default(parentNode).datum();
    const subgroupName = data.key;
    const subgroupValue = event.target.__data__.data[subgroupName];
    this.tooltip.data = { [subgroupName]: subgroupValue };
  }
  mouseMove(event) {
    this.tooltip.onMouseMove(event);
  }
  mouseOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  refineData(data, url) {
    this.originalData = data;
    const check = /* @__PURE__ */ new Set();
    this.subgroups = data.filter((d) => {
      const cur = d.url;
      const exist = check.has(cur);
      check.add(cur);
      return !exist;
    }).map((d) => {
      return d.url === void 0 || d.url === "" ? "main" : d.url;
    });
    this.data = data.reduce((acc, cur) => {
      const existing = acc.find((d) => d.date === cur.date);
      const curUrl = cur.url === "" ? "main" : cur.url;
      if (existing) {
        existing[curUrl] = parseInt(cur.requests, 10);
      } else {
        const newItem = { date: cur.date, [curUrl]: parseInt(cur.requests, 10) };
        acc.push(newItem);
      }
      return acc;
    }, []);
    this.data = this.data.map((item) => {
      this.subgroups.forEach((url2) => {
        if (!item[url2]) {
          item[url2] = 0;
        }
      });
      return item;
    });
    this.sortDataByDate(this.data);
  }
  sortDataByDate(data) {
    return data.sort((a, b) => {
      const dateA = DateTime.fromISO(a.date);
      const dateB = DateTime.fromISO(b.date);
      return dateA.toMillis() - dateB.toMillis();
    });
  }
  // 선택한 달의 날짜 배열 구하기
  getIntervalDays(start, end) {
    return Interval.fromDateTimes(start.startOf("month"), end.endOf("month")).splitBy({
      day: 1
    }).map((date) => date.start?.toISODate());
  }
};

// Modules/pages/monitoring/components/chart/classes/horisontal-stack-bar.class.ts
var HorizontalStackBar = class extends Chart {
  constructor() {
    super(...arguments);
    this.stackX = {};
    this.stackY = {};
    this.stackYAxis = {};
    this.stackXAxis = {};
  }
  drawChart() {
    this.margin.left = this.margin.left + 15;
    this.svg = select_default(this.elementRef).select("#chart").append("svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom).call(this.zoom.bind(this));
    this.g = this.svg.append("g").attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
    this.g.append("defs").append("clipPath").attr("id", "stacked-bar-clip").append("rect").attr("width", this.width).attr("height", this.height);
    csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv").then((data) => {
      const subgroups = data.columns.slice(1);
      this.groups = data.map((d) => {
        return d.group;
      });
      this.stackY = band().domain(this.groups).range([this.height, 0]).padding(0.2);
      this.stackYAxis = axisLeft(this.stackY).tickSizeOuter(0);
      this.stackX = linear().domain([0, 60]).range([0, this.width]);
      this.stackXAxis = axisBottom(this.stackX);
      this.g.append("g").attr("class", "x-axis").attr("clip-path", "url(#stacked-bar-clip)").attr("transform", `translate(0, ${this.height})`).call(this.stackXAxis);
      this.g.append("g").call(this.stackYAxis).selectAll("text").attr("transform", `translate(-15,0)`).style("text-anchor", "middle");
      const color = ordinal().domain(subgroups).range(["#e41a1c", "#377eb8", "#4daf4a"]);
      const stackedData = stack_default().keys(subgroups)(data);
      console.log("stackedData", stackedData);
      this.g.append("g").attr("class", "stacked-bar").attr("clip-path", "url(#stacked-bar-clip)").selectAll(".stacked-bar").data(stackedData).join("g").attr("fill", (d) => color(d.key)).selectAll("rect").data((d) => d).join("rect").attr("class", "mybar").attr("x", (d) => {
        return this.stackX(d[0]);
      }).attr("y", (d) => this.stackY(d.data.group)).attr("height", this.stackY.bandwidth()).attr("width", (d) => this.stackX(d[1]) - this.stackX(d[0])).on("mouseover", (d) => this.mouseOver(d)).on("mousemove", (d) => this.mouseMove(d)).on("mouseout", (d) => this.mouseOut(d));
    });
  }
  zoom(svg) {
    const extent2 = [[0, this.margin.top], [this.width - this.margin.right, this.height - this.margin.top]];
    svg.call(zoom_default().scaleExtent([1, 8]).translateExtent(extent2).extent(extent2).on("zoom", this.zoomed.bind(this)));
  }
  zoomed(event) {
    this.stackX.range([0, this.width - this.margin.right].map((d) => event.transform.applyX(d)));
    this.svg.selectAll(".mybar").attr("x", (d) => {
      return this.stackX(d[0]);
    }).attr("width", (d) => this.stackX(d[1]) - this.stackX(d[0]));
    this.svg.selectAll(".x-axis").call(this.stackXAxis);
  }
  mouseOver(event) {
    select_default(event.target).style("opacity", 0.5);
    this.tooltip = this.container.createComponent(ChartTooltipComponent).instance;
    this.tooltip.x = event.clientX;
    this.tooltip.y = event.clientY;
    const parentNode = select_default(event.target).node().parentNode;
    const data = select_default(parentNode).datum();
    const subgroupName = data.key;
    const subgroupValue = event.target.__data__.data[subgroupName];
    this.tooltip.data = { [subgroupName]: subgroupValue };
  }
  mouseMove(event) {
    this.tooltip.onMouseMove(event);
  }
  mouseOut(event) {
    select_default(event.target).style("opacity", 1);
    this.container.clear();
  }
  refineData(data, url) {
  }
};

// Modules/pages/monitoring/monitoring.service.ts
var _MonitoringService = class _MonitoringService {
  constructor(http) {
    this.http = http;
    this.data$ = new BehaviorSubject({});
  }
  getData() {
    return this.http.get(this.baseUrl + "/pv");
  }
};
_MonitoringService.\u0275fac = function MonitoringService_Factory(t) {
  return new (t || _MonitoringService)(\u0275\u0275inject(HttpClient));
};
_MonitoringService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MonitoringService, factory: _MonitoringService.\u0275fac, providedIn: "root" });
var MonitoringService = _MonitoringService;
__decorate([
  initPath("monitoring")
], MonitoringService.prototype, "baseUrl", void 0);

// Modules/pages/monitoring/components/monitoring-layout/usage-graph/usage-graph.component.ts
var _c04 = ["container"];
var _UsageGraphComponent = class _UsageGraphComponent {
  constructor(monitoringService, store) {
    this.monitoringService = monitoringService;
    this.store = store;
  }
  ngOnInit() {
    this.drawChart("login");
    this.drawChart("monitoring");
    this.drawGroup();
    this.drawStack();
    this.drawDonut();
  }
  // initData(){
  // this.monitoringService.getData().subscribe({
  //   next: d => {
  //     console.log('데이터', d);
  //     this.monitoringService.data$.next(d);
  //   }
  // });
  // }
  drawChart(path) {
    const componentRef = this.container.createComponent(ChartComponent);
    const instance = componentRef.instance;
    const barChart = new BarChart(instance.container, instance.elRef.nativeElement);
    componentRef.setInput("chart", barChart);
    componentRef.setInput("path", path);
  }
  drawGroup() {
    const componentRef = this.container.createComponent(ChartComponent);
    const instance = componentRef.instance;
    const groupedBarChart = new GroupedBarChart(instance.container, instance.elRef.nativeElement);
    componentRef.setInput("chart", groupedBarChart);
  }
  drawDonut() {
    const componentRef = this.container.createComponent(ChartComponent);
    const instance = componentRef.instance;
    const groupedBarChart = new DonutChart(instance.container, instance.elRef.nativeElement);
    componentRef.setInput("chart", groupedBarChart);
  }
  drawStack() {
    const componentRef = this.container.createComponent(ChartComponent);
    const instance = componentRef.instance;
    const groupedBarChart = new StackBarChart(instance.container, instance.elRef.nativeElement);
    componentRef.setInput("chart", groupedBarChart);
  }
  drawHrizontalStack() {
    const componentRef = this.container.createComponent(ChartComponent);
    const instance = componentRef.instance;
    const groupedBarChart = new HorizontalStackBar(instance.container, instance.elRef.nativeElement);
    componentRef.setInput("chart", groupedBarChart);
  }
};
_UsageGraphComponent.\u0275fac = function UsageGraphComponent_Factory(t) {
  return new (t || _UsageGraphComponent)(\u0275\u0275directiveInject(MonitoringService), \u0275\u0275directiveInject(Store));
};
_UsageGraphComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsageGraphComponent, selectors: [["app-usage-graph"]], viewQuery: function UsageGraphComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7, ViewContainerRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
  }
}, decls: 3, vars: 0, consts: [[1, "container"], ["container", ""]], template: function UsageGraphComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275elementContainer(1, null, 1);
    \u0275\u0275elementEnd();
  }
}, styles: ["\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=usage-graph.component.css.map */"] });
var UsageGraphComponent = _UsageGraphComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsageGraphComponent, { className: "UsageGraphComponent", filePath: "Modules\\pages\\monitoring\\components\\monitoring-layout\\usage-graph\\usage-graph.component.ts", lineNumber: 19 });
})();

// Modules/pages/monitoring/components/monitoring-layout/monitoring-layout.component.ts
var _MonitoringLayoutComponent = class _MonitoringLayoutComponent {
  constructor(store) {
    this.store = store;
  }
  ngOnInit() {
    this.store.dispatch(pvAction());
  }
};
_MonitoringLayoutComponent.\u0275fac = function MonitoringLayoutComponent_Factory(t) {
  return new (t || _MonitoringLayoutComponent)(\u0275\u0275directiveInject(Store));
};
_MonitoringLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonitoringLayoutComponent, selectors: [["app-monitoring-layout"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "container-body"]], template: function MonitoringLayoutComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div");
    \u0275\u0275element(2, "app-usage-toolbar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "app-usage-graph");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [UsageToolbarComponent, UsageGraphComponent], styles: ["\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=monitoring-layout.component.css.map */"] });
var MonitoringLayoutComponent = _MonitoringLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonitoringLayoutComponent, { className: "MonitoringLayoutComponent", filePath: "Modules\\pages\\monitoring\\components\\monitoring-layout\\monitoring-layout.component.ts", lineNumber: 11 });
})();

// Modules/pages/monitoring/monitoring-routing.module.ts
var routes = [
  { path: "", component: MonitoringLayoutComponent },
  { path: "area", component: AreaExamleComponent },
  { path: "bar", component: D3chartComponent }
];
var _MonitoringRoutingModule = class _MonitoringRoutingModule {
};
_MonitoringRoutingModule.\u0275fac = function MonitoringRoutingModule_Factory(t) {
  return new (t || _MonitoringRoutingModule)();
};
_MonitoringRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MonitoringRoutingModule });
_MonitoringRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var MonitoringRoutingModule = _MonitoringRoutingModule;

// Modules/pages/monitoring/components/sample-chart/sample-chart.component.ts
var _SampleChartComponent = class _SampleChartComponent {
};
_SampleChartComponent.\u0275fac = function SampleChartComponent_Factory(t) {
  return new (t || _SampleChartComponent)();
};
_SampleChartComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SampleChartComponent, selectors: [["app-sample-chart"]], decls: 8, vars: 0, template: function SampleChartComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h1");
    \u0275\u0275text(2, "Area Chart");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-area-examle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h1");
    \u0275\u0275text(6, "Bar Chart");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-d3chart");
    \u0275\u0275elementEnd();
  }
}, dependencies: [AreaExamleComponent, D3chartComponent], styles: ["\n\n/*# sourceMappingURL=sample-chart.component.css.map */"] });
var SampleChartComponent = _SampleChartComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SampleChartComponent, { className: "SampleChartComponent", filePath: "Modules\\pages\\monitoring\\components\\sample-chart\\sample-chart.component.ts", lineNumber: 8 });
})();

// Modules/pages/monitoring/monitoring.module.ts
var _MonitoringModule = class _MonitoringModule {
};
_MonitoringModule.\u0275fac = function MonitoringModule_Factory(t) {
  return new (t || _MonitoringModule)();
};
_MonitoringModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MonitoringModule });
_MonitoringModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  MonitoringRoutingModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatButtonToggleModule
] });
var MonitoringModule = _MonitoringModule;
export {
  MonitoringModule
};
//# sourceMappingURL=chunk-XLTVNDPV.js.map
