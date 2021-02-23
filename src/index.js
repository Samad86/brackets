module.exports = function check(str, bracketsConfig) {
    let config = Object.fromEntries(bracketsConfig);
    let stack = [];

    for (let char of str) {
        if (stack.length && char === config[stack.slice(-1)]) stack.pop();
        else if (char in config) stack.push(char);
        else return false;
    }

    return stack.length === 0;
};
