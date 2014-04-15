<?php get_header(); ?>
	<div class="blog-article-list blog container">
		<div class="row dotted-rule-top">
			<div class="eightcol">
		<?php if ( have_posts() ) : ?>
			<header class="archive-header">
				<h1 class="archive-title"><?php echo single_cat_title( '', false ); ?></h1>

				<?php if ( category_description() ) : // Show an optional category description ?>
					<div class="archive-meta"><?php echo category_description(); ?></div>
				<?php endif; ?>
			</header>

			<?php
			while ( have_posts() ) : the_post();
				get_template_part( 'content', get_post_format() );
			endwhile;
			?>

		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

			</div>
			<div class="fourcol last">
<?php get_sidebar(); ?>
			</div>
		</div>
	</div>

<?php get_footer(); ?>
