import { MenuItem } from "@mui/material";
import EditSVG from "../../shared/svgs/EditSVG";
import CompleteSVG from "../../shared/svgs/CompleteSVG";
import DeleteSVG from "../../shared/svgs/DeleteSVG";

type TodoMenuProps = {
  onEditModeToggle: () => void;
  onComplete: () => void;
  onArchiveSwitch: () => void;
};

export default function TodoMenu({
  onEditModeToggle,
  onComplete,
  onArchiveSwitch,
}: TodoMenuProps) {
  return (
    <>
      <MenuItem
        sx={{
          padding: 0.5,
        }}
        onClick={onEditModeToggle}
      >
        <EditSVG size={14} />
      </MenuItem>
      <MenuItem
        sx={{
          padding: 0.5,
        }}
        onClick={onComplete}
      >
        <CompleteSVG type="home" size={14} />
      </MenuItem>
      <MenuItem
        sx={{
          padding: 0.5,
        }}
        onClick={onArchiveSwitch}
      >
        <DeleteSVG size={14} />
      </MenuItem>
    </>
  );
}
