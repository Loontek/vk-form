import { FC } from "react";
import { Dayjs } from "dayjs";
import { DateRange, MultiInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { FormControl } from "@mui/material";

interface TimeInputProps {
  time: DateRange<Dayjs>;
  handleChange: (value: DateRange<Dayjs>) => void;
}

const TimeInput: FC<TimeInputProps> = ({ time, handleChange }) => {
  return (
    <FormControl fullWidth required>
      <MultiInputTimeRangeField value={time} onChange={handleChange} />
    </FormControl>
  );
};

export default TimeInput;
