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
      cm.sendNormalTalk_Bottom("敌人的位置目前还不明确吧？", 37, 1540450, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("雾气太重了。几小时之后，应该就能用肉眼进行确认了。", 37, 1540452, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("在此之前，交战发生的概率是？", 37, 1540450, true, true);
        } else if (status === V++) {
          cm.sendNormalTalk_Bottom("非常高。我们不能小看黑色之翼的战斗力。他们做事不择手段。", 37, 1540452, true, false);
          cm.dispose();
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