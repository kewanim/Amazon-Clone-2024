import React, { useContext } from 'react'
import classes from './Cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/Data Provider/DataProvide'
import ProductCard from '../../Components/Products/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'

function Cart() {
    const [{ basket, user}, disptach] = useContext(DataContext);
    const total = basket.reduce((amount,item) =>{
        return item.price + amount
    },0)
    return (
        <LayOut>
            <section className={classes.container} >
                <div className={classes.cart__container}>
                    <h2>Hello<br/></h2>
                    <h3>Your shopping basket <br/></h3>
                    <hr />
                    {
                        basket?.length==0?(<p><br/>No items in you cart</p>):(
                            basket?.map((item,i)=>{
                                return <ProductCard
                                key={i}
                                    product={item}
                                    renderDesc={true}
                                    renderAdd={false}
                                    flex={true}
                                />
                            })
                        )
                    }
                </div>
                
                    {basket?.length !==0&&(
                        <div className={classes.subtotal}>
                            <div>
                                <p>Subtotal ({basket?.length} items)</p>
                                <CurrencyFormat amount={total}/>
                            </div>
                            <span>
                                <input type="checkbox" />
                                <small>This order contains a gift </small>
                            </span>
                            <Link to="/payments"> Continue to checkout</Link>
                        </div>
                    )}
                
            </section>
        </LayOut>
    )
}

export default Cart