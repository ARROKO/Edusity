import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="msg_icon" /></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium rem natus voluptates veritatis nihil dignissimos, exercitationem impedit nisi consectetur dolore reprehenderit quam tenetur eveniet necessitatibus consequuntur perspiciatis soluta eum. Hic nihil atque itaque ipsum.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />kemgang605@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+237 691113996</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="">
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile' required />
                <label htmlFor="">Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' id=""></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact