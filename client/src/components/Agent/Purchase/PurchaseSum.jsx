const PurchaseTable = (props) => {
    console.log(props.data)
    const beneficiaryTable = (<>
    <h3>Beneficiary Details</h3>
    <table className="table">
        <tbody>
            <tr >
                <th colSpan="2">Relation</th>
                <td>{props.data.beneficiary_relation}</td>
            </tr>
            <tr >
                <th colSpan="2">Title</th>
                <td>{props.data.beneficiary_title}</td>
            </tr>
             <tr >
                <th colSpan="2">Firstname</th>
                <td>{props.data.beneficiary_firstname}</td>
            </tr>
             <tr >
                <th colSpan="2">Lastname</th>
                <td>{props.data.beneficiary_lastname}</td>
            </tr>
            <br />
            </tbody>
          </table>   
    </>)
    return ( <>
    <table className="table">
        <tbody>
            <h3>Customer Details</h3>
            <tr >
                <th colSpan="2">Title</th>
                <td>{props.data.title}</td>
            </tr>
             <tr >
                <th colSpan="2">Firstname</th>
                <td>{props.data.firstname}</td>
            </tr>
             <tr >
                <th colSpan="2">Lastname</th>
                <td>{props.data.lastname}</td>
            </tr>
             <tr >
                <th colSpan="2">Citizen ID</th>
                <td>{props.data.citizenId}</td>
            </tr>
             <tr >
                <th colSpan="2">Email</th>
                <td>{props.data.email}</td>
            </tr>
            <tr >
                <th colSpan="2">Phone Number</th>
                <td>{props.data.phone_number}</td>
            </tr>
            <br />
             </tbody>
          </table> 
            {props.data.beneficiary&&beneficiaryTable}
            <h3>Address</h3>
        <table className="table">
        <tbody>
            <tr >
                <th colSpan="2">House Number</th>
                <td>{props.data.address_houseNumber}</td>
            </tr>
            <tr >
                <th colSpan="2">Moo</th>
                <td>{props.data.address_moo}</td>
            </tr>
            <tr >
                <th colSpan="2">Building/Village</th>
                <td>{props.data.address_village}</td>
            </tr>
            <tr >
                <th colSpan="2">Soi</th>
                <td>{props.data.address_soi}</td>
            </tr>
            <tr >
                <th colSpan="2">Road</th>
                <td>{props.data.address_road}</td>
            </tr>
            <tr >
                <th colSpan="2">Amphur</th>
                <td>{props.data.address_amphur}</td>
            </tr>
            <tr >
                <th colSpan="2">Tumbon</th>
                <td>{props.data.address_tumbon}</td>
            </tr>
            <tr >
                <th colSpan="2">Province</th>
                <td>{props.data.address_province}</td>
            </tr>
            <tr >
                <th colSpan="2">Zipcode</th>
                <td>{props.data.address_zipcode}</td>
            </tr>
             </tbody>
          </table> 
          <table className="table">
        <tbody>
            <h3>Plan</h3>
            <tr >
                <th colSpan="2">Name</th>
                <td>{props.data.address_houseNumber}</td>
            </tr>
        
        </tbody>
    </table>
    </> );
}
 
export default PurchaseTable;