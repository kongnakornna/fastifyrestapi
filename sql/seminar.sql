/*
 Navicat Premium Data Transfer

 Source Server         : 3307
 Source Server Type    : MariaDB
 Source Server Version : 101101 (10.11.1-MariaDB)
 Source Host           : localhost:3307
 Source Schema         : seminar

 Target Server Type    : MariaDB
 Target Server Version : 101101 (10.11.1-MariaDB)
 File Encoding         : 65001

 Date: 24/02/2023 02:37:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files`  (
  `file_id` int(11) NOT NULL,
  `originalname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mimetype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`file_id`) USING BTREE,
  INDEX `file_id`(`file_id`) USING BTREE,
  INDEX `date`(`date`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of files
-- ----------------------------

-- ----------------------------
-- Table structure for sd_user_roles
-- ----------------------------
DROP TABLE IF EXISTS `sd_user_roles`;
CREATE TABLE `sd_user_roles`  (
  `role_id` int(11) NOT NULL,
  `permission_type_id` int(11) NOT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`, `permission_type_id`) USING BTREE,
  INDEX `user_id`(`permission_type_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_user_roles
-- ----------------------------
INSERT INTO `sd_user_roles` VALUES (1, 1, 'All');
INSERT INTO `sd_user_roles` VALUES (2, 1, 'Config');
INSERT INTO `sd_user_roles` VALUES (3, 1, 'Report');

-- ----------------------------
-- Table structure for sd_users
-- ----------------------------
DROP TABLE IF EXISTS `sd_users`;
CREATE TABLE `sd_users`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `idcard` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 0,
  `network_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `infomation_agree_status` int(11) NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `online_status` int(11) NULL DEFAULT NULL,
  `mesage` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password_temp` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `profile_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `network_type_id` int(11) NULL DEFAULT NULL,
  `public` int(11) NULL DEFAULT NULL,
  `isActive` tinyint(4) NULL DEFAULT NULL,
  `permission_type_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `date`(`date`) USING BTREE,
  INDEX `username`(`username`) USING BTREE,
  INDEX `email`(`email`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `level`(`level`) USING BTREE,
  INDEX `profile_id`(`network_id`) USING BTREE,
  INDEX `network_type_id`(`network_type_id`) USING BTREE,
  INDEX `isActive`(`isActive`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users
-- ----------------------------
INSERT INTO `sd_users` VALUES (1, 'kongnakorn', 'jantakun', 'Nakorn', 'Na', NULL, '2023-02-24 02:06:31', 'kongnakornna', '5ef4a6b0978ba16708d5e59238f53026', 'kongnakornna@gmail.com', 0, 1, NULL, NULL, 'dev', 0, 1, NULL, '2023-02-24 02:33:33', 0, NULL, 'Na@5371@#@#', '55a54008ad1ba589aa210d2629c1df41', 0, 0, 1, 3);

-- ----------------------------
-- Table structure for sd_users2
-- ----------------------------
DROP TABLE IF EXISTS `sd_users2`;
CREATE TABLE `sd_users2`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `idcard` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `level` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `network_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `infomation_agree_status` int(11) NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT NULL,
  `birthday` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `last_sign_in` datetime NULL DEFAULT NULL,
  `online_status` int(11) NULL DEFAULT NULL,
  `mesage` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password_temp` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `profile_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `network_type_id` int(11) NULL DEFAULT NULL,
  `public` int(11) NULL DEFAULT NULL,
  `isActive` tinyint(4) NULL DEFAULT NULL,
  `permission_type_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `date`(`date`) USING BTREE,
  INDEX `username`(`username`) USING BTREE,
  INDEX `email`(`email`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `level`(`level`) USING BTREE,
  INDEX `profile_id`(`network_id`) USING BTREE,
  INDEX `network_type_id`(`network_type_id`) USING BTREE,
  INDEX `isActive`(`isActive`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users2
-- ----------------------------
INSERT INTO `sd_users2` VALUES (1, 'คงนคร', 'จันทะคุณ', 'คงนคร', 'คงนคร', NULL, '2023-01-08 03:52:10', 'kongnakornna', '7cb98c6deb32bd25bd735da156b91bf5', 'kongnakornna@gmail.com', 3, 1, '1', NULL, NULL, 0, NULL, NULL, '2023-01-08 03:52:10', NULL, NULL, 'kongnakornna', '1', 1, 0, 1, 1);
INSERT INTO `sd_users2` VALUES (2, NULL, NULL, NULL, NULL, NULL, NULL, 'kongnakornna1', 'Na@5371@#@#', 'kongnakornna1@gmail.com', 0, 0, '1', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 'Na@5371@#@#', '0', 0, 0, 0, 1);

-- ----------------------------
-- Table structure for sd_users_address
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_address`;
CREATE TABLE `sd_users_address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id2` int(11) NOT NULL,
  `active` int(11) NULL DEFAULT 0,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `contact_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone_number` varbinary(255) NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `line` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `number` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `freetext` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `location` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `countries_id` int(11) NULL DEFAULT NULL,
  `geo_id` int(11) NULL DEFAULT NULL,
  `province_id` int(11) NULL DEFAULT NULL,
  `district_id` int(11) NULL DEFAULT NULL,
  `subdistrict_id` int(11) NULL DEFAULT NULL,
  `postcode` int(11) NULL DEFAULT NULL,
  `status` int(10) UNSIGNED NULL DEFAULT 1,
  `comment` longtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `create` datetime NULL DEFAULT NULL,
  `update` datetime NULL DEFAULT NULL,
  `language_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`, `id2`) USING BTREE,
  INDEX `id2`(`id2`) USING BTREE,
  INDEX `first_name`(`first_name`) USING BTREE,
  INDEX `last_name`(`last_name`) USING BTREE,
  INDEX `contact`(`contact_name`) USING BTREE,
  INDEX `countries_id`(`countries_id`) USING BTREE,
  INDEX `geo_id`(`geo_id`) USING BTREE,
  INDEX `province_id`(`province_id`) USING BTREE,
  INDEX `district_id`(`district_id`) USING BTREE,
  INDEX `subdistrict_id`(`subdistrict_id`) USING BTREE,
  INDEX `postcode`(`postcode`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_address
-- ----------------------------

-- ----------------------------
-- Table structure for sd_users_history
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_history`;
CREATE TABLE `sd_users_history`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `zone_id` int(11) NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 1,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `remark` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `uid`(`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `zone_id`(`zone_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_history
-- ----------------------------

-- ----------------------------
-- Table structure for sd_users_log
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_log`;
CREATE TABLE `sd_users_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NULL DEFAULT NULL COMMENT 'user_id ,type=1 address ,type=2',
  `type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '1' COMMENT '1= event calendar 2= event  category',
  `uid` int(11) NULL DEFAULT NULL,
  `log_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 1,
  `language_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `event_id`(`event_id`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `type`(`type`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_log
-- ----------------------------

-- ----------------------------
-- Table structure for sd_users_pdpa_allow
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_allow`;
CREATE TABLE `sd_users_pdpa_allow`  (
  `allow_id` int(11) NOT NULL AUTO_INCREMENT,
  `pdpa_option_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 1,
  PRIMARY KEY (`allow_id`) USING BTREE,
  INDEX `allow_id`(`allow_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_pdpa_allow
-- ----------------------------

-- ----------------------------
-- Table structure for sd_users_pdpa_allow_option
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_allow_option`;
CREATE TABLE `sd_users_pdpa_allow_option`  (
  `pdpa_option_id` int(11) NOT NULL AUTO_INCREMENT,
  `pdpa_option_id_id2` int(11) NULL DEFAULT NULL,
  `option_name` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `descriptiopn` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `language_id` int(11) NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_option_id`) USING BTREE,
  INDEX `id`(`pdpa_option_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_pdpa_allow_option
-- ----------------------------
INSERT INTO `sd_users_pdpa_allow_option` VALUES (1, 1, 'age', 'allow access information personal', 1);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (2, 1, 'อายุ', 'อนุญาตให้เข้าถึงข้อมูล', 2);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (3, 3, 'Gender', 'allow access information personal', 1);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (4, 3, 'เพศ', 'อนุญาตให้เข้าถึงข้อมูล', 2);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (5, 5, 'birthday', 'allow access information personal', 1);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (6, 5, 'วันเกิด', 'อนุญาตให้เข้าถึงข้อมูล', 2);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (7, 7, 'Deficiencies or disabilities information', 'allow access information personal', 1);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (8, 7, 'ข้อมูลความบกพร่องหรือพิการ', 'อนุญาตให้เข้าถึงข้อมูล', 2);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (9, 9, 'Allow all ', 'Allow all access information personal', 1);
INSERT INTO `sd_users_pdpa_allow_option` VALUES (10, 9, 'ให้ข้อมูลส่วนบุคคลทั้งหมด', 'อนุญาตให้เข้าถึงข้อมูล ส่วนบุคคลทั้งหมด', 2);

-- ----------------------------
-- Table structure for sd_users_pdpa_category
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_category`;
CREATE TABLE `sd_users_pdpa_category`  (
  `pdpa_category_id` int(11) NOT NULL AUTO_INCREMENT,
  `pdpa_category_id2` int(11) NULL DEFAULT NULL,
  `category_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `language_id` int(11) NULL DEFAULT NULL COMMENT 'ถาษา',
  PRIMARY KEY (`pdpa_category_id`) USING BTREE,
  INDEX `uid`(`pdpa_category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_pdpa_category
-- ----------------------------
INSERT INTO `sd_users_pdpa_category` VALUES (1, 1, 'Accept allow access information personal', 1);
INSERT INTO `sd_users_pdpa_category` VALUES (2, 1, 'ยอมรับ อนุญาตให้เข้าถึงข้อมูลส่วนบุคคล', 2);
INSERT INTO `sd_users_pdpa_category` VALUES (3, 3, 'Don\'t allow access information personal', 1);
INSERT INTO `sd_users_pdpa_category` VALUES (4, 3, 'ไม่อนุญาตให้เข้าถึงข้อมูลส่วนบุคคล', 2);
INSERT INTO `sd_users_pdpa_category` VALUES (5, 5, 'Reserve the right ,Cancel allow access information personal', 1);
INSERT INTO `sd_users_pdpa_category` VALUES (6, 5, 'ขอสงวนสิทธิ์การเข้าถึงข้อมูลส่วนบุคคล , ยกเลิก อนุญาตให้เข้าถึงข้อมูลส่วนบุคคล', 2);
INSERT INTO `sd_users_pdpa_category` VALUES (7, 7, 'Request deletion information', 1);
INSERT INTO `sd_users_pdpa_category` VALUES (8, 7, 'ร้องขอให้รลบข้อมูล', 2);

-- ----------------------------
-- Table structure for sd_users_pdpa_history
-- ----------------------------
DROP TABLE IF EXISTS `sd_users_pdpa_history`;
CREATE TABLE `sd_users_pdpa_history`  (
  `pdpa_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `pdpa_option_id_id2` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `remark` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `usertype` int(11) NULL DEFAULT 1 COMMENT 'customer or employee',
  `pdpa_option_id` int(11) NULL DEFAULT NULL,
  `file` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pdpa_id`) USING BTREE,
  INDEX `uid`(`pdpa_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_users_pdpa_history
-- ----------------------------

-- ----------------------------
-- Table structure for user_history
-- ----------------------------
DROP TABLE IF EXISTS `user_history`;
CREATE TABLE `user_history`  (
  `history_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `history_content_id` int(10) UNSIGNED NULL DEFAULT NULL,
  `history_type` varchar(3) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT '0',
  `history_table` char(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `history_url` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `user_ip` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `member_id` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `history_datetime` datetime NULL DEFAULT NULL,
  `history_status` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '0',
  `history_task` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`history_id`) USING BTREE,
  INDEX `history_id`(`history_id`, `user_ip`, `member_id`) USING BTREE,
  INDEX `history_content_id`(`history_content_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 47186 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_history
-- ----------------------------

-- ----------------------------
-- Table structure for user_log
-- ----------------------------
DROP TABLE IF EXISTS `user_log`;
CREATE TABLE `user_log`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `member_id` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `task` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ref_id` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `menu` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `updated_date` datetime NULL DEFAULT NULL,
  `user_ip` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `log_data` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `ref_id`(`ref_id`) USING BTREE,
  INDEX `member_id`(`member_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 918095 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_log
-- ----------------------------

-- ----------------------------
-- Table structure for user_permission_type
-- ----------------------------
DROP TABLE IF EXISTS `user_permission_type`;
CREATE TABLE `user_permission_type`  (
  `permission_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '',
  PRIMARY KEY (`permission_type_id`) USING BTREE,
  INDEX `log_id`(`permission_type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_permission_type
-- ----------------------------
INSERT INTO `user_permission_type` VALUES (1, 'Superadmin');
INSERT INTO `user_permission_type` VALUES (2, 'Admin');
INSERT INTO `user_permission_type` VALUES (3, 'Employee');
INSERT INTO `user_permission_type` VALUES (4, 'Customer');

-- ----------------------------
-- Table structure for user_personal_accept
-- ----------------------------
DROP TABLE IF EXISTS `user_personal_accept`;
CREATE TABLE `user_personal_accept`  (
  `personal_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT 'id ผู้ใช้งาน',
  `curator_child_email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'email ผู้ปกครองผู้เยาว์',
  `curator_child_citizen_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Idcard ผู้ปกครองผู้เยาว์',
  `curator_child_firstname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'ชือ ผู้ปกครองผู้เยาว์',
  `curator_child_lastname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'นามสกุล ผู้ปกครองผู้เยาว์',
  `add_date` int(11) NULL DEFAULT NULL COMMENT 'วันที่ จัดเก็บ',
  `add_month` int(11) NULL DEFAULT NULL COMMENT 'เดือนที่ จัดเก็บ',
  `add_year` int(11) NULL DEFAULT NULL COMMENT 'ปีที่ จัดเก็บ',
  `user_active_for_email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'สถานะ ยืนยันผ่าน email   user',
  `user_active_for_email_date` datetime NULL DEFAULT NULL COMMENT 'วันที่ ยืนยันผ่าน email   user',
  `curator_child_active_for_email` int(11) NULL DEFAULT NULL COMMENT 'สถานะ ยืนยันผ่าน email ผู้ปกครองผู้เยาว์',
  `curator_child_active_for_email_date` datetime NULL DEFAULT NULL COMMENT 'วันที่ ยืนยันผ่าน email ผู้ปกครองผู้เยาว์',
  `user_privacy_policy_status` int(11) NULL DEFAULT NULL COMMENT 'ยอมรับ',
  `user_agree_status1` int(11) NULL DEFAULT NULL COMMENT '1  อายุ  20+',
  `user_agree_status2` int(11) NULL DEFAULT NULL COMMENT '2  อายุ  18 + <20',
  `user_agree_status3` int(11) NULL DEFAULT NULL COMMENT '3  อายุ  15-18',
  `user_agree_status4` int(11) NULL DEFAULT NULL COMMENT '4  อายุ  <=10',
  `curator_child_agree_status1` int(11) NULL DEFAULT NULL COMMENT 'ผู้ปกครองเห็นชอบแล้ว 18+',
  `curator_child_agree_status2` int(11) NULL DEFAULT NULL COMMENT 'ผู้ปกครองเห็นชอบแล้ว 15+',
  `curator_child_agree_status3` int(11) NULL DEFAULT NULL COMMENT 'ผู้ปกครองเห็นชอบแล้ว น้อบกว่า / เท่ากับ 15',
  `curator_child_agree_status4` int(11) NULL DEFAULT NULL COMMENT 'ผู้ปกครองเห็นชอบแล้ว น้อบกว่า / เท่ากับ 10',
  `permission_type_id` int(11) NULL DEFAULT NULL COMMENT 'ประเภทการอนุญาติ',
  `permission_date` datetime NULL DEFAULT NULL COMMENT 'วันเวลาที่การอนุญาติ',
  `permission_time` int(11) NULL DEFAULT 0 COMMENT 'ระยะเวลาในการอนุญาติ',
  `permission_date_expire` date NULL DEFAULT NULL COMMENT 'กำหนดวันที่สิ้นสุดการอนุญาต',
  `remark` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'ข้อความ',
  `pesonal_policy_status` int(11) NULL DEFAULT NULL COMMENT 'สถานะการอนุญาต',
  `pesonal_policy_status_date` datetime NULL DEFAULT NULL COMMENT 'วันที่ล่าสุดที่แก้ไขสถานะการอนุญาต',
  `personal_activite_type_id` int(11) NULL DEFAULT NULL COMMENT 'ประเภทของกิจกรรม',
  `create_date` datetime NULL DEFAULT NULL COMMENT 'วันที่สร้าง',
  `privacy_policy_status` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`personal_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `curator_child_email`(`curator_child_email`) USING BTREE,
  INDEX `curator_child_citizen_id`(`curator_child_citizen_id`) USING BTREE,
  INDEX `user_agree_status1`(`user_agree_status1`) USING BTREE,
  INDEX `user_agree_status2`(`user_agree_status2`) USING BTREE,
  INDEX `user_agree_status3`(`user_agree_status3`) USING BTREE,
  INDEX `user_agree_status4`(`user_agree_status4`) USING BTREE,
  INDEX `date`(`add_date`) USING BTREE,
  INDEX `month`(`add_month`) USING BTREE,
  INDEX `year`(`add_year`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 73914 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_personal_accept
-- ----------------------------

-- ----------------------------
-- Table structure for user_personal_accept_file
-- ----------------------------
DROP TABLE IF EXISTS `user_personal_accept_file`;
CREATE TABLE `user_personal_accept_file`  (
  `id` int(11) NOT NULL,
  `user_personal_accept_id` int(11) NULL DEFAULT NULL,
  `curator_child_email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '',
  `filename` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `remark` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 0,
  `personal_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `personal_id`(`personal_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_personal_accept_file
-- ----------------------------

-- ----------------------------
-- Table structure for user_personal_activite_logs
-- ----------------------------
DROP TABLE IF EXISTS `user_personal_activite_logs`;
CREATE TABLE `user_personal_activite_logs`  (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NULL DEFAULT NULL COMMENT 'ประเภทการให้ความยินยอม',
  `user_id` int(11) NULL DEFAULT NULL COMMENT 'ผู้ใช้งาน',
  `audit_user_id` int(11) NULL DEFAULT NULL COMMENT 'ผู้ตรวจสอบ',
  `user_personal_accept_id` int(11) NULL DEFAULT NULL COMMENT 'id ที่อนุญาต',
  `member_id` int(11) NULL DEFAULT NULL,
  `user_id_temp` int(11) NULL DEFAULT NULL,
  `user_citizen_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `curator_child_citizen_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'รายละเอียด',
  `remark` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'บันทึกย่อ',
  `modules` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `add_date` int(11) NULL DEFAULT NULL,
  `add_mouth` int(11) NULL DEFAULT NULL,
  `add_year` int(11) NULL DEFAULT NULL,
  `audit_date` datetime NULL DEFAULT NULL COMMENT 'วันที่ตรวจสอบ',
  `personal_activite_type_id` int(11) NULL DEFAULT NULL COMMENT 'รูปแบบการอนุญาตส่วนบุุคคล',
  `user_id_for_access` int(11) NULL DEFAULT NULL COMMENT 'บุคคลที่เข้ามาดูข้อมูล',
  PRIMARY KEY (`log_id`) USING BTREE,
  INDEX `log_id`(`log_id`) USING BTREE,
  INDEX `audit_user_id`(`audit_user_id`) USING BTREE,
  INDEX `user_personal_accept_id`(`user_personal_accept_id`) USING BTREE,
  INDEX `member_id`(`member_id`) USING BTREE,
  INDEX `user_id_temp`(`user_id_temp`) USING BTREE,
  INDEX `user_citizen_id`(`user_citizen_id`) USING BTREE,
  INDEX `curator_child_citizen_id`(`curator_child_citizen_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `datetime`(`datetime`) USING BTREE,
  INDEX `date`(`add_date`) USING BTREE,
  INDEX `mouth`(`add_mouth`) USING BTREE,
  INDEX `year`(`add_year`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 139209 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_personal_activite_logs
-- ----------------------------

-- ----------------------------
-- Table structure for user_personal_activite_logs_type
-- ----------------------------
DROP TABLE IF EXISTS `user_personal_activite_logs_type`;
CREATE TABLE `user_personal_activite_logs_type`  (
  `type_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '',
  PRIMARY KEY (`type_id`) USING BTREE,
  INDEX `log_id`(`type_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_personal_activite_logs_type
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
