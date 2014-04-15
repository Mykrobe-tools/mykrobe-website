<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */


/** server settings */
if (strstr($_SERVER['SERVER_NAME'],'.local')) {
	define('DB_NAME', 'mykrobe_com_wordpress');    // The name of the database
	define('DB_USER', 'mykrobe_com');     // Your MySQL username
	define('DB_PASSWORD', 'tkavxcUZmpWB4dsjp7AT'); // ...and password
	define('DB_HOST', 'localhost');    // 99% chance you won't need to change this value
}
else if (strstr($_SERVER['SERVER_NAME'],'.simonheys.com')) {
	define('DB_NAME', 'mykrobe_com_wordpress');    // The name of the database
	define('DB_USER', 'mykrobe_com');     // Your MySQL username
	define('DB_PASSWORD', 'tkavxcUZmpWB4dsjp7AT'); // ...and password
	define('DB_HOST', 'mysql.simonheys.com');    // 99% chance you won't need to change this value
}
else {
	define('DB_NAME', 'mykrobe_com_wordpress');    // The name of the database
	define('DB_USER', 'mykrobe_com');     // Your MySQL username
	define('DB_PASSWORD', 'tkavxcUZmpWB4dsjp7AT'); // ...and password
	define('DB_HOST', 'mysql.mykrobe.com');    // 99% chance you won't need to change this value
}

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'd)*ynKb9;m+h-$,+F>Y,p1.;$NN7!SWi@@7mi&&}]gvP(|!riw-?aHk%yAD-+x5;');
define('SECURE_AUTH_KEY',  'jKJ%KL@,p_Q](AeS.aE+KE^8d?R]y^?(#k,8|l)Fp?s +M`9,D|AmA/{@W$fT43G');
define('LOGGED_IN_KEY',    '|z|-Tk0{Pa,-[/j$ZT*~;lbnh!@e7t3-a#5qfv%@PBerZ[ACr#tM {imnzQ={|,8');
define('NONCE_KEY',        'rns^yZE%^4^T+*-~S(=|Ubm1RM>~j`RN$MJ{yOv><E}-/D.{%d`7TNZ+(!6[-u!v');
define('AUTH_SALT',        '?:d9kLkF4pUkta.sm=2bB+!)Xiy0.x>%y_CdbGZ}|xqRj;bs|7|q0qT$un9p$H^_');
define('SECURE_AUTH_SALT', 'Ov,Te`H<PaQ*$&b+i1 Teh8%@S< 7LM)l)nS6B}5j.x;=+g+k:il{ZzIf+k111n7');
define('LOGGED_IN_SALT',   '=09f@)FoN-xn/karZS_6Vt1y[M2?O<guo+6/d`jjU/H*73c`mN8XfV4V+C1-WV;%');
define('NONCE_SALT',       ':01K-+vy;3e43yCrE;?&BbL_z+eN#;@9m06+2].jAcCS7EPkEK($qLYoOH)28X$6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (strstr($_SERVER['SERVER_NAME'],'.local')) {
	define('WP_DEBUG', true);
}
else {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
