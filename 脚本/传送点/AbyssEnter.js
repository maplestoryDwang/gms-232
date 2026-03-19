function start() {
    if (!cm.isQuestFinished(64763)) {
        cm.sendNormalTalk_Bottom("喂，你是新来的？你好，你好！\r\n这地方可不能一个人进去。你先去远征队总部登记一下，听听介绍再来吧。", 36, 9401058, false, true);
        return
    }
    cm.openNpc(9401058)
}
var status = -1;
var selectionLog = [];