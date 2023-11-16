import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Button, Img, Text } from "components";

import { useContext } from "react";
import DataContext from "ContextAPI/DataState";
const Dashboardv4 = () => {
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
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex md:gap-10 items-center justify-between md:px-5 px-[60px] py-5 rounded-tl-[20px] rounded-tr-[20px] shadow-bs w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img
              className="h-14 md:h-auto sm:mt-0  object-cover"
              src={businessMetaData.faviconUrl}
              alt="kkremovebgprevi"
            />
            <Text
              className="bg-clip-text bg-gradient  text-base text-center text-transparent w-auto"
              size="txtPoppinsSemiBold16"
            >
              {(businessMetaData?.name?.charAt(0)?.toUpperCase() ?? "") +
                (businessMetaData?.name?.slice(1) ?? "")}
            </Text>
          </div>
          <div className="flex flex-row font-lato gap-8 items-center justify-start w-auto">
            <Text
              className="capitalize text-black-900_87 text-sm w-auto"
              size="txtLatoRegular14"
            >
              Home
            </Text>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="capitalize text-blue_gray-700 text-sm w-auto"
                size="txtLatoSemiBold14"
              >
                Blogs
              </Text>
              <Text
                className="bg-gray-800 justify-center px-2 py-[3px] rounded-[11px] text-center text-white-A700 text-xs w-auto"
                size="txtLatoSemiBold12"
              >
                New
              </Text>
            </div>
          </div>
        </header>
        <div className="flex flex-col font-lato h-[1239px] md:h-auto items-start justify-start max-w-[1440px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 h-[1237px] md:h-auto items-start justify-start max-w-[1440px] w-full">
            <div className="bg-white-A700 flex flex-1 flex-col gap-8 h-[1237px] md:h-auto items-start justify-start max-w-[1072px] pl-[140px] pr-11 md:px-5 py-10 w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtLatoBold20"
                >
                  {(businessMetaData?.name?.charAt(0)?.toUpperCase() ?? "") +
                    (businessMetaData?.name?.slice(1) ?? "")}{" "}
                  Blogs
                </Text>
              </div>
              <div className="md:gap-5 gap-[72px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-full">
                {blogs.slice(0, 3).map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleClickBlog(index);
                    }}
                  >
                    <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                      <Img
                        className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                        src={item.imagesUrl[0].imageUrl}
                        alt="rectangleThirtyEight"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                          {blogs[index].seoKeywords.map((item, index) => (
                            <Text
                              className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                              size="txtWorkSansRomanMedium14"
                            >
                              {item}
                            </Text>
                          ))}
                          {/* <Text
                          className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                          size="txtWorkSansRomanMedium14"
                        >
                          Beverages
                        </Text> */}
                        </div>
                        <Text
                          className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                          size="txtLatoSemiBold13"
                        >
                          {/* How to Make Iced Matcha Latte From Home - 3 Steps. */}
                          {item.title}
                        </Text>
                        <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start w-auto">
                            <Text
                              className="text-[10px] text-blue_gray-700 w-auto"
                              size="txtLatoRegular10"
                            >
                              November {10 * (index + 1)}, 2022
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-auto">
                            {/* <Text
                            className="text-[10px] text-blue_gray-700 w-auto"
                            size="txtLatoRegular10"
                          >
                            8 mins read
                          </Text> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                  <Img
                    className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                    src="images/img_rectangle38_175x246.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                      size="txtLatoSemiBold13"
                    >
                      How to Make Iced Matcha Latte From Home - 3 Steps.
                    </Text>
                    <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          October 10, 2023
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          8 mins read
                        </Text>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                  <Img
                    className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                    src="images/img_rectangle38_1.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                      size="txtLatoSemiBold13"
                    >
                      How to Make Iced Matcha Latte From Home - 3 Steps.
                    </Text>
                    <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          October 10, 2023
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          8 mins read
                        </Text>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                  <Img
                    className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                    src="images/img_rectangle38_2.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                      size="txtLatoSemiBold13"
                    >
                      How to Make Iced Matcha Latte From Home - 3 Steps.
                    </Text>
                    <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          October 10, 2023
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          8 mins read
                        </Text>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                  <Img
                    className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                    src="images/img_rectangle38_3.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                      size="txtLatoSemiBold13"
                    >
                      How to Make Iced Matcha Latte From Home - 3 Steps.
                    </Text>
                    <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          October 10, 2023
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          8 mins read
                        </Text>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bg-white-A700 border border-gray-200 border-solid flex flex-1 flex-col gap-[10.94px] items-center justify-center pb-[10.94px] px-[10.94px] rounded-[13px] w-full">
                  <Img
                    className="h-[175px] md:h-auto object-cover rounded-tl-[13px] rounded-tr-[13px] w-[246px] sm:w-full"
                    src="images/img_rectangle38_4.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row font-worksans gap-[10.72px] items-start justify-start w-auto">
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                      <Text
                        className="bg-indigo-A200_0c justify-center px-1.5 rounded text-indigo-A200 text-sm w-auto"
                        size="txtWorkSansRomanMedium14"
                      >
                        Beverages
                      </Text>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[226px] md:max-w-full text-[13px] text-gray-900_01"
                      size="txtLatoSemiBold13"
                    >
                      How to Make Iced Matcha Latte From Home - 3 Steps.
                    </Text>
                    <div className="flex flex-col font-lato gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          October 10, 2023
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <Text
                          className="text-[10px] text-blue_gray-700 w-auto"
                          size="txtLatoRegular10"
                        >
                          8 mins read
                        </Text>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col h-[1237px] md:h-auto items-start justify-between pl-11 pr-[140px] md:px-5 py-10">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-14 md:h-auto sm:mt-0  object-cover"
                    src={businessMetaData.faviconUrl}
                    alt="coffee"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-900_02 text-xl w-full"
                      size="txtLatoBold20Gray90002"
                    >
                      {(businessMetaData?.name?.charAt(0)?.toUpperCase() ??
                        "") + (businessMetaData?.name?.slice(1) ?? "")}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-[13px] text-gray-600 w-auto"
                    size="txtLatoRegular13"
                  >
                    <span className="text-gray-600 font-lato text-left font-normal">
                      About us{" "}
                    </span>
                    <span className="text-gray-600 font-lato text-left font-bold">
                      ☕️
                    </span>
                  </Text>
                  <Text
                    className="leading-[170.00%] max-w-[208px] md:max-w-full text-[13px] text-blue_gray-700"
                    size="txtLatoMedium13"
                  >
                    <>
                      {businessMetaData.summary
                        .split(" ")
                        .slice(0, 100)
                        .join(" ") +
                        (businessMetaData.summary.split(" ").length > 150
                          ? "..."
                          : "")}
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-[13px] text-gray-600 w-auto"
                  >
                    <Text size="txtLatoRegular13">Contact us</Text>
                  </a>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Button
                      href={businessMetaData.facebookLink}
                      className="bg-blue_gray-50 flex h-8 items-center justify-center p-[7px] rounded-[50%] w-8"
                    >
                      {/* <Img
                        className="h-4"
                        src="images/img_instagram.svg"
                        alt="instagram"
                      /> */}
                      <Img
                        className="h-[34px]"
                        src="/images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                    <Button
                      href={businessMetaData.linkedinLink}
                      className="bg-blue_gray-50 flex h-8 items-center justify-center p-2 rounded-[50%] w-8"
                    >
                      <Img
                        className="h-[34px]"
                        src="/images/img_linkedin.svg"
                        alt="linkedin"
                      />{" "}
                    </Button>
                    <Button
                      href={businessMetaData.twitterLink}
                      className="bg-blue_gray-50 flex h-8 items-center justify-center p-2 rounded-[50%] w-8"
                    >
                      {/* <Img
                        className="h-4"
                        src="images/img_whatsapp.svg"
                        alt="whatsapp"
                      /> */}
                      <Img
                        className="h-[34px]"
                        src="/images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      href={businessMetaData.redditLink}
                      className="bg-blue_gray-50 flex h-8 items-center justify-center p-2 rounded-[50%] w-8"
                    >
                      {/* <Img
                        className="h-[15px]"
                        src="images/img_pinterest.svg"
                        alt="pinterest"
                      /> */}
                      <Img
                        className="h-[34px]"
                        src="/images/img_reddit.svg"
                        alt="reddit"
                      />
                    </Button>
                    <Img
                      className="rounded-[50%] w-8"
                      src="images/email.png"
                      alt="volume"
                    />
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

export default Dashboardv4;
