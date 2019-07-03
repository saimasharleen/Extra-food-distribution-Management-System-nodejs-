-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2019 at 05:26 PM
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
(1, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'photos-1561985623368.PNG'),
(2, 'abc', 'def', 'admin0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(3, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(4, 'abc', 'def', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(5, 'abc', 'def', 'abcd0', 'saimayo@gmail.com', '01765432109', 'dhaka', 'owner', 'abcd'),
(6, 'saima', 'sharleen', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(7, 'saima', 'sharleen', 'saima0', 'saimasharleen0@gmail.com', '01827537100', 'dhaka', 'owner', 'abcd'),
(8, 'najia', 'iffat', 'najia', 'abc1@gmail.com', '01234567891', 'gulshan', 'admin', 'abcd'),
(9, 'saima', 'sharleen', 'saimasharleen0', 'saimasharleen0@gmail.com', '01827537100', 'cantonment', 'volunteer', 'photos-1562162337011.jpg'),
(10, 'ADMIN', 'ADMIN', 'superadmin', 'ADMIN@gmail.com', '12345678923', 'gulshan', 'superadmin', '');

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
('najia', 'NAJIAiffat123#', 'admin', 'accept'),
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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
