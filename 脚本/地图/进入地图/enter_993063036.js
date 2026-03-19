var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(3003783, "oid=277121", -856, 206, 12, -906, -806, 1, false, 0, false);
      cm.npc_ChangeController(3003781, "oid=277122", -785, 206, 14, -835, -735, 0, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277123", -605, 206, 16, -655, -555, 1, false, 0, false);
      cm.npc_ChangeController(3003785, "oid=277124", -448, 206, 4, -498, -398, 1, false, 0, false);
      cm.npc_ChangeController(3003786, 'oid=277125', -227, 206, 1, -277, -177, 1, false, 0, false);
      cm.npc_ChangeController(3003782, "oid=277126", -385, 206, 4, -435, -335, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277127", -856, 206, 12, -906, -806, 1, false, 0, false);
      cm.npc_ChangeController(3003721, "oid=277128", -785, 206, 14, -835, -735, 1, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277129", -605, 206, 16, -655, -555, 1, false, 0, false);
      cm.npc_ChangeController(3003723, "oid=277130", -448, 206, 4, -498, -398, 1, false, 0, false);
      cm.npc_ChangeController(3003721, "oid=277131", -385, 206, 4, -435, -335, 1, false, 0, false);
      cm.npc_ChangeController(3003723, 'oid=277132', -227, 206, 1, -277, -177, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -775, 155);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呜呜……", 37, 3003783, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('没事吧？清醒点了吗？', 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003783, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你振作点……拜托……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('该……死！！！', 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                          cm.forceCompleteQuest(35724);
                                          cm.gainExp(512014069);
                                          cm.dispose();
                                          cm.warp(450011220, 6, false);
                                          cm.setStandAloneMode(false);
                                          cm.setInGameDirectionMode(false, true, false);
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