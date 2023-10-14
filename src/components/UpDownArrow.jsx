import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const UpDownArrow = ({ active }) => {
  return (
   <span className="sortIcons">
      <KeyboardArrowUpIcon fontSize="small" />
      <KeyboardArrowDownIcon fontSize="small" />
  
    </span>
   
  );
};
export default UpDownArrow;
