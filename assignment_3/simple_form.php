<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => 'index.php',
        'Add news item' => 'news_add.php',
        'Leap Year' => 'leapyear.php',
        'Simple Form' => 'simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>


<div class="row wp-row">
    <div class="col-md-12">

        <h1>Welcome <?=($_GET['fullname']); ?>!</h1>
        <p>
            <?php
            if ($_GET['residence'] == "Amsterdam") {
                echo "You're from the capital of the Netherlands!";
            } else if ($_GET['residence'] != "") {
                echo 'You\'re from '.$_GET['residence'].'!';
            }
            ?>
        </p>

        <form action="simple_form.php" method="GET">
            <div class="row">
                <div class="col">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name"
                    name="fullname">
                </div>
                <div class="col">
                    <label for="place">Place</label>
                    <input type="text" class="form-control" id="place" placeholder="Enter your place of residence"
                    name="residence">
                </div>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary" id="send">Submit</button>
        </form>
    </div>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>