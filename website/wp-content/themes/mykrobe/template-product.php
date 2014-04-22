<?php
/*
 * Template Name: Product
 */
?>
<?php get_header(); ?>
<?php
require_once 'php/Products.php';
$products = new Products;

$image_id = get_field('screenshot');
$description = get_field('description');
$image_attributes = wp_get_attachment_image_src($image_id, 'full');
$url = $image_attributes[0];
$width = $image_attributes[1];
$height = $image_attributes[2];

$all_species = $products->getProductSpecies($post);

$first_species = reset($all_species);
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
				<a href="#download-license-agreement-<?php echo $first_species['anchor']; ?>" rel="modal:open" class="button download">Download</a>
			</div>
			<div class="sixcol last product-overview-screenshots">
				<img src="<?php echo $url; ?>">
			</div>
		</div>
	</div>
	<div class="product-species container">
<?php


if ( count($all_species) > 1 ) {
	// draw tabs here
	echo '<!-- Tabs in here -->';
}

foreach($all_species as $species) {
	$full_title = $species['full_title'];
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
	$license_agreement = $species['license_agreement'];
	$download_windows_url = $species['download_windows_url'];
	$download_mac_url = $species['download_mac_url'];
	$download_linux_url = $species['download_linux_url'];

	$user_agent = getenv("HTTP_USER_AGENT");

	$os = "Windows";
	if (strpos($user_agent, "Linux") !== FALSE) {
		$os = "Linux";
	}
	else if(strpos($user_agent, "Mac") !== FALSE) {
		$os = "Mac";
	}
	echo '
		<div id="download-license-agreement-'.$anchor.'" style="display:none;" class="download-license-agreement container">
			<div class="row">
				<div class="onecol"></div>
				<div class="sevencol download-license-agreement-content">
					<h3>'.$full_title.' License Agreement</h3>
					<article>
						'.$license_agreement.'
					</article>
					<h3>Download</h3>
					<article>
						<label><input type="checkbox" /> I have read, understood, and agree to the License Agreement</label>
					</article>
					<ul class="download-buttons">
	';
	// TODO: refactor this
	if ( "Windows" == $os ) {
		echo '
						<li><a href="'.$download_windows_url.'" class="button download">Download for Windows</a></li>
						<li><a href="'.$download_mac_url.'" class="button download secondary">Download for Mac</a></li>
						<li><a href="'.$download_linux_url.'" class="button download secondary">Download for Linux</a></li>		
		';	
	}
	else if ( "Mac" == $os ) {
		echo '
						<li><a href="'.$download_mac_url.'" class="button download">Download for Mac</a></li>
						<li><a href="'.$download_windows_url.'" class="button download secondary">Download for Windows</a></li>
						<li><a href="'.$download_linux_url.'" class="button download secondary">Download for Linux</a></li>		
		';	
	}
	else if ( "Linux" == $os ) {
		echo '
						<li><a href="'.$download_linux_url.'" class="button download">Download for Linux</a></li>		
						<li><a href="'.$download_windows_url.'" class="button download secondary">Download for Windows</a></li>
						<li><a href="'.$download_mac_url.'" class="button download secondary">Download for Mac</a></li>
		';	
	}
	echo '
					</ul>
				</div>
				<div class="onecol"></div>
			</div>
		</div>
		<div class="product-single-species row">
			<a name="'.$anchor.'" id="'.$anchor.'"></a>
			<div class="sixcol product-single-species-overview">
				<img class="product-single-species-overview-logo" src="'.$url.'">
				<article>
					'.$description.'
				</article>
				<a href="#download-license-agreement-'.$anchor.'" rel="modal:open" class="button download">Download</a>
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