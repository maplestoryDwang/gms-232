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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9062172, "oid=53153825", 1050, -100, 17, 1000, 1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=53153825", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(6000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#新复古王国", ''], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n你来了，#b#h0##k。", 37, 9062172, false, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n总算是时候解除#r新复古头盔#k的封印了。", 37, 9062172, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n事态紧急，快抓紧时间吧。", 37, 9062172, true, true, 3);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=53153488");
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/16thEvent/item/6", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n只要成功解开这#r新复古头盔#k的封印，剩下的就只有#r新复古之剑#k了。", 37, 9062172, false, true, 3);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("\r\n现在你不需要我帮忙了吧？", 37, 9062172, true, true, 3);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("\r\n我会在这里为你祈祷，开始吧！", 37, 9062172, true, true, 3);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("\r\n（全神贯注，将新复古能量集中于指尖）", 56, 0, true, true, 3);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("\r\n!!", 37, 9062172, true, true, 3);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("\r\n（缓缓伸手触摸头盔，顿时感受到一股汹涌的热气）", 56, 0, true, true, 3);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("\r\n不要停止！#b#h0##k！", 37, 9062172, true, true, 3);
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
                                            cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/16thEvent/item/2", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
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
                                                  cm.sendNormalTalk_Bottom("\r\n天啊！\r\n你把#r新复古头盔#k的封印也解掉了！", 37, 9062172, true, true, 3);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("\r\n现在我已经完完全全地认定，你就是传说中拯救我们王国的英雄。", 37, 9062172, true, true, 3);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("\r\n#b#h0##k，现在就剩下解除#r新复古之剑#k的封印了。", 37, 9062172, true, true, 3);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("\r\n我会好好保护封印的#r新复古之剑#k，你尽管放心去收集#b新复古能量#k吧！", 37, 9062172, true, true, 3);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                          cm.sendNormalTalk_Bottom("\r\n#b奥罗拉公主#k和我们王国的命运全寄托在你身上了，切记！", 37, 9062172, true, true, 3);
                                                        } else if (status === V++) {
                                                          cm.warp(993110000, 2, false);
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.updateInfoQuest(500728, "Scene=1;last=200708;lv=3;first=1");
                                                          cm.npc_LeaveField("oid=53153825");
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
}