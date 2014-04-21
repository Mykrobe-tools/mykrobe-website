<?php
/*
Template Name: Redirect To First Child
*/
$args = array(
    'post_parent' 	=> $post->ID,
    'post_type'   	=> 'page',
    'orderby' 		=> 'menu_order',
	'order' 		=> 'asc',
	'numberposts' 	=> '0'
);
$pages = get_children($args);
$page = reset($pages);
wp_redirect(get_permalink($page->ID));
?>