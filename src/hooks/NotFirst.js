import { useEffect, useRef } from "react";

function NotFirst(func, deps) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
}

export default NotFirst;
