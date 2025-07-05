(async function () {
  try {
    console.log(`Setting up the server...`);    
    require("dotenv").config({ path: '.env' });
    await require("./Src/app.js");
  } catch ($err) {
    console.error(`Error starting server! Catch:`, $err);
  }
})();