import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import cartContext from '../../context/cartContext'
import Footer from '../Footer/Footer'
import './Cart.css'

function Cart(props) {
  let array = JSON.parse(localStorage.getItem('cartArray'))
  const [filteredArray, setfilteredArray] = useState(array)
  const context = useContext(cartContext)
  const [inputVal, setInputVal] = useState(1)
  // const [inputVal, setInputVal] = useState(array.quantity)
  const [itemId, setItemId] = useState(null)
  const [incPrice, setIncPrice] = useState(null)
  const navigate = useNavigate();


  const handleOnChange = (element, event) => {

    setInputVal(event.target.value)

  }

  const handleRefresh = (element,e) => {
    
    const obj = {}
    obj.product = element.product;
    obj.ProductName = element.ProductName;
    obj.ProductPrice = element.ProductPrice;
    obj.quantity = inputVal
    
    const newfilterArray = filteredArray
    
    const secRefArray = filteredArray.findIndex((elem) => { return elem.product.toString() === element.product.toString() })
    newfilterArray[secRefArray] = obj
    localStorage.setItem('cartArray', JSON.stringify(newfilterArray))
    setfilteredArray(newfilterArray)
    
    e.preventDefault();
    window.location.reload()
    


  }

  const handleTrashOnClick = (elem) => {
    const a = array.filter(function (prod) {
      return (prod.product !== elem.product)
    })
    setfilteredArray(a)
    localStorage.setItem('cartArray', JSON.stringify(a))

    let gettingItem = JSON.parse(localStorage.getItem("itemNo"))
    localStorage.setItem("itemNo",JSON.stringify(gettingItem-1))
    context.setMyItems(gettingItem-1)
  }

  useEffect(()=>{

  },[])


  return (
    <>
    <div  style={{paddingTop:'100px'}}>
      {(filteredArray === null || filteredArray.length == 0) ? <h1 className='text-center'>NO ITEM HAS BEEN ADDED IN THE <h1 style={{ display: 'inline', color: "#f6c501", fontSize: '43px' }}>CART</h1></h1>
        :
        <div>
          <h1 className='text-center'>YOUR <h1 style={{ display: 'inline', color: "#f6c501", fontSize: '43px' }}>CART</h1></h1>
          <table className="table overflow_control my-5">
            <thead>
              <tr className='tr'>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>SubTotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>


              {(filteredArray === null || filteredArray.length == 0) ? "No Item To Display" :
                filteredArray.map((element, i) => {
                  return <tr>
                    <td>{i + 1}</td>
                    <td className='px-5'>{element.ProductName}</td>
                    <td className='px-4'>{element.ProductPrice}</td>
                    <td><input id='myInp' onChange={(e) => { handleOnChange(element, e) }} style={{color:'red',textAlign:'center',height:'40px',width:'85px'}} placeholder={element.quantity} className='inputBox' type='number' /> <i style={{ color: 'red', cursor: 'pointer' }} onClick={(e) => handleRefresh(element,e)} class="fa fa-check" aria-hidden="true"></i>
                    </td>
                    <td className='px-4' >{element.ProductPrice * element.quantity}</td>
                    <td><i style={{ color: 'red', cursor: 'pointer' }} onClick={() => { handleTrashOnClick(element) }} className="fa fa-trash-o px-3" aria-hidden="true"></i>
                    </td>
                  </tr>
                })}


            </tbody>
          </table>
        </div>
      }
      <div className="btn3">
        
      <button  type="button" onClick={()=>{navigate('/shop')}} className={`btn1 btn-danger ${filteredArray.length===0 && 'd-none'}`}>Continue Shopping</button>
      <Link  type="button" to='/checkout' className={`btn1 btn-danger py-3 ${filteredArray.length===0 && 'd-none'}`}>Proceed To Billing</Link>
      </div>
    </div>

    <div className="container" style={{height:'100%',width:'100%',visibility:'hidden'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ab commodi modi numquam? Molestiae, enim atque nostrum cupiditate esse veritatis architecto vitae excepturi error aliquam quia alias sapiente voluptate fuga a! Earum numquam corrupti corporis quibusdam voluptatum cumque, consequatur libero rerum sed fugiat ullam, ad, eius quisquam fuga quod nostrum? Voluptatum velit a dignissimos deserunt aliquam quod placeat dolorum, illum sed odio earum et cupiditate veritatis numquam consectetur doloremque hic quo, quae dicta error provident veniam! Molestiae, laborum vero corrupti aliquid atque dolore, incidunt mollitia perferendis nobis nisi explicabo impedit quas id esse fuga deserunt? Qui nam blanditiis ea autem laboriosam dicta tempora debitis, porro consequatur ut vitae exercitationem perspiciatis fugiat veritatis modi ab illum! Unde laudantium nemo pariatur quam ab cum numquam laborum adipisci, illum dicta accusantium, magni velit. Quod, dolorem sequi qui ab temporibus culpa fugiat voluptate ut esse ratione fuga delectus praesentium corporis et. Veritatis unde dolor repellendus voluptate deleniti ut, dolorum reprehenderit perspiciatis tempora sunt placeat delectus sit iure ab itaque eveniet ratione fugit suscipit voluptatem cum! Enim fuga neque veritatis ut voluptatum maiores ea libero cupiditate corporis id placeat exercitationem architecto accusamus, natus adipisci provident aperiam illo eaque tenetur animi! Labore minus alias commodi quisquam ratione dicta ipsa eaque sequi ad, dolorem ducimus sunt facilis iste impedit perferendis modi veritatis voluptatum nulla culpa. Ex doloremque laudantium odit sequi quis, hic incidunt, cupiditate, asperiores debitis eveniet inventore amet rerum? Nulla mollitia explicabo repellat voluptatibus reprehenderit commodi quae nesciunt impedit labore totam, ab placeat fugit dolorem, blanditiis expedita dignissimos nam itaque facilis. Sunt nam quae error iure, soluta, odio, reiciendis blanditiis aperiam libero numquam inventore fugiat pariatur maxime? Eaque, doloremque error fugiat veritatis pariatur porro? Et voluptates molestiae quos libero cum, dolore harum, minima saepe incidunt sit, nemo magnam unde voluptatibus dignissimos eligendi temporibus. Et ad, quae ratione beatae veniam debitis similique libero doloribus nisi laudantium velit sapiente nam consequatur omnis ipsam quod! Tempora reprehenderit placeat quia optio eaque voluptas quibusdam excepturi dolor ipsum possimus atque nisi quisquam dicta reiciendis, labore dolores accusantium odio nobis asperiores vel ab molestias doloremque, necessitatibus blanditiis. Obcaecati veritatis rem, autem ex repudiandae optio sint dicta expedita beatae qui illum sapiente cumque fugit voluptatibus rerum, provident aut nobis. Officia hic ipsa officiis incidunt nihil magni perspiciatis eveniet aliquid! Excepturi optio molestias eum eaque accusantium possimus tenetur porro cum beatae hic quod, voluptates quidem et odit in perferendis accusamus. Voluptatibus adipisci dolores iure delectus, rerum id minima beatae esse omnis est nostrum eos laudantium natus dignissimos. Eveniet libero cum voluptates ex ratione sint veniam impedit, veritatis iusto consectetur! Unde voluptatibus accusamus, dolore asperiores deserunt tempore cupiditate error similique enim quam nobis, natus adipisci incidunt expedita nam. Magni minus laudantium natus, impedit eum pariatur quod, alias quibusdam tempore nobis enim nulla provident velit illum sunt quaerat nemo laboriosam reprehenderit at. Quos dolor odio expedita earum, numquam porro ut quis ducimus repudiandae, voluptatem sint reiciendis distinctio modi! Eum distinctio repellendus est sequi ex qui, pariatur alias quasi et eius ipsa? Ducimus eius possimus eligendi ea ab. Pariatur cum est aliquid dolore eaque reiciendis sit tempora, in, esse quas similique libero. Assumenda porro corrupti accusamus quas perferendis eligendi error. Reiciendis blanditiis unde enim id nisi. Error deserunt, illum, quidem nobis id impedit suscipit odit velit esse, a dolorem recusandae maxime consequatur vero? Quaerat, eos. Veniam nam quis, odio perferendis nisi animi dolores culpa. Veritatis quasi quae iusto, officia in id autem ratione ut blanditiis ducimus soluta dicta cupiditate nisi cumque adipisci nam numquam nostrum molestiae voluptas natus! Voluptates necessitatibus laborum deserunt fugit et qui porro inventore facere neque atque dolorum, velit illo ad in adipisci aperiam nobis beatae suscipit eius esse harum molestiae quis earum repellendus. Nihil consequuntur vel quia natus totam nemo magnam quaerat fugiat voluptatibus possimus ea, cumque modi eaque tempora, molestiae temporibus. Dolore iure atque, laborum nobis autem est consequatur corporis mollitia maxime, libero repellat. Voluptatum aliquam veritatis porro iste ipsam, atque vel quos dolores assumenda quaerat eos consectetur dolor reiciendis a tempore nihil vero suscipit pariatur doloremque. Velit provident soluta nostrum expedita ipsum adipisci quasi, qui, obcaecati, alias pariatur cumque nam repellendus molestias ab optio impedit! Iste eum eos ad nam atque repudiandae laudantium autem voluptates ab, impedit perferendis perspiciatis dolore ipsum! Dicta, minima omnis nesciunt ab aut sed culpa pariatur? Velit itaque aut earum ipsum rerum quod laboriosam adipisci odio perspiciatis molestias quis, laudantium veniam assumenda provident tempore, eveniet hic. Blanditiis sit nihil iste, praesentium debitis reiciendis ut quo cum, unde, quod obcaecati deleniti nesciunt aperiam. Quis distinctio delectus placeat impedit! Molestias nihil ea consequatur eos, eligendi deleniti, doloribus totam provident minus recusandae libero aliquam sint cumque. Quod eius expedita voluptate illo exercitationem doloremque reiciendis rerum voluptas numquam sapiente officia veritatis iste, odio aspernatur impedit totam amet obcaecati. Porro culpa vero aperiam quidem. Voluptatibus impedit ipsam eligendi. Totam molestias iste illum sequi nisi distinctio amet quae aliquam doloremque dolor obcaecati, a repellendus sit optio in architecto modi minima exercitationem culpa reprehenderit tempore aliquid. Aspernatur reiciendis laboriosam excepturi amet iusto. Dolorum voluptate in iure distinctio recusandae amet similique molestias voluptatibus tempora, ab deleniti hic architecto quo perspiciatis vel non incidunt eos! Nemo et fugit numquam id autem saepe quisquam. Dolor deleniti nulla veritatis sunt perspiciatis assumenda praesentium nihil labore, dignissimos ad aliquid incidunt nam non accusantium iusto cupiditate ipsa! Quidem dicta ipsum nisi corrupti cupiditate numquam voluptatum, quo, perspiciatis voluptatibus at hic cum culpa repellendus nam temporibus vitae et iste magnam veritatis.
    </div>

    <Footer/>
</>

  )
}

export default Cart
