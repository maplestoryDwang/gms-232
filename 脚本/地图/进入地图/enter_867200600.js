var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.cancelItem(2210211);
  cm.cancelItem(2210207);
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
      cm.npc_ChangeController(9400641, "oid=3667854", 530, 330, 2, 480, 580, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667854", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667855", 630, 330, 2, 580, 680, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667855", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667856", 730, 330, 3, 680, 780, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667856", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667857", 830, 330, 3, 780, 880, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667857", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667858", 930, 330, 3, 880, 980, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667858", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667859", 1030, 330, 3, 980, 1080, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667859", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667860", 1130, 330, 3, 1080, 1180, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667860", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667861", 1230, 330, 3, 1180, 1280, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667861", 'summon', 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667862", 1430, 330, 3, 1380, 1480, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667862", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667863", -200, 330, 1, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667863", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667864", -300, 330, 1, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667864", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667865", -400, 330, 1, -450, -350, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667865", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667866", -500, 330, 1, -550, -450, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667866", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=3667867", -600, 330, 1, -650, -550, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667867", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=3667868", -700, 330, 1, -750, -650, 0, true, false);
      cm.npc_SetSpecialAction("oid=3667868", 'summon', 0, 0);
      cm.npc_ChangeController(9400617, "oid=3667869", 790, 330, 3, 740, 840, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667869", 'summon', 0, 0);
      cm.npc_ChangeController(9400618, "oid=3667870", 740, 330, 3, 690, 790, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667870", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3667871", 640, 330, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667871", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=3667872", 540, 330, 2, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667872", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3667873", 590, 330, 2, 540, 640, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667873", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=3667874", 690, 330, 2, 640, 740, 1, true, false);
      cm.npc_SetSpecialAction("oid=3667874", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3667864", 'skill1', 0, 1);
      cm.npc_SetSpecialAction("oid=3667855", 'attack1', 0, 1);
      cm.npc_SetSpecialAction("oid=3667857", "attack1", 0, 1);
      cm.npc_SetSpecialAction("oid=3667862", 'skill1', 0, 1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
      cm.spawnMobLimit(9402313, 1, -65, 291, 3);
      cm.spawnMobLimit(9402314, 1, -140, 291, 2);
      cm.spawnMobLimit(9402313, 1, 145, 291, 3);
      cm.spawnMobLimit(9402314, 1, 220, 291, 2);
      cm.spawnMobLimit(9402313, 1, 300, 291, 3);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=3667859", 'attack1', 0, 1);
        cm.npc_SetSpecialAction("oid=3667856", "skill1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=3667860", 'attack1', 0, 1);
          cm.npc_SetSpecialAction("oid=3667861", "skill1", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(200);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=3667868", "skill1", 0, 1);
            cm.npc_SetSpecialAction("oid=3667854", 'skill1', 0, 1);
            cm.sendNormalTalk_Bottom('野狼群追来了！', 37, 9400596, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=3667854", 'skill1', 0, 1);
              cm.npc_SetSpecialAction("oid=3667855", 'skill1', 0, 1);
              cm.npc_SetSpecialAction("oid=3667856", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667857", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667858", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667859", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667860", 'skill1', 0, 1);
              cm.npc_SetSpecialAction("oid=3667861", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667862", 'skill1', 0, 1);
              cm.npc_SetSpecialAction("oid=3667863", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667864", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667865", 'skill1', 0, 1);
              cm.npc_SetSpecialAction("oid=3667866", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667867", "skill1", 0, 1);
              cm.npc_SetSpecialAction("oid=3667868", "skill1", 0, 1);
              cm.npc_SetForceMove("oid=3667869", -1, 2000, 210);
              cm.npc_SetForceMove("oid=3667870", -1, 2000, 300);
              cm.npc_SetForceMove("oid=3667871", -1, 2000, 270);
              cm.npc_SetForceMove("oid=3667872", -1, 2000, 230);
              cm.npc_SetForceMove("oid=3667873", -1, 2000, 200);
              cm.npc_SetForceMove("oid=3667874", -1, 2000, 250);
              cm.sendNormalTalk_Bottom("哇啊啊啊啊啊！", 37, 9400596, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=3667869");
                  cm.npc_LeaveField("oid=3667869");
                  cm.npc_LeaveField("oid=3667870");
                  cm.npc_LeaveField("oid=3667870");
                  cm.npc_LeaveField("oid=3667871");
                  cm.npc_LeaveField("oid=3667871");
                  cm.npc_LeaveField("oid=3667872");
                  cm.npc_LeaveField("oid=3667872");
                  cm.npc_LeaveField("oid=3667873");
                  cm.npc_LeaveField("oid=3667873");
                  cm.npc_LeaveField("oid=3667874");
                  cm.npc_LeaveField("oid=3667874");
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=3667854");
                    cm.npc_LeaveField("oid=3667854");
                    cm.npc_LeaveField("oid=3667855");
                    cm.npc_LeaveField("oid=3667855");
                    cm.npc_LeaveField("oid=3667856");
                    cm.npc_LeaveField("oid=3667856");
                    cm.npc_LeaveField("oid=3667857");
                    cm.npc_LeaveField("oid=3667857");
                    cm.npc_LeaveField("oid=3667858");
                    cm.npc_LeaveField("oid=3667858");
                    cm.npc_LeaveField("oid=3667859");
                    cm.npc_LeaveField("oid=3667859");
                    cm.npc_LeaveField("oid=3667860");
                    cm.npc_LeaveField("oid=3667860");
                    cm.npc_LeaveField("oid=3667861");
                    cm.npc_LeaveField("oid=3667862");
                    cm.npc_LeaveField("oid=3667863");
                    cm.npc_LeaveField("oid=3667863");
                    cm.npc_LeaveField("oid=3667864");
                    cm.npc_LeaveField("oid=3667864");
                    cm.npc_LeaveField("oid=3667865");
                    cm.npc_LeaveField("oid=3667865");
                    cm.npc_LeaveField("oid=3667866");
                    cm.npc_LeaveField("oid=3667866");
                    cm.npc_LeaveField("oid=3667867");
                    cm.npc_LeaveField("oid=3667867");
                    cm.npc_LeaveField("oid=3667868");
                    cm.npc_LeaveField("oid=3667868");
                    cm.setInGameDirectionMode(false, true, false);
                    cm.spawnMobLimit(9402246, 1, 530, 291, 100);
                    cm.spawnMobLimit(9402245, 1, 630, 291, 100);
                    cm.spawnMobLimit(9402245, 1, 730, 291, 100);
                    cm.spawnMobLimit(9402246, 1, 830, 291, 100);
                    cm.spawnMobLimit(9402245, 1, 930, 291, 100);
                    cm.spawnMobLimit(9402245, 1, 1030, 291, 100);
                    cm.spawnMobLimit(9402245, 1, 1130, 291, 100);
                    cm.spawnMobLimit(9402245, 1, -200, 291, 100);
                    cm.spawnMobLimit(9402246, 1, -300, 291, 100);
                    cm.spawnMobLimit(9402245, 1, -400, 291, 100);
                    cm.spawnMobLimit(9402246, 1, -500, 291, 100);
                    cm.spawnMobLimit(9402245, 1, -600, 291, 100);
                    cm.spawnMobLimit(9402246, 1, -700, 291, 100);
                    cm.forceJoinEvent("莫奈德_地图_Act1.3_雪地野狼");
                    cm.dispose();
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