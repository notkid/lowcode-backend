'use strict';

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    password: STRING,
    gender: BOOLEAN,
    phone: STRING,
    introduction: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  return User;
};
/**
 * 
 * 
 * 
 CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT 'user name',
  `password` varchar(30) DEFAULT NULL COMMENT 'password',
  `gender` tinyint(11) DEFAULT NULL COMMENT 'user age',
  `phone` int(11) DEFAULT NULL COMMENT 'phone',
  `introduction` int(11) DEFAULT NULL COMMENT 'introduction',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='user';
 */