# Name: seminarapi
# port : 3002
# nodejs  Version node-v18.12.1
## Base URL
## http://localhost:3002/seminarapi/
## nodejs v 18.12.1


# How To run project
# install project
- Run `npm install`  or Run `npm i ` 

# task kill on Windows10 OS
- Run `netstat -an taskkill /f /im node.exe`  
# Development server
- Run `npx nodemon` for a dev server.  OR  Run `npx ts-node -P tsconfig.json src/server.ts `

## Development server on Build
# Build Source Code on production
- Run `npx gulp `
 -- After Run `npx gulp ` is have directory `dist` file in package typescript
# directory Build file ` dist/server.ts`
# How To run project
# install project
- Run `npm install `  and  Run `npm install -g nodemon`

# Build Source Code on production
- Run `npx gulp `
# aduit
- Run `npm audit` #Check audit information of installed dependencies showing 
- Run `npm audit fix --force`

# vulnerabilities
- Run `npm audit --json `#Show audit results more detailed with json format
- Run `npm audit fix` #Audit and tries fixing vulnerabilities in dependencies
- Run `npm audit fix `--focce #Forces fix of problems found in installed packages
# installing further `dependencies if necessary

## Database
Database as MySQL version 5.6.20 on trueplookpanya 

## AI Assistant
# https://www.npmjs.com/package/virtual-assistant
# https://www.npmjs.com/package/virtual-google-assistant
# https://xekhai.medium.com/get-chatty-with-your-own-ai-assistant-a-guide-to-building-with-node-js-express-and-openai-6029ab6e6f7d


# MVP หรือ Minimum Viable Product
# System analysis and design system basic api workflow
# Concept
# Features and system workflow
 1. Authentication API (Modules Authentication )
  - 1.0 Register or sign up or  Verify API-KEY to Create token 
  - 1.1 Create token or sign in or Verify by API-KEY to Create token 
  - 1.2 Verify token
  - 1.3 Private permission by token checking
  - 1.4 Access or allow to modules in function on api
  - 1.5 Validate Input data before access function and modules
  - 1.6 Cache management api
 2. User Management (Modules User )
 - 2.1
 - 2.2
 3. Seminar Management (Modules Seminar )
 - 3.1
 - 3.2
 4. System Report (Modules Report )
 - 4.1
 - 4.2
##  Task Process Develop
- 1. Design system basic api workflow
- 2. Develop Application  use workflow diagram
- 3. Test by Tester or UAT Test  follow up workflow diagram
- 4. Deploy on staging or UAT  
- 5. Deploy on Production
- 6. MA (Maintenance api)
- 7. Upgrad Api 
```
MVP หรือ Minimum Viable Product คือ เครื่องมือกลยุทธ์ทางธุรกิจที่มีเป้าหมายเพื่อ ‘ลดความเสี่ยง’ ที่อาจเกิดขึ้นจากการผลิตสินค้าหรือบริการแล้วดันไม่เป็นที่ต้องการของตลาด โดยสร้าง “ผลิตภัณฑ์ตั้งต้น” หรือ “บริการตัวอย่าง” ที่เรียกกันภาษาสตาร์ทอัพว่า MVP ออกไปทดลองตลาดก่อน แล้วนำผลตอบรับมาวิเคราะห์ว่าควรเพิ่ม/ลดฟีเจอร์อะไร หรือควรปรับหน้าตาผลิตภัณฑ์หรือบริการตั้งต้นใหม่หรือไม่ อย่างไร



Test for Backend Developer
## Assignment
1. Can you ****only design** Database/Table** for seminar website with 
****explanation**** (in English or Thai)? The MVP user stories will be:
 1. As a seminar host, I can create new seminar event.
 2. As a seminar host, I can upload the visitor list using csv and those 
list will be save to the database.
 3. As a seminar host, I can link the speaker to event, so I can know who 
is the speaker for that event.
 4. As a seminar host, I can define the place where the seminar event is 
located.
 5. As a seminar host, I can send the web link to the visitor.
 6. As a visitor, I can click the link that send from seminar host to 
accept the invitation.
 7. As a seminar host, I can see which visitor accept the invitation.
2. Create **just one** simple API to get the the list of visitor list base 
on/filter by seminar event

1.****เฉพาะออกแบบ** ฐานข้อมูล/ตาราง** สำหรับเว็บไซต์สัมมนากับ
****คำอธิบาย**** (ภาษาอังกฤษหรือภาษาไทย)? เรื่องราวของผู้ใช้ MVP จะเป็น:
  1. ในฐานะผู้จัดสัมมนา ฉันสามารถสร้างงานสัมมนาใหม่ๆ
  2. ในฐานะผู้จัดสัมมนา ฉันสามารถอัปโหลดรายชื่อผู้เยี่ยมชมโดยใช้ csv และเหล่านั้น
รายการจะถูกบันทึกไว้ในฐานข้อมูล
  3. ในฐานะพิธีกรงานสัมมนา ฉันสามารถเชื่อมโยงผู้บรรยายเข้ากับงาน เพื่อให้ฉันรู้ว่าใคร
เป็นผู้บรรยายในงานนั้น
  4. ในฐานะเจ้าภาพสัมมนา ฉันสามารถกำหนดสถานที่จัดงานสัมมนาได้
ตั้งอยู่.
  5. ในฐานะเจ้าภาพสัมมนา ฉันสามารถส่งลิงค์เว็บให้ผู้เยี่ยมชมได้
  6. ในฐานะผู้เยี่ยมชม ฉันสามารถคลิกลิงก์ที่ส่งจากโฮสต์สัมมนาไปที่
ตอบรับคำเชิญ
  7. ในฐานะเจ้าภาพสัมมนา ฉันสามารถดูได้ว่าผู้เยี่ยมชมคนใดตอบรับคำเชิญ
2. สร้าง **เพียงหนึ่งเดียว** API ง่ายๆ เพื่อรับรายการฐานรายชื่อผู้เยี่ยมชม
เปิด/กรองตามงานสัมมนา
```