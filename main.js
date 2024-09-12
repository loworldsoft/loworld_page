import {
  monthUpdteAction,
  pvAction,
  pvFailureAction,
  pvSuccessAction,
  selectMonth
} from "./chunk-3ZICMNMA.js";
import {
  select_default,
  src_exports
} from "./chunk-S34LXEKR.js";
import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-WUKLNXWU.js";
import {
  canActivate,
  roleGuard
} from "./chunk-V2AFS6GB.js";
import {
  HeaderComponent,
  SharedModule
} from "./chunk-7EJGC4OO.js";
import "./chunk-ZG6TFU3E.js";
import {
  AppComponent,
  JwtModule,
  RoleName,
  SocketIoModule,
  addExpansionPanelBox,
  addNode,
  clearNode,
  deliverAction,
  resizeAction,
  sortExpansionPanelBox,
  triggerAction,
  updateNode
} from "./chunk-3LOGTTFB.js";
import {
  BrowserModule,
  DateTime,
  DomRendererFactory2,
  EnvironmentName,
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  HttpParams,
  RouterModule,
  RouterOutlet,
  ScannedActionsSubject,
  Store,
  StoreFeatureModule,
  StoreModule,
  StoreRootModule,
  createAction,
  createReducer,
  environment,
  initPath,
  on,
  platformBrowser,
  props,
  select
} from "./chunk-WDMB75ZP.js";
import "./chunk-JBIIG4YR.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  DOCUMENT,
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  RendererFactory2,
  RuntimeError,
  Subject,
  __decorate,
  __spreadProps,
  __spreadValues,
  catchError,
  dematerialize,
  exhaustMap,
  filter,
  groupBy,
  ignoreElements,
  inject,
  makeEnvironmentProviders,
  map,
  materialize,
  merge,
  mergeMap,
  of,
  setClassMetadata,
  switchMap,
  take,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵqueryRefresh,
  ɵɵsetComponentScope,
  ɵɵviewQuery
} from "./chunk-MCEJEMSJ.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var _InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer, inject(ChangeDetectionScheduler, {
      optional: true
    }));
  }
  ngOnDestroy() {
    this.flush();
  }
};
_InjectableAnimationEngine.\u0275fac = function InjectableAnimationEngine_Factory(t) {
  return new (t || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
};
_InjectableAnimationEngine.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InjectableAnimationEngine,
  factory: _InjectableAnimationEngine.\u0275fac
});
var InjectableAnimationEngine = _InjectableAnimationEngine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var _BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config2) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config2.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
};
_BrowserAnimationsModule.\u0275fac = function BrowserAnimationsModule_Factory(t) {
  return new (t || _BrowserAnimationsModule)();
};
_BrowserAnimationsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BrowserAnimationsModule
});
_BrowserAnimationsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: BROWSER_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var BrowserAnimationsModule = _BrowserAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var _NoopAnimationsModule = class _NoopAnimationsModule {
};
_NoopAnimationsModule.\u0275fac = function NoopAnimationsModule_Factory(t) {
  return new (t || _NoopAnimationsModule)();
};
_NoopAnimationsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NoopAnimationsModule
});
_NoopAnimationsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var NoopAnimationsModule = _NoopAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, { optional: true });
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-WRO66N6W.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({ \u0275createEngine, \u0275AnimationRendererFactory }) => {
      const engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  return makeEnvironmentProviders([
    {
      provide: RendererFactory2,
      useFactory: (doc, renderer, zone) => {
        return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
      },
      deps: [DOCUMENT, DomRendererFactory2, NgZone]
    },
    {
      provide: ANIMATION_MODULE_TYPE,
      useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
    }
  ]);
}

// node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs
var DEFAULT_EFFECT_CONFIG = {
  dispatch: true,
  functional: false,
  useEffectsErrorHandler: true
};
var CREATE_EFFECT_METADATA_KEY = "__@ngrx/effects_create__";
function createEffect(source, config2 = {}) {
  const effect = config2.functional ? source : source();
  const value = __spreadValues(__spreadValues({}, DEFAULT_EFFECT_CONFIG), config2);
  Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
    value
  });
  return effect;
}
function getCreateEffectMetadata(instance) {
  const propertyNames = Object.getOwnPropertyNames(instance);
  const metadata = propertyNames.filter((propertyName) => {
    if (instance[propertyName] && instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
      const property = instance[propertyName];
      return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty("dispatch");
    }
    return false;
  }).map((propertyName) => {
    const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
    return __spreadValues({
      propertyName
    }, metaData);
  });
  return metadata;
}
function getSourceMetadata(instance) {
  return getCreateEffectMetadata(instance);
}
function getSourceForInstance(instance) {
  return Object.getPrototypeOf(instance);
}
function isClassInstance(obj) {
  return !!obj.constructor && obj.constructor.name !== "Object" && obj.constructor.name !== "Function";
}
function isClass(classOrRecord) {
  return typeof classOrRecord === "function";
}
function getClasses(classesAndRecords) {
  return classesAndRecords.filter(isClass);
}
function isToken(tokenOrRecord) {
  return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}
