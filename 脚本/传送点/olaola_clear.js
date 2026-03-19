function enter() {
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -652, -5526);
    cm.新复古_爬高高_更新排行榜();
    cm.addNumberForQuestInfo(500750, "check", 1);
    cm.fieldEffect_ScreenMsg("Effect/EventEffect.img/16thEventText/finish");
    cm.getWeatherEffectNotice("你已经来到了顶端YO。请和骑士甘迪对话YO。 领取奖励后就能离开了YO！", 287, 5000, 1);
    cm.playerMessage(5, "和骑士甘迪对话就能领取奖励并离开。")
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/olaola_clear.js ", 0)
        } else {
            cm.dispose()
        }
    }
};