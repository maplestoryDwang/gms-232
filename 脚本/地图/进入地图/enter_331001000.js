var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(22729)) {
    cm.setPartner(1, 1531003, 80001789, 0);
    cm.dispose();
  } else {
    if (!cm.isQuestFinished(22715)) {
      cm.forceCompleteQuest(22715);
      cm.dispose();
    } else {
      if (cm.isQuestFinished(22749) && !cm.isQuestFinished(22750) && cm.getQuestStatus(22750) == 0) {
        action1(f, E, e);
      } else if (cm.isQuestActive(22715)) {
        cm.sendNormalTalk_Bottom("辛苦了，上二楼。", 36, 1531001, false, true);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1531002, "oid=2912257", 760, -272, 59, 710, 810, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2912257", 'summon', 0, 0);
      cm.npc_ChangeController(1531003, "oid=2912258", 600, -272, 58, 550, 650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2912258", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 647, -272);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 700, -200);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom('尤娜，你哭了吗？', 37, V, false, true);
          } else {
            if (status === O++) {
              cm.npc_SetSpecialAction("oid=2912257", "angry", -1, 1);
              cm.sendNormalTalk_Bottom("#face0#傻瓜！我没哭。", 37, 1531002, true, true);
            } else {
              if (status === O++) {
                cm.setNpcSpecialActionReset("oid=2912257");
                cm.sendNormalTalk_Bottom("#face2#你要是愿意，我可以抱抱你，纪念这令人感动的重逢。", 37, V, true, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face0#算了，傻瓜！", 37, 1531002, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face4#……话说回来，你这身衣服是怎么回事？搞得跟魔幻世界的魔法师似的……", 37, 1531002, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face3#说起来就话长了，怎么样，适合我吗？", 37, V, true, true);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === O++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 800, -200);
                        } else {
                          if (status === O++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("……我早知道你会没事的。", 37, 1531001, false, true);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("搞什么，\r\n你怎么也得假装开心一下才是吧？", 37, V, true, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face2#你的信号一直被检测到在陷坑里面，我就觉得很奇怪，\r\n不过那个#b小孩#k是谁啊，怎么回事啊？", 37, 1531001, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face1#是，是啊，她是谁啊？", 37, 1531002, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("就是你所推断的那个，就是那个样子哦？\r\n还有这个孩子是黑猫内罗。", 37, V, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face0#咳咳，我的名字是#b内拉米迪奥内鲁尼亚#k，\r\n在古语里是月光下高贵的半个孩子，\r\n作为历史非常悠久的魔法师家族的继承人……", 37, 1531003, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("叫她内罗就好。", 37, V, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.sendNormalTalk_Bottom("#face2#啊啊啊啊！！", 37, 1531003, true, true);
                                          } else {
                                            if (status === O++) {
                                              cm.sendNormalTalk_Bottom(" #face1#怎么了？……！！……哎……", 37, 1531001, true, true);
                                            } else {
                                              if (status === O++) {
                                                cm.sendNormalTalk_Bottom(" #face4#所以说这孩子就是黑猫，黑猫就是这个孩子……？", 37, 1531002, true, true);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom(" #face2#没错！", 37, 1531003, true, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom(" #face4#……", 37, 1531002, true, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom(" #face6#……", 37, 1531001, true, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.sendNormalTalk_Bottom(" #face2#哇，这些事儿什么时候才能解释完啊？\r\n还是先吃风独眼兽尾巴汤，不对，先开吃食物吧？", 37, V, true, true);
                                                      } else {
                                                        if (status === O++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === O++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === O++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else if (status === O++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.setStandAloneMode(false);
                                                              cm.eventSKill(0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.forceCompleteQuest(22750);
                                                              cm.gainExp(3000);
                                                              cm.npc_LeaveField("oid=2912257");
                                                              cm.npc_LeaveField("oid=2912257");
                                                              cm.npc_LeaveField("oid=2912258");
                                                              cm.npc_LeaveField("oid=2912258");
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
  }
}