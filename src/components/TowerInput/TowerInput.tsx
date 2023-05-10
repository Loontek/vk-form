import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";

interface TowerInputProps {
  tower: string;
  towers: string[];
  handleChange: (e: SelectChangeEvent) => void;
}
const TowerInput: FC<TowerInputProps> = ({ tower, towers, handleChange }) => {
  return (
    <FormControl fullWidth size={"medium"} sx={{ color: "#727F7F" }} required>
      <InputLabel id="tower-select-label">Башня</InputLabel>
      <Select
        labelId="tower-select-label"
        id="tower-select"
        value={tower}
        label="Башня"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Выберите башню</em>
        </MenuItem>
        {towers.map((tower) => (
          <MenuItem key={tower} value={tower}>
            Башня {tower}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TowerInput;
