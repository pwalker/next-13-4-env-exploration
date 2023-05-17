// import "server-only";

export const getData = async () => {
  console.log("process.env", process.env.FOO);

  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  return Promise.resolve({
    foo: process.env.FOO,
    other: 1,
  });
};
