# Tài liệu phân tích trang tham khảo — Website Tour Golf Đà Nẵng

> **Mục đích:** Phân tích chi tiết nội dung, bố cục và chức năng của trang tham khảo, dùng làm blueprint (bản thiết kế) để xây dựng website tour golf Đà Nẵng của chúng ta.
> **Ngày lập:** 2026-05-22
> **Trạng thái:** Bản phân tích — chờ xác nhận để chuyển sang giai đoạn thiết kế/triển khai.

---

## 1. Thông tin nguồn tham khảo

| Mục | Chi tiết |
|---|---|
| **URL gốc** | `https://mp.weixin.qq.com/s/UNpK6681ESddz2ec6l_VWw` (bài viết WeChat) |
| **Loại trang** | Bài viết long-form trên WeChat Official Account (không phải website thực thụ) |
| **Chủ thể** | 风神高尔夫俱乐部 — **Fengshen Golf Club** (câu lạc bộ golf Trung Quốc) |
| **Tiêu đề bài** | 《与风同行·征途世界高球名场 \| 五一错峰出行：越南岘港4天3晚3场球，梦幻假期》<br>"Đồng hành cùng gió · Chinh phục các sân golf danh tiếng thế giới \| Du lịch tránh cao điểm dịp 1/5: Đà Nẵng Việt Nam 4 ngày 3 đêm 3 vòng golf, kỳ nghỉ trong mơ" |
| **Thuộc series** | "与风同行·征途世界高球名场" — đây là **Tập ②** (Tập ① là Hong Kong - sân Kau Sai Chau / 滘西洲) |
| **Tag** | #风神会员活动 (Hoạt động dành cho hội viên) |
| **Sản phẩm quảng bá** | Tour golf trọn gói: **Đà Nẵng, 2–5/5/2026, 4 ngày 3 đêm, 3 vòng golf** |

### 1.1 Nhận định quan trọng (đọc kỹ trước khi làm)

⚠️ **Trang tham khảo KHÔNG phải là một website** — nó là **một bài viết WeChat dạng ảnh dài**:

- Toàn bộ nội dung nằm trong **8 ảnh đồ họa dọc dài** (infographic), tự thiết kế bằng Photoshop. Phần text HTML chỉ có đúng 3 dòng tiêu đề.
- Không có menu, không có trang con, không có form, không cuộn ngang — chỉ cuộn dọc một mạch trên điện thoại.
- Tương tác là tương tác **mặc định của WeChat** (like, comment, share), không phải tính năng do trang tự xây.

👉 **Hệ quả cho dự án của chúng ta:** Ta sẽ **không sao chép nguyên dạng "ảnh dài"** mà **tái cấu trúc nội dung đó thành một website thật**: có các section HTML/CSS, responsive, có form đặt tour, có trang chi tiết. Tài liệu này tách bạch 2 phần: (A) *phân tích nguyên trạng bản tham khảo* và (B) *đề xuất chuyển thành website*.

---

## 2. Bản đồ bố cục tổng thể (Section Map)

Bài viết gồm 8 khối ảnh, cuộn dọc theo thứ tự:

| # | Khối ảnh | Tên section | Vai trò |
|---|---|---|---|
| 0 | `img0` | **Hero / Trang bìa** | Gây ấn tượng, nêu thông điệp + thông tin tour cốt lõi |
| 1 | `img1` | **Điểm nhấn hành trình** (3 sân golf + khách sạn) | Giới thiệu sản phẩm chính |
| 2 | `img2` | **Cẩm nang điểm đến Đà Nẵng** | Bán "giấc mơ" điểm đến, tăng khao khát |
| 3 | `img3` | **Lịch trình 4 ngày + Lưu ý chuyến đi** | Minh bạch hành trình, tạo niềm tin |
| 4 | `img4` | **Chi phí + Bao gồm/Không bao gồm + Đăng ký + Miễn trừ trách nhiệm** | Chốt đơn (conversion) |
| 5 | `img5` | Dải phân cách (ảnh trống 1080×80px) | Khoảng trắng |
| 6 | `img6` | **Sân golf liên minh** (mạng lưới CLB) | Xây uy tín thương hiệu |
| 7 | `img7` | **Sân liên minh + Vinh danh CLB + QR codes** | Uy tín + kênh follow-up |

