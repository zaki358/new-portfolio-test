import { BrowserRouter } from "react-router-dom";
import { UseProvider } from "./providers/UseProvider";

import { Router } from "./router/Router";

export const App = () => {
  return (
    <UseProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UseProvider>
  );
};
