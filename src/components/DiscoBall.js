import './DiscoBall.scss';
import DiscoLights from "./DiscoLights";

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
        <DiscoBallSphere />
        <DiscoLights />
      </div>
    );
}

export default DiscoBall;
