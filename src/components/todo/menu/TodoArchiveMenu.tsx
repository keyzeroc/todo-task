import { MenuItem } from "@mui/material";
import CompleteSVG from "../../shared/svgs/CompleteSVG";
import DeleteSVG from "../../shared/svgs/DeleteSVG";

type TodoArchiveMenuProps = {
  onArchiveSwitch: () => void;
  onDelete: () => void;
};

export default function TodoArchiveMenu({
  onArchiveSwitch,
  onDelete,
}: TodoArchiveMenuProps) {
  return (
    <>
      <MenuItem
        sx={{
          padding: 0.5,
        }}
        onClick={onArchiveSwitch}
      >
        <CompleteSVG type="archive" size={14} />
      </MenuItem>
      <MenuItem
        sx={{
          padding: 0.5,
        }}
        onClick={onDelete}
      >
        <DeleteSVG size={14} />
      </MenuItem>
    </>
  );
}
