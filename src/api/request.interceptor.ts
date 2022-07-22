export function requestInterceptors(request: any) {
  request.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
  return request;
}

export function requestError(error: any) {
  return Promise.reject(error);
}
