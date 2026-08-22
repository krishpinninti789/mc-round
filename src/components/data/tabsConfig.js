import Interests from "../Interests";
import Profile from "../Profile";
import Settings from "../Settings";

export const tabsConfig = [
  {
    tabName: "profile",
    inputTags: [],
    component: Profile,
  },
  {
    tabName: "interests",
    inputTags: [],
    component: Interests,
  },
  {
    tabName: "settings",
    inputTags: [],
    component: Settings,
  },
];
