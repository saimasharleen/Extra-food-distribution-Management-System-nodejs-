-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2019 at 11:25 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `extrafood`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `post` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `post`) VALUES
(4, 'yoyo bts\r\n'),
(5, 'yoyo bts\r\n\r\n\r\n'),
(6, 'abcs\r\n'),
(7, 'bts'),
(8, 'yoyobts\r\n\r\n\r\n'),
(9, 'yoyo\r\n\r\n'),
(10, '\r\nabcdee\r\n\r\n\r\n\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `eventmanage`
--

CREATE TABLE `eventmanage` (
  `id` int(100) NOT NULL,
  `eventname` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `eventdate` date NOT NULL,
  `eventpost` varchar(1000) COLLATE utf32_unicode_ci NOT NULL,
  `location` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `eventstatus` varchar(100) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `eventmanage`
--

INSERT INTO `eventmanage` (`id`, `eventname`, `username`, `eventdate`, `eventpost`, `location`, `eventstatus`) VALUES
(1, 'kuratoli', 'baro00', '2019-07-18', 'vsgfajgldhlhbldhblhb', 'kuratoli', 'complete'),
(2, 'panthapath', 'kim10', '2019-07-07', 'hdsjhhfiahbiphbiphdfihb', 'panthapath', 'ongoing'),
(3, 'mirpur', 'yoyo02', '2019-07-08', 'bskjvhlhvgbsbgjb', 'mirpur', 'ongoing');

-- --------------------------------------------------------

--
-- Table structure for table `ownerpost`
--

CREATE TABLE `ownerpost` (
  `id` int(100) NOT NULL,
  `username` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `restaurantname` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `restaurantd` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `vote` int(100) DEFAULT NULL,
  `notification` int(100) DEFAULT NULL,
  `reqid` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `ownerpost`
--

INSERT INTO `ownerpost` (`id`, `username`, `restaurantname`, `restaurantd`, `vote`, `notification`, `reqid`) VALUES
(3, 'jaebum', 'sao26', 'dddyfuyhcvhjvcjgc', 3, NULL, NULL),
(4, 'yoyobro', '3food', 'bjbnbnbnbn', 3, NULL, NULL),
(5, 'maisha0', 'takeout', 'jdnbjnnn', 3, NULL, NULL),
(7, 'saima0', 'AHGVGH', 'CGCGC', 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `phoneno` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `area` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `usertype` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `u_img` varchar(50) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstname`, `lastname`, `username`, `email`, `phoneno`, `area`, `usertype`, `u_img`) VALUES
(1, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1562404354320.png'),
(2, 'abc', 'def', 'admin0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(3, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1562404354320.png'),
(4, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1562404354320.png'),
(5, 'abc', 'def', 'abcd0', 'saimayo@gmail.com', '01765432109', 'dhaka', 'owner', 'abcd'),
(6, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1562404354320.png'),
(7, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1562404354320.png'),
(8, 'najia', 'iffat', 'najia', 'abc1@gmail.com', '01234567891', 'gulshan', 'admin', 'abcd'),
(9, 'saima', 'sharleen', 'saimasharleen0', 'saimasharleen0@gmail.com', '01827537100', 'cantonment', 'volunteer', 'photos-1562402306036.png'),
(10, 'ADMIN', 'ADMIN', 'superadmin', 'ADMIN@gmail.com', '12345678923', 'gulshan', 'superadmin', ''),
(11, 'Rehnuma', 'Tamanna', 'Maisha0', 'maisha0@gmail.com', '01827537100', 'dohs', 'owner', 'abcd'),
(12, 'Nabila', 'Bohota', 'Bohota01', 'bohota01@gmail.com', '01827537100', 'gulshan', 'owner', 'abcd'),
(13, 'jakeya', 'Sultana', 'jaky00', 'jaky00@gmail.com', '01827537100', 'mirpur', 'owner', 'abcd'),
(14, 'Nowshin', 'Nahid', 'nisa00', 'nisa00@gmail.com', '01827537100', 'dohs', 'volunteer', 'abcd'),
(15, 'Rehnuma', 'Maisha', 'Maisha10', 'maisha10@gmail.com', '01827537100', 'cantonment', 'volunteer', 'abcd'),
(16, 'Maimun', 'Ahmed', 'maimun28', 'maimun28@gmail.com', '01827537100', 'farmgate', 'volunteer', 'abcd'),
(17, 'dogo', 'kobo', 'dogo00', 'dogo00@gmail.com', '01827537100', 'Cantonme', 'volunteer', 'abcd');

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `username` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `usertype` varchar(100) COLLATE utf32_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf32_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`username`, `password`, `usertype`, `status`) VALUES
('Bohota01', 'Btsexogot7*', 'owner', 'accept'),
('dogo00', 'Btsexogot7*', 'volunteer', 'accept'),
('jaky00', 'Btsexogot7*', 'owner', 'accept'),
('maimun28', 'Btsexogot7*', 'volunteer', 'accept'),
('Maisha0', 'Btsexogot7*', 'owner', 'accept'),
('Maisha10', 'Btsexogot7*', 'volunteer', 'accept'),
('najia', 'NAJIAiffat123#', 'admin', 'accept'),
('nisa00', 'Btsexogot7*', 'volunteer', 'accept'),
('saima0', 'Btsexogot7*', 'owner', 'accept'),
('saimasharleen0', 'Btsexogot7*', 'volunteer', 'accept'),
('superadmin', 'ADministration1#', 'superadmin', 'accept');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventmanage`
--
ALTER TABLE `eventmanage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ownerpost`
--
ALTER TABLE `ownerpost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`username`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `eventmanage`
--
ALTER TABLE `eventmanage`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ownerpost`
--
ALTER TABLE `ownerpost`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
