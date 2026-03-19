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
      cm.forceStartQuest(63059, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400238, "oid=22270281", 343, 80, 6, 293, 393, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22270281", "summon", 0, 0);
      cm.npc_ChangeController(9400239, "oid=22270282", 481, 80, 7, 431, 531, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22270282", "summon", 0, 0);
      cm.npc_ChangeController(9400240, "oid=22270283", -250, 80, 4, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22270283", 'summon', 0, 0);
      cm.npc_ChangeController(9400241, "oid=22270284", -752, 80, 2, -802, -702, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22270284", 'summon', 0, 0);
      cm.npc_ChangeController(9400242, "oid=22270285", -613, 80, 3, -663, -563, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22270285", "summon", 0, 0);
      cm.npc_ChangeController(9400247, "oid=22270286", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22270286", "summon", 0, 0);
      cm.forceStartQuest(63088, "sit");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 343, 156);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 481, 156);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -250, 156);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -752, 156);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -613, 156);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b大伙儿为什么都躺着？\r\n哎呀……该不是我没变换到夜晚就跑去别的世界了吧？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#你不知道吗？", 37, 9400205, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#fc0xffd9d9d9#他们只有到了夜晚才能休息！他们一直保持着那个状态等你回来。", 37, 9400205, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#b…………', 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#b赶紧转换到夜晚。', 57, 0, true, true);
                                  } else if (status === V++) {
                                    cm.setStandAloneMode(false);
                                    cm.dispose();
                                    cm.warp(867113200, 1, true);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=22270281");
                                    cm.npc_LeaveField("oid=22270281");
                                    cm.npc_LeaveField("oid=22270282");
                                    cm.npc_LeaveField("oid=22270282");
                                    cm.npc_LeaveField("oid=22270283");
                                    cm.npc_LeaveField("oid=22270283");
                                    cm.npc_LeaveField("oid=22270284");
                                    cm.npc_LeaveField("oid=22270284");
                                    cm.npc_LeaveField("oid=22270285");
                                    cm.npc_LeaveField("oid=22270285");
                                    cm.npc_LeaveField("oid=22270286");
                                    cm.npc_LeaveField("oid=22270286");
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