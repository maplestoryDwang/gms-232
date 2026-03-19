var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      cm.forceStartQuest(59016, '');
      cm.sendNormalTalk("嘿~ 老大! 老大你上升的也挺快啊。", 5, 9390302, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("在树藤前,按上方向键,就可以爬上来,老大!", 5, 9390302, true, false);
      } else if (status === V++) {
        cm.spawnMobLimit(9390927, 1, 720, 28, 2);
        cm.spawnMobLimit(9390927, 1, 615, 28, 2);
        cm.dispose();
      }
    }
  }
}