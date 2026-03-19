var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400589, "oid=7533589", -638, -70, 1, -688, -588, 0, true, false);
      cm.npc_SetSpecialAction("oid=7533589", "summon", 0, 0);
      cm.npc_ChangeController(9400592, "oid=7533590", -10, -70, 1, -60, 40, 1, true, false);
      cm.npc_SetSpecialAction("oid=7533590", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#b阿尔西！再用力击打！", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7533590", "attack1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b佩图尔！现在！扔出斧头！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#斧头出龙门！！", 37, 9400589, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7533589", "attack2", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呜哇哇啊！太了不起了！", 37, 9400592, false, true);
              } else {
                if (status === V++) {
                  cm.playerMessage(-1, "成为佩图尔和阿尔西的修炼对象，直到他们累垮。");
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=7533589");
                      cm.npc_LeaveField("oid=7533589");
                      cm.npc_LeaveField("oid=7533590");
                      cm.npc_LeaveField("oid=7533590");
                      cm.setInGameDirectionMode(false, true, false);
                      cm.spawnMobLimit(9402329, 1, -650, -115, 1);
                      cm.spawnMobLimit(9402330, 1, -10, -115, 1);
                      cm.dispose();
                      cm.forceJoinEvent("莫奈德_地图_Act3.3_战斗训练1");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;