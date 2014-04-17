<?php
/*
 * Template Name: Product
 */
?>
<?php get_header(); ?>
	<div class="product-overview container">
		<div class="row">
			<div class="threecol">
				<h1><?php the_title(); ?></h1>
				<?php echo get_field('description'); ?>
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
		$image_id = get_sub_field('image');
		$description = get_sub_field('description');

		$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
		$url = $image_attributes[0];
		$width = $image_attributes[1];
		$height = $image_attributes[2];

		if ( 0 == $counter % 3) {
			echo '
		<div class="row">
			';
			$row_open = true;
		}
?>
			<div class="threecol<?php if ( 2 == $counter % 3) { echo ' last'; } ?>">
				<img class="logo" src="<?php echo $url ?>" />
				<?php echo $description; ?>
			</div>
<?php
		if ( $row_open && 2 == $counter % 3) {
			echo '
		</div>
			';
			$row_open = false;
		}
		$counter++;
	}
	if ( $row_open ) {
		echo '
		</div>
		';
		$row_open = false;
	}
}

?>
	</div>
<?php get_footer(); ?>