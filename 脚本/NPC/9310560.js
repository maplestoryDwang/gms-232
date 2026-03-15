var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(c, G, D) {
  if (status == 0 && c == 0) {
    cm.dispose();
    return;
  }
  if (c == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = D;
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else if (status === b++) {
    if (cm.isQuestActive(62181) && !cm.haveItem(4034662)) {
      cm.sendNormalTalk_Bottom("来取#b#i4034662##z4034662##k的是吗？给，一定要拿好了！", 37, cm.getNpc(), false, false);
      cm.gainItem(4034662, 1);
    } else {
      cm.sendNormalTalk_Bottom("你！你知道这里很危险吗？不管多么强大，也不能放松警惕，请你一定要小心。", 37, cm.getNpc(), false, false);
    }
  } else {
    cm.dispose();
  }
}