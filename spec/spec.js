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
            {"id": 2, "name": "hokke", "habitat": "finland", "cost_price": "200.00"}
          ];
          JSON.parse(res.text).should.deep.equal(expected);
        });
      });
   })
})