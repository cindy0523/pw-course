import { test as teardown } from "@playwright/test";

teardown("Tear down data", async ({ }) => {
    console.log("Clean database ...");
});