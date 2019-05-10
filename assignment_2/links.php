<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => 'index.php',
        'Links' => 'links.php',
        'News' => 'news.php',
        'Future' => 'future.php'
    )
);
include __DIR__ . '/tpl/head.php';
/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>Links to other pages</h1>
        <p> Here is a list of links to other pages:</p>
        <ul id="links_list">
            <li><a href="https://google.com" target="_blank">Google</a></li>
            <li><a href="https://www.nu.nl/" target="_blank">Nu.nl</a></li>
            <li><a href="https://www.volkskrant.nl/" target="_blank">de Volkskrant</a></li>
            <li><a href="https://www.buienradar.nl/" target="_blank">Buienradar</a></li>
        </ul>
        <button type="button" class="btn btn-info " id="display">Hide list</button>
    </div>
    <div class="col-md-12">
        <br /><h3> You can add links to other pages yourself!</h3>
        <p> Fill in the name of the page and the URL in the fields below.</p><br />
        <div class="alert alert-danger" id="form-alert" role="alert">
            Not all form fields are filled in!
        </div>
        <form>
            <div class="row">
                <div class="col">
                    <label for="linkname">Link name</label>
                    <input type="text" class="form-control" id="linkname" placeholder="Enter the name of the page">
                </div>
                <div class="col">
                    <label for="url">URL</label>
                    <input type="text" class="form-control" id="url" placeholder="Enter the URL">
                    <small id="urllHelp" class="form-text text-muted">Always start an URL with " https:// "</small>
                </div>
            </div>
            <button type="button" class="btn btn-primary" id="add">Add link</button>
        </form>
        <br />
        <button type="button" class="btn btn-danger btn-lg" id="delete">Activate delete mode</button>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';
/* Footer */
include __DIR__ . '/tpl/footer.php';
?>