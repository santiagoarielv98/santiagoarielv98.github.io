import { techs } from "@/globals/technologies";
import { Badge } from "./ui/badge";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  const { name: iconName, icon: Icon } = techs[name] ?? techs["code"];
  return (
    <Badge variant="secondary" className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5" />
      {iconName}
    </Badge>
  );
};

export default TechBadge;
