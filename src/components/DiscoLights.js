import './DiscoLights.scss';
import {ReactComponent as WhiteEllipse} from "../assets/white-ellipse.svg";

const DiscoCircle = ({layer}) => {
  const numCircles = layer * 8;

  return [...Array(layer).keys()].map(() => [...Array(numCircles).keys()].map((_, index) => {
    let rotationDeg = 360 * ((index + 1) / numCircles - 1);
    let height = (index + 30) * 20;

    let styles = {
      height: `${height}px`,
      top: `-${height / 2}px`,
      position: 'absolute',
      transform: `rotate(${rotationDeg}deg)`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
    
    return (
      <div style={styles}>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <div style={{height: '10px', width: '10px'}}/>
        <div style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
        <WhiteEllipse style={{height: '10px', width: '10px'}}/>
      </div>
    )
  }))
}

const DiscoLights = () => {
  return (
      <div className="discoLights">
        <DiscoCircle layer={5} />
        <div className="discoLights-animation"></div>
      </div>
    );
}

export default DiscoLights;
