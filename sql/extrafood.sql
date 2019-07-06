-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2019 at 10:01 PM
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
(7, 'bts'),
(8, 'yoyobts\r\n\r\n\r\n'),
(9, 'yoyo\r\n\r\n'),
(10, '\r\nabcdee\r\n\r\n\r\n\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `username` varchar(500) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `event_id`, `username`, `comment`) VALUES
(1, 2, 'abc', 'This is a test comment'),
(2, 2, 'abc', 'Test comment 2'),
(3, 2, 'abc', 'adfeafae'),
(4, 2, 'abc', 'ghcgjcvj'),
(5, 2, 'abc', 'daedaedaed'),
(6, 2, 'abc', 'daedaedaed'),
(7, 2, 'abc', 'daedaedaed'),
(8, 10, 'Sabbir', 'test comment fhdbf'),
(9, 1, 'Sabbir', 'comment comment khela'),
(10, 1, 'Maxy0', 'tui akta bolod');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `eventname` text NOT NULL,
  `eventdate` date NOT NULL,
  `eventpost` text NOT NULL,
  `location` text NOT NULL,
  `vote` int(11) DEFAULT '0',
  `status` varchar(200) DEFAULT 'ongoing'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `eventname`, `eventdate`, `eventpost`, `location`, `vote`, `status`) VALUES
