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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(1500, 1300, 1500, -20, -40);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003480, "oid=2009907", -430, -10, 8, -480, -380, 0, true, false);
          cm.npc_SetSpecialAction("oid=2009907", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003481, "oid=2009908", 230, -25, 12, 180, 280, 1, true, 1000, false);
            cm.npc_SetSpecialAction("oid=2009908", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2009908", -1, 150, 120);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/0", 200);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/3", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/1", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/2", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这里已经什么人都没有了。不会有人来，也不能有人待在这里……", 37, 3003481, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你来这里干什么呢？", 37, 3003481, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face13#看上去好像是在这里进行实验的研究员。", 37, 3003480, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那天……实验失控的时候，有人活下来了吗！", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……我只是运气好。", 37, 3003481, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那个可怕的日子之后，我就一个人留在了这里。", 37, 3003481, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('一个人……？', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#只有我一个人活了下来，因此我必须赎罪。为同伴们收尸，让永远变成可怕模样的那些东西，不要惊扰到在这里沉睡的同伴们……", 37, 3003481, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("唉……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face13#那天你到底见到了什么？", 37, 3003480, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#见到了什么……在依稀的记忆中，我还隐约能记得一些东西。", 37, 3003481, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("能告诉我们吗？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#如果你们能帮我……我可以告诉你们。", 37, 3003481, true, true);
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
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField("oid=2009907");
                                                          cm.npc_LeaveField("oid=2009908");
                                                          cm.dispose();
                                                          cm.warp(450006240, 0, true);
                                                          cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;