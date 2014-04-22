<?php

class Products {

	public function __construct() {
	}

/* __________________________________________________________________________________________ products
*/
	
	public function productsPageId() {
		$products_root_object = get_field('products_root', 'option');
		$products_page_id = $products_root_object->ID;
		return $products_page_id;
	}

	public function getAllProducts() {
		$args = array(
		    'post_parent' => $this->productsPageId(),
		    'post_type'   => 'page',
		    'orderby' => 'menu_order',
			'order' => 'asc',
			'numberposts' => '0'
		);

		return get_children($args);
	}

	public function getAllSpecies() {
		$pages = $this->getAllProducts();
		$species = array();
		foreach($pages as $page) {
			$page_species = $this->getProductSpecies($page);
			$species = array_merge($species,$page_species);
		}
		return $species;
	}

	public function getProductSpecies($page) {
		$species = array();
		if( get_field('species', $page->ID) ) {
			while( has_sub_field('species', $page->ID) ) {
				$title = get_sub_field('title');
				$teaser_description = get_sub_field('teaser_description');
				$description = get_sub_field('description');
				$small_print = get_sub_field('small_print');
				$small_print_attachment_url = get_sub_field('small_print_attachment');
				$small_print_attachment_title = get_sub_field('small_print_attachment_title');
				$image_id = get_sub_field('logo');
				$species_object = array(
					'title' => $title,
					'teaser_description' => $teaser_description,
					'description' => $description,
					'small_print' => $small_print,
					'small_print_attachment_url' => $small_print_attachment_url,
					'small_print_attachment_title' => $small_print_attachment_title,
					'image_id' => $image_id,
					'permalink' => get_permalink($page->ID),
					'anchor' => sanitize_title_with_dashes($title)
				);
				array_push($species,$species_object);
			}
		}
		return $species;
	}

	public function writeFooterProducts() {
		$all_species = $this->getAllSpecies();
		foreach($all_species as $species) {
			$image_id = $species['image_id'];
			$teaser_description = $species['teaser_description'];
			$permalink = $species['permalink'];
			$anchor = $species['anchor'];
			$image_attributes = wp_get_attachment_image_src($image_id, 'medium');
			$url = $image_attributes[0];
			echo '
				<a href="'.$permalink.'#'.$anchor.'">
					<img class="footer-products-species-logo" src="'.$url.'">
				</a>
				<article>
					'.$teaser_description.'
				</article>
				<a href="'.$permalink.'#'.$anchor.'" class="button learn small">Learn more</a>
			';
		}
	}
/*
	public function writeWorkFeature($page) {
		$link = get_permalink($page -> ID);
		$title = get_the_title($page -> ID);
		$subtitle = get_post_meta($page->ID, 'subtitle', true);
		$description = get_post_meta($page->ID, 'description', true);
		$description = apply_filters('the_content', $description);

		echo '
			<div class="feature container" data-work-id="'.$page->ID.'">
				<div class="row dotted-rule-top">
					<div class="sixcol description">
						<div class="close upper">
							<a href="#"><i class="large up"></i></a>
						</div>
						<h1>'.$title.'</h1>
						'.$description.'
					</div>
					<div class="sixcol last">
		';

		if( get_field('slideshow_images', $page->ID) ) {
			while( has_sub_field('slideshow_images', $page->ID) ) {
				$image_id = get_sub_field('image');

				$image_attributes = wp_get_attachment_image_src($image_id, 'large');
				$url = $image_attributes[0];
				$width = $image_attributes[1];
				$height = $image_attributes[2];

				echo '<img class="slideshow rounded" src="'. $url .'" />';
			}
		}
		echo '
					</div>
					<div class="close">
						<a href="#"><i class="large up"></i></a>
					</div>
				</div>

				<div class="row dotted-rule-top">
				</div>
			</div>
		';
	}
	*/
}

?>