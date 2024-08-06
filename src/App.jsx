import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
function App() {
  return (
    <>
      <div className="dashboardPage">
        <div className="dashBoardHeader sticky top-0 flex items-center justify-between p-5 bg-slate-100">
          <div className="headerLeft flex items-center space-x-16">
            <div className="icon ml-3 bg-slate-500 rounded-full hover:cursor-pointer hover:drop-shadow-lg w-[30px] h-[30px]"></div>
            <div className="searchBar">
              <div className="searchBoundingBox  p-2 rounded-md bg-slate-200 flex space-x-2 items-center outline-none">
                <div className="searchIcon rounded-full h-[20px] w-[20px] flex justify-center items-center ">🔎</div>

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
            <div className="icon1 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">✉️</div>
            <div className="icon2 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">✉️</div>
            <div className="icon3 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">✉️</div>
            
            <div className="profile w-[40px] h-[40px] hover:cursor-pointer bg-slate-500 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                className="object-cover hover:animate-spin"
                alt=""
              />
            </div>
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
                  <button className=" w-full h-full rounded-full hover:cursor-pointer ">
                  <div className="icon3 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">🛖</div>
                  </button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible  invisible rounded-r-md w-[5px]"></div>
              </div>

              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full hover:cursor-pointer rounded-full">
                  <div className="icon3 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full ">🛖</div>
                  </button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full hover:cursor-pointer rounded-full">
                  <div className="icon3 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">🛖</div>
                  </button>
                </div>
                <div className="focus bg-slate-500   peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-slate-500 mx-5  rounded-full"
                >
                  <button className=" w-full h-full hover:cursor-pointer rounded-full">
                  <div className="icon3 w-[30px] h-[30px] flex justify-center items-center hover:cursor-pointer bg-slate-300 rounded-full">🛖</div>
                  </button>
                </div>
                <div className="focus bg-slate-500  peer-focus-within:visible invisible rounded-r-md w-[5px]"></div>
              </div>
            </div>
            <div className="leavebutton mt-[400px]">
              <div className="flex flex-row-reverse ">
                <div
                  role="button"
                  className="icon1 w-[30px] h-[30px] peer  bg-rose-500 mx-5 flex justify-center items-center  rounded-full"
                >◀️</div>
              </div>
            </div>
          </div>

          <div className="dashboardCenter w-fit overflow-hidden  flex flex-col p-5 flex-[0.6]">
            <p className="mb-5 text-slate-700 font-semibold text-xl">
              Dashboard
            </p>

            <div className="threecontentsInCol flex flex-col space-y-5">
              <div className="stats w-full flex space-x-5 h-[100px] rounded-md ">
                <div className="container hover:drop-shadow-lg rounded-lg w-[150px] p-2 bg-blue-300">
                  <div className="containerHeading  w-8 h-8 flex justify-center items-center bg-blue-500 rounded-md ">
                    <div className="icon w-1/2 h-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    Lorem Ipsum
                  </div>

                  <div className="flex mt-2 items-center w-full justify-between">
                    <p className="text-lg font-semibold text-slate-600">00</p>
                    <p className="text-xs font-medium text-red-600">🔻5%</p>
                  </div>
                </div>
                <div className="container hover:drop-shadow-lg rounded-lg w-[150px] p-2 bg-green-300">
                  <div className="containerHeading  w-8 h-8 flex justify-center items-center bg-green-500 rounded-md ">
                    <div className="icon w-1/2 h-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    Lorem Ipsum
                  </div>

                  <div className="flex mt-2 items-center w-full justify-between">
                    <p className="text-lg font-semibold text-slate-600">00</p>
                    <p className="text-xs font-medium text-green-600">🔼5%</p>
                  </div>
                </div>
                <div className="container hover:drop-shadow-lg rounded-lg w-[150px] p-2 bg-rose-300">
                  <div className="containerHeading  w-8 h-8 flex justify-center items-center bg-rose-500 rounded-md ">
                    <div className="icon w-1/2 h-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    Lorem Ipsum
                  </div>

                  <div className="flex mt-2 items-center w-full justify-between">
                    <p className="text-lg font-semibold text-slate-600">00</p>
                    <p className="text-xs font-medium text-red-600">🔻5%</p>
                  </div>
                </div>
                <div className="container hover:drop-shadow-lg rounded-lg w-[150px] p-2 bg-yellow-300">
                  <div className="containerHeading  w-8 h-8 flex justify-center items-center bg-yellow-500 rounded-md ">
                    <div className="icon w-1/2 h-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    Lorem Ipsum
                  </div>

                  <div className="flex mt-2 items-center w-full justify-between">
                    <p className="text-lg font-semibold text-slate-600">$ 00</p>
                    <p className="text-xs font-medium text-green-600">🔼5%</p>
                  </div>
                </div>
              </div>
              <div className="activity w-fit overflow-hidden sm:w-full p-3 !h-[150px] rounded-md  bg-slate-300">
                <div className="flex itemx-center p-1 justify-between">
                  <div className="font-semibold font-lg text-slate-600 ">
                    User activity
                  </div>
                  <div className="w-[100px] bg-slate-600 text-slate-100 text-xs rounded-full flex justify-center items-center  ">
                    Yearly 🔽
                  </div>
                </div>
                <div>
                  <div style={{ maxWidth: "100%" }}>
                    <Bar
                      data={{
                        labels: [
                          "jan",
                          "feb",
                          "mar",
                          "apr",
                          "may",
                          "jun",
                          "jul",
                          "aug",
                          "sep",
                          "oct",
                          "nov",
                          "dec",
                        ],
                        datasets: [
                          {
                            label: "Minutes active",

                            data: [
                              500, 2000, 1400, 800, 500, 2000, 1400, 800, 500,
                              2000, 1400, 800,
                            ],
                            backgroundColor: [
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                              "skyblue",
                            ],

                            borderWidth: 0.5,
                            borderRadius: 10,
                          },
                        ],
                      }}
                      height={100}
                      options={{
                        maintainAspectRatio: false,

                        legend: {
                          labels: {
                            fontSize: 15,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="orders w-fit overflow-hidden sm:w-full h-[250px] p-5 rounded-lg bg-slate-200">
                <p className="font-semibold font-lg text-slate-600 mb-5">
                  Orders
                </p>
                <div className="flex items-center mb-2 justify-around">
                  <p className="text-slate-600 text-sm font-semibold w-[150px]">
                    Customer
                  </p>
                  <p className="text-slate-600 text-sm font-semibold w-[100px]">
                    Order No.
                  </p>
                  <p className="text-slate-600 w-[100px] text-sm font-semibold">
                    Amount
                  </p>
                  <p className="text-slate-600 w-[100px] text-sm font-semibold">
                    Status
                  </p>
                </div>
                <hr className="border-1 mb-2 border-slate-600" />

                <div className="entry hover:drop-shadow-lg flex mb-2 items-center justify-around">
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    00000
                  </p>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    $ 00,000
                  </p>
                  <div>
                    <div className="box w-[150px] h-[30px] rounded-full flex font-medium text-sm items-center justify-center text-slate-100 hover:text-slate-500 hover:bg-slate-100 bg-slate-600 p-3">
                      Delivered
                    </div>
                  </div>
                </div>
                <hr className="border-1 mb-2 border-slate-600" />

                <div className="entry hover:drop-shadow-lg flex mb-2 items-center justify-around">
                  <div className="customer flex space-x-2 w-[150px] items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    00000
                  </p>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    $ 00,000
                  </p>
                  <div>
                    <div className="box w-[150px] h-[30px] rounded-full flex font-medium text-sm items-center justify-center hover:text-slate-100 text-slate-500 bg-slate-100 hover:bg-slate-600 p-3">
                      Undelivered
                    </div>
                  </div>
                </div>
                <hr className="border-1 mb-2 border-slate-600" />

                <div className="entry hover:drop-shadow-lg flex mb-2 items-center justify-around">
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    00000
                  </p>
                  <p className="text-slate-600  font-semibold w-[100px]">
                    $ 00,000
                  </p>
                  <div>
                    <div className="box w-[150px] h-[30px] rounded-full flex font-medium text-sm items-center justify-center text-slate-100 hover:text-slate-500 hover:bg-slate-100 bg-slate-600 p-3">
                      Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboardRight hidden lg:block p-5 mt-12 flex-[0.35]">
            <div className="threecontentsInCol flex flex-col space-y-5">
              <div className="stats w-full flex space-x-5 h-[100px] rounded-md ">
                <div className="container justify-between p-5 h-full rounded-lg flex items-center w-full bg-slate-300">
                  <div className="">
                    <p className="font-semibold text-xs text-slate-600 mb-5">
                      Lorem Ipsum
                    </p>
                    <div className="flex items-end space-x-3 ">
                      <p className="text-slate-600 text-3xl  font-semibold ">
                        $ 00
                      </p>
                      <p className="text-xs font-medium text-red-600">🔻5%</p>
                    </div>
                  </div>

                  <div className="piechart flex justify-center items-center">
                    <div className="w-16 h-16 bg-gradient-to-r group from-slate-500 to-transparent   rounded-full flex justify-center items-center">
                      <div className="w-10 h-10 bg-slate-300 z-[100] items-center rounded-full text-sm font-medium text-slate-600 flex justify-center ">
                        90%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activity w-full !h-[150px] rounded-md flex flex-col space-y-3 p-5 bg-slate-300">
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="container w-[50px] h-[50px] bg-green-500 rounded-full"></div>
                    <p className="text-slate-600">Goals</p>
                  </div>

                  <div className="">
                    <div className="hover:drop-shadow-md hover:cursor-pointer">
                      ▶️
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="container w-[50px] h-[50px] bg-rose-500 rounded-full"></div>
                    <p className="text-slate-600">Goals</p>
                  </div>

                  <div className="">
                    <div className="hover:drop-shadow-md hover:cursor-pointer">
                      ▶️
                    </div>
                  </div>
                </div>
              </div>
              <div className="customerfeedback overflow-y-scroll p-5 w-full h-[250px] rounded-lg bg-slate-300">
                <p className="font-semibold font-lg text-slate-600 mb-5">
                  Customer Feedback
                </p>
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
                <div>
                  <div className="customer w-[150px] flex space-x-2 items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
                      className="w-[30px] h-[30px]"
                      alt=""
                    />
                    <p>Lorem Ipsum</p>
                  </div>
                  <p className="text-xs w-full text-slate-700">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
                <hr className="border-1 my-2 border-slate-600" />
              </div>
            </div>

            {/* <div>
          
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
