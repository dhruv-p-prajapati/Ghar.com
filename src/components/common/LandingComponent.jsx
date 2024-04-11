import PropTypes from "prop-types";

const LandingComponent = ({ title = "", description = "" }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[url('/images/main.jpg')] bg-fixed h-[50vh] md:h-[95vh] bg-cover md:rounded-b-[0px] ">
        <div className="h-full bg-gradient-to-b from-primary to-[rgba(0,0,0,0.5)] md:bg-cover md:rounded-b-[0px] flex flex-col gap-5 justify-center items-center text-white font-semibold">
          <div className="text-lg md:text-3xl text-center">{title}</div>
          <div className="text-base md:text-lg w-[90%] md:w-[65%] text-center leading-6">{description}</div>
        </div>
      </div>
    </div>
  );
};

LandingComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default LandingComponent;
