/**

 * Definition of links to MySQL documentation.

 */



var mysql_doc_keyword = {

    /* Multi word */

    'CHARACTER SET': Array('charset'),

    'SHOW AUTHORS': Array('show-authors'),

    'SHOW BINARY LOGS': Array('show-binary-logs'),

    'SHOW BINLOG EVENTS': Array('show-binlog-events'),

    'SHOW CHARACTER SET': Array('show-character-set'),

    'SHOW COLLATION': Array('show-collation'),

    'SHOW COLUMNS': Array('show-columns'),

    'SHOW CONTRIBUTORS': Array('show-contributors'),

    'SHOW CREATE DATABASE': Array('show-create-database'),

    'SHOW CREATE EVENT': Array('show-create-event'),

    'SHOW CREATE FUNCTION': Array('show-create-function'),

    'SHOW CREATE PROCEDURE': Array('show-create-procedure'),

    'SHOW CREATE TABLE': Array('show-create-table'),

    'SHOW CREATE TRIGGER': Array('show-create-trigger'),

    'SHOW CREATE VIEW': Array('show-create-view'),

    'SHOW DATABASES': Array('show-databases'),

    'SHOW ENGINE': Array('show-engine'),

    'SHOW ENGINES': Array('show-engines'),

    'SHOW ERRORS': Array('show-errors'),

    'SHOW EVENTS': Array('show-events'),

    'SHOW FUNCTION CODE': Array('show-function-code'),

    'SHOW FUNCTION STATUS': Array('show-function-status'),

    'SHOW GRANTS': Array('show-grants'),

    'SHOW INDEX': Array('show-index'),

    'SHOW MASTER STATUS': Array('show-master-status'),

    'SHOW OPEN TABLES': Array('show-open-tables'),

    'SHOW PLUGINS': Array('show-plugins'),

    'SHOW PRIVILEGES': Array('show-privileges'),

    'SHOW PROCEDURE CODE': Array('show-procedure-code'),

    'SHOW PROCEDURE STATUS': Array('show-procedure-status'),

    'SHOW PROCESSLIST': Array('show-processlist'),

    'SHOW PROFILE': Array('show-profile'),

    'SHOW PROFILES': Array('show-profiles'),

    'SHOW RELAYLOG EVENTS': Array('show-relaylog-events'),

    'SHOW SLAVE HOSTS': Array('show-slave-hosts'),

    'SHOW SLAVE STATUS': Array('show-slave-status'),

    'SHOW STATUS': Array('show-status'),

    'SHOW TABLE STATUS': Array('show-table-status'),

    'SHOW TABLES': Array('show-tables'),

    'SHOW TRIGGERS': Array('show-triggers'),

    'SHOW VARIABLES': Array('show-variables'),

    'SHOW WARNINGS': Array('show-warnings'),

    'LOAD DATA INFILE': Array('load-data'),

    'LOAD XML': Array('load-xml'),

    'LOCK TABLES': Array('lock-tables'),

    'UNLOCK TABLES': Array('lock-tables'),

    'ALTER DATABASE': Array('alter-database'),

    'ALTER EVENT': Array('alter-event'),

    'ALTER LOGFILE GROUP': Array('alter-logfile-group'),

    'ALTER FUNCTION': Array('alter-function'),

    'ALTER PROCEDURE': Array('alter-procedure'),

    'ALTER SERVER': Array('alter-server'),

    'ALTER TABLE': Array('alter-table'),

    'ALTER TABLESPACE': Array('alter-tablespace'),

    'ALTER VIEW': Array('alter-view'),

    'CREATE DATABASE': Array('create-database'),

    'CREATE EVENT': Array('create-event'),

    'CREATE FUNCTION': Array('create-function'),

    'CREATE INDEX': Array('create-index'),

    'CREATE LOGFILE GROUP': Array('create-logfile-group'),

    'CREATE PROCEDURE': Array('create-procedure'),

    'CREATE SERVER': Array('create-server'),

    'CREATE TABLE': Array('create-table'),

    'CREATE TABLESPACE': Array('create-tablespace'),

    'CREATE TRIGGER': Array('create-trigger'),

    'CREATE VIEW': Array('create-view'),

    'DROP DATABASE': Array('drop-database'),

    'DROP EVENT': Array('drop-event'),

    'DROP FUNCTION': Array('drop-function'),

    'DROP INDEX': Array('drop-index'),

    'DROP LOGFILE GROUP': Array('drop-logfile-group'),

    'DROP PROCEDURE': Array('drop-procedure'),

    'DROP SERVER': Array('drop-server'),

    'DROP TABLE': Array('drop-table'),

    'DROP TABLESPACE': Array('drop-tablespace'),

    'DROP TRIGGER': Array('drop-trigger'),

    'DROP VIEW': Array('drop-view'),

    'RENAME TABLE': Array('rename-table'),

    'TRUNCATE TABLE': Array('truncate-table'),



    /* Statements */

    'SELECT': Array('select'),

    'SET': Array('set'),

    'EXPLAIN': Array('explain'),

    'DESCRIBE': Array('describe'),

    'DELETE': Array('delete'),

    'SHOW': Array('show'),

    'UPDATE': Array('update'),

    'INSERT': Array('insert'),

    'REPLACE': Array('replace'),

    'CALL': Array('call'),

    'DO': Array('do'),

    'HANDLER': Array('handler'),

    'COLLATE': Array('charset-collations'),



    /* Functions */

    'ABS': Array('mathematical-functions', 'function_abs'),

    'ACOS': Array('mathematical-functions', 'function_acos'),

    'ADDDATE': Array('date-and-time-functions', 'function_adddate'),

    'ADDTIME': Array('date-and-time-functions', 'function_addtime'),

    'AES_DECRYPT': Array('encryption-functions', 'function_aes_decrypt'),

    'AES_ENCRYPT': Array('encryption-functions', 'function_aes_encrypt'),

    'AND': Array('logical-operators', 'operator_and'),

    'ASCII': Array('string-functions', 'function_ascii'),

    'ASIN': Array('mathematical-functions', 'function_asin'),

    'ATAN2': Array('mathematical-functions', 'function_atan2'),

    'ATAN': Array('mathematical-functions', 'function_atan'),

    'AVG': Array('group-by-functions', 'function_avg'),

    'BENCHMARK': Array('information-functions', 'function_benchmark'),

    'BIN': Array('string-functions', 'function_bin'),

    'BINARY': Array('cast-functions', 'operator_binary'),

    'BIT_AND': Array('group-by-functions', 'function_bit_and'),

    'BIT_COUNT': Array('bit-functions', 'function_bit_count'),

    'BIT_LENGTH': Array('string-functions', 'function_bit_length'),

    'BIT_OR': Array('group-by-functions', 'function_bit_or'),

    'BIT_XOR': Array('group-by-functions', 'function_bit_xor'),

    'CASE': Array('control-flow-functions', 'operator_case'),

    'CAST': Array('cast-functions', 'function_cast'),

    'CEIL': Array('mathematical-functions', 'function_ceil'),

    'CEILING': Array('mathematical-functions', 'function_ceiling'),

    'CHAR_LENGTH': Array('string-functions', 'function_char_length'),

    'CHAR': Array('string-functions', 'function_char'),

    'CHARACTER_LENGTH': Array('string-functions', 'function_character_length'),

    'CHARSET': Array('information-functions', 'function_charset'),

    'COALESCE': Array('comparison-operators', 'function_coalesce'),

    'COERCIBILITY': Array('information-functions', 'function_coercibility'),

    'COLLATION': Array('information-functions', 'function_collation'),

    'COMPRESS': Array('encryption-functions', 'function_compress'),

    'CONCAT_WS': Array('string-functions', 'function_concat_ws'),

    'CONCAT': Array('string-functions', 'function_concat'),

    'CONNECTION_ID': Array('information-functions', 'function_connection_id'),

    'CONV': Array('mathematical-functions', 'function_conv'),

    'CONVERT_TZ': Array('date-and-time-functions', 'function_convert_tz'),

    'Convert': Array('cast-functions', 'function_convert'),

    'COS': Array('mathematical-functions', 'function_cos'),

    'COT': Array('mathematical-functions', 'function_cot'),

    'COUNT': Array('group-by-functions', 'function_count'),

    'CRC32': Array('mathematical-functions', 'function_crc32'),

    'CURDATE': Array('date-and-time-functions', 'function_curdate'),

    'CURRENT_DATE': Array('date-and-time-functions', 'function_current_date'),

    'CURRENT_TIME': Array('date-and-time-functions', 'function_current_time'),

    'CURRENT_TIMESTAMP': Array('date-and-time-functions', 'function_current_timestamp'),

    'CURRENT_USER': Array('information-functions', 'function_current_user'),

    'CURTIME': Array('date-and-time-functions', 'function_curtime'),

    'DATABASE': Array('information-functions', 'function_database'),

    'DATE_ADD': Array('date-and-time-functions', 'function_date_add'),

    'DATE_FORMAT': Array('date-and-time-functions', 'function_date_format'),

    'DATE_SUB': Array('date-and-time-functions', 'function_date_sub'),

    'DATE': Array('date-and-time-functions', 'function_date'),

    'DATEDIFF': Array('date-and-time-functions', 'function_datediff'),

    'DAY': Array('date-and-time-functions', 'function_day'),

    'DAYNAME': Array('date-and-time-functions', 'function_dayname'),

    'DAYOFMONTH': Array('date-and-time-functions', 'function_dayofmonth'),

    'DAYOFWEEK': Array('date-and-time-functions', 'function_dayofweek'),

    'DAYOFYEAR': Array('date-and-time-functions', 'function_dayofyear'),

    'DECLARE': Array('declare', 'declare'),

    'DECODE': Array('encryption-functions', 'function_decode'),

    'DEFAULT': Array('miscellaneous-functions', 'function_default'),

    'DEGREES': Array('mathematical-functions', 'function_degrees'),

    'DES_DECRYPT': Array('encryption-functions', 'function_des_decrypt'),

    'DES_ENCRYPT': Array('encryption-functions', 'function_des_encrypt'),

    'DIV': Array('arithmetic-functions', 'operator_div'),

    'ELT': Array('string-functions', 'function_elt'),

    'ENCODE': Array('encryption-functions', 'function_encode'),

    'ENCRYPT': Array('encryption-functions', 'function_encrypt'),

    'EXP': Array('mathematical-functions', 'function_exp'),

    'EXPORT_SET': Array('string-functions', 'function_export_set'),

    'EXTRACT': Array('date-and-time-functions', 'function_extract'),

    'ExtractValue': Array('xml-functions', 'function_extractvalue'),

    'FIELD': Array('string-functions', 'function_field'),

    'FIND_IN_SET': Array('string-functions', 'function_find_in_set'),

    'FLOOR': Array('mathematical-functions', 'function_floor'),

    'FORMAT': Array('string-functions', 'function_format'),

    'FOUND_ROWS': Array('information-functions', 'function_found_rows'),

    'FROM_DAYS': Array('date-and-time-functions', 'function_from_days'),

    'FROM_UNIXTIME': Array('date-and-time-functions', 'function_from_unixtime'),

    'GET_FORMAT': Array('date-and-time-functions', 'function_get_format'),

    'GET_LOCK': Array('miscellaneous-functions', 'function_get_lock'),

    'GREATEST': Array('comparison-operators', 'function_greatest'),

    'GROUP_CONCAT': Array('group-by-functions', 'function_group_concat'),

    'HEX': Array('string-functions', 'function_hex'),

    'HOUR': Array('date-and-time-functions', 'function_hour'),

    'IF': Array('control-flow-functions', 'function_if'),

    'IFNULL': Array('control-flow-functions', 'function_ifnull'),

    'IN': Array('comparison-operators', 'function_in'),

    'INET_ATON': Array('miscellaneous-functions', 'function_inet_aton'),

    'INET_NTOA': Array('miscellaneous-functions', 'function_inet_ntoa'),

    'INSTR': Array('string-functions', 'function_instr'),

    'INTERVAL': Array('comparison-operators', 'function_interval'),

    'IS_FREE_LOCK': Array('miscellaneous-functions', 'function_is_free_lock'),

    'IS_USED_LOCK': Array('miscellaneous-functions', 'function_is_used_lock'),

    'IS': Array('comparison-operators', 'operator_is'),

    'ISNULL': Array('comparison-operators', 'function_isnull'),

    'LAST_DAY': Array('date-and-time-functions', 'function_last_day'),

    'LAST_INSERT_ID': Array('information-functions', 'function_last_insert_id'),

    'LCASE': Array('string-functions', 'function_lcase'),

    'LEAST': Array('comparison-operators', 'function_least'),

    'LEFT': Array('string-functions', 'function_left'),

    'LENGTH': Array('string-functions', 'function_length'),

    'LIKE': Array('string-comparison-functions', 'operator_like'),

    'LN': Array('mathematical-functions', 'function_ln'),

    'LOAD_FILE': Array('string-functions', 'function_load_file'),

    'LOCALTIME': Array('date-and-time-functions', 'function_localtime'),

    'LOCALTIMESTAMP': Array('date-and-time-functions', 'function_localtimestamp'),

    'LOCATE': Array('string-functions', 'function_locate'),

    'LOG10': Array('mathematical-functions', 'function_log10'),

    'LOG2': Array('mathematical-functions', 'function_log2'),

    'LOG': Array('mathematical-functions', 'function_log'),

    'LOWER': Array('string-functions', 'function_lower'),

    'LPAD': Array('string-functions', 'function_lpad'),

    'LTRIM': Array('string-functions', 'function_ltrim'),

    'MAKE_SET': Array('string-functions', 'function_make_set'),

    'MAKEDATE': Array('date-and-time-functions', 'function_makedate'),

    'MAKETIME': Array('date-and-time-functions', 'function_maketime'),

    'MASTER_POS_WAIT': Array('miscellaneous-functions', 'function_master_pos_wait'),

    'MATCH': Array('fulltext-search', 'function_match'),

    'MAX': Array('group-by-functions', 'function_max'),

    'MD5': Array('encryption-functions', 'function_md5'),

    'MICROSECOND': Array('date-and-time-functions', 'function_microsecond'),

    'MID': Array('string-functions', 'function_mid'),

    'MIN': Array('group-by-functions', 'function_min'),

    'MINUTE': Array('date-and-time-functions', 'function_minute'),

    'MOD': Array('mathematical-functions', 'function_mod'),

    'MONTH': Array('date-and-time-functions', 'function_month'),

    'MONTHNAME': Array('date-and-time-functions', 'function_monthname'),

    'NAME_CONST': Array('miscellaneous-functions', 'function_name_const'),

    'NOT': Array('logical-operators', 'operator_not'),

    'NOW': Array('date-and-time-functions', 'function_now'),

    'NULLIF': Array('control-flow-functions', 'function_nullif'),

    'OCT': Array('mathematical-functions', 'function_oct'),

    'OCTET_LENGTH': Array('string-functions', 'function_octet_length'),

    'OLD_PASSWORD': Array('encryption-functions', 'function_old_password'),

    'OR': Array('logical-operators', 'operator_or'),

    'ORD': Array('string-functions', 'function_ord'),

    'PASSWORD': Array('encryption-functions', 'function_password'),

    'PERIOD_ADD': Array('date-and-time-functions', 'function_period_add'),

    'PERIOD_DIFF': Array('date-and-time-functions', 'function_period_diff'),

    'PI': Array('mathematical-functions', 'function_pi'),

    'POSITION': Array('string-functions', 'function_position'),

    'POW': Array('mathematical-functions', 'function_pow'),

    'POWER': Array('mathematical-functions', 'function_power'),

    'QUARTER': Array('date-and-time-functions', 'function_quarter'),

    'QUOTE': Array('string-functions', 'function_quote'),

    'RADIANS': Array('mathematical-functions', 'function_radians'),

    'RAND': Array('mathematical-functions', 'function_rand'),

    'REGEXP': Array('regexp', 'operator_regexp'),

    'RELEASE_LOCK': Array('miscellaneous-functions', 'function_release_lock'),

    'REPEAT': Array('string-functions', 'function_repeat'),

    'REVERSE': Array('string-functions', 'function_reverse'),

    'RIGHT': Array('string-functions', 'function_right'),

    'RLIKE': Array('regexp', 'operator_rlike'),

    'ROUND': Array('mathematical-functions', 'function_round'),

    'ROW_COUNT': Array('information-functions', 'function_row_count'),

    'RPAD': Array('string-functions', 'function_rpad'),

    'RTRIM': Array('string-functions', 'function_rtrim'),

    'SCHEMA': Array('information-functions', 'function_schema'),

    'SEC_TO_TIME': Array('date-and-time-functions', 'function_sec_to_time'),

    'SECOND': Array('date-and-time-functions', 'function_second'),

    'SESSION_USER': Array('information-functions', 'function_session_user'),

    'SHA': Array('encryption-functions', 'function_sha1'),

    'SHA1': Array('encryption-functions', 'function_sha1'),

    'SIGN': Array('mathematical-functions', 'function_sign'),

    'SIN': Array('mathematical-functions', 'function_sin'),

    'SLEEP': Array('miscellaneous-functions', 'function_sleep'),

    'SOUNDEX': Array('string-functions', 'function_soundex'),

    'SPACE': Array('string-functions', 'function_space'),

    'SQRT': Array('mathematical-functions', 'function_sqrt'),

    'STD': Array('group-by-functions', 'function_std'),

    'STDDEV_POP': Array('group-by-functions', 'function_stddev_pop'),

    'STDDEV_SAMP': Array('group-by-functions', 'function_stddev_samp'),

    'STDDEV': Array('group-by-functions', 'function_stddev'),

    'STR_TO_DATE': Array('date-and-time-functions', 'function_str_to_date'),

    'STRCMP': Array('string-comparison-functions', 'function_strcmp'),

    'SUBDATE': Array('date-and-time-functions', 'function_subdate'),

    'SUBSTR': Array('string-functions', 'function_substr'),

    'SUBSTRING_INDEX': Array('string-functions', 'function_substring_index'),

    'SUBSTRING': Array('string-functions', 'function_substring'),

    'SUBTIME': Array('date-and-time-functions', 'function_subtime'),

    'SUM': Array('group-by-functions', 'function_sum'),

    'SYSDATE': Array('date-and-time-functions', 'function_sysdate'),

    'SYSTEM_USER': Array('information-functions', 'function_system_user'),

    'TAN': Array('mathematical-functions', 'function_tan'),

    'TIME_FORMAT': Array('date-and-time-functions', 'function_time_format'),

    'TIME_TO_SEC': Array('date-and-time-functions', 'function_time_to_sec'),

    'TIME': Array('date-and-time-functions', 'function_time'),

    'TIMEDIFF': Array('date-and-time-functions', 'function_timediff'),

    'TIMESTAMP': Array('date-and-time-functions', 'function_timestamp'),

    'TIMESTAMPADD': Array('date-and-time-functions', 'function_timestampadd'),

    'TIMESTAMPDIFF': Array('date-and-time-functions', 'function_timestampdiff'),

    'TO_DAYS': Array('date-and-time-functions', 'function_to_days'),

    'TRIM': Array('string-functions', 'function_trim'),

    'TRUNCATE': Array('mathematical-functions', 'function_truncate'),

    'UCASE': Array('string-functions', 'function_ucase'),

    'UNCOMPRESS': Array('encryption-functions', 'function_uncompress'),

    'UNCOMPRESSED_LENGTH': Array('encryption-functions', 'function_uncompressed_length'),

    'UNHEX': Array('string-functions', 'function_unhex'),

    'UNIX_TIMESTAMP': Array('date-and-time-functions', 'function_unix_timestamp'),

    'UpdateXML': Array('xml-functions', 'function_updatexml'),

    'UPPER': Array('string-functions', 'function_upper'),

    'USER': Array('information-functions', 'function_user'),

    'UTC_DATE': Array('date-and-time-functions', 'function_utc_date'),

    'UTC_TIME': Array('date-and-time-functions', 'function_utc_time'),

    'UTC_TIMESTAMP': Array('date-and-time-functions', 'function_utc_timestamp'),

    'UUID_SHORT': Array('miscellaneous-functions', 'function_uuid_short'),

    'UUID': Array('miscellaneous-functions', 'function_uuid'),

    'VALUES': Array('miscellaneous-functions', 'function_values'),

    'VAR_POP': Array('group-by-functions', 'function_var_pop'),

    'VAR_SAMP': Array('group-by-functions', 'function_var_samp'),

    'VARIANCE': Array('group-by-functions', 'function_variance'),

    'VERSION': Array('information-functions', 'function_version'),

    'WEEK': Array('date-and-time-functions', 'function_week'),

    'WEEKDAY': Array('date-and-time-functions', 'function_weekday'),

    'WEEKOFYEAR': Array('date-and-time-functions', 'function_weekofyear'),

    'XOR': Array('logical-operators', 'operator_xor'),

    'YEAR': Array('date-and-time-functions', 'function_year'),

    'YEARWEEK': Array('date-and-time-functions', 'function_yearweek'),

    'SOUNDS_LIKE': Array('string-functions', 'operator_sounds-like'),

    'IS_NOT_NULL': Array('comparison-operators', 'operator_is-not-null'),

    'IS_NOT': Array('comparison-operators', 'operator_is-not'),

    'IS_NULL': Array('comparison-operators', 'operator_is-null'),

    'NOT_LIKE': Array('string-comparison-functions', 'operator_not-like'),

    'NOT_REGEXP': Array('regexp', 'operator_not-regexp'),

    'COUNT_DISTINCT': Array('group-by-functions', 'function_count-distinct'),

    'NOT_IN': Array('comparison-operators', 'function_not-in')

};



