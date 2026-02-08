import { useEffect } from "react";

function TwitterRedirect() {
  useEffect(() => {
    window.location.href = "https://twitter.com";
  }, []);

  return null;
}

export default TwitterRedirect;