var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(2440016, "oid=25929", 85, 66, 2, 35, 135, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face6#啊？这算什么。为什么突然要修仙？要成为超越者的人，为什么要当神仙？我们只要找到女神之泪就行了！", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face6#而且那个也算#p2440004#？……再怎么看也不像是个正常人！像那种人有什么可学的？！", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('面包……好想吃哦……', 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#你怎么还面包个没完！", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;