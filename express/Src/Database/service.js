class Service {
 constructor($Model, $Name) {
  this.$Model = $Model;
  this.$Name = $Name;

  const Repository = require("./repository.js");
  this.$_Repository = new Repository(this.$Model, this.$Name);
 }

 GetName() {
  return this.$_Repository.GetName();
 }

 GetTmpDatas() {
  return this.$_Repository.GetTmpDatas();
 }

 async SetTmpDatas() {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .SetTmpDatas()
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 Create($datas) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .Create($datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 Find() {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .Find()
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindAggregate($pipelines) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindAggregate([$pipelines])
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByFilters($filters) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindByFilters($filters)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByID($id) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindByID($id)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByIDAndUpdate($id, $datas) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindByIDAndUpdate($id, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindOneAndUpdate($filters, $datas) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindOneAndUpdate($filters, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindByIDAndDelete($id) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindByIDAndDelete($id)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }

 FindOneAndDelete($filters, $datas) {
  const $_Repository = this.$_Repository;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $_Repository
     .FindOneAndDelete($filters, $datas)
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject($err);
   }
  });
 }
}

module.exports = Service;
