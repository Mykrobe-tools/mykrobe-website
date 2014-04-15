<?php
/*
 * Template Name: Partners
 */
?>
<?php get_header(); ?>
	<div class="partners container">
		<div class="row">
			<h1><?php the_title(); ?></h1>
		</div>
<?php
if( get_field('partners') ) {
	$counter = 0;
	$row_open = false;
	while( has_sub_field('partners') ) {
		$image_id = get_sub_field('image');
		$body = get_sub_field('body');

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
			<div class="fourcol<?php if ( 2 == $counter % 3) { echo ' last'; } ?>">
				<img class="logo" src="<?php echo $url ?>" />
				<?php echo $body; ?>
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