function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
  const source = getSourceForInstance(sourceInstance);
  const isClassBasedEffect = !!source && source.constructor.name !== "Object";
  const sourceName = isClassBasedEffect ? source.constructor.name : null;
  const observables$ = getSourceMetadata(sourceInstance).map(({
    propertyName,
    dispatch,
    useEffectsErrorHandler
  }) => {
    const observable$ = typeof sourceInstance[propertyName] === "function" ? sourceInstance[propertyName]() : sourceInstance[propertyName];
    const effectAction$ = useEffectsErrorHandler ? effectsErrorHandler(observable$, globalErrorHandler) : observable$;
    if (dispatch === false) {
      return effectAction$.pipe(ignoreElements());
    }
    const materialized$ = effectAction$.pipe(materialize());
    return materialized$.pipe(map((notification) => ({
      effect: sourceInstance[propertyName],
      notification,
      propertyName,
      sourceName,
      sourceInstance
    })));
  });
  return merge(...observables$);
}
var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
  return observable$.pipe(catchError((error) => {
    if (errorHandler)
      errorHandler.handleError(error);
    if (retryAttemptLeft <= 1) {
      return observable$;
    }
    return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
  }));
}
var _Actions = class _Actions extends Observable {
  constructor(source) {
    super();
    if (source) {
      this.source = source;
    }
  }
  lift(operator) {
    const observable = new _Actions();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
};
_Actions.\u0275fac = function Actions_Factory(t) {
  return new (t || _Actions)(\u0275\u0275inject(ScannedActionsSubject));
};
_Actions.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Actions,
  factory: _Actions.\u0275fac,
  providedIn: "root"
});
var Actions = _Actions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Actions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Observable,
    decorators: [{
      type: Inject,
      args: [ScannedActionsSubject]
    }]
  }], null);
})();
function ofType(...allowedTypes) {
  return filter((action) => allowedTypes.some((typeOrActionCreator) => {
    if (typeof typeOrActionCreator === "string") {
      return typeOrActionCreator === action.type;
    }
    return typeOrActionCreator.type === action.type;
  }));
}
var _ROOT_EFFECTS_GUARD = new InjectionToken("@ngrx/effects Internal Root Guard");
var USER_PROVIDED_EFFECTS = new InjectionToken("@ngrx/effects User Provided Effects");
var _ROOT_EFFECTS = new InjectionToken("@ngrx/effects Internal Root Effects");
var _ROOT_EFFECTS_INSTANCES = new InjectionToken("@ngrx/effects Internal Root Effects Instances");
var _FEATURE_EFFECTS = new InjectionToken("@ngrx/effects Internal Feature Effects");
var _FEATURE_EFFECTS_INSTANCE_GROUPS = new InjectionToken("@ngrx/effects Internal Feature Effects Instance Groups");
var EFFECTS_ERROR_HANDLER = new InjectionToken("@ngrx/effects Effects Error Handler", {
  providedIn: "root",
  factory: () => defaultEffectsErrorHandler
});
var ROOT_EFFECTS_INIT = "@ngrx/effects/init";
var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
function reportInvalidActions(output, reporter) {
  if (output.notification.kind === "N") {
    const action = output.notification.value;
    const isInvalidAction = !isAction(action);
    if (isInvalidAction) {
      reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
    }
  }
}
function isAction(action) {
  return typeof action !== "function" && action && action.type && typeof action.type === "string";
}
function getEffectName({
  propertyName,
  sourceInstance,
  sourceName
}) {
  const isMethod = typeof sourceInstance[propertyName] === "function";
  const isClassBasedEffect = !!sourceName;
  return isClassBasedEffect ? `"${sourceName}.${String(propertyName)}${isMethod ? "()" : ""}"` : `"${String(propertyName)}()"`;
}
function stringify(action) {
  try {
    return JSON.stringify(action);
  } catch {
    return action;
  }
}
var onIdentifyEffectsKey = "ngrxOnIdentifyEffects";
function isOnIdentifyEffects(instance) {
  return isFunction(instance, onIdentifyEffectsKey);
}
var onRunEffectsKey = "ngrxOnRunEffects";
function isOnRunEffects(instance) {
  return isFunction(instance, onRunEffectsKey);
}
var onInitEffects = "ngrxOnInitEffects";
function isOnInitEffects(instance) {
  return isFunction(instance, onInitEffects);
}
function isFunction(instance, functionName) {
  return instance && functionName in instance && typeof instance[functionName] === "function";
}
var _EffectSources = class _EffectSources extends Subject {
  constructor(errorHandler, effectsErrorHandler) {
    super();
    this.errorHandler = errorHandler;
    this.effectsErrorHandler = effectsErrorHandler;
  }
  addEffects(effectSourceInstance) {
    this.next(effectSourceInstance);
  }
  /**
   * @internal
   */
  toActions() {
    return this.pipe(groupBy((effectsInstance2) => isClassInstance(effectsInstance2) ? getSourceForInstance(effectsInstance2) : effectsInstance2), mergeMap((source$) => {
      return source$.pipe(groupBy(effectsInstance));
    }), mergeMap((source$) => {
      const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
        return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
      }), map((output) => {
        reportInvalidActions(output, this.errorHandler);
        return output.notification;
      }), filter((notification) => notification.kind === "N" && notification.value != null), dematerialize());
      const init$ = source$.pipe(take(1), filter(isOnInitEffects), map((instance) => instance.ngrxOnInitEffects()));
      return merge(effect$, init$);
    }));
  }
};
_EffectSources.\u0275fac = function EffectSources_Factory(t) {
  return new (t || _EffectSources)(\u0275\u0275inject(ErrorHandler), \u0275\u0275inject(EFFECTS_ERROR_HANDLER));
};
_EffectSources.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectSources,
  factory: _EffectSources.\u0275fac,
  providedIn: "root"
});
var EffectSources = _EffectSources;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectSources, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EFFECTS_ERROR_HANDLER]
    }]
  }], null);
})();
function effectsInstance(sourceInstance) {
  if (isOnIdentifyEffects(sourceInstance)) {
    return sourceInstance.ngrxOnIdentifyEffects();
  }
  return "";
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
  return (sourceInstance) => {
    const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
    if (isOnRunEffects(sourceInstance)) {
      return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
  };
}
var _EffectsRunner = class _EffectsRunner {
  get isStarted() {
    return !!this.effectsSubscription;
  }
  constructor(effectSources, store) {
    this.effectSources = effectSources;
    this.store = store;
    this.effectsSubscription = null;
  }
  start() {
    if (!this.effectsSubscription) {
      this.effectsSubscription = this.effectSources.toActions().subscribe(this.store);
    }
  }
  ngOnDestroy() {
    if (this.effectsSubscription) {
      this.effectsSubscription.unsubscribe();
      this.effectsSubscription = null;
    }
  }
};
_EffectsRunner.\u0275fac = function EffectsRunner_Factory(t) {
  return new (t || _EffectsRunner)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(Store));
};
_EffectsRunner.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EffectsRunner,
  factory: _EffectsRunner.\u0275fac,
  providedIn: "root"
});
var EffectsRunner = _EffectsRunner;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRunner, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EffectSources
  }, {
    type: Store
  }], null);
})();
var _EffectsRootModule = class _EffectsRootModule {
  constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
    this.sources = sources;
    runner.start();
    for (const effectsInstance2 of rootEffectsInstances) {
      sources.addEffects(effectsInstance2);
    }
    store.dispatch({
      type: ROOT_EFFECTS_INIT
    });
  }
  addEffects(effectsInstance2) {
    this.sources.addEffects(effectsInstance2);
  }
};
_EffectsRootModule.\u0275fac = function EffectsRootModule_Factory(t) {
  return new (t || _EffectsRootModule)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(EffectsRunner), \u0275\u0275inject(Store), \u0275\u0275inject(_ROOT_EFFECTS_INSTANCES), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8), \u0275\u0275inject(_ROOT_EFFECTS_GUARD, 8));
};
_EffectsRootModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsRootModule
});
_EffectsRootModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsRootModule = _EffectsRootModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectSources
  }, {
    type: EffectsRunner
  }, {
    type: Store
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_ROOT_EFFECTS_INSTANCES]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ROOT_EFFECTS_GUARD]
    }]
  }], null);
})();
var _EffectsFeatureModule = class _EffectsFeatureModule {
  constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
    const effectsInstances = effectsInstanceGroups.flat();
    for (const effectsInstance2 of effectsInstances) {
      effectsRootModule.addEffects(effectsInstance2);
    }
  }
};
_EffectsFeatureModule.\u0275fac = function EffectsFeatureModule_Factory(t) {
  return new (t || _EffectsFeatureModule)(\u0275\u0275inject(EffectsRootModule), \u0275\u0275inject(_FEATURE_EFFECTS_INSTANCE_GROUPS), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8));
};
_EffectsFeatureModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsFeatureModule
});
_EffectsFeatureModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsFeatureModule = _EffectsFeatureModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: EffectsRootModule
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
    }]
  }, {
    type: StoreRootModule,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StoreFeatureModule,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var _EffectsModule = class _EffectsModule {
  static forFeature(...featureEffects) {
    const effects = featureEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsFeatureModule,
      providers: [effectsClasses, {
        provide: _FEATURE_EFFECTS,
        multi: true,
        useValue: effects
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
        multi: true,
        useFactory: createEffectsInstances,
        deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
  static forRoot(...rootEffects) {
    const effects = rootEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsRootModule,
      providers: [effectsClasses, {
        provide: _ROOT_EFFECTS,
        useValue: [effects]
      }, {
        provide: _ROOT_EFFECTS_GUARD,
        useFactory: _provideForRootGuard
      }, {
        provide: USER_PROVIDED_EFFECTS,
        multi: true,
        useValue: []
      }, {
        provide: _ROOT_EFFECTS_INSTANCES,
        useFactory: createEffectsInstances,
        deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS]
      }]
    };
  }
};
_EffectsModule.\u0275fac = function EffectsModule_Factory(t) {
  return new (t || _EffectsModule)();
};
_EffectsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _EffectsModule
});
_EffectsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var EffectsModule = _EffectsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
  const effects = [];
  for (const effectsGroup of effectsGroups) {
    effects.push(...effectsGroup);
  }
  for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
    effects.push(...userProvidedEffectsGroup);
  }
  return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord) ? inject(effectsTokenOrRecord) : effectsTokenOrRecord);
}
function _provideForRootGuard() {
  const runner = inject(EffectsRunner, {
    optional: true,
    skipSelf: true
  });
  const rootEffects = inject(_ROOT_EFFECTS, {
    self: true
  });
  const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
  if (hasEffects && runner) {
    throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
  }
  return "guarded";
}

