import React from "react";

const sizeClasses = {
  txtLatoRegular10: "font-lato font-normal",
  txtLatoSemiBold14: "font-lato font-semibold",
  txtLatoSemiBold13: "font-lato font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtLatoSemiBold12: "font-lato font-semibold",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular13: "font-lato font-normal",
  txtLatoBold20: "font-bold font-lato",
  txtLatoBold20Gray90002: "font-bold font-lato",
  txtLatoMedium13: "font-lato font-medium",
  txtWorkSansRomanMedium14: "font-medium font-worksans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
