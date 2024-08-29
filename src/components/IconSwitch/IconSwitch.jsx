import "./IconSwitch";
import PropsTypes from "prop-types";

export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className="icon-switch">
      <span className="material-icons" onClick={(e) => onSwitch(e)}>
        {icon}
      </span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropsTypes.string.isRequired,
  onSwitch: PropsTypes.func.isRequired,
};
