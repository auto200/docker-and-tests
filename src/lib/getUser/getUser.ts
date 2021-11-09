import axios from "axios";

export const getUser = async (id = 1) => {
  try {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (resp.status !== 200) {
      throw new Error("Invalid user id");
    }

    return resp.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
