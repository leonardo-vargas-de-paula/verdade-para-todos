import { useEffect } from "react";

const SUFFIX = "Verdade para Todos";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX;
  }, [title]);
}
