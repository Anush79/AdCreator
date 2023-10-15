import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const UpDownArrow = ({ active }) => {
  return (
    <span className="sortIcons">
      <KeyboardArrowUpIcon fontSize="small" />

      <span id="downArrow">
        <KeyboardArrowDownIcon fontSize="small" />
      </span>
    </span>
  );
};
export default UpDownArrow;
