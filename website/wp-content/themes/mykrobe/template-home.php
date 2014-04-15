<?php
/*
 * Template Name: What is HELIX?
 */
?>
<?php get_header(); ?>
	<div class="what-is-helix container">
		<div class="row row-statement" id="step-1" data-title="">
			<div class="content-wrapper">
				<div class="twelvecol last statement">
<?php
$statement_field = get_field('statement');
if ( $statement_field ) {
	$number_of_statements = count($statement_field);
	if (!isset($_SESSION['helixcentre_statement_counter'])) {
		$_SESSION['helixcentre_statement_counter'] = 0;
	}
	else {
		$_SESSION['helixcentre_statement_counter'] = ($_SESSION['helixcentre_statement_counter'] + 1) % $number_of_statements;
	}
	// echo $_SESSION['helixcentre_statement_counter'];

	// echo $number_of_statements;

	$statement = $statement_field[$_SESSION['helixcentre_statement_counter']];
	echo $statement['statement'];
	/*

	echo '
					<ul>
	';
	while( has_sub_field('statement') ) {
		$statement = get_sub_field('statement');
		echo '
						<li>'.$statement.'</li>
		';
	}
	echo '
					</ul>
	';

	*/
}
?>
				</div>
			</div>
		</div>
<?php

if ( get_field('q-and-a') ) {
	$index = 2;

	while( has_sub_field('q-and-a') ) {
		$question = get_sub_field('question');
		$question = trim(strip_tags($question));
		$answer = get_sub_field('answer');
		echo '
		<div class="row row-q-and-a" id="step-'.$index.'" data-title="'.$question.'">
			<div class="content-wrapper">
				<div class="fourcol question">'.$question.'</div>
				<div class="eightcol last answer">'.$answer.'</div>
			</div>
		</div>
		';
		$index++;
	}
}
$question = get_field('final-question');
$question = trim(strip_tags($question));
echo '
	<div class="row row-final" id="step-'.$index.'" data-title="'.$question.'">
		<div class="content-wrapper">
			<div class="fourcol question">'.$question.'</div>
			<div class="eightcol last answer answer-last">
				'.get_field('mailing-list-body', 'option').'
				'.get_field('mailing-list-html', 'option').'
				'.get_field('twitter-html', 'option').'
			</div>
		</div>
	</div>
';
?>
	</div>
<?php get_footer(); ?>