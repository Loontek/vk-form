import { FC } from "react";
import { FormControl } from "@mui/material";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers-pro";

interface DateInputProps {
  date: Dayjs | null;
  handleChange: (value: Dayjs | null) => void;
}

const DateInput: FC<DateInputProps> = ({ date, handleChange }) => {
  return (
    <FormControl fullWidth required>
      <DatePicker label={"Дата"} value={date} onChange={handleChange} />
    </FormControl>
  );
};

export default DateInput;
