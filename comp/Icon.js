import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({
  icon = faSearch,
  handleClick = () => {},
  size = "sm",
}) {
  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={handleClick}
      size={size}
      style={{
        background: "transparent",
      }}
    />
  );
}
