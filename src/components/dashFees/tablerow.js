import React from 'react'

function tablerow(props) {
  return (
    <tr>
        <td>{props.user.Name}</td>
        <td>{props.user.Email}</td>
        <td>{props.user.Mobile}</td>
        <td>{props.user.Package}</td>
        <td>{props.user.Status}</td>
        <td>{props.user.Amount}</td>
        <td>{props.user.Date}</td>
    </tr>
  )
}

export default tablerow
