import './css/Card.css'
import Images from '../assets/images/avatar-jessica.jpeg'
import ButtonsProfile from "./ButtonsProfile"
const CardProfile = () => {
    return (
        <>

            <div className='card'>
                <div className='img'>
                    <img src={Images} alt="" />
                </div>

                <div className='info'>
                    <h1>Jessica Randall</h1>
                    <h2 className='green'>London, United Kingdom</h2>
                    <p>"Front-end developer and avid reader."</p>
                </div>
                <div className='buttons'>
                    <ButtonsProfile text='Github' />
                    <ButtonsProfile text='Fronted Mentor' />
                    <ButtonsProfile text='Linkedin' />
                    <ButtonsProfile text='Twitter' />
                    <ButtonsProfile text='Instagram' />
                </div>
            </div>


        </>
    )
}

export default CardProfile