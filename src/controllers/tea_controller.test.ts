import request from "supertest";
import { app } from "../app";
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Green Tea" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green Tea",
  });
});
test("GET /tea should return correct object even without param", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Bubble Tea",
  });
});
test("GET /tea should return correct object for the passed param", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Black Tea" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Black Tea",
  });
});
