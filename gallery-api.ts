import axios from "axios";
import { GalleryItems } from "./src/components/App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com/search";

type ApiResponse = {
  results: GalleryItems[];
  total: number;
}

export const getPhotos = async (topic: string, currentPage: number): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>("/photos/?client_id=WVvkoWB7pFdggoXbNMLId4SllYX7T7ZTvyTx777_Fak", {
    params: {
      query: topic,
      page: currentPage,
      per_page: 15,
      // client_id: "WVvkoWB7pFdggoXbNMLId4SllYX7T7ZTvyTx777_Fak",
    },
  });

  return response.data;
};
