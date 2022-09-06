import './DiscoBall.scss';
import DiscoLights from "./DiscoLights";
import {ReactComponent as DiscoBallSVG} from "../assets/discoBall.svg";


const DiscoBallRope = () => {
  return (<div className="discoBall-rope"></div>)
}

const DiscoBallSphere = () => {
  return (<div className="discoBall-sphere"></div>)
}

const DiscoBall = () => {
  return (
      <div className="discoBall">
        <DiscoBallRope />
        <DiscoBallSVG />
        <DiscoLights />
      </div>
    );
}

export default DiscoBall;