// Modules/core/core.module.ts
var config = { url: `${environment.socket_url}/stream`, options: { autoConnect: false } };
var _CoreModule = class _CoreModule {
};
_CoreModule.\u0275fac = function CoreModule_Factory(t) {
  return new (t || _CoreModule)();
};
_CoreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CoreModule });
_CoreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  SharedModule,
  HttpClientModule,
  SocketIoModule.forRoot(config)
] });
var CoreModule = _CoreModule;

// Modules/core/store/auth/auth.effects.ts
var _AuthEffects = class _AuthEffects {
  // login$ = createEffect(() =>
  //     this.actions.pipe(
  //         ofType(AuthActions.loginAction),
  //         mergeMap((action) => 
  //         )
  //     )
  // )
  constructor(actions, store) {
    this.actions = actions;
    this.store = store;
  }
};
_AuthEffects.\u0275fac = function AuthEffects_Factory(t) {
  return new (t || _AuthEffects)(\u0275\u0275inject(Actions), \u0275\u0275inject(Store));
};
_AuthEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthEffects, factory: _AuthEffects.\u0275fac });
var AuthEffects = _AuthEffects;

// Modules/core/store/auth/auth.reducers.ts
var initialState = {
  accessToken: null,
  user: null,
  error: void 0
};
var authReducer = createReducer(initialState);

