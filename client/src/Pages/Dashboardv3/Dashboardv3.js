import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";

// import { Button, Img, List, Text } from "";
import Button from "./Button";
import Img from "./Img";
import Input from "./Input";
import Line from "./Line";
import List from "./List";
import PagerIndicator from "./PageIndicator";
import Text from "./Text";
import Typewriter from "typewriter-effect";

// Import ContextAPI
import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
// End Import ContextAPI
const Dashboardv3 = () => {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const navigate = useNavigate();
  const dataContext = useContext(DataContext);
  const [blogs, setBlogs] = useState(dataContext.blogs);
  const [businessMetaData, setBusinessMetaData] = useState(
    dataContext.businessMetaData
  );

  // businessMetaData;
  useEffect(() => {
    const fetchBlogs = async () => {
      if (!dataContext.startup) {
        try {
          const output = await dataContext.fetchBlogs();
          if (output) {
            setBlogs(output.blogs);
            setBusinessMetaData(output.businessMetaData);
          } else {
            navigate("/page-not-found");
          }
          dataContext.setStartUpFunction({ data: true });
        } catch (error) {
          console.error("Error fetching blogs:", error);
          // Handle error appropriately
        }
      }
    };

    fetchBlogs();
  }, [dataContext]); // Add dependencies here if there are any that should trigger re-execution of the effect

  const handleClickBlog = (index) => {
    console.log("Selected Blog: ", index);
    dataContext.setSelectedBlogFunction({ data: index });
    navigate("/dashboard/blogpage");
  };

  const handleClickNext = () => {
    navigate("/pricing");
  };
  console.log("Blogs on Dashboard ", blogs);

  return (
    <>
      <div className="bg-gray-200_04 flex flex-col font-dmsans items-center justify-start mx-auto p-3 w-full">
        <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start max-w-[1241px] mb-[23px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full mb-[50px]">
              <div className="flex items-center">
                <Img
                  className="h-14 md:h-auto sm:mt-0 mt-[35px] object-cover"
                  src={businessMetaData.faviconUrl}
                  alt="imageSixtySeven"
                />
                <div className="flex  items-center">
                  <Text
                    className="text-[24px] pt-[30px] text-blue_gray-900_04 sm:text-xl md:text-2xl ml-4"
                    size="txtDMSansMedium24"
                  >
                    {/* {businessMetaData.name.charAt(0).toUpperCase() +
                      businessMetaData.name.slice(1)} */}
                    {(businessMetaData?.name?.charAt(0)?.toUpperCase() ?? "") +
                      (businessMetaData?.name?.slice(1) ?? "")}
                  </Text>
                </div>
              </div>
              {/* <Img
                className="h-[97px] md:h-auto object-cover"
                src="images/img_screenshot202.png"
                alt="screenshot202"
              /> */}
              <div className="bg-gray-200_04 pt-[30px] border border-solid border-white-A700_14 flex md:flex-1 flex-col items-end justify-start p-[5px] rounded-[24px] md:w-full">
                <div className="flex flex-col items-center justify-start mr-2  md:w-full">
                  <Button
                    onClick={() => {
                      handleClickNext();
                    }}
                    className="cursor-pointer font-semibold min-w-[112px] rounded-[19px] text-[13px] text-center tracking-[0.20px]"
                    color="indigo_900"
                    size="md"
                  >
                    Try For Free{" "}
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-2">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                <>
                  About{" "}
                  {businessMetaData.name.charAt(0).toUpperCase() +
                    businessMetaData.name.slice(1)}
                </>
              </Text>
            </div> */}
            {/* <div className="border border-gray-500_02 border-solid flex md:flex-col flex-row gap-[7px] md:h-auto items-end justify-end max-w-[1208px] ml-1 md:ml-[0] mt-[41px] p-6 sm:px-5 rounded-lg w-full">
              <Text
                className="leading-[30.00px] max-w-[1157px] md:max-w-full text-blue_gray-500 text-lg max-h-[15.625rem] overflow-y-scroll"
                size="txtDMSansRegular18"
              >
                {businessMetaData.summary}
              </Text>
            </div> */}
            {/* <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[100px] ">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                {businessMetaData.name.charAt(0).toUpperCase() +
                  businessMetaData.name.slice(1)}
                ’s Blogspace
              </Text>
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "50px",
              }}
            >
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                {businessMetaData.name.charAt(0).toUpperCase() +
                  businessMetaData.name.slice(1)}
                ’s Blogspace
              </Text>
              <Text
                className="text-[22px] text-blue_gray-900_04"
                size="txtDMSansMedium22"
              >
                2023 October
              </Text>
            </div>
          </div>
          <div className="font-worksans h-[2158px] md:h-[3240px] sm:h-[4988px] relative w-full">
            <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
              <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] relative w-full">
                <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      {/* Main Container for blogs */}
                      <div className="flex md:flex-1 flex-col h-[696px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[147px] items-start justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            {blogs.slice(0, 3).map((item, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  handleClickBlog(index);
                                }}
                              >
                                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                                  <div className="h-60 relative w-full">
                                    <Img
                                      className="h-60 m-auto object-cover rounded-md w-full"
                                      src={item.imagesUrl[0].imageUrl}
                                      alt="rectangleThirtyEight"
                                    />
                                    {/* <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                      <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                        <Img
                                          className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                          src="images/img_graph.png"
                                          alt="graph"
                                        />
                                        <div className="flex flex-col items-center justify-between w-[72px]">
                                          <Text
                                            className="text-[10px] text-center text-green-A700"
                                            size="txtDMSansBold10"
                                          >
                                            60
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="text-[9px] text-center text-gray-900_03"
                                        size="txtWorkSansRomanRegular9"
                                      >
                                        <span className="text-gray-900_03 font-worksans font-normal">
                                          <>
                                            Overall score
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-gray-900_03 font-worksans font-bold">
                                          High
                                        </span>
                                      </Text>
                                    </div> */}
                                  </div>
                                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                                        <div className="flex flex-row gap-3 items-center justify-start w-[85%] md:w-full">
                                          {blogs[index].seoKeywords.map(
                                            (item, index) => (
                                              <>
                                                <Button
                                                  className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                                  shape="round"
                                                  color="indigo_A200_0c"
                                                  // style={{
                                                  //   backgroundColor: `rgb(75 107 251  )`,
                                                  //   color: "white",
                                                  // }}
                                                  style={{
                                                    // backgroundColor: `rgb(75 107 251  )`,
                                                    color: `rgb(75 107 251  )`,
                                                  }}
                                                >
                                                  {item}
                                                </Button>
                                              </>
                                            )
                                          )}
                                          {/* <Button
                                            className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                            shape="round"
                                            color="indigo_A200_0c"
                                          >
                                            Technology
                                          </Button>
                                          <Button
                                            className="cursor-pointer font-medium min-w-[182px] rounded-md text-center text-sm"
                                            shape="round"
                                            color="indigo_A200_0c"
                                          >
                                            Environmental Changes
                                          </Button> */}
                                        </div>
                                        <Text
                                          className="leading-[28.00px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                                          size="txtWorkSansSemiBold24"
                                        >
                                          {item.title}
                                          {/* <Typewriter
                                            options={{
                                              strings: [item.title],
                                              autoStart: true,
                                              loop: true,
                                            }}
                                          /> */}
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_03 w-auto"
                                        size="txtWorkSansRomanRegular16"
                                      >
                                        October {10 * (index + 1)}, 2022
                                      </Text>
                                    </div>
                                    <div>
                                      {index == 0 && (
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                            <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                16,000
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_signal.svg"
                                                alt="signal"
                                              />
                                              <Text
                                                className="text-[11px] text-green-A700 w-auto"
                                                size="txtPoppinsRegular11"
                                              >
                                                High
                                              </Text>
                                            </div>
                                            <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                Competition
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_trash.svg"
                                                alt="trash"
                                              />
                                              <Text
                                                className="text-[11px] text-amber-A700 w-auto"
                                                size="txtPoppinsRegular11AmberA700"
                                              >
                                                Medium
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {index == 1 && (
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                            <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                10,000
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_trash.svg"
                                                alt="trash_One"
                                              />
                                              <Text
                                                className="text-[11px] text-amber-A700 w-auto"
                                                size="txtPoppinsRegular11AmberA700"
                                              >
                                                Medium
                                              </Text>
                                            </div>
                                            <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                Competition
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_skill.svg"
                                                alt="skill"
                                              />
                                              <Text
                                                className="text-[11px] text-deep_orange-A700 w-auto"
                                                size="txtPoppinsRegular11DeeporangeA700"
                                              >
                                                High
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {index == 2 && (
                                        <div className="flex flex-col items-start justify-start w-auto">
                                          <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                            <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                16,000
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_signal.svg"
                                                alt="signal_One"
                                              />
                                              <Text
                                                className="text-[11px] text-green-A700 w-auto"
                                                size="txtPoppinsRegular11"
                                              >
                                                High
                                              </Text>
                                            </div>
                                            <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                              <Text
                                                className="text-gray-900_04 text-xs w-auto"
                                                size="txtDMSansRegular12"
                                              >
                                                Competition
                                              </Text>
                                              <Img
                                                className="h-2.5 w-[11px]"
                                                src="images/img_trash.svg"
                                                alt="trash_Two"
                                              />
                                              <Text
                                                className="text-[11px] text-amber-A700 w-auto"
                                                size="txtPoppinsRegular11AmberA700"
                                              >
                                                Medium
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_240x360.png"
                                  alt="rectangleThirtyEight_One"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_One"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
                                  >
                                    <span className="text-gray-900_03 font-worksans font-normal">
                                      <>
                                        Overall score
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-gray-900_03 font-worksans font-bold">
                                      High
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                    <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        10000
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_trash.svg"
                                        alt="trash_One"
                                      />
                                      <Text
                                        className="text-[11px] text-amber-A700 w-auto"
                                        size="txtPoppinsRegular11AmberA700"
                                      >
                                        Medium
                                      </Text>
                                    </div>
                                    <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        Competition
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_skill.svg"
                                        alt="skill"
                                      />
                                      <Text
                                        className="text-[11px] text-deep_orange-A700 w-auto"
                                        size="txtPoppinsRegular11DeeporangeA700"
                                      >
                                        High
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_1.png"
                                  alt="rectangleThirtyEight_Two"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_Two"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
                                  >
                                    <span className="text-gray-900_03 font-worksans font-normal">
                                      <>
                                        Overall score
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-gray-900_03 font-worksans font-bold">
                                      High
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                    <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        16500
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_signal.svg"
                                        alt="signal_One"
                                      />
                                      <Text
                                        className="text-[11px] text-green-A700 w-auto"
                                        size="txtPoppinsRegular11"
                                      >
                                        High
                                      </Text>
                                    </div>
                                    <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        Competition
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_trash.svg"
                                        alt="trash_Two"
                                      />
                                      <Text
                                        className="text-[11px] text-amber-A700 w-auto"
                                        size="txtPoppinsRegular11AmberA700"
                                      >
                                        Medium
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          {/* <Text
                            className="text-[24px] text-end text-black-900"
                            size="txtDMSansBold15"
                          >
                            2023 November
                          </Text> */}
                          <div
                            style={{
                              textAlign: "right",
                              width: "100%",
                              height: "250px",
                              marginTop: "-100px",
                            }}
                          >
                            <Text
                              className="text-[22px] text-blue_gray-900_04"
                              size="txtDMSansMedium22"
                              style={{
                                display: "inline-block",
                                width: "100%",
                                textAlign: "right",
                              }}
                            >
                              2023 November
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col h-[703px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[111px] justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            {blogs.slice(3, 6).map((item, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  handleClickBlog(index + 3);
                                }}
                              >
                                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                                  <div className="h-60 relative w-full">
                                    <Img
                                      className="h-60 m-auto object-cover rounded-md w-full"
                                      src={item.imagesUrl[0].imageUrl}
                                      alt="rectangleThirtyEight"
                                    />
                                    {/* <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                    <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                      <Img
                                        className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                        src="images/img_graph.png"
                                        alt="graph"
                                      />
                                      <div className="flex flex-col items-center justify-between w-[72px]">
                                        <Text
                                          className="text-[10px] text-center text-green-A700"
                                          size="txtDMSansBold10"
                                        >
                                          60
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="text-[9px] text-center text-gray-900_03"
                                      size="txtWorkSansRomanRegular9"
                                    >
                                      <span className="text-gray-900_03 font-worksans font-normal">
                                        <>
                                          Overall score
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-gray-900_03 font-worksans font-bold">
                                        High
                                      </span>
                                    </Text>
                                  </div> */}
                                  </div>
                                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                                      {blogs[index + 3].seoKeywords.map(
                                        (item, index) => (
                                          <>
                                            <Button
                                              className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                              shape="round"
                                              color="indigo_A200_0c"
                                            >
                                              {item}
                                            </Button>
                                          </>
                                        )
                                      )}
                                      {/* <Button
                                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                        shape="round"
                                        color="indigo_A200_0c"
                                      >
                                        Technology
                                      </Button> */}
                                      <Text
                                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                        size="txtWorkSansSemiBold24"
                                      >
                                        {item.title}
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-auto">
                                      <Text
                                        className="text-base text-gray-500_03 w-auto"
                                        size="txtWorkSansRomanRegular16"
                                      >
                                        November {10 * (index + 1)}, 2022
                                      </Text>
                                    </div>
                                  </div>
                                  <div>
                                    {index == 0 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              16,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_signal.svg"
                                              alt="signal"
                                            />
                                            <Text
                                              className="text-[11px] text-green-A700 w-auto"
                                              size="txtPoppinsRegular11"
                                            >
                                              High
                                            </Text>
                                          </div>
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {index == 1 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              10,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash_One"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                          <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_skill.svg"
                                              alt="skill"
                                            />
                                            <Text
                                              className="text-[11px] text-deep_orange-A700 w-auto"
                                              size="txtPoppinsRegular11DeeporangeA700"
                                            >
                                              High
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                    {index == 2 && (
                                      <div className="flex flex-col items-start justify-start w-auto">
                                        <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                          <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              16,000
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_signal.svg"
                                              alt="signal_One"
                                            />
                                            <Text
                                              className="text-[11px] text-green-A700 w-auto"
                                              size="txtPoppinsRegular11"
                                            >
                                              High
                                            </Text>
                                          </div>
                                          <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                            <Text
                                              className="text-gray-900_04 text-xs w-auto"
                                              size="txtDMSansRegular12"
                                            >
                                              Competition
                                            </Text>
                                            <Img
                                              className="h-2.5 w-[11px]"
                                              src="images/img_trash.svg"
                                              alt="trash_Two"
                                            />
                                            <Text
                                              className="text-[11px] text-amber-A700 w-auto"
                                              size="txtPoppinsRegular11AmberA700"
                                            >
                                              Medium
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboardv3;
