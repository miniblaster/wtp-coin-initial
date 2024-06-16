interface ISendIconSVGProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function SendIconSVG({
  color = "#E8EAED",
  width = "20",
  height = "20",
}: ISendIconSVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66667 10.0002C1.66667 10.9446 1.90278 11.8092 2.375 12.5939C2.84722 13.3786 3.47917 13.9793 4.27083 14.396C4.46528 14.5071 4.60764 14.6668 4.69792 14.8752C4.78819 15.0835 4.79167 15.2918 4.70833 15.5002C4.625 15.7224 4.47917 15.8821 4.27083 15.9793C4.0625 16.0766 3.86111 16.0696 3.66667 15.9585C2.58333 15.4029 1.70139 14.6009 1.02083 13.5522C0.340278 12.5036 0 11.3196 0 10.0002C0 8.69461 0.329861 7.521 0.989583 6.47933C1.64931 5.43766 2.51389 4.63905 3.58333 4.0835C3.77778 3.97238 3.98264 3.96197 4.19792 4.05225C4.41319 4.14252 4.56944 4.29877 4.66667 4.521C4.76389 4.71544 4.77083 4.91683 4.6875 5.12516C4.60417 5.3335 4.46528 5.49322 4.27083 5.60433C3.47917 6.021 2.84722 6.62169 2.375 7.40641C1.90278 8.19113 1.66667 9.05572 1.66667 10.0002ZM11.6667 16.6668C9.81944 16.6668 8.24653 16.0175 6.94792 14.7189C5.64931 13.4203 5 11.8474 5 10.0002C5 8.15294 5.64931 6.58002 6.94792 5.28141C8.24653 3.9828 9.81944 3.3335 11.6667 3.3335C12.4444 3.3335 13.1806 3.4585 13.875 3.7085C14.5694 3.9585 15.2014 4.30572 15.7708 4.75016C15.9514 4.88905 16.0417 5.06961 16.0417 5.29183C16.0417 5.51405 15.9583 5.7085 15.7917 5.87516C15.6389 6.02794 15.4479 6.11127 15.2188 6.12516C14.9896 6.13905 14.7778 6.07655 14.5833 5.93766C14.1667 5.63211 13.7118 5.39947 13.2188 5.23975C12.7257 5.08002 12.2083 5.00016 11.6667 5.00016C10.2778 5.00016 9.09722 5.48627 8.125 6.4585C7.15278 7.43072 6.66667 8.61127 6.66667 10.0002C6.66667 11.3891 7.15278 12.5696 8.125 13.5418C9.09722 14.5141 10.2778 15.0002 11.6667 15.0002C12.2083 15.0002 12.7257 14.9203 13.2188 14.7606C13.7118 14.6009 14.1667 14.3682 14.5833 14.0627C14.7778 13.9238 14.9896 13.8613 15.2188 13.8752C15.4479 13.8891 15.6389 13.9724 15.7917 14.1252C15.9583 14.2918 16.0417 14.4863 16.0417 14.7085C16.0417 14.9307 15.9514 15.1113 15.7708 15.2502C15.2014 15.6946 14.5694 16.0418 13.875 16.2918C13.1806 16.5418 12.4444 16.6668 11.6667 16.6668ZM16.8333 10.8335H11.6667C11.4306 10.8335 11.2326 10.7536 11.0729 10.5939C10.9132 10.4342 10.8333 10.2363 10.8333 10.0002C10.8333 9.76405 10.9132 9.56613 11.0729 9.40641C11.2326 9.24669 11.4306 9.16683 11.6667 9.16683H16.8333L16.0833 8.41683C15.9306 8.26405 15.8542 8.06961 15.8542 7.8335C15.8542 7.59738 15.9306 7.40294 16.0833 7.25016C16.2361 7.09738 16.4306 7.021 16.6667 7.021C16.9028 7.021 17.0972 7.09738 17.25 7.25016L19.4167 9.41683C19.5833 9.5835 19.6667 9.77794 19.6667 10.0002C19.6667 10.2224 19.5833 10.4168 19.4167 10.5835L17.25 12.7502C17.0972 12.9029 16.9028 12.9793 16.6667 12.9793C16.4306 12.9793 16.2361 12.9029 16.0833 12.7502C15.9306 12.5974 15.8542 12.4029 15.8542 12.1668C15.8542 11.9307 15.9306 11.7363 16.0833 11.5835L16.8333 10.8335Z"
        fill={color}
      />
    </svg>
  );
}
