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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401123, "oid=41522124", -300, -160, 28, -350, -250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=41522124", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=41522125", -240, -160, 29, -290, -190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=41522125", "summon", 0, 0);
      cm.npc_ChangeController(9401126, "oid=41522126", -190, -160, 29, -240, -140, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=41522126", "summon", 0, 0);
      cm.npc_ChangeController(9401050, "oid=41522127", -500, -200, 17, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=41522127", "summon", 0, 0);
      cm.npc_ChangeController(9401051, "oid=41522128", -550, -200, 17, -600, -500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=41522128", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -400, -130]);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("谢谢，我们绝不会忘记你的这份恩惠。", 37, 9401050, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我们会在本部等着你，请你回来后找到我们。", 37, 9401051, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#b好的。', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=41522127", -1);
                  cm.npc_setForceFlip("oid=41522128", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=41522127");
                      cm.npc_LeaveField("oid=41522127");
                      cm.npc_LeaveField("oid=41522128");
                      cm.npc_LeaveField("oid=41522128");
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(13, [1000, 100, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b看来到目前为止，我们的运气算好的了。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("队长的能力和我们的实力都很优秀，不是吗？哈哈…… ", 37, 9401032, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("但以后还是要小心一点。毕竟我们可不是来郊游的。", 37, 9401030, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没错。从这里开始，谁都不知道会面临怎样的危险。我们的另一个职责就是调查这里，要把它当成我们的使命才行！", 37, 9401029, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#b好，请大家小心。', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.forceCompleteQuest(64779);
                                      cm.forceStartQuest(64792, '');
                                      cm.forceStartQuest(65411, '2');
                                      cm.npc_LeaveField("oid=41522124");
                                      cm.npc_LeaveField("oid=41522124");
                                      cm.npc_LeaveField("oid=41522125");
                                      cm.npc_LeaveField("oid=41522125");
                                      cm.npc_LeaveField("oid=41522126");
                                      cm.npc_LeaveField("oid=41522126");
                                      cm.dispose();
                                      cm.setNumberForQuestInfo(64789, "map", 867148000);
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