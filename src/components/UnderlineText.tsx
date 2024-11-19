interface UnderlineTextProps {
	text: string;
}

export default function UnderlineText({ text }: UnderlineTextProps) {
	return <span className="underline decoration-[#CFEEF0] decoration-[11px] underline-offset-[-6px]">{text}</span>;
}
