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

CREATE TABLE `analytic_events` (
    `id` int(11) NOT NULL,
    `event_name` varchar(60) NOT NULL,
    `event_value` varchar(60) NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `analytic_events`
ADD PRIMARY KEY (`id`);

ALTER TABLE `analytic_events`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

INSERT INTO `analytic_events` VALUES 
(1,'AppStart',NULL),
(2,'AppIdle',NULL),
(3,'YourFloorUpload',NULL),
(4,'YourFloorAccessed',NULL),
(5,'YourFloorSkipped',NULL),
(6,'CustomerEmail',NULL),
(7,'StoreEmail',NULL),
(8,'VideoViewed',NULL),
(9,'RoomVisited',NULL),
(10,'CategoryVisited',NULL),
(11,'CampaignSelected',NULL),
(12,'PaintAccessed',NULL),
(13,'FeaturesAccessed',NULL),
(14,'FloorCalculatorAccessed',NULL);


-- For now, just a basic table to talk to
-- CREATE TABLE `analytics` (
--     `id` varchar(80) NOT NULL,
--     `device` varchar(50) NOT NULL,
--     `store_id` int(11) NOT NULL,
--     `event` int(11) NOT NULL,
--     `category` varchar(50) NULL,
--     `range` varchar(50) NULL,
--     `unique_value` varchar(50) NOT NULL,
--     `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ALTER TABLE `analytics`
-- ADD PRIMARY KEY (`id`);

-- ALTER TABLE `analytics`
-- MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

-- INSERT INTO `analytics` VALUES 
-- (1,'CC02_SEPT_15',1,9,NULL,NULL,'Kitchen 1','2018-07-20 12:13:27'),
-- (2,'CC02_SEPT_15',1,9,NULL,NULL,'Bedroom 1','2018-07-20 12:13:29');

CREATE TABLE `analytics` (
    `id` varchar(80) NOT NULL,
    `device` varchar(50) NOT NULL,
    `store_id` int(11) NOT NULL,
    `event` JSON NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `analytics`
ADD PRIMARY KEY (`id`);

ALTER TABLE `analytics`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

INSERT INTO `analytics` VALUES 
(1,'CC02_SEPT_15',1,'{
      "event": "Room Clicked",
      "value": "Kitchen 1"
    }','2018-07-20 12:13:27'),
(2,'CC02_SEPT_15',1,'{
      "event": "Room Clicked",
      "value": "Bedroom 2"
    }','2018-07-20 12:13:29');
