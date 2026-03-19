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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064470");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2758152", -1264, 212, 51, -1314, -1214, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2758152", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("卢坎，你没事吧？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没事，我们这是在哪？", 37, 9201536, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9201577, "oid=2758257", -1967, 95, 32, -2017, -1917, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=2758257", "summon", 0, 0);
              cm.npc_SetForceMove("oid=2758257", 1, 300, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(9201540, "oid=2758262", -1830, 95, 37, -1880, -1780, 0, false, 0, false);
                  cm.npc_SetSpecialAction("oid=2758262", 'summon', 0, 0);
                  cm.npc_ChangeController(9201541, "oid=2758263", -1910, 95, 32, -1960, -1860, 0, false, 0, false);
                  cm.npc_SetSpecialAction("oid=2758263", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这什么……？\r\n嘿，你们还好吧？", 37, 9201577, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("大概吧？话说这什么地方？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("什么地方？真是个愚蠢的问题！", 37, 9201577, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这里是守护者的要塞，你们是在非法入侵。\r\n没看到我写的警告标识么？真是的……", 37, 9201577, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("但……这怎么可能？\r\n绯红之心摧毁了这片大陆……它应该沉入海底了才对。", 37, 9201536, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#肯定是这样没错啊！", 37, 9201536, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯，这理论有点意思！\r\n那你解释下，为什么克拉齐亚又从海底浮上来了呢……", 37, 9201577, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("浮上来？\r\n所以说……它确实沉到海底了？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("没错。\r\n我现在正带科考队调查这里呢。", 37, 9201577, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我是尹博士，很高兴认识你。", 37, 9201577, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("……绯红之心让这里沉入海底，但又有人把它捞了上来，卢坎。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("哈哈，我……", 37, 9201577, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#幻日碎片！\r\n我们必须立刻回收它！", 37, 9201536, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2758152", 1, 500, 200);
                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=2758152");
                                                              cm.npc_LeaveField("oid=2758152");
                                                              cm.inGameDirectionEvent_SetHideEffect(1);
                                                              cm.sendNormalTalk_Bottom("站住！别再往前了！", 37, 9201577, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else if (status === V++) {
                                                                cm.forceCompleteQuest(61365);
                                                                cm.eventSKill(0);
                                                                cm.warp(610064480, 0, true);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=2758257");
                                                                cm.npc_LeaveField("oid=2758257");
                                                                cm.npc_LeaveField("oid=2758262");
                                                                cm.npc_LeaveField("oid=2758262");
                                                                cm.npc_LeaveField("oid=2758263");
                                                                cm.npc_LeaveField("oid=2758263");
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