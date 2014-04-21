<?php
if ( is_page_template('template-home.php') ) {
	if ( session_id() == '' ) {
		session_start();
	}
}
?>
<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" <?php language_attributes();?>> <!--<![endif]-->
	<head>
		<meta charset="<?php bloginfo('charset');?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<?php
if (is_search()) {
		?>
		<meta name="robots" content="noindex, nofollow" /><?php
}

global $page_title;
$page_title = wp_title('',false);
if ( $page_title ) {
	$page_title .= " – ";
}
else {
	$page_title = '';
}
$page_title .= get_bloginfo('name');
$page_title .= " – ";
$page_title .= get_bloginfo('description');
$page_title = trim($page_title);

// decode en dashes - php decode functions ignore this
$page_title = str_replace('&#8211;','–',$page_title);
$page_title = str_replace('&#8216;', '‘', $page_title);
$page_title = str_replace('&#8217;', '’', $page_title);

?>		<title><?php echo $page_title; ?></title>
		<meta name="title" content="<?php echo $page_title; ?>">
		<meta name="description" content="<?php the_field('description', 'option'); ?>">
		<meta name="keywords" content="<?php the_field('keywords', 'option'); ?>">
        <meta name="viewport" content="width=device-width">
		<meta name="apple-mobile-web-app-capable" content="yes" >
		<link rel="icon" type="image/png" href="<?php bloginfo('template_directory');?>/img/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?php bloginfo('template_directory');?>/img/AppIcon57.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php bloginfo('template_directory');?>/img/AppIcon57@2x.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php bloginfo('template_directory');?>/img/AppIcon72.png">
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php bloginfo('template_directory');?>/img/AppIcon72@2x.png">
		<link rel="apple-touch-icon-precomposed" sizes="60x60" href="<?php bloginfo('template_directory');?>/img/AppIcon60.png">
		<link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?php bloginfo('template_directory');?>/img/AppIcon60@2x.png">
		<link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?php bloginfo('template_directory');?>/img/AppIcon76.png">
		<link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?php bloginfo('template_directory');?>/img/AppIcon76@2x.png">
        <script src="<?php bloginfo('template_directory');?>/js/vendor/modernizr.custom.62260.js"></script>
	<?php if (useMinified()) {
		?>
      	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.min.css">
		<?php
	}
	else {
		?>
       	<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/main.css">
		<?php
	}
	?>
		<link rel="stylesheet" href="<?php bloginfo('template_directory');?>/css/font-awesome/css/font-awesome.min.css">
		<script src="<?php bloginfo('template_directory'); ?>/js/vendor/respond.min.js"></script>
		<?php wp_head();?>
	</head>
	<body <?php body_class();?>>
		<header class="top-header">
			<div class="container">
				<div class="row menu-row">
					<div class="logo-container">
						<a href="<?php echo get_option('home');?>/" rel="home"><h1 class="logo"><?php bloginfo('name');?></h1></a>
					</div>
					<div class="nav-container">
						<div class="menu-button"></div>
						<?php wp_nav_menu( array( 'Header Menu' => 'header-menu' ) ); ?>
					</div>
				</div>
			</div>
		</header>
		<div class="main">
