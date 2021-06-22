GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'moira' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'moira' WITH GRANT OPTION;
FLUSH PRIVILEGES;


CREATE SCHEMA `flora`;

-- ******************************************
-- * MAIN DATABASE TABLES                   *
-- ******************************************

-- Represents a product.
CREATE TABLE `flora`.`product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  `description` varchar(500) NOT NULL,
  `cost` float NOT NULL,
  'price' float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
);

-- Represents a review of a product
CREATE TABLE `flora`.`review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(500) NOT NULL,
  `review` varchar(500) NOT NULL,
  `rating` int NOT NULL,
  CONSTRAINT `product_FK` FOREIGN KEY (`product_id`) REFERENCES `flora`.`product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY (`id`)
);

-- Represents an order
CREATE TABLE `flora`.`order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL,
  `status` int NOT NULL,
  'total' float NOT NULL,
  PRIMARY KEY (`id`)
)

-- Represents a review of a product
CREATE TABLE `flora`.`sold_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  CONSTRAINT `order_FK` FOREIGN KEY (`order_id`) REFERENCES `flora`.`order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_FK` FOREIGN KEY (`product_id`) REFERENCES `flora`.`product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  PRIMARY KEY (`id`)
);
