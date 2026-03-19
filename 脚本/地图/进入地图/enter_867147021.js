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
      cm.npc_ChangeController(9401050, 'oid=201066', 619, -238, 19, 619, 669, 5, true, 0, false);
      cm.npc_ChangeController(9401051, 'oid=201067', 672, -238, 19, 634, 684, 5, true, 0, false);
      cm.npc_ChangeController(9401056, "oid=201068", 827, 69, 2, 739, 839, 3, true, 0, false);
      cm.npc_ChangeController(9401056, "oid=201069", 868, 70, 2, 859, 959, 4, true, 0, false);
      cm.npc_ChangeController(9401056, 'oid=201070', 368, 74, 3, 301, 401, 5, true, 0, false);
      cm.npc_ChangeController(9401057, "oid=201071", 547, 74, 3, 474, 574, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 100, -760]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9401124, "oid=41518788", 210, -640, 34, 160, 260, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41518788", "summon", 0, 0);
        cm.npc_ChangeController(9401123, "oid=41518789", 225, -720, 32, 175, 275, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41518789", 'summon', 0, 0);
        cm.npc_ChangeController(9401126, "oid=41518790", 180, -720, 31, 130, 230, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=41518790", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 10000, 0);
          cm.sendNormalTalk_Bottom("#b（神奇地变明亮了……）", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNewEffects(13, [7000, 0, 1000, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你看那边！地面有微弱的光芒渗出。", 37, 9401029, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b底下会有些什么呢？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("该不会一直通到冒险岛世界的对面去吧？哈哈", 37, 9401032, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b进去看看吧！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那，那是，是人类吗？！", 37, 9401050, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(12, [1000, 630, -200, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("救命啊！在这里！", 37, 9401051, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.eventSKill(0);
                                  cm.forceStartQuest(64779, '');
                                  cm.npc_LeaveField("oid=41518788");
                                  cm.npc_LeaveField("oid=41518788");
                                  cm.npc_LeaveField("oid=41518789");
                                  cm.npc_LeaveField("oid=41518789");
                                  cm.npc_LeaveField("oid=41518790");
                                  cm.npc_LeaveField("oid=41518790");
                                  cm.dispose();
                                  var O = cm.getEventManager('深渊远征队_教程6');
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