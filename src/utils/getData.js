import axios from "axios";

const getData = async (type) => {
  const axiosCall = axios
    .get(
      `https://api.briantastic.com/api/collections/get/${type}?token=45c1a26189ae5d54ae4b6c64bcbc3c`
    )

const result = await axiosCall
return result
};

export default getData;
