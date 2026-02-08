import { useEffect } from "react";

function LinkedInRedirect() {
  useEffect(() => {
    window.location.href = "https://www.linkedin.com";
  }, []);

  return null;
}

export default LinkedInRedirect;