var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("这是士兵们送来的药水……上面写着的是#b古代阿斯旺语#k吗？应该先带着它，回到美迪莎那里去。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(31055, "");
                cm.forceForfeitQuest(31060);
                cm.dispose();
                cm.warp(262000000, 0)
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest(31056);
            cm.finishAchievement(1147);
            cm.sendNormalTalk("有那种事？\r\n\r\n不知道#b希拉#k在策划什么阴谋，还好能事先阻止她。我们会在通道附近配置警卫兵，强化警戒，不让类似的事情再次发生。", 1, 2181000, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(926200003, 0)
            }
        }
    }
};