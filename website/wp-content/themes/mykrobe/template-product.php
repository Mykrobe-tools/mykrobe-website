<?php
/*
 * Template Name: Product
 */
?>
<?php get_header(); ?>
<?php
		$image_id = get_field('image');
		$description = get_field('description');
		$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
		$url = $image_attributes[0];
		$width = $image_attributes[1];
		$height = $image_attributes[2];
?>
	<div class="product-overview container">
		<div class="row">
			<div class="threecol">
				<header>
					<h1><?php the_title(); ?></h1>
				</header>
				<article>
					<?php echo $description; ?>
				</article>
				<a class="button download">Download</a>
			</div>
			<div class="sixcol last">
			</div>
		</div>
	</div>
	<div class="product-species container">
<?php
if( get_field('species') ) {
	$counter = 0;
	$row_open = false;
	while( has_sub_field('species') ) {
		$title = get_sub_field('title');
		$description = get_sub_field('description');
		$small_print = get_sub_field('small_print');
		$image_id = get_sub_field('image');
		$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
		$url = $image_attributes[0];
		$width = $image_attributes[1];
		$height = $image_attributes[2];
?>
		<div class="product-single-species row">
			<div class="sixcol product-single-species-overview">
				<?php echo $title; ?>
				<article>
					<?php echo $description; ?>
				</article>
				<a class="button download">Download</a>
			</div>
			<div class="threecol last product-single-species-small-print">
				<h3>Technical specs</h3>
				<article>
					<?php echo $small_print; ?>
				</article>
				<a class="button download secondary">Download</a>
			</div>
		</div>
<?php
	}
}
?>
	</div>
<?php get_footer(); ?>