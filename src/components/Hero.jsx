import PropTypes from 'prop-types';

const Hero = () => {
  return (
    <div>
      {/* background */}
      <div></div>
      <div>
        {/* text content */}
        <div>
          <h1></h1>
          <h1></h1>
          <button></button>
          {/* video links */}
          <div></div>
          {/* Social links */}
          <div></div>
        </div>
        {/* image content */}
        <div>
          <img src="" alt="" className=" " />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  heroapi: PropTypes.object.isRequired,
};
export default Hero;
