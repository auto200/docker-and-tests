import axios from "axios";
import { getUser } from "./getUser";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const mockedUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
mockAxios.get.mockResolvedValue({ data: mockedUser, status: 200 });

describe("getUser", () => {
  afterEach(jest.clearAllMocks);

  test("user 1 fetched correctly", async () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    const user = await getUser(1);
    expect(user).toEqual(mockedUser);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
