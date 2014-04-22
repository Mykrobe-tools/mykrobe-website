<?php
/*
 * Template Name: Product
 */
?>
<?php get_header(); ?>
<?php
require_once 'php/Products.php';
$products = new Products;

$image_id = get_field('image');
$description = get_field('description');
$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
$url = $image_attributes[0];
$width = $image_attributes[1];
$height = $image_attributes[2];

?>
	<div id="download-license-agreement" style="display:none;">
		<p>Thanks for clicking.  That felt good.  <a href="#" rel="modal:close">Close</a> or press ESC</p>
	</div>
	<div class="product-overview container">
		<div class="row">
			<div class="threecol">
				<header>
					<h1><?php the_title(); ?></h1>
				</header>
				<article>
					<?php echo $description; ?>
				</article>
				<a href="#download-license-agreement" rel="modal:open" class="button download">Download</a>
			</div>
			<div class="sixcol last">
			</div>
		</div>
	</div>
	<div class="product-species container">
<?php

$all_species = $products->getProductSpecies($post);

if ( count($all_species) > 1 ) {
	// draw tabs here
	echo 'Tabs in here';
}

foreach($all_species as $species) {
	$title = $species['title'];
	$description = $species['description'];
	$small_print = $species['small_print'];
	$image_id = $species['image_id'];
	$permalink = $species['permalink'];
	$anchor = $species['anchor'];
	$small_print_attachment_url = $species['small_print_attachment_url'];
	$small_print_attachment_title = $species['small_print_attachment_title'];
	$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
	$url = $image_attributes[0];
	echo '
		<div class="product-single-species row">
			<a name="'.$anchor.'" id="'.$anchor.'"></a>
			<div class="sixcol product-single-species-overview">
				<img class="product-single-species-overview-logo" src="'.$url.'">
				<article>
					'.$description.'
				</article>
				<a href="#download-license-agreement" rel="modal:open" class="button download">Download</a>
			</div>
			<div class="threecol last product-single-species-small-print">
				<h3>Technical specs</h3>
				<article>
					'.$small_print.'
				</article>
	';
	if ( $small_print_attachment_url ) {
		echo '
				<a href="'.$small_print_attachment_url.'" target="_blank" class="button download secondary small">'.$small_print_attachment_title.'</a>
		';
	}
	echo '			
			</div>
		</div>
';
}
?>
	</div>
<?php get_footer(); ?>