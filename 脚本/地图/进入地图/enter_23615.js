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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(2159397, "oid=1262944", 1200, 0, 15, 1150, 1250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1262944", "summon", 0, 0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, 860, -32);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3275);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=1262944", -1, 500, 100);
            cm.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2672);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯？刚才明明好像是两个人。另一个人去哪儿了？还有你，我好像是头一次看见。你是干什么的，在这里鬼鬼祟祟地干什么？", 1, 2159397, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我只是路过这里的普通黑色之翼成员。", 3, 2159397, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("不对，等等……我好像最近见过这张脸……啊，没错！我在#p2154009#的指令书上看到过和你差不多的脸。", 1, 2159397, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你一定是看错了。", 3, 2159397, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("哦，是，是吗？看你这么底气十足，也许是我看错了……不对，跟#p2154009#确认一下，就知道我有没有看错了。跟我走！", 1, 2159397, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("失败了吗？看来只能把他打倒，然后逃走了。", 3, 2159397, true, true);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=1262944");
                            cm.spawnMobLimit(9300643, 1, 700, 28, 100);
                            cm.playerMessage(-1, "请打倒黑色之翼的手下。");
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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