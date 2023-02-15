import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
            <img src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" alt="ecommerce" className="home__image" />

            <div className="home__row">
                <Product 
                    id="123456789"
                    title="Super Sac"
                    price={60.96}
                    rating={5}
                    image="https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                <Product 
                    id="321654987"
                    title="Casque virtuel"
                    price={899}
                    rating={4}
                    image="https://st4.depositphotos.com/thumbs/13349494/image/26799/267998918/api_thumb_450.jpg?forcejpeg=true"
                />
            </div>

            <div className="home__row">
            <Product 
                    id="741852963"
                    title="Robot"
                    price={16799}
                    rating={5}
                    image="https://images.assetsdelivery.com/compings_v2/halfpoint/halfpoint2212/halfpoint221200629.jpg"
                />
                <Product 
                    id="159753456"
                    title="éolienne"
                    price={218999}
                    rating={4}
                    image="https://images.assetsdelivery.com/compings_v2/kanawatth/kanawatth2203/kanawatth220300017.jpg"
                />
                <Product 
                    id="19735465"
                    title="Robot chantier"
                    price={17599}
                    rating={3}
                    image="https://images.assetsdelivery.com/compings_v2/pitinan/pitinan2111/pitinan211100151.jpg"
                />
            </div>

            <div className="home__row">
            <Product 
                    id="798465132"
                    title="Ordinateur"
                    price={1299}
                    rating={4}
                    image="https://st3.depositphotos.com/thumbs/12039412/image/16701/167016454/api_thumb_450.jpg?forcejpeg=true"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
