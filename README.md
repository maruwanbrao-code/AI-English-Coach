# AI English Coach 🎓

เว็บแอปเรียนภาษาอังกฤษที่:

1. ให้ผู้เรียนทำ **แบบทดสอบวัดระดับ (Placement Test)** 36 ข้อ ครอบคลุมไวยากรณ์ คำศัพท์ และการอ่าน ตั้งแต่ระดับ CEFR A1 ถึง C2 ก่อนเริ่มเรียนเสมอ
2. ประมวลผลคะแนนแล้ว **จัดสรรเข้าหนึ่งใน 3 แทร็กการเรียน 12 สัปดาห์** ที่เหมาะกับระดับจริง:
   - Beginner (A1 → A2)
   - Intermediate (B1 → B2)
   - Advanced (C1 → C2)
3. แต่ละสัปดาห์มี **บทเรียนจริง** (ไวยากรณ์ + คำอธิบายภาษาไทย, คำศัพท์พร้อมเสียงอ่าน, การอ่านพร้อมคำถาม, การฝึกพูดด้วยไมโครโฟน) และ **แบบทดสอบท้ายสัปดาห์** ที่ต้องทำได้ถูกอย่างน้อย 70% จึงจะปลดล็อกสัปดาห์ถัดไป (mastery-based progression)
4. ใช้งานได้ทั้งบนมือถือและคอมพิวเตอร์ (responsive) และ **ไม่ต้องสมัครสมาชิก/ล็อกอิน** — ข้อมูลผูกกับเบราว์เซอร์ผ่าน UUID ที่สุ่มเก็บไว้ใน `localStorage`
5. เป็น **static site ล้วน ๆ** (HTML/CSS/JS ธรรมดา ไม่มี build step) จึงรันบน **GitHub Pages** ได้ทันที และเชื่อมกับ **Supabase** แบบเสริม (optional) เพื่อสำรองผลสอบ/ความคืบหน้าไว้บนคลาวด์

ไม่ตั้งค่า Supabase ก็ใช้งานได้ครบ 100% ทันที (ข้อมูลจะอยู่ในเบราว์เซอร์เท่านั้น) — Supabase มีไว้เผื่ออยากให้ข้อมูลไม่หายตอนล้าง cache หรืออยากดึงข้อมูลไปดูที่อื่น

---

## โครงสร้างไฟล์

```
english-teacher-app/
├── index.html                  ทุกหน้าจออยู่ในไฟล์เดียว (single-page app)
├── css/style.css                สไตล์ทั้งหมด, responsive
├── js/
│   ├── testBank.js               คลังข้อสอบวัดระดับ 36 ข้อ (A1–C2)
│   ├── curriculum-beginner.js    หลักสูตร Beginner 12 สัปดาห์ (A1→A2)
│   ├── curriculum-intermediate.js หลักสูตร Intermediate 12 สัปดาห์ (B1→B2)
│   ├── curriculum-advanced.js    หลักสูตร Advanced 12 สัปดาห์ (C1→C2)
│   ├── supabaseClient.js         ชั้นเก็บข้อมูล (localStorage + Supabase แบบเสริม)
│   └── app.js                    ตรรกะแอปทั้งหมด: routing, การตรวจข้อสอบ, การล็อก/ปลดล็อกสัปดาห์, TTS/speech recognition
└── supabase/schema.sql          SQL สำหรับสร้างตารางและ RLS policy บน Supabase (รันครั้งเดียว, ไม่บังคับ)
```

---

## วิธีรันบนเครื่องตัวเองก่อน (ไม่บังคับ)

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย (ดับเบิลคลิก) เพราะไม่มี build step และไม่ใช้ ES modules — ทำงานได้แม้เปิดแบบ `file://` โดยตรง (ฟีเจอร์ฝึกพูดด้วยไมโครโฟนบางเบราว์เซอร์อาจต้องรันผ่าน `http://` หรือ `https://` — ถ้าอยากทดสอบเต็มรูปแบบ ให้รันเซิร์ฟเวอร์เล็ก ๆ เช่น `npx serve` แล้วเปิดผ่าน `http://localhost`)

---

## วิธี deploy ขึ้น GitHub Pages

1. สร้าง repository ใหม่บน GitHub (public หรือ private ก็ได้ — ถ้า private ต้องมี GitHub Pro เพื่อเปิด Pages)
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repo (คงโครงสร้างโฟลเดอร์เดิมไว้ เช่น `css/`, `js/`, `supabase/` ต้องอยู่ใน root ของ repo)
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI English Coach"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. ไปที่ repo บน GitHub → **Settings → Pages**
4. ในหัวข้อ **Build and deployment** เลือก Source = **Deploy from a branch**, Branch = **main**, Folder = **/(root)** แล้วกด **Save**
5. รอสัก 1-2 นาที แล้วเว็บจะขึ้นที่ `https://<your-username>.github.io/<your-repo>/`

จบแล้ว — ใช้งานได้ทันทีในโหมดออฟไลน์/local-only (ไม่มี Supabase ก็ได้)

---

## วิธีเปิดใช้งาน Supabase (ไม่บังคับ แต่แนะนำถ้าอยากสำรองข้อมูล)

1. สมัคร/ล็อกอินที่ https://supabase.com แล้วกด **New project** (เลือก region ใกล้ ๆ เช่น Singapore) — รอสักครู่ให้โปรเจกต์สร้างเสร็จ
2. ไปที่แท็บ **SQL Editor** ในโปรเจกต์ → New query → คัดลอกเนื้อหาทั้งหมดของไฟล์ `supabase/schema.sql` มาวาง → กด **Run**
   - จะได้ตาราง `profiles`, `test_results`, `progress` พร้อม Row Level Security ที่เปิดให้ anon key อ่าน/เขียนได้ (ดูคำอธิบาย trade-off ด้านความปลอดภัยในคอมเมนต์บนสุดของไฟล์ — เหมาะกับแอปส่วนตัวที่ไม่มีระบบล็อกอิน)
