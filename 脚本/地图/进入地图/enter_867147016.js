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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401123, "oid=8703422", 0, 40, 6, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8703422", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=8703423", 80, 40, 6, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8703423", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -250, 170]);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
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
            cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=8703422", -1, 200, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(5, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=8703423", -1, 200, 100);
                  cm.onSetBackEffect("bag", 1, 256, 256000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.forceCompleteQuest(64772);
                    cm.getPlayer().getTopMsgByItem(2681100, "[深渊远征队]获得了可供远征队员使用的帽子道具。");
                    cm.getPlayer().getTopMsgByItem(2681200, "[深渊远征队]获得了可供远征队员使用的套装道具。");
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=8703422"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("哇，里面装满了装备呢。谢谢！", 37, 9401029, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你在感谢谁？", 37, 9401030, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=8703422", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=8703422", 1, 1, 100);
                                cm.sendNormalTalk_Bottom("还能是谁！当然是为我们留下补给品的所有人！", 37, 9401029, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("噗 ", 37, 9401030, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("笑、笑什么啦～～ ", 37, 9401029, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('这是我丢下的背包。', 37, 9401030, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("哦，嗯？", 37, 9401029, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这现在已经不是我的东西了，给需要的人使用就好了。", 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b（看看有没有装备可以为拉尔夫和莫妮卡戴上。）", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.eventSKill(0);
                                              cm.forceStartQuest(65409, '2');
                                              cm.npc_LeaveField("oid=8703422");
                                              cm.npc_LeaveField("oid=8703422");
                                              cm.npc_LeaveField("oid=8703423");
                                              cm.npc_LeaveField("oid=8703423");
                                              cm.dispose();
                                              cm.setNumberForQuestInfo(64789, 'map', 867147400);
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