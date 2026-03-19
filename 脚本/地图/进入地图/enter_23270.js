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
      cm.npc_ChangeController(2159320, 'oid=247616', 430, 6, 23, 380, 480, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2159324, "oid=998769", 340, -10, 24, 290, 390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=998769", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=998769", "spell", 0, 1);
      cm.sendNormalTalk("好了，把禁忌炼金书献给我，慢慢地～", 1, 2159324, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("把禁忌炼金书献出来。把禁忌炼金书献出来。", 1, 2159320, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('#b什么人！！！#k', 3, 2159320, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=998769", -1, 50, 100);
            cm.sendNormalTalk("你的运气真不好。要是装作没看见的话，应该就能保住性命。", 1, 2159324, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b要看看是谁的运气不好吗？#k", 3, 2159324, true, true);
            } else if (status === V++) {
              cm.setStandAloneMode(false);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.npc_LeaveField("oid=998769");
              cm.spawnMobLimit(9300457, 1, 290, 6, 100);
              cm.scheduleWarpTask(10, 926150010);
              cm.addPopupSay(0, 6000, '击杀后等待时间结束。');
              cm.dispose();
            }
          }
        }
      }
    }
  }
}