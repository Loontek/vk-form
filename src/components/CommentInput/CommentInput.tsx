import { ChangeEvent, FC } from "react";
import { FormControl, TextField } from "@mui/material";

interface CommentInputProps {
  comment: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentInput: FC<CommentInputProps> = ({ comment, handleChange }) => {
  return (
    <FormControl fullWidth>
      <TextField
        placeholder={"Комментарий"}
        value={comment}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default CommentInput;
