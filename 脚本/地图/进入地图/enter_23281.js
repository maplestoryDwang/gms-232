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
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(2159401, 'oid=951963', 865, -45, 12, 815, 915, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=951963', "summon", 0, 0);
      cm.npc_ChangeController(2159402, "oid=951964", 925, -45, 10, 875, 975, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=951964", 'summon', 0, 0);
      cm.setSessionValue("robe00", "951963");
      cm.setSessionValue('robe01', "951964");
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("现在露面并非上策。", 1, 2159402, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("只是想打个招呼。因为喜欢睡觉，所以好久没见了。", 1, 2159401, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.sendNormalTalk("你终于来了。", 1, 2159401, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b监视我的人，是你们吗？#k", 3, 2159401, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啊啊……", 1, 2159401, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("真是好久不见。", 1, 2159401, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4"], [1000, 0, -100, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("真的……真的很想见到你。", 1, 2159401, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("能再见到你……真是太高兴了。", 1, 2159401, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b那种黑暗的气息是……#k", 3, 2159401, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('#b你到底……#k', 3, 2159401, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("其他的就比较难办了。", 1, 2159402, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我不是说知道了吗！！", 1, 2159401, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("今天只是来见见旧面", 1, 2159401, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("下次再见。", 1, 2159401, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg1/2"], [0, 0, -100, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_MoveAction(2);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(0);
                                          cm.npc_SetSpecialAction("oid=951963", "teleportation", 0, 1);
                                          cm.npc_SetSpecialAction("oid=951964", "teleportation", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(820);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField('oid=951963');
                                            cm.npc_LeaveField("oid=951964");
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else if (status === V++) {
                                            cm.forceStartQuest(23292, '1');
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.gainExp(3500);
                                            cm.forceCompleteQuest(23281);
                                            cm.dispose();
                                            if (cm.getNumberFromQuestInfo(23281, 'map') <= 0) {
                                              cm.warp(100000000, 0);
                                            } else {
                                              cm.warp(cm.getNumberFromQuestInfo(23281, "map"), 0);
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