/*
Hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
i. Sản phẩm 1: 2 sản phẩm
ii. Sản phẩm 2: 3 sản phẩm
iii. Sản phẩm 3: 1 sản phẩm
b. Kiểm tra số lượng sản phẩm tại giỏ hàng đúng như đã thêm.
c. Kiểm tra tổng tiền tại giỏ hàng đúng.
*/

import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/product-page';

test("Add product to cart successfully", async ({ page }) => {
    const productPage = new ProductPage(page);

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