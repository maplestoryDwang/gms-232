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
      cm.npc_ChangeController(3003506, "oid=49841", 158, 248, 1, 108, 208, 1, true, false);
      cm.npc_ChangeController(3003507, "oid=49842", -47, 248, 1, -97, 3, 0, false, false);
      cm.npc_ChangeController(3003504, "oid=49843", 305, 248, 1, 255, 355, 1, false, false);
      cm.npc_ChangeController(3003515, "oid=49844", -204, 248, 1, -254, -154, 0, true, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 14, 140);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("用光之权能创造。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue('用暗之权能灭亡。', 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("只根据#r「声音」#k。", 1);
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
                    cm.sendNormalTalk_Bottom("#face1#那是什么意思？", 37, 3003506, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#这个嘛？", 45, 3003507, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("（是塔纳。旁边……怎么长得一模一样？是双胞胎……？）", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#真是个奇怪的地方。尽是些长得很奇怪的人。", 45, 3003507, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#是啊……（咕噜噜）好饿。", 37, 3003506, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#和预见的一样。两个名字。两名预备者。", 45, 3003515, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#两名预备者。两个名字。", 37, 3003504, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#选择哪一边呢？", 45, 3003515, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#嗯？等等，听到了奇怪的声音。", 45, 3003507, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face4#嗯？', 37, 3003506, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#虽然很美……但冰冷的声音……", 45, 3003507, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#听声音的人……好像决定了。", 37, 3003504, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#是的。", 45, 3003515, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#没被选中的人。你的名字是塔纳。", 37, 3003504, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#被选中的人。你的名字是……", 45, 3003515, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Text(["#fn黑体##fs25#「艾欧娜……」"], [70, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                        cm.sendNormalTalk_Bottom("#face1##fs20#光明超越者艾欧娜！", 37, 3003500, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("光明超越者！？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#格兰蒂斯的#b光明超越者……#k艾欧娜是她的名字。", 37, 3003500, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else if (status === V++) {
                                                                    cm.forceCompleteQuest(34574);
                                                                    cm.dispose();
                                                                    cm.warp(450007130, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;