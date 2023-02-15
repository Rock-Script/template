module.exports.snakeToCamel = str =>
  str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
    );

module.exports.getRandomString = () => {
  return `${Math.random() * 10000000}`;
}