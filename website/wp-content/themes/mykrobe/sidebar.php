<div class="sidebar">

    <?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
        <div class="widget-area" role="complementary">
            <?php dynamic_sidebar( 'sidebar-1' ); ?>
        </div><!-- #secondary -->
    <?php endif; ?>

</div>