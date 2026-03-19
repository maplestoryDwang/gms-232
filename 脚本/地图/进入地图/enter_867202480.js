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
      cm.npc_ChangeController(9400582, "oid=7540406", -500, -70, 1, -550, -450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7540406", "summon", 0, 0);
      cm.npc_ChangeController(9400602, "oid=7540407", -100, -70, 1, -150, -50, 1, true, false);
      cm.npc_SetSpecialAction("oid=7540407", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.addPopupSay(9400582, 1000, "#face0#刺！", '', 0);
        cm.npc_SetSpecialAction("oid=7540407", "attack1", 0, 1);
        cm.addPopupSay(9400582, 1000, "#face0#格挡！", '', 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7540407", 'attack2', 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#别忘了！", 37, 9400582, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#格挡、刺！", 37, 9400582, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=7540406", "buff", 0, 1);
                  cm.playerMessage(-1, "成为艾伊纳尔和凯恩的修炼对象，直到他们累垮。");
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=7540406");
                      cm.npc_LeaveField("oid=7540406");
                      cm.npc_LeaveField("oid=7540407");
                      cm.npc_LeaveField("oid=7540407");
                      cm.setInGameDirectionMode(false, true, false);
                      cm.spawnMobLimit(9402334, 1, -550, -115, 1);
                      cm.spawnMobLimit(9402335, 1, -10, -115, 1);
                      cm.addPopupSay(9400582, 1000, "#face0#要看着敌人攻击！", '', 0);
                      cm.addPopupSay(9400602, 1000, "#face3#呼……呼……", '', 0);
                      cm.dispose();
                      cm.forceJoinEvent("莫奈德_地图_Act3.8_战斗训练4");
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