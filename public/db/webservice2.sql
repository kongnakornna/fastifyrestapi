/*
 Navicat Premium Data Transfer

 Source Server         : MareaDB-local-3308
 Source Server Type    : MariaDB
 Source Server Version : 100608
 Source Host           : localhost:3308
 Source Schema         : webservice2

 Target Server Type    : MariaDB
 Target Server Version : 100608
 File Encoding         : 65001

 Date: 12/12/2022 10:35:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for oauth2_account
-- ----------------------------
DROP TABLE IF EXISTS `oauth2_account`;
CREATE TABLE `oauth2_account`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `level` int(11) NOT NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 1,
  `network_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'fackbook_id google_id line_id api_id',
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `uid`(`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth2_account
-- ----------------------------

-- ----------------------------
-- Table structure for oauth2_config
-- ----------------------------
DROP TABLE IF EXISTS `oauth2_config`;
CREATE TABLE `oauth2_config`  (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `user_id_create` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `grant_type` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `authorization_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `access_token_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `client_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `client_secret` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `redirect_url` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `enabled` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `refresh_token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `identity_token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `access_token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `scope` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `web` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `app` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `datetime` datetime NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth2_config
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens`  (
  `access_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`access_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
INSERT INTO `oauth_access_tokens` VALUES ('0b84a512b6ea40d9aa71027fd3dd46d898e2ae5c', 'testclient', 'user', '2015-06-28 15:55:05', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('1d83cfb85c8afe71dac8a9ab32875d4ce8025c11', 'testclient', 'user', '2015-06-28 15:53:34', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('1f960e7bd2454a4a25f91232b71e2659fa8d6415', 'testclient', 'xiaocao', '2015-06-28 15:46:33', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('23b3ce4747183460fd753238f0e79b34b3e7bc3c', 'testclient', 'user', '2015-06-28 15:55:06', 'userinfo node file');
INSERT INTO `oauth_access_tokens` VALUES ('5c19932029b545ba220b3cba53cc996d8e321704', 'testclient', 'user', '2015-06-28 15:54:33', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('6b0abf82a8b4269759b47a2797794f657fe8868a', 'testclient', 'user', '2015-06-28 15:46:36', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('7b6c72176ede3e63f78d61849b6ad01b2bf81a6b', 'testclient', 'user', '2015-06-28 15:55:16', 'userinfo node file');
INSERT INTO `oauth_access_tokens` VALUES ('8995e510a6e5672c73e800d48acf8a3f79205621', 'testclient', 'user', '2015-06-28 15:46:49', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('8cb848d89b7d12beb746b0421ece7209f5c8633a', 'testclient', 'xiaocao', '2015-06-28 15:55:13', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('ae5f8c93dc51d856d6536aec528c31c6f6450458', 'testclient', 'user', '2015-06-28 15:55:16', 'userinfo cloud file node');
INSERT INTO `oauth_access_tokens` VALUES ('df43443857a63df74f426dfa679c887483827318', 'testclient', 'xiaocao', '2015-06-28 15:46:48', 'userinfo cloud file node');

-- ----------------------------
-- Table structure for oauth_appservice
-- ----------------------------
DROP TABLE IF EXISTS `oauth_appservice`;
CREATE TABLE `oauth_appservice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'id is md5',
  `client_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `client_secect` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `device` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT '1' COMMENT '1',
  `ipaddress` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `passwordde` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  `expire_date` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `create_date` datetime NULL DEFAULT NULL,
  `detail` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone_number` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_appservice
-- ----------------------------
INSERT INTO `oauth_appservice` VALUES (1, '55a54008ad1ba589aa210d2629c1df41', 'QkmEAXyU8XOT-KwBtRlCVPP-9B8HXLrF-kP68pO-89E3B-44939', 'UwO4QJ366cKp2avJVM0nnZTtS2VFNNtUg4LfyYzxuOUXJosYO9bMICvRzlUGkJOR', NULL, '1', NULL, 'kongnakorn', '5cd3c5448220bf0a576bc13de63f823f', 'Na@5371@@', 'konngnakornna@gmail.com', 1, 1, '2021-08-03 16:45:02.150', '2021-08-03 16:45:02', NULL, NULL);

-- ----------------------------
-- Table structure for oauth_authorization_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_authorization_codes`;
CREATE TABLE `oauth_authorization_codes`  (
  `authorization_code` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Authorization code，access_token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'Appid',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'url',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`authorization_code`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_authorization_codes
-- ----------------------------
INSERT INTO `oauth_authorization_codes` VALUES ('016e1a57392e4b672415340ba4d6df18c90eab9f', 'testclient', NULL, '', '2015-06-28 14:56:55', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('2f37568bc9a2d8eb3ecb4c360a3abc71235f68c0', 'testclient', NULL, '', '2015-06-28 14:52:14', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('63c3b32c565eea30197068658d32678baf1202d6', 'testclient', NULL, '', '2015-06-28 14:56:51', 'userinfo');
INSERT INTO `oauth_authorization_codes` VALUES ('89fab65a94cbbf8b39ac21a3d797d45964deabd2', 'testclient', NULL, '', '2015-06-28 14:56:57', 'userinfo');

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppId',
  `client_secret` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppSecret',
  `redirect_uri` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'url',
  `grant_types` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'client_credentials、password、refresh_token、authorization_code、authorization_access_token',
  `scope` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'Scope',
  `user_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'u_id',
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
INSERT INTO `oauth_clients` VALUES ('client2', 'pass2', 'http://homeway.me/', 'authorization_code', 'file node userinfo cloud', 'xiaocao');
INSERT INTO `oauth_clients` VALUES ('testclient', 'testpass', 'http://homeway.me/', 'client_credentials password authorization_code refresh_token', 'file node userinfo cloud', 'xiaocao');

-- ----------------------------
-- Table structure for oauth_jwt
-- ----------------------------
DROP TABLE IF EXISTS `oauth_jwt`;
CREATE TABLE `oauth_jwt`  (
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'id',
  `subject` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `public_key` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_jwt
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens`  (
  `refresh_token` varchar(40) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'access_token token',
  `client_id` varchar(80) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL COMMENT 'AppId',
  `user_id` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'id',
  `expires` timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT 'date(\"Y-m-d H:i:s\")',
  `scope` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`refresh_token`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------
INSERT INTO `oauth_refresh_tokens` VALUES ('0dcd00a06f1598db7c7df2d2faf4c16a7be9c28d', 'testclient', 'user', '2015-07-12 14:55:06', 'userinfo node file');
INSERT INTO `oauth_refresh_tokens` VALUES ('7432203dc184c6c2090fef8b02c5c5acf3f349a5', 'testclient', 'user', '2015-07-12 14:55:16', 'userinfo node file');
INSERT INTO `oauth_refresh_tokens` VALUES ('aef23d373a276116b3afd946ba4a9c39780186c0', 'testclient', 'user', '2015-07-12 14:53:34', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('af1e55594cae88cedf312f84a89109e3b80a5932', 'testclient', 'user', '2015-07-12 14:54:33', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('f09ed02ebf185fb08b4f0f316e59bac07028997b', 'testclient', 'user', '2015-07-12 14:46:36', 'userinfo cloud file node');
INSERT INTO `oauth_refresh_tokens` VALUES ('fb1aa4bd8d123abaa882c759d60326dae51543c3', 'testclient', 'user', '2015-07-12 14:46:49', 'userinfo cloud file node');

-- ----------------------------
-- Table structure for oauth_scopes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_scopes`;
CREATE TABLE `oauth_scopes`  (
  `scope` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `is_default` tinyint(1) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_scopes
-- ----------------------------
INSERT INTO `oauth_scopes` VALUES ('userinfo', 1);
INSERT INTO `oauth_scopes` VALUES ('file', 0);
INSERT INTO `oauth_scopes` VALUES ('node', 0);
INSERT INTO `oauth_scopes` VALUES ('cloud', 0);
INSERT INTO `oauth_scopes` VALUES ('share', 0);

-- ----------------------------
-- Table structure for oauth_users
-- ----------------------------
DROP TABLE IF EXISTS `oauth_users`;
CREATE TABLE `oauth_users`  (
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` varchar(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of oauth_users
-- ----------------------------
INSERT INTO `oauth_users` VALUES ('user', 'pass', 'xiaocao', 'grasses');
INSERT INTO `oauth_users` VALUES ('username', 'password', 'xiaocao', 'grasses');

-- ----------------------------
-- Table structure for sd_appservice
-- ----------------------------
DROP TABLE IF EXISTS `sd_appservice`;
CREATE TABLE `sd_appservice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `secect_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `app_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `device` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ipaddress` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `count` int(11) NULL DEFAULT NULL,
  `expire_date` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `create_date` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sd_appservice
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'demo', 'demo', 10);
INSERT INTO `user` VALUES (2, 'demo2', 'demo2', 20);

SET FOREIGN_KEY_CHECKS = 1;