### 2.1 Wireframe (sơ đồ khối)

```
┌───────────────────────────────────┐
│  HERO / TRANG BÌA                  │  img0
│  • Ảnh nền sân golf ven biển       │
│  • Thông điệp cảm xúc              │
│  • 2026/5/2–5/5 · 4N3Đ · 3 vòng    │
├───────────────────────────────────┤
│  ĐIỂM NHẤN HÀNH TRÌNH              │  img1
│  ① Legend Danang Golf Resort       │
│  ② Hoiana Shores Golf Club         │
│  ③ Vinpearl Golf Nam Hoi An        │
│  ④ New World Hoiana Hotel          │
├───────────────────────────────────┤
│  CẨM NANG ĐÀ NẴNG                  │  img2
│  Nhà thờ · Phố cổ Hội An ·         │
│  Sông Thu Bồn · Bán đảo Sơn Trà ·  │
│  Bà Nà Hills                       │
├───────────────────────────────────┤
│  LỊCH TRÌNH 4 NGÀY                 │  img3
│  Ngày 1 → Ngày 4 (timeline)        │
│  + Lưu ý: chuyến bay, visa, hủy    │
├───────────────────────────────────┤
│  CHI PHÍ & ĐĂNG KÝ                 │  img4
│  3 mức giá · Bao gồm/Không gồm ·   │
│  Hotline · Miễn trừ trách nhiệm    │
├───────────────────────────────────┤
│  UY TÍN THƯƠNG HIỆU                │  img6+img7
│  Sân liên minh · Giải thưởng ·     │
│  4 mã QR (footer)                  │
└───────────────────────────────────┘
```

### 2.2 Logic kể chuyện (Storytelling flow)

Bài viết theo đúng phễu marketing kinh điển — đáng học tập:

```
Cảm xúc/Khát khao → Sản phẩm → Điểm đến → Minh bạch hành trình
→ Chốt giá/Đăng ký → Củng cố niềm tin (uy tín) → Kênh liên hệ
   (AIDA: Attention → Interest → Desire → Action)
```

---

## 3. Phân tích chi tiết từng section

### 3.1 — HERO / Trang bìa (img0)

**Nội dung (dịch từ tiếng Trung):**

- Dòng dẫn: *"Tình yêu vô tận, tự tại Phong Thần — Chào mừng trở lại sân nhà golf & cuộc sống của bạn."*
- Tiêu đề phụ: *"Năm 2026 Phong Thần một lần nữa nhận vinh dự 'Sân golf Top 100 châu Á' — Hành trình Top 100 châu Á của hội viên cũng theo đó khởi hành."*
- Đoạn cảm xúc: *"Tiếp nối chuyến đi Hong Kong tháng Ba, tháng Năm chúng ta lại lên đường, thẳng tiến Việt Nam — một quốc gia ven biển sở hữu sân golf huyền thoại, bờ biển vô tận và di sản văn hóa thế giới phong phú."*
- **Khối thông tin cốt lõi (nổi bật):**
  - `2026/5/2 → 2026/5/5`
  - **4 ngày 3 đêm · 3 vòng golf · Đà Nẵng, Việt Nam**
- Đoạn slogan: *"Chuyến đi này — vừa có niềm vui thi đấu, vừa kết giao bạn qua trái bóng golf, vừa tận hưởng sự tự tại của một chuyến du lịch golf thuần khiết. Mời bạn 'Đồng hành cùng gió', cùng tri kỷ và người thân lên đường — cuộc viễn chinh của đam mê, tự do và cuộc sống tốt đẹp."*

**Phân tích thiết kế:**
- Ảnh nền: sân golf links ven biển nhìn từ trên cao — gây ấn tượng thị giác mạnh.
- Hệ chữ: tiêu đề lớn + thông tin tour (ngày/đêm/số vòng) được làm **nổi bật tương phản** → người đọc nắm ngay "ăn gì" trong 3 giây.
- Tông giọng: cảm xúc, sang trọng, hướng tới khách cao cấp.

