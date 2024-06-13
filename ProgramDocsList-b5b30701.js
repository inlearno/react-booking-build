import { Q as f, j as l } from "./library-edebc13d.js";
import { f as v } from "./faPlus-da331287.js";
import { f as h } from "./faEye-ea161ce6.js";
import { f as b } from "./faPenAlt-38421783.js";
import { u as C, T as D, c as P } from "./index-e4b74cf0.js";
import { u as z, P as S, a as _ } from "./DictionaryCell-0ed6c265.js";
import { g as p, r as m } from "./react-6f5a8403.js";
import { u as H } from "./useNavigate-2d1a7521.js";
import { F as E } from "./icons-ad9f8a73.js";
import { u as L } from "./useUser-008a8ae3.js";
import { I as j } from "./mui-d84d21b5.js";
import "./table-f5369550.js";
var R = function(e, n, a, t) {
  var r = typeof t < "u" ? [t, e] : [e], o = new Blob(r, { type: a || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob < "u")
    window.navigator.msSaveBlob(o, n);
  else {
    var s = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(o) : window.webkitURL.createObjectURL(o), i = document.createElement("a");
    i.style.display = "none", i.href = s, i.setAttribute("download", n), typeof i.download > "u" && i.setAttribute("target", "_blank"), document.body.appendChild(i), i.click(), setTimeout(function() {
      document.body.removeChild(i), window.URL.revokeObjectURL(s);
    }, 200);
  }
};
const U = /* @__PURE__ */ p(R), V = /\s*;\s*/, M = /\s*:\s*/, $ = /\s*=\s*(.+)/, N = /\s*'[^']*'\s*(.*)/, O = /(?:^["'\s]*)|(?:["'\s]*$)/g, T = (e) => {
  if (!(e && typeof e == "string"))
    return;
  const n = e.split(V).map((t) => t.trim()).filter((t) => !!t);
  let a = n.shift();
  if (a)
    return a = a.toLowerCase().split(M), a = a[1] || a[0], n.map((t) => t.split($)).reduce((t, [r, o]) => {
      if (!o)
        t[r] = !0;
      else if (r.slice(-1) === "*") {
        let s;
        if ([s, o] = o.split(N), o) {
          try {
            o = decodeURIComponent(o);
          } catch {
          }
          t[r.slice(0, -1).toLowerCase()] = o;
        }
        t.encoding = s.toLowerCase();
      } else
        r in t || (t[r.toLowerCase()] = o.replace(O, ""));
      return t;
    }, { type: a });
};
var A = T;
const B = /* @__PURE__ */ p(A), F = () => {
  const [e, n] = m.useState(!1), [a, t] = m.useState(), r = z();
  return {
    loading: e,
    error: a,
    download: async (s, i = "file.unknown") => {
      n(!0);
      try {
        const {
          data: d,
          headers: g
        } = await r.get(s, {
          responseType: "blob"
        }), {
          filename: y = i
        } = B(g["content-disposition"] || `attachment; filename=${i}`);
        U(d, y);
      } catch (d) {
        throw t(d), d;
      } finally {
        n(!1);
      }
    }
  };
};
var u = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", a = "copy", t = 448, r = 512, o = [], s = "f0c5", i = "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z";
  e.definition = {
    prefix: n,
    iconName: a,
    icon: [
      t,
      r,
      o,
      s,
      i
    ]
  }, e.faCopy = e.definition, e.prefix = n, e.iconName = a, e.width = t, e.height = r, e.ligatures = o, e.unicode = s, e.svgPathData = i, e.aliases = o;
})(u);
var w = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = "fas", a = "download", t = 512, r = 512, o = [], s = "f019", i = "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z";
  e.definition = {
    prefix: n,
    iconName: a,
    icon: [
      t,
      r,
      o,
      s,
      i
    ]
  }, e.faDownload = e.definition, e.prefix = n, e.iconName = a, e.width = t, e.height = r, e.ligatures = o, e.unicode = s, e.svgPathData = i, e.aliases = o;
})(w);
const c = P(), ee = () => {
  const e = H(), {
    download: n
  } = F(), a = L(), t = m.useMemo(() => [c.id(), c.actions([{
    key: "download",
    icon: w.faDownload,
    tooltip: "Скачать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(22 163 74 / var(--tw-text-opacity))"
      }
    },
    onClick: async (o) => {
      const s = f.loading("Загрузка документа...", {
        position: "top-center"
      });
      try {
        await n(`/api/program-docs/${o.id}/docx/download`), f.dismiss(s);
      } catch {
        f.update(s, {
          autoClose: 5e3,
          type: "error",
          isLoading: !1,
          render: "Ошибка загрузки"
        });
      }
    }
  }, {
    key: "copy",
    icon: u.faCopy,
    tooltip: "Копировать документ",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(217 119 6 / var(--tw-text-opacity))"
      }
    },
    onClick: (o) => {
      e(`/program-docs/copy/${o.id}`);
    }
  }, {
    key: "edit",
    icon: a.can("ProgramDocsEdit") ? b.faPenAlt : h.faEye,
    tooltip: a.can("ProgramDocsEdit") ? "Редактировать документ" : "Просмотр документа",
    css: {
      ":hover": {
        "--tw-text-opacity": "1",
        color: "rgb(90 88 173 / var(--tw-text-opacity))"
      }
    },
    onClick: (o) => {
      e(`/program-docs/constructor/${o.id}`);
    }
  }], {
    header: "Действия"
  }), c.display("name", "Наименование программы", {
    size: 150
  }), c.display("partner_name", "Организация", {
    size: 150,
    enableSorting: !1
  }), c.display("municipality_name", "Муниципалитет организации", {
    size: 150,
    enableSorting: !1
  }), c.dictionary("state_id", "programDocStates", "Статус", {
    size: 80
  }), c.display("section_name", "Направленность", {
    size: 150,
    enableSorting: !1
  }), c.dictionary("program_level_id", "EventLevelsDict", "Уровень", {
    size: 150
  }), c.date("created", "Дата создания", {
    size: 120
  }), c.boolean("is_deleted", "Удалён", {
    size: 50
  }), c.display("user_name", "Пользователь", {
    size: 150,
    enableSorting: !1
  })], []), r = C("/api/rest/program-docs", t, {
    defaultSorting: [{
      id: "id",
      desc: !0
    }],
    defaultColumnVisibility: {
      is_deleted: !1
    }
  });
  return /* @__PURE__ */ l(_, { fit: !0, header: a.can("ProgramDocsEdit") ? /* @__PURE__ */ l(j, { size: "small", onClick: () => e("/program-docs/draft"), children: /* @__PURE__ */ l(E, { icon: v.faPlus }) }) : null, footer: /* @__PURE__ */ l(S, { table: r }), children: /* @__PURE__ */ l(D, { table: r, onRowDoubleClick: (o) => {
    e(`/program-docs/constructor/${o.id}`);
  } }) });
};
export {
  ee as default
};
