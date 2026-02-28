const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

let registeredHome = [];

module.exports = class Home {
  constructor(userName, homeName, homeAddress, homePrice, homeLocation) {
    this.userName = userName;
    this.homeName = homeName;
    this.homeAddress = homeAddress;
    this.homePrice = homePrice;
    this.homeLocation = homeLocation;
  }

  Save() {
    registeredHome.push(this);
    const filePath = path.join(rootDir, "./data/homes.json");
    fs.writeFile(filePath, JSON.stringify(registeredHome, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  static fetchAll(callback) {
    const filePath = path.join(rootDir, "./data/homes.json");

    const fileContent = fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err);
        registeredHome = [];
        return callback(registeredHome);
      }
      registeredHome = JSON.parse(data);
      callback(registeredHome);
    });
  } 
};