---

### 3.2 — ĐIỂM NHẤN HÀNH TRÌNH: 3 sân golf + khách sạn (img1)

Khối quan trọng nhất — giới thiệu sản phẩm chính. Mỗi mục có: **ảnh sân (flycam) + banner số thứ tự + tên sân (Anh + Trung) + đoạn mô tả + thông số kỹ thuật.**

#### ① LEGEND DANANG GOLF RESORT — 岘港传奇高尔夫度假村
- Khai trương 2010; được tạp chí golf Mỹ bình chọn là một trong **"15 sân golf mới tốt nhất thế giới"**; năm 2011 được chọn là **sân golf mới tốt nhất châu Á**.
- Thiết kế bởi **Jack Nicklaus Design** và **Greg Norman Golf Design** (2 sân).
- Sân Norman: phong cách **links** ven biển, nằm bên bãi biển Mỹ Khê; nhiều bunker cát; cảnh nước đẹp.

#### ② HOIANA SHORES GOLF CLUB — 会安南岸高尔夫俱乐部
- Gần phố cổ Hội An ("Lệ Giang của Việt Nam").
- Thiết kế bởi **Robert Trent Jones II**; phong cách **links thuần túy**.
- **Xếp hạng #17 trong Top 100 sân golf châu Á 2026.**
- Thông số: **18 hố · par 71 · 7.004 yards.**
- Tận dụng địa hình ven biển; gần như không có chướng ngại nước; nhiều bunker; cảnh biển xanh ở các hố cuối.

#### ③ VINPEARL GOLF NAM HOI AN — 会安珍珠高尔夫球场
- Nằm ở phía Nam phố cổ Hội An; do **Tập đoàn Vinpearl** đầu tư; một trong những sân golf được yêu thích nhất Việt Nam.
- Thiết kế bởi **IMG Worldwide**.
- Thông số: **18 hố · par 72 · 7.125 yards.**
- Nằm giữa các đụn cát lớn, giáp biển; vung gậy ngắm cảnh biển xanh.

#### ④ NEW WORLD HOIANA HOTEL — Khách sạn lưu trú
- Khách sạn 5 sao thuộc khu phức hợp Hoiana — nơi đoàn nghỉ 3 đêm.

> Cuối section có **danh sách tóm tắt 4 mục** (recap) — kỹ thuật giúp người đọc nắm nhanh.

---

### 3.3 — CẨM NANG ĐIỂM ĐẾN ĐÀ NẴNG (img2)

Tiêu đề: *"Đà Nẵng chính hiệu nhất"*. Định vị Đà Nẵng là **"Hawaii của phương Đông"**, một trong **6 bãi biển đẹp nhất thế giới**, được National Geographic xếp vào **"50 nơi nên đến trong đời"**.

Mỗi điểm tham quan = **1 thẻ (card): ảnh + nhãn tên (Anh) + tiêu đề "游玩推荐·…" (Gợi ý tham quan) + đoạn mô tả.**

| Điểm đến | Mô tả ngắn |
|---|---|
| **Nhà thờ Con Gà (Da Nang Cathedral)** | Nhà thờ màu hồng, xây 1923, kiến trúc Pháp thuộc, cao ~70m; điểm "sống ảo" nổi tiếng. Nhà thờ Công giáo duy nhất xây thời Pháp thuộc tại đây; có kính màu phong cách Gothic. |
| **Phố cổ Hội An** | Đô thị cổ được bảo tồn tốt; ví như "vẻ thanh bình của Tô Châu + sự tĩnh lặng cổ kính của Lệ Giang". Xưa là thương cảng "Đại Chiêm Hải Khẩu", thương cảng sầm uất bậc nhất Đông Nam Á. |
| **Sông Thu Bồn (Thu Bon River)** | Điểm nhấn của Hội An; rừng dừa nước; trải nghiệm **thuyền thúng**, xem ngư dân biểu diễn "xoay thuyền thúng", ngắm cảnh sông nước. |
| **Bán đảo Sơn Trà (Son Tra Peninsula)** | Cách trung tâm 13km; rừng nguyên sinh diện tích lớn; là bình phong tự nhiên chắn bão cho Đà Nẵng; có **chùa Linh Ứng** mái ngói xanh. |
| **Bà Nà Hills (Ba Na Hills)** | Cách Đà Nẵng ~40km về phía Tây; nhiệt độ 15–20°C quanh năm; **hệ thống cáp treo lập kỷ lục Guinness** (dài ~5.042m, chênh cao ~1.300m); như chốn bồng lai tiên cảnh, ô-xy rừng dồi dào. |

