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
      if (cm.isQuestFinished(58773)) {
        cm.dispose();
        return;
      }
      cm.forceCompleteQuest(58773);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111018, "oid=3888567", 675, -35, 21, 625, 725, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3888567", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#下个试炼会很辛苦。\r\n你先放松放松，我们再出发。等你准备好就跟我说~", 37, 9111018, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.sendNormalTalk_Bottom("我没时间放松！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#下个试炼是靠天狗的妖术进行的，你现在不休息的话，等下会累晕的~\r\n别上火，歇会儿吧。我也吃点零食再带你过去", 37, 9111018, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=3888567", 1, 200, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=3888567");
                  cm.npc_LeaveField("oid=3888567");
                  cm.sendNormalTalk_Bottom("(好吧，既然这样，我就整理下思绪。)", 57, 0, false, true);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("(天狗为什么要搞这种试炼？)", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(这些试炼真的有意义吗……？)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("(暗所说的村庄肯定就是巫女姐妹俩曾经住过的地方。)", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("(暗说的那个僧侣妖怪……)", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("(难道……？)", 57, 0, true, true);
                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(9111018, "oid=3889187", 875, -35, 16, 825, 925, 1, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=3889187", 'summon', 0, 0);
                                          cm.npc_SetForceMove("oid=3889187", -1, 200, 100);
                                          cm.sendNormalTalk_Bottom("#face0#来，我们出发吧。", 37, 9111018, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#下个试炼内容是#b消除烦恼#k。", 37, 9111018, true, true);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=3889187");
                                            cm.npc_LeaveField("oid=3889187");
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
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