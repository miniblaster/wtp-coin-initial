interface IBuyWETPIconSVGProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function BuyWETPIconSVG({
  width = "25",
  height = "25",
  color = "white",
}: IBuyWETPIconSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7656 18C13.7656 17.45 13.3156 17 12.7656 17H3.76562V11H21.7656V5C21.7656 3.9 20.8656 3 19.7656 3H3.76562C2.65562 3 1.77562 3.89 1.77562 5L1.76562 17C1.76562 18.11 2.65562 19 3.76562 19H12.7656C13.3156 19 13.7656 18.55 13.7656 18ZM19.7656 7H3.76562V5H19.7656V7ZM19.7656 21C19.2156 21 18.7656 20.55 18.7656 20V18H16.7656C16.2156 18 15.7656 17.55 15.7656 17C15.7656 16.45 16.2156 16 16.7656 16H18.7656V14C18.7656 13.45 19.2156 13 19.7656 13C20.3156 13 20.7656 13.45 20.7656 14V16H22.7656C23.3156 16 23.7656 16.45 23.7656 17C23.7656 17.55 23.3156 18 22.7656 18H20.7656V20C20.7656 20.55 20.3156 21 19.7656 21Z"
        fill={color}
      />
    </svg>
  );
}
