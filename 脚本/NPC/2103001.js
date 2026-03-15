var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (!cm.isQuestActive(3927)) {
        cm.dispose();
        return;
      } else {
        cm.askYesNo("虽然是堵平凡的墙，但细看的话，有一些怪异的纹样。想观察墙壁吗？", 0, 2103001);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("墙后面写着很多怪异的词。\r\n\r\n#b若有铁锤和短剑，如果有弓和箭……#k", 0, 2103001, false, true);
      } else if (status === V++) {
        cm.setQuestCustomData(3927, 1);
        cm.dispose();
      }
    }
  }
}