import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import "./Screen.css";

const Screen = ({ value }) => {
return <div className="screen" mode="single" max={70}>
{value}
</div>
};

<Screen value={calc.num ? calculateNewValue.num : calc.res}/>

export default Screen;
