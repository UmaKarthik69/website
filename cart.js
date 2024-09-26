import { useState, useEffect } from "react";

function Cart() {
    const [products, setProducts] = useState([]);
    const [isshowmodel, setIsshowmodel] = useState(false);
    const [deleteproductname,setdeleteProductname]=useState('');
    const [totalamount,setTotalamount] = useState(0)
    useEffect(() => {
        if (localStorage.getItem('cart')) {
            const _products = JSON.parse(localStorage.getItem('cart'));
            setProducts(_products);
            setTotalamount(_products.reduce((acc,product)=>acc+product.cartprice,0))
        }
    }, []);
    const onchangequantity = (type,index) => {
        const temp = products.map((product, i) => {
            if (i === index) {
                if (type === "increment") {
                    product.quantity += 1;
                } else {
                    product.quantiy = -1;
                }
                product.cartprice = product.price*product.quantity;
                return product;
            }
            return product;
        });
        setProducts(temp);
        localStorage.setItem('cart',JSON.stringify(temp));
        setTotalamount(temp.reduce((acc,product)=>acc+product.cartprice,0))
    }
    const removeproduct = (productName) => {
        setdeleteProductname(productName);
        setIsshowmodel(true);  
    };
    const confirmdelete = () =>{
        const filteredproducts = products.filter(product => product.name !== deleteproductname);
        setProducts(filteredproducts);
        setIsshowmodel(true);
        localStorage.setItem('cart',JSON.stringify(filteredproducts));
        setTotalamount(filteredproducts.reduce((acc,product)=>acc+product.cartprice,0))

    }
    
    return (
        <div className="container">
            <div className="row">
                {products.length > 0 ? (
                    <div className="col-sm">
                        <h3 className="text-center text-success my-2">Cart</h3>
                        <div className="row">
                            <div className="col-sm text-end">
                                <h3> totalamounta:{totalamount}</h3>
                            </div>
                        </div>
                        {products.map((product, index) => (
                            <div className="row my-4 py-4 border-bottom" key={product.name}>
                                <div className="col-sm-3 px-5">
                                    <img src={product.imgSrc} className="img-fluid" alt={product.name} />
                                </div>
                                <div className="col-sm-6">
                                    <h3>{product.name}</h3>
                                    <ul>
                                        {product.specifications.map((specification) => (
                                            <li key={specification}>{specification}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <h3>{product.price}</h3>
                                    <h5>Quantity: <button className="btn btn-primary me-2" onClick={() => onchangequantity("decrement", index)}>-</button>{product.quantity}<button className="btn btn-success ms-2" onClick={() => onchangequantity("increment", index)}>+</button></h5>
                                    <button className="btn btn-danger" onClick={() => removeproduct(product.name)}><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="col-sm text-center my-5">
                        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="300px" />
                        <h3>Missing Cart items?</h3>
                        <p>Login to see the items you added previously</p>
                        <button className="btn btn-warning btn-lg">Login</button>
                    </div>
                )}
            </div>
            {
                isshowmodel &&
                <div class="modal" style={{ display: 'block', backgroundColor: 'rgb(0,0,0,0.5' }} tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered" >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">deleteproduct</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure want to delte product</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary" onClick={() => confirmdelete()}>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;