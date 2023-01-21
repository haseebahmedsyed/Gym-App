import React, { useContext, useEffect } from 'react'
import feesContext from '../../../context/contextFees/feescontext'
import './NewMembers.css'

function NewMembers(props) {
  const context = useContext(feesContext);
  const {getNewMembers,newMembers,DeleteMembers} = context;

  useEffect(() => {
    props.progress(50);
    getNewMembers();
    props.progress(75);
    props.progress(100);
  }, [])
  return (
    <>
    <h1 style={{marginBottom:'47px',marginTop:'25px'}}>New Members</h1>

    <table className='table'>
            <thead>
                <tr>
                    <th>Member</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Gender</th>
                    <th></th>

                </tr>
            </thead>
            <tbody >
                {
                  newMembers.map((user) => {
                        return <tr>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Mobile}</td>
                            <td>{user.Package}</td>
                            <td>{user.Age}</td>
                            <td>{user.Weight}</td>
                            <td>{user.Gender}</td>
                            <td><i onClick={()=>DeleteMembers(user.MemID)} class="fa fa-trash-o" aria-hidden="true"></i></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
  )
}

export default NewMembers