(1, 'Save Food', '2019-07-30', 'Save some food, save a life.', 'Khilkhet', 6, 'ongoing'),
(2, 'Food For Serve', '2019-08-08', 'Serve food, save lives.', 'Banani', 4, 'ongoing'),
(7, 'Test Edit', '2019-07-22', 'This is a test edit', 'dhanmondi', 0, 'ongoing'),
(9, 'gdsgdfg', '2019-07-30', 'gdfg ', ' dfgfdgdfg', 1, 'ongoing'),
(10, 'tettet', '2019-07-16', 'erterter', 'erterter', 2, 'ongoing'),
(11, 'gdsgsg', '2019-07-31', 'fgdgdf', 'dfgdfgdfg', 0, 'ongoing'),
(12, 'gdsgsg', '2019-07-31', 'fgdgdf', 'dfgdfgdfg', 1, 'ongoing'),
(13, 'eargre', '2019-07-16', 'ergeg', 'gergerg gerge', 1, 'ongoing'),
(14, 'sgerg', '2019-07-16', 'rgeggg', 'ggggergee', 0, 'ongoing'),
(15, 'gegre', '2019-07-21', 'regergerg', 'ergergerg', 0, 'ongoing'),
(16, 'gegre', '2019-07-21', 'regergerg', 'ergergerg', 0, 'ongoing'),
(17, 'gegre', '2019-07-21', 'regergerg', 'ergergerg', 0, 'ongoing'),
(18, 'gegre', '2019-07-21', 'regergerg', 'ergergerg', 0, 'ongoing'),
(19, 'sfdf', '2019-07-14', 'sdsfd', 'sdfdfsf', 0, 'ongoing'),
(20, 'sfdf', '2019-07-14', 'sdsfd', 'sdfdfsf', 0, 'ongoing'),
(21, 'sfdf', '2019-07-14', 'sdsfd', 'sdfdfsf', 0, 'ongoing'),
(22, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(23, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(24, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(25, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(26, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(27, 'fafe', '2019-07-23', 'effef', 'fefefef', 0, 'ongoing'),
(28, 'nothing', '2019-06-11', 'something', 'exactly nothing', 0, 'ongoing'),
(29, 'sdnndn', '2019-07-16', 'ddvbrb brb', 'errggf', 0, 'ongoing'),
(30, 'sdnndn', '2019-07-16', 'ddvbrb brb', 'errggf', 0, 'ongoing'),
(31, 'sdnndn', '2019-07-16', 'ddvbrb brb', 'errggf', 0, 'ongoing'),
(32, 'sdnndn', '2019-07-16', 'ddvbrb brb', 'errggf', 0, 'ongoing'),
(33, 'kjsdhkjg', '2019-07-10', 'skjdfnkjn', 'jnsdkgjng', 1, 'ongoing'),
(34, 'mfwbfw', '2019-07-09', 'kjfdhwif', 'qoijdo', 1, 'ongoing'),
(35, 'mfwbfw', '2019-07-09', 'kjfdhwif', 'qoijdo', 0, 'closed'),
(38, 'alu', '0000-00-00', 'dv', 'efef', NULL, 'closed');

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
  `reqid` int(100) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

--
-- Dumping data for table `ownerpost`
--

INSERT INTO `ownerpost` (`id`, `username`, `restaurantname`, `restaurantd`, `vote`, `notification`, `reqid`) VALUES
(5, 'maisha0', 'takeout', 'jdnbjnnn', 3, NULL, 2),
(7, 'saima0', 'AHGVGH', 'CGCGC', 0, 1, 1),
(8, 'saima0', 'fdbdbbbf', 'dsfdbgbgfb', 5, NULL, 0);

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
(8, 'najia', 'iffat', 'najia', 'abc1@gmail.com', '01234567891', 'gulshan', 'admin', 'photos-1562433993734.png'),
(9, 'saima', 'sharleen', 'saimasharleen0', 'saimasharleen0@gmail.com', '01827537100', 'cantonment', 'volunteer', 'photos-1562441202651.png'),
(10, 'ADMIN', 'ADMIN', 'superadmin', 'ADMIN@gmail.com', '12345678923', 'gulshan', 'superadmin', 'photos-1562435117847.png'),
(11, 'Rehnuma', 'Tamanna', 'Maisha0', 'maisha0@gmail.com', '01827537100', 'dohs', 'owner', 'abcd'),
(12, 'Nabila', 'Bohota', 'Bohota01', 'bohota01@gmail.com', '01827537100', 'gulshan', 'owner', 'abcd'),
(13, 'jakeya', 'Sultana', 'jaky00', 'jaky00@gmail.com', '01827537100', 'mirpur', 'owner', 'abcd'),
(14, 'Nowshin', 'Nahid', 'nisa00', 'nisa00@gmail.com', '01827537100', 'dohs', 'volunteer', 'abcd'),
(15, 'Rehnuma', 'Maisha', 'Maisha10', 'maisha10@gmail.com', '01827537100', 'cantonment', 'volunteer', 'abcd'),
(16, 'Maimun', 'Ahmed', 'maimun28', 'maimun28@gmail.com', '01827537100', 'farmgate', 'volunteer', 'abcd'),
(17, 'dogo', 'kobo', 'dogo00', 'dogo00@gmail.com', '01827537100', 'Cantonme', 'volunteer', 'abcd'),
(18, 'Mohon', 'Pritom', 'Mohon', 'mohon@gmail.com', '01676307764', 'Nikunja', 'eventmanager', 'abcd'),
(19, 'Maxy', 'Lord', 'Maxy0', 'maxy@gmail.com', '01521103265', 'dhaka', 'generaluser', 'abcd');

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
('Maxy0', 'Btsexogot7*', 'generaluser', 'accept'),
('Mohon', 'Mohon123', 'eventmanager', 'accept'),
('najia', 'NAJIAiffat123#', 'admin', 'accept'),
('nisa00', 'Btsexogot7*', 'volunteer', 'accept'),
('saima0', 'Btsexogot7*', 'owner', 'accept'),
('saimasharleen0', 'Btsexogot7*', 'volunteer', 'accept'),
('superadmin', 'Btsexogot7*', 'superadmin', 'accept');

-- --------------------------------------------------------

--
-- Table structure for table `vote`
--

CREATE TABLE `vote` (
  `id` int(11) NOT NULL,
  `event_id` int(33) NOT NULL,
  `username` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vote`
--

INSERT INTO `vote` (`id`, `event_id`, `username`) VALUES
(13, 2, 'Sabbir'),
(14, 1, 'Sabbir'),
(15, 34, 'Maxy0'),
(16, 1, 'Maxy0'),
(17, 33, 'Maxy0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
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
-- Indexes for table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `ownerpost`
--
ALTER TABLE `ownerpost`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `vote`
--
ALTER TABLE `vote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
