import { staticColors } from "../../constants/colors";
import { WidgetPrioritiesType } from "./components/TodoWidget";

export const priorityColorsMap: Record<
  WidgetPrioritiesType,
  string | undefined
> = {
  high: staticColors.widgetHightPriorityColor,
  medium: staticColors.widgetMediumPriorityStatusColor,
  low: staticColors.widgetLowPriorityColor,
  none: undefined,
};
export const priorityTextsMap = {
  high: "high",
  medium: "medium",
  low: "low",
  none: "none",
} as const;
