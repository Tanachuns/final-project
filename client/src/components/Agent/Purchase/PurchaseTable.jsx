const PurchaseTable = (props) => {
    return ( <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input className="form-check-input" type="radio" name="plan_id" id="" value={1} onChange={(e)=>props.fromHandler(e)} /></th>
      <td>TIP Health</td>
      <td>Make you safe</td>
      <td>12000 THB/month</td>
    </tr>
    
    
    
  </tbody>
</table>
    </> );
}
 
export default PurchaseTable;