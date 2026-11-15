import data from "./data";

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Fulfillment</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ORDER</th>
            <th>CUSTOMER</th>
            <th>ITEM</th>
            <th>SHIPPED</th>
            <th>SHIPPED AT</th>
          </tr>
        </thead>
        <tbody>
          {data.fulfillments.map((f) => (
            <tr key={f._id} className={f.isShipped ? '' : 'unshipped'}>
              <td>{f._id}</td>
              <td>{f.orderId}</td>
              <td>{f.customer}</td>
              <td>{f.item}</td>
              <td>{f.isShipped ? 'Shipped' : 'Not shipped'}</td>
              <td>{f.shippedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fulfillment;
