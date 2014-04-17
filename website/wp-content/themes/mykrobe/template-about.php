<?php
/*
 * Template Name: About
 */
?>
<?php get_header(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="about container">
			<div class="row">
				<div class="threecol">
					<h1><?php the_title(); ?></h1>
				</div>
				<div class="sixcol last">
					<?php the_content(); ?>
					<?php edit_post_link('Edit this page', '<p>', '</p>'); ?>
				</div>
			</div>
		</div>
	<?php endwhile; endif; ?>
<?php get_footer(); ?>
