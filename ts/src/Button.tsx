import { BACKGROUND_COLOR, BORDER_RADIUS } from "./styles/colors";

type TButtonProps = {
  backgroundColor: keyof typeof BACKGROUND_COLOR;
  borderRadius: keyof typeof BORDER_RADIUS;
};

const Button = ({ backgroundColor, borderRadius }: TButtonProps) => {
  return (
    <button
      style={{
        padding: "10px 45px",
        color: "white",
        backgroundColor: BACKGROUND_COLOR[backgroundColor],
        borderRadius: BORDER_RADIUS[borderRadius],
        border: "none",
      }}
    >
      Button
    </button>
  );
};

export default Button;

/* type TButtonProps = {
  backgroundColor?: "Primary" | "Secondary";
  borderRadius?: "Hard" | "Smooth" | "Circle";

  //backgroundColor?: "#205BF3" | "#478DF5";
  //borderRadius?: "5px" | "10px";
};

const Button = ({ backgroundColor, borderRadius }: TButtonProps) => {
  const obj: {
    Primary: "#205BF3";
    Secondary: "#478DF5";
  } = { Primary: "#205BF3", Secondary: "#478DF5" };
  const obj1: {
    Hard: "0px";
    Smooth: "5px";
    Circle: "10px";
  } = {
    Hard: "0px",
    Smooth: "5px",
    Circle: "10px",
  };

  return (
    <button
      style={{
        padding: "10px 45px",
        color: "white",
        borderRadius: obj1[borderRadius ?? "Hard"],
        backgroundColor: obj[backgroundColor ?? "Primary"],
      }}
    >
      버튼
    </button>
  );
};

export default Button;
 */
