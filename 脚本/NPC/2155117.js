var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(q, B, v) {
  if (status == 0 && q == 0) {
    cm.dispose();
    return;
  }
  if (q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = v;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else {
    if (status === N++) {
      if (!cm.haveItem(4034289, 2)) {
        cm.sendNormalTalk("修理所需的材料不足。\r\n#r[尝试修理]#k\r\n所需材料：#i4034289# #b#t4034289# 2个以上#k", 1, 2155117, false, true);
        cm.dispose();
      } else if (cm.getNumberFromQuestInfo(39125, "success") > 0) {
        cm.sendNormalTalk("已经完成了修理。\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155117, false, true);
        cm.dispose();
      } else {
        cm.askYesNo("修理所需的材料已经足够。\r\n#r[尝试修理]#k\r\n所需材料：#i4034289# #b#t4034289# 2个以上#k\r\n\r\n确定要现在修理吗？", 0, 2155117);
      }
    } else if (status === N++) {
      cm.gainItem(4034289, -2);
      cm.npc_SetSpecialAction("oid=tower2", "repaired", -1, 1);
      cm.updateInfoQuest(39125, "success=1;start=1");
      cm.sendNormalTalk("适当运用材料，完成了修理。\r\n带着这些材料，\r\n回去告诉#b侦察中的机器人吧。#k", 1, 2155117, false, true);
    } else {
      cm.dispose();
    }
  }
}