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
      cm.npc_ChangeController(9062172, "oid=93645564", 1050, -100, 17, 1000, 1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=93645564", "summon", 0, 0);
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
            cm.sendNormalTalk_Bottom("\r\n总算是时候解除#r新复古之剑#k的封印了。", 37, 9062172, true, true, 3);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(250);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/16thEvent/item/7", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("\r\n期待你早日觉醒成威风凛凛的#b新复古英雄#k！\r\n#b#h0##k！", 37, 9062172, false, true, 3);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n（全神贯注，将新复古能量集中于指尖）", 56, 0, true, true, 3);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("\r\n（缓缓伸手触摸武器，感受到一股比之前更强的能量）", 56, 0, true, true, 3);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("\r\n不要停止！#b#h0##k！\r\n把你最后的力量也全部使出来！", 37, 9062172, true, true, 3);
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
                                    cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/16thEvent/item/3", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("\r\n!!!!!", 37, 9062172, false, true, 3);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("\r\n感谢上天！\r\n#b#h0##k！你成功了！连#r新复古之剑#k的封印也被解掉了！", 37, 9062172, true, true, 3);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("\r\n你果然是传说中可以拯救我们王国的英雄。", 37, 9062172, true, true, 3);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("\r\n#b#h0##k，接下来该抓紧准备营救公主了。", 37, 9062172, true, true, 3);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("\r\n建议你也提前做好对抗#r魔王皮洛克#k的最后准备。", 37, 9062172, true, true, 3);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.sendNormalTalk_Bottom("\r\n那么，等你准备好了再来吧！#b新复古王国的英雄#k！", 37, 9062172, true, true, 3);
                                                } else if (status === V++) {
                                                  cm.warp(993110000, 13, false);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.updateInfoQuest(500728, "Scene=1;last=200720;lv=4;first=1");
                                                  cm.npc_LeaveField("oid=93645564");
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