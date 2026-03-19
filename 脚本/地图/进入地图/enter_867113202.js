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
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400238, "oid=23097518", -437, 80, 4, -487, -387, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23097518", "summon", 0, 0);
      cm.npc_ChangeController(9400239, "oid=23097519", 565, 80, 7, 515, 615, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23097519", 'summon', 0, 0);
      cm.npc_ChangeController(9400240, "oid=23097520", -250, 80, 4, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23097520", "summon", 0, 0);
      cm.npc_ChangeController(9400241, "oid=23097521", -752, 80, 2, -802, -702, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23097521", "summon", 0, 0);
      cm.npc_ChangeController(9400242, "oid=23097522", -613, 80, 3, -663, -563, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23097522", "summon", 0, 0);
      cm.npc_ChangeController(9400247, "oid=23097523", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23097523", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 5000, 336, 155);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(-1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 900);
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, -550, 155);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                          cm.effect_NormalSpeechBalloon("#fs12#喂！喂！你醒醒！没事吧？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                            cm.effect_NormalSpeechBalloon("#fs12#嗯？我以前没见过你……？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400238, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.setQuestCustomData(63088, 'stand');
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你好，初次见面的勇士！你刚来就成了#e最强勇士#n，真了不起！\r\n我给你介绍一下只有最强战士才能享受的荣耀吧！", 37, 9400210, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=23097518", 1, 250, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -350, 155);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("当太阳高高挂在天上的期间，我们会丝毫不顾忌受伤，只专心享受战斗紧张刺激的快感。等太阳落山，我们就休息，开始举行愉快的庆典！", 37, 9400210, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你知道这其中最有意思的是什么吗？", 37, 9400210, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("那就是我们可以按照自己的需要变换白天和夜晚！", 37, 9400210, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=23097518", 1, 400, 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 0, 155);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=23097518", -1);
                                                      cm.sendNormalTalk_Bottom("方法就在于这太阳祭坛和滑轮！", 37, 9400210, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("转动滑轮让太阳升到高空中就是白天，再把它降下来，就进入夜晚了！\r\n虽说刚开始的时候因为这装置搞得有点混乱，但我们通过制定我们自己的法则，解决了问题。", 37, 9400210, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("法则就是通过战斗决出当天的最强勇士，赋予他变换白天和夜晚的#e荣耀#n！！", 37, 9400210, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.askYesNo_Bottom("详细情况以后我再跟你介绍，请你先为了其他勇士，把太阳降下来吧！", 37, 9400210);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("好。你转动安装在滑轮下方的手柄，把太阳降到地平线下就行。", 37, 9400210, false, true);
                                                            } else if (status === V++) {
                                                              cm.forceStartQuest(63028, '');
                                                              cm.setStandAloneMode(false);
                                                              cm.dispose();
                                                              cm.warp(867113200, 1, true);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.npc_LeaveField("oid=23097518");
                                                              cm.npc_LeaveField("oid=23097518");
                                                              cm.npc_LeaveField("oid=23097519");
                                                              cm.npc_LeaveField("oid=23097519");
                                                              cm.npc_LeaveField("oid=23097520");
                                                              cm.npc_LeaveField("oid=23097520");
                                                              cm.npc_LeaveField("oid=23097521");
                                                              cm.npc_LeaveField("oid=23097521");
                                                              cm.npc_LeaveField("oid=23097522");
                                                              cm.npc_LeaveField("oid=23097522");
                                                              cm.npc_LeaveField("oid=23097523");
                                                              cm.npc_LeaveField("oid=23097523");
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