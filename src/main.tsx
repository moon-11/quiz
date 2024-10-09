import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./Global/globalStyles.ts";
import { Home } from "./pages/Home/index.tsx";
import "./utils/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <Home />
  </>
);
