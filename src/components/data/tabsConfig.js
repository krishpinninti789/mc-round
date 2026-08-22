import Interests from "../Interests";
import Profile from "../Profile";
import Settings from "../Settings";

const validateProfile = (data) => {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email?.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email";
  }

  return errors;
};

const validateInterests = (data) => {
  const errors = {};

  if (!data.interests?.length) {
    errors.interests = "Please select at least one interest";
  }

  return errors;
};

const validateSettings = (data) => {
  const errors = {};

  return errors;
};

export const tabsConfig = [
  {
    tabName: "profile",
    inputTags: [],
    component: Profile,
    validate: validateProfile,
  },
  {
    tabName: "interests",
    inputTags: [],
    component: Interests,
    validate: validateInterests,
  },
  {
    tabName: "settings",
    inputTags: [],
    component: Settings,
    validate: validateSettings,
  },
];
