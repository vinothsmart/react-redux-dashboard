import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AddRole,
  Count,
  Home,
  Roles,
  Test,
  Testing,
  UpdateRole,
} from "./pages";
import EffectHook from "./pages/Hooks/EffectHook";
import RefHook from "./pages/Hooks/RefHook";
import ReducerHook from "./pages/Hooks/ReducerHook";
import StateHook from "./pages/Hooks/StateHook";
import Basic from "./pages/JsChallage/Basic";
import LayoutEffectHook from "./pages/Hooks/LayoutEffectHook";
import ImperativeHandleHook from "./pages/Hooks/ImperativeHandleHook/ImperativeHandleHook";
import ContextHook from "./pages/Hooks/ContextHook/ContextHook";
import MemoHook from "./pages/Hooks/MemoHook";
import CallbackHook from "./pages/Hooks/CallBackHook/CallbackHook";
import Part1 from "./pages/JsPepare/Part1";
import Part2 from "./pages/JsPepare/Part2";
import Part3 from "./pages/JsPepare/Part3";
import Part4 from "./pages/JsPepare/Part4";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/roles" component={Roles} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/testing" component={Testing} />
      <Route exact path="/roles/add" component={AddRole} />
      <Route exact path="/roles/edit/:id" component={UpdateRole} />
      <Route exact path="/count" component={Count} />
      <Route exact path="/hooks/useState" component={StateHook} />
      <Route exact path="/hooks/useReducer" component={ReducerHook} />
      <Route exact path="/hooks/useEffect" component={EffectHook} />
      <Route exact path="/hooks/useRef" component={RefHook} />
      <Route exact path="/hooks/useLayoutEffect" component={LayoutEffectHook} />
      <Route
        exact
        path="/hooks/useImperativeHandle"
        component={ImperativeHandleHook}
      />
      <Route exact path="/hooks/useContext" component={ContextHook} />
      <Route exact path="/hooks/useMemo" component={MemoHook} />
      <Route exact path="/hooks/useCallback" component={CallbackHook} />
      <Route exact path="/jsc/basic" component={Basic} />
      <Route exact path="/jsprepare/Part1" component={Part1} />
      <Route exact path="/jsprepare/Part2" component={Part2} />
      <Route exact path="/jsprepare/Part3" component={Part3} />
      <Route exact path="/jsprepare/Part4" component={Part4} />
    </Switch>
  );
};

export default AppRouter;
