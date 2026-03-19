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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -400, -550]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9401123, "oid=8661056", 1450, -410, 43, 1400, 1500, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=8661056", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [5000, 1400, -350, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呃嗯，这里好像没什么不同呢，好像是有些变暗了……", 37, 9401029, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("克里弗什么时候才会出现呢？据说它们栖息在黑暗之处哦！", 37, 9401029, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=8661056"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom('哦…哦哦哦！', 37, 9401029, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=8661056", -1, 300, 150);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(13, [2000, -400, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("队长！你看这里！", 37, 9401029, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这应该是之前来过这里的远征队留下的补给品！我在本部的时候听说过，据说有的远征队结束远征回程中，会为下一个远征队留下补给品。竟然能亲眼发现这样的东西，呜哇啊啊啊，他们留下了什么呢？", 37, 9401029, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('快打开看看，队长！', 37, 9401029, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_OneTimeAction(5, 2000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.Hidden_background('bag', 1, 0, 0, 0);
                                      cm.getPlayer().getTopMsgByItem(2680037, "[深渊远征队]获得了魔法师技能。");
                                      cm.sendNormalTalk_Bottom("队长～～出来什么了？（两眼放光）", 37, 9401029, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b是技能，魔法师技能。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("呜，呜哇啊！真的吗？", 37, 9401029, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("太完美了！呃嗯……只要我升级就可以了，因为只有达到5级才能够学习其它技能…… ", 37, 9401029, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b所剩无几了！莫妮卡一定很快就能学会。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("嘿嘿，在那之前请你帮我保管好！", 37, 9401029, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("啊！我们今天没剩多少时间了，新手远征队每天只有2个小时的探险时间。", 37, 9401029, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("剩下的时间里我也会努力狩猎的！", 37, 9401029, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.eventSKill(0);
                                                          cm.getTopMsgFont("[深渊远征队教程]为展开教程，提高了莫妮卡的成长速度。", 0, 20, 8, 0, 0);
                                                          cm.playerMessage(5, "[深渊远征队教程]为展开教程，提高了莫妮卡的成长速度。");
                                                          cm.forceCompleteQuest(64765);
                                                          cm.forceStartQuest(64766, '');
                                                          cm.playerMessage(5, "[深渊远征队]声望提高了。");
                                                          cm.updateInfoQuest(64753, "point=114;level=5;rank=0");
                                                          cm.npc_LeaveField("oid=8661056");
                                                          cm.npc_LeaveField("oid=8661056");
                                                          cm.dispose();
                                                          cm.setNumberForQuestInfo(64789, "map", 867147200);
                                                          var O = cm.getEventManager("深渊远征队");
                                                          O.startInstance(cm.getPlayer());
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