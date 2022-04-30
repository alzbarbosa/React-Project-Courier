const ImagesDisplay = (props) => {
  return (
    <>
    <div className="image-display-container">
    <h2>{props.text}</h2>
    <img className='image-display' src={props.img} alt={props.text}/>
    </div>
    </>
  )
}

export default ImagesDisplay