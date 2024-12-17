class MongoDBRepos {
 constructor($Model, $Name) {
  this.$Model = $Model;
  this.$Name = $Name;
  this.$tmpDatas = [];
 }

 GetName() {
  return this.$Name;
 }

 GetTmpDatas() {
  return this.$tmpDatas;
 }

 async SetTmpDatas() {
  try {
   this.$tmpDatas = await this.$Model
    .find()
    .exec()
    .catch(function ($err) {
     throw $err;
    });

   return `Berhasil menyimpan temporary data ${this.$Name}`;
  } catch ($err) {
   return `Gagal menyimpan temporary data ${this.$Name}, ${$err}`;
  }
 }

 Create($datas) {
  const $Model = this.$Model;
  const $Name = this.$Name;

  return new Promise(async function ($resolve, $reject) {
   try {
    return await $Model
     .create($datas)
     .then(function (_) {
      $resolve(`Berhasil menyimpan ke table ${$Name}`);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal menyimpan ke table ${$Name}, ${$err}`);
   }
  });
 }

 Find() {
  const $Model = this.$Model;
  const $Name = this.$Name;

  if (this.$tmpDatas.length) {
   return new Promise(($resolve) => {
    $resolve(this.$tmpDatas);
   });
  }

  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .find()
     .exec()
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal mengambil data dari table ${$Name}, ${$err}`);
   }
  });
 }

 FindAggregate($pipelines) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .aggregate([$pipelines])
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal mengambil data dari table ${$Name}, ${$err}`);
   }
  });
 }

 FindByFilters($filters) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .findOne($filters)
     .exec()
     .then(function ($callback) {
      $resolve($callback);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal mengambil data dari table ${$Name}, ${$err}`);
   }
  });
 }

 FindByID($id) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  const $tmpDatas = this.$tmpDatas;
  return new Promise(async function ($resolve, $reject) {
   try {
    const datas = $tmpDatas.filter((list) => list._id == $id);
    if (datas.length > 0) {
     $resolve(datas);
    } else {
     await $Model
      .findById($id)
      .exec()
      .then(function ($callback) {
       $resolve($callback);
      })
      .catch(function ($err) {
       throw $err;
      });
    }
   } catch ($err) {
    $reject(`Gagal mengambil data dari table ${$Name}, ${$err}`);
   }
  });
 }

 FindByIDAndUpdate($id, $datas) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .findByIdAndUpdate($id, $datas)
     .exec()
     .then(function (_) {
      $resolve(`Berhasil menyimpan ke table ${$Name}`);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal menyimpan ke table ${$Name}, ${$err}`);
   }
  });
 }

 FindOneAndUpdate($filters, $datas) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .findOneAndUpdate($filters, $datas)
     .exec()
     .then(function (_) {
      $resolve(`Berhasil menyimpan ke table ${$Name}`);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal menyimpan ke table ${$Name}, ${$err}`);
   }
  });
 }

 FindByIDAndDelete($id) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .findByIdAndRemove($id)
     .exec()
     .then(function (_) {
      $resolve(`Berhasil menghapus ke table ${$Name}`);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal menghapus ke table ${$Name}, ${$err}`);
   }
  });
 }

 FindOneAndDelete($filters, $datas) {
  const $Model = this.$Model;
  const $Name = this.$Name;
  return new Promise(async function ($resolve, $reject) {
   try {
    await $Model
     .findOneAndRemove($filters, $datas)
     .exec()
     .then(function (_) {
      $resolve(`Berhasil menghapus ke table ${$Name}`);
     })
     .catch(function ($err) {
      throw $err;
     });
   } catch ($err) {
    $reject(`Gagal menghapus ke table ${$Name}, ${$err}`);
   }
  });
 }
}

module.exports = MongoDBRepos;
