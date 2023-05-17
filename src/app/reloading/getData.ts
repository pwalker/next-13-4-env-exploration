import "server-only";

let count = 0;

export const getData = async () => {
  console.log("fetching data", count);

  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  const data = {
    foo: process.env.FOO,
    other: 1,
    count,
  };

  count = count + 1;

  return Promise.resolve(data);
};
