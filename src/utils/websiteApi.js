import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://dsckiet.herokuapp.com/api/v1";

export const getIndex = () =>
  axios.get(`${apiUrl}/index`).then(res => res.data);

export const getTeam = () => axios.get(`${apiUrl}/team`).then(res => res.data);

export const getEvents = () =>
  axios.get(`${apiUrl}/events`).then(res => res.data);

export const getAbout = () =>
  axios.get(`${apiUrl}/about`).then(res => res.data);
