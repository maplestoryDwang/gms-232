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
      cm.npc_ChangeController(3003705, 'oid=276985', -40, 206, 8, -90, 10, 1, false, 0, false);
      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;05=h2;15=h1;09=h0;79=h1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呼哧……呼哧……似乎没追到这里来……", 57, 0, false, true);
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
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("声音应该就是从这附近传出来的……", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_azaleinTied/0", 0, 500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("有人被绑起来了！", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(35712);
                                                  cm.gainExp(341342713);
                                                  cm.updateInfoQuest(35712, "count=112;dir2=end;dir=end;enterinfo=end");
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