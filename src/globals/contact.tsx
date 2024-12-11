import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { me } from "./info";

export const contactInfo = [
  {
    icon: FaGithub,
    label: "ariaLabel.github",
    value: me.github.label,
    href: me.github.href,
  },
  {
    icon: FaLinkedin,
    label: "ariaLabel.linkedin",
    value: me.linkedin.label,
    href: me.linkedin.href,
  },
  {
    icon: FaWhatsapp,
    label: "ariaLabel.whatsapp",
    value: me.whatsapp.label,
    href: me.whatsapp.href,
  },
  {
    icon: FaPhone,
    label: "ariaLabel.phone",
    value: me.telephone.label,
    href: me.telephone.value,
  },
  {
    icon: FaEnvelope,
    label: "ariaLabel.email",
    value: me.email.label,
    href: me.email.value,
  },
];
