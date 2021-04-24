export default (request, response, next) => {
  const { method, url, paramns, query, ip } = request;
  console.log(method, url, paramns, query, ip);

  next();
};
