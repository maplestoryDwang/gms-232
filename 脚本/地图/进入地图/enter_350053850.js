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
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip23=1;skip15=1;skip17=1;act5=350053850");
      cm.npc_ChangeController(1540411, "oid=26143425", 2600, 0, 14, 2550, 2650, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26143425", "summon", 0, 0);
      cm.npc_ChangeController(1540418, "oid=26143426", 2450, 0, 8, 2400, 2500, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26143426", "summon", 0, 0);
      cm.npc_ChangeController(1540430, "oid=26143427", 2340, 0, 6, 2290, 2390, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26143427", "summon", 0, 0);
      cm.npc_ChangeController(1540612, "oid=26143428", 2400, 0, 6, 2350, 2450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143428", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=26143429", 2520, 0, 9, 2470, 2570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143429", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26143425", -1);
      cm.npc_setForceFlip("oid=26143426", -1);
      cm.npc_setForceFlip("oid=26143427", -1);
      cm.npc_setForceFlip("oid=26143428", -1);
      cm.npc_setForceFlip("oid=26143429", -1);
      cm.npc_ChangeController(1540492, "oid=26143430", 1700, -10, 7, 1650, 1750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26143430", "summon", 0, 0);
      cm.npc_ChangeController(1540492, "oid=26143431", 2280, -10, 6, 2230, 2330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26143431", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26143430", 'on', -1, 1);
      cm.npc_SetSpecialAction("oid=26143431", 'on', -1, 1);
      cm.npc_setForceFlip("oid=26143430", -1);
      cm.npc_setForceFlip("oid=26143431", -1);
      cm.npc_ChangeController(1540751, "oid=26143432", 1650, -33, 7, 1600, 1700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143432", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143433", 1450, -33, 3, 1400, 1500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143433", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143434", 1500, -33, 7, 1450, 1550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143434", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143435", 1550, -33, 7, 1500, 1600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143435", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143436", 1600, -33, 7, 1550, 1650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143436", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143437", 1850, -33, 7, 1800, 1900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143437", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143438", 1900, -33, 7, 1850, 1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143438", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143439", 1950, -33, 7, 1900, 2000, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143439", "summon", 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143440", 2000, -33, 7, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143440", 'summon', 0, 0);
      cm.npc_ChangeController(1540751, "oid=26143441", 2050, -33, 7, 2000, 2100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26143441", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26143437", -1);
      cm.npc_setForceFlip("oid=26143438", -1);
      cm.npc_setForceFlip("oid=26143439", -1);
      cm.npc_setForceFlip("oid=26143440", -1);
      cm.npc_setForceFlip("oid=26143441", -1);
      cm.npc_SetSpecialAction("oid=26143432", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143434", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143437", 'attack', -1, 1);
      cm.npc_SetSpecialAction("oid=26143441", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143433", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143436", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143439", 'attack', -1, 1);
      cm.npc_SetSpecialAction("oid=26143435", "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=26143440", 'attack', -1, 1);
      cm.npc_SetSpecialAction("oid=26143438", "attack", -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1750, 0);
      cm.curNodeEventEnd(true);
      cm.effect_LastingEff("Effect/OnUserEff.img/blackHeaven/androidHold", 1, 180000, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.addPopupSay(0, 2000, "又被抓住了!", '', 0);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃，好像无法挣脱……！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 400, 1750, 0);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我现在真的没有力气了。", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 800, 1750, 0);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊…………", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 2300, 0, 1750, 0);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                              cm.emotion(5, 99999);
                              cm.inGameDirectionEvent_OneTimeAction(563, 0);
                              cm.npc_SetSpecialAction("oid=26143432", "die1", -1, 1);
                              cm.npc_SetSpecialAction("oid=26143433", "die2", -1, 1);
                              cm.npc_SetSpecialAction("oid=26143434", "die2", -1, 1);
                              cm.npc_SetSpecialAction("oid=26143435", "die1", -1, 1);
                              cm.npc_SetSpecialAction("oid=26143436", 'die1', -1, 1);
                              cm.npc_SetSpecialAction("oid=26143437", 'die2', -1, 1);
                              cm.npc_SetSpecialAction("oid=26143438", 'die2', -1, 1);
                              cm.npc_SetSpecialAction("oid=26143439", 'die1', -1, 1);
                              cm.npc_SetSpecialAction("oid=26143440", "die2", -1, 1);
                              cm.npc_SetSpecialAction("oid=26143441", 'die1', -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(800);
                              cm.effect_LastingEff(null, 0, 0, 0);
                              cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/androidSuccess");
                              cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/androidSuccess");
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=26143432");
                                cm.npc_LeaveField("oid=26143432");
                                cm.npc_LeaveField("oid=26143433");
                                cm.npc_LeaveField("oid=26143433");
                                cm.npc_LeaveField("oid=26143434");
                                cm.npc_LeaveField("oid=26143434");
                                cm.npc_LeaveField("oid=26143435");
                                cm.npc_LeaveField("oid=26143435");
                                cm.npc_LeaveField("oid=26143436");
                                cm.npc_LeaveField("oid=26143436");
                                cm.npc_LeaveField("oid=26143437");
                                cm.npc_LeaveField("oid=26143437");
                                cm.npc_LeaveField("oid=26143438");
                                cm.npc_LeaveField("oid=26143438");
                                cm.npc_LeaveField("oid=26143439");
                                cm.npc_LeaveField("oid=26143439");
                                cm.npc_LeaveField("oid=26143440");
                                cm.npc_LeaveField("oid=26143440");
                                cm.npc_LeaveField("oid=26143441");
                                cm.npc_LeaveField("oid=26143441");
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 4200, 0);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=26143431", "pushed", -1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=26143429", "attack", 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("真是太好了，幸好我们没有来迟！", 37, 1540452, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("无名的绅士！！", 37, 1540612, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1750, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                cm.forceCompleteQuest(33273);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(350053007, 0, false);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=26143425");
                                                cm.npc_LeaveField("oid=26143425");
                                                cm.npc_LeaveField("oid=26143426");
                                                cm.npc_LeaveField("oid=26143426");
                                                cm.npc_LeaveField("oid=26143427");
                                                cm.npc_LeaveField("oid=26143427");
                                                cm.npc_LeaveField("oid=26143428");
                                                cm.npc_LeaveField("oid=26143428");
                                                cm.npc_LeaveField("oid=26143429");
                                                cm.npc_LeaveField("oid=26143429");
                                                cm.npc_LeaveField("oid=26143430");
                                                cm.npc_LeaveField("oid=26143430");
                                                cm.npc_LeaveField("oid=26143431");
                                                cm.npc_LeaveField("oid=26143431");
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