// Modules/core/store/category/category.action.ts
var currentCategoryAction = createAction("Current Category", props());

// Modules/core/store/category/category.reducer.ts
var initialState2 = {
  currentCategoryId: -1
};
var categoryReducer = createReducer(initialState2, on(currentCategoryAction, (_state, { currentCategoryId }) => {
  console.log("lalala");
  return { currentCategoryId };
}));

// Modules/core/store/deliver/deliver.reducer.ts
var initialState3 = {
  type: "",
  data: ""
};
var deliverReducer = createReducer(initialState3, on(deliverAction, (_state, { deliver }) => {
  console.log("ngrx freeze", Object.isFrozen(deliver));
  return __spreadValues({}, deliver);
}));

// Modules/core/store/expansion-panel-box/expansion-panel-box.reducer.ts
var initialState4 = {
  components: [],
  isSorted: true
};
var expansionPanelBoxReducer = createReducer(initialState4, on(addExpansionPanelBox, (state, { expansionPanelBox }) => {
  return __spreadProps(__spreadValues({}, state), {
    components: state.isSorted ? [...state.components, ...expansionPanelBox] : [...expansionPanelBox, ...state.components]
  });
}), on(sortExpansionPanelBox, (state) => {
  const updateIsSorted = !state.isSorted;
  return __spreadProps(__spreadValues({}, state), {
    isSorted: updateIsSorted,
    components: [...state.components].sort((a, b) => {
      return updateIsSorted ? b.index - a.index : a.index - b.index;
    })
  });
}));

