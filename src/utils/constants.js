export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmM5MDdmMjYxODYzODY1NjQxYzkwMDZiODVlMGQwZCIsIm5iZiI6MTcyMDQzODY1Ny4zMDA3OTcsInN1YiI6IjY2OGJiOTA0MmI5ODY2YWQxZmU1ZGMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPBkkERNE6-vjB1kMH3YfK8zLV-dgG3-mNvTubv1tXw",
  },
};
export const IMAGE_URL = "https://image.tmdb.org/t/p/w200/";

export const languages = [
  { identifier: "en", value: "English" },
  { identifier: "tel", value: "తెలుగు" },
  { identifier: "hin", value: "हिंदी" },
];

export const languagesContent = {
  en: {
    searchButton: "Search",
    searchBarPlaceholder: "What would you like to watch today?",
  },
  hin: {
    searchButton: "खोज",
    searchBarPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  tel: {
    searchButton: "వెతకండి",
    searchBarPlaceholder: "మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?",
  },
};

export const OPENAI_KEY = "some_api_key";
