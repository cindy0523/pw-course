/*
Hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
i. Sản phẩm 1: 2 sản phẩm
ii. Sản phẩm 2: 3 sản phẩm
iii. Sản phẩm 3: 1 sản phẩm
b. Kiểm tra số lượng sản phẩm tại giỏ hàng đúng như đã thêm.
c. Kiểm tra tổng tiền tại giỏ hàng đúng.
*/

import { test, expect } from '@playwright/test';
import { ProductPage } from './01-pom';

test("Add product to cart successfully", async ({ page }) => {
    const productPage = new ProductPage (page);

    //Step
    await productPage.openMaterialPage();
    await productPage.gotoPage('product');
    await productPage.addProduct1(2);
    await productPage.addProduct2(3);
    await productPage.addProduct3(1);

    //Verify
    await expect(page.locator("//table//tbody//tr[td[contains(text(), 'Product 1')]]")).toContainText("2");
    await expect(page.locator("//table//tbody//tr[td[contains(text(), 'Product 2')]]")).toContainText("3");
    await expect(page.locator("//table//tbody//tr[td[contains(text(), 'Product 3')]]")).toContainText("1");
});