import './DiscoBall.scss';

const DiscoBallRope = () => {
  return (<div className="discoBall-rope"></div>)
}

const DiscoBallSphere = () => {
  return (<div className="discoBall-sphere"></div>)
}

const DiscoLights = () => {
  
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
