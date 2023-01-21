import React, { useContext, useEffect, useRef, useState } from 'react'
import './AddItems.css'
import feesContext from '../../context/contextFees/feescontext';
import { storage } from '../../Firebase.js'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"

function AddItemsm(props) {

    const context = useContext(feesContext);
    const { uploadItem, getAllItems, items, deleteItems ,updateItemsPrice,updateItemsQuantity} = context;
    const refopen = useRef(null)
    const [isPrice,setIsPrice] = useState(false)

    const [cred, setCred] = useState({
        ProductName: "",
        ProductPrice: "",
        ProductQuantity: ""
    })
    const [image, setImg] = useState(null);

    const loadFile = (e) => {
        let image = document.getElementById('outputImg');
        image.style.display = "block";
        image.src = URL.createObjectURL(e.target.files[0]);
        setImg(e.target.files[0]);
    }

    const handleChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(cred);
        const imageRef = ref(storage, `itemImages/${image.name + v4()}`);
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                uploadItem(cred.ProductName, cred.ProductPrice, cred.ProductQuantity, url);

            })
                .catch((error) => {
                    console.log(error.message, "error getting the image url");
                })
        })
            .catch((error) => {
                console.log(error.message);
            })

        setCred({
            ProductName: "",
            ProductPrice: "",
            ProductQuantity: ""
        })
    }

    const [mycred,setMyCred] = useState({
        ProductPrice:"",
        ProductQuantity:""
    })

    const [myid,setMyId]= useState(null)

    const handlemodalChange=(e)=>{
        setMyCred({...mycred,[e.target.name]:e.target.value})
    }

    const handlesubmitClick=()=>{
        if(isPrice){
            updateItemsPrice(mycred.ProductPrice,myid)
            setMyCred({
                ProductPrice:"",
                ProductQuantity:""
            })
        }else{
            updateItemsQuantity(mycred.ProductQuantity,myid)
            setMyCred({
                ProductPrice:"",
                ProductQuantity:""
            })
        }
    }

    useEffect(() => {
        props.progress(50);
        getAllItems();
        props.progress(75);
        props.progress(100);
    }, [])

    return (
        <>
            <div className="mainShopGearPortal">
                <div className="header">
                    <h1><span className="whiteFont">SHOP GEAR </span><span className="yellowFont">MANAGEMENT PORTAL</span></h1>
                </div>
                <div className="mainForm">
                    <form action="">
                        <div className="shopItemsForm">
                            <label htmlFor="product" className="LabelShopGearPortal">Product Name:</label>
                            <input onChange={handleChange} value={cred.ProductName} name='ProductName' type="text" placeholder="Enter the product name" className="inputFields" />
                        </div>
                        <div className="shopItemsForm">
                            <label htmlFor="quantity" className="LabelShopGearPortal">Quantity:</label>
                            <input onChange={handleChange} value={cred.ProductQuantity} name='ProductQuantity' type="text" placeholder="Enter the product quantity" className="inputFields" />
                        </div>
                        <div className="shopItemsForm">
                            <label htmlFor="Price" className="LabelShopGearPortal">Price:</label>
                            <input onChange={handleChange} value={cred.ProductPrice} name='ProductPrice' type="text" placeholder="Enter the product price" className="inputFields" />
                        </div>
                        <div className="shopItemsForm shopItemsForm-Image">
                            <p className="LabelShopGearPortal">Product Image</p>
                            <input type="file" accept="image/jpeg, image/png" onChange={loadFile} name="image" id="file" style={{ display: 'none' }} />
                            <label htmlFor="file" id="ImgUpload"><i className="fa fa-upload fa-2x"  aria-hidden="true"></i>
                            </label>
                            <img id="outputImg" />
                        </div>
                        <div className="submitBtnShopItemForm">
                            <button onClick={handleClick} className="shopItemsForm-submit" >Submit</button>
                        </div>
                    </form>


                </div>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th >Image</th>
                            <th >Name</th>
                            <th >Price</th>
                            <th >Quantity</th>
                            <th >Delete</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            items.map((it) => {
                                console.log(it.ProductID)
                                return <tr>
                                    <td><img className="ItemImage" src={it.ProductImage} alt="Not Found" /></td>
                                    <td>{it.ProductName}</td>
                                    <td>{it.ProductPrice}
                                    <i onClick={()=>{refopen.current.click()
                                        setIsPrice(true);
                                        setMyId(null);
                                        setMyId(it.ProductID);
                                    }} class="fa fa-pencil" aria-hidden="true"></i></td>
                                    <td>{it.ProductQuantity}
                                    <i onClick={()=>{refopen.current.click()
                                        setIsPrice(false);
                                        setMyId(null);
                                        setMyId(it.ProductID);
                                    }} class="fa fa-pencil" aria-hidden="true"></i></td>
                                    {/* <td></td> */}
                                    <td><i onClick={() => { deleteItems(it.ProductID) }} class="fa fa-trash" aria-hidden="true"></i></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>


                <div style={{ visibility: 'hidden' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae facilis illum rerum, aperiam odio animi voluptate maxime ullam eum laudantium provident itaque a ea eius. Deleniti quam qui repellendus recusandae! Ab, esse? Iusto quisquam voluptatem eveniet accusamus molestias aperiam recusandae eum delectus minima. Distinctio ratione fugit officia culpa explicabo facere nulla repellat ullam cupiditate. Voluptates est voluptatem nisi commodi, placeat doloremque facere aut veritatis labore, neque beatae! Quam odit nobis voluptatem accusantium temporibus laboriosam atque ducimus possimus assumenda alias, saepe, quis similique quibusdam officia ipsa ab et dolorem, illum ratione? Quia harum autem natus est soluta magnam id enim eveniet voluptatem itaque officia dolorum non velit odit debitis accusamus et magni vero pariatur nobis nesciunt consequuntur eius, necessitatibus odio. Consequuntur error voluptates nihil, ratione odit dolores provident maiores natus facilis ab nostrum laboriosam eligendi ipsa nobis vel voluptas dolore doloribus id at laudantium numquam consequatur non. Mollitia sint numquam reiciendis officiis ea, ipsum doloremque, facilis repellat amet et, quam fugiat voluptates unde sequi dignissimos dolores minima aliquid voluptatibus accusamus modi temporibus quia. Architecto voluptas recusandae nihil, iusto id temporibus quibusdam repudiandae facilis alias officiis natus repellat quisquam ex non quis sint esse. Possimus ab asperiores aliquid facere, laudantium eum voluptate voluptates eaque ea natus fugit quisquam sit maxime odit. Amet tenetur rerum provident labore, fugit veritatis sequi suscipit! Aliquam provident sint blanditiis esse. Iste quibusdam natus doloremque cumque necessitatibus? Sed est labore impedit ab distinctio, debitis, facere cum sunt explicabo accusantium illo laudantium aspernatur minus blanditiis praesentium? Dolorum corrupti pariatur eos ipsa dolor beatae, vitae, nam quisquam reprehenderit in, blanditiis voluptatum sunt dicta repellendus repellat dolores dignissimos suscipit quidem error doloribus? Quia tempora veniam vel nulla optio hic, eum deleniti assumenda ullam perspiciatis itaque nihil error, labore possimus rerum esse necessitatibus cum voluptates sed suscipit consequuntur nemo. Hic, sapiente enim.
                </div>

            </div>

            <div className="container">


                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={refopen} data-bs-target="#exampleModalCenter">
                    Launch demo modal
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content" >
                            <div className="modal-header" style={{ backgroundColor: "grey" }}>
                                {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ color: 'white', backgroundColor: 'black', fontSize: "40px" }}>
                                {isPrice ?
                                <>
                                <label htmlFor="Price" className="LabelShopGearPortal">Price:</label>
                                 <input value={mycred.ProductPrice} onChange={handlemodalChange} name='ProductPrice' placeholder='Enter Price' /> 
                                 </>
                                 : 
                                    <>
                                    <label htmlFor="Price" className="LabelShopGearPortal">Quantity:</label>
                                 <input value={mycred.ProductQuantity} onChange={handlemodalChange} name='ProductQuantity' placeholder='Enter Quantity'/>
                                 </>
                                }
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: "grey" }}>
                                <button onClick={handlesubmitClick} style={{ backgroundColor: 'red', color: 'white' }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default AddItemsm
