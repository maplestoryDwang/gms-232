function start() {
    var c = randomNum(0, say.length - 1);
    var g = Math.round((cm.getMapId() - 993001000) / 10);
    if (g != 18) {
        cm.addPopupSay(say[c][0], 500, say[c][1])
    }
    cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/warning");
    cm.emotion(5, 2000);
    var d = cm.getNumberFromQuestInfo(18838, "count");
    var e = cm.getNumberFromQuestInfo(18838, "mode");
    if (e == 1) {
        cm.setNumberForQuestInfo(18877, "T", new Date().getTime())
    } else {
        if (d == 0) {
            cm.warp(993001000);
            return true
        } else {
            var b = cm.getEventManager("小游戏_控制之神");
            var a = b.getInstance("小游戏_控制之神");
            a.startEventTimer(10 * 60 * 1000);
            cm.addNumberForQuestInfo(18838, "count", -1);
            cm.updateHeaderUI(2, 2, 10000000, 0, 10000000, 34500)
        }
    }
    var f = cm.getMap().getPortal(0).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), f.getX(), f.getY());
    return true
}
var say = [
    [9070200, "别因为这种事就放弃。"],
    [9070200, "啧啧……要小心啊。"],
    [9070201, "该不会是努力得还不够吧？"],
    [9070200, "啊！嘤！哎！哈！没能成功突破！"],
    [9070202, "因为痛，所以叫青春。"],
    [9070203, "你也太慢腾腾了吧，就跟树懒似的。"],
    [9070201, "额啊……加油。"],
    [9070200, "我总觉得你还是得做200个深蹲才行。"],
    [9070201, "跳跃是艺术加技术~"],
    [9070203, "我认为你可以做到，估计可以……"],
    [9070202, "虽然不能笑但……嘿嘿嘿"]
];