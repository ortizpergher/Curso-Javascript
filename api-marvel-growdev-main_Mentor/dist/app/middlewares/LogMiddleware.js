"use strict";Object.defineProperty(exports, "__esModule", {value: true});class LogMiddleware {
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

exports. default = new LogMiddleware();
