import { chromium, type FullConfig } from "@playwright/test";

async function globalSetup01(config: FullConfig) {
    console.log("Demo global setup without dependency");
};

export default globalSetup01;