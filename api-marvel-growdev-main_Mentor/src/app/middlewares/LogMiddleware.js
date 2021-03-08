class LogMiddleware {
  register(request, response, next) {
    console.log(
      request.method,
      request.url,
      request.params,
      request.query,
      request.ip
    );

    next();
  }
}

export default new LogMiddleware();
