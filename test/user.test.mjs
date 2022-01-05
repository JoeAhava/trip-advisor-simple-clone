import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import User from "../models/User.mjs";
import { server } from "../server.mjs";

chai.should();
chai.use(chaiHttp);

const newUserPayload = {
	email: "someemail@example.com",
	username: "johndoe_test_1",
	password: "weakpassword",
};

describe("API test user routes", () => {
	it("should create user", (done) => {
		chai
			.request(server)
			.post("/users")
			.send(newUserPayload)
			.end((err, res) => {
				console.log(err);
				res.should.have.status(201);
				done();
			});
	});
});
