export const handler = () => {
  const t = Buffer.from("hello world").toString("base64");
  console.log(t);
  const x = Buffer.from(t, "base64").toString("utf8");
  console.log(x);
};
