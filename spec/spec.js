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
          { id: 1, name: "sake", habitat: "japan", cost_price: "100.00" },
          { id: 2, name: "hokke", habitat: "finland", cost_price: "200.00" },
        ];
        JSON.parse(res.text).should.deep.equal(expected);
      });
    });
    describe("GET /api/fishes/:id - return selected fish", () => {
      it("should return selected fishe", async () => {
        const res = await request.get("/api/fishes/2");
        const expected = [
          { id: 2, name: "hokke", habitat: "finland", cost_price: "200.00" },
        ];
        JSON.parse(res.text).should.deep.equal(expected);
      });
    });
    describe("POST /api/fishes - register fishes", () => {
      it("should register all fishes", async () => {
        const registeredId = await request.post("/api/fishes").send({
          fish: {
            id: 3,
            name: "saba",
            habitat: "china",
            cost_price: "300.00",
          },
        });
        console.log("Insert Complete");
      });
      it("should return inserted fishes", async () => {
        const res = await request.get("/api/fishes");
        const expected = [
          { id: 1, name: "sake", habitat: "japan", cost_price: "100.00" },
          { id: 2, name: "hokke", habitat: "finland", cost_price: "200.00" },
          { id: 3, name: "saba", habitat: "china", cost_price: "300.00" },
        ];
        JSON.parse(res.text).should.deep.equal(expected);
      });
    });
  });
  describe("DELETE /api/fishes/:id - delete fishes", () => {
    it("should delete all fishes", async () => {
      await request.delete("/api/fishes/3");
      console.log("Delete Complete");
    });
    it("should return fishes", async () => {
      const res = await request.get("/api/fishes");
      const expected = [
        { id: 1, name: "sake", habitat: "japan", cost_price: "100.00" },
        { id: 2, name: "hokke", habitat: "finland", cost_price: "200.00" },
      ];
      JSON.parse(res.text).should.deep.equal(expected);
    });
  });

  describe("PATCH /api/fishes/:idOrName - change selected fish by id", () => {
    it("should change fish by id", async () => {
      await request
        .patch("/api/fishes/2")
        .send({ key: "habitat", value: "china" });
    });
    it("should return changed fish by id", async () => {
      const res = await request.get("/api/fishes");
      const expected = [
        { id: 1, name: "sake", habitat: "japan", cost_price: "100.00" },
        { id: 2, name: "hokke", habitat: "china", cost_price: "200.00" },
      ];
      JSON.parse(res.text).should.deep.equal(expected);
    });
  });
});
