import React from "react";
import Card from "./Card";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["All", "Active", "Upcoming", "Past", "Easy", "Medium", "Hard"];
export const data = [
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card5.png?updatedAt=1725439452239",
    status: "Upcoming",
    details: "Data Science Bootcamp-Graded Datathon",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.",
  },
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card4.png?updatedAt=1725439452203",
    status: "Upcoming",
    details: "Data Sprint 72 - Butterfly Identification",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card6.png?updatedAt=1725439452144",
    status: "Active",
    details: "Data Sprint 71 - Weather Recognition",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card3.png?updatedAt=1725439452111",
    status: "Active",
    details: "Data Sprint 71 - Airline Passenger Satisfaction",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card2.png?updatedAt=1725439452098",
    status: "Past",
    details: "Engineering Graduates Employment Outcomes",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
  {
    img: "https://ik.imagekit.io/h9iiik5xg8/cardimage/card1.png?updatedAt=1725439451980",
    status: "Past",
    details: "Travel Insurance Claim prediction",
    startDate: "",
    endDate: "",
    overview:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.",
  },
];

const CardsViewPage = () => {
  const updateData = useSelector((state) => state?.allDataSlice?.data);
  const [statusName, setstatusName] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [searchfilterData, setSearchFilterData] = React.useState(updateData);
  const handleInput = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    filterData(inputValue, statusName);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const selectedStatuses =
      typeof value === "string" ? value.split(",") : value;
    setstatusName(selectedStatuses);
    filterData(searchInput, selectedStatuses);
  };

  const filterData = (searchText, selectedStatuses) => {
    let filteredData = data;

    if (searchText) {
      filteredData = filteredData.filter((d) =>
        d.details.toUpperCase().includes(searchText.toUpperCase())
      );
    }

    if (selectedStatuses.length > 0 && !selectedStatuses.includes("All")) {
      filteredData = filteredData.filter((d) =>
        selectedStatuses.includes(d.status)
      );
    }

    setSearchFilterData(filteredData);
  };

  return (
    <>
      <div className="h-[324px] bg-[#002A3B] ">
        <h2 className="text-white text-xl flex items-center justify-center">
          Explore Challenges
        </h2>
        <div className="flex justify-center items-center">
          <input
            onChange={handleInput}
            className="w-[823px] h-[50px] mt-[45px] rounded-2xl pl-[52px]"
            placeholder="Search"
          ></input>
          <div className="mt-[45px] text-white rounded-2xl">
            <FormControl
              sx={{ m: 1, width: 300 }}
              className="bg-white rounded-2xl mt-[45px]"
            >
              <InputLabel
                id="demo-multiple-checkbox-label"
                className="rounded-2xl"
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={statusName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={statusName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className=" bg-[#003145] flex justify-center items-center">
        <div className="w-[1172px] flex flex-wrap justify-between">
          {searchfilterData?.map((d, index) => (
            <Card key={index} data={d} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsViewPage;
