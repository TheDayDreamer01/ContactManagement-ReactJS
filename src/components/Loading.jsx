const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen z-50 bg-neutra bg-[#000000de]">
      <div className="flex justify-center items-center h-full">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
      </div>
    </div>
  );
};

export default Loading;
