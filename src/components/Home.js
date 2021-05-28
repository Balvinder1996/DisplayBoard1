import React from 'react';
import img from '../Assets/Rosapic.jpg'
const Home=()=>
{
    return(
        <>
        <section className="container-fluid" id="main">
            <div className="row h-25">
                <div className="col-lg-5  bg-danger" id="image">
                    
                </div>
                <div className="col-lg-7 d-flex align-items-center flex-column justify-content-center" id="text">
                    
                        <h1 className="h1 ">Welcome to Rose's Cafe</h1>
                        <p className="display-4 animate__animated animate__flipOutX animate__infinite animate__slow">Welcome here</p>
                   
                </div>
            </div>
            <div className="row h-25" id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1 className="animate__animated animate__animated">12</h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                     <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
            </div>
            <div className="row h-25 " id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
            </div>
            <div className="row h-25" id="submain">
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <h1></h1>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home