var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(63108, "clear") == 0) {
        cm.sendNormalTalk("没时间啰嗦，快点！！！", 5, 9400320, true, false);
        cm.dispose();
      } else {
        cm.sendNormalTalk("打住！", 5, 9400321, false, true);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk('#b呼哧呼哧……诶？', 3, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我说了快住手！", 5, 9400321, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("啊……好的。怎么了？妈呀！", 3, 0, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(867113722, 0, false);
          }
        }
      }
    }
  }
}