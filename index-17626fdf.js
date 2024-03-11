import { H as Te, e as Ee, g as ae, M as _e, h as ie, i as je, k as Ve, l as Oe, m as ne, n as Y, o as W, s as Fe, r as te, p as re, q as ce, t as oe, v as se, w as K, x as B, K as _, y as Re, z as Ue, A as Ke, E as Ye, R as We, B as Be, N as ee, j as s, a as p, F as Z, C as Ze, S as Ge, D as qe } from "./library-67a87d27.js";
import { j as T, a as G } from "./mui-4f485058.js";
import { C as Je, f as Qe, c as Xe, b as $e, A as xe, h as ea, D as aa } from "./DictionaryCell-3569b25d.js";
import { F as L } from "./icons-ad9f8a73.js";
import { f as le, u as ia, g as na } from "./table-f5369550.js";
import { r as l, c as ta } from "./react-6f5a8403.js";
const ue = (e, a) => {
  const i = /* @__PURE__ */ l.memo(a), t = /* @__PURE__ */ l.forwardRef((r, n) => {
    const c = l.useRef(null);
    return /* @__PURE__ */ T.jsx(i, {
      ...r,
      itemRef: c,
      externalRef: n,
      isHovering: l.useContext(Te) === c.current
    });
  });
  return t.displayName = `WithHovering(${e})`, t;
}, de = (e, a, i) => {
  Ee(() => {
    if (e)
      return;
    const t = a.current;
    return i(t, !0), () => {
      i(t);
    };
  }, [e, a, i]);
}, ra = /* @__PURE__ */ ue("SubMenu", function({
  "aria-label": a,
  className: i,
  disabled: t,
  direction: r,
  label: n,
  openTrigger: c,
  onMenuChange: o,
  isHovering: m,
  instanceRef: g,
  itemRef: u,
  captureFocus: j,
  repositionFlag: S,
  itemProps: y = {},
  ...C
}) {
  const k = l.useContext(ae), {
    rootMenuRef: V,
    submenuOpenDelay: z,
    submenuCloseDelay: b
  } = k, {
    parentMenuRef: d,
    parentDir: w,
    overflow: H
  } = l.useContext(_e), {
    isParentOpen: A,
    submenuCtx: D,
    dispatch: N,
    updateItems: O
  } = l.useContext(ie), M = H !== "visible", [f, v, Pe] = je(k), {
    state: J
  } = f, I = !!t, P = Ve(J), Q = l.useRef(null), [E] = l.useState({
    v: 0
  }), X = () => {
    D.off(), E.v && (clearTimeout(E.v), E.v = 0);
  }, R = (...h) => {
    X(), $(), !I && Pe(...h);
  }, $ = () => !m && !I && N(B.SET, u.current), x = (h) => {
    $(), c || (E.v = setTimeout(() => Ke(R), Math.max(h, 0)));
  }, De = (h) => {
    I || (h.stopPropagation(), !(E.v || P) && D.on(b, () => x(z - b), () => x(z)));
  }, Ne = () => {
    X(), P || N(B.UNSET, u.current);
  }, Se = (h) => {
    if (m)
      switch (h.key) {
        case _.ENTER:
          h.preventDefault();
        case _.SPACE:
        case _.RIGHT:
          c !== "none" && R(Re.FIRST);
      }
  }, ke = (h) => {
    let F = !1;
    switch (h.key) {
      case _.LEFT:
        P && (u.current.focus(), v(!1), F = !0);
        break;
      case _.RIGHT:
        P || (F = !0);
        break;
    }
    F && (h.preventDefault(), h.stopPropagation());
  };
  de(I, u, O), Oe(o, P), l.useEffect(() => D.toggle(P), [D, P]), l.useEffect(() => () => clearTimeout(E.v), [E]), l.useEffect(() => {
    m && A ? u.current.focus() : v(!1);
  }, [m, A, v, u]), l.useImperativeHandle(g, () => ({
    openMenu: (...h) => {
      A && R(...h);
    },
    closeMenu: () => {
      P && (u.current.focus(), v(!1));
    }
  }));
  const q = l.useMemo(() => ({
    open: P,
    hover: m,
    disabled: I,
    submenu: !0
  }), [P, m, I]), {
    ref: ze,
    className: He,
    ...Ae
  } = y, Ie = ne({
    onPointerEnter: D.off,
    onPointerMove: De,
    onPointerLeave: Ne,
    onKeyDown: Se,
    onClick: () => c !== "none" && R()
  }, Ae), Le = () => {
    const h = /* @__PURE__ */ T.jsx(Ue, {
      ...C,
      ...f,
      ariaLabel: a || (typeof n == "string" ? n : "Submenu"),
      anchorRef: u,
      containerRef: M ? V : Q,
      direction: r || (w === "right" || w === "left" ? w : "right"),
      parentScrollingRef: M && d,
      isDisabled: I
    }), F = V.current;
    return M && F ? /* @__PURE__ */ ta.createPortal(h, F) : h;
  };
  return /* @__PURE__ */ T.jsxs("li", {
    className: Y({
      block: W,
      element: Fe,
      className: i
    }),
    style: {
      position: "relative"
    },
    role: te,
    ref: Q,
    onKeyDown: ke,
    children: [/* @__PURE__ */ T.jsx("div", {
      role: re,
      "aria-haspopup": !0,
      "aria-expanded": P,
      ...ce(I, m),
      ...Ie,
      ref: oe(ze, u),
      className: Y({
        block: W,
        element: se,
        modifiers: q,
        className: He
      }),
      children: l.useMemo(() => K(n, q), [n, q])
    }), J && Le()]
  });
}), ca = (e, a, i, t) => {
  const {
    submenuCloseDelay: r
  } = l.useContext(ae), {
    isParentOpen: n,
    submenuCtx: c,
    dispatch: o,
    updateItems: m
  } = l.useContext(ie), g = () => {
    !i && !t && o(B.SET, e.current);
  }, u = () => {
    !t && o(B.UNSET, e.current);
  }, j = (C) => {
    i && !C.currentTarget.contains(C.relatedTarget) && u();
  }, S = (C) => {
    t || (C.stopPropagation(), c.on(r, g, g));
  }, y = (C, k) => {
    c.off(), !k && u();
  };
  return de(t, e, m), l.useEffect(() => {
    i && n && a.current && a.current.focus();
  }, [a, i, n]), {
    setHover: g,
    onBlur: j,
    onPointerMove: S,
    onPointerLeave: y
  };
}, U = /* @__PURE__ */ ue("MenuItem", function({
  className: a,
  value: i,
  href: t,
  type: r,
  checked: n,
  disabled: c,
  children: o,
  onClick: m,
  isHovering: g,
  itemRef: u,
  externalRef: j,
  ...S
}) {
  const y = !!c, {
    setHover: C,
    ...k
  } = ca(u, u, g, y), V = l.useContext(Ye), z = l.useContext(We), b = r === "radio", d = r === "checkbox", w = !!t && !y && !b && !d, H = b ? z.value === i : d ? !!n : !1, A = (f) => {
    if (y) {
      f.stopPropagation(), f.preventDefault();
      return;
    }
    const v = {
      value: i,
      syntheticEvent: f
    };
    f.key !== void 0 && (v.key = f.key), d && (v.checked = !H), b && (v.name = z.name), K(m, v), b && K(z.onRadioChange, v), V.handleClick(v, d || b);
  }, D = (f) => {
    if (g)
      switch (f.key) {
        case _.ENTER:
          f.preventDefault();
        case _.SPACE:
          w ? u.current.click() : A(f);
      }
  }, N = l.useMemo(() => ({
    type: r,
    disabled: y,
    hover: g,
    checked: H,
    anchor: w
  }), [r, y, g, H, w]), O = ne({
    ...k,
    onPointerDown: C,
    onKeyDown: D,
    onClick: A
  }, S), M = {
    role: b ? "menuitemradio" : d ? "menuitemcheckbox" : re,
    "aria-checked": b || d ? H : void 0,
    ...ce(y, g),
    ...O,
    ref: oe(j, u),
    className: Y({
      block: W,
      element: se,
      modifiers: N,
      className: a
    }),
    children: l.useMemo(() => K(o, N), [o, N])
  };
  return w ? /* @__PURE__ */ T.jsx("li", {
    role: te,
    children: /* @__PURE__ */ T.jsx("a", {
      href: t,
      ...M
    })
  }) : /* @__PURE__ */ T.jsx("li", {
    ...M
  });
}), oa = /* @__PURE__ */ l.memo(/* @__PURE__ */ l.forwardRef(function({
  className: a,
  ...i
}, t) {
  return /* @__PURE__ */ T.jsx("li", {
    role: "separator",
    ...i,
    ref: t,
    className: Y({
      block: W,
      element: Be,
      className: a
    })
  });
}));
var fe = {}, he = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-info", t = 512, r = 512, n = ["info-circle"], c = "f05a", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleInfo = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(he);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = he;
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
})(fe);
var ge = {}, me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-xmark", t = 512, r = 512, n = [61532, "times-circle", "xmark-circle"], c = "f057", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleXmark = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(me);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = me;
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
})(ge);
var ve = {}, Ce = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "circle-check", t = 512, r = 512, n = [61533, "check-circle"], c = "f058", o = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faCircleCheck = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
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
})(ve);
const sa = ({
  type: e = "info",
  title: a,
  description: i,
  className: t,
  iconColor: r
}) => {
  const n = l.useMemo(() => ee(e).with("success", () => ve.faCheckCircle).with("error", () => ge.faTimesCircle).with("info", () => fe.faInfoCircle).exhaustive(), [e]), c = l.useMemo(() => r || ee(e).with("success", () => "#4ade80").with("error", () => "#f87171").with("info", () => "#60a5fa").exhaustive(), [r, e]);
  return /* @__PURE__ */ s("div", { css: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }, className: t, children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ p("div", { css: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }, className: "status", children: [
    /* @__PURE__ */ s("div", { className: "icon", css: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ s(L, { icon: n, css: G`
                color: ${c};
              `, size: "6x" }) }),
    /* @__PURE__ */ s("div", { children: a }),
    /* @__PURE__ */ s("div", { children: i })
  ] }) }) });
}, la = ({
  onRowDoubleClick: e,
  ...a
}) => /* @__PURE__ */ s("tr", { css: [{
  ":hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgb(244 245 250 / var(--tw-bg-opacity))"
  }
}], onDoubleClick: (i) => e == null ? void 0 : e(a.original, i), children: a.getVisibleCells().map((i) => /* @__PURE__ */ s(Je, { ...i }, i.id)) }, a.id);
var we = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down", t = 384, r = 512, n = [8595], c = "f063", o = "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowDown = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(we);
var be = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up", t = 384, r = 512, n = [8593], c = "f062", o = "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowUp = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(be);
var pe = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "table-columns", t = 512, r = 512, n = ["columns"], c = "f0db", o = "M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faTableColumns = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(pe);
var ye = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-down-z-a", t = 576, r = 512, n = ["sort-alpha-desc", "sort-alpha-down-alt"], c = "f881", o = "M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowDownZA = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(ye);
var Me = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a = "fas", i = "arrow-up-a-z", t = 576, r = 512, n = ["sort-alpha-up"], c = "f15e", o = "M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z";
  e.definition = {
    prefix: a,
    iconName: i,
    icon: [
      t,
      r,
      n,
      c,
      o
    ]
  }, e.faArrowUpAZ = e.definition, e.prefix = a, e.iconName = i, e.width = t, e.height = r, e.ligatures = n, e.unicode = c, e.svgPathData = o, e.aliases = n;
})(Me);
const ua = ({
  children: e,
  header: a
}) => {
  const i = a.getContext(), {
    table: t
  } = i, {
    column: r
  } = a, n = t.getVisibleLeafColumns().length, c = [];
  return r.getCanSort() && c.push(/* @__PURE__ */ p(U, { onClick: () => r.toggleSorting(!1), children: [
    /* @__PURE__ */ s(L, { icon: Me.faArrowUpAZ }),
    " Сортировать по возрастанию"
  ] }, "asc"), /* @__PURE__ */ p(U, { onClick: () => r.toggleSorting(!0), children: [
    /* @__PURE__ */ s(L, { icon: ye.faArrowDownZA }),
    "Сортировать по убыванию"
  ] }, "desc")), r.getCanHide() && c.push(/* @__PURE__ */ p(U, { disabled: n === 1, onClick: () => a.column.toggleVisibility(), children: [
    /* @__PURE__ */ s(L, { icon: Qe.faEyeSlash }),
    "Скрыть колонку"
  ] }, "hide")), /* @__PURE__ */ p(Ze, { menuButton: e, css: {
    fontSize: "0.75rem",
    lineHeight: "1rem"
  }, direction: "bottom", portal: !0, children: [
    c.length > 0 && /* @__PURE__ */ p(Z, { children: [
      c,
      /* @__PURE__ */ s(oa, {})
    ] }),
    /* @__PURE__ */ s(ra, { label: /* @__PURE__ */ p(Z, { children: [
      /* @__PURE__ */ s(L, { icon: pe.faTableColumns }),
      "Колонки"
    ] }), children: t.getAllLeafColumns().filter((o) => o.getCanHide()).map((o) => /* @__PURE__ */ s(U, { type: "checkbox", checked: o.getIsVisible(), disabled: n === 1 && o.getIsVisible(), onClick: (m) => {
      m.keepOpen = !0, o.toggleVisibility();
    }, children: le(o.columnDef.header, i) }, o.id)) })
  ] });
}, da = (e) => {
  const {
    colSpan: a,
    column: i,
    isPlaceholder: t,
    getContext: r,
    getResizeHandler: n
  } = e;
  return /* @__PURE__ */ p("th", { css: [{
    position: "relative",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderBottomWidth: "2px",
    borderRightWidth: "1px",
    padding: "0px",
    textAlign: "left"
  }, G`
          &:last-child {
            .resizer {
              right: 0;
            }
          }
        `], colSpan: a, children: [
    /* @__PURE__ */ p("div", { css: [{
      position: "relative",
      display: "flex",
      width: "100%",
      overflow: "hidden",
      ":hover": {
        backgroundColor: "rgb(229 231 235 / 0.6)"
      }
    }, G`
            &:hover {
              .menu {
                display: block;
              }
            }
          `], children: [
      /* @__PURE__ */ p("div", { onClick: () => {
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
        t ? null : le(i.columnDef.header, r()),
        " ",
        i.getIsSorted() === "asc" && /* @__PURE__ */ s(L, { icon: be.faArrowUp, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } }),
        i.getIsSorted() === "desc" && /* @__PURE__ */ s(L, { icon: we.faArrowDown, css: {
          "--tw-text-opacity": "1",
          color: "rgb(90 88 173 / var(--tw-text-opacity))"
        } })
      ] }),
      /* @__PURE__ */ s(ua, { header: e, children: ({
        open: c
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
      }, c ? {
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(229 231 235 / var(--tw-bg-opacity))"
      } : {
        display: "none"
      }], children: /* @__PURE__ */ s(L, { css: {
        "--tw-text-opacity": "1",
        color: "rgb(156 163 175 / var(--tw-text-opacity))"
      }, icon: Xe.faCaretDown }) }) })
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
}, fa = ({
  ...e
}) => /* @__PURE__ */ s("thead", { css: {
  position: "sticky",
  top: "0px",
  zIndex: "10",
  "--tw-bg-opacity": "1",
  backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity))"
}, children: e.getHeaderGroups().map((a) => /* @__PURE__ */ s("tr", { children: a.headers.map((i) => /* @__PURE__ */ s(da, { ...i }, i.id)) }, a.id)) }), Sa = ({
  table: e,
  border: a = !1,
  className: i,
  onRowDoubleClick: t
}) => e.error ? /* @__PURE__ */ s(sa, { type: "error", title: e.error.message }) : /* @__PURE__ */ s(Ge, { spinning: e.isLoading ?? !1, children: /* @__PURE__ */ s("div", { css: [{
  minHeight: "200px"
}], children: /* @__PURE__ */ p("table", { className: i, css: [a && {
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
}, G`
              table-layout: fixed;
            `], style: {
  width: e.getTotalSize()
}, children: [
  e.getHeaderGroups().map((r) => /* @__PURE__ */ s("colgroup", { children: r.headers.map((n) => /* @__PURE__ */ s("col", { span: n.colSpan, style: {
    width: n.column.getSize()
  } }, n.id)) }, r.id)),
  e.isLoading === !0 ? null : /* @__PURE__ */ p(Z, { children: [
    /* @__PURE__ */ s(fa, { ...e }),
    /* @__PURE__ */ s("tbody", { children: e.getRowModel().rows.map((r) => /* @__PURE__ */ s(la, { onRowDoubleClick: t, ...r }, r.id)) })
  ] })
] }) }) }), ha = ({
  columns: e,
  data: a = [],
  isLoading: i,
  isFetching: t,
  ...r
}) => {
  const n = ia({
    getCoreRowModel: na(),
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
}, ka = (e, a, {
  defaultSorting: i = [],
  defaultPageSize: t = 25,
  defaultColumnVisibility: r = {},
  defaultFilters: n,
  isLoading: c = !1,
  keepPrevious: o = !0,
  loadingOnFetch: m = !1,
  ...g
} = {}) => {
  var N, O;
  const [u, j] = l.useState({
    pageIndex: 0,
    pageSize: t
  }), [S, y] = l.useState(n || []), [C, k] = l.useState(i), [V, z] = l.useState(r), b = l.useMemo(() => {
    const {
      pageIndex: M,
      pageSize: f
    } = u;
    return {
      start: M * f,
      length: f,
      sort: JSON.stringify(C.map((v) => ({
        property: v.id,
        direction: v.desc ? "DESC" : "ASC"
      }))),
      ...S.length > 0 && {
        extFilters: JSON.stringify(S)
      }
    };
  }, [u, S, C]), d = $e(e, {
    params: b,
    placeholderData: o ? qe : void 0
  }), w = l.useMemo(() => {
    var M, f;
    return isNaN(Number((M = d.data) == null ? void 0 : M.recordsFiltered)) ? 0 : Number((f = d.data) == null ? void 0 : f.recordsFiltered);
  }, [(N = d.data) == null ? void 0 : N.recordsFiltered]), H = l.useMemo(() => w > 0 ? Math.ceil(w / u.pageSize) : 1, [u.pageSize, w]), A = ha({
    ...g,
    columns: a,
    data: (O = d.data) == null ? void 0 : O.data,
    isLoading: d.isLoading || m && d.isFetching || c,
    isFetching: d.isFetching,
    manualPagination: !0,
    onPaginationChange: j,
    onSortingChange: k,
    onColumnVisibilityChange: z,
    pageCount: H,
    state: {
      ...g == null ? void 0 : g.state,
      pagination: u,
      sorting: C,
      columnVisibility: V
    }
  }), D = l.useCallback(() => {
    d.refetch();
  }, [d]);
  return {
    ...A,
    recordsTotal: w,
    refetch: D,
    error: d.error
  };
}, ga = (e, a) => ({
  header: a == null ? void 0 : a.header,
  id: "actions",
  enableSorting: !1,
  enableHiding: !1,
  size: e.length * 20 + (e.length - 1) * 4 + 16,
  cell: (i) => /* @__PURE__ */ s(xe, { info: i, actions: e })
}), ma = () => (e, a, i) => ({
  header: a,
  accessorKey: e,
  cell: (t) => /* @__PURE__ */ s(Z, { children: t.getValue() ? "Да" : "Нет" }),
  ...i
}), va = () => (e, a, {
  inputFormat: i = "YYYY-MM-DD HH:mm:ss",
  displayFormat: t = "DD.MM.YYYY HH:mm:ss",
  ...r
} = {}) => ({
  header: a,
  accessorKey: e,
  ...r,
  cell: (n) => n.getValue() ? ea(n.getValue(), i).format(t) : ""
}), Ca = () => (e, a, i, t) => ({
  header: i,
  accessorKey: e,
  ...t,
  cell: (r) => /* @__PURE__ */ s(aa, { info: r, dictionary: a })
}), wa = () => (e, a, i) => ({
  ...i,
  header: a,
  ...typeof e == "function" ? {
    accessorFn: e
  } : {
    accessorKey: e
  }
}), ba = () => (e = "id", a) => ({
  header: "iD",
  accessorKey: e,
  size: 50,
  ...a
}), za = () => ({
  id: ba(),
  actions: ga,
  display: wa(),
  boolean: ma(),
  date: va(),
  dictionary: Ca()
});
export {
  sa as S,
  Sa as T,
  ha as a,
  za as c,
  ve as f,
  ka as u
};