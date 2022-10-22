export const MOVIES_SERVER_URL  = "https://api.nomoreparties.co";

export const BASE_URL = process.env.NODE_ENV === "production"
  ? "'https://diplom.grave.nomoredomains.work',"
  : "http://localhost:3000";

export  const DURATION_LENGTH = 40;

export const PAGE_WITHOUT_AUTH = ["/sign-in", "/sign-up"];