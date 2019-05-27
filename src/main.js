import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "APPINSIGHTS_INSTRUMENTATIONKEY"
  }
});

appInsights.loadAppInsights();
