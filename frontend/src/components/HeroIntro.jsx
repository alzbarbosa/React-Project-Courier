const HeroIntro = (props) => {
  return (
    <section className="homepage-body">
              <h1 className="title-call">{props.title}</h1>
            <img className="img-hero" src={props.img} />
    </section>
            
  )
}

export default HeroIntro