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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9062172, "oid=4097315", 1050, -100, 17, 1000, 1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=4097315", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(6000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18##fn黑体#新复古王国", ''], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n你来了，#b#h0##k。", 37, 9062172, false, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n现在该去解除#r新复古盔甲#k的封印了。", 37, 9062172, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n事态紧急，快抓紧时间吧。", 37, 9062172, true, true, 3);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.npc_LeaveField("oid=4096727");
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/16thEvent/item/5", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n你是第一个尝试解除#r新复古盔甲#k封印的人。", 37, 9062172, false, true, 3);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("\r\n我相信你一定会成功的！#b#h0##k！", 37, 9062172, true, true, 3);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("\r\n来，你集中精神，将#b新复古能量#k凝聚于指尖。", 37, 9062172, true, true, 3);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("\r\n（感觉指尖充满力量）", 56, 0, true, true, 3);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("\r\n噢，不知不觉间，你已经可以熟练地操纵#b新复古能量#k了呢。", 37, 9062172, true, true, 3);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("\r\n好！趁现在！#b#h0##k！\r\n不要迟疑，伸手触碰#r新复古盔甲#k！", 37, 9062172, true, true, 3);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("\r\n（缓缓伸手触摸盔甲，一股比之前更强烈的热气从指尖传递而来）", 56, 0, true, true, 3);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/16thEvent/item/1", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("\r\n!!!", 37, 9062172, false, true, 3);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("\r\n很好！我就知道你能办到！\r\n#r新复古盔甲#k的封印解除了！", 37, 9062172, true, true, 3);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("\r\n我再一次确认，你就是能拯救我们王国于危难的传说中的#b新复古英雄#k，#b#h0##k。", 37, 9062172, true, true, 3);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("\r\n在你解除#r新复古头盔#k的封印之前，我会好好把守这里的！", 37, 9062172, true, true, 3);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.sendNormalTalk_Bottom("\r\n#b奥罗拉公主#k和我们王国的命运全寄托在你身上了，切记！", 37, 9062172, true, true, 3);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.warp(993110000, 33, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setNumberForQuestInfo(500728, "Scene", 1);
                                                        cm.npc_LeaveField("oid=4097315");
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;