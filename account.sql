-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 05:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `honkairailroad`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `ownedChars` varchar(256) DEFAULT NULL,
  `currTeam` varchar(256) DEFAULT NULL,
  `fiveStarPity` int(11) DEFAULT NULL,
  `fourStarPity` int(11) DEFAULT NULL,
  `stellarJades` int(11) DEFAULT NULL,
  `usericon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`email`, `password`, `username`, `experience`, `ownedChars`, `currTeam`, `fiveStarPity`, `fourStarPity`, `stellarJades`, `usericon`) VALUES
('kmdomingo1@up.edu.ph', 'Invented1655', 'ThirdWheel', 0, '1, -1', '0, 0, 0, 0', 0, 0, 16000, 1),
('test.gmail', 'password', 'BetaTester', 143, '1, -1, 2, -1, 5, 8, 13, 57, 23, 45, 26, 28, 29, 2, -2', '13, 0, 1, -1, 2, -1', 12, 6, 32000, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
