const request = require("supertest");
const app = require("../index");

describe("API Testings", () => {
  // testing get_all_bloodbanks route /api/bloodbank/getallbloodbank
  it("GET /api/bloodbank/getallbloodbank | Response with valid json", async () => {
    const response = await request(app).get("/api/bloodbank/getallbloodbank");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Fetched");
  });

  it("POST /api/user/login | Response with valid json", async () => {
    const response = await request(app).post("/api/user/login").send({
      email: "user",
      password: "user",
    });
    console.log(response.body);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Logged In successfully");

    expect(response.body.token).toBeDefined();
  });

  it("GET Hospitals  | Fetch Hospitals", async () => {
    const response = await request(app).get("/api/hospital/getallhospitals");
    expect(response.body.success).toBe(true);
  });

  it("GET BloodRequests  | Fetch BloodRequests", async () => {
    const response = await request(app).get("/api/blood_request/all_requests");
    expect(response.body.success).toBe(true);
  });
});
