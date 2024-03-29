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
import Fundamentals from "./pages/JsChallange/Fundamentals";
import LayoutEffectHook from "./pages/Hooks/LayoutEffectHook";
import ImperativeHandleHook from "./pages/Hooks/ImperativeHandleHook/ImperativeHandleHook";
import ContextHook from "./pages/Hooks/ContextHook/ContextHook";
import MemoHook from "./pages/Hooks/MemoHook";
import CallbackHook from "./pages/Hooks/CallBackHook/CallbackHook";
import Part1 from "./pages/JsPepare/Part1";
import Part2 from "./pages/JsPepare/Part2";
import Part3 from "./pages/JsPepare/Part3";
import Part4 from "./pages/JsPepare/Part4";
import Part5 from "./pages/JsPepare/Part5";
import Arrays from "./pages/JsChallange/Arrays";
import Challange1 from "./pages/Challange/Challange1";
import Challange2 from "./pages/Challange/Challange2";
import JSChallange from "./pages/ARCTutorial/JSCPratice/JSChallange";
import Objects from "./pages/JsChallange/Objects";
import { Users } from "./pages/Users/Users";
import OldUsers from "./pages/Users/OldUsers";
import Dates from "./pages/JsChallange/Dates";
import Sets from "./pages/JsChallange/Sets";
import ArrayMethods from "./pages/JSTamil/ArrayMethods";

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
      <Route exact path="/jsc/fundamentals" component={Fundamentals} />
      <Route exact path="/jsc/arrays" component={Arrays} />
      <Route exact path="/jsc/objects" component={Objects} />
      <Route exact path="/jsc/dates" component={Dates} />
      <Route exact path="/jsc/sets" component={Sets} />
      <Route exact path="/jsprepare/Part1" component={Part1} />
      <Route exact path="/jsprepare/Part2" component={Part2} />
      <Route exact path="/jsprepare/Part3" component={Part3} />
      <Route exact path="/jsprepare/Part4" component={Part4} />
      <Route exact path="/jsprepare/Part5" component={Part5} />
      <Route exact path="/tsc/challange1" component={Challange1} />
      <Route exact path="/tsc/challange2" component={Challange2} />
      <Route exact path="/tsc/challange2" component={Challange2} />
      <Route exact path="/arc/challange" component={JSChallange} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/oldusers" component={OldUsers} />
      <Route exact path="/jstamil/array" component={ArrayMethods} />
    </Switch>
  );
};

export default AppRouter;
