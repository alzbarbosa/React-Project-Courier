import HeroIntro from "../components/HeroIntro"
import imgHero from '../images/truck.jpg'


const HomePage = () => {
  const title = 'Ready whenever you need us'

  return (
    <>
    <div className="homepage-container">
      <HeroIntro img={imgHero} 
      title={title}/>
            <section className="title-hero">
                
                <p className="subtitle-call">We are the ideal company for those that are looking for fast delivery and keep your packages safe </p>
            </section>

            </div>
    </>
    
  )
}

export default HomePage