function correctTail(body, tail) {
//   console.log(body.length);
//   console.log(tail.length);
    let sub = body.substr(body.length - tail.length);

    if (sub === tail) {
      return true;
    }
    else {
      return false;
    }
}

console.log(correctTail("Fox", "ox"))