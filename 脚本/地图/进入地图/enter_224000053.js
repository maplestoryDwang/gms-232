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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3718, -168);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074143, "oid=2606888", -3684, -215, 69, -3734, -3634, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2606888", "summon", 0, 0);
        cm.npc_ChangeController(2074146, "oid=2606889", -3763, -215, 66, -3813, -3713, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2606889", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2606888", "beauty", -1, 1);
        cm.sendNormalTalk_Bottom("你倒是说啊？我们的关系还有什么不能说的，\r\n你这是怎么了？脸色怎么这么暗沉呢？", 37, 2074148, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("其实……\r\n我有喜欢的人了……一想到要留她在这里独自离开，我心里就特别痛。", 37, 2074146, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('……是谁？', 37, 2074148, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那个，她是在#b服装店工作的姑娘#k，\r\n虽然很早之前就遇到了她，但我实在是……鼓不起勇气。", 37, 2074146, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("…………", 37, 2074148, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯？怎么了……？你为什么不说话了……", 37, 2074146, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你跟那个姑娘说过了吗？", 37, 2074148, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("……没有，我每次都只是去买东西，\r\n到现在为止还没说过一句话。", 37, 2074146, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("…………", 37, 2074148, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哎哟，对不起，你还是忘了吧，\r\n这又能怎么……", 37, 2074146, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('……喂', 37, 2074148, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('嗯？', 37, 2074146, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那个，不好意思，\r\n其实我有件急事要处理呢？\r\n我能不能先去解决了那个再来啊？", 37, 2074148, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哦？哦，哦……好吧，\r\n很急吗？", 37, 2074146, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哦，很急，我肚子很痛，我会快去快回的，抱歉。", 37, 2074148, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2606888", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('哦？小荳啊，小荳啊！', 37, 2074146, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(224000054, 27);
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