// Modules/core/store/layout/layout.reducer.ts
var initialState5 = {
  leftWidth: 30,
  rightWidth: 70
};
var layoutReducer = createReducer(initialState5, on(resizeAction, (state, { layoutData }) => {
  return {
    leftWidth: layoutData.leftWidth,
    rightWidth: layoutData.rightWidth
  };
}));

// Modules/core/store/node/node.reducer.ts
var initialState6 = {
  id: "",
  type: "",
  node: {
    category: "",
    result: [],
    isAwait: false
  },
  index: -1,
  left: false,
  right: false
};
var nodeReducer = createReducer(initialState6, on(addNode, (state, { data }) => {
  return {
    id: data.id,
    type: data.type,
    node: {
      category: data.node.category,
      result: data.node.result,
      isAwait: data.node.isAwait
    },
    index: data.index,
    left: data.left,
    right: data.right
  };
}), on(updateNode, (state, { data }) => __spreadProps(__spreadValues({}, state), {
  node: {
    category: data.node.category,
    result: data.node.result,
    isAwait: data.node.isAwait
  },
  index: data.index,
  left: data.left,
  right: data.right
})), on(clearNode, (state) => __spreadValues({}, initialState6)));

// Modules/core/store/trigger/trigger.reducer.ts
var initialState7 = {
  type: "none"
};
var triggerReducer = createReducer(initialState7, on(triggerAction, (state, { trigger }) => {
  return { type: trigger.type };
}));

// Modules/core/store/vectordb/vectordb.action.ts
var selectVectorDB = createAction("Select Vector DB", props());
var unselectVectorDB = createAction("Unselect  Vector DB", props());

// Modules/core/store/vectordb/vectordb.reducer.ts
var initialState8 = [];
var vectordbReducer = createReducer(initialState8, on(selectVectorDB, (_state, { name }) => {
  if (_state.indexOf(name) > -1)
    return _state;
  return [..._state, name];
}), on(unselectVectorDB, (_state, { name }) => {
  return _state.filter((data) => data !== name);
}));

// Modules/core/interceptors/auth.interceptor.ts
var _AuthInterceptor = class _AuthInterceptor {
  constructor() {
  }
  intercept(req, next) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const cloneRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + accessToken)
      });
      return next.handle(cloneRequest);
    }
    return next.handle(req);
  }
};
_AuthInterceptor.\u0275fac = function AuthInterceptor_Factory(t) {
  return new (t || _AuthInterceptor)();
};
_AuthInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
var AuthInterceptor = _AuthInterceptor;

// Modules/core/store/monitoring/monitoring.reducer.ts
var initialState9 = {
  pvData: [],
  month: DateTime.now(),
  error: null
};
var monitoringReducer = createReducer(initialState9, on(pvSuccessAction, (state, { pvData }) => {
  const checkArray = pvData ?? [];
  return __spreadProps(__spreadValues({}, state), {
    pvData: [...checkArray],
    error: null
  });
}), on(pvFailureAction, (state, { error }) => {
  return __spreadProps(__spreadValues({}, state), {
    error
  });
}), on(monthUpdteAction, (state, { month }) => {
  return __spreadProps(__spreadValues({}, state), {
    month
  });
}));

// Modules/core/store/monitoring/monitoring.effect.ts
var _MonitoringEffects = class _MonitoringEffects {
  constructor(actions, http, store) {
    this.actions = actions;
    this.http = http;
    this.store = store;
    this.getPv$ = createEffect(() => this.actions.pipe(ofType(pvAction), withLatestFrom(this.store.pipe(select(selectMonth))), switchMap(([action, month]) => {
      const params = new HttpParams().set("date", month.toString());
      return this.http.get(this.url, { params }).pipe(map((pvData) => {
        return pvSuccessAction({
          pvData
        });
      }), catchError((error) => {
        return of(pvFailureAction({
          error
        }));
      }));
    })));
  }
};
_MonitoringEffects.\u0275fac = function MonitoringEffects_Factory(t) {
  return new (t || _MonitoringEffects)(\u0275\u0275inject(Actions), \u0275\u0275inject(HttpClient), \u0275\u0275inject(Store));
};
_MonitoringEffects.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MonitoringEffects, factory: _MonitoringEffects.\u0275fac });
var MonitoringEffects = _MonitoringEffects;
__decorate([
  initPath("monitoring/pv")
], MonitoringEffects.prototype, "url", void 0);

