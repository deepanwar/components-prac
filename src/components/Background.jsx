import bgSvg from '../assets/bg.svg';

const Background = () => {
  return (
    <div
      className="fixed inset-0 z-10 "
      style={{ backgroundImage: `url(${bgSvg})` }}
    >
      {/* <img src={bgSvg} alt="bg" className='h-full'/> */}
    </div>
  );
};

export default Background;
