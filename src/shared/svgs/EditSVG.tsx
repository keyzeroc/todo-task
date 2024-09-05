import { SvgIcon, useTheme } from "@mui/material";

type Props = {
  size: number;
};

export default function EditSVG({ size }: Props) {
  const theme = useTheme();
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
          d="M8.44616 0.437648C8.98221 1.02118 8.98221 1.96727 8.44616 2.5508L3.37672 8.06931C3.15683 8.30868 2.8813 8.47849 2.57961 8.5606L1.00726 8.98851C0.755942 9.0569 0.528294 8.80909 0.591125 8.5355L0.984212 6.82387C1.05963 6.49546 1.21563 6.19553 1.43553 5.95616L6.50497 0.437648C7.04102 -0.145883 7.91012 -0.145883 8.44616 0.437648ZM6.01962 2.02243L1.92082 6.48444C1.78889 6.62807 1.69529 6.80802 1.65004 7.00507L1.39566 8.1127L2.41316 7.83579C2.59417 7.78653 2.75948 7.68464 2.89142 7.54102L6.99007 3.07885L6.01962 2.02243ZM6.99027 0.965935L6.50484 1.49422L7.47529 2.55064L7.96086 2.02251C8.22889 1.73074 8.22889 1.2577 7.96086 0.965935C7.69284 0.67417 7.25829 0.67417 6.99027 0.965935Z"
          fill={theme.palette.iconBlue.main}
        />
      </svg>
    </SvgIcon>
  );
}
