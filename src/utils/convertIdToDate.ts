import { format, subDays } from "date-fns";

export default function convertIdToDate(id: number) {
  return format(subDays(new Date(), id), "MMMM dd, yyyy");
}
