const Bottom = () => {
  return (
    <>
      <div id="maingrid" className=" h-screen w-full flex px-10 flex-col  gap-6 justify-center items-center bg-slate-500">
        <div id="grid1" className=" bg-gray-50 h-[25vh] w-[60vw] flex flex-row justify-items-center ">
          <div id="box1" className="h-full w-[50%]">

          </div>
          <div id="box2" className="h-full w-[50%]">
            
          </div>
        </div>
        <div id="grid2" className=" bg-gray-50 h-[25vh] w-[60vw] flex flex-row justify-items-center">
          <div id="box1" className="h-[100%] w-[50%]">

          </div>
          <div id="box2" className="h-[100] w-[50%]">

          </div>
        </div>
        <div id="grib3" className=" bg-gray-50 h-[25vh] w-[60vw] flex flex-row justify-items-center">
          <div id="box1" className="h-[100%] w-[50%]">

          </div>
          <div id="box2" className="h-[100%] w-[50%]">

          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
