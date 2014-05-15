<?php

// Clean up the <head>
function removeHeadLinks() {
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
}

add_action('init', 'removeHeadLinks');
remove_action('wp_head', 'wp_generator');

// ____________________________________________________________________________________________________ menus

function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

// ____________________________________________________________________________________________________ body class

//Page Slug Body Class
function add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );

/*____________________________________________________________________________________________________ helper functions
 */

// use minified on live site
function useMinified() {
	// return true;
	return !isLocalServer();
}

function isLocalServer() {
	return strstr($_SERVER['SERVER_NAME'],'.local');
}

/*____________________________________________________________________________________________________ options
 */

function my_acf_options_page_settings( $settings )
{
	$settings['title'] = 'Options';
	$settings['pages'] = array('Footer', 'SEO', 'Relationships');
	return $settings;
}

add_filter('acf/options_page/settings', 'my_acf_options_page_settings');

/*____________________________________________________________________________________________________ remove <p> tag from entries
 */

if (function_exists('remove_filter')) {
	// remove_filter('the_content', 'wpautop');
}
