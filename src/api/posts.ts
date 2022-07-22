import axiosInstance from "@/api/axiosInstance";

export async function getPosts() {
  const { data } = await axiosInstance.get("posts");
  return data;
}
