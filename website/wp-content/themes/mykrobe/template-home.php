<?php
/*
 * Template Name: Home
 */
?>
<?php get_header(); ?>
<?php
$description = get_field('description');
$link_page = get_field('link');
$permalink = get_permalink($link_page->ID);
?>
	<div class="promo-container">
		<div class="promo">
			<div class="promo-background"></div>
			<div class="promo-content">
				<h1 class="logo"><?php bloginfo('name');?></h1>
				<p><?php echo $description; ?></p>
				<a href="<?php echo $permalink; ?>" class="button learn">Learn more</a>
			</div>
		</div>
	</div>
<?php get_footer(); ?>