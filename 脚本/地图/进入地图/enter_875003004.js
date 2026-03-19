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
      cm.npc_ChangeController(9401277, 'oid=367149', -600, 330, 24, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=367149", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_SetSpecialAction("oid=367149", "sit", -1, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -500, 370]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#怎么会这样……什么人能一眨眼的工夫实力提高这么多？", 37, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#我也一直在埋头修炼，从来没有偷懒！\r\n难道，你在山寨里捡到了什么灵药？", 37, 9401277, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1##b素笑，怎么一副乐开了花的表情……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=367149");
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#可恶，可恶！看来我得出去修行！", 37, 9401277, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.emotion(2, 2000);
                      cm.sendNormalTalk_Bottom("#face1##b冤枉啊。灵丹连影子都没见到，\r\n不过在修行路上确实学到了不少东西。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4#……呵呵……是吧？" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '……其实……', 37, 9401277, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#明天！我终于要首次出去修行了！", 37, 9401277, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1##b真是个好消息。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#嗯哼，据说最近村里出现了很多狂暴的野兽，让村民们焦头烂额。我去把它们统统解决掉！嘿嘿！", 37, 9401277, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##b以素笑的实力，那种程度轻轻松松。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#那是当然，但是……我、我还是有点紧张。\r\n这是我的第一个任务，而且还是一个人去……", 37, 9401277, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1##b一定没问题。今天先好好休息一下。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#嗯！等我再修炼一会儿！嘿嘿！", 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=367149", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=367149", -1, 100, 150);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=367149", 1);
                                            cm.sendNormalTalk_Bottom("#face2#对了，墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！很高兴你能平安回来！", 37, 9401277, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.emotion(2, 2000);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=367149", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=367149", -1, 300, 150);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceCompleteQuest(65924);
                                                    cm.gainExp(1000);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(19, [0]);
                                                      } else if (status === V++) {
                                                        cm.npc_LeaveField("oid=367149");
                                                        cm.dispose();
                                                        cm.warp(875000000, 2, false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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