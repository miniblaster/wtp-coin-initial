interface IContentCopySVGProps {
  width?: string;
  height?: string;
  color?: string;
}

export default function ContentCopySVG({
  width = "20",
  height = "20",
  color = "white",
}: IContentCopySVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.916 16.6665H4.58268V5.83317C4.58268 5.37484 4.20768 4.99984 3.74935 4.99984C3.29102 4.99984 2.91602 5.37484 2.91602 5.83317V16.6665C2.91602 17.5832 3.66602 18.3332 4.58268 18.3332H12.916C13.3743 18.3332 13.7493 17.9582 13.7493 17.4998C13.7493 17.0415 13.3743 16.6665 12.916 16.6665ZM17.0827 13.3332V3.33317C17.0827 2.4165 16.3327 1.6665 15.416 1.6665H7.91602C6.99935 1.6665 6.24935 2.4165 6.24935 3.33317V13.3332C6.24935 14.2498 6.99935 14.9998 7.91602 14.9998H15.416C16.3327 14.9998 17.0827 14.2498 17.0827 13.3332ZM15.416 13.3332H7.91602V3.33317H15.416V13.3332Z"
        fill={color}
      />
    </svg>
  );
}
