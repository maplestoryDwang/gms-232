var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(u, k, d) {
  if (status == 0 && u == 0) {
    cm.dispose();
    return;
  }
  if (u == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = d;
  var j = -1;
  if (status <= j++) {
    cm.dispose();
  } else {
    if (status === j++) {
      if (!cm.haveItem(4034284, 2)) {
        cm.sendNormalTalk("修理所需的材料不足。\r\n#r[尝试修理]#k\r\n所需材料：#i4034284# #b#t4034284# 2个以上#k", 1, 2155116, false, true);
        cm.dispose();
      } else if (cm.getNumberFromQuestInfo(39116, "success") > 0) {
        cm.sendNormalTalk("已经完成了修理。\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155116, false, true);
        cm.dispose();
      } else {
        cm.askYesNo("修理所需的材料已经足够。\r\n#r[尝试修理]#k\r\n所需材料：#i4034284# #b#t4034284# 2个以上#k\r\n\r\n确定要现在修理吗？", 0, 2155116);
      }
    } else if (status === j++) {
      cm.gainItem(4034284, -2);
      cm.npc_SetSpecialAction("oid=tower1", "repaired", -1, 1);
      cm.updateInfoQuest(39116, "success=1;start=1");
      cm.sendNormalTalk("适当运用材料，完成了修理。\r\n带着这些材料，\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155116, false, true);
    } else {
      cm.dispose();
    }
  }
}