import request from "supertest";
import app from "../src/server";

describe("GET /get-started", () => {
  it("should return Getting Started ....🤖!", async () => {
    const response = await request(app).get("/get-started");
    expect(response.status).toBe(200); // Check for successful response
    expect(response.text).toBe("Getting Started ....🤖!"); // Check response content
  });
});
