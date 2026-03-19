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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000138, "oid=210366975", 1350, 0, 13, 1300, 1400, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=210366975", "summon", 0, 0);
        cm.npc_ChangeController(3000143, "oid=210366976", 1600, 0, 12, 1550, 1650, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=210366976", "summon", 0, 0);
        cm.npc_ChangeController(3000144, "oid=210366977", 1750, 0, 16, 1700, 1800, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=210366977", 'summon', 0, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1700, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3719);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 100000, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/11"], [900, 0, -120, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/12"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_PushMoveInfo(0, 300, 1700, 29);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(679);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("原来如此，你就是投生现代的狂龙战士啊？和先代相比，还只是个小毛孩呢。", 1, 3000138, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("(现在麦格纳斯的力量应该变弱很多，能打赢他吗？)", 17, 3000138, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("竟然让小女孩上战场，诺巴族真是没落了。", 1, 3000138, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("少说废话，麦格纳斯，今天就是你的死期！", 1, 3000143, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("就靠我们几个消灭麦格纳斯？能不能行啊？", 17, 3000143, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("那家伙现在变弱很多，使不出多少力量！大家一起上！", 1, 3000144, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("一群不知天高地厚的小东西。就算我现在变弱了，你们也不是我的对手。", 1, 3000138, true, true);
                                } else if (status === V++) {
                                  cm.eventSKill(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=210366975");
                                  cm.npc_LeaveField("oid=210366975");
                                  cm.npc_LeaveField("oid=210366976");
                                  cm.npc_LeaveField("oid=210366976");
                                  cm.npc_LeaveField("oid=210366977");
                                  cm.npc_LeaveField("oid=210366977");
                                  cm.dispose();
                                  cm.warp(940002000, 0, false);
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