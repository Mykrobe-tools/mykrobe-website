
<?php get_header(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<article>
			<div class="about container ">
				<div class="row dotted-rule-top">
					<div class="fourcol">
						<h1><?php the_title(); ?></h1>
						<?php edit_post_link('Edit this page', '<p>', '</p>'); ?>
					</div>
					<div class="eightcol last">
						<?php the_content(); ?>
					</div>
				</div>
			</div>
			<div class="box container tinted">
<?php
$box_title = get_post_meta($post->ID, 'box_title', true);
// $box_text = get_post_meta($post->ID, 'box_text', true);
?>				<div class="row">
					<div class="fourcol">
						<h1><?php echo $box_title ?></h1>
					</div>
					<div class="eightcol last">
						<ol><?php
if( get_field('box_items') ) {
	while( has_sub_field('box_items') ) {
		$text = get_sub_field('text');
		echo '
							<li>'.$text.'</li>
		';
	}
}
?>
						</ol>
					</div>
				</div>
			</div>
		</article>

		<?php endwhile; endif; ?>

<?php get_footer(); ?>
