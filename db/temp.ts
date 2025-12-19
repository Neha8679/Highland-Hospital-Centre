import { hashSync } from "bcryptjs";
 
async function main() {
  console.log(hashSync("hashed_password_placeholder_123", 10));
}
 
main();