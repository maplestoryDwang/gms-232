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
      cm.npc_ChangeController(1540751, "oid=26140230", 1650, -33, 4, 1600, 1700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140230", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140231", 1450, -33, 2, 1400, 1500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140231", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140232", 1500, -33, 4, 1450, 1550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140232", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140233", 1550, -33, 4, 1500, 1600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140233", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140234", 1600, -33, 4, 1550, 1650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140234", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140235", 1850, -33, 4, 1800, 1900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140235", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140236", 1900, -33, 4, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140236", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140237", 1950, -33, 4, 1900, 2000, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140237", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140238", 2000, -33, 4, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140238", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26140239", 2050, -33, 4, 2000, 2100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26140239", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26140235", -1);
      cm.npc_setForceFlip("oid=26140236", -1);
      cm.npc_setForceFlip("oid=26140237", -1);
      cm.npc_setForceFlip("oid=26140238", -1);
      cm.npc_setForceFlip("oid=26140239", -1);
      cm.npc_SetSpecialAction("oid=26140230", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26140232", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26140235", 'attack', -1, 1);
      cm.npc_SetSpecialAction("oid=26140239", "attack", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=26140231", "attack", -1, 1);
        cm.npc_SetSpecialAction("oid=26140234", 'attack', -1, 1);
        cm.npc_SetSpecialAction("oid=26140237", "attack", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=26140233", "attack", -1, 1);
          cm.npc_SetSpecialAction("oid=26140238", "attack", -1, 1);
          cm.npc_SetSpecialAction("oid=26140236", "attack", -1, 1);
          cm.inGameDirectionEvent_PushScaleInfo(0, 2100, 0, 1750, 0);
          cm.effect_LastingEff("Effect/OnUserEff.img/blackHeaven/androidHold", 1, 180000, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.addPopupSay(0, 5000, "被抓住了!", '', 0);
              cm.inGameDirectionEvent_QTE(1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(7);
                cm.inGameDirectionEvent_AskAnswerTime(470);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                  cm.emotion(5, 99999);
                  cm.inGameDirectionEvent_OneTimeAction(563, 0);
                  cm.npc_SetSpecialAction("oid=26140230", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140231", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140232", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140233", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140234", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140235", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140236", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140237", "hit1", -1, 1);
                  cm.npc_SetSpecialAction("oid=26140238", 'hit1', -1, 1);
                  cm.npc_SetSpecialAction("oid=26140239", "hit1", -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                  cm.effect_LastingEff(null, 0, 0, 0);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/androidSuccess");
                } else {
                  if (status === V++) {
                    cm.addPopupSay(0, 5000, "危险!", '', 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(350053800, 0, true);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=26140230");
                    cm.npc_LeaveField("oid=26140230");
                    cm.npc_LeaveField("oid=26140231");
                    cm.npc_LeaveField("oid=26140231");
                    cm.npc_LeaveField("oid=26140232");
                    cm.npc_LeaveField("oid=26140232");
                    cm.npc_LeaveField("oid=26140233");
                    cm.npc_LeaveField("oid=26140233");
                    cm.npc_LeaveField("oid=26140234");
                    cm.npc_LeaveField("oid=26140234");
                    cm.npc_LeaveField("oid=26140235");
                    cm.npc_LeaveField("oid=26140235");
                    cm.npc_LeaveField("oid=26140236");
                    cm.npc_LeaveField("oid=26140236");
                    cm.npc_LeaveField("oid=26140237");
                    cm.npc_LeaveField("oid=26140237");
                    cm.npc_LeaveField("oid=26140238");
                    cm.npc_LeaveField("oid=26140238");
                    cm.npc_LeaveField("oid=26140239");
                    cm.npc_LeaveField("oid=26140239");
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