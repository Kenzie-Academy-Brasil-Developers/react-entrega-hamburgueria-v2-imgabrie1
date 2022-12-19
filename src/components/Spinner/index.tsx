import { FaSpinner } from "react-icons/fa";
import { iStyledPropsSpinner, StyledSpinner } from "./StyledSpinner";

export const Spinner = ({ small, medium, big }: iStyledPropsSpinner) => {
  return (
    <StyledSpinner
      small={small || false}
      medium={medium || false}
      big={big || false}
    >
      <FaSpinner />
    </StyledSpinner>
  );
};
