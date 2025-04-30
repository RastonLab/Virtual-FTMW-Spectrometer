import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";
import ExperimentalSetup from './components/ExperimentalSetup/ExperimentalSetup';
import FindPeaks from "./components/FindPeaks/FindPeaks";
import InstrumentWindow from './components/InstrumentWindow/InstrumentWindow';
import NotFound from "./components/NotFound";
import SchematicWindow from "./components/SchematicWindow/SchematicWindow";
import AcquireSpectrumPlotly from "./components/AcquireSpectrumPlotly/AcquireSpectrumPlotly";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<InstrumentWindow />} />
            <Route path="instrument" element={<InstrumentWindow />} />
            <Route path="experimental-setup" element={<ExperimentalSetup />} />
            <Route path="schematic" element={<SchematicWindow />} />
            <Route path="spectrum" element={<AcquireSpectrumPlotly />} />
            <Route path="peaks" element={<FindPeaks />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
