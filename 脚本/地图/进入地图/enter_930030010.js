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
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.npc_ChangeController(2159382, "oid=1136685", -680, 20, 17, -730, -630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136685", "summon", 0, 0);
      cm.npc_ChangeController(2159388, "oid=1136686", -1248, 20, 21, -1298, -1198, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1136686", "summon", 0, 0);
      cm.npc_ChangeController(2159386, "oid=1136687", -1063, 20, 14, -1113, -1013, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136687", "summon", 0, 0);
      cm.npc_ChangeController(2159385, "oid=1136688", -1106, -100, 25, -1156, -1056, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1136688", "summon", 0, 0);
      cm.npc_ChangeController(2159387, "oid=1136689", -653, -40, 27, -703, -603, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1136689", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("#b(……向反抗者一行讲述了从干部们那里听到的内容。)#k", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("队长，这是很重要的情报。", 1, 2159386, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("是的，格里梅尔的和复活有关的实验，以及黑色之翼内部也存在分裂……这对我们来说也是很有用的情报。", 1, 2159388, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("说的没错。\r\n\r\n……但是我不太欣赏这位骑士的行动。", 1, 2159387, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我也一样。到底是怎么想的？以为自己有九条命吗？", 1, 2159385, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("好了，各位。冒险骑士团就由他们去吧。我们回到我们的地方去吧。", 1, 2159382, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=1136689");
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=1136686");
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=1136687");
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=1136688");
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……还有你，可别误会了，我可不是因为喜欢你才救你的。我最讨厌欠冒险骑士团的人情了。\r\n\r\n救乌里卡和孩子们的恩情，现在彻底还清了。", 1, 2159382, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("还有，不管你再怎么努力，我们也不会相信冒险骑士团的。\r\n\r\n回去之后，请你转告#b你的同伴#k。", 1, 2159382, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=1136685");
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.dispose();
                                cm.warp(310030000, 1, false);
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