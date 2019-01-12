DROP DATABASE IF EXISTS OneIngredient_db;
CREATE DATABASE OneIngredient_db;
USE OneIngredient_db;


CREATE TABLE `recipes` (
 `ingredient_id` int(11) NOT NULL AUTO_INCREMENT,
 `ingredient` VARCHAR(30) NOT NULL,
 `callNumber` VARCHAR(30) NOT NULL,
 `createdAt` DATETIME NOT NULL,
 PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE `shoppingList` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `listItem` VARCHAR(30) NOT NULL,
 `createdAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
);