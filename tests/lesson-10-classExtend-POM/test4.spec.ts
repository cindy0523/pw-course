import { test, expect } from '@playwright/test';
import { PersonalNote } from '../../pages/personal-note.page';

test("Add 5 personal notes", async ({ page }) => {
    const personalNotePage = new PersonalNote(page);
    await test.step("Truy cập trang Personal Note", async () => {
        await personalNotePage.openMaterialPage();
        await personalNotePage.gotoPage('personalNote');
    });

    await test.step("Thêm 5 Notes", async () => {
        await personalNotePage.addTitle('AI vượt mốc mới trong y học');
        await personalNotePage.addContent('Các nhà khoa học vừa công bố một nghiên cứu sử dụng AI để chẩn đoán bệnh');

        await personalNotePage.addTitle('Xuất hiện Robot hỗ trợ người già');
        await personalNotePage.addContent('Robot mới có thể trò chuyện, theo dõi sức khỏe và hỗ trợ sinh hoạt hàng ngày.');

        await personalNotePage.addTitle('Tên lửa tư nhân chuẩn bị phóng vệ tinh');
        await personalNotePage.addContent('Một công ty startup đã được cấp phép phóng tên lửa đưa vệ tinh viễn thông lên quỹ đạo');

        await personalNotePage.addTitle('Chip lượng tử thế hệ mới');
        await personalNotePage.addContent('Chip máy tính lượng tử mới có khả năng xử lý gấp hàng nghìn lần');

        await personalNotePage.addTitle('Khám phá hành tinh giống Trái Đất');
        await personalNotePage.addContent('Các nhà thiên văn phát hiện một hành tinh có khí quyển tương đồng với Trái Đất');
    });

    await test.step("Kiểm tra có thể search được các Note đã thêm", async () => {
        //Search
        await personalNotePage.search('Chip lượng tử thế hệ mới');
        //Verify
        await expect(personalNotePage.getActualNoteList()).toContainText("Chip lượng tử thế hệ mới");
    });
});