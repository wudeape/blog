$(function () {
    //首页
    $('.headm1').on("click",".a1",function () {
        $("#homepage").css("display", "display");
        $(".contentblock").css("display", "none");
    });


    //企业介绍 大数据研发中心
    $('.headm2').on("click",".a2",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#bigdatacenter").css("display", "block");
    });
    //企业介绍 法律咨询网站部
    $('.headm2').on("click",".a3",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#legaladvice").css("display", "block");
    });
    //企业介绍 系统安全运维部
    $('.headm2').on("click",".a4",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#systemsecurity").css("display", "block");
    });


    //成功案例 多异通
    $('.headm3').on("click",".a2",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#manydifferent").css("display", "block");
    });
    //成功案例 法友快车
    $('.headm3').on("click",".a3",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#fastfriendsexpress").css("display", "block");
    });
    //成功案例 企业云平台
    $('.headm3').on("click",".a4",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#enterprisecloudplatform").css("display", "block");
    });


    //领军人物
    $('.headm4').on("click",".a1",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#armyhead").css("display", "block");
    });

    //项目承接 信息软件开发
    $('.headm5').on("click",".a2",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#informationsoftwaredevelopment").css("display", "block");
    });
    //项目承接 企业网站建设
    $('.headm5').on("click",".a3",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#corporatewebsiteconstruction").css("display", "block");
    });


    //联系我们
    $('.headm6').on("click",".a1",function () {
        $("#homepage").css("display", "none");
        $(".contentblock").css("display", "none");
        $("#contactus").css("display", "block");
    });


});

