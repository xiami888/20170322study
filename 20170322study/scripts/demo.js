/// <reference path="jquery-3.1.1.slim.min.js" />

var iNum1;
var iNum2;
var aProvince = ["河北省","山西省","湖北省"];
var aCity = [["石家庄市", "唐山市", "秦皇岛市", "邯郸", "邢台", "保定", "张家口", "承德", "沧州", "廊坊", "衡水"], ["太原市", "朔州市", "大同市"], ["武汉市", "黄冈市"]];
var aCountry = [[["井径", "正定", "栾城", "行唐", "灵寿", "高邑", "深泽", "赞皇", "无极", "平山", "元氏", "赵县", "辛集", "藁城", "晋州", "新乐", "鹿泉"],
    ["丰润", "滦县", "滦南", "乐亭", "玉田", "唐海", "遵化", "丰南", "迁安", "鸦鸿桥"],
    ["秦皇岛市1", "秦皇岛市2"],
    ["邯郸1", "邯郸2"],
    ["邢台1", "邢台2"],
    ["保定1", "保定2"],
    ["张家口1", "张家口2"],
    ["承德1", "承德2"],
    ["沧州1", "沧州2"],
    ["廊坊1", "廊坊2"],
    ["衡水1", "衡水2"]],
    [["太原市1", "太原市2"],["朔州市1", "朔州市2"],["大同市1", "大同市2"]],
    [["武汉市1", "武汉市2"], ["黄冈市1", "黄冈市2"]]];
$(function () {
    for(var i=0;i<aProvince.length;i++){
    $("#selProvince").append("<option>"+aProvince[i]+"</option>")
    }
    $("#selProvince").change(function () {
        $("#selCity").children().not(":eq(0)").remove();
        $("#selCountry").children().not(":eq(0)").remove();
        iNum1 = $(this).children("option:selected").index();
        var aaCity = aCity[iNum1 - 1];
        for (var j = 0; j < aaCity.length;j++){
            $("#selCity").append("<option>" + aaCity[j] + "</option>")
        }
    });
    $("#selCity").change(function () {
        $("#selCountry").children().not(":eq(0)").remove();
        iNum2 = $(this).children("option:selected").index();
        var aaCountry = aCountry[iNum1 - 1][iNum2 - 1];
        for (var z = 0; z < aaCountry.length; z++) {
            $("#selCountry").append("<option>" + aaCountry[z] + "</option>")
        }
    })
});