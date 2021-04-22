import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
const ProgressCircle = () => {
  return (
    <div className="progress-bar" style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: "#F39C12",
          textColor: "#000000",
          trailColor: "#F0F0F0",
          backgroundColor: "#000000",
        })}
      />
    </div>
  );
};

export default ProgressCircle;
