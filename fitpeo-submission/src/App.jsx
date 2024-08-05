function App() {
  return (
    <>
      <div className="dashboardPage">
        <div className="dashBoardHeader sticky top-0 flex items-center justify-between p-5 bg-slate-100">
          <div className="headerLeft flex items-center space-x-16">
            <div className="icon ml-3 bg-slate-500 rounded-full w-[30px] h-[30px]"></div>
            <div className="searchBar">
              <div className="searchBoundingBox  p-2 rounded-md bg-slate-200 flex space-x-2 items-center outline-none">
                <div className="searchIcon rounded-full h-[20px] w-[20px] bg-slate-500"></div>

                <input
                  type="text"
                  className="p-2 rounded-md bg-slate-200 outline-none"
                  name="search"
                  id="search"
                />
              </div>
            </div>
          </div>

          <div className="headerRight flex items-center space-x-3">
            <div className="icon1 w-[30px] h-[30px] bg-slate-500 rounded-full"></div>
            <div className="icon2 w-[30px] h-[30px] bg-slate-500 rounded-full"></div>
            <div className="icon3 w-[30px] h-[30px] bg-slate-500 rounded-full"></div>
            <div className="profile w-[40px] h-[40px] bg-slate-500 rounded-full"></div>
          </div>
        </div>

        <div className="dashBoardContent flex space-x-5 w-full h-full">
          <div className="sideBar hidden sm:block flex-[0.05] p-2 justify-between bg-slate-100 h-screen">

            <div className="iconsList space-y-3">
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full rounded-full"></button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible  invisible rounded-r-md w-[5px]"></div>
              </div>

              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full rounded-full"></button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full rounded-full"></button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full rounded-full"></button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>

              
            </div>
            <div className="leavebutton mt-[400px]">

            <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                </div>
                
              </div>

            </div>
          </div>

        <div className="dashboardCenter p-5 flex-[0.6]">
          <p className="mb-5 text-slate-700 font-semibold text-xl">Dashboard</p>

          <div className="threecontentsInCol flex flex-col space-y-5">
              <div className="stats w-full flex space-x-5 h-[100px] rounded-md ">

                <div className="container h-full rounded-lg w-[100px] bg-slate-300"></div>
                <div className="container h-full rounded-lg w-[100px] bg-slate-300"></div>
                <div className="container h-full rounded-lg w-[100px] bg-slate-300"></div>
                <div className="container h-full rounded-lg w-[100px] bg-slate-300"></div>

              </div>
              <div className="activity w-full !h-[150px] rounded-md  bg-slate-500"></div>
              <div className="orders w-full h-[250px] rounded-lg bg-slate-400"></div>

          </div>

        </div>


        </div>
      </div>
    </>
  );
}

export default App;
