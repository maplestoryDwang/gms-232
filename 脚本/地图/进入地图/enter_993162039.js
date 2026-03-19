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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.forceCompleteQuest(39671);
      cm.Hidden_background("gold", 1, 0, 0, 0);
      cm.npc_ChangeController(3001960, "oid=6594348", 347, 109, 4, 297, 397, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6594348", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 316, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=6594348", "special7", 0, 0);
            cm.sendNormalTalk_Bottom("#face3#咘，咘咘……咘呜？", 36, 3001960, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=6594348", 'special7', 0, 0);
              cm.sendNormalTalk_Bottom("#face0#你是说，痕迹到这里就断了？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(没时间了……我要快点去找杰罗姆。\r\n一旦他失去了利用价值，伯爵就会对他下手。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#最终，我会成为里斯托尼亚的国王，\r\n将这个地方重新打造成舒适宜居之地。……就像从前一样。", 36, 3001952, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#我不想遵循别人制定好的答案。\r\n这种事即使不是国王，也能办到啊？", 36, 3001952, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#但是，我是真心想要拯救王国。\r\n这是唯一能纠正我先祖过错的途径。", 36, 3001954, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#他还有未完成的使命。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7#杰罗姆……我不能让他就这么死掉！", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(就是在这里……我立誓成为守护你的骑士！\r\n……想起那天的情景，我耳边再次响起了低语声。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.forceCompleteQuest(39627);
                                        cm.updateInfoQuest(25980, "normal=#;hard=#");
                                        cm.gainExp(17584);
                                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h1;40=h0;05=h0;14=h1;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h1;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                              } else {
                                                if (status === V++) {
                                                  cm.warp(410000300, 0, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_LeaveField("oid=6594348");
                                                  cm.dispose();
                                                  while (cm.getLevel() < 30) {
                                                    cm.getPlayer().levelUp();
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
  }
}