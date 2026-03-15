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
      if (cm.isQuestActive(41062)) {
        cm.sendNormalTalk("都拿走的话会露馅的，只能拿适当的量。然后再在这里放上伪造的幻影的信就行了。虽然对幻影有些抱歉……呃，反正不关我的事？", 16, 0, false, true);
      } else {
        cm.sendOk("（不知道谁的家当。看上去财富不少。）");
        cm.dispose();
      }
    } else if (status === V++) {
      cm.updateInfoQuest(41062, "clear2=clear;clear=clear");
      cm.gainItem(4033809, -1);
      cm.gainItem(4033810, 1);
      cm.dispose();
    }
  }
}