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
      cm.npc_ChangeController(2153006, 'oid=999264', 630, -40, 6, 580, 680, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=999264", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("我来试试这个药水。", 1, 2153006, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg0/0", "oid=999264"], [2000, 0, -100, 1, 0, 1, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=999264");
          cm.npc_ChangeController(2159333, "oid=999265", 630, -70, 6, 580, 680, 1, false, 0, false);
          cm.npc_SetSpecialAction('oid=999265', "summon", 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/6", "oid=999265"], [800, 0, 0, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(800);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("成……成功了！手……脚……全都恢复正常了，对吧？", 1, 2159333, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b嗯……但是……#p2159307#……你恢复的是过去时候的样子吗？#k", 3, 2159333, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嗯嗯嗯？？我变成了你的样子？？到底是怎么回事……", 1, 2159333, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg2/0", "oid=999265"], [2000, 0, -100, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=999265");
                    cm.npc_ChangeController(2153006, "oid=999266", 630, -40, 6, 580, 680, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=999266", "summon", 0, 0);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/6", "oid=999266"], [800, 0, 0, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(800);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b还好效果好像没有持续太久。可以变回原来样子的传闻，看来是假的。#k", 3, 2153006, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("(还好他没有发觉……)\r\n好了，回去吧。快点。", 1, 2153006, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else if (status === V++) {
                          cm.npc_LeaveField("oid=999266");
                          cm.setStandAloneMode(false);
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.dispose();
                          cm.warp(310010000, 0, false);
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