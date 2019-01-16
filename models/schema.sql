DROP DATABASE IF EXISTS OneIngredient_db;
CREATE DATABASE OneIngredient_db;
USE OneIngredient_db;


CREATE TABLE `recipes` (
 `ingredient_id` int(11) NOT NULL AUTO_INCREMENT,
 `recipeName` VARCHAR(90) NOT NULL,
 `photo` VARCHAR(300) NOT NULL,
 `recipeNumber` VARCHAR(30) NOT NULL,
 `createdAt` DATETIME NOT NULL,
 PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE `shoppingList` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `listItem` VARCHAR(30) NOT NULL,
 `createdAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`)
);
