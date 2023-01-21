import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Profile.css"
import memberContext from '../../context/contextMember/memberContext'
import {storage} from '../../Firebase.js'
import {ref , uploadBytes , getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

function Profile(props) {

    const context = useContext(memberContext);
    const{uploadImage,getImage,newPic}=context
    const myJson2 = {};
    const [myJson,setMyJson]=useState({Name:"",Email:"",Package:"",Age:"",Weight:"",Gender:"",Mobile:"",ProfilePic:""})
    const refs = useRef();



    useEffect(() => {

        props.progress(50);
        const Mem2=async()=>{
            const host = 'http://localhost:3000'
            const response = await fetch(`${host}/api/v1/get/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials : 'include'
                
            });
            const json = await response.json();
            
            props.progress(75);
            const a= await JSON.parse(JSON.stringify(json));
            myJson2.Name = a.result[0].Name;
            myJson2.Email = a.result[0].Email;
            myJson2.Package = a.result[0].Package;
            myJson2.Age = a.result[0].Age;
            myJson2.Weight = a.result[0].Weight;
            myJson2.Gender = a.result[0].Gender;
            myJson2.Mobile = a.result[0].Mobile;
            myJson2.ProfilePic = a.result[0].ProfilePic;
            
            setMyJson(myJson2);        
            props.progress(100);
        }
        
        Mem2()
        
 
    },[])

    const [image,setImage] = useState(null)
    const [url,setURL] = useState(null)
    
    const handleFileChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }

        setTimeout(()=>{
            refs.current.click();

        },500)

    }
    
    const handleOnClick=async()=>{
        const imageRef = ref(storage,`images/${image.name + v4()}`);
        console.log("hi");
        uploadBytes(imageRef,image).then(()=>{
            getDownloadURL(imageRef).then((url)=>{
                setURL(url);
                uploadImage(url);
            })
            .catch((error)=>{
                console.log(error.message,"error getting the image url");
            })
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    let label_of_image = document.getElementById('label-of-image');

  return (
    <div className="main-page-of-profile">
        <div className="div-of-img-and-name">
            <div onMouseOver={()=>{label_of_image.style.display = 'block';}} onMouseOut={()=>{label_of_image.style.display = 'none'}} id="div-of-image">
                <img id="img-of-person" src={url===null ? myJson.ProfilePic : url} width="170" height="170"/>
                <input id="file" type="file" name='ProfilePic' onChange={(e)=>handleFileChange(e)}/>
                <button onClick={handleOnClick} ref={refs} style={{display:'none'}}>Click Me</button>
                <label id="label-of-image" for="file">Choose Image</label>
            </div>
            <p>{myJson.Name}</p>
        </div>
        
        <div className="div-of-information">
            <h1>Profile</h1>

            <div style={{display: 'flex', position: 'relative'}}>
                <div className="main-divs-of-information">
                    <div id="email-left">
                        <h2 className="profcred">Email :</h2>
                        <p>{myJson.Email}</p>
                    </div>
                    
                    <div id="package-left">
                        <h2 className="profcred">Package Name :</h2>
                        <p>{myJson.Package}</p>
                    </div>

                    <div id="weight-left">
                        <h2 className="profcred">Weight :</h2>
                        <p>{myJson.Weight}</p>
                    </div>
                </div>
                
                <div className="main-divs-of-information right-main-div-of-information">
                    <div id='phone-right'>
                        <h2 >Phone :</h2>
                        <p>{myJson.Mobile}</p>
                    </div>

                    <div id='age-right'>
                        <h2 >Age :</h2>
                        <p>{myJson.Age+" years"}</p>
                    </div>

                    <div id='gender-right'>
                        <h2 >Gender :</h2>
                        <p>{myJson.Gender}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


  )
}

export default Profile
