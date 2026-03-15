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
      cm.sendNormalTalk("哼……眼镜将军说的没错。你们果然来了。不过没关系。反正需要的情报已经到手了……", 1, 1204031, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("下次见面就是你的死期，呵呵……告辞！", 1, 1204031, true, true);
      } else if (status === V++) {
        cm.forceStartQuest(21765, '1');
        cm.gainItem(4032328, 1);
        cm.npc_LeaveField("oid=409167");
        cm.dispose();
      }
    }
  }
}