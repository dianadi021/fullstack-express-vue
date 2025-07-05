const { $Role } = require("../../../App/Model/model.js");
const { GetMongoose, GetFormat, GetModel } = new $Role();

const $Tools = require("../../../Tools/tools.js");
const { IsValidVal, SetRequest, IsValidRequest } = new $Tools();

const $Service = require("../../../Database/service.js");
const $_Service = new $Service(GetModel, `Roles`);

class RoleModule {
 async SetTmpDatas() {
  try {
   return await $_Service
    .SetTmpDatas()
    .then(function ($callback) {
     return $callback;
    })
    .catch(function ($err) {
     $reject($err);
    });
  } catch ($err) {
   return $err;
  }
 }

 Create($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    const { name, level, description } = SetRequest($req);

    if (!IsValidVal(name) || !IsValidVal(level) || level === 0) {
     $reject({ msg: `Format tidak sesuai`, format: GetFormat });
    } else {
     const newData = new $Role(name, level, description);

     await $_Service
      .Create(newData)
      .then(function ($callback) {
       $resolve($callback);
      })
      .catch(function ($err) {
       $reject($err);
      });
    }
   } catch ($err) {
    $reject($err);
   }
  });
 }

 Find() {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .Find()
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindAggregate($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindAggregate([$pipelines])
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByFilters($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindByFilters($filters)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByID($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindByID($id)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByIDAndUpdate($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindByIDAndUpdate($id, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindOneAndUpdate($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindOneAndUpdate($filters, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByIDAndDelete($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindByIDAndDelete($id)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindOneAndDelete($req) {
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Service
     .FindOneAndDelete($filters, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      $reject($err);
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }
}

module.exports = RoleModule;
