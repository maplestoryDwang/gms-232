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
      cm.npc_ChangeController(2159391, "oid=1260288", 740, -25, 1, 690, 790, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1260288", "summon", 0, 0);
      cm.setSessionValue("beryl", "1260288");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
      cm.sendNormalTalk("……找到了。", 1, 2159391, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你是……#p2159391#！", 3, 2159391, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("博士命令我把你找回来。觉悟吧！", 1, 2159391, true, true);
        } else if (status === V++) {
          cm.npc_LeaveField("oid=1260288");
          cm.forceStartQuest(23719, '1');
          cm.forceCompleteQuest(23639);
          cm.dispose();
          cm.warp(931060011, 0, false);
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
        }
      }
    }
  }
}