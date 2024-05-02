import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='w-full h-[550px] flex flex-col lg:flex-row gap-[60px]  mt-32 '>
            <div className="lg:w-1/2 relative">
                <div style={{backgroundImage: `url(${person})`}} className='h-[460px] w-[460px] bg-cover bg-center absolute top-0 rounded-xl'>hello</div>
                <div style={{backgroundImage: `url(${parts})`}} className='h-[300px] w-[300px] bg-cover bg-center absolute bottom-0 right-0 rounded-xl border-8 border-white'></div>
            </div>
            <div className="lg:w-1/2">
                <h3 className="text-xl font-bold text-primary">About Us</h3>
                <h2 className="max-w-[380px] text-5xl font-bold mt-5">We are qualified & of experience in this field</h2>
                <p className="font-normal text-[#737373] leading-7 mt-7 max-w-[490px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="font-normal text-[#737373] leading-7 mt-5 max-w-[490px]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="text-lg font-semibold rounded-md px-6 py-3 border bg-primary border-primary hover:bg-transparent hover:border-white cursor-pointer transition-all duration-300 text-white mt-7">Get More Info</button>
            </div>
        </div>
    );
};

export default About;