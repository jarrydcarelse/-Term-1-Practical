import React from "react";

function Home() {
    return (
        <div>
            <div class="header">
                <h1 id="name">CarsAlot</h1>
                {/* <img src="https://images.dealersync.com/cloud/userdocumentprod/2772/images/home/ds-inventory-banner.jpg?width=767" id="image1"></img> */}
                <p id="about">CarsAlot is a leading company that provides comprehensive and unbiased comparisons of various cars on the market. Our mission is to help consumers make informed decisions when it comes to purchasing a new vehicle.Our website features a user-friendly interface that allows users to search for cars based on their preferred criteria, such as make, model, year, and price range.
                    We provide detailed comparisons of different cars, highlighting their strengths and weaknesses,
                    so that our users can make an informed decision based on their needs and preferences.At CarsAlot,
                    we are committed to providing our users with the best possible car-buying experience.
                    Whether you're a first-time buyer or a seasoned car enthusiast, we have the resources and expertise to help you find the perfect car for your needs.</p>
            </div>
            <div class="section1">
                <div class="searchbox">Search Box</div>
                <div class="image1">
                    {/* <img src="https://i.pinimg.com/originals/58/41/ed/5841edf4ca48a2249231cb9ace118c77.jpg"></img> */}
                </div>
                <div>
                    <h2 id="ApiName">
                        About API
                     </h2>
                         <p id="Api">A car API is an application programming interface that allows software developers to access and retrieve data related to cars. This data can include information such as make, model, year, engine size, fuel efficiency, and safety features. With a car API, developers can integrate this data into their 
                         applications or websites, providing users with accurate and up-to-date information about different cars. This can be especially useful for car dealerships, car rental companies,
                         and automotive comparison websites, as it allows them to provide a more personalized and informative experience for their customers.</p>
                </div>
             </div>
        </div>
    )


}
export default Home;