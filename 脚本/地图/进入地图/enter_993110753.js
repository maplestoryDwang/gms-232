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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 6000, -2900, 30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3004080, "oid=2363221", -3055, 36, 14, -3105, -3005, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2363221", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#不久前，圣地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.npc_ChangeController(3004081, "oid=2363223", -2895, 70, 2, -2945, -2845, 1, true, 2000, false);
              cm.npc_SetSpecialAction("oid=2363223", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("女皇陛下，宴会中途出来透透气吗？", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('啊，南哈特。', 36, 1540450, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这表情可不像是凯旋归来的样子，\r\n难道遇上了什么我所不知道的烦心事？", 36, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不，南哈特，我当然很开心。", 36, 1540450, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('只不过……', 36, 1540450, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("胜利的喜悦并不足以弥补一切，毕竟我们实在是造成了太多牺牲。", 36, 1540450, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不管再怎么努力，有些事都无法挽回了。", 36, 1540450, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不过……", 36, 1540451, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("不过……如果我不开心，其他人也没办法尽情享乐吧。", 36, 1540450, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#所以至少在今天，应该将悲伤的记忆统统忘掉才好。", 36, 1540450, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#您所言极是，女皇陛下。", 36, 1540451, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2363221", 'smile', 0, 1);
                                        cm.sendNormalTalk_Bottom("#face2#好了，是时候回去了，南哈特。", 37, 1540450, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=2363221", 1, 500);
                                            cm.Npc_Fadeout("oid=2363223", 0, 500);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1500, 3500, -2266, -320);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(4500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("希纳斯……", 56, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("现如今你也成为名副其实的女皇了啊。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/PhantomS"], [0, -2253, -280, 1, 0, 1, 1, 0]);
                                                        cm.fieldEffect_PlayFieldSound("Phantom/0", 100);
                                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === V++) {
                                                          cm.warp(993110777, 0, false);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=2363221");
                                                          cm.npc_LeaveField("oid=2363221");
                                                          cm.npc_LeaveField("oid=2363223");
                                                          cm.npc_LeaveField("oid=2363223");
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