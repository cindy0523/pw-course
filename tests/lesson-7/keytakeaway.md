### Git stash: 
- Git stash dùng để tạm cất (stash) lại những thay đổi chưa commit — nghĩa là Git sẽ lưu tạm phần công việc m đang làm dở vào “ngăn kéo” và trả working directory về trạng thái sạch (giống lúc chưa sửa gì).
- sử dụng git stash khi đang code trên branch A nhưng có task khác priority cao hơn phải switch sang branch B, nhưng chưa commit branch A mà switch thì sẽ báo lỗi: phải commit/stash mới đc switch --> khi đó mình sẽ git stash lại để lưu lại, khi nào xong task bên branch B thì switch về branch A và unstash nó đi

### DOM: relation
1. self: node hiện tại
2. parent: 
3. test git stash