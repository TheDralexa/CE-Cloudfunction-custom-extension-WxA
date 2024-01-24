function main(args) {
  const LoremIpsum = require("lorem-ipsum").LoremIpsum;
  const lorem = new LoremIpsum();

  return {
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: lorem.generateWords(100),
  };
}

module.exports.main = main;
