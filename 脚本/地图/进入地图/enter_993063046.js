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
      cm.npc_ChangeController(3003739, "oid=277160", 1150, 274, 77, 1100, 1200, 1, false, 0, false);
      cm.npc_ChangeController(3003781, 'oid=277161', 1487, 274, 104, 1437, 1537, 1, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277162", 901, 244, 41, 851, 951, 0, false, 0, false);
      cm.npc_ChangeController(3003782, 'oid=277163', 639, 274, 93, 589, 689, 1, false, 0, false);
      cm.npc_ChangeController(3003783, "oid=277164", 1021, -236, 61, 971, 1071, 1, false, 0, false);
      cm.npc_ChangeController(3003785, "oid=277165", 1667, 274, 106, 1617, 1717, 0, false, 0, false);
      cm.npc_ChangeController(3003786, 'oid=277166', 1315, -236, 64, 1265, 1365, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1120, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这……是什么……？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("把我……吸进去……了……！！！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不要！！！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm25/destructionTown", 0, 0);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("射手村！", 56, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1155, 260);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.effect_NormalSpeechBalloon("我没能守护住……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 3003700, null, cm.getPlayer().getId());
                                cm.sendNormalTalk_Bottom("赫丽娜？！", 56, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                              cm.dispose();
                                              cm.warp(993063047, 0, false);
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
  }
}