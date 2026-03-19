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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 255, 0);
      cm.onSetMapTagedObjectVisible(1, "ice01", 512);
      cm.onSetMapTagedObjectVisible(1, "ice02", 512);
      cm.onSetMapTagedObjectVisible(1, 'ice03', 512);
      cm.Hidden_background("ice01", 1);
      cm.Hidden_background("ice02", 1);
      cm.Hidden_background("ice03", 1);
      cm.npc_ChangeController(9400580, "oid=7637776", 120, -940, 5, 70, 170, 0, true, false);
      cm.npc_SetSpecialAction("oid=7637776", "summon", 0, 0);
      cm.npc_ChangeController(9400595, "oid=7637777", 330, -940, 2, 280, 380, 1, true, false);
      cm.npc_SetSpecialAction("oid=7637777", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(6500, 1000, 6500, -30, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7637777", -1, 30, 100);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7637776", 1, 30, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.onSetMapTagedObjectVisible(1, "ice01", 0);
                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/plop", 128);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_SetHideEffect(1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.onSetMapTagedObjectVisible(1, 'ice03', 0);
                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/plop", 128);
                        cm.npc_LeaveField("oid=7637777");
                        cm.npc_LeaveField("oid=7637777");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.onSetMapTagedObjectVisible(1, "ice02", 0);
                          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/plop", 128);
                          cm.inGameDirectionEvent_AskAnswerTime(100);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=7637776");
                            cm.npc_LeaveField("oid=7637776");
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/scene1/d0", '0', '', "juliet"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_取消复合图片动画('juliet', 1, 3000);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2028372, 2439151, 1143117, 2023797, 2023798, 0]);
                                        cm.sendNormalTalk_Bottom("#face0#哞~~~Act2结束", 37, 9400595, false, true);
                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(64092);
                                        cm.forceCompleteQuest(64052);
                                        cm.gainItem(2023797, 1);
                                        cm.gainItem(2023798, 1);
                                        cm.gainItem(2028372, 1);
                                        cm.gainItem(2439151, 1);
                                        cm.gainItem(1143117, 1);
                                        cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                        cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                        cm.dispose();
                                        cm.warp(867202101, 0);
                                        cm.monadEndingScene(-1, -1, null);
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