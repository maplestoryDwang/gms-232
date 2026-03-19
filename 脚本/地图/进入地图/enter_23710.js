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
      cm.npc_ChangeController(2159391, "oid=1272414", -163, 32, 7, -213, -113, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1272414", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("一切从这里开始。你和我就是在这个研究所中诞生的。然后你背叛了父亲，而我一直在追踪你……。", 1, 2159391, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("现在是时候做个了断了。", 1, 2159391, true, true);
          } else {
            if (status === V++) {
              cm.askYesNo("我要事先声明，这将是你我的最后一次战斗。拿出你全部的力量来吧。", 1, 2159391);
            } else if (status === V++) {
              cm.npc_LeaveField("oid=1272414");
              cm.spawnMobLimit(9300639, 1, -163, 43, 100);
              cm.playerMessage(-1, "打倒了维丽尔。");
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.forceStartQuest(23723, '1');
              cm.warp(931060041, 0, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}