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

function IsValidVal($val, $get = ["bool", "value", "equal"], $other = null) {
 if (isset($other) && !empty($other) && $get == "value") {
  return isset($val) && !empty($val) ? $val : $other;
 } else if (isset($other) && !empty($other) && $get == "equal") {
  return isset($val) && !empty($val) && $val === $other;
 } else if (isset($val) && !empty($val) && $get == "value") {
  return $val;
 } else {
  return isset($val) && !empty($val);
 }
}

class Function {
 IsValidVal($val, $get = ["bool", "value", "equal"], $other = null) {
  return IsValidVal($val, $get, $other);
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
