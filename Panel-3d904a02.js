import { j as w, d as o } from "./library-f9686326.js";
const e = ({
  left: d,
  center: s,
  right: r,
  top: a,
  ...t
}) => /* @__PURE__ */ w("div", { role: "toolbar", css: [{
  zIndex: "10",
  display: "flex",
  height: "3rem",
  alignItems: "center",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem"
}, a ? {
  borderBottomWidth: "1px",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 10px 20px -5px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.05)"
} : {
  borderTopWidth: "1px",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "--tw-shadow": "var(--tw-shadow-colored)",
  "--tw-shadow-colored": "0 -10px 30px -15px var(--tw-shadow-color)",
  boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "--tw-shadow-color": "rgb(0 0 0 / 0.1)"
}], ...t, children: [
  /* @__PURE__ */ o("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: d }),
  /* @__PURE__ */ o("div", { css: {
    flex: "1 1 0%"
  }, children: s }),
  /* @__PURE__ */ o("div", { css: {
    display: "flex",
    gap: "0.5rem"
  }, children: r })
] }), n = ({
  bottomToolbarRenderer: d,
  children: s,
  topToolbarProps: r,
  topToolbarRenderer: a,
  bottomToolbarProps: t,
  ...i
}) => {
  const l = a ? a() : r ? /* @__PURE__ */ o(e, { ...r, top: !0 }) : null, h = d ? d() : t ? /* @__PURE__ */ o(e, { ...t }) : null;
  return /* @__PURE__ */ w("div", { css: [{
    display: "flex",
    height: "100%",
    userSelect: "text",
    flexDirection: "column"
  }], ...i, children: [
    l,
    /* @__PURE__ */ o("div", { css: [{
      flex: "1 1 0%",
      overflow: "auto"
    }], children: s }),
    h
  ] });
};
export {
  n as P
};
