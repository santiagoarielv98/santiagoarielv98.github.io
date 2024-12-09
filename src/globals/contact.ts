import GitHubIcon from "@/components/icons/GitHubIcon";
import LInkedlnIcon from "@/components/icons/LInkedlnIcon";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import { Mail, Phone } from "lucide-react";

export const contactInfo = [
  {
    icon: GitHubIcon,
    label: "ariaLabel.github",
    value: "github.com/tuusuario",
    href: "https://github.com/tuusuario",
  },
  {
    icon: LInkedlnIcon,
    label: "ariaLabel.linkedin",
    value: "linkedin.com/in/tuusuario",
    href: "https://linkedin.com/in/tuusuario",
  },
  {
    icon: WhatsappIcon,
    label: "ariaLabel.whatsapp",
    value: "+1234567890",
    href: "https://wa.me/1234567890",
  },
  {
    icon: Phone,
    label: "ariaLabel.phone",
    value: "+1234567890",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    label: "ariaLabel.email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
  },
];
