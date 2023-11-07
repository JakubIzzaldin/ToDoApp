import {staticColors} from '../../constants/colors';
import {WidgetPrioritiesType} from './components/TodoWidget';

export const priorityColorsMap: Record<WidgetPrioritiesType, string | undefined> = {
  high: staticColors.widgetHightPriorityColor,
  medium: staticColors.widgetMediumPriorityStatusColor,
  low: staticColors.widgetLowPriorityColor,
  none: undefined,
};
