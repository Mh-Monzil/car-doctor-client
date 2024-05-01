import banner1 from '../../assets/images/banner/5.jpg'
import banner2 from '../../assets/images/banner/4.jpg'
import banner3 from '../../assets/images/banner/3.jpg'


const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] rounded-xl">
      <div id="slide1" style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${banner1})`}} className="carousel-item relative w-full bg-center bg-cover">
        <div className='text-white max-w-[460px] p-24 pr-0 space-y-7'>
            <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className='text-lg font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border bg-primary border-primary hover:bg-transparent hover:border-white cursor-pointer transition-all duration-300'>Discover More</button>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border border-white hover:bg-primary hover:border-primary cursor-pointer transition-all duration-300'>Latest Project</button>
            </div>
        </div>
        <div className="absolute flex gap-5 transform right-10 bottom-10 ">
          <a href="#slide3" className="btn btn-circle bg-white/20 border-white/20 text-white hover:bg-primary hover:border-primary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-primary border-primary text-white hover:bg-white/20 border-white/20">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${banner2})`}} className="carousel-item relative w-full bg-center bg-cover">
        <div className='text-white max-w-[460px] p-24 pr-0 space-y-7'>
            <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className='text-lg font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border bg-primary border-primary hover:bg-transparent hover:border-white cursor-pointer transition-all duration-300'>Discover More</button>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border border-white hover:bg-primary hover:border-primary cursor-pointer transition-all duration-300'>Latest Project</button>
            </div>
        </div>
        <div className="absolute flex gap-5 transform right-10 bottom-10 ">
          <a href="#slide1" className="btn btn-circle bg-white/20 border-white/20 text-white hover:bg-primary hover:border-primary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-primary border-primary text-white hover:bg-white/20 border-white/20">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${banner3})`}} className="carousel-item relative w-full bg-center bg-cover">
        <div className='text-white max-w-[460px] p-24 pr-0 space-y-7'>
            <h1 className='text-6xl font-bold '>Affordable Price For Car Servicing</h1>
            <p className='text-lg font-normal'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border bg-primary border-primary hover:bg-transparent hover:border-white cursor-pointer transition-all duration-300'>Discover More</button>
                <button className='text-lg font-semibold rounded-md px-6 py-3 border border-white hover:bg-primary hover:border-primary cursor-pointer transition-all duration-300'>Latest Project</button>
            </div>
        </div>
        <div className="absolute flex gap-5 transform right-10 bottom-10 ">
          <a href="#slide2" className="btn btn-circle bg-white/20 border-white/20 text-white hover:bg-primary hover:border-primary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-primary border-primary text-white hover:bg-white/20 border-white/20">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
