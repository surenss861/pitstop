const fs = require("fs");
const path = require("path");
const dirs = [".next", "node_modules/.cache"];
dirs.forEach((p) => {
  const full = path.join(process.cwd(), p);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true });
    console.log("Removed " + p);
  }
});
