import { Feather } from "@expo/vector-icons";

type Props = typeof Feather;

interface IconProps extends Props {
  name: string;
  size: number;
  color: string;
}

export const Icon = ({ name, size, color, ...rest }: IconProps) => {
  return <Feather name={name} size={size} {...rest} />;
};
