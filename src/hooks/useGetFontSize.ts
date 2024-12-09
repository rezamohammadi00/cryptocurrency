import { Grid } from "antd";

const { useBreakpoint } = Grid;

function useGetFontSize() {
  const screens = useBreakpoint();

  if (screens.xs) return "20px"; // Extra small screens
  if (screens.sm) return "30px"; // Small screens
  if (screens.md) return "30px"; // Medium screens
  if (screens.lg) return "30px"; // Large screens
  return "28px"; // Extra large screens
}

export default useGetFontSize;
