import {Component}  from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

class Home extends Component{
    render(){
        return <ThemeContext.Consumer>
            {value => {
                const  {theme} = value;
                return (
                    <div className={`home-main ${theme ? "white" : "black"}`}>
                        <Header />
                        <div className='home-sub'>
                            <Footer />
                            <div className='home-flex'>
                                <div>
                                    <img className='home-hello' src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/ar8xt4t1qr3b6v2wmdtf"/>
                                    <h1 className='home-head'>I'm <span className={`home-span ${theme ? "span-light" : "span-dark"}`}>Anish</span><img className='head-inline' src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/r8dkcgvvu2mwaby1rw8d"/></h1>
                                    <p>UI/UX Designer, Front-End Developer & Thinker.<br/>
                                        Based in India.</p>
                                    <div className='home-button-container'>
                                        <button className={`${theme ? "home-demo-btn-light" : "home-demo-btn-dark"} b1`}>Download CV</button>
                                        <button className={`${theme ? "home-demo-btn-light" : "home-demo-btn-dark"} ${theme ? "b21": "b22"}`}>Get in Touch!</button>
                                    </div>
                                </div>
                                <img className='home-img' src="https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/gp19gesias6xgauo2kec" />
                            </div>
                            <div className='home-div'>
                                <img className='home-para' src={theme ? "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/orwr3ei6lyo59a2hb3jj" : "https://res.cloudinary.com/dgw2vopar/image/upload/f_auto,q_auto/npi3xgqtozayxrhtx7ja"}/>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    }
}

export default Home