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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9401277, "oid=2750404", 560, -60, 2, 510, 610, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750404", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_OneTimeAction(25, 9000);
        cm.emotion(7, 7000);
        cm.npc_SetSpecialAction("oid=2750404", "sit", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 490, -58);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("#face8##b呃啊啊啊啊！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face8#师，' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '？！' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！你醒了吗？", 37, 9401277, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face8#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face8##b……素笑？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=2750404");
                        cm.sendNormalTalk_Bottom("#face8#嗯！是我，素笑，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 37, 9401277, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face8##b掌门人呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face8#…", 37, 9401277, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                  cm.sendNormalTalk_Bottom("#face8##b掌门人！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face8##b掌门人？！师弟！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2750404", -1, 200, 100);
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                          cm.sendNormalTalk_Bottom("#face6#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "… ", 37, 9401277, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                            cm.sendNormalTalk_Bottom("#face8##b素笑，其他人……都……去哪儿了？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face8##b为什么……玄山派这么安静？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face8#... ", 37, 9401277, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "……过来。", 37, 9401277, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=2750404", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2750404", 1, 300, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField("oid=2750404");
                                                          cm.dispose();
                                                          cm.warp(875003018, 0, true);
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