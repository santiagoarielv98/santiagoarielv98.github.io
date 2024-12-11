import { techs } from "@/globals/technologies";
import { Badge } from "./ui/badge";

interface TechIconProps {
  name: string;
}

const TechIcon = ({ name }: TechIconProps) => {
  const { name: iconName, icon: Icon } = techs[name] ?? techs["code"];
  return (
    <Badge variant="secondary" className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5" />
      {iconName}
    </Badge>
  );
};

export default TechIcon;
