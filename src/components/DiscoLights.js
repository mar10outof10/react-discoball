import './DiscoLights.scss';
import {ReactComponent as WhiteEllipse} from "../assets/white-ellipse.svg";

const DiscoCircle = ({layer}) => {
  const height = `${layer * 20}px`;
  const numCircles = layer * 8;

  let styles = `height: ${height}px; position: absolute;`

  return [...Array(numCircles).keys()].map((_, index) => {
    styles = {
      height: `${height}px`,
      position: 'absolute',
      transform: `rotate(${360 * ((index + 1) / numCircles - 1)}deg)`,
    }
    return (
      <div style={styles}>
        <WhiteEllipse />
        <WhiteEllipse />
        <WhiteEllipse />
        <WhiteEllipse />
      </div>
    )
  })
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