// src/app/routes/prod.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/membership",
    pathMatch: "full"
  },
  {
    path: "main",
    loadChildren: () => import("./chunk-SOLZIOXE.js").then((m) => m.MainModule),
    canActivate: [canActivate]
  },
  {
    path: "chatbot",
    loadChildren: () => import("./chunk-QJUJLJY4.js").then((m) => m.ChatbotModule),
    canActivate: [canActivate]
  },
  {
    path: "history",
    loadChildren: () => import("./chunk-RXFWRPXR.js").then((m) => m.HistoryModule),
    canActivate: [canActivate]
  },
  {
    path: "membership",
    loadChildren: () => import("./chunk-RUBI4WAV.js").then((m) => m.MembershipModule)
  },
  {
    path: "logic",
    loadChildren: () => import("./chunk-NCD3TRWV.js").then((m) => m.ChatflowModule),
    canActivate: [canActivate]
  },
  {
    path: "category-manage",
    loadChildren: () => import("./chunk-AZBQ6ARA.js").then((m) => m.CategoryManageModule),
    canActivate: [canActivate]
  },
  {
    path: "monitoring",
    loadChildren: () => import("./chunk-GCFSBXZA.js").then((m) => m.MonitoringModule),
    canActivate: [canActivate, roleGuard],
    data: {
      requiredRoles: [RoleName.SuperAdmin]
    }
  },
  {
    path: "**",
    redirectTo: "/chatbot"
  }
];

// src/app/routes/dev.routes.ts
var devRoutes = [
  {
    path: "",
    redirectTo: "/main",
    pathMatch: "full"
  },
  {
    path: "slot",
    loadChildren: () => import("./chunk-YTXR52JO.js").then((m) => m.SlotModule)
  },
  {
    path: "main",
    loadChildren: () => import("./chunk-SOLZIOXE.js").then((m) => m.MainModule)
  },
  {
    path: "chatbot",
    loadChildren: () => import("./chunk-QJUJLJY4.js").then((m) => m.ChatbotModule),
    canActivate: [canActivate]
  },
  {
    path: "history",
    loadChildren: () => import("./chunk-RXFWRPXR.js").then((m) => m.HistoryModule),
    canActivate: [canActivate]
  },
  {
    path: "membership",
    loadChildren: () => import("./chunk-RUBI4WAV.js").then((m) => m.MembershipModule)
  },
  {
    path: "logic",
    loadChildren: () => import("./chunk-NCD3TRWV.js").then((m) => m.ChatflowModule),
    canActivate: [canActivate]
  },
  {
    path: "sketchflow",
    loadChildren: () => import("./chunk-OK3WFPYR.js").then((m) => m.SketchflowModule)
  },
  {
    path: "category-manage",
    loadChildren: () => import("./chunk-AZBQ6ARA.js").then((m) => m.CategoryManageModule),
    canActivate: [canActivate]
  },
  {
    path: "monitoring",
    loadChildren: () => import("./chunk-GCFSBXZA.js").then((m) => m.MonitoringModule),
    canActivate: [canActivate, roleGuard],
    data: {
      requiredRoles: [RoleName.SuperAdmin]
    }
  },
  {
    path: "editor",
    loadChildren: () => import("./chunk-2NKQJFWY.js").then((m) => m.EditorModule)
  },
  {
    path: "**",
    redirectTo: "/main"
  }
];

