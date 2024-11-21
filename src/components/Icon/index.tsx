import DollarIcon from '@assets/svg/dollor-icon.svg?react';
import CityIcon from '@assets/svg/city-icon.svg?react';
import HouseIcon from '@assets/svg/red-house-icon.svg?react';
import TempleIcon from '@assets/svg/temple-icon.svg?react';
import PhoneIcon from '@assets/svg/phone-icon.svg?react';
import CommetIcon from '@assets/svg/comet-icon.svg?react';

const iconMap = {
	DollarIcon,
	CityIcon,
	HouseIcon,
	TempleIcon,
	PhoneIcon,
	CommetIcon,
	// Additional SVG mappings...
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
	name: IconName;
	className?: string;
}

export default function Icon({ name, className = '' }: IconProps) {
	const SvgIcon = iconMap[name]; // Safely access the icon by its name
	return SvgIcon ? <SvgIcon className={className} /> : null;
}
