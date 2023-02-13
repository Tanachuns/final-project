const PurchaseTable = (props) => {
    return ( <>
    <table class="table">
        <tbody>
            <h3>Customer Details</h3>
            <tr >
                <th colspan="2">Title</th>
                <td>{props.data.title}</td>
            </tr>
             <tr >
                <th colspan="2">Firstname</th>
                <td>{props.data.firstname}</td>
            </tr>
             <tr >
                <th colspan="2">Lastname</th>
                <td>{props.data.lastname}</td>
            </tr>
             <tr >
                <th colspan="2">Citizen ID</th>
                <td>{props.data.citizenId}</td>
            </tr>
             <tr >
                <th colspan="2">Email</th>
                <td>{props.data.email}</td>
            </tr>
            <tr >
                <th colspan="2">Phone Number</th>
                <td>{props.data.phone_number}</td>
            </tr>
            <br />
            <h3>Address</h3>
            <tr >
                <th colspan="2">House Number</th>
                <td>{props.data.address_houseNumber}</td>
            </tr>
            <tr >
                <th colspan="2">Moo</th>
                <td>{props.data.address_moo}</td>
            </tr>
            <tr >
                <th colspan="2">Building/Village</th>
                <td>{props.data.address_village}</td>
            </tr>
            <tr >
                <th colspan="2">Soi</th>
                <td>{props.data.address_soi}</td>
            </tr>
            <tr >
                <th colspan="2">Road</th>
                <td>{props.data.address_road}</td>
            </tr>
            <tr >
                <th colspan="2">Amphur</th>
                <td>{props.data.address_amphur}</td>
            </tr>
            <tr >
                <th colspan="2">Tumbon</th>
                <td>{props.data.address_tumbon}</td>
            </tr>
            <tr >
                <th colspan="2">Province</th>
                <td>{props.data.address_province}</td>
            </tr>
            <tr >
                <th colspan="2">Zipcode</th>
                <td>{props.data.address_zipcode}</td>
            </tr>
        </tbody>
    </table>
    </> );
}
 
export default PurchaseTable;