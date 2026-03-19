var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.getLevel() >= 140 && cm.getQuestStatus(30400) == 0) {
      cm.sendNormalTalk_Bottom("#b#h0##k，你来到童话村了啊。\r\n我有一件要紧的事情想要麻烦你。\r\n现在立刻来赫丽奥斯塔图书馆找我吧。", 37, 2074102, false, true);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;