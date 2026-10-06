import { useEffect } from "react";

const SUFFIX = "Navegar com Cuidado";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX;
  }, [title]);
}
