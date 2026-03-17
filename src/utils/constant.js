export const REGEX = {
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  FULL_NAME: /^([a-zA-Z\'-.]+\s[a-zA-Z\'-.]+)$/,
};

export const MESSAGE = {
  INVALID_EMAIL: "Email Id is invalid.",
  INVALID_PASSWORD: "Password does not follow the guidelines.",
  INVALID_FULL_NAME: "Full Name does not follow the guidelines.",
  ERROR_CODE: {
    "auth/invalid-credential": "Email id or password is incorrect.",
  },
  GENERIC_ERROR: "Error Occured! Please try again later.",
};

export const LOGO =
  "https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460";
export const AVTAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const BODY_BG_IMG =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw";

export const API_ENDPOINTS = {
  NOW_PLAYING_MOVIES: "https://api.themoviedb.org/3/movie/now_playing",
  POPULAR_MOVIES: "https://api.themoviedb.org/3/movie/popular",
  TOP_RATED_MOVIES: "https://api.themoviedb.org/3/movie/top_rated",
  UPCOMING_MOVIES: "https://api.themoviedb.org/3/movie/upcoming",
  VIDEOS: (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos`,
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  GET: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNjOGZiNTQ5YmJmYzllMDVjYzFjYWE1YTdjYWU5NiIsIm5iZiI6MTc3Mzc0MDk3OS42NDMwMDAxLCJzdWIiOiI2OWI5MjNiMzVjMmY2YmM1YmQ1YTdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-H7m7zME0xwfqSp1kRp4gXgFA-gfzIk-xaR8BxxSuoA",
    },
  },
};