// src/app/app-routing.module.ts
var routerMap = /* @__PURE__ */ new Map([
  [EnvironmentName.Production, routes],
  [EnvironmentName.Development, devRoutes],
  [EnvironmentName.Staging, devRoutes],
  [EnvironmentName.Local, devRoutes]
  //로컬도 devroutes 같이 쓰게~
  // [EnvironmentName.Common, devRoutes]
]);
var loadRouter = (env) => {
  return routerMap.get(env);
};
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(loadRouter(environment.environmentName)), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/svg/background.svg.ts
var _c0 = ["canvas"];
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
var _SvgBackground = class _SvgBackground {
  constructor() {
    this.d3 = src_exports;
    this.gradientColorsDark = {
      backGradient1: {
        color1: "rgba(40, 218, 243, 1)",
        color2: "rgba(40, 218, 243, 0)"
      },
      backGradient2: {
        color1: "rgba(110, 42, 243, 1)",
        color2: "rgba(110, 42, 243, 0)"
      },
      backGradient3: {
        color1: "rgba(40, 104, 243, 1)",
        color2: "rgba(40, 104, 243, 0)"
      }
    };
  }
  ngOnInit() {
    this.baseInit();
    this.createLayout();
  }
  createStop(node, value) {
    const item = node.append("stop").attr("offset", value.offset).attr("stop-color", value.stopColor);
    return item;
  }
  baseInit(isCursor = false) {
    this.componentSVG = this.d3.select(this.canvasElement.nativeElement);
  }
  // private gradientColorsDark = {
  //   backGradient1: {
  //     color1: 'rgba(10, 54, 60, 1)',  // 더욱 어두운 파란색
  //     color2: 'rgba(10, 54, 60, 0)', 
  //   },
  //   backGradient2: {
  //     color1: 'rgba(27, 10, 60, 1)',  // 더욱 어두운 보라색
  //     color2: 'rgba(27, 10, 60, 0)', 
  //   },
  //   backGradient3: {
  //     color1: 'rgba(10, 26, 60, 1)',  // 더욱 어두운 파란색
  //     color2: 'rgba(10, 26, 60, 0)', 
  //   },
  // };
  // 색상 변경 함수 추가
  changeColorsToWhite() {
    this.gradientColorsDark = {
      backGradient1: {
        color1: "rgba(255, 255, 255, 1)",
        color2: "rgba(255, 255, 255, 0)"
      },
      backGradient2: {
        color1: "rgba(240, 240, 240, 1)",
        color2: "rgba(240, 240, 240, 0)"
      },
      backGradient3: {
        color1: "rgba(220, 220, 220, 1)",
        color2: "rgba(220, 220, 220, 0)"
      }
    };
    this.updategradientColorsDark();
  }
  // SVG 그라디언트 색상 업데이트 함수
  updategradientColorsDark() {
    select_default(`#backGradient1`).selectAll("stop").data(Object.values(this.gradientColorsDark.backGradient1)).attr("stop-color", (d) => d);
    select_default(`#backGradient2`).selectAll("stop").data(Object.values(this.gradientColorsDark.backGradient2)).attr("stop-color", (d) => d);
    select_default(`#backGradient3`).selectAll("stop").data(Object.values(this.gradientColorsDark.backGradient3)).attr("stop-color", (d) => d);
  }
  createLayout() {
    this.createGradientRect(
      "backGradient1",
      this.gradientColorsDark.backGradient1.color1,
      // 전역 색상 사용
      this.gradientColorsDark.backGradient1.color2,
      "0.441602%",
      "34s",
      "13.744%",
      "1.18473%",
      {
        attributeName: "x",
        dur: "20s",
        values: "25%;0%;25%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "y",
        dur: "21s",
        values: "0%;25%;0%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "7s",
        repeatCount: "indefinite"
      },
      "rotate(334.41 50 50)"
    );
    this.createGradientRect(
      "backGradient2",
      this.gradientColorsDark.backGradient2.color1,
      // 전역 색상 사용
      this.gradientColorsDark.backGradient2.color2,
      "2.68147%",
      "23.5s",
      "-2.17916%",
      "35.4267%",
      {
        attributeName: "x",
        dur: "23s",
        values: "-25%;0%;-25%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "y",
        dur: "24s",
        values: "0%;50%;0%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "transform",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        dur: "12s",
        repeatCount: "indefinite"
      },
      "rotate(255.072 50 50)"
    );
    this.createGradientRect(
      "backGradient3",
      this.gradientColorsDark.backGradient3.color1,
      // 전역 색상 사용
      this.gradientColorsDark.backGradient3.color2,
      "0.836536%",
      "21.5s",
      "9.00483%",
      "14.5733%",
      {
        attributeName: "x",
        dur: "25s",
        values: "0%;25%;0%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "y",
        dur: "12s",
        values: "0%;25%;0%",
        repeatCount: "indefinite"
      },
      {
        attributeName: "transform",
        type: "rotate",
        from: "360 50 50",
        to: "0 50 50",
        dur: "9s",
        repeatCount: "indefinite"
      },
      "rotate(139.903 50 50)"
    );
  }
  createAnimate(node, value) {
    const item = node.append("animate").attr("attributeName", value.attributeName).attr("values", value.values).attr("keyTimes", value.keyTimes).attr("dur", value.dur).attr("repeatCount", value.repeatCount).attr("begin", value.begin);
    return item;
  }
  createRadialGradient(node, value) {
    const defs = node.append("defs");
    const radialGradient = defs.append("radialGradient").attr("id", value.id).attr("cx", value.cx).attr("cy", value.cy).attr("fx", value.fx).attr("fy", value.fy).attr("r", value.r);
    return radialGradient;
  }
  createGradientRect(id, color1, color2, fx, animationDur, x, y, animate1, animate2, animateTransform, rotate) {
    const radialGradient = this.createRadialGradient(this.componentSVG, {
      id,
      cx: "50%",
      cy: "50%",
      fx,
      fy: "50%",
      r: 0.5
    });
    this.createAnimate(radialGradient, {
      attributeName: "fx",
      dur: animationDur,
      values: "0%;3%;0%",
      repeatCount: "indefinite"
    });
    this.createStop(radialGradient, {
      offset: "0%",
      stopColor: color1
    });
    this.createStop(radialGradient, {
      offset: "100%",
      stopColor: color2
    });
    const rect = this.createSVG(this.componentSVG, {
      type: DrawType.rect,
      x,
      y,
      width: "100%",
      height: "100%",
      fill: `url(#${id})`
    });
    rect.attr("transform", rotate);
    this.createAnimate(rect, animate1);
    this.createAnimate(rect, animate2);
    this.createAnimateTransform(rect, animateTransform);
  }
  createAnimateTransform(node, value) {
    const item = node.append("animateTransform").attr("attributeName", value.attributeName).attr("type", value.type).attr("from", value.from).attr("to", value.to).attr("dur", value.dur).attr("repeatCount", value.repeatCount);
    return item;
  }
  createSVG(entity, values) {
    const item = entity.append(values.type).attr("id", values.id).attr("class", values.class).attr("xlink:href", values.href).attr("d", values.geometry).attr("x", values.x).attr("x1", values.x1).attr("x2", values.x2).attr("y", values.y).attr("y1", values.y1).attr("y2", values.y2).attr("cx", values.cx).attr("cy", values.cy).attr("r", values.r).attr("rx", values.rx).attr("ry", values.ry).attr("width", values.width).attr("height", values.height).attr("fill", values.fill).attr("filter", values.filter).attr("clip-path", values.clipPath).attr("stroke", values.stroke).attr("stroke-dasharray", values.strokeDasharray).attr("stroke-width", values.strokeWidth).attr("stroke-linecap", values.strokeLinecap).attr("stroke-linejoin", values.strokeLinejoin).attr("stroke-miterlimit", values.strokeMiterlimit).attr("font-size", values.fontSize).attr("font-weight", values.fontWeight).attr("opacity", values.opacity).attr("fill-opacity", values.fillOpacity).attr("transform", `translate(${values.translate ? values.translate.x : 0}, ${values.translate ? values.translate.y : 0})`);
    if (values.type === DrawType.text) {
      item.text(values.text);
    }
    return item;
  }
};
_SvgBackground.\u0275fac = function SvgBackground_Factory(t) {
  return new (t || _SvgBackground)();
};
_SvgBackground.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SvgBackground, selectors: [["svg-background"]], viewQuery: function SvgBackground_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.canvasElement = _t.first);
  }
}, decls: 4, vars: 0, consts: [["viewBox", "0 0 100 100"], ["canvas", ""], ["container", ""]], template: function SvgBackground_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 0, 1);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementContainer(2, null, 2);
  }
}, encapsulation: 2 });
var SvgBackground = _SvgBackground;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SvgBackground, { className: "SvgBackground", filePath: "src\\app\\svg\\background.svg.ts", lineNumber: 34 });
})();

// src/app/app.module.ts
function tokenGetter() {
  return localStorage.getItem("accessToken");
}
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideAnimations(),
  provideAnimationsAsync(),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
], imports: [
  CoreModule,
  SharedModule,
  BrowserModule,
  AppRoutingModule,
  StoreModule.forRoot({
    expansionPanelBox: expansionPanelBoxReducer,
    trigger: triggerReducer,
    deliver: deliverReducer,
    auth: authReducer,
    category: categoryReducer,
    layout: layoutReducer,
    node: nodeReducer,
    vectordb: vectordbReducer,
    monitoring: monitoringReducer
  }),
  EffectsModule.forRoot([
    AuthEffects,
    MonitoringEffects
  ]),
  JwtModule.forRoot({
    config: {
      tokenGetter
    }
  })
] });
var AppModule = _AppModule;
\u0275\u0275setComponentScope(AppComponent, function() {
  return [NgIf, HeaderComponent, RouterOutlet, SvgBackground];
}, []);

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.1.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.1.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
