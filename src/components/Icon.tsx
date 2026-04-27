import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export type IconName = 'linkedin' | 'github' | 'email' | 'mail';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const iconMap: Record<IconName, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  mail: HiMail,
};

export default function Icon({ name, size = 20, className = '' }: IconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