> Cuối section cũng có **recap tổng hợp** tất cả điểm đến.

---

### 3.4 — LỊCH TRÌNH 4 NGÀY + LƯU Ý (img3)

Tiêu đề: *"Lịch trình 4 ngày — xem nhanh"*. Trình bày dạng **timeline dọc có icon** (icon máy bay, xe, bữa ăn, gậy golf, khách sạn).

| Ngày | Lịch trình |
|---|---|
| **Ngày 1 — 2/5 (Thứ Bảy)** | 8:30 tập trung → xe bus đến Sân bay quốc tế Hong Kong → 14:10 chuyến bay cất cánh (HK bay thẳng Đà Nẵng) → xe riêng đón → nhận phòng khách sạn → tiệc chào mừng tại trung tâm Đà Nẵng → về khách sạn nghỉ |
| **Ngày 2 — 3/5 (Chủ Nhật)** | Ăn sáng → 10:00 khởi hành (di chuyển ~50 phút) → xe riêng đến **Legend Danang Golf Resort** → 11:30 phát bóng → sau golf: rửa sân/nghỉ, hoạt động tự do → tiệc buffet hoặc bữa ăn nhóm |
| **Ngày 3 — 4/5 (Thứ Hai)** | Ăn sáng → 10:00 khởi hành (~5 phút) → xe riêng đến **Hoiana Shores Golf Club** → 11:30 phát bóng → thi đấu → **tiệc trao giải**<br>*\*Giải thưởng tùy số người đăng ký — nếu ≥ 20 người sẽ tổ chức giải đồng đội (team match).* |
| **Ngày 4 — 5/5 (Thứ Ba)** | Ăn sáng & trả phòng → 7:30 khởi hành (~10 phút) → **Vinpearl Golf Nam Hoi An** → 8:00 phát bóng → sau golf về khách sạn → đưa ra sân bay theo giờ bay (~50 phút khách sạn→sân bay) |

**Lưu ý chuyến đi (出行小贴士):**

- **Chuyến bay gợi ý:**
  - Chiều đi (HK → Đà Nẵng): Hong Kong Airlines **HX548** 14:30–15:20 · **HX546** 18:50–19:50
  - Chiều về (Đà Nẵng → HK): Hong Kong Airlines **HX549** 16:20–19:20 · **HX547** 20:50–00:05+1
  - Khách từ Trung Quốc đại lục đều phải transit; chuyến rời Việt Nam đa số bay đêm/rạng sáng → không khuyến nghị bay nối chuyến.
- **Visa:** Xử lý cần **6 ngày làm việc** (chưa tính thời gian chuyển phát); hộ chiếu còn hạn **trên 6 tháng**.
- **Hỗ trợ visa:** Nếu cần CLB hỗ trợ → gửi **bản scan trang đầu hộ chiếu + ảnh thẻ 2 inch nền trắng (file điện tử)** cho quản gia hội viên.
- **Hủy chuyến:** Tài nguyên sân golf nước ngoài khan hiếm, cần khóa chỗ sớm. Hủy phải báo **trước ít nhất 15 ngày**; hủy sát ngày **không hoàn tiền**.

---

### 3.5 — CHI PHÍ, ĐĂNG KÝ & MIỄN TRỪ TRÁCH NHIỆM (img4)

Tiêu đề: *"Chi phí hoạt động"*. Đây là section **chốt đơn**.

**Ba mức giá (đơn vị: Nhân dân tệ — RMB):**

