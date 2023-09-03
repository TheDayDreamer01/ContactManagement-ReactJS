/**
 * Loading - A component for displaying a loading spinner overlay on the screen.
 *
 * This component is used to indicate that a process is ongoing and the user should wait.
 */
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen z-50 bg-neutra bg-[#000000de]">
      <div className="flex justify-center items-center h-full">
        {/* Loading spinner */}
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32"></div>
      </div>
    </div>
  );
};

export default Loading;
