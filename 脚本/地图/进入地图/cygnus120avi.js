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
      cm.npc_ChangeController(1104304, "oid=218927", -929, 88, 29, -979, -879, 0, false, 0, false);
      cm.npc_ChangeController(1104306, "oid=218928", -846, 88, 22, -896, -796, 0, false, 0, false);
      cm.npc_ChangeController(1104308, "oid=218929", -1002, 88, 28, -1052, -952, 0, false, 0, false);
      cm.npc_ChangeController(1104309, 'oid=218930', -564, 88, 19, -614, -514, 0, false, 0, false);
      cm.npc_ChangeController(1104310, "oid=218931", -623, 88, 19, -673, -573, 0, false, 0, false);
      cm.npc_ChangeController(1104312, "oid=218932", -734, 88, 23, -784, -684, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.fieldEffect_ScreenMsg("cygnusReturns/demian");
      cm.inGameDirectionEvent_AskAnswerTime(4500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("是那家伙吗？！要不要追，南哈特？", 1, 1104310, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不，首先应该查看一下圣地的情况！", 1, 1104305, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("美，美丽的圣地竟然变成了一片废墟……", 1, 1104307, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我有种不祥的感觉……神兽……神兽没事吧？", 1, 1104304, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 150, 470, 300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(13000);
                } else if (status === V++) {
                  cm.setAccountQuestInfo(238, "count=10357;T=20201006041309");
                  cm.forceStartQuest(20954, "rebirth");
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(913032001, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}