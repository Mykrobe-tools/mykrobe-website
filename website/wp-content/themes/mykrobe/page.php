<?php get_header(); ?>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
		<article>
			<div class="default container">
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

		</article>

		<?php endwhile; endif; ?>

<?php get_footer(); ?>
