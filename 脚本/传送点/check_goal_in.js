function enter() {
    var a = cm.getNumberFromQuestInfo(100355, "ready");
    if (a == 2) {
        cm.setNumberForQuestInfo(100355, "ready", 3);
        cm.openScriptNpc()
    }
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
            cm.addPopupSay(9062211, 2000, "抵达传送装置了。", "", 0);
            cm.addNumberForQuestInfo(100355, "book=6", cm.getMap().getMonsterById(9833667).getHp());
            cm.getWeatherEffectNotice("你已顺利地传送了古书！请对古书进行分类。", 297, 8000, 1);
            cm.playerMessage(5, "你已顺利地传送了古书！请对古书进行分类。");
            cm.getMap().getReactorByName("scriptSummonReactor").forceHitReactor(null, 1, 1276, -496, 0);
            cm.addPopupSay(9062211, 2000, "#b#h0##k，辛苦你了！我们继续去整理古书吧。", "", 0);
            cm.fieldEffect_PlayFieldSound("Sound/RunnerGame.img/Item/Protect", 100);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Fever", 128);
            cm.fieldEffect_ScreenMsg("Map/Effect3.img/unionmission/success");
            cm.cerniumProtectBookStart(2);
            cm.dispose()
        }
    }
};