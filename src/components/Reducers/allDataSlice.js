import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
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
  ],
};

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = allDataSlice.actions;

export default allDataSlice.reducer;
