import { FC } from "react";
import giddaLogo from "../../assets/svg/GiddaLogo.svg";

interface LogoProps {
  width?: string;
}

export const Logo: FC<LogoProps> = ({ width }) => {
  return <img src={giddaLogo} alt="Logo" style={{ width: width }} />;
};
