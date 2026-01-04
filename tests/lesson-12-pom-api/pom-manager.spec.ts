// Refactor các test ở buổi 10, sử dụng Pom Manager
import { test, expect } from "@playwright/test";
import { PageManager } from "../../managers/page.managers";

test("Add product to cart successfully", async ({ page }) => {
    const pageManager = new PageManager(page);
    const productPage = pageManager.getProductPage();

    await test.step("Truy cập trang Material", async () => {
        await productPage.openMaterialPage();
    });
    await test.step("Thêm sản phẩm vào giỏ hàng", async () => {
        await productPage.gotoPage('product');
        await productPage.addProduct1(2);
        await productPage.addProduct2(3);
        await productPage.addProduct3(1);
    });

    await test.step("Kiểm tra số lượng sản phẩm và số tiền trong giỏ hàng", async () => {
        const actualData = await productPage.getTableData();
        //Kiểm tra số lượng sản phẩm
        await expect(actualData.product1Row).toContainText("2");
        await expect(actualData.product2Row).toContainText("3");
        await expect(actualData.product3Row).toContainText("1");

        //Kiểm tra số tiền
        await expect(actualData.product1Row).toContainText("$20.00");
        await expect(actualData.product2Row).toContainText("$60.00");
        await expect(actualData.product3Row).toContainText("$30.00");
    });
});