var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(2639)) {
    cm.dispose();
    return;
  } else if (cm.isQuestActive(2643)) {
    action2643(f, E, e);
  } else {
    cm.dispose();
  }
}
function action2643(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1052001, 'oid=225369', -1082, 60, 3, -1132, -1032, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(3);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你…看起来很眼熟啊，雪姬还好吗？", 1, 1052001, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("(转达雪姬的故事)", 17, 1052001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是吗…即使不能原谅…还是可以合力对抗吗。不愧是飞花院的首领啊…… 雪姬已经不是以前那个柔弱的女孩儿了。", 1, 1052001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("很好，来吧。让你们见识见识废都飞侠的力量吧。", 1, 1052001, true, true);
              } else if (status === V++) {
                cm.spawnMobLimit(9300528, 1, -964, 142, 100);
                cm.spawnMobLimit(9300528, 1, -964, 142, 100);
                cm.eventSKill(0);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}