| Mức giá | Đối tượng |
|---|---|
| **RMB 8.380** | Giá hội viên Phong Thần (会员价) |
| **RMB 6.800** | Giá ưu đãi thân nhân hội viên (会员家属优享价) |
| **RMB 9.380** | Giá khách mời của hội viên (会员嘉宾价) |

> *Mô hình giá phân tầng theo quan hệ với CLB — hội viên & người thân được ưu đãi, khách mời trả cao hơn. Một chiến lược giữ chân hội viên.*

**Chi phí BAO GỒM (费用包含):**
- Xe bus đưa đón khứ hồi tới Sân bay quốc tế Hong Kong + quản gia đi kèm
- **3 vòng golf** trong hành trình (gồm xe điện/cart)
- Lưu trú **New World Hoiana Hotel — 3 đêm phòng đơn + ăn sáng**
- **2 bữa tối đặc biệt** (tiệc chào mừng + tiệc trao giải)
- Đưa đón trọn gói sân bay–khách sạn–sân golf (mỗi 20–25 khách 1 xe bus lớn)
- **Hướng dẫn viên tiếng Trung** địa phương trọn tuyến (mỗi 20–25 khách 1 HDV)
- **Visa du lịch Việt Nam** (visa điện tử)
- Bảo hiểm du lịch quốc tế; nước uống mỗi ngày chơi golf
- Quản gia dịch vụ hội viên phục vụ trọn tuyến

**Chi phí KHÔNG bao gồm (费用不含):**
- Vé máy bay khứ hồi quốc tế
- Phí dịch vụ sân, tiền tip caddie và các chi tiêu cá nhân khác
- Các bữa trưa/tối không nằm trong gói
- Phí tăng ca của xe & HDV ngoài lịch trình (phục vụ 10 giờ/ngày)

**Đăng ký & tư vấn (报名及活动详情咨询):**
- Liên hệ Bộ phận Dịch vụ Hội viên, hoặc gọi hotline: **189 2622 8803**

**Miễn trừ trách nhiệm (免责声明):** Đoạn văn bản pháp lý dài — yêu cầu sức khỏe (không nhận người huyết áp cao, bệnh tim, bệnh mãn tính hô hấp, bệnh tim mạch não, phụ nữ mang thai…), cảnh báo rủi ro hoạt động ngoài trời, khuyến nghị tự mua bảo hiểm, quy định khi gặp bất khả kháng (thời tiết/sân đóng cửa)…

---

### 3.6 — UY TÍN THƯƠNG HIỆU (img6 + img7)

Hai khối cuối **không bán tour** mà **xây niềm tin vào CLB**:

**A. Sân golf liên minh (联盟球场 — "Top 100 Golf Courses"):**
Mạng lưới sân đối tác của Fengshen Golf Club tại châu Á:
- 🇨🇳 Trung Quốc: Spring City Golf & Lake Resort (Côn Minh); Topwin Golf & Country Club (Bắc Kinh, hồ Nhạn Thê); Tushan International Country Club (Thành Đô).
- 🇰🇷 Hàn Quốc: Black Stone Golf & Resort (đảo Jeju).

**B. Vinh danh câu lạc bộ (俱乐部荣誉):**
Ảnh các cúp/giải thưởng + danh sách giải thưởng theo năm (2026, 2025, 2022, 2020, 2018, 2014, 2013, 2012, 2011, 2010) mà sân nhà của CLB (sân Pete Dye / Foison) đã đạt được — ví dụ: "Top 100 sân golf châu Á", "MUSE Design Awards — Platinum Winner", "Global Habitat Design Awards — Gold"…

**C. Footer — 4 mã QR:**
- QR kênh video chính thức (官方视频号)
- QR nền tảng Phong Thần — tra cứu điểm tích lũy (点击查询积分)
- QR tìm "Da Nang Golf Life Hall" (岘港高尔夫生活馆)
- QR tài khoản công chúng chính thức (官方公众号)

---

## 4. Phân tích chức năng (Functionality)

### 4.1 Chức năng có trên bản tham khảo

Vì là bài WeChat, **chức năng do trang tự xây gần như bằng 0**; phần lớn là tính năng nền tảng WeChat:

