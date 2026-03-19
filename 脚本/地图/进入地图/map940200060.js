var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3002100, 10, 20, 0);
      cm.npc_SetSpecialAction(3002100, "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove(3002100, 1, 250, 100);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(4500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove(3002100, -1, 70, 100);
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNextNoESC("人类怎么走这么慢啊？是因为没有尾巴吗？", 3002100);
          } else {
            if (status === V++) {
              cm.sendNextNoESC("呃呃，不行！我要先走了。村子就在眼前，现在不会再有危险了，你跟我来吧。沿着这条路简直走就行了。不可以走错哦！那我先走了！", 3002100);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove(3002100, 1, 510, 100);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNextSNoESC("……自说自话。刚才还拉着我说要一起到村里去，现在又让我自己找过去。唉，最好先跟过去。不能在这里迷路。");
                } else if (status === V++) {
                  cm.npc_LeaveField(3002100);
                  cm.forceStartQuest(38000);
                  cm.curNodeEventEnd(true);
                  cm.setInGameDirectionMode(false, true);
                  cm.setStandAloneMode(false);
                  cm.dispose();
                  cm.enableActions();
                } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;