import { H as Te, e as Ee, g as te, M as _e, h as ne, i as je, k as Ve, m as Oe, n as re, o as x, p as K, s as Re, r as oe, q as ce, t as se, v as le, w as ue, x as W, y as Y, K as _, z as Fe, A as Ue, B as Be, E as We, R as xe, C as Ke, N as ie, j as s, b as M, F as q, D as Ye, S as Ze, G as Ge } from "./library-89924fb6.js";
import { j as T, a as Z, I as qe, d as Je } from "./mui-2ff488a7.js";
import { f as J, u as Qe, g as Xe } from "./table-f5369550.js";
import { r as l, c as $e, R as ea } from "./react-6f5a8403.js";
import { f as aa, c as ia, b as ta, h as na, D as ra } from "./DictionaryCell-ab51e979.js";
import { F as k } from "./icons-ad9f8a73.js";
import { u as oa } from "./useUser-268e1bce.js";
const de = (e, a) => {
  const i = /* @__PURE__ */ l.memo(a), t = /* @__PURE__ */ l.forwardRef((r, n) => {
    const o = l.useRef(null);
    return /* @__PURE__ */ T.jsx(i, {
      ...r,
      itemRef: o,
      externalRef: n,
      isHovering: l.useContext(Te) === o.current
    });
  });
  return t.displayName = `WithHovering(${e})`, t;
}, fe = (e, a, i) => {
  Ee(() => {
    if (e)
      return;
    const t = a.current;
    return i(t, !0), () => {
      i(t);
    };
  }, [e, a, i]);
}, ca = /* @__PURE__ */ de("SubMenu", function({
  "aria-label": a,
  className: i,
  disabled: t,
  direction: r,
  label: n,
  openTrigger: o,
  onMenuChange: c,
  isHovering: g,
  instanceRef: u,
  itemRef: d,
  captureFocus: j,
  repositionFlag: z,
  itemProps: p = {},
  ...w
}) {
  const P = l.useContext(te), {
    rootMenuRef: V,
    submenuOpenDelay: H,
    submenuCloseDelay: b
  } = P, {
    parentMenuRef: h,
    parentDir: C,
    overflow: I
  } = l.useContext(_e), {
    isParentOpen: A,
    submenuCtx: D,
    dispatch: S,
    updateItems: O
  } = l.useContext(ne), N = I !== "visible", [f, m, F] = je(P), {
    state: Q
  } = f, L = !!t, y = Ve(Q), X = l.useRef(null), [E] = l.useState({
    v: 0
  }), $ = () => {
    D.off(), E.v && (clearTimeout(E.v), E.v = 0);
  }, U = (...v) => {
    $(), ee(), !L && F(...v);
  }, ee = () => !g && !L && S(Y.SET, d.current), ae = (v) => {
    ee(), o || (E.v = setTimeout(() => Be(U), Math.max(v, 0)));
  }, De = (v) => {
    L || (v.stopPropagation(), !(E.v || y) && D.on(b, () => ae(H - b), () => ae(H)));
  }, Se = () => {
    $(), y || S(Y.UNSET, d.current);
  }, Ne = (v) => {
    if (g)
      switch (v.key) {
        case _.ENTER:
          v.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          o !== "none" && U(Fe.FIRST);
      }
  }, ke = (v) => {
    let R = !1;
    switch (v.key) {
      case _.LEFT:
        y && (d.current.focus(), m(!1), R = !0);
        break;
      case _.RIGHT:
        y || (R = !0);
        break;
    }
    R && (v.preventDefault(), v.stopPropagation());
  };
  fe(L, d, O), Oe(c, y), l.useEffect(() => D.toggle(y), [D, y]), l.useEffect(() => () => clearTimeout(E.v), [E]), l.useEffect(() => {
    g && A ? d.current.focus() : m(!1);
  }, [g, A, m, d]), l.useImperativeHandle(u, () => ({
    openMenu: (...v) => {
      A && U(...v);
    },
    closeMenu: () => {
      y && (d.current.focus(), m(!1));
    }
  }));
  const G = l.useMemo(() => ({
    open: y,
    hover: g,
    disabled: L,
    submenu: !0
  }), [y, g, L]), {
    ref: ze,
    className: He,
    ...Ie
  } = p, Ae = re({
    onPointerEnter: D.off,
    onPointerMove: De,
    onPointerLeave: Se,
    onKeyDown: Ne,
    onClick: () => o !== "none" && U()
  }, Ie), Le = () => {
    const v = /* @__PURE__ */ T.jsx(Ue, {
      ...w,
      ...f,
      ariaLabel: a || (typeof n == "string" ? n : "Submenu"),
      anchorRef: d,
      containerRef: N ? V : X,
      direction: r || (C === "right" || C === "left" ? C : "right"),
      parentScrollingRef: N && h,
      isDisabled: L
    }), R = V.current;
    return N && R ? /* @__PURE__ */ $e.createPortal(v, R) : v;
  };
  return /* @__PURE__ */ T.jsxs("li", {
    className: x({
      block: K,
      element: Re,
      className: i
    }),
    style: {
      position: "relative"
    },
    role: oe,
    ref: X,
    onKeyDown: ke,
    children: [/* @__PURE__ */ T.jsx("div", {
      role: ce,
      "aria-haspopup": !0,
      "aria-expanded": y,
      ...se(L, g),
      ...Ae,
      ref: le(ze, d),
      className: x({
        block: K,
        element: ue,
        modifiers: G,
        className: He
      }),
      children: l.useMemo(() => W(n, G), [n, G])
    }), Q && Le()]
  });
}), sa = (e, a, i, t) => {
  const {
    submenuCloseDelay: r
  } = l.useContext(te), {
    isParentOpen: n,
    submenuCtx: o,
    dispatch: c,
    updateItems: g
  } = l.useContext(ne), u = () => {
    !i && !t && c(Y.SET, e.current);
  }, d = () => {
    !t && c(Y.UNSET, e.current);
  }, j = (w) => {
    i && !w.currentTarget.contains(w.relatedTarget) && d();
  }, z = (w) => {
    t || (w.stopPropagation(), o.on(r, u, u));
  }, p = (w, P) => {
    o.off(), !P && d();
  };
  return fe(t, e, g), l.useEffect(() => {
    i && n && a.current && a.current.focus();
  }, [a, i, n]), {
    setHover: u,
    onBlur: j,
    onPointerMove: z,
    onPointerLeave: p
  };
}, B = /* @__PURE__ */ de("MenuItem", function({
  className: a,
  value: i,
  href: t,
  type: r,
  checked: n,
  disabled: o,
  children: c,
  onClick: g,
  isHovering: u,
  itemRef: d,
  externalRef: j,
  ...z
}) {
  const p = !!o, {
    setHover: w,
    ...P
  } = sa(d, d, u, p), V = l.useContext(We), H = l.useContext(xe), b = r === "radio", h = r === "checkbox", C = !!t && !p && !b && !h, I = b ? H.value === i : h ? !!n : !1, A = (f) => {
    if (p) {
      f.stopPropagation(), f.preventDefault();
      return;
    }
    const m = {
      value: i,
      syntheticEvent: f
    };
    f.key !== void 0 && (m.key = f.key), h && (m.checked = !I), b && (m.name = H.name), W(g, m), b && W(H.onRadioChange, m), V.handleClick(m, h || b);
  }, D = (f) => {
    if (u)
      switch (f.key) {
        case _.ENTER:
          f.preventDefault();
        case _.SPACE:
          C ? d.current.click() : A(f);
      }
  }, S = l.useMemo(() => ({
    type: r,
    disabled: p,
    hover: u,
    checked: I,
    anchor: C
  }), [r, p, u, I, C]), O = re({
    ...P,
    onPointerDown: w,
    onKeyDown: D,
    onClick: A
  }, z), N = {
    role: b ? "menuitemradio" : h ? "menuitemcheckbox" : ce,
    "aria-checked": b || h ? I : void 0,
    ...se(p, u),
    ...O,
    ref: le(j, d),
    className: x({
      block: K,
      element: ue,
      modifiers: S,
      className: a
    }),
    children: l.useMemo(() => W(c, S), [c, S])
  };
  return C ? /* @__PURE__ */ T.jsx("li", {
    role: oe,
    children: /* @__PURE__ */ T.jsx("a", {
      href: t,
      ...N
    })
  }) : /* @__PURE__ */ T.jsx("li", {
    ...N
  });
}), la = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: a,
  ...i
}, t) {
  return /* @__PURE__ */ T.jsx("li", {
    role: "separator",
    ...i,
    ref: t,
    className: x({
      block: K,
      element: Ke,
      className: a
    })
  });
}));
var he = {}, ge = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-info", t = 512, r = 512, n = ["info-circle"], o = "f05a", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleInfo = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ge);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = ge;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faInfoCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(he);
var me = {}, ve = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-xmark", t = 512, r = 512, n = [61532, "times-circle", "xmark-circle"], o = "f057", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleXmark = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ve);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = ve;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faTimesCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(me);
var we = {}, Ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-check", t = 512, r = 512, n = [61533, "check-circle"], o = "f058", c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faCircleCheck = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Ce);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = Ce;
  e.definition = {
    prefix: a.prefix,
    iconName: a.iconName,
    icon: [
      a.width,
      a.height,
      a.aliases,
      a.unicode,
      a.svgPathData
    ]
  }, e.faCheckCircle = e.definition, e.prefix = a.prefix, e.iconName = a.iconName, e.width = a.width, e.height = a.height, e.ligatures = a.aliases, e.unicode = a.unicode, e.svgPathData = a.svgPathData, e.aliases = a.aliases;
})(we);
const ua = ({
  type: e = "info",
  title: a,
  description: i,
  className: t,
  iconColor: r
}) => {
  const n = l.useMemo(() => ie(e).with("success", () => we.faCheckCircle).with("error", () => me.faTimesCircle).with("info", () => he.faInfoCircle).exhaustive(), [e]), o = l.useMemo(() => r || ie(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: t, children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ M("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ s("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ s(k, { icon: n, css: Z`
                color: ${o};
              `, size: "6x" }) }),
    /* @__PURE__ */ s("div", { children: a }),
    /* @__PURE__ */ s("div", { children: i })
  ] }) }) });
}, da = ({
  ...e
}) => l.useMemo(() => /* @__PURE__ */ s("td", { css: [{
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  borderBottomWidth: "1px",
  borderRightWidth: "1px",
  padding: "0.375rem",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, e.column.getIsResizing() && {
  "--tw-border-opacity": "1",
  borderRightColor: "rgb(0 0 0 / var(--tw-border-opacity))"
}], children: J(e.column.columnDef.cell, e.getContext()) }, e.id), [e.column.columnDef.cell, e]), fa = ({
  onRowDoubleClick: e,
  ...a
}) => /* @__PURE__ */ s("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (i) => e == null ? void 0 : e(a.original, i), children: a.getVisibleCells().map((i) => /* @__PURE__ */ s(da, { ...i }, i.id)) }, a.id);
var be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down", t = 384, r = 512, n = [8595], o = "f063", c = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDown = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(be);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up", t = 384, r = 512, n = [8593], o = "f062", c = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUp = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(pe);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "table-columns", t = 512, r = 512, n = ["columns"], o = "f0db", c = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faTableColumns = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(ye);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down-z-a", t = 576, r = 512, n = ["sort-alpha-desc", "sort-alpha-down-alt"], o = "f881", c = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Me);
var Pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up-a-z", t = 576, r = 512, n = ["sort-alpha-up"], o = "f15e", c = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      o,
      c
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = o, e.svgPathData = c, e.aliases = n;
})(Pe);
const ha = ({
  children: e,
  header: a
}) => {
  const i = a.getContext(), {
    table: t
  } = i, {
    column: r
  } = a, n = t.getVisibleLeafColumns().length, o = [];
  return r.getCanSort() && o.push(/* @__PURE__ */ M(B, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ s(k, { icon: Pe.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ M(B, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ s(k, { icon: Me.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && o.push(/* @__PURE__ */ M(B, { disabled: n === 1, onClick: () => a.column.toggleVisibility(), children: [
    /* @__PURE__ */ s(k, { icon: aa.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ M(Ye, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    o.length > 0 && /* @__PURE__ */ M(q, { children: [
      o,
      /* @__PURE__ */ s(la, {})
    ] }),
    /* @__PURE__ */ s(ca, { label: /* @__PURE__ */ M(q, { children: [
      /* @__PURE__ */ s(k, { icon: ye.faTableColumns }),
      "Колонки"
    ] }), children: t.getAllLeafColumns().filter((c) => c.getCanHide()).map((c) => /* @__PURE__ */ s(B, { type: "checkbox", checked: c.getIsVisible(), disabled: n === 1 && c.getIsVisible(), onClick: (g) => {
      g.keepOpen = !0, c.toggleVisibility();
    }, children: J(c.columnDef.header, i) }, c.id)) })
  ] });
}, ga = (e) => {
  const {
    colSpan: a,
    column: i,
    isPlaceholder: t,
    getContext: r,
    getResizeHandler: n
  } = e;
  return /* @__PURE__ */ M("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, Z`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: a, children: [
    /* @__PURE__ */ M("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, Z`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ M("div", { onClick: () => {
        if (i.getCanSort())
          return i.toggleSorting();
      }, css: [i.getCanSort() ? {
        cursor: "pointer"
      } : null, {
        position: "relative",
        flex: "1 1 0%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        padding: "0.5rem"
      }], children: [
        t ? null : J(i.columnDef.header, r()),
        " ",
        i.getIsSorted() === "asc" && /* @__PURE__ */ s(k, { icon: pe.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        i.getIsSorted() === "desc" && /* @__PURE__ */ s(k, { icon: be.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ s(ha, { header: e, children: ({
        open: o
      }) => /* @__PURE__ */ s("div", { className: "menu", css: [{
        position: "relative",
        right: "0px",
        padding: "0.5rem",
        ":hover": {
          "--tw-bg-opacity": "1",
          backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
        }
      }, {
        cursor: "pointer"
      }, o ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ s(k, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: ia.faCaretDown }) }) })
    ] }),
    i.getCanResize() && /* @__PURE__ */ s("div", { css: [{
      position: "absolute",
      right: "-4px",
      top: "0px",
      zIndex: "10",
      height: "100%",
      width: "7px",
      cursor: "col-resize",
      ":hover": {
        backgroundColor: "rgb(141 148 205 / 0.3)"
      }
    }, i.getIsResizing() && {
      backgroundColor: "rgb(141 148 205 / 0.3)"
    }], onMouseDown: n(), onTouchStart: n(), className: "resizer" })
  ] });
}, ma = ({
  ...e
}) => /* @__PURE__ */ s("thead", { css: {
  position: "sticky",
  top: "0px",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((a) => /* @__PURE__ */ s("tr", { children: a.headers.map((i) => /* @__PURE__ */ s(ga, { ...i }, i.id)) }, a.id)) }), Aa = ({
  table: e,
  border: a = !1,
  className: i,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ s(ua, { type: "error", title: e.error.message }) : /* @__PURE__ */ s(Ze, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ s("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ M("table", { className: i, css: [a && {
  borderLeftWidth: "1px",
  borderTopWidth: "1px"
}, {
  position: "relative",
  minWidth: "100%",
  borderCollapse: "separate",
  "--tw-border-spacing-x": "0px",
  "--tw-border-spacing-y": "0px",
  borderSpacing: "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
  fontSize: "0.75rem",
  lineHeight: "1rem"
}, Z`
              table-layout: fixed;
            `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((r) => /* @__PURE__ */ s("colgroup", { children: r.headers.map((n) => /* @__PURE__ */ s("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, r.id)),
  /* @__PURE__ */ s(ma, { ...e }),
  /* @__PURE__ */ s("tbody", { children: e.getRowModel().rows.map((r) => /* @__PURE__ */ s(fa, { onRowDoubleClick: t, ...r }, r.id)) })
] }) }) }), va = ({
  columns: e,
  data: a = [],
  isLoading: i,
  isFetching: t,
  ...r
}) => {
  const n = Qe({
    getCoreRowModel: Xe(),
    columnResizeMode: "onChange",
    ...r,
    columns: e,
    data: a
  });
  return {
    isLoading: i,
    isFetching: t,
    ...n
  };
}, La = (e, a, {
  defaultSorting: i = [],
  defaultPageSize: t = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: n,
  isLoading: o = !1,
  keepPrevious: c = !0,
  loadingOnFetch: g = !1,
  ...u
} = {}) => {
  var S, O, N;
  const [d, j] = l.useState({
    pageIndex: 0,
    pageSize: t
  }), [z, p] = l.useState(n || []), [w, P] = l.useState(i), [V, H] = l.useState(r);
  l.useEffect(() => {
    var f;
    (f = u.state) != null && f.sorting && P(u.state.sorting);
  }, [(S = u.state) == null ? void 0 : S.sorting]);
  const b = l.useMemo(() => {
    const {
      pageIndex: f,
      pageSize: m
    } = d;
    return {
      start: f * m,
      length: m,
      sort: JSON.stringify(w.map((F) => ({
        property: F.id,
        direction: F.desc ? "DESC" : "ASC"
      }))),
      ...z.length > 0 && {
        extFilters: JSON.stringify(z)
      }
    };
  }, [d, z, w]), h = ta(e, {
    params: b,
    placeholderData: c ? Ge : void 0
  }), C = l.useMemo(() => {
    var f, m;
    return isNaN(Number((f = h.data) == null ? void 0 : f.recordsFiltered)) ? 0 : Number((m = h.data) == null ? void 0 : m.recordsFiltered);
  }, [(O = h.data) == null ? void 0 : O.recordsFiltered]), I = l.useMemo(() => C > 0 ? Math.ceil(C / d.pageSize) : 1, [d.pageSize, C]), A = va({
    ...u,
    columns: a,
    data: (N = h.data) == null ? void 0 : N.data,
    isLoading: h.isLoading || g && h.isFetching || o,
    isFetching: h.isFetching,
    manualPagination: !0,
    onPaginationChange: j,
    onSortingChange: (f) => {
      P(f), u.onSortingChange && u.onSortingChange(f);
    },
    onColumnVisibilityChange: H,
    pageCount: I,
    state: {
      pagination: d,
      sorting: w,
      columnVisibility: V,
      ...u == null ? void 0 : u.state
    }
  }), D = l.useCallback(() => {
    h.refetch();
  }, [h]);
  return {
    ...A,
    recordsTotal: C,
    refetch: D,
    error: h.error
  };
}, wa = ({
  info: e,
  actions: a
}) => {
  const i = oa();
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    gap: "0.25rem"
  }, children: a.filter((t) => i.can(t.privilege)).map(({
    key: t,
    icon: r,
    css: n,
    tooltip: o,
    onClick: c,
    render: g
  }) => {
    const u = r ? /* @__PURE__ */ s(qe, { onClick: (d) => {
      c == null || c(e.row.original), d.stopPropagation();
    }, css: [{
      padding: "4px",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      "--tw-text-opacity": "1",
      color: "rgb(156 163 175 / var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(75 85 99 / var(--tw-text-opacity))"
      }
    }, n], children: /* @__PURE__ */ s(k, { icon: r }) }, t) : g ? /* @__PURE__ */ s(ea.Fragment, { children: g(e.row.original) }, t) : null;
    return o && u ? /* @__PURE__ */ s(Je, { title: o, children: u }, t) : u;
  }) });
}, Ca = (e, a) => ({
  header: a == null ? void 0 : a.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (i) => /* @__PURE__ */ s(wa, { info: i, actions: e })
}), ba = () => (e, a, i) => ({
  header: a,
  accessorKey: e,
  cell: (t) => /* @__PURE__ */ s(q, { children: t.getValue() ? "Да" : "Нет" }),
  ...i
}), pa = () => (e, a, {
  inputFormat: i = "YYYY-MM-DD HH:mm:ss",
  displayFormat: t = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: a,
  accessorKey: e,
  ...r,
  cell: (n) => n.getValue() ? na(n.getValue(), i).format(t) : ""
}), ya = () => (e, a, i, t) => ({
  header: i,
  accessorKey: e,
  ...t,
  cell: (r) => /* @__PURE__ */ s(ra, { info: r, dictionary: a })
}), Ma = () => (e, a, i) => ({
  ...i,
  header: a,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), Pa = () => (e = "id", a) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...a
}), Ta = () => ({
  id: Pa(),
  actions: Ca,
  display: Ma(),
  boolean: ba(),
  date: pa(),
  dictionary: ya()
});
export {
  ua as S,
  Aa as T,
  va as a,
  Ta as c,
  we as f,
  La as u
};