| Chức năng | Loại | Ghi chú |
|---|---|---|
| Cuộn dọc xem nội dung | Nền tảng | Trải nghiệm 1 trang duy nhất |
| Like / 在看 (Recommend) / Share / Comment / Favorite | Nền tảng WeChat | Không tùy biến được |
| Theo dõi Official Account | Nền tảng WeChat | Nút "关注" |
| Liên kết Mini-program | Nền tảng WeChat | — |
| **Hotline đăng ký: 189 2622 8803** | Tự xây (text) | Chỉ là số điện thoại in trong ảnh — **không bấm gọi được** |
| 4 mã QR ở footer | Tự xây (ảnh) | Dẫn tới video channel, nền tảng tích điểm, OA |
| "阅读原文" (Đọc bài gốc) | Nền tảng | Link cuối bài |

### 4.2 Những gì bản tham khảo CÒN THIẾU (cơ hội cho website của ta)

❌ Không có form đặt tour / đăng ký online
❌ Không có nút gọi/chat trực tiếp (click-to-call, Zalo, WhatsApp)
❌ Không có chọn ngày khởi hành / chọn hạng giá
❌ Không có trang chi tiết từng sân golf
❌ Không có thư viện ảnh, video
❌ Không đa ngôn ngữ (chỉ tiếng Trung)
❌ Không SEO được (nội dung nằm trong ảnh → Google không đọc được)
❌ Không tối ưu desktop (chỉ vừa màn hình điện thoại)
❌ Không có bản đồ, đánh giá khách hàng, FAQ

---

## 5. Kho nội dung cần chuẩn bị (Content Inventory)

Để dựng website, ta cần chuẩn bị các tài nguyên sau:

| Nhóm | Hạng mục cần có |
|---|---|
| **Hình ảnh** | Ảnh hero sân golf ven biển; ảnh flycam 3 sân; ảnh khách sạn; ảnh 5 điểm tham quan; ảnh tiệc/khách chơi golf; logo |
| **Nội dung sân golf** | Tên, nhà thiết kế, số hố/par/yards, mô tả, xếp hạng, ảnh — cho mỗi sân |
| **Lịch trình** | Timeline 4 ngày dạng dữ liệu (giờ, hoạt động, icon) |
| **Bảng giá** | Các mức giá + đối tượng (cần quyết định: dùng RMB hay VND/USD) |
| **Bao gồm / Không bao gồm** | 2 danh sách |
| **Thông tin pháp lý** | Điều khoản, miễn trừ trách nhiệm, chính sách hủy, yêu cầu sức khỏe |
| **Thông tin liên hệ** | Hotline, email, Zalo/WhatsApp, địa chỉ, mạng xã hội |
| **Điểm đến** | Mô tả 5 điểm tham quan Đà Nẵng/Hội An |
| **Uy tín** | Giải thưởng, đối tác, đánh giá khách hàng (testimonials) |

---

## 6. Đề xuất kiến trúc Website của chúng ta

> Đây là phần **chuyển đổi** từ "bài ảnh WeChat" sang "website thực thụ". Giữ lại logic kể chuyện tốt của bản gốc, bổ sung những gì website cần.

### 6.1 Sitemap đề xuất

```
Trang chủ (Landing Page — 1 trang cuộn dài, giữ flow của bản gốc)
├── Hero            — thông điệp + thông tin tour + nút CTA "Đặt tour"
├── Tổng quan tour  — ngày, số đêm, số vòng, điểm nổi bật
├── Sân golf        — 3 thẻ sân (link sang trang chi tiết)
├── Điểm đến        — Đà Nẵng & Hội An (5 điểm tham quan)
├── Lịch trình      — timeline 4 ngày tương tác
├── Bảng giá        — 3 mức giá + bảng Bao gồm/Không bao gồm
├── Uy tín          — giải thưởng, đối tác, đánh giá khách
├── FAQ             — visa, sức khỏe, hủy tour, hành lý...
├── Form đặt tour   — section đăng ký online
└── Footer          — liên hệ, mạng xã hội, điều khoản

Trang con (tùy chọn, giai đoạn 2):
├── /san-golf/legend-danang
├── /san-golf/hoiana-shores
├── /san-golf/vinpearl-nam-hoi-an
├── /dieu-khoan & /chinh-sach-huy
└── /lien-he
```

