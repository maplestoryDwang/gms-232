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
      cm.spawnMobLimit(2400379, 1, -325, 218, 100);
      cm.spawnMobLimit(2400377, 1, -325, 218, 100);
      cm.updateInfoQuest(34938, "dir=2;exp=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.addPopupSay(3001504, 1000, "#face0#有本事你就试试吧。没用的。", '', 0);
      cm.addPopupSay(3001500 + cm.getPlayer().getGender(), 1000, "#face8#没有张开翅膀……说明还没使出全力……", '', 0);
      cm.addPopupSay(3001504, 1000, "#face0#……你现在不是我的对手。", '', 0);
      cm.scheduleOpenNpcTask(20, 0, "影魂异人_阻击阿尔贝_剧情杀");
      cm.dispose();
    }
  }
}