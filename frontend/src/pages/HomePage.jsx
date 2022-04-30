import HeroIntro from "../components/HeroIntro"
import ImageDisplay from "../components/ImageDisplay"
import imgHero from "../images/delivery.jpg"
import imgTruck from '../images/truck.jpg'
import imgCareful from '../images/careful.jpg'
import imgPackages from '../images/packages.jpg'

const HomePage = () => {
  const title = 'Making sure that all your packages are delivered on time and safe'
  const textOne = 'Delivering anywhere that you need'
  const textTwo = 'Carefuly managering your packages'
  const textThree = 'Always deliviring to the right person'
  return (
    <>
    <div>
      <HeroIntro img={imgHero} 
      title={title}/>
            <section className="title-hero">
                
                <p className="subtitle-call">We are the ideal company for those that are looking for fast delivery and keep your packages safe </p>
            </section>
            <section className="images-container">
              <ImageDisplay img={imgTruck} text={textOne}/>
              <ImageDisplay img={imgCareful} text={textTwo}/>
              <ImageDisplay img={imgPackages} text={textThree}/>
            </section>
            <p className="subtitle-call">If you want to have a modern interaction with your customers, you are in the right place</p>
            </div>
    </>
    
  )
}

export default HomePage