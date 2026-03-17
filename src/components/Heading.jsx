const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 md:p-5">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
        {title}
      </h2>
      <p className="mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-2/5 text-white text-sm sm:text-base font-normal px-4 sm:px-0">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
