export const getCropUrl = (url = "") => {
  const parts = url.split("/media/");

  return `${parts[0]}/media/crop/600/400/${parts[1]}`;
};
