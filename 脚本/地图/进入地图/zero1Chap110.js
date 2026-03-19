var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(40104)) {
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
      cm.npc_ChangeController(2420041, "oid=24726", -52, 275, 3, -102, -2, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(6000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这个大大的岩石……", 41, 2400006, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#p2420012#所说的幻影的据点就应该是这里吧……挺破旧的，和那个华丽的怪盗名声一点都不像。所以那些姐妹也不愿来吗……？其实很想给他们看看抓到幻影的英姿。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("说不定他们以为我们抓不到幻影……", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("进去看看再说。", 41, 2400005, true, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;