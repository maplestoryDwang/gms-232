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
      if (cm.getNumberFromQuestInfo(64272, 'damage') == 0) {
        cm.setNumberForQuestInfo(64272, '1', 1);
      }
      cm.onActionBarResult(6, 1009);
      cm.gainSkillBuff(80011554);
      cm.forceCompleteQuest(64091);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 980);
        cm.sendNewEffects(17, [5000, 1000, 2000, 950, -351]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9400690, "oid=7637043", 2800, -100, 45, 2750, 2850, 1, true, false);
            cm.npc_SetSpecialAction("oid=7637043", 'summon', 0, 0);
            cm.setMobImage("Mob.img/9402274/Hang", 100);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack2", 128);
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
              } else {
                if (status === V++) {
                  cm.sendNewEffects(17, [4000, 2000, 1000, 2200, -350]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=7637043", -1, 550, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(12, [0, 1400, -351, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.playSoundEffDirectly("Mob.img/9402274/Hang");
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack7", 128);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=7637043");
                                      cm.sendNewEffects(19, [0]);
                                    } else if (status === V++) {
                                      cm.warp(867202051, 0);
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