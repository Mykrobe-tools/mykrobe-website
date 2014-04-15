				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<header>
						<h2><a href="<?php the_permalink(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
						<h3><?php echo get_the_date(); ?></h3>
					</header>
					<?php the_content(''); ?>
					<footer>
						<ul>
							<li><a href="<?php the_permalink(); ?>" rel="bookmark">Continue reading</a></li>
						<?php if ( comments_open() ) : ?>
							<li><?php comments_popup_link( 'Leave a comment', '1 Comment', '% Comments' ); ?></li>
						<?php endif; // comments_open() ?>
						<?php edit_post_link('Edit this post','<li>','</li>'); ?>
						</ul>
					</footer>
				</article>