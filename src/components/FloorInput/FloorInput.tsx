import { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface FloorInputProps {
  floor: string;
  floors: number[];
  handleChange: (e: SelectChangeEvent) => void;
}

const FloorInput: FC<FloorInputProps> = ({ floor, floors, handleChange }) => {
  return (
    <FormControl fullWidth size={"medium"} required>
      <InputLabel id="floor-select-label" className={"label"}>
        Этаж
      </InputLabel>
      <Select
        labelId="floor-select-label"
        id="floor-select"
        value={floor}
        label="Этаж"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Выберите этаж</em>
        </MenuItem>
        {floors.map((floor) => (
          <MenuItem key={floor} value={floor}>
            {floor} этаж
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FloorInput;
