import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

export const categories = [
  {
    id: 0,
    title: "Легковые автомобили",
    path: "./cars",
    icon: <TimeToLeaveIcon />,
  },
  {
    id: 1,
    title: "Грузовые автомобили",
    path: "./truck",
    icon: <LocalShippingIcon />,
  },
  {
    id: 2,
    title: "Автобусы",
    path: "./buses",
    icon: <DirectionsBusIcon />,
  },
  {
    id: 3,
    title: "Мотоциклы",
    path: "./motorcycles",
    icon: <TwoWheelerIcon />,
  },
];
