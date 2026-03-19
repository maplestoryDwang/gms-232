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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(2159378, "oid=307011", -254, 63, 11, -304, -204, 4, true, 0, false);
      cm.npc_ChangeController(2159380, "oid=307012", -315, 63, 11, -315, -265, 4, true, 0, false);
      cm.npc_ChangeController(2159423, 'oid=307013', 99, 50, 8, 49, 149, 1, false, 0, false);
      cm.npc_ChangeController(2159424, "oid=307014", -346, 63, 10, -396, -344, 0, false, 0, false);
      cm.npc_ChangeController(2159426, 'oid=307015', -169, -301, 4, -219, -119, 1, false, 0, false);
      cm.npc_ChangeController(2159377, "oid=23861409", -180, 50, 11, -230, -130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23861409", "summon", 0, 0);
      cm.setSessionValue("geli", "23861409");
      cm.inGameDirectionEvent_PushMoveInfo(0, 100, -272, -63);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2701);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("今天的测试和调整已经进入了最后的阶段。好的，准备好了吗？", 1, 2159377, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/11", "oid=23861409"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2381);
              } else if (status === V++) {
                cm.forceStartQuest(23600, '');
                cm.spawnMobLimit(9300635, 1, 150, -301, 100);
                cm.getMap().getPortal('labOut00').setScriptName("931050930_out");
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}