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

```
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