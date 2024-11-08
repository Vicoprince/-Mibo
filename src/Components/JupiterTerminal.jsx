// JupiterTerminal.js
import React, { useEffect } from 'react';

const JupiterTerminal = () => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v3.js';
    script.async = true;

    const initTerminal = () => {
      if (window.Jupiter) {
        window.Jupiter.init({
          displayMode: "widget",
          endpoint: "https://api.mainnet-beta.solana.com",
          strictTokenList: false,
        });
      } else {
        console.error('Jupiter library did not load correctly');
      }
    };

    script.onload = initTerminal;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Make sure the id matches "integrated-terminal" as specified in init settings
  return <div id="integrated-terminal" />;
};

export default JupiterTerminal;
