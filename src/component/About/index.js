import {Component}  from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

class About extends Component{
    render(){
        return <ThemeContext.Consumer>
            {value => {
                const  {theme} = value;
                return (
                    <div className={`about-main ${theme ? "w" : "b"}`}>
                        <Header />
                        <div className='about-sub'>
                            <Footer />
                            <div className='about-content'>
                                <h1 className='h1'> This is it. ;)         <hr width="70%"/></h1>
                                
                                <p className='p'>Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. <br/><br/>
                                    He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. <br/> <br/>
                                    His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan<br/><br/>
                                    When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                                <hr width ="50%"/>
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

export default About