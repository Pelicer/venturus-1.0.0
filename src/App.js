import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

function App() {
  datadogRum.init({
    applicationId: "264a037e-62d4-47d4-ac6b-eec56e24e3cd",
    clientToken: "pub48ef7f030155a3f881df74e2632b8ea3",
    site: "datadoghq.eu",
    service: "squad-management",
    env: "dev",
    version: "1.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackFrustrations: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "allow",
  });

  datadogLogs.init({
    clientToken: "pub48ef7f030155a3f881df74e2632b8ea3",
    site: "datadoghq.eu",
    forwardErrorsToLogs: true,
    forwardConsoleLogs: "all",
    forwardReports: "all",
    sessionSampleRate: 100,
  });
  datadogRum.startSessionReplayRecording();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
