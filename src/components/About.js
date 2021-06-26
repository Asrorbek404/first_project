import React from 'react';
import {Link} from 'react-router-dom';
import shoes3Img from "../img/shoes3.png";
import shoes8Img from "../img/shoes8.png";
import shoes6Img from "../img/shoes6.png";
export default function About() {
    return (
        <div className='about'>
            <div className="inside-container">
                <div className="about-center">
                    <div className="about-img">
                        <img src={shoes6Img} alt=""/>
                    </div>

                    <div className="about-info">
                        <p>the shoes addict is an online ecommerce store which pr
                            ovides the most famous shoes from the most well-known comp
                            anies like nike, adidas, puma, new balance, lacoste,. It is th
                            e best store which provides the best prices directly from companies.</p>

                        <div className="btn-options">
                            <Link to="/products"><button className="back-products">back to products</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inside-container">
                <div className="about-center">
                    <div className="about-img">
                        <img src={shoes3Img} alt=""/>
                    </div>

                    <div className="about-info">
                        <p>the shoes addict is an online ecommerce store which pr
                            ovides the most famous shoes from the most well-known comp
                            anies like nike, adidas, puma, new balance, lacoste,. It is th
                            e best store which provides the best prices directly from companies.</p>

                        <div className="btn-options">
                            <Link to="/products"><button className="back-products">back to products</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inside-container">
                <div className="about-center">
                    <div className="about-img">
                        <img src={shoes8Img} alt=""/>
                    </div>

                    <div className="about-info">
                        <p>the shoes addict is an online ecommerce store which pr
                            ovides the most famous shoes from the most well-known comp
                            anies like nike, adidas, puma, new balance, lacoste,. It is th
                            e best store which provides the best prices directly from companies.</p>

                        <div className="btn-options">
                            <Link to="/products"><button className="back-products">back to products</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}