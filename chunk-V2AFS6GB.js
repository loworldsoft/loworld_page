import {
  GlobalService,
  MembershipService
} from "./chunk-3LOGTTFB.js";
import {
  Router
} from "./chunk-WDMB75ZP.js";
import {
  inject,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MCEJEMSJ.js";

// Modules/core/guards/authguard.service.ts
var _AuthGuardService = class _AuthGuardService {
  constructor(router, membershipService) {
    this.router = router;
    this.membershipService = membershipService;
  }
  isLogin() {
    if (!this.membershipService.isLoggedIn) {
      this.router.navigate(["/membership/login"]);
      return false;
    }
    return true;
  }
  // 로그인 상태에서 로그인 페이지 접근을 방지하는 메서드
  isLoggedOut() {
    return true;
  }
};
_AuthGuardService.\u0275fac = function AuthGuardService_Factory(t) {
  return new (t || _AuthGuardService)(\u0275\u0275inject(Router), \u0275\u0275inject(MembershipService));
};
_AuthGuardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuardService, factory: _AuthGuardService.\u0275fac, providedIn: "root" });
var AuthGuardService = _AuthGuardService;

// Modules/core/guards/authguard.guard.ts
var canActivate = (route, state) => {
  return inject(AuthGuardService).isLogin();
};
var canActivateLogin = (route, state) => {
  return inject(AuthGuardService).isLoggedOut();
};

// Modules/core/guards/roleguard.service.ts
var _RoleGuardService = class _RoleGuardService {
  constructor(router, globalService) {
    this.router = router;
    this.globalService = globalService;
  }
  canActivate(route, url) {
    const requiredRoles = route.data["requiredRoles"];
    if (this.isAuthorized(requiredRoles)) {
      return true;
    }
    this.router.navigate(["/chatbot"]);
    return false;
  }
  isAuthorized(requiredRoles) {
    return requiredRoles.includes(this.globalService.currentUser.userData.role.roleName);
  }
};
_RoleGuardService.\u0275fac = function RoleGuardService_Factory(t) {
  return new (t || _RoleGuardService)(\u0275\u0275inject(Router), \u0275\u0275inject(GlobalService));
};
_RoleGuardService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleGuardService, factory: _RoleGuardService.\u0275fac, providedIn: "root" });
var RoleGuardService = _RoleGuardService;

// Modules/core/guards/roleguard.guard.ts
var roleGuard = (route, state) => {
  return inject(RoleGuardService).canActivate(route, state.url);
};

export {
  canActivate,
  canActivateLogin,
  roleGuard
};
//# sourceMappingURL=chunk-V2AFS6GB.js.map