var mysql_doc_builtin = {

    'TINYINT': Array('numeric-types'),

    'SMALLINT': Array('numeric-types'),

    'MEDIUMINT': Array('numeric-types'),

    'INT': Array('numeric-types'),

    'BIGINT': Array('numeric-types'),

    'DECIMAL': Array('numeric-types'),

    'FLOAT': Array('numeric-types'),

    'DOUBLE': Array('numeric-types'),

    'REAL': Array('numeric-types'),

    'BIT': Array('numeric-types'),

    'BOOLEAN': Array('numeric-types'),

    'SERIAL': Array('numeric-types'),

    'DATE': Array('date-and-time-types'),

    'DATETIME': Array('date-and-time-types'),

    'TIMESTAMP': Array('date-and-time-types'),

    'TIME': Array('date-and-time-types'),

    'YEAR': Array('date-and-time-types'),

    'CHAR': Array('string-types'),

    'VARCHAR': Array('string-types'),

    'TINYTEXT': Array('string-types'),

    'TEXT': Array('string-types'),

    'MEDIUMTEXT': Array('string-types'),

    'LONGTEXT': Array('string-types'),

    'BINARY': Array('string-types'),

    'VARBINARY': Array('string-types'),

    'TINYBLOB': Array('string-types'),

    'MEDIUMBLOB': Array('string-types'),

    'BLOB': Array('string-types'),

    'LONGBLOB': Array('string-types'),

    'ENUM': Array('string-types'),

    'SET': Array('string-types')

};

