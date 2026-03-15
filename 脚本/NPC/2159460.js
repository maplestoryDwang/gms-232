var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.forceStartQuest(38905, '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(2159454, "oid=240743337", 350, 240, 15, 300, 400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240743337", "summon", 0, 0);
      cm.npc_ChangeController(2159455, "oid=240743338", 430, 240, 11, 380, 480, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240743338", "summon", 0, 0);
      cm.npc_ChangeController(2159456, "oid=240743339", 510, 240, 12, 460, 560, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=240743339", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 245);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1062);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不是那里，在这边！你再找找看！", 5, 2159454, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("再找找看！", 5, 2159455, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("找找！找找！", 5, 2159456, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('……', 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.updateInfoQuest(38049, '');
                  cm.forceStartQuest(38049, '');
                  cm.forceCompleteQuest(38049);
                  cm.gainExp(20000);
                  cm.sendNormalTalk('你们在这里干什么呢？', 5, 2159457, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("啊，是战神。这个入侵者说听利琳说你在这里，就想过来劫持你。", 5, 2159454, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("入侵者！劫持犯！小心！", 5, 2159455, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("小心！小心！", 5, 2159456, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("…………不知道是从什么时候开始产生误会的，我既不是入侵者也不是绑架犯。不管怎样…………好久不见了，战神。应该说有…………几百年了吧？", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('……', 5, 2159457, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("战神？", 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("不好意思，你认识我吗？", 5, 2159457, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("战神？！", 17, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=240743337");
                                    cm.npc_LeaveField("oid=240743337");
                                    cm.npc_LeaveField("oid=240743338");
                                    cm.npc_LeaveField("oid=240743338");
                                    cm.npc_LeaveField("oid=240743339");
                                    cm.npc_LeaveField("oid=240743339");
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(0);
                                    } else if (status === V++) {
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