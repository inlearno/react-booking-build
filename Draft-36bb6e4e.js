import { j as e, b as p } from "./library-89924fb6.js";
import { u, B as f } from "./faEye-4bb4da1d.js";
import { a as h } from "./DictionaryCell-ab51e979.js";
import "./icons-ad9f8a73.js";
import "./react-6f5a8403.js";
import { u as g } from "./useWindowController-e96b5028.js";
import { u as b, b as t, T as a, D as n, F as v } from "./Boolean-bd97810c.js";
import { u as y } from "./useResetHttpQueryCache-417cfbdb.js";
import { R as x, i as _ } from "./year-d4adad5d.js";
import { u as q } from "./useNavigate-a3a5aec0.js";
import { P, R as T } from "./RootSection-b37b4de9.js";
import "./mui-2ff488a7.js";
import "./useUser-268e1bce.js";
import "./configureQueriedCombo-d47d051b.js";
const V = () => {
  const {
    close: s
  } = g(), i = q(), d = y(), l = u("POST", "/api/rest/program-docs", {
    onSuccess: (r) => {
      i(`/program-docs/constructor/${r.data.id}`), d("/api/rest/program-docs"), s();
    }
  }), o = b({
    mutation: l,
    defaultValues: {
      steps_info: {
        general: "done"
      }
    }
  });
  return /* @__PURE__ */ e(h, { fit: !0, footer: /* @__PURE__ */ e("div", { css: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
  }, children: /* @__PURE__ */ e(f, { variant: "contained", color: "success", disabled: l.isPending, onClick: () => o.submit(), children: "Создать черновик" }) }), children: /* @__PURE__ */ p(v, { css: {
    display: "grid",
    gap: "1rem",
    padding: "1rem"
  }, form: o, children: [
    /* @__PURE__ */ e(t, { control: o.control, name: "name", rules: {
      required: "Заполните наименование"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { css: {
      width: "100%"
    }, ...r, placeholder: "Введите наименование", label: "Наименование" }) }),
    /* @__PURE__ */ e(x, { is: "admin", children: /* @__PURE__ */ e(t, { control: o.control, name: "partner_id", rules: {
      required: "Выберите организацию"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(P, { ...r, placeholder: "Выберите организацию", label: "Организация" }) }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "program_type_id", rules: {
      required: "Выберите тип программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Тип программы", ...r, dictionary: "navProgramType", filterOptions: (c) => c.filter(({
      id: m
    }) => m === 1), placeholder: "Выберите тип программы" }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "section_id", rules: {
      required: "Выберите направленность"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(T, { label: "Направленность", placeholder: "Выберите направленность", ...r }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "program_level_id", rules: {
      required: "Выберите уровень программы"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(n, { label: "Уровень", css: {
      width: "100%"
    }, ...r, dictionary: "EventLevelsDict", placeholder: "Выберите уровень программы" }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "year_created", rules: {
      required: "Введите год",
      maxLength: {
        value: 4,
        message: "Максимум 4 цифры"
      },
      minLength: {
        value: 4,
        message: "Минимум 4 цифры"
      },
      validate: _
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { label: "Год создания", placeholder: "Введите год", helperText: `Год создания программы, к примеру ${(/* @__PURE__ */ new Date()).getFullYear()}`, ...r }) }),
    /* @__PURE__ */ e(t, { control: o.control, name: "city_created", rules: {
      required: "Введите город"
    }, render: ({
      field: r
    }) => /* @__PURE__ */ e(a, { label: "Город", placeholder: "Введите город", helperText: "Город, где программа создана", ...r }) })
  ] }) });
};
export {
  V as default
};
