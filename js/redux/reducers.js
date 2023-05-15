import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  name: "",
  email: "",
  phone: "",
  address: "",
  function: "",
  professionalPerfil: "",
  education: [],
  experience: [],
  skills: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setFunction: (state, action) => {
      state.function = action.payload;
    },
    setProfessionalPerfil: (state, action) => {
      state.professionalPerfil = action.payload;
    },
    setAcademicEducation: (state, action) => {
      state.education = [...state.education, action.payload];
    },
    setProfessionalExperience: (state, action) => {
      state.experience = [...state.experience, action.payload];
    },
    setSkills: (state, action) => {
      state.skills = [...state.skills, action.payload];
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
      }
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setAddress,
  setFunction,
  setProfessionalPerfil,
  setAcademicEducation,
  setProfessionalExperience,
  setSkills,
  removeSkill,
  nextStep,
  prevStep,
} = formSlice.actions;

export default formSlice.reducer;
