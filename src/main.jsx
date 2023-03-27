import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import labels_en from "./assets/labels/labelsEng";
import { LabelsContext } from "./LabelsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <LabelsContext.Provider value={labels_en}><App /></LabelsContext.Provider>
  </React.StrictMode>
);
