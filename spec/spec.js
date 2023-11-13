const { setupExpressServer } = require("../src/server");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const app = setupExpressServer();

describe("The express server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(app);
  });

  describe("express basics", () => {
    describe("GET /teapot - modifying status", () => {
      it("should return status 418", async () => {
        const res = await request.get("/teapot");
        res.should.have.status(418);
      });
    });
    describe("GET /api/fishes - return fishes", () => {
        it("should return all fishes", async () => {
          const res = await request.get("/api/fishes");
          const expected = [
            {"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"},
            {"id": 2, "name": "hokke", "habitat": "finland", "cost_price": "200.00"},
          ];
          JSON.parse(res.text).should.deep.equal(expected);
        });
      });
      describe("POST /api/fishes - register fishes", () => {
        it("should register all fishes", async () => {
          await request.post("/api/fishes").send({"fish": {"id": 3, "name": "saba", "habitat": "china", "cost_price": "300.00"}});
          console.log("Insert Complete");
        });
        it("should return inserted fishes", async () => {
            const res = await request.get("/api/fishes");
            const expected = [
                {"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"},
                {"id": 2, "name": "hokke", "habitat": "finland", "cost_price": "200.00"},
                {"id": 3, "name": "saba", "habitat": "china", "cost_price": "300.00"},
              ];
            JSON.parse(res.text).should.deep.equal(expected);
          });
        });
      });
      describe("DELETE /api/fishes - delete fishes", () => {
        it("should delete all fishes", async () => {
          await request.delete("/api/fishes").send({"id": 3});
          console.log("Delete Complete");
        });
        it("should return fishes", async () => {
            const res = await request.get("/api/fishes");
            const expected = [
                {"id": 1, "name": "sake", "habitat": "japan", "cost_price": "100.00"},
                {"id": 2, "name": "hokke", "habitat": "finland", "cost_price": "200.00"},
              ];
            JSON.parse(res.text).should.deep.equal(expected);
          });
        });
});
