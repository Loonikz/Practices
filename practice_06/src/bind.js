function getBind(obj)
{
    let sum = bind(obj);
    sum += 300;
    return sum;
}
function bind(obj)
{
    let a2 = obj.a;
    let b2 = obj.b;
    return a2 + b2;
}

module.exports = getBind;
module.exports = bind;