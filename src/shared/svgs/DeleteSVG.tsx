import { SvgIcon } from "@mui/material";

type Props = {
  size: number;
};

export default function DeleteSVG({ size }: Props) {
  return (
    <SvgIcon
      sx={{
        width: size,
        height: size,
      }}
    >
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.30463 1.79999H1.2417"
          stroke="#FF4949"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.44629 3.60001V6.00001"
          stroke="#FF4949"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.09961 3.60001V6.00001"
          stroke="#FF4949"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75306 1.80001V7.50001C6.75306 7.57957 6.72402 7.65588 6.67234 7.71214C6.62066 7.7684 6.55056 7.80001 6.47747 7.80001H2.06807C1.99498 7.80001 1.92488 7.7684 1.8732 7.71214C1.82152 7.65588 1.79248 7.57957 1.79248 7.50001V1.80001M5.65071 1.80001V1.20001C5.65071 1.04088 5.59264 0.888264 5.48927 0.775742C5.38591 0.66322 5.24571 0.600006 5.09953 0.600006H3.44601C3.29983 0.600006 3.15963 0.66322 3.05627 0.775742C2.9529 0.888264 2.89483 1.04088 2.89483 1.20001V1.80001"
          stroke="#FF4949"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
