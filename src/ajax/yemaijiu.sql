/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yemaijiu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:40:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goodsId` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `goodsName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsPrice` int(20) DEFAULT NULL,
  `goodsImg` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('0', '也买酒  澳大利亚进口红酒 黄尾袋鼠梅洛红葡萄酒6支', '284', '../img/detalistbig1.jpg');
INSERT INTO `goods` VALUES ('1', '也买酒 智利原瓶进口红酒 美景湾珍藏梅洛干红葡萄酒', '69', '../img/detalistbig2.jpg');
INSERT INTO `goods` VALUES ('2', '也买酒 智利原瓶进口红酒美景湾赤霞珠干红葡萄酒 750ml', '59', '../img/detalistbig3.jpg');
INSERT INTO `goods` VALUES ('3', '也买酒 智利原瓶进口红酒 蒙特斯晚收贵腐甜白葡萄酒375ml', '159', '../img/detalistbig4.jpg');
INSERT INTO `goods` VALUES ('4', '也买酒 澳大利亚原瓶进口红酒 黄尾袋鼠珍藏西拉干红葡萄酒', '84', '../img/detalistbig5.jpg');
INSERT INTO `goods` VALUES ('5', '也买酒 智利原瓶进口红酒 蒙特斯经典莎当妮干白葡萄酒', '79', '../img/detalistbig6.jpg');
INSERT INTO `goods` VALUES ('6', '也买酒 澳洲进口红酒 黄尾袋鼠珍藏加本力苏维翁干红葡萄酒750ml', '89', '../img/detalistbig7.jpg');
INSERT INTO `goods` VALUES ('7', '也买酒 澳大利亚进口红酒 黄尾袋鼠西拉红葡萄酒750ml', '56', '../img/detalistbig8.jpg');
INSERT INTO `goods` VALUES ('8', '也买酒 澳大利亚原瓶进口红酒 黄尾袋鼠珍藏西拉干红葡萄酒', '85', '../img/detalistbig9.jpg');
INSERT INTO `goods` VALUES ('9', '也买酒 智利原瓶进口红酒 蒙特斯经典莎当妮干白葡萄酒', '79', '../img/detalistbig10.jpg');
INSERT INTO `goods` VALUES ('10', '也买酒 智利原瓶进口红酒美景湾赤霞珠干红葡萄酒 750ml', '59', '../img/detalistbig11.jpg');
INSERT INTO `goods` VALUES ('11', '也买酒 澳大利亚原瓶进口红酒 奔富128西拉子红葡萄酒', '286', '../img/detalistbig12.jpg');
INSERT INTO `goods` VALUES ('12', '也买酒 澳大利亚进口红酒 黄尾袋鼠西拉红葡萄酒750ml', '56', '../img/detalistbig13.jpg');
INSERT INTO `goods` VALUES ('13', '也买酒 西班牙进口 烈酒洋酒 巴维兰咖啡奶油利口酒力娇酒700ml', '267', '../img/detalistbig14.jpg');
INSERT INTO `goods` VALUES ('14', '也买酒 智利原瓶进口红酒 蒙特斯欧法赤霞珠干红葡萄酒', '169', '../img/detalistbig15.jpg');
INSERT INTO `goods` VALUES ('15', '也买酒 智利原瓶进口红酒 活灵魂干红葡萄酒 干露和木桐合酿', '2997', '../img/detalistbig16.jpg');
SET FOREIGN_KEY_CHECKS=1;
