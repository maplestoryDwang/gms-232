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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(3000145, "oid=210628923", 1200, 0, 3, 1150, 1250, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=210628923", "summon", 0, 0);
      cm.npc_ChangeController(3000146, "oid=210628924", 1350, 0, 4, 1300, 1400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=210628924", 'summon', 0, 0);
      cm.npc_ChangeController(3000147, "oid=210628925", 1450, 0, 7, 1400, 1500, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=210628925", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("真是个冒失的小丫头。反正我们已经被遗弃了，也没什么好怕的，拼死一搏吧！", 1, 3000145, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("“遗弃”，这是什么话？", 17, 3000145, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("麦格纳斯遗弃了我们。现在被你发现了这里，我们只有死路一条！", 1, 3000146, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嘘！别再说了！", 1, 3000147, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("有什么关系。麦格纳斯说过不会向达尔摩尔请求援军的！他说这话还不是为了那要强的自尊心，打算瞒着敌人，只进行防守。", 1, 3000146, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("也对……麦格纳斯的军队现在都不剩四分之一了。", 1, 3000145, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("呃……不好意思打断你们说话。", 17, 3000145, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("唉！伸头一刀缩头也是一刀，开打吧！", 1, 3000147, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你们可以主动悔过请求原谅啊……", 17, 3000147, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("少对我们指手画脚的！大家上！", 1, 3000145, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=210628923");
                              cm.npc_LeaveField("oid=210628923");
                              cm.npc_LeaveField("oid=210628924");
                              cm.npc_LeaveField("oid=210628924");
                              cm.npc_LeaveField("oid=210628925");
                              cm.npc_LeaveField("oid=210628925");
                              cm.forceStartQuest(25919, '1');
                              cm.sendNormalTalk("把麦格纳斯的情报转告给#m400000000#的#p3000000#。", 16, 0, false, true);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(400000000, 2, false);
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