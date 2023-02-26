<!DOCTYPE html>
<html lang="en">

<head>
    <title>Insurance</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="{{ public_path() . '/bootstrap.min.css' }}">
    <script src="{{ public_path() . 'jquery.min.js' }}"></script>
    <script src="{{ public_path() . 'bootstrap.min.js' }}"></script>
</head>

<body>
    {{-- <div class="container"> --}}
    {{-- <div style="margin:auto"> --}}
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th,
        td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
            color: #333;
        }

        tr:hover {
            background-color: #f5f5f5;
        }
    </style>

    <h1>Insurance</h1>
    </div>
    <div>
        <h3>Customer Details</h3>
        <table>
            <tbody>
                <tr>
                    <th>Title</th>
                    <td>{{ $data->title }}</td>
                </tr>
                <tr>
                    <th>Firstname</th>
                    <td>{{ $data->firstname }}</td>
                </tr>
                <tr>
                    <th>Lastname</th>
                    <td>{{ $data->lastname }}</td>
                </tr>
                <tr>
                    <th>Citizen ID</th>
                    <td>{{ $data->citizen_id }}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{ $data->email }}</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <td>{{ $data->phone_number }}</td>
                </tr>
                <br />
            </tbody>

            @if ($data->beneficiary_title)
                <h3>Beneficiary Details</h3>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>{{ $data->beneficiary_title }}</td>
                    </tr>
                    <tr>
                        <th>Firstname</th>
                        <td>{{ $data->beneficiary_firstname }}</td>
                    </tr>
                    <tr>
                        <th>Lastname</th>
                        <td>{{ $data->beneficiary_lastname }}</td>
                    </tr>
                    <tr>
                        <th>Relation</th>
                        <td>{{ $data->beneficiary_relation }}</td>
                    </tr>
                    <br />
                </tbody>
            @endif

            <h3>Address</h3>
            <tbody>
                <tr>
                    <th>House Number</th>
                    <td>{{ $data->address_house_number }}</td>
                </tr>
                <tr>
                    <th>Moo</th>
                    <td>{{ $data->address_moo }}</td>
                </tr>
                <tr>
                    <th>Building/Village</th>
                    <td>{{ $data->address_village }}</td>
                </tr>
                <tr>
                    <th>Soi</th>
                    <td>{{ $data->address_soi }}</td>
                </tr>
                <tr>
                    <th>Road</th>
                    <td>{{ $data->address_road }}</td>
                </tr>
                <tr>
                    <th>Amphur</th>
                    <td>{{ $data->address_amphur }}</td>
                </tr>
                <tr>
                    <th>Tumbon</th>
                    <td>{{ $data->address_tumbon }}</td>
                </tr>
                <tr>
                    <th>Province</th>
                    <td>{{ $data->address_province }}</td>
                </tr>
                <tr>
                    <th>Zipcode</th>
                    <td>{{ $data->address_zipcode }}</td>
                </tr>
                <br />
            </tbody>
            <h3>Plan</h3>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{{ $data->plan->name }}</td>
                </tr>
                <tr>
                    <th>Desc</th>
                    <td>{{ $data->plan->desc }}</td>
                </tr>
                <tr>
                    <th>Coverage</th>
                    <td>{{ $data->plan->coverage }}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{{ $data->plan->price, ' THB/month' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>

</body>

</html>
