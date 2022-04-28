import React from "react"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
	return (
		<>
			<div className=" d-flex justify-content-center align-items-center shadow">
				<div className="card w-100 ">
					<div className="d-flex justify-content-between align-items-center container w-75 ">
						<div className="row">
							<div className="col-lg-6">
								<div className="mt-2">
									<div className="mt-5">
										<h4 className="main-heading mt-0">{product.brand}</h4>
										<h1 className="text-uppercase mb-0">{product.title}</h1>
										<h4 className="text-uppercase">${product.price}</h4>
										<hr />
										<h3>Descripción: </h3>
										<p>{product.description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="">
									<img src={product.picUrl} className="img-fluid mt-3" alt="" />
								</div>
								<div className="mb-4">
									<ItemCount product={product} initial={1} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail
