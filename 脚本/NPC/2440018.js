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
      var w = cm.getPlayer().getPosition();
      if (Math.abs(w.x - 3662) > 200 || Math.abs(w.y - 68) > 200) {
        cm.playerMessage(5, "离得太远了，没法说话。");
        cm.playerMessage(-1, "离得太远了，没法说话。");
        cm.dispose();
      } else {
        cm.sendNormalTalk("噢，你们已经表现出了平静心了，那么我就送给你们证物吧。来，这是修炼证物，拿去吧。", 33, 2440018, false, true);
      }
    } else if (status === V++) {
      cm.gainItem(4033833, 1);
      cm.dispose();
      cm.warp(324000000, 8, false);
    }
  }
}