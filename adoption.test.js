const request = require("supertest");
const app = require("../server"); // Ruta al archivo que arranca tu app

describe("Adoption Router Tests", () => {
  it("GET /adoption - Should return all adoptions", async () => {
    const res = await request(app).get("/adoption");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("POST /adoption - Should create a new adoption", async () => {
    const newAdoption = { petId: "123", userId: "456" };
    const res = await request(app).post("/adoption").send(newAdoption);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  it("DELETE /adoption/:id - Should delete an adoption", async () => {
    const res = await request(app).delete("/adoption/1");
    expect(res.statusCode).toBe(200);
  });
});
