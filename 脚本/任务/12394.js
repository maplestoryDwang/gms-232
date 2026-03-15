var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("你好，#b#h0##k。这么快就达到30级啦！达到#b30级#k之后，可以获得特殊的力量#b内在能力#k。我现在就能为你解放那种力量")
    } else {
        if (status == 1) {
            cm.forceCompleteQuest();
            cm.sendPrev("好了～！我已经为你解放了新的力量――内在能力。请通过角色属性窗确认一下～！");
            cm.showCompleteQuestEffect();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};