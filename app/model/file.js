'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const lowcodeFile = app.model.define('lowcode-file', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: STRING,
    parent_id: INTEGER,
    type: INTEGER,
    icon: STRING,
    locator: STRING,
    creator: STRING,
    schema_url: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'lowcode-file',
  });
  return lowcodeFile;
};
/**
 * 
 * 
 * 
 CREATE TABLE `lowcode-file` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(30) DEFAULT NULL COMMENT 'user name',
  `parent_id` int(11) DEFAULT NULL COMMENT 'phone',
  `type` int(11) DEFAULT NULL COMMENT 'introduction',
  `icon` varchar(30) DEFAULT NULL COMMENT 'user name',
  `locator` varchar(30) DEFAULT NULL COMMENT 'user name',
  `creator` varchar(30) DEFAULT NULL COMMENT 'user name',
  `schema_url` varchar(30) DEFAULT NULL COMMENT 'user name',
  `created_at` datetime DEFAULT NULL COMMENT 'created time',
  `updated_at` datetime DEFAULT NULL COMMENT 'updated time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='lowcode-file';
 */