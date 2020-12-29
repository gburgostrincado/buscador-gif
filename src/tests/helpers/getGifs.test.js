const { getGifs } = require("../../helpers/getGifs");

describe("pruebas con getGif Fetch", () => {
  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("Rick and Morty");

    expect(gifs.length).toBe(10);
  });
  test("debe traer 0 elementos", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
