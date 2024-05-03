import ImgGIF from '../../img/giphy.gif'
import Video from '../../img/headerVideo.mp4'
const header = () => {
    return (
        <>
        <header>
    <div style={{width:'100%',marginLeft:'0%'}} class="row">
       
        <video className='cssResVideo' width="100%" height={800} controls autoPlay loop muted>
             <source src={Video} type="video/mp4"/>
             <source src="movie.ogg" type="video/ogg"/>
        </video>
    </div>
    </header>
        
        </>
    )
}
export default header;