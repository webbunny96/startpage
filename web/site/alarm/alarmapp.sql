-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июн 01 2020 г., 12:35
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `alarmapp`
--

-- --------------------------------------------------------

--
-- Структура таблицы `alarms`
--

CREATE TABLE IF NOT EXISTS `alarms` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` char(30) NOT NULL,
  `time` time NOT NULL,
  `weekDay` char(30) NOT NULL,
  `file` char(30) NOT NULL,
  `target` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `alarms`
--

INSERT INTO `alarms` (`id`, `name`, `time`, `weekDay`, `file`, `target`) VALUES
(1, 'Alarm 1', '08:00:00', 'пт', 'лджфвджл', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
