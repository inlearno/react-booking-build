import { r } from "./react-6f5a8403.js";
import { u as s } from "./useWindowController-9a1df740.js";
const u = (o) => {
  const {
    setTitle: t
  } = s();
  r.useEffect(() => {
    t(o);
  }, [o]);
};
export {
  u
};