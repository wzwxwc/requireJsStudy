/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
require.config({
    baseUrl: "./"
});
console.log("require之前");
require(["a"], function (instanceA) {
    setTimeout(function () {
        g2.b.say();
    }, 1000);
    g2.b.say();
    console.log("require内部");
    instanceA.say();

});
console.log("require之后");
