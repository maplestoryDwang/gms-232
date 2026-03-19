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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064070");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2745146", 980, -128, 8, 930, 1030, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745146", 'summon', 0, 0);
      cm.npc_ChangeController(9201534, "oid=2745147", 1200, -128, 9, 1150, 1250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745147", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("等你的计划完成后你打算怎么办？", 37, 9201534, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face5#我的计划？是我们的计划吧。", 37, 9201539, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这可是我们共同努力的结晶。", 37, 9201534, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#……", 37, 9201539, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#只要我拥有了幻日，就有能力实现你的梦想，你清楚吧。", 37, 9201534, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#但是……我并没有……", 37, 9201539, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我只想做一件事。", 37, 9201534, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#我知道，你想用幻日控制世界上的所有人，根除一切罪恶。", 37, 9201539, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不，那是之后的事了。", 37, 9201534, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#噢。那……你想做什么？", 37, 9201539, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我想找一个没有人的地方。\r\n没有战争、愤怒以及悲伤的地方。", 37, 9201534, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#只有树木和青草的宁静之所。", 37, 9201534, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我理解我的意思吧？", 37, 9201534, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#我理解，对了……", 37, 9201539, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=2745146", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我想跟你一起终止……", 37, 9201539, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else if (status === V++) {
                                              cm.eventSKill(0);
                                              cm.warp(610064080, 0, true);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=2745146");
                                              cm.npc_LeaveField("oid=2745146");
                                              cm.npc_LeaveField("oid=2745147");
                                              cm.npc_LeaveField("oid=2745147");
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