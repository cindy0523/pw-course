import { test } from "@playwright/test";

test("Env variable", async () => {
    console.log(process.env.ENV);
});

//thêm 2 biến env: LOADING_TIME_DEV = 5000ms, LOADING_TIME_PROD = 2000ms
//Tại file test: nếu env là dev, in ra "5000"