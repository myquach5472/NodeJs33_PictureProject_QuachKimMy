/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` date DEFAULT NULL,
  `noi_dung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(50) DEFAULT NULL,
  `duong_dan` varchar(100) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `luu_hinh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` date DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_hinh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_hinh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `mat_khau` varchar(50) DEFAULT NULL,
  `ho_ten` varchar(50) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(1, 1, 1, '2023-09-26', 'Bình luận số 1.');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2, 2, 2, '2023-07-27', 'Bình luận số 2.');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 3, 3, '2023-08-27', 'Bình luận số 3.');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(4, 4, 4, '2023-09-27', 'Bình luận số 4.'),
(5, 5, 5, '2023-04-27', 'Bình luận số 5.'),
(6, 6, 6, '2023-01-22', 'Bình luận số 6.'),
(7, 7, 7, '2023-09-22', 'Bình luận số 7.'),
(8, 8, 8, '2023-09-13', 'Bình luận số 8.'),
(9, 9, 9, '2022-09-27', 'Bình luận số 9.'),
(10, 10, 10, '2023-01-14', 'Bình luận số 10.');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1, 'Ảnh 1', 'duong_dan_1.jpg', 'Mô tả ảnh 1', 1);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(2, 'Ảnh 2', 'duong_dan_2.jpg', 'Mô tả ảnh 2', 2);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(3, 'Ảnh 3', 'duong_dan_3.jpg', 'Mô tả ảnh 3', 3);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(4, 'Ảnh 4', 'duong_dan_4.jpg', 'Mô tả ảnh 4', 4),
(5, 'Ảnh 5', 'duong_dan_5.jpg', 'Mô tả ảnh 5', 5),
(6, 'Ảnh 6', 'duong_dan_6.jpg', 'Mô tả ảnh 6', 6),
(7, 'Ảnh 7', 'duong_dan_7.jpg', 'Mô tả ảnh 7', 7),
(8, 'Ảnh 8', 'duong_dan_8.jpg', 'Mô tả ảnh 8', 8),
(9, 'Ảnh 9', 'duong_dan_9.jpg', 'Mô tả ảnh 9', 9),
(10, 'Ảnh 10', 'duong_dan_10.jpg', 'Mô tả ảnh 10', 10);

INSERT INTO `luu_hinh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 1, '2023-09-14');
INSERT INTO `luu_hinh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(2, 2, '2022-03-27');
INSERT INTO `luu_hinh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(3, 3, '2011-12-27');
INSERT INTO `luu_hinh` (`nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(4, 4, '2023-09-22'),
(5, 5, '2021-06-19'),
(6, 6, '2023-02-25'),
(7, 7, '2023-09-27'),
(8, 8, '2022-09-11'),
(9, 9, '2023-09-27'),
(10, 10, '2023-09-27');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1, 'user1@example.com', 'password1', 'Nguyễn Văn A', 30, 'user1.jpg');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(2, 'user2@example.com', 'password2', 'Trần Thị B', 25, 'user2.jpg');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(3, 'user3@example.com', 'password3', 'Lê Văn C', 35, 'user3.jpg');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(4, 'user4@example.com', 'password4', 'Phạm Thị D', 28, 'user4.jpg'),
(5, 'user5@example.com', 'password5', 'Hoàng Văn E', 22, 'user5.jpg'),
(6, 'user6@example.com', 'password6', 'Vũ Thị F', 40, 'user6.jpg'),
(7, 'user7@example.com', 'password7', 'Ngô Văn G', 27, 'user7.jpg'),
(8, 'user8@example.com', 'password8', 'Lý Thị H', 32, 'user8.jpg'),
(9, 'user9@example.com', 'password9', 'Đinh Văn I', 29, 'user9.jpg'),
(10, 'user10@example.com', 'password10', 'Lương Thị K', 34, 'user10.jpg');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;