CREATE database  `choices_analytics`;
USE `choices_analytics`;

CREATE TABLE `sessions` (
    `id` varchar(80) NOT NULL,
    `type` varchar(40) NOT NULL,
    `expiry` timestamp NOT NULL,
    `user_id` integer NOT NULL,
    `deactivated` tinyint NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- For now, just a basic table to talk to
CREATE TABLE `analytics` (
    `id` varchar(80) NOT NULL,
    `event` varchar(40) NOT NULL,
    `unique_value` varchar(50) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `analytics` VALUES (1,'Room Clicked','Kitchen 1','2018-07-20 12:13:27'),(2,'Room Clicked','Bedroom 1','2018-07-20 12:13:29');

UNLOCK TABLES;