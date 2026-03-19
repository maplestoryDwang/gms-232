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
      cm.npc_ChangeController(1530060, "oid=21272212", 447, 20, 36, 397, 497, 0, true, false);
      cm.npc_SetSpecialAction("oid=21272212", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("希纳斯，我们又见面了。哈哈哈哈。", 37, 1530230, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530060, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1530230, "oid=21273246", 1047, 20, 45, 997, 1097, 1, true, false);
            cm.npc_SetSpecialAction("oid=21273246", "summon", 0, 0);
            cm.inGameDirectionEvent_PushMoveInfo(0, 150, 600, 20);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=21273246", -1, 400, 150);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你有话要对我说吗？", 37, 1530060, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哈哈哈……当然有话要对你说了。因为我就是那个你正在寻找的命运之……", 37, 1530230, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 1500, 1530060, cm.getPlayer().getId());
                    cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 1500, 1530230, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("命，命运之……", 37, 1530230, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我……我……对不起，我不是命运之转学生！", 37, 1530230, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=21273246", 'die', -1, 1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=21273246"], [50000, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                          cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530060, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我无法再自欺欺人了……对不起，我不能和你结婚，希纳斯！", 37, 1530230, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那个，我没太听明白你的意思，不过我已经和朋友约好见面了……所以我得先走了。", 37, 1530060, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=21272212", 1, 1000, 150);
                                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=21272212");
                                    cm.npc_LeaveField("oid=21272212");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(1530520, "oid=21279100", 1147, 20, 45, 1097, 1197, 1, true, false);
                                      cm.npc_SetSpecialAction("oid=21279100", 'summon', 0, 0);
                                      cm.npc_SetForceMove("oid=21279100", -1, 400, 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("儿子，你刚刚在做什么？明明就要到嘴的肉，你打算吐出去吗！怎么能就那么让希纳斯走掉？！", 37, 1530520, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(0, 150, 299, 20);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2004);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                              cm.npc_ChangeController(1530050, "oid=21280476", 187, 20, 34, 137, 237, 0, true, false);
                                              cm.npc_SetSpecialAction("oid=21280476", "summon", 0, 0);
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                              cm.npc_SetForceMove("oid=21280476", 1, 100, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("找到你了，小流氓！希纳斯现在在哪儿？", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("见鬼的希纳斯，希纳斯！！请别再强迫我了！我是不会和希纳斯结婚的！", 37, 1530230, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 150, 499, 20);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1334);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我心里……已经有别人了！", 37, 1530230, false, true);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(330002117, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;