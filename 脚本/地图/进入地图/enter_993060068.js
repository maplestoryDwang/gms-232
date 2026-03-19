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
      cm.npc_ChangeController(3003671, 'oid=275970', -2140, -488, 1, -2166, -2066, 4, true, 0, false);
      cm.npc_ChangeController(3003670, 'oid=275971', -3072, -488, 2, -3074, -2974, 5, true, 0, false);
      cm.npc_ChangeController(3003670, "oid=275972", -3112, -488, 2, -3156, -3056, 5, true, 0, false);
      cm.npc_ChangeController(3003671, 'oid=275973', -2319, -488, 1, -2352, -2252, 4, true, 0, false);
      cm.npc_ChangeController(3003671, "oid=275974", -2263, -488, 1, -2263, -2163, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2631, -553);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18#不久后，别动队突击船"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#明明巨大怪兽进行了攻击……\r\n这，这是……奇迹吗！？", 37, 3003661, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("（强烈的光围绕在周围，保护了大家。\r\n那个光到底是……）", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2##b#ho##k，女皇陛下挡住了巨大怪兽的攻击。\r\n现在是好机会。请继续前进。", 37, 3003651, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#这晶莹的光会引导迷路的舰队……\r\n请再坚持一下。", 37, 3003651, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("好的，南哈特！！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("（虽然奇迹般的防御创造出了机会，\r\n但是巨大怪兽的眼睛还没闭上。）", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("（还……还没结束。\r\n在攻击再次开始之前，必须继续前进。）", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("继续向前推进！！", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.forceStartQuest(35628, '');
                                          cm.forceCompleteQuest(35628);
                                          cm.gainExp(171586691);
                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d11=1;d582=1;d12=1;d30=1;d13=1;di9=1;d14=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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