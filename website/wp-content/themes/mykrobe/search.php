<?php get_header();?>
	<div class="blog-article-list blog container">
		<div class="row dotted-rule-top">
			<div class="eightcol">
		<?php if ( have_posts() ) : ?>
			<header class="page-header">
				<h1 class="page-title">Search results for <?php echo get_search_query(); ?></h1>
			</header>
			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
			<?php if (!is_page()) { 
				if ( $post->post_type != 'page' ) {
					get_template_part( 'content', get_post_format() );
				}
			} ?>
			<?php endwhile; ?>
		<?php else : ?>
			<article id="post-0" class="post no-results not-found">
				<header class="entry-header">
					<h1 class="entry-title">Nothing found for <?php echo get_search_query(); ?></h1>
				</header>

				<div class="entry-content">
					<p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'twentytwelve' ); ?></p>
					<p><?php get_search_form(); ?></p>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->

		<?php endif; ?>

			</div>
			<div class="fourcol last">
<?php get_sidebar(); ?>
			</div>
		</div>
	</div>

<?php get_footer(); ?>
