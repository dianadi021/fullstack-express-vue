const Container = async () => {
 try {
  const { Router } = require("express");
  const router = new Router();

  const ServiceInterfaces = require("../Controller/Interface/router.js");

  const { RoleModule } = require("../Controller/Module/module.js");

  const Role = new RoleModule();
  const RoleEndpoint = new ServiceInterfaces(Role);

//   setTimeout(async function () {
//    await RoleEndpoint.SetTmpDatas();
//   }, 1500);

  router.use("/roles", RoleEndpoint.SetRouter());

  return router;
 } catch ($err) {
  console.error(`Endpoint Catch:`, $err);
 }
};

module.exports = Container;