3. ไปที่ **Project Settings → API** แล้วคัดลอกค่า 2 ค่า:
   - **Project URL** (เช่น `https://xxxxxxxxxxxx.supabase.co`)
   - **anon public key** (ขึ้นต้นด้วย `eyJ...`)
4. เปิดไฟล์ `js/supabaseClient.js` แล้วแก้ค่าที่ต้นไฟล์:
   ```js
   const SUPABASE_CONFIG = {
     url: "https://xxxxxxxxxxxx.supabase.co",
     anonKey: "eyJhbGciOi..."
   };
   ```
5. commit + push ไฟล์นี้ขึ้น GitHub อีกครั้ง — Pages จะ deploy อัตโนมัติ
6. เปิดเว็บ แล้วดูที่ท้ายหน้า (footer) หรือหน้า "ความคืบหน้า" — ถ้าขึ้นว่า "ซิงก์กับ Supabase ✅" แปลว่าเชื่อมสำเร็จแล้ว

ถ้าไม่กรอกค่าทั้งสอง หรือกรอกผิด แอปจะ **ไม่พัง** — แค่ทำงานในโหมด local-only เหมือนเดิม (มีการดักจับ error ไว้ทุกจุด)

### ถ้าอยากใช้ Firebase แทน

โค้ดทั้งหมดออกแบบให้ชั้นเก็บข้อมูลอยู่ในไฟล์เดียวคือ `js/supabaseClient.js` (ผ่าน object ชื่อ `AppDB`) ส่วน `app.js` เรียกใช้แค่ฟังก์ชัน `AppDB.init()`, `AppDB.loadState()`, `AppDB.savePlacement()`, `AppDB.initProgressForTrack()`, `AppDB.recordQuizAttempt()`, `AppDB.resetAll()`, `AppDB.isCloudEnabled()` เท่านั้น — ถ้าต้องการเปลี่ยนไปใช้ Firebase (Firestore) แทน Supabase สามารถเขียนไฟล์ใหม่ที่ export `AppDB` ด้วยฟังก์ชันชื่อเดียวกันแต่เรียก Firestore SDK ข้างในแทน แล้วสลับ `<script>` ที่โหลดในไฟล์ `index.html` โดยไม่ต้องแตะ `app.js` เลย

---

## ตรรกะการให้คะแนนและจัดระดับ (สรุปสั้น ๆ)

- ข้อสอบวัดระดับมี 6 ข้อต่อระดับ (A1, A2, B1, B2, C1, C2) รวม 36 ข้อ
- ระดับใดที่ตอบถูก ≥ 60% ถือว่า "ผ่าน" ระดับนั้น
- ระบบจะจัดให้ผู้เรียนอยู่ที่ **ระดับสูงสุดที่ผ่านต่อเนื่องกันมาตั้งแต่ A1** (เพื่อไม่ให้ข้ามพื้นฐานที่ยังไม่แน่น) แล้วจับคู่เข้าแทร็ก:
  - A1 → Beginner เริ่มสัปดาห์ 1 · A2 → Beginner เริ่มสัปดาห์ 7
  - B1 → Intermediate เริ่มสัปดาห์ 1 · B2 → Intermediate เริ่มสัปดาห์ 7
  - C1 → Advanced เริ่มสัปดาห์ 1 · C2 → Advanced เริ่มสัปดาห์ 7
- สัปดาห์ก่อนหน้าจุดเริ่มต้นจะถูกทำเครื่องหมายว่า "ผ่านแล้ว" อัตโนมัติ (ถือว่าพื้นฐานนั้นมีอยู่แล้วจากผลสอบ) ส่วนสัปดาห์ถัดจากจุดเริ่มต้นจะถูกล็อกไว้จนกว่าจะทำแบบทดสอบของสัปดาห์ก่อนหน้าผ่าน ≥ 70%
- ทำแบบทดสอบวัดระดับซ้ำได้ทุกเมื่อจากหน้า "แผนการเรียน" (ปุ่ม "ทำแบบทดสอบใหม่")

## การแก้ไข/เพิ่มเนื้อหา

เนื้อหาบทเรียนทั้งหมดเป็นอ็อบเจ็กต์ JavaScript ธรรมดาในไฟล์ `js/curriculum-*.js` — เปิดไฟล์แก้ข้อความ คำศัพท์ หรือโจทย์ได้โดยตรง โครงสร้างของแต่ละสัปดาห์เหมือนกันทั้ง 3 แทร็ก (ดูตัวอย่างจากสัปดาห์แรกในไฟล์ใดก็ได้) ประกอบด้วย `objectives`, `grammar`, `vocabulary`, `reading`, `speaking`, `quiz`

## ข้อจำกัดที่ควรรู้

- ฟีเจอร์ฝึกพูด (🎤 พูดตาม) ใช้ Web Speech API ซึ่งรองรับดีที่สุดใน Google Chrome (คอมพิวเตอร์/Android) — Safari/Firefox อาจไม่รองรับหรือรองรับไม่เต็มที่ แอปจะแจ้งเตือนหากเบราว์เซอร์ไม่รองรับ
- โหมด Supabase ไม่มีระบบล็อกอิน จึงใช้ policy แบบเปิดกว้าง (อ่าน/เขียนได้ทุกแถวผ่าน anon key) เหมาะกับการใช้งานส่วนตัวเท่านั้น ไม่เหมาะกับการเปิดให้คนอื่นใช้ร่วมกันจำนวนมากโดยไม่ปรับปรุงระบบสิทธิ์ก่อน
