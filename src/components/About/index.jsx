import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="about_img" />
            <img src={play_icon} className='play-icon' alt="play_icon" />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat similique est odit voluptates excepturi hic commodi facilis architecto quo iusto. Ratione fuga deleniti quisquam laudantium quidem vero sequi magnam ea.
                Tenetur velit hic iste dolorum maiores neque explicabo odit omnis in at. Fuga reiciendis consectetur sint sed unde delectus eos laborum a atque excepturi. Magnam consequuntur mollitia dicta eveniet. Dolore.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita placeat debitis hic eos repellat, maiores, praesentium officia fuga quae ullam odit quia obcaecati neque explicabo iste rerum eum blanditiis?
                Voluptatem quos voluptas libero 
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe impedit alias doloribus. Quo voluptatibus amet reiciendis incidunt eius minus perspiciatis esse. Rem distinctio recusandae ipsam accusantium quis omnis dolores dicta?
                Nobis eveniet delectus harum quasi nesciunt quis recusandae, numquam accusamus est maxime, maiores officia libero hic aspernatur consequatur saepe atque assumenda laborum autem! Voluptates esse, repellendus ad nostrum vel distinctio.
            </p>
        </div>
    </div>
  )
}

export default About
