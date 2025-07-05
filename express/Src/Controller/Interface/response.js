class Response {
 OKE($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(200).json({ status: 200, message: $msg, datas: $datas });
  }
  return $res.status(200).json({ status: 200, message: $msg });
 }

 CREATED($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(201).json({ status: 201, message: $msg, datas: $datas });
  }
  return $res.status(201).json({ status: 201, message: $msg });
 }

 ACCEPTED($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(202).json({ status: 202, message: $msg, datas: $datas });
  }
  return $res.status(202).json({ status: 202, message: $msg });
 }

 BAD_REQUEST($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(400).json({ status: 400, message: $msg, datas: $datas });
  }
  return $res.status(400).json({ status: 400, message: $msg });
 }

 UNAUTHORIZED($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(401).json({ status: 401, message: $msg, datas: $datas });
  }
  return $res.status(401).json({ status: 401, message: $msg });
 }

 FORBIDDEN($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(403).json({ status: 403, message: $msg, datas: $datas });
  }
  return $res.status(403).json({ status: 403, message: $msg });
 }

 NOT_FOUND($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(404).json({ status: 404, message: $msg, datas: $datas });
  }
  return $res.status(404).json({ status: 404, message: $msg });
 }

 UNPROCESS_ENTITY($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(422).json({ status: 422, message: $msg, datas: $datas });
  }
  return $res.status(422).json({ status: 422, message: $msg });
 }

 TO_MANY_REQ($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(429).json({ status: 429, message: $msg, datas: $datas });
  }
  return $res.status(429).json({ status: 429, message: $msg });
 }

 SERVER_ERROR($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(500).json({ status: 500, message: $msg, datas: $datas });
  }
  return $res.status(500).json({ status: 500, message: $msg });
 }

 SERVER_TIMEOUT($res, $msg = null, $datas = null) {
  if ($datas) {
   return $res.status(504).json({ status: 504, message: $msg, datas: $datas });
  }
  return $res.status(504).json({ status: 504, message: $msg });
 }
}

module.exports = Response;
