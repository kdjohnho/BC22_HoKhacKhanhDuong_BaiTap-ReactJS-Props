import React from "react";

export default function ProductCart(props) {
	const { cart } = props;
	return (
		<div className="modal" id="cartModal">
			<div className="modal-dialog modal-lg">
				<div className="modal-content rounded-0">
					{/* Modal Header */}
					<div className="modal-header">
						<h4 className="modal-title">
							<i className="fa fa-shopping-cart"></i>
							<span className="ml-2">CART</span>
						</h4>
						<button type="button" className="close" data-dismiss="modal">
							×
						</button>
					</div>
					{/* Modal body */}
					<div className="modal-body">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Image</th>
									<th>Amount</th>
									<th>Unit price</th>
									<th>Total price</th>
								</tr>
							</thead>

							<tbody>
								{cart.map((item) => {
									return (
										<tr key={item.id}>
											<td>{item.name}</td>
											<td>
												<img
													src={item.image}
													alt={item.alias}
													width="70px"
													height="70px"
												/>
											</td>
											<td>{item.amount}</td>
											<td>{item.price}$</td>
											<td>{item.price * item.amount}$</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					{/* Modal footer */}
					<div className="modal-footer">
						<button className="btn btn-dark rounded-0 mr-auto">
							<span className="mr-2">proceed to payment</span>
							<i className="fa fa-coins"></i>
						</button>
						<button
							type="button"
							className="btn btn-dark rounded-0"
							data-dismiss="modal"
						>
							close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
