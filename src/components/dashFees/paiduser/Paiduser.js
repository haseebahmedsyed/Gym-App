import React, { useContext, useEffect } from 'react'
import './paiduser.css'
import feesContext from '../../../context/contextFees/feescontext'
import tablerow from '../tablerow';

function Paiduser(props) {

    const context = useContext(feesContext);
    const { paidUsers, getPaidUsers } = context;

    useEffect(() => {
        props.progress(50);
        getPaidUsers();
        props.progress(75);
        props.progress(100);
    }, [])


    return (
        <>
        <h1 style={{marginBottom:'47px',marginTop:'25px'}}>Paid Members</h1>

        <table className='table'>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package</th>
                    <th>Fee Status</th>
                    <th>Fee Amount</th>
                    <th>Fee Paid At</th>
                    {/* <th></th> */}

                </tr>
            </thead>
            <tbody >
                {
                    paidUsers.map((user) => {
                        return <tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Mobile}</td>
                            <td>{user.Package}</td>
                            <td>{user.Status}</td>
                            <td>{user.Amount}</td>
                            <td>{user.Date.slice(0,10)}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Paiduser
