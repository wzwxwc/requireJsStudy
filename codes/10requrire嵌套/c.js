/**
 * 时间：2018/2/7
 * 作者：张超
 * 功能：
 */
define([], function () {
    var temp = {};
    temp.say = function () {
        console.log("c模块的say方法被执行");
    };
    var g2 = window.g2 || {};
    g2.c = temp;
    window.g2 = g2;
    return temp;
});