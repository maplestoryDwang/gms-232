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
      cm.npc_ChangeController(2450003, "oid=26497", 153, 18, 1, 103, 203, 0, false, 0, false);
      cm.npc_ChangeController(2450026, "oid=26498", 254, 18, 5, 204, 304, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.spawnMobLimit(9300770, 1, 580, 18, 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("那个女子是#p2450003#吗？对吗？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("没错！我去救#p2450003#，你们去摧毁#r#o9300770##k吧！", 33, 2450002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("女神之泪……不对，绑匪呢？他到底在哪里呢？", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("他应该在电站的别的区域。摧毁#o9300770#的话，他就会来这的！", 33, 2450002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("好吧。那先摧毁#o9300770#。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(325090130, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
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