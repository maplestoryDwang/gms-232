var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  var V = cm.getInfoQuest(37721);
  if (V === "boss=kill" && !cm.isQuestFinished(37721)) {
    action击杀BOSS后(f, E, e);
  } else {
    cm.dispose();
  }
}
function action击杀BOSS后(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.Hidden_background('flower0', 1, 0, 0, 0);
      cm.Hidden_background('flower1', 1, 0, 0, 0);
      cm.Hidden_background("flower2", 1, 1, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;18=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
      cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;20=h2;11=h0;02=h0;12=h0;03=h0;13=h0;04=h1;14=h1;05=h0;15=h0;06=h0;16=h1;07=h0;17=h0;08=h0;26=h0;18=h0;09=h0;81=h0;36=h0;82=h1;37=h0");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 412, 76);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 30, -15);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004751, "oid=1862495", 90, 54, 2, 40, 140, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=1862495", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=1862495", "stand1", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("呃……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004718, null, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("休想夺走……我意志……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004718, null, cm.getPlayer().getId());
                        cm.setNpcSpecialActionReset("oid=1862495");
                        cm.npc_SetSpecialAction("oid=1862495", "die", 3000, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642091/Die", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(37700, "10=h0;11=h0;12=h0;13=h0;14=h1;15=h0;16=h1;36=h0;17=h0;37=h0;18=h0;19=h1;00=h0;20=h2;01=h0;02=h0;03=h0;04=h1;81=h0;05=h0;82=h1;06=h0;26=h0;07=h0;08=h0;09=h0");
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else if (status === V++) {
                                      cm.setStandAloneMode(false);
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.forceCompleteQuest(37721);
                                      cm.gainExp(33793674);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}