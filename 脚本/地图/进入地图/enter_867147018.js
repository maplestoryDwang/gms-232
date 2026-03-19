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
      cm.npc_ChangeController(9401055, "oid=201050", -216, 70, 27, -266, -166, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201051", -384, 72, 31, -434, -334, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201052", 127, 73, 28, 77, 137, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201053", -566, -148, 40, -616, -516, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201054", -709, -148, 40, -737, -659, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201055", -878, -148, 39, -928, -828, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201056", -394, -148, 25, -394, -344, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201057", -135, -29, 7, -185, -113, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201058", 287, -149, 10, 237, 337, 5, true, 0, false);
      cm.npc_ChangeController(9401055, "oid=201059", 379, 74, 3, 329, 429, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401123, "oid=17464010", -600, 70, 30, -650, -550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=17464010", 'summon', 0, 0);
      cm.npc_ChangeController(9401124, "oid=17464011", -700, 70, 30, -750, -650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=17464011", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("嗬，嗬……没完没了了。", 37, 9401029, false, true);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b之前从没有这样过……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那边！那个尽头！", 37, 9401029, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.sendNewEffects(13, [1000, -1000, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b大家躲进那里！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=17464011", -1, 500, 180);
                  cm.npc_SetForceMove("oid=17464010", -1, 700, 200);
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 800);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(17, [0, 1000, 2000, -1300, 120]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b嗬，嗬……你们没事吧？", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我没事！多亏了拉尔夫……谢谢你。", 37, 9401029, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=17464010", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("客气。", 37, 9401030, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那个应该就是…… 克里弗把？", 37, 9401029, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("（点头）", 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("许多远征队都是因为那个怪物而撤退的吧。", 37, 9401030, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("一点声音都没有，所以它从背后靠近根本不知道。", 37, 9401029, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……幸好我们不是孤身一人，可以为彼此照看后方。", 37, 9401030, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……拉尔夫居然会说出这种话，你现在简直帅呆了！嘿嘿", 37, 9401029, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b话说回来，这里是谁建造出来的呢？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("是啊，这里好像空置了很长时间。", 37, 9401029, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("这里有东西。", 37, 9401030, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b是补给品，我们可以使用吗？", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这是深渊的规则，只要我们也将自己的东西分享给别人就可以。", 37, 9401030, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("拉尔夫刚才说的话就像是英雄小说里的台词一样！我要记下来！", 37, 9401029, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("……（嫌弃）", 37, 9401030, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("外面好像安静了，我们在这里整顿一下，再次出发吧。", 37, 9401030, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.eventSKill(0);
                                                                      cm.forceCompleteQuest(64774);
                                                                      cm.forceStartQuest(65410, '2');
                                                                      cm.npc_LeaveField("oid=17464010");
                                                                      cm.npc_LeaveField("oid=17464010");
                                                                      cm.npc_LeaveField("oid=17464011");
                                                                      cm.npc_LeaveField("oid=17464011");
                                                                      cm.dispose();
                                                                      cm.setNumberForQuestInfo(64789, 'map', 867147700);
                                                                      var O = cm.getEventManager("深渊远征队");
                                                                      O.startInstance(cm.getPlayer());
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