import { useEffect } from "react";

function FacebookRedirect() {
  useEffect(() => {
    window.location.href = "https://www.facebook.com";
  }, []);

  return null;
}

export default FacebookRedirect;