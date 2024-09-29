import request from "supertest";
import app from "../src/server";
import http from "http";

let server: http.Server;

beforeAll(async () => {
  server = app.listen(1999); // Start the server
});

afterAll(async () => {
  await new Promise<void>((resolve) => {
    server.close(() => {
      resolve(); // Resolve the promise when the server closes
    });
  });
});

describe("GET /get-started", () => {
  it("should return Getting Started ....🤖!", async () => {
    const response = await request(server).get("/get-started"); // Use the server instance here
    expect(response.status).toBe(200); // Check for successful response
    expect(response.text).toBe("Getting Started ....🤖!"); // Check response content
  });
});
