<?php
/*
Template Name: Contact
*/
?>
<?php get_header(); ?>
	<div class="contact container">
		<div class="row">
			<div class="fourcol">
				<h1><?php the_title(); ?></h1>
			</div>
			<div class="fourcol">
				<?php the_field('contact', 'option'); ?>
			</div>
			<div class="fourcol last">
				<?php the_field('address', 'option'); ?>
			</div>
		</div>
		<div id="map-box">
			<?php echo get_field('map-box'); ?>
		</div>
	</div>
	<div id="map-canvas"></div>
<?php get_footer(); ?>