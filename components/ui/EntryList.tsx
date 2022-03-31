import { List, Paper } from "@mui/material";
import { EntryCard } from "./";
import { EntryStatus } from "../../interfaces";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";
interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );
  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "100vh",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
