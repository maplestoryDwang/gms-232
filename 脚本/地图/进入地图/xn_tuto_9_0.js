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
          cm.npc_ChangeController(2159381, "oid=23881705", -1700, 20, 26, -1750, -1650, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=23881705", "summon", 0, 0);
          cm.npc_ChangeController(2159384, "oid=23881706", -1600, 20, 26, -1650, -1550, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=23881706", "summon", 0, 0);
          cm.sendNormalTalk("通过这个走廊，就是机库。通过那里之后，就能到达外面了。但是一路上到处都是警卫机器人。", 1, 2159381, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我会想办法的。别担心。", 3, 2159381, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("刚才这位朋友说会成为累赘。老实说，我刚才掉进陷阱的时候手臂受了伤，没办法帮你。真的没关系吗？", 1, 2159384, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("没关系。我会想办法的。", 3, 2159384, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=23881705", 1, 2200, 100);
                  cm.npc_SetForceMove("oid=23881706", 1, 2200, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                } else if (status === V++) {
                  cm.playerMessage(-1, "持续按CTRL键，可以攻击。请先击退挡住去路的怪物。");
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=23881705");
                  cm.npc_LeaveField("oid=23881706");
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