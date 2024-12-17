function isnull($val) {
 return $val === null || $val === "null";
}

function isundefined($val) {
 return $val === undefined || $val === "undefined";
}

function empty($val) {
 if (typeof $val === "undefined" && isundefined($val)) {
  return true;
 } else if (typeof $val === "object" && isnull($val)) {
  return true;
 } else if (typeof $val === "object" && $val.length === 0) {
  return true;
 } else if (typeof $val === "object" && Object.keys($val).length === 0) {
  return true;
 } else if (typeof $val === "boolean" && $val === "") {
  return true;
 } else if (typeof $val === "number" && $val === "") {
  return true;
 } else if (typeof $val === "string" && $val === "") {
  return true;
 }

 return false;
}

function isset($val) {
 if (typeof $val === "undefined" && isundefined($val)) {
  return true;
 } else if (typeof $val === "object" && isnull($val)) {
  return true;
 } else if (typeof $val === "object" && $val.length > 0) {
  return true;
 } else if (typeof $val === "object" && Object.values($val).length > 0) {
  return true;
 } else if (typeof $val === "boolean" && $val) {
  return true;
 } else if (typeof $val === "number" && $val) {
  return true;
 } else if (typeof $val === "string" && $val) {
  return true;
 }

 return false;
}

function IsValidVal($val, $get = ["bool", "value", "equal"], $other = null, $key = null) {
 const $tmpVal = isset($key) && $key != null ? (isset($val[$key]) && !empty($val[$key]) ? $val[$key] : $val) : isset($val) && !empty($val) ? $val : null;
 if (isset($tmpVal)) {
  if ($get == "value") {
   if (isset($other) && $other != null) {
    return !empty($tmpVal) || $tmpVal == 0 ? $tmpVal : $other;
   } else {
    return !empty($tmpVal) || $tmpVal == 0 ? $tmpVal : "";
   }
  } else if (isset($other) && $other != null && $get == "equal") {
   return $tmpVal == $other;
  } else if (!empty($tmpVal)) {
   return true;
  } else {
   return false;
  }
 }

 return $get == "value" ? "" : false;
}

class Function {
 IsValidVal($val, $get = ["bool", "value", "equal"], $other = null, $key = null) {
  return IsValidVal($val, $get, $other, $key);
 }

 SetRequest($req) {
  const { params, query, body } = $req;
  return IsValidVal(body.data) ? body.data : IsValidVal(query) ? query : IsValidVal(params) ? params : IsValidVal(body) ? body : null;
 }

 IsValidRequest($req, $format, $not = null) {
  const tmpFormat = Object.keys($format).map(function ($list) {
   if ($list !== $not) {
    return $list;
   }
  });

  return Object.keys($req).filter(($key) => tmpFormat.includes($key));
 }
}

module.exports = Function;
