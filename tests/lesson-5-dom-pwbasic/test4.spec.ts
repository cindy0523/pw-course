/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 4: Personal Note" hyperlink
thêm mới 10 note với:
title và content khoảng 3 dòng tại báo vnexpress.net/khoa-hoc-cong-nghe
thực hiện search theo tiêu đề bài báo bất kì
*/

import { test, expect } from '@playwright/test';

test('TC4: Personal Note', async ({ page }) => {

    await test.step('Access to Material Playwright page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Select Bai hoc 4 hyperlink', async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    //Mock 10 data
    const notes = [
        {
            title: "AI vượt mốc mới trong y học",
            content: "Các nhà khoa học vừa công bố một nghiên cứu sử dụng AI để chẩn đoán bệnh nhanh hơn và chính xác hơn."
        },
        {
            title: "Xuất hiện Robot hỗ trợ người già",
            content: "Robot mới có thể trò chuyện, theo dõi sức khỏe và hỗ trợ sinh hoạt hàng ngày."
        },
        {
            title: "Tên lửa tư nhân chuẩn bị phóng vệ tinh",
            content: "Một công ty startup đã được cấp phép phóng tên lửa đưa vệ tinh viễn thông lên quỹ đạo."
        },
        {
            title: "Chip lượng tử thế hệ mới",
            content: "Chip máy tính lượng tử mới có khả năng xử lý gấp hàng nghìn lần so với chip truyền thống."
        },
        {
            title: "Khám phá hành tinh giống Trái Đấ",
            content: "Các nhà thiên văn phát hiện một hành tinh có khí quyển tương đồng với Trái Đất."
        },
        {
            title: "Ứng dụng blockchain trong y tế",
            content: "Blockchain đang được thử nghiệm để bảo mật và minh bạch hóa dữ liệu bệnh án."
        },
        {
            title: "Xe điện pin thể rắn ra mắt",
            content: "Pin thể rắn giúp xe điện có phạm vi hoạt động xa hơn và sạc nhanh hơn."
        },
        {
            title: "Vaccine thế hệ mới bằng công nghệ mRNA",
            content: "Công nghệ mRNA được áp dụng để tạo ra vaccine phòng bệnh hiệu quả hơn."
        },
        {
            title: "Nhà máy sản xuất năng lượng sạch",
            content: "Một nhà máy điện gió mới sẽ cung cấp năng lượng cho hàng trăm nghìn hộ dân."
        },
        {
            title: "Kính viễn vọng không gian hoạt động",
            content: "Kính viễn vọng mới đã gửi về những hình ảnh vũ trụ rõ nét chưa từng có."
        }
    ];

    //Add 10 Notes
    await test.step('Add 10 Notes', async () => {
        for (let note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        };
    });

    //Search theo tiêu đề bất kì
    await test.step('Search theo tiêu đề bất kì', async () => {
        await page.locator("//input[@id='search']").fill("Tên lửa")
        await expect(page.locator("//strong[contains(text(),'Tên lửa')]")).toContainText("Tên lửa");
    });
});