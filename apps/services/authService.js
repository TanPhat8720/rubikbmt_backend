const { ObjectId } = require("mongodb");
var config = require("./../../config/setting.json");
class AuthService {
  databseConnection = require("./../database/database");
  user = require("./../entities/user");
  client;
  userDatabase;
  userCollection;
  constructor() {
    this.client = this.databseConnection.getMongoClient();
    this.userDatabase = this.client.db(config.mongodb.database);
    this.userCollection = this.userDatabase.collection("users");
  }

  async getUserList(page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const cursor = await this.userCollection
      .find({}, {})
      .skip(skip)
      .limit(limit);
    return await cursor.toArray();
  }

  async getUserById(userId) {
    return await this.userCollection.findOne({
      _id: new ObjectId(userId),
    });
  }

  async insertUser(user) {
    return await this.userCollection.insertOne(user);
  }

  async updateUser(user) {
    return await this.userCollection.updateOne(
      {
        _id: new ObjectId(user._id),
      },
      {
        $set: user,
      }
    );
  }

  async getUserByEmail(email) {
    return await this.userCollection.findOne({
      email: email,
    });
  }

  async deleteUser(userId) {
    return await this.userCollection.deleteOne({
      _id: new ObjectId(userId),
    });
  }
}
module.exports = AuthService;
