<?php get_header(); ?>
	<div class="blog-article-list blog container">
		<div class="row">
			<div class="eightcol">
				<h1><?php wp_title("",true); ?></h1>
<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post();
				get_template_part( 'content', get_post_format() );
			endwhile; ?>

		<?php else : ?>

			<article id="post-0" class="post no-results not-found">

			<?php if ( current_user_can( 'edit_posts' ) ) :
				// Show a different message to a logged-in user who can add posts.
			?>
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'No posts to display', 'helixcentre' ); ?></h1>
				</header>

				<div class="entry-content">
					<p><?php printf( __( 'Ready to publish your first post? <a href="%s">Get started here</a>.', 'helixcentre' ), admin_url( 'post-new.php' ) ); ?></p>
				</div><!-- .entry-content -->

			<?php else :
				// Show the default message to everyone else.
			?>
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'Nothing Found', 'helixcentre' ); ?></h1>
				</header>

				<div class="entry-content">
					<p><?php _e( 'Apologies, but no results were found. Perhaps searching will help find a related post.', 'helixcentre' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .entry-content -->
			<?php endif; // end current_user_can() check ?>

			</article><!-- #post-0 -->

		<?php endif; // end have_posts() check ?>
			</div>
			<div class="fourcol last">
<?php get_sidebar(); ?>
			</div>
		</div>
	</div>

<?php get_footer(); ?>
