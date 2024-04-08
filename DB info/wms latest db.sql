-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.32 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table wmsapi.item_master
CREATE TABLE IF NOT EXISTS `item_master` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sku` int unsigned NOT NULL,
  `attribute1` varchar(45) DEFAULT NULL,
  `attribute2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SKU_UNIQUE` (`sku`),
  UNIQUE KEY `no_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.item_master: ~4 rows (approximately)
INSERT INTO `item_master` (`id`, `sku`, `attribute1`, `attribute2`) VALUES
	(1, 10001, 'expiry', ''),
	(2, 12346, 'test', ''),
	(3, 55441, 'N/A', ''),
	(4, 65123, 'test', 'expiry');

-- Dumping structure for table wmsapi.item_storage
CREATE TABLE IF NOT EXISTS `item_storage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` int NOT NULL,
  `qty` int NOT NULL,
  `storage_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.item_storage: ~0 rows (approximately)
INSERT INTO `item_storage` (`id`, `sku`, `qty`, `storage_id`) VALUES
	(2, 23423, 234, 'AA-01-02');

-- Dumping structure for table wmsapi.loading
CREATE TABLE IF NOT EXISTS `loading` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_no` varchar(45) NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.loading: ~0 rows (approximately)

-- Dumping structure for table wmsapi.location_master
CREATE TABLE IF NOT EXISTS `location_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(45) DEFAULT NULL,
  `ti` int DEFAULT NULL,
  `hi` int DEFAULT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.location_master: ~8 rows (approximately)
INSERT INTO `location_master` (`id`, `location`, `ti`, `hi`, `status`) VALUES
	(5, 'AA-01-01', 0, 2000, 0),
	(6, 'test', 100, 100, 2),
	(7, 'BB-02-01', 100, 100, 2),
	(8, 'AA-02-02', 100, 100, 0),
	(9, 'theebhan', 100, 100, 0),
	(10, 'navin123', 0, 0, 0),
	(11, 'naivn123', 123, 123, 0),
	(12, '123', 0, 0, 0);

-- Dumping structure for table wmsapi.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderno` varchar(45) NOT NULL,
  `sku` int NOT NULL,
  `qty` int NOT NULL,
  `order_datetime` datetime NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `no_UNIQUE` (`id`),
  UNIQUE KEY `orderno_UNIQUE` (`orderno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.order: ~0 rows (approximately)

-- Dumping structure for table wmsapi.receiving
CREATE TABLE IF NOT EXISTS `receiving` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `sku` int NOT NULL,
  `qty_received` int NOT NULL,
  `expiry_date` date DEFAULT NULL,
  `received_time` datetime NOT NULL,
  `status` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `no_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table wmsapi.receiving: ~16 rows (approximately)
INSERT INTO `receiving` (`id`, `sku`, `qty_received`, `expiry_date`, `received_time`, `status`) VALUES
	(1, 10001, 10, '2024-03-16', '2024-03-16 15:26:46', 0),
	(2, 23423, 234, '2024-03-22', '2024-03-16 15:26:46', 1),
	(3, 10001, 10, '2222-01-15', '2024-03-16 15:29:31', 0),
	(5, 10001, 10, '1232-01-15', '2024-03-16 15:42:39', 0),
	(6, 10001, 10, '1451-01-15', '2024-03-16 15:49:17', 0),
	(7, 10001, 10, '1451-01-15', '2024-03-16 15:49:56', 0),
	(8, 10002, 11, '1451-01-15', '2024-03-16 16:30:15', 0),
	(9, 10024, 20, '1451-01-15', '2024-03-16 16:41:28', 0),
	(10, 10024, 20, NULL, '2024-03-16 17:46:59', 0),
	(11, 10024, 500, NULL, '2024-03-16 21:35:06', 0),
	(12, 10015, 555, NULL, '2024-03-16 21:49:25', 0),
	(13, 10015, 555, NULL, '2024-03-18 14:38:15', 0),
	(14, 55555, 1000, NULL, '2024-03-20 15:14:56', 0),
	(15, 55445, 10000, '2025-04-20', '2024-03-20 15:35:16', 0),
	(16, 55455, 100000, '2024-08-29', '2024-03-20 16:12:01', 0),
	(17, 10001, 123456, '2024-10-11', '2024-03-20 16:14:15', 0),
	(18, 234324, 12312313, '2025-01-02', '2024-03-20 16:14:29', 0),
	(19, 12312, 123123, '2025-10-29', '2024-03-20 16:20:04', 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
