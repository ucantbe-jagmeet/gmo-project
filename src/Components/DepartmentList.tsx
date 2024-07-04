import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";

const departmentsData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

interface DepartmentProps {
  department: string;
  subDepartments: string[];
}

const Department: React.FC<DepartmentProps> = ({
  department,
  subDepartments,
}) => {
  const [checked, setChecked] = React.useState<boolean[]>(
    Array(subDepartments.length).fill(false)
  );
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedState = Array(subDepartments.length).fill(
      event.target.checked
    );
    setChecked(checkedState);
  };

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked];
      newChecked[index] = event.target.checked;
      setChecked(newChecked);
    };

  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean) && !allChecked;

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <FormControlLabel
          label={department}
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={handleChangeAll}
            />
          }
        />
      </Box>
      {expanded && (
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {subDepartments.map((subDept, index) => (
            <FormControlLabel
              key={subDept}
              label={subDept}
              control={
                <Checkbox
                  checked={checked[index]}
                  onChange={handleChange(index)}
                />
              }
            />
          ))}
        </Box>
      )}
    </div>
  );
};

const DepartmentsList: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 20,
      }}
    >
      {departmentsData.map((dept) => (
        <Department
          key={dept.department}
          department={dept.department}
          subDepartments={dept.sub_departments}
        />
      ))}
    </Box>
  );
};

export default DepartmentsList;
