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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064400");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201535, "oid=2755170", 200, 153, 11, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755170", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2755171", 530, 153, 6, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755171", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2755172", 105, 153, 8, 55, 155, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755172", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2755173", 442, 153, 7, 392, 492, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755173", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2755174", 263, 153, 11, 213, 313, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755174", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2755175", 30, 153, 4, -20, 80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755175", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2755176", -30, 153, 12, -80, 20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755176", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2755177", -93, 153, 1, -143, -43, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755177", 'summon', 0, 0);
      cm.npc_ChangeController(9201578, "oid=2755178", -145, 153, 1, -195, -95, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755178", "summon", 0, 0);
      cm.npc_ChangeController(9201559, "oid=2755179", 590, 153, 10, 540, 640, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755179", "summon", 0, 0);
      cm.npc_ChangeController(9201560, "oid=2755180", 640, 153, 5, 590, 690, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755180", "summon", 0, 0);
      cm.npc_ChangeController(9201562, "oid=2755181", 710, 153, 5, 660, 760, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755181", "summon", 0, 0);
      cm.npc_ChangeController(9201561, "oid=2755182", 770, 153, 13, 720, 820, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755182", "summon", 0, 0);
      cm.npc_ChangeController(9201563, "oid=2755183", 810, 153, 15, 760, 860, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755183", "summon", 0, 0);
      cm.npc_ChangeController(9201565, "oid=2755184", 860, 153, 15, 810, 910, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755184", 'summon', 0, 0);
      cm.npc_ChangeController(9201564, "oid=2755185", 910, 153, 14, 860, 960, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755185", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_setForceFlip("oid=2755170", -1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("努曼纳尔。\r\n在我摧毁幻日前，会把你安全送到反转界的。", 37, 9201535, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你回去后，一定要告诉反转界的居民……告诫以后的人幻日的危害和它所带来的惨剧。", 37, 9201535, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('还有……', 37, 9201535, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("还有什么？", 37, 9201548, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#照顾好我的孩子们。\r\n他们依旧需要一个父亲。", 37, 9201535, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我没法一直呆在他们身边。\r\n但他们需要一个导师……一个能够依靠的人。", 37, 9201535, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('包在我身上。', 37, 9201548, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("反转界再也不需要幻日守护者了。\r\n反转界战士也再也没必要穿越时空了。", 37, 9201535, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("但是，反转界依然需要一个领袖，而我将这个重任托付给你，努曼纳尔。", 37, 9201535, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("让没有了幻日的反转界继续繁荣昌盛下去吧。", 37, 9201535, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这是我的荣幸。\r\n我是不会让你失望的。", 37, 9201548, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("为了我，也是为了利瑞尼，拜托你了。", 37, 9201535, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 37, 9201548, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#再见，努曼纳尔。\r\n我要履行我最后的使命了。", 37, 9201535, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("原谅我，绯红之心……", 37, 9201548, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#原谅你什么？你说话总是这么婉转。\r\n该求人原谅的是我。", 37, 9201535, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("再见，努曼纳尔。\r\n我们一定会重聚的！", 37, 9201547, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#保重！", 37, 9201536, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("再见，祝你成为一个贤明的领袖。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=2755170", '幻日', 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_LeaveField("oid=2755172");
                                                            cm.npc_LeaveField("oid=2755172");
                                                            cm.npc_LeaveField("oid=2755175");
                                                            cm.npc_LeaveField("oid=2755175");
                                                            cm.npc_LeaveField("oid=2755176");
                                                            cm.npc_LeaveField("oid=2755176");
                                                            cm.npc_LeaveField("oid=2755177");
                                                            cm.npc_LeaveField("oid=2755177");
                                                            cm.npc_LeaveField("oid=2755178");
                                                            cm.npc_LeaveField("oid=2755178");
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.forceCompleteQuest(61362);
                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                              cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1;5=1;6=1");
                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                } else if (status === V++) {
                                                                  cm.eventSKill(0);
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
              }
            }
          }
        }
      }
    }
  }
}