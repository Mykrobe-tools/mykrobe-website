<?php
require_once 'php/Products.php';
$products = new Products;
?>
		</div>
		<footer>
			<a name="contact" id="contact"></a>
			<div class="footer container">
				<div class="row">
					<div class="threecol">
						<h3>Products</h3>
						<?php $products->writeFooterProducts(); ?>
					</div>
					<div class="threecol">
						<h3>Newsletter</h3>
						<article>
							<?php the_field('newsletter', 'option'); ?>
							<?php the_field('newsletter-html', 'option'); ?>
						</article>
					</div>
					<div class="threecol last">
						<h3>Trials</h3>
						<article>
							<?php the_field('trials', 'option'); ?>
						</article>
						<h3>Contact</h3>
						<article>
							<?php the_field('contact', 'option'); ?>
						</article>
					</div>
				</div>
			</div>
			<div class="copyright container">
				<div class="row">
					<div class="sixcol">
						<ul class="copyright-logos">
							<li>
								<a class="logo-the-royal-society" href="http://royalsociety.org/">The Royal Society</a>
							</li>
							<li>
								<a class="logo-the-wellcome-trust" href="http://www.wellcome.ac.uk/">The Wellcome Trust</a>
							</li>
							<li>
								<a class="logo-oxford-university" href="http://www.ox.ac.uk/">Unviersity of Oxford</a>
							</li>
						</ul>
					</div>
					<div class="threecol last">
						<?php the_field('copyright', 'option'); ?>
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
	<?php if (isLocalServer()) {
		?>
		<script src="//localhost:35729/livereload.js"></script>
		<?php
	}
	?>
	</body>
</html>