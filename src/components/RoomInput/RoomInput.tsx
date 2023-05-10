import { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface RoomInputProps {
  room: string;
  rooms: number[];
  handleChange: (e: SelectChangeEvent) => void;
}
const RoomInput: FC<RoomInputProps> = ({ room, rooms, handleChange }) => {
  return (
    <FormControl fullWidth size={"medium"} required>
      <InputLabel id="room-select-label" className={"label"}>
        Переговорка
      </InputLabel>
      <Select
        labelId="room-select-label"
        id="room-select"
        value={room}
        label="Переговорка"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Выберите переговорку</em>
        </MenuItem>
        {rooms.map((room) => (
          <MenuItem key={room} value={room}>
            {room} переговорка
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RoomInput;
