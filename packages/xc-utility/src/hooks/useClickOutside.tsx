import React from "react";

function useClickOutside(ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent) => void) {
  React.useEffect(() => {
    var listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
}

export { useClickOutside };