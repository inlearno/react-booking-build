import { c as s } from "./library-3f58680c.js";
import { g as e, Q as t } from "./Boolean-27f9eee7.js";
import "./react-6f5a8403.js";
import "./icons-ad9f8a73.js";
import "./DictionaryCell-8fb4fd99.js";
const u = () => {
  const r = s();
  return (i) => r.invalidateQueries({
    queryKey: [i]
  });
}, d = e(t, {
  url: "/api/rest/partners",
  displayField: "name"
});
e(t, {
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "is_deleted",
      value: !1
    }])
  }
});
const y = e(t, {
  url: "/api/rest/sections",
  displayField: "title",
  params: {
    extFilters: JSON.stringify([{
      property: "parent_id",
      value: 0
    }, {
      property: "is_deleted",
      value: !1
    }])
  }
});
export {
  d as P,
  y as R,
  u
};
