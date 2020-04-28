"user strict";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user["mod"] = "happy";
user["hobby"] = "skyidiving";
user["premium"] = "false";
const keys = Object.keys(user);
console.log(keys);
for (const key of keys) {
  console.log(`${key}:`, user[key]);
}
const entries = Object.entries(user);
console.log(entries);
