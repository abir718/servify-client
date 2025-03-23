import { Scrollbars } from "react-custom-scrollbars-2";

const CustomScrollbar = ({ children }) => {
  return (
    <Scrollbars
      autoHide
      style={{ 
        width: "100%", 
        height: "100%", 
        background: "white",
        position: "relative", 
        zIndex: 60 
      }}
      renderThumbVertical={(props) => (
        <div {...props} className="bg-[#2C485F] rounded-md" />
      )}
    >
      <div className="min-h-full">{children}</div>
    </Scrollbars>
  );
};

export default CustomScrollbar;
