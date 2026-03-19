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
      cm.npc_ChangeController(3001693, "oid=430777", 2255, 1085, 214, 2205, 2305, 1, false, 0, false);
      cm.npc_ChangeController(3001637, "oid=430778", 2415, 807, 690, 2365, 2465, 1, false, 0, false);
      cm.npc_ChangeController(3001637, "oid=430779", 2069, -234, 371, 2019, 2119, 1, false, 0, false);
      cm.npc_ChangeController(3001637, 'oid=430780', 2838, 140, 401, 2788, 2888, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2238, -182);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
          cm.updateInfoQuest(53732, '5=0');
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 2238, 575);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我和饕餮到达了林中之城。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#经过到处都散发阴森气息的森林", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#循着怪物的气息而去，是一个潮湿的洞穴。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n那里到处簇拥着无数僵尸蘑菇群。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#还有那中间的僵尸蘑菇王！", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#不管怎么除掉那家伙，它都能顽强地复活。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n“……看样子需要用点特别的法子！”", 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 2238, 1100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                                              cm.warp(105010300, 6, false);
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