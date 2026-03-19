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
      cm.npc_ChangeController(2440017, 'oid=25932', 127, -216, 79, 77, 177, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("欢迎来到诺功的修炼场！健康的肉体精神也才能健康！唯有修炼才能锻炼身心！", 33, 2440017, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这个修炼场的修炼用稻草人当中，有一个修炼证物！消灭稻草人把证物拿回来！那么我就认可你们！", 33, 2440017, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face3#……这次是体力锻炼吗？和刚才的方法有些不同。我更喜欢这里。走吧，#p2400006#。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嗯。但是，面包……", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#你有完没完！", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.setInGameDirectionMode(false, true, false);
                  cm.spawnMobLimit(9300766, 1, 1104, -215, 100);
                  cm.spawnMobLimit(9300766, 1, 252, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 856, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 1610, -215, 100);
                  cm.spawnMobLimit(9300766, 1, 1365, -215, 100);
                  cm.spawnMobLimit(9300766, 1, 1467, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 1207, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 528, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 528, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 1467, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 856, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 252, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 1794, 51, 100);
                  cm.spawnMobLimit(9300766, 1, 1914, 51, 100);
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