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
      cm.npc_ChangeController(2159429, "oid=1136030", 1400, -20, 9, 1350, 1450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136030", "summon", 0, 0);
      cm.npc_ChangeController(2159430, "oid=1136031", 1450, -20, 8, 1400, 1500, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136031", "summon", 0, 0);
      cm.npc_ChangeController(2159431, "oid=1136032", 1500, -20, 8, 1450, 1550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136032", "summon", 0, 0);
      cm.npc_ChangeController(2159432, "oid=1136033", 1550, -20, 15, 1500, 1600, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136033", "summon", 0, 0);
      cm.npc_ChangeController(2159433, "oid=1136034", 1600, -20, 15, 1550, 1650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136034", "summon", 0, 0);
      cm.sendNormalTalk("(救了孩子们，现在回去吧。让那个拿着气球的熊仔把他们带走就行了吧？)", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("喂……喂……", 1, 2159429, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("......?", 17, 2159429, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('快说，乌里卡。', 1, 2159431, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("是啊，快说吧。", 1, 2159430, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……对不起，我错了。", 1, 2159429, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("谢谢你救了我们。", 1, 2159431, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("谢谢。", 1, 2159432, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("谢谢……抽泣抽泣……", 1, 2159433, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("(……还好孩子们没事。快把他们带到村里的切奇那里去吧。)", 17, 2159433, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=1136030");
                            cm.npc_LeaveField("oid=1136031");
                            cm.npc_LeaveField("oid=1136032");
                            cm.npc_LeaveField("oid=1136033");
                            cm.npc_LeaveField("oid=1136034");
                            cm.dispose();
                            cm.warp(310000000, 12, false);
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