import ShapeImg from "../public/image/shape.png";
import Image from "next/image";

export default function Shape() {
  return (
    <>
      {/* shape */}
      <div>
        <img src={ShapeImg.src} className="absolute top-4 -z-10" />

        <div>
          <svg
            width="200"
            height="300"
            viewBox="0 0 226 327"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0 top-56 -z-10"
          >
            <path
              d="M258.909 243.575C259.069 252.785 252.917 260.914 244.009 263.262L38.7286 317.365C24.02 321.242 10.5392 307.931 14.2287 293.174L69.1862 73.3699C71.0769 65.8081 77.1885 60.0336 84.8453 58.5746L231.803 30.5719C243.989 28.2498 255.328 37.4673 255.544 49.8709L258.909 243.575Z"
              fill="#005D6C"
            />
            <path
              d="M178.406 122.856C178.566 132.068 172.412 140.197 163.502 142.544L62.2914 169.197C47.582 173.071 34.1038 159.757 37.7965 145.001L65.5087 34.2652C67.4008 26.7043 73.513 20.9313 81.1695 19.4735L152.97 5.80255C165.155 3.48239 176.492 12.6996 176.707 25.1021L178.406 122.856Z"
              fill="#FFD233"
            />
            <path
              d="M149.241 324.501L145.557 313.799L134.24 313.996L143.28 307.185L139.596 296.483L148.867 302.976L157.906 296.165L154.596 306.988L163.867 313.481L152.551 313.678L149.241 324.501Z"
              fill="#FFD233"
            />
          </svg>
        </div>

        {/* garis */}
        <svg
          width="564"
          height="211"
          viewBox="0 0 564 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 -z-10"
        >
          <path
            d="M2 -19.3648C43.5799 -46.1981 151.148 -62.4648 248.781 87.1352C346.415 236.735 523.444 149.469 599.755 87.1352"
            stroke="#005D6C"
            stroke-width="4"
          />
          <path
            d="M2 -19.3648C43.5799 -46.1981 151.148 -62.4648 248.781 87.1352C346.415 236.735 523.444 149.469 599.755 87.1352"
            stroke="url(#paint0_linear_8_4)"
            stroke-width="4"
          />
          <path
            d="M1.99998 28.2705C43.5799 1.43714 151.148 -14.8295 248.781 134.77C346.415 284.37 524.689 171.469 601 109.135"
            stroke="#005D6C"
            stroke-width="4"
          />
          <path
            d="M1.99998 28.2705C43.5799 1.43714 151.148 -14.8295 248.781 134.77C346.415 284.37 524.689 171.469 601 109.135"
            stroke="url(#paint1_linear_8_4)"
            stroke-width="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_8_4"
              x1="599.962"
              y1="66.6353"
              x2="3.03571"
              y2="75.1629"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8_4"
              x1="601.208"
              y1="124.635"
              x2="2.89458"
              y2="131.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* endshape */}
    </>
  );
}
