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
      cm.npc_ChangeController(3001960, "oid=434187", -646, 20, 4, -696, -596, 4, true, 0, false);
      cm.npc_ChangeController(3001952, "oid=434188", -748, 20, 4, -798, -698, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -750, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(尽管能看到进出的痕迹，却无人打理。\r\n看样子要么是被荒置了……要么是被遗忘了。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(这里有动静的除了怪物，就是我们三个。\r\n问题是，这里是什么地方……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -730, 18);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#从位置上看，这里应该是宅邸的地下。\r\n接收器的信号正指向这上方。", 36, 3001952, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#也有可能，这里是从前王室的秘密房间。\r\n穿过这里就能通到宅邸吗？", 36, 3001952, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#可是，这前面再没看到有什么出口了。\r\n难道……是我的接收器出故障了！？", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 600, -100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(眼前只看见一丛丛的荆棘……等等，那荆棘丛后面有东西。\r\n是铁门……如果把荆棘丛清除掉的话！？)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(虽然我可以用剑一把扫除荆棘，但眼下我有同伴，\r\n得想个更低调安全的方法。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.forceCompleteQuest(39614);
                                            cm.gainExp(2166);
                                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=1");
                                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h1;20=h0;03=h1;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                            cm.updateInfoQuest(39601, "50=h0;51=h1;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=1");
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
                                                  cm.warp(410000338, 0, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
          }
        }
      }
    }
  }
}