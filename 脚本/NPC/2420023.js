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
      if (cm.isQuestActive(41063)) {
        cm.sendNormalTalk("既然会向我借钱，我会让你还够利息的。", 16, 0, false, true);
      } else {
        cm.sendOk('（空空荡荡的坛子。）');
        cm.dispose();
      }
    } else if (status === V++) {
      cm.updateInfoQuest(41063, "clear=clear");
      cm.sendNormalTalk("虽然拿到钱了，但总觉得有点不安。还是先去#b沙子图团据点#k查看一下情况吧。", 16, 0, true, true);
    } else {
      cm.dispose();
    }
  }
}