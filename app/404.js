const { useRouter } = require("next/router");

const NotFound = () => {
  const router = useRouter();
  console.log("404");
  //   setTimeout(router.route("/"), 3000);
  return <h1>Sorry, but this page not found</h1>;
};

export default NotFound;
