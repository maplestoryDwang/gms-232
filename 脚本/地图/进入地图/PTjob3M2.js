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
      cm.npc_ChangeController(1403001, "oid=219894", -96, -69, 4, -146, -46, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.sendNormalTalk("想起了过去的事情……那个画框里的画，小时候曾经非常讨厌……其实现在也有点讨厌……", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("不，不是想这些的时候。技能书……技能书放在哪里了？啊，是在上面的箱子里吗？", 17, 0, true, true);
      } else if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      }
    }
  }
}