

export const LoginVideo = ({HandleClose}) => {
   
    return  <div className="fixed inset-0 z-20  backdrop-blur-sm ">
     <div className="h-full w-full object-cover">
      <button className="absolute text-4xl h-screen w-screen object-cover z-10 animate-pulse hover:animate-none" onClick={(HandleClose)}><span className="text-6xl w-2/5 h-auto opacity-50 text-white font-bold lowercase  rounded-none  hover:opacity-100 ">follow the white rabbit...</span></button>
      <video loop autoPlay className="hidden md:block h-screen w-screen object-cover" src='https://white-rabbit-98r9i.ondigitalocean.app/videos/video.mp4'
      frameBorder='0'
      allow='autoplay; loop; encrypted-media'
      allowFullScreen
      
      
      title='video'
  />
  <img className="h-full w-full object-cover  md:hidden" src="https://ih0.redbubble.net/image.347725011.4219/flat%2c800x800%2c070%2cf.jpg"/>
      {/* <iframe autoPlay muted src="./videos/video.mp4" type="video/mp4"className="h-screen w-screen object-cover"/> */}

  
  </div>
</div>
}

