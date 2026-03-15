var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNormalTalk("木材全部搜集到了吗？", 0, 1510005, false, true)
    } else {
        if (status == 1) {
            cm.forceCompleteQuest(32163);
            cm.forceCompleteQuest(32164);
            cm.forceCompleteQuest(32165);
            cm.forceCompleteQuest(32166);
            cm.gainExp(52270);
            cm.sendNormalTalk("谢谢你，勇士。看样子你对乘船有点天赋，我这下放心了。\r\n\r\n#b(和弗坦对话，开始执行正式的任务。）#k", 0, 1510005, true, false);
            cm.gainItem(4030022, -3);
            cm.dispose()
        }
    }
};