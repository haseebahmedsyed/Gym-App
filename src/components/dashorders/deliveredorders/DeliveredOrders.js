import React, { useContext, useEffect } from 'react'
import './DeliveredOrders.css'
import feesContext from '../../../context/contextFees/feescontext'

function DeliveredOrders(props) {

    const context = useContext(feesContext);
    const {getDeliveredOrders ,DeliveredOrders} = context

    const Sum=(user)=>{
        let count = 0;
        for(let i=0 ;i<user.length ;i++){
            count+= (parseInt(user[i].ProductPrice) * parseInt(user[i].quantity))
        }

        return count;
    }



    useEffect(() => {
        props.progress(50);
        getDeliveredOrders();
        props.progress(75);
        props.progress(100);
    },[])

    return (
        <>
            <h1 style={{marginBottom:'47px',marginTop:'25px',textAlign: 'center'}}>Delivered Orders</h1>
<table className='table'>
                <thead>
                    <tr >
                        <th rowSpan='2' >Customer</th>
                        {/* <th >Email</th> */}
                        <th rowSpan='2' >Phone</th>
                        <th rowSpan='2' >Address</th>
                        <th rowSpan='2' >Del Status</th>
                        <th rowSpan='2' >Del Charges</th>
                        <th rowSpan='2' >Order Date</th>
                        <th rowSpan='2' >Payment Method</th>
                        <th style={{ textAlign: 'center' }} colSpan='3'>Items
                        </th>
                        <th rowSpan='2' >Total</th>

                    </tr>
                </thead>
                <tbody >

                    <tr >
                        <th></th>
                        {/* <th></th> */}
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>

                    {
                        DeliveredOrders.map((user) => {
                            return <>
                                <tr>
                                    <td rowSpan={user.Items.length}>{user.Name}</td>
                            <td rowSpan={user.Items.length}>{user.Phone}</td>
                            <td rowSpan={user.Items.length}>{user.Address}</td>
                            <td rowSpan={user.Items.length}>{user.Deliverystatus}</td>
                            <td rowSpan={user.Items.length}>{user.Deliverycharges}</td>
                            <td rowSpan={user.Items.length}>{user.Shoppingdate.slice(0, 10)}</td>
                            <td rowSpan={user.Items.length}>{user.Paymentmethod}</td>
                                    <td>{user.Items[0].ProductName}</td>
                                    <td>{user.Items[0].quantity}</td>
                                    <td>{user.Items[0].ProductPrice}</td>
                                    <td rowSpan={user.Items.length} >{parseInt(user.Deliverycharges) + Sum(user.Items)}</td>
                                </tr>

                                {
                                    user.Items.map((val,ind) => {
                                        if (ind!==0) {
                                            return <tr>
                                                    <td>{val.ProductName}</td>
                                                    <td>{val.quantity}</td>
                                                    <td>{val.ProductPrice}</td>
                                                </tr>

                                        }
                                    })

                                } 

                            </>
                        })
                    }
                </tbody>
            </table>

        <div style={{visibility: 'hidden'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo aliquid recusandae eius ipsam commodi distinctio! Voluptatum, est esse magni ipsa eveniet corporis qui cumque dolor optio porro nisi necessitatibus nostrum, minima explicabo dignissimos ea! Beatae iure veniam, repellendus inventore alias corrupti doloremque voluptate dolore fuga dolor, illo dolorum debitis ut placeat ipsa vero ducimus tempora rem magni quibusdam expedita obcaecati delectus vel mollitia? Officia fuga impedit facere consequatur temporibus blanditiis rem autem deleniti et quam est fugiat, alias dignissimos quibusdam corporis quis distinctio optio veritatis neque aliquam. Provident deserunt sit ratione illum sequi perferendis, exercitationem labore amet suscipit rerum animi dolores incidunt eius! Quasi nesciunt quae voluptatum obcaecati rem eius. Quam atque, illo dolores possimus autem nesciunt perferendis fugit temporibus laboriosam dignissimos error ut ad quod, vel molestiae dolorem! Reiciendis temporibus velit odit atque culpa, magni provident cumque eius labore corrupti asperiores minus consequuntur dolorem assumenda eum amet officiis maxime nobis? Blanditiis delectus repellendus unde eius odio harum quidem distinctio aut quas ea incidunt sapiente, necessitatibus culpa ex vitae similique? Culpa quae officia totam hic quo tenetur perferendis voluptatum voluptas fugiat porro exercitationem error rerum, eligendi nobis omnis earum doloremque eveniet. Architecto, ullam in. Veritatis, ipsa perspiciatis obcaecati deleniti corporis sed, odio beatae nisi unde asperiores exercitationem quas? Pariatur maiores provident quidem amet sequi assumenda! Explicabo excepturi corrupti inventore, eveniet velit incidunt quisquam architecto deserunt dolor, ut quidem voluptate, veniam doloremque vero at. Quaerat, eius ullam omnis sint, aliquam illo accusamus eligendi molestiae esse neque hic aliquid inventore, adipisci recusandae in facere autem quam quo fuga? Enim, consequatur expedita incidunt praesentium earum nihil maxime, in soluta dicta magnam laboriosam, quod est nobis? Officia quis distinctio aperiam reiciendis, accusantium quod ad fuga sunt perferendis aliquam facere, voluptatum vel eum et quam quia soluta minima possimus delectus cum, inventore sint suscipit?
        </div>

        </>
    )
}

export default DeliveredOrders
