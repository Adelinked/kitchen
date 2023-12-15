import { useState, useEffect } from "react";

const useInteraction = () => {
  const [interactionReady, setInteractionReady] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setInteractionReady(true);
      //onInteraction();  Invoke the provided callback
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    // Add event listeners for mousemove and keydown
    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      // Cleanup event listeners when the component unmounts
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return interactionReady;
};

export default useInteraction;
