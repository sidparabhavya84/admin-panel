import axios from "axios";
import { BaseURl } from "./BaseURL";

export const api = axios.create({
    baseURL: BaseURl
})