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
      cm.npc_ChangeController(9401124, "oid=59305255", -450, 40, 30, -500, -400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59305255", "summon", 0, 0);
      cm.npc_ChangeController(9401126, "oid=59305256", -500, 40, 29, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59305256", "summon", 0, 0);
      cm.npc_ChangeController(9401125, "oid=59305257", -550, 40, 29, -600, -500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59305257", 'summon', 0, 0);
      cm.npc_ChangeController(9401127, "oid=59305258", -600, 40, 29, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59305258", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401123, "oid=59305259", 0, 40, 10, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59305259", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('#b莫妮卡！！！', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=59305259", -1);
              cm.npc_SetForceMove("oid=59305259", -1, 10, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('队……队长？', 37, 9401029, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b你怎么不说一声就自己走了。", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=59305259", -1, 0, 100);
                    cm.sendNormalTalk_Bottom("……。对不起，不过，从这里开始，我可以独自行动吗？对不起，真的。", 37, 9401029, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('#b为什么？', 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("…………妈……我妈妈病得很重……古书中记载，永生之花生长在金银岛深处，我就觉得这里一定可以找到。对不起，我只有妈妈，如果连她都不在了…。…我一定要找到永生之花。", 37, 9401029, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("对不起，我并不是想利用你。", 37, 9401029, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b你也不需要独自行动啊。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("对不起……", 37, 9401029, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("其实，我本想随便利用一个厉害的人进入最底层就好，但和队长并肩作战真的很开心。", 37, 9401029, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("开心得甚至让我觉得有些对不起在家里等着我的妈妈。还有新的怪物，新的风景，新的伙伴，我都很喜欢。", 37, 9401029, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("所以我才会更加抱歉，我一直隐瞒着你们直到被你们发现。", 37, 9401029, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b就像之前一样一起战斗吧，我们会帮助你的。", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不用了，别再让我感到更加抱歉。", 37, 9401029, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b如果让莫妮卡独自离开后，她出了什么事该怎么办。我只要想到可能会出现这样的问题，就会很难过。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("队长……", 37, 9401029, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#b什么？', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我们不过是在深渊中相遇的，目的相近的同行人而已，你为什么要对我这么好？", 37, 9401029, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b对莫妮卡来说，我们真的只是目的相近的同行人而已吗？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("不是的！", 37, 9401029, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b我也不是。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("谢谢你，队长……我真的不会忘记，队长的热情和照顾，还有我们一起经历的冒险。", 37, 9401029, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceCompleteQuest(64783);
                                                          cm.dispose();
                                                          cm.setNumberForQuestInfo(64789, "map", 867148300);
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