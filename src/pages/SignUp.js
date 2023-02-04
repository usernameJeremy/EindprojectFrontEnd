import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import '../App.css'
import Buttons from "../components/buttons/Buttons";

function SignUp() {

    const navigate = useNavigate()


    const url = "http://localhost:8080"
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [enabled] = useState(true);
    const [apikey] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [file, setFile]= useState("")
    const [previewUrl, setPreviewUrl]=useState("");


        async function Registreer(e) {
            e.preventDefault();
            try {
                const response = await axios.post(`${url}/users`, {
                    username: username,
                    password: password,
                    enabled: enabled,
                    apikey: apikey,
                    email: email
                });
                console.log(response)
                if(response.status === 201){
                   const response2 =  await axios.put(`${url}/accounts/${username}`, {
                        name: name,
                        lastName: lastName,
                        address: address
                    });
                    if (response2.status === 200){
                        console.log("ik ben nu door de 200 status")
                        void UploadProfilePicture()
                    }
                    navigate("/signin")
                }
            } catch(e) {
                console.error(e);
            }
        }
    const UploadProfilePicture = async () => {
        const formData = new FormData();
        formData.append("file", file)
        try{
            const response = await axios.post(`http://localhost:8080/accounts/${username}/upload`, formData,
                {
                    headers:{
                        "Content-Type": "multipart/form-data"
                    },
                })
            console.log("ik ben verstuurd ?")
        }catch (e){
            if (axios.isCancel(e)){
                console.log("je word gecanceld")
            }else {
                console.error(e)
            }

        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    username: ${username},
    email: ${email},
    enabled: ${enabled},
    apikey: ${apikey}
     name: ${name},
    lastName: ${lastName}
    address: ${address}
    
    `);
    }
    function HandleFileChange(e)
    {    const uploadedFile = e.target.files[0]
        console.log(uploadedFile)
        setFile(uploadedFile)
        setPreviewUrl(URL.createObjectURL(uploadedFile));}


    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
                    <div className="text-padding">
            <h1 className="register">Registreren</h1>
            <p className="register">Wilt u ook gebruik maken van die handige Boodschappen bezorg app? Registreer uzelf nu!! </p>
            <form className="register" onSubmit={handleSubmit}>
                <section className="register">
                    <label htmlFor="firstname-field">username</label>
                    <input
                        name="username"
                        id="username-field"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="lastname-field">password</label>
                    <input
                        name="password"
                        id="password-field"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="email-field">E-mail</label>
                    <input
                        name="email"
                        id="email-field"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="name-field">name</label>
                    <input
                        name="name"
                        id="name-field"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="lastname-field">lastname</label>
                    <input
                        name="lastname"
                        id="lastname-field"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </section>
                <section className="register">
                    <label htmlFor="address-field">address</label>
                    <input
                        name="address"
                        id="address-field"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </section>
                <div className="img-row">
                <table>
                    <tr>
                        <td>ProfilePicture to upload:</td>
                        <td><input
                            onChange={HandleFileChange} type="file" name="file" accept="image.*"/></td>
                    </tr>
                </table>
                {previewUrl && <label className="preview-box" >Preview:
                    <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
                </label>}
                </div>
                <Buttons className="button" type="submit" clickHandler={Registreer}>Registreren</Buttons>

            </form>
            <p className="register">Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;