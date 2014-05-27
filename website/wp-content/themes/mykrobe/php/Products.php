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
				$full_title = get_sub_field('full_title');
				$title = get_sub_field('title');
				$teaser_description = get_sub_field('teaser_description');
				$description = get_sub_field('description');
				$small_print = get_sub_field('small_print');
				$small_print_attachment_url = get_sub_field('small_print_attachment');
				$small_print_attachment_title = get_sub_field('small_print_attachment_title');
				$license_agreement = get_sub_field('license_agreement');
				$download_windows_url = get_sub_field('download_for_windows');
				$download_mac_url = get_sub_field('download_for_mac');
				$download_linux_url = get_sub_field('download_for_linux');
				$image_id = get_sub_field('logo');
				$species_object = array(
					'full_title' => $full_title,
					'title' => $title,
					'teaser_description' => $teaser_description,
					'description' => $description,
					'small_print' => $small_print,
					'small_print_attachment_url' => $small_print_attachment_url,
					'small_print_attachment_title' => $small_print_attachment_title,
					'license_agreement' => $license_agreement,
					'download_windows_url' => $download_windows_url,
					'download_mac_url' => $download_mac_url,
					'download_linux_url' => $download_linux_url,
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
				<div class="footer-product-single-species">
					<a href="'.$permalink.'#'.$anchor.'">
						<img class="footer-products-species-logo" src="'.$url.'">
					</a>
					<article>
						'.$teaser_description.'
					</article>
					<a href="'.$permalink.'#'.$anchor.'" class="button learn small">Learn more</a>
				</div>
			';
		}
	}
}

?>