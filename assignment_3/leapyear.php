<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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
<?php
function is_leap_year($year)
{
    return ((($year % 4) == 0) && ((($year % 100) != 0) || (($year %400) == 0)));
}

$current_year = date('Y');
$years_to_leap_year = 0;

while (is_leap_year($current_year) != 1) {
    $current_year++;
    $years_to_leap_year++;
}
?>

    <div class="row wp-row">
        <div class="col-md-12">

            <h1>
                <?php
                if ($_POST['name'] != "") {
                    echo 'Welcome, '.$_POST['name'];
                } else {
                    echo 'Welcome!';
                }
                ?>
            </h1>
            <p>
                <?php
                if ($_POST['place'] == "Groningen") {
                    echo "Nice, you're living in Groningen!";
                }
                ?>
            </p>

            <p>
                <?php
                if ($_POST['age'] != "") {
                    echo 'The next 5 leap years, this will be your age: 
                    <table>
                        <tr>
                            <th>Year</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>'.(date('Y')  + $years_to_leap_year).'</td>
                            <td>'.($_POST['age'] + $years_to_leap_year).'</td>
                        </tr>
                        <tr>
                            <td>'.((date('Y')  + $years_to_leap_year) + 4).'</td>
                            <td>'.(($_POST['age'] + $years_to_leap_year) + 4).'</td>
                        </tr>
                        <tr>
                            <td>'.((date('Y')  + $years_to_leap_year) + 8).'</td>
                            <td>'.(($_POST['age'] + $years_to_leap_year) + 8).'</td>
                        </tr>
                        <tr>
                            <td>'.((date('Y')  + $years_to_leap_year) + 12).'</td>
                            <td>'.(($_POST['age'] + $years_to_leap_year) + 12).'</td>
                        </tr>
                        <tr>
                            <td>'.((date('Y')  + $years_to_leap_year) + 16).'</td>
                            <td>'.(($_POST['age'] + $years_to_leap_year) + 16).'</td>
                        </tr>
                        </table><br />';
                }
                ?>
            </p>


            <form action="leapyear.php" method="POST" id="formo">
                <div class="form-group">
                    <label for="name_field">Name</label>
                    <input type="text" class="form-control" id="name_field" name="name" placeholder="Enter your full name"
                           required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please fill in a valid name!
                    </div>
                </div>

                <div class="form-group">
                    <label for="age_field">Age</label>
                    <input type="text" class="form-control" id="age_field" placeholder="Enter your age"
                    name="age" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        This field should only contain numbers!
                    </div>
                </div>
                <div class="form-group">
                    <label for="mail_field">E-mail address</label>
                    <input type="email" class="form-control" id="mail_field" placeholder="name@example.com"
                           name="mail" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please enter a valid e-mail address!
                    </div>
                </div>
                <div class="form-group">
                    <label for="city_field">Place of residence</label>
                    <input type="text" class="form-control" id="place_field" placeholder="Enter your place of residence"
                    name="place" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please enter a valid place of residence!
                    </div>
                </div>
                <br />
                <button type="button" class="btn btn-primary" id="send">Submit</button>
            </form>
        </div>
    </div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>
