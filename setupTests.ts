import "@testing-library/jest-dom";
import { fetch, Request, Response, Headers } from "undici";

Object.assign(globalThis, {
  fetch,
  Request,
  Response,
  Headers,
});