### 6.2 Giữ — Bỏ — Thêm

| Quyết định | Nội dung |
|---|---|
| ✅ **GIỮ** | Flow kể chuyện AIDA; bố cục 6 khối; cách trình bày sân golf dạng thẻ; timeline lịch trình; bảng Bao gồm/Không bao gồm; section uy tín |
| ❌ **BỎ / SỬA** | Không dùng "ảnh dài" — chuyển thành HTML/CSS text thật (để SEO + load nhanh + responsive desktop); bỏ các yếu tố đặc thù WeChat (赞/在看/小程序) |
| ➕ **THÊM** | Form đặt tour online; nút click-to-call + chat Zalo/WhatsApp; chọn ngày & hạng giá; trang chi tiết sân; thư viện ảnh/video; **đa ngôn ngữ (Việt / Anh / Trung)**; bản đồ; FAQ; testimonials; SEO meta; nút CTA cố định (sticky) |

### 6.3 Gợi ý kỹ thuật (sơ bộ — chờ xác nhận)

- **Dạng trang:** Landing page 1 trang cuộn dài + vài trang con → phù hợp static site / SSG.
- **Responsive:** Ưu tiên mobile-first (bản gốc vốn cho điện thoại) nhưng phải tối ưu cả desktop.
- **Hiệu năng:** Ảnh nén WebP, lazy-load — bản gốc dùng ảnh rất nặng (ảnh dài tới ~8.800px).
- **Đa ngôn ngữ:** Tối thiểu Tiếng Việt; nên có Tiếng Anh (khách quốc tế) và Tiếng Trung (giữ tệp khách gốc).
- **Tích hợp:** Form đặt tour gửi về email/CRM; Google Maps; pixel quảng cáo.

---

## 7. Câu hỏi cần làm rõ trước khi thiết kế

Để bước thiết kế/triển khai đi đúng hướng, cần bạn xác nhận:

1. **Đối tượng khách:** Website của ta nhắm khách Việt, khách quốc tế nói tiếng Anh, hay khách Trung Quốc? → quyết định ngôn ngữ chính & tiền tệ.
2. **Mô hình sản phẩm:** Chỉ bán **1 tour Đà Nẵng cố định** (như bản gốc), hay là **nhiều tour golf** (cần trang danh sách tour)?
3. **Thương hiệu:** Ta có phải một CLB/công ty lữ hành golf riêng không? Có logo, màu thương hiệu, tên miền chưa?
4. **Đặt tour:** Chỉ cần form gửi yêu cầu (lead form), hay cần đặt + thanh toán online thật sự?
5. **Tiền tệ & giá:** Dùng lại 3 mức giá theo "hội viên" như bản gốc, hay mô hình giá khác (vd: giá lẻ/đoàn)?
6. **Phạm vi giai đoạn 1:** Chỉ landing page 1 trang, hay làm luôn cả các trang con?
7. **Công nghệ:** Bạn có ưu tiên framework nào (HTML thuần, Next.js, WordPress…)?

---

## Phụ lục — Tài nguyên đã lưu

- Bản HTML gốc đã lưu: `与风同行·征途世界高球名场 ….html`
- Ảnh bài viết (8 ảnh đồ họa): trong thư mục `…_files/` — các tệp tên `640`, `640(1)` … `640(7)` (định dạng WebP).
  - `640` = Hero · `640(1)` = Sân golf · `640(2)` = Cẩm nang Đà Nẵng · `640(3)` = Lịch trình · `640(4)` = Chi phí · `640(6)`/`640(7)` = Uy tín thương hiệu.

---

*Tài liệu này mô tả nguyên trạng bản tham khảo (mục 1–5) và đề xuất hướng xây website (mục 6–7). Sau khi bạn trả lời mục 7, bước tiếp theo là dựng sitemap chi tiết + thiết kế giao diện (mockup) cho từng section.*
