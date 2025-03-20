import "./App.css"
import { useState, useEffect } from "react";


function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 40000); // Hide after 40 seconds

    return () => clearTimeout(timer); // Cleanup function
  }, []);
  return (
    <>
      <div className="Axtri_main">

       {isVisible && (
          <div className="par">
            <h2>Welcome to Axtri Software Services, Our Website is under development</h2>
            <br />
            <h3>Meanwhile, you can see the insights of Our company</h3>
          </div>
        )}
        <iframe
          src="https://embed.figma.com/proto/RjrvbpcAIc9u3ghLKPvcFc/Axtri?node-id=679-9207&t=XWSvPAaSrZhPISPk-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&hide-ui=1&embed-host=figma-embed-docs"
          frameborder="0"
          className="iframe_design" 
          allowfullscreen
        >

        </iframe>
      </div>
    </>
  );
}

export default App;
