import {
  createAction,
  createSelector,
  props
} from "./chunk-6FQVR65V.js";
import {
  __spreadValues
} from "./chunk-REJARLXV.js";

// Modules/core/store/monitoring/monitoring.action.ts
var pvAction = createAction("[Monitoring] PageView");
var pvSuccessAction = createAction("[Monitoring] PageView Success", props());
var pvFailureAction = createAction("[Monitoring] PageView Falire", props());
var monthUpdteAction = createAction("[Monitoring] Month Update", props());

// Modules/core/store/monitoring/monitoring.selector.ts
var selectPvState = (state) => state.monitoring.pvData;
var selectMonthSate = (state) => state.monitoring.month;
var selectPageView = createSelector(selectPvState, (pvData) => {
  return pvData.map((d) => {
    return __spreadValues({}, d);
  });
});
var selectMonth = createSelector(selectMonthSate, (month) => {
  return month;
});

export {
  pvAction,
  pvSuccessAction,
  pvFailureAction,
  monthUpdteAction,
  selectPageView,
  selectMonth
};
//# sourceMappingURL=chunk-H4IFIEB7.js.map
