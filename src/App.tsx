import { ChangeEvent, FormEventHandler, useState } from "react";
import { Button, FormControl, SelectChangeEvent } from "@mui/material";
import { DateRange, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import TowerInput from "./components/TowerInput/TowerInput.tsx";
import DateInput from "./components/DateInput/DateInput.tsx";
import FloorInput from "./components/FloorInput/FloorInput.tsx";
import RoomInput from "./components/RoomInput/RoomInput.tsx";
import TimeInput from "./components/TimeInput/TimeInput.tsx";
import CommentInput from "./components/CommentInput/CommentInput.tsx";
import styles from "./App.module.css";

const towers: string[] = ["A", "B"];

const floors: number[] = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

const meetingRooms: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [tower, setTower] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<DateRange<Dayjs>>(() => [
    dayjs(),
    dayjs().add(1, "hour"),
  ]);
  const [comment, setComment] = useState<string>("");

  const handleTowerChange = (e: SelectChangeEvent<typeof tower>) => {
    setTower(e.target.value);
  };

  const handleFloorChange = (e: SelectChangeEvent<typeof floor>) => {
    setFloor(e.target.value);
  };

  const handleRoomChange = (e: SelectChangeEvent<typeof room>) => {
    setRoom(e.target.value);
  };

  const handleDateChange = (value: Dayjs | null) => {
    setDate(value);
  };

  const handleTimeChange = (value: DateRange<Dayjs>) => {
    setTime(value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // @ts-ignore
  const handleSubmit = (e): FormEventHandler<HTMLFormElement> | undefined => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        tower,
        floor,
        room,
        date,
        time,
        comment,
      })
    );

    setTower("");
    setFloor("");
    setRoom("");
    setDate(null);
    setTime([dayjs(), dayjs().add(1, "hour")]);
    setComment("");

    return undefined;
  };

  const handleReset = () => {
    setTower("");
    setFloor("");
    setRoom("");
    setDate(null);
    setTime([dayjs(), dayjs().add(1, "hour")]);
    setComment("");
  };

  return (
    <form className={styles.App} onSubmit={handleSubmit}>
      <TowerInput
        tower={tower}
        towers={towers}
        handleChange={handleTowerChange}
      />
      <FloorInput
        floor={floor}
        floors={floors}
        handleChange={handleFloorChange}
      />
      <RoomInput
        room={room}
        rooms={meetingRooms}
        handleChange={handleRoomChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
        <DateInput date={date} handleChange={handleDateChange} />
        <TimeInput time={time} handleChange={handleTimeChange} />
      </LocalizationProvider>
      <CommentInput comment={comment} handleChange={handleCommentChange} />
      <FormControl style={{ flexDirection: "row", gap: 20 }}>
        <Button variant={"contained"} type={"submit"}>
          Отправить
        </Button>
        <Button variant={"outlined"} type={"reset"} onClick={handleReset}>
          Очистить
        </Button>
      </FormControl>
    </form>
  );
}

export default App;
