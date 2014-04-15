<?php get_header(); ?>
	<div class="blog container">
		<div class="row dotted-rule-top">
			<div class="eightcol">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
					<header>
						<h2><?php the_title(); ?></h2>
						<ul>
							<li><?php echo get_the_date(); ?></li>
							<?php comments_popup_link( '<li>Leave a comment</li>', '<li>One comment</li>', '<li>% comments</li>','', '' ); ?>
							<?php
// get the category IDs assigned to post
$categories = wp_get_post_categories( $post->ID, array( 'fields' => 'ids' ) );

// remove 'Uncategorized'
$categories = array_diff($categories, array('1'));

if ( $categories ) {
	$cat_ids = implode( ',' , $categories );
	$cats = wp_list_categories( 'title_li=&style=none&echo=0&include=' . $cat_ids.'&exclude=1' );

	$temp = explode( '<br />', $cats );

	// drop the final empty one
	array_pop( $temp );

	// re-join
	$cats = implode( '</li><li>', $temp );

	echo  '<li>'.$cats.'</li>';
}
?>

						</ul>
					</header>
					<?php the_content(); ?>
					<?php edit_post_link('Edit this entry'); ?>
					<footer>
						<nav>
							<ul class="articles">
								<li><?php next_post_link( '%link', 'Next: %title' ); ?></li>
								<!-- <li><?php previous_post_link( '%link', '&larr; %title ' ); ?></li> -->
							</ul>
						</nav>
					</footer>
					
				</article>


				<?php comments_template(); ?>
	<?php endwhile; endif; ?>
			</div>
			<div class="fourcol last">
<?php get_sidebar(); ?>
			</div>
		</div>
	</div>
<?php get_footer(); ?>