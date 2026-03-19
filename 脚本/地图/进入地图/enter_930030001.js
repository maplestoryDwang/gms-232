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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2159429, "oid=1135976", 1370, -20, 9, 1320, 1420, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135976", "summon", 0, 0);
      cm.npc_ChangeController(2159430, "oid=1135977", 1440, -20, 8, 1390, 1490, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135977", "summon", 0, 0);
      cm.npc_ChangeController(2159431, "oid=1135978", 1230, -20, 5, 1180, 1280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135978", "summon", 0, 0);
      cm.npc_ChangeController(2159432, "oid=1135979", 1300, -20, 7, 1250, 1350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135979", "summon", 0, 0);
      cm.npc_ChangeController(2159433, "oid=1135980", 1510, -20, 8, 1460, 1560, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1135980", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("怎么样？全部准备好了吧？那个骑士很快就会到这里来。", 1, 2159429, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('这样捉弄他没关系吗？', 1, 2159430, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("那又怎样？冒险骑士团的人本来就不应该到埃德尔斯坦来。让我们展现小反抗者的力量吧。", 1, 2159432, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("好的！", 1, 2159433, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("但是那个骑士，看上去不像是坏人。", 1, 2159431, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("别瞎说，冒险骑士团全都是满嘴谎言的背叛者！\r\n\r\n让他好好吃点苦头。我一发出信号，我们就把装着虫子的袋子扔过去，然后逃走。", 1, 2159429, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("知道了。", 1, 2159430, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("好的。", 1, 2159432, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('嘿嘿嘿，一定很好玩！', 1, 2159433, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好了，快点躲起来吧。", 1, 2159429, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("嗯？刚才是什么声音……？", 1, 2159429, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(2159437, "oid=1135982", 2200, -20, 19, 2150, 2250, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=1135982", 'summon', 0, 0);
                                  cm.npc_ChangeController(2159437, "oid=1135983", 2300, -20, 20, 2250, 2350, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=1135983", 'summon', 0, 0);
                                  cm.npc_ChangeController(2159437, "oid=1135984", 2400, -20, 21, 2350, 2450, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=1135984", "summon", 0, 0);
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 2000, -20);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4962);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=1135976");
                                      cm.npc_LeaveField("oid=1135977");
                                      cm.npc_LeaveField("oid=1135978");
                                      cm.npc_LeaveField("oid=1135979");
                                      cm.npc_LeaveField("oid=1135980");
                                      cm.npc_LeaveField("oid=1135982");
                                      cm.npc_LeaveField("oid=1135983");
                                      cm.npc_LeaveField("oid=1135984");
                                      cm.dispose();
                                      cm.warp(930030002, 0, false);
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