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
      cm.npc_ChangeController(9310596, "oid=6347932", 460, 297, 26, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=6347932", "summon", 0, 0);
      cm.npc_setForceFlip("oid=6347932", -1);
      cm.onSetMapTaggedObjectAnimation('portal', 1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 500, 229, 274);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1900);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('你……你？？？', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咳呵呵……你这家伙运气不错啊。\n不但能够使用妖怪的力量，居然还能返老还童，真是想不到，真是想不到啊！", 37, 9310596, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我从[妖怪之书]上看到了！这充满无限力量的世界！嘿嘿嘿……", 37, 9310596, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("方丈大师……哦不对，应该称你为方丈妖怪吧！？你都已经变成妖怪了！你还想得到什么！？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("别假正经了！你不也很清楚嘛，我们哪个人不渴望得到力量啊？那种能让你变得更强、更优秀的力量！说不定我的师父也已经变成妖怪了。恐怕，他也是这么做的。因为当他完成[妖怪之书]后，就音信全无了……哼哼哼", 37, 9310596, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那么，我们后会有期吧。呵呵呵……", 37, 9310596, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=6347932", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=6347932", 1, 180, 200);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.onSetMapTaggedObjectAnimation("portal1", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=6347932", "teleportation", -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1350);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=6347932", 0);
                                    cm.npc_LeaveField("oid=6347932");
                                    cm.npc_LeaveField("oid=6347932");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.onSetMapTaggedObjectAnimation("portal", 0);
                                      cm.onSetMapTaggedObjectAnimation("portal1", 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else if (status === V++) {
                                      cm.updateInfoQuest(62038, 'clear=1');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;