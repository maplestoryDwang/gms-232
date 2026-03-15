var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h1;39=h0;59=h2;40=h0;60=h0;41=h0;42=h0;43=h0;63=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
            cm.forceStartQuest(34586, "");
            cm.forceCompleteQuest(34586);
            cm.sendNormalTalk_Bottom("确认了威尔掉落的东西。现在走过去和他对话吧。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.gainSkillBuff(80000514);
                cm.gainItem(1712006, 1);
                cm.gainItem(3018045, 1);
                cm.gainItem(2438411, 1);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};