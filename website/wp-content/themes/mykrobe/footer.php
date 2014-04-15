		</div>
		<footer>
<?php
if ( is_page_template('template-home.php') ) {
}
else {
	echo '
			<div class="mailing-list container">
				<div class="row">
					<div class="fourcol">
						<h1>'.get_field('mailing-list-title', 'option').'</h1>
					</div>
					<div class="fourcol">
						'.get_field('mailing-list-body', 'option').'
					</div>
					<div class="fourcol last">
						'.get_field('mailing-list-html', 'option').'
						'.get_field('twitter-html', 'option').'
					</div>
				</div>
			</div>
	';
}
?>
			<div class="footer container">
				<div class="row">
					<div class="fourcol">
						<a href="<?php echo get_option('home');?>/" rel="home"><div class="ir monogram"><?php bloginfo('name');?></div></a>
					</div>
					<div class="fourcol">
						<p><?php the_field('contact', 'option'); ?></p>
					</div>
					<div class="fourcol last">
						<p><?php the_field('address', 'option'); ?></p>
					</div>
				</div>
			</div>
			<div class="copyright container">
				<div class="row">
					<div class="twelvecol last">
						<ul>
							<li><?php the_field('copyright', 'option'); ?></li>
						<?php
						$params = array(
							'theme_location' => 'footer-menu',
							'items_wrap' => '%3$s',
						    'container' => false
						);
						wp_nav_menu( $params );
						?>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<div id="menu-overlay"></div>
		<!-- <div id="overlay"></div> -->
		<?php wp_footer(); ?>
    	<script type="text/javascript">
			var HelixCentre = HelixCentre || {};
			HelixCentre.settings = {
				"templateUrl" : "<?php bloginfo('template_directory'); ?>"
			};
		</script>
		<script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
		<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="<?php bloginfo('template_directory'); ?>/js/vendor/jquery-1.7.1.min.js"><\/script>')</script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.9.0/TweenLite.min.js"></script>
		<script>window.TweenLite || document.write('<script src="<?php bloginfo('template_directory'); ?>/js/vendor/TweenLite.min.js"><\/script>')</script>
	<?php if (useMinified()) {
		?>
		<script src="<?php bloginfo('template_directory'); ?>/js/script.min.js"></script>
		<?php
	}
	else {
		?>
		<script src="<?php bloginfo('template_directory'); ?>/js/vendor/jquery.smooth-scroll.min.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/vendor/jquery.easing.1.3.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/vendor/fastclick.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/plugins.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/HelixPrefix.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/HelixMenu.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/WhatIsHelixSlide.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/WhatIsHelix.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/HelixInteractiveLine.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/HelixInteractive.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/behaviour/HelixBehaviour.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/behaviour/HelixInitialBehaviour.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/behaviour/HelixLogoBehaviour.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/helixcentre/behaviour/HelixDiagonalBehaviour.js"></script>
		<script src="<?php bloginfo('template_directory'); ?>/js/script.js"></script>
		<?php

	}
	?>
	</body>
</html>