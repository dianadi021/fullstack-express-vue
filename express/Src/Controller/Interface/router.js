const Response = require("./response.js");
const { OKE, CREATED, ACCEPTED, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, UNPROCESS_ENTITY, TO_MANY_REQ, SERVER_ERROR, SERVER_TIMEOUT } = new Response();

class Router {
 constructor($ModuleService) {
  this.$_ModuleService = $ModuleService;

  const { Router } = require("express");
  this.$_Router = new Router();
 }

 async SetTmpDatas() {
  try {
   const $Module = this.$_ModuleService;
   setTimeout(async function () {
    await $Module
     .SetTmpDatas()
     .then(function ($callback) {
      console.log($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   }, 1500);
  } catch ($err) {
   console.error($err);
  }
 }

 async SetControlV1($pattern) {
  const regex = new RegExp(`^/(\\w+)/control$`);
  this.$_Router.all(regex, async ($req, $res) => {
   try {
    const sectionPathUrl = $req.params[0];

    // /^(users|admin|manager)$/
    if ($pattern.test(sectionPathUrl)) {
     await this.$_ModuleService
      .SetTmpDatas()
      .then(function ($callback) {
       console.log($callback);
      })
      .catch(function ($err) {
       throw $err;
      });
    }
   } catch ($err) {
    console.error($err);
   }
  });
 }

 async SetControlV2($pattern) {
  try {
   // control/users || users/control
   const regex = new RegExp(`^/(\\w+)/${$pattern}$`);
   this.$_Router.all(regex, async ($req, $res) => {
    await this.$_ModuleService
     .SetTmpDatas()
     .then(function ($callback) {
      console.log($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   });
  } catch ($err) {
   console.error($err);
  }
 }

 SetRouter() {
  const $Module = this.$_ModuleService;

  const section_control = `control`;
  const create_data = `${section_control}/create`;
  const update_data = `${section_control}/update`;
  const update_filter = `/${section_control}/filter/update`;
  const delete_data = `${section_control}/delete`;
  const delete_filter = `${section_control}/filter/delete`;

  // this.$_Router.all(/control/g, async function ($req, $res, $next) {
  //  try {
  //   if (["POST", "PUT", "PATCH", "DELETE"].includes($req.method.toUpperCase())) {
  //    setTimeout(async function () {
  //     await $Module
  //      .SetTmpDatas()
  //      .then(function ($callback) {
  //       console.log($callback);
  //      })
  //      .catch(function ($err) {
  //       throw $err;
  //      });
  //    }, 1500);
  //   }

  //   $next();
  //  } catch ($err) {
  //   console.error($err);
  //  }
  // });

  this.$_Router.post(`/${create_data}`, async function ($req, $res) {
   try {
    const $callback = await $Module.Create($req).catch(function ($err) {
     throw $err;
    });

    return CREATED($res, $callback);
   } catch ($err) {
    const { message, msg, format } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else if (msg && format) {
     return NOT_FOUND($res, msg, format);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.get(`/all`, async function ($req, $res) {
   try {
    const $callback = await $Module.Find().catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.get(`/filter`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindByFilters($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.get(`/details/:id`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindByID($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.put(`/${update_data}/:id`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindByIDAndUpdate($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.put(`/${update_filter}`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindOneAndUpdate($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.delete(`/${delete_data}/:id`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindByIDAndDelete($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  this.$_Router.delete(`/${delete_filter}`, async function ($req, $res) {
   try {
    const $callback = await $Module.FindOneAndDelete($req).catch(function ($err) {
     throw $err;
    });

    return OKE($res, `Berhasil mengambil data`, $callback);
   } catch ($err) {
    const { message } = $err;

    if (message) {
     return SERVER_ERROR($res, `Kesalahan pada server!`, message);
    } else {
     return BAD_REQUEST($res, `Kesalahan request!`, $err);
    }
   }
  });

  return this.$_Router;
 }
}

module.exports = Router;
