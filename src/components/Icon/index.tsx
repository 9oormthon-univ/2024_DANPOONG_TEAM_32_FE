import DollarIcon from '@assets/svg/dollor-icon.svg?react';
import CityIcon from '@assets/svg/city-icon.svg?react';
import HouseIcon from '@assets/svg/red-house-icon.svg?react';
import TempleIcon from '@assets/svg/temple-icon.svg?react';
import PhoneIcon from '@assets/svg/phone-icon.svg?react';
import CommetIcon from '@assets/svg/comet-icon.svg?react';
import CallIcon from '@assets/svg/call.svg?react';
import GiftBoxIcon from '@assets/svg/gift-box.svg?react';
import ArrowClockwise from '@assets/svg/arrow-clockwise.svg?react';
import MyMarkerIcon from '@assets/svg/my-marker.svg?react';
import SelectedMarkerIcon from '@assets/svg/selected-marker.svg?react';
import MarkerIcon from '@assets/svg/marker.svg?react';
import MyLocationIcon from '@assets/svg/my-location.svg?react';
import CloseBtnIcon from '@assets/svg/close-btn.svg?react';
import DevelopingIcon from '@assets/svg/tool.svg?react';
import OnboardingFinishIcon from '@assets/svg/pangpare.svg?react';

const iconMap = {
	DollarIcon,
	CityIcon,
	HouseIcon,
	TempleIcon,
	PhoneIcon,
	CommetIcon,
	CallIcon,
	GiftBoxIcon,
	ArrowClockwise,
	MyMarkerIcon,
	SelectedMarkerIcon,
	MarkerIcon,
	MyLocationIcon,
	CloseBtnIcon,
	DevelopingIcon,
	OnboardingFinishIcon,
	// svg 파일 추가..
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
