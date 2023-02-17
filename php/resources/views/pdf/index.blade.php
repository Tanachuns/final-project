<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{{ public_path() . '/bootstrap.min.css' }}">
    <script src="{{ public_path() . 'jquery.min.js' }}"></script>
    <script src="{{ public_path() . 'bootstrap.min.js' }}"></script>
</head>

<body>
    <style></style>
    <div class="container">
        <h2></h2>
        <p>The .table-condensed class makes a table more compact by cutting cell padding in half:</p>

        <table class="table table-condensed">

            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $data->firstname }}</td>
                    <td>{{ $data->lastname }}</td>
                    <td>{{ $data->email }}</td>
                </tr>

            </tbody>
        </table>
    </div>

</body>

</html>
