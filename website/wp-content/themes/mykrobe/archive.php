<?php get_header(); ?>
	<div class="blog-article-list blog container">
		<div class="row dotted-rule-top">
			<div class="eightcol">
		<?php if ( have_posts() ) : ?>
			<header class="archive-header">
				<h1 class="archive-title"><?php
					if ( is_day() ) :
						echo get_the_date();
					elseif ( is_month() ) :
						echo get_the_date( 'F Y' );
					elseif ( is_year() ) :
						echo get_the_date( 'Y' );
					else :
						echo 'Archives';
					endif;
				?></h1>
			</header><!-- .archive-header -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				/* Include the post format-specific template for the content. If you want to
				 * this in a child theme then include a file called called content-___.php
				 * (where ___ is the post format) and that will be used instead.
				 */
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
