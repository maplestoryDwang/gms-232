var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.onSetMapObjectMove("subway_bg", [6, 1]);
      cm.onSetMapObjectMove("subway_wheel", [6, 1]);
      cm.onSetMapObjectMove("subway_main", [6, 1]);
      cm.onSetMapObjectMove("subway_frame", [6, 1]);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.setPartner(1, 1531003, 80001789, 0);
      cm.npc_ChangeController(1531020, "oid=5566788", 680, 23, 30, 630, 730, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5566788", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=5566788", 'runaway', -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 680, 50);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === O++) {
          cm.sendNormalTalk_Bottom("#face0#喂！！你！站在那儿不许动！！！", 37, V, false, true);
        } else {
          if (status === O++) {
            cm.npc_setForceFlip("oid=5566788", -1);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === O++) {
              cm.npc_setForceFlip("oid=5566788", 1);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === O++) {
                cm.npc_setForceFlip("oid=5566788", -1);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === O++) {
                  cm.npc_setForceFlip("oid=5566788", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === O++) {
                    cm.npc_SetForceMove("oid=5566788", 1, 100, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === O++) {
                      cm.npc_LeaveField("oid=5566788");
                      cm.npc_LeaveField("oid=5566788");
                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else if (status === O++) {
                      cm.cameraSwitch_PushSwitchMoveInfo("go_out", 1000);
                      cm.addPopupSay(1531003, 2000, "#face5#超能力者,  前方有怪物出现！！", '', 0);
                      cm.spawnMobLimit(2700313, 1, 600, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 600, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 580, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 580, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 550, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 550, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 570, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 570, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 590, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 590, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 520, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 520, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 500, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 500, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 450, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 450, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 490, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 490, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 510, 57, 100);
                      cm.spawnMobLimit(2700313, 1, 510, 57, 100);
                      cm.setStandAloneMode(false);
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.updateInfoQuest(22701, "kinePro=1;clear1=1");
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
}