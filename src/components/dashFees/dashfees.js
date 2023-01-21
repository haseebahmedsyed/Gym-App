import React, { useEffect } from 'react'
import './dashfees.css'
import { Link,Outlet} from 'react-router-dom'

function Dashfees(props) {

    useEffect(()=>{
        props.progress(50);
        setTimeout(() =>{
            props.progress(75);
            props.progress(100);
    
        },500)
    },[])

    return (
        <>
            <h1 id="fees-status-heading">FEES<span> STATUS</span></h1>
            <div class="div-of-status-btn">
            <Link className='myBtn' to='/feeinspect'>New Members</Link>
                <Link className='myBtn' to='/feeinspect/paiduser'>Paid Members</Link>
                <Link className='myBtn' to='/feeinspect/unpaiduser'>Unpaid Members</Link>
            </div>
            <div className='myOutlet'>
                <Outlet/>
            </div>
            <div style={{visibility:'hidden'}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sint voluptates. Vel nemo voluptates quas reiciendis repellendus laboriosam dignissimos error, voluptas, perspiciatis suscipit modi ipsam veritatis cupiditate ex harum quia qui molestiae. Necessitatibus odio quaerat deserunt, iste soluta blanditiis, amet commodi obcaecati, inventore perferendis recusandae. Aut fugit doloribus soluta eos, laborum unde voluptatum, maiores exercitationem aliquid, non cupiditate asperiores labore! Sint repellendus quisquam cupiditate nisi rem deleniti id consequatur eaque. Commodi quo ex nostrum tempore labore quasi quos est dolore nobis beatae culpa necessitatibus, optio mollitia tempora sunt? Mollitia iure vitae assumenda labore ad dolores unde repellendus perspiciatis natus odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fuga dicta asperiores corrupti voluptas distinctio, eligendi autem alias eius earum rerum iste nisi. Odio, illum voluptas quae inventore atque odit iusto quo dolorum iste explicabo minima quos delectus dolore? Eveniet error numquam molestias eligendi aperiam sequi repellendus voluptas ducimus? Dignissimos ratione soluta nam quod ad, assumenda est quibusdam rem illum voluptatem dolor temporibus, officiis cumque eos reprehenderit voluptatibus. Vitae quae sequi illum deserunt ex. Ullam cupiditate quos architecto numquam perferendis officia sint aliquam quaerat, voluptatum in porro, cum sunt tempore ratione repudiandae ab quia iusto neque magnam. Nam temporibus, quis debitis eligendi vero repudiandae inventore hic sunt animi? Labore obcaecati vitae facere voluptate et pariatur sunt provident officiis iste nulla eligendi vel eaque eos, id aperiam accusantium dolores dolore, expedita quae repellendus maiores? Natus delectus et maxime alias error rerum sunt distinctio odio cupiditate incidunt totam cumque eligendi mollitia architecto corporis tempora recusandae minima, voluptatibus consequatur aspernatur pariatur repellendus quo consectetur debitis? Earum beatae iure laboriosam in, hic voluptate vel mollitia, a, recusandae aperiam officiis. Eveniet, architecto ut error odio incidunt esse! Autem dignissimos fuga corporis dicta reprehenderit veritatis deleniti perferendis soluta nemo eos expedita placeat est maxime voluptatem veniam mollitia, nisi sit, quasi quas eaque facilis? Itaque consequuntur commodi voluptatibus accusamus iure ab omnis voluptatem modi eligendi, a consequatur rerum nesciunt officia accusantium, sapiente corrupti alias facere velit, cupiditate debitis aliquid adipisci doloremque quas quaerat. Accusamus dignissimos alias cum voluptatem iusto sint deserunt inventore exercitationem voluptas soluta delectus nisi ad cupiditate, quaerat eos sit quasi laboriosam id repellat voluptates ullam ipsam odio. Fugit reprehenderit laborum quos temporibus blanditiis, quibusdam esse nihil laboriosam ad maiores, iure veniam ratione consectetur culpa fuga magni quam est facilis ab! Odit suscipit asperiores ut aspernatur provident placeat architecto perspiciatis itaque, a quaerat? Facilis, voluptate?
            </div>
        </>
    )
}

export default Dashfees
