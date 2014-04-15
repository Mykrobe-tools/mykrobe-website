<?php
/*
 * Template Name: Team
 */
?>
<?php get_header(); ?>
	<div class="team container">
		<div class="row">
			<h1><?php the_title(); ?></h1>
		</div>
<?php
if( get_field('team') ) {
	$counter = 0;
	$row_open = false;
	while( has_sub_field('team') ) {
		$name = get_sub_field('name');
		$role = get_sub_field('role');
		$bio = get_sub_field('bio');
		if ( 0 == $counter % 3) {
			echo '
		<div class="row">
			';
			$row_open = true;
		}
?>
			<div class="fourcol<?php if ( 2 == $counter % 3) { echo ' last'; } ?>">
				<h2><?php echo $name; ?></h2>
				<h3><?php echo $role; ?></h3>
				<?php echo $bio; ?>
			</div>
<?php
		if ( $row_open && 2 == $counter % 3) {
			echo '
		</div>
			';
			$row_open = false;
		}
		$counter++;
	}
	if ( $row_open ) {
		echo '
		</div>
		';
		$row_open = false;
	}
}

?>
	</div>
<?php get_footer(); ?>