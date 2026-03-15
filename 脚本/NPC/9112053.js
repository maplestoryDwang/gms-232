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
      if (!cm.haveItem(4034866)) {
        cm.playerMessage(-1, "汽车门锁上了。");
        cm.dispose();
        return;
      }
      cm.sendNormalTalk_Bottom("#face0#哦，汽车门开了。我们打开抽屉瞧瞧吧？", 37, 9111005, false, true);
      cm.gainItem(4034866, -1);
    } else {
      if (status === V++) {
        cm.playerMessage(-1, "获得了钥匙。");
        cm.sendNormalTalk_Bottom("#face0#这个应该是门钥匙！走，我们快逃出去。", 37, 9111005, true, true);
        cm.gainItem(4034867, 1);
      } else if (status === V++) {
        cm.forceCompleteQuest(58812);
        cm.gainItem(4034867, -1);
        cm.dispose();
        cm.warp(800021119, 0, false);
      }
    }
  }
}