var status = -1;
var selectionLog = [];
function action(T, R, X) {
  if (status == 0 && T == 0) {
    cm.dispose();
    return;
  }
  var E = cm.getNumberFromQuestInfo(34021, 'hero1');
  var W = cm.getNumberFromQuestInfo(34021, "hero2");
  status++;
  selectionLog[status] = X;
  var e = -1;
  if (status <= e++) {
    cm.dispose();
  } else {
    if (status === e++) {
      cm.npc_ChangeController(1540795, 'oid=59704', 809, -1774, 23, 759, 859, 0, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132400;act4=350140500");
      cm.onSetMapTagedObjectVisible(1, "pt00", 512);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setNumberForQuestCustomData(33900, 6);
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -682, -895);
      cm.npc_ChangeController(1540807, "oid=293623663", -815, -850, 15, -865, -765, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293623663", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + E, "oid=293623664", -815, -850, 15, -865, -765, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293623664", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + W, "oid=293623665", -900, -810, 14, -950, -850, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293623665", "summon", 0, 0);
      cm.npc_SetForceMove("oid=293623663", 1, 800, 150);
      cm.npc_SetForceMove("oid=293623664", 1, 800, 150);
      cm.npc_SetForceMove("oid=293623665", 1, 800, 150);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.npc_LeaveField("oid=59704");
    } else {
      if (status === e++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === e++) {
          cm.sendNormalTalk_Bottom("#face3#这里是……", 37, 1540805, false, true, 1, 4000);
          cm.inGameDirectionEvent_MoveAction(0);
        } else {
          if (status === e++) {
            cm.npc_setForceFlip("oid=293623663", -1);
            cm.npc_setForceFlip("oid=293623664", -1);
            cm.npc_setForceFlip("oid=293623665", -1);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.sendNewEffects(18, [3000, 1000, 600, -330, -250]);
          } else {
            if (status === e++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === e++) {
                cm.sendNormalTalk_Bottom("世界树的内部……原来是这样的啊。", 37, 1540801 + E, false, true);
              } else {
                if (status === e++) {
                  cm.sendNewEffects(18, [2000, 600, 1500, 0, 150]);
                } else {
                  if (status === e++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === e++) {
                      cm.sendNormalTalk_Bottom("主人，看那边！有什么东西在发光！", 37, 1540807, false, true);
                    } else {
                      if (status === e++) {
                        cm.sendNormalTalk_Bottom("#face3#踩着应该就能上去了！", 37, 1540805, true, true);
                      } else {
                        if (status === e++) {
                          cm.sendNewEffects(18, [1000, 1500, 1000, 330, 100]);
                        } else {
                          if (status === e++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === e++) {
                              cm.npc_LeaveField("oid=293623663");
                              cm.npc_LeaveField("oid=293623663");
                              cm.npc_LeaveField("oid=293623664");
                              cm.npc_LeaveField("oid=293623664");
                              cm.npc_LeaveField("oid=293623665");
                              cm.npc_LeaveField("oid=293623665");
                              cm.sendNewEffects(19, [1000]);
                            } else if (status === e++) {
                              cm.updateInfoQuest(34019, "40500=1");
                              cm.setInGameDirectionMode(false, true, false);
                              cm.updateInfoQuest(33901, "rp=7/" + E + '/' + W);
                              cm.setNumberForQuestCustomData(33900, 7);
                              cm.showMapleHero();
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;