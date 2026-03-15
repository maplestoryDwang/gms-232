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
      cm.sendNormalTalk("没想到会在这种地方遇到人，真是太好了。我一个人在这里徘徊了不知道多久……", 1, 3003807, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我在迷宫中徘徊的时候，发现了一扇与众不同的门。从那里进去，好像可以走出去……但是我一个人有点害怕……", 1, 3003807, true, true);
      } else {
        if (status === V++) {
          cm.askYesNo("请跟我一起走吧。拜托……", 0, 3003807);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("（一起到那里去看看吧。）", 3, 3003807, false, true);
          } else if (status === V++) {
            cm.playerMessage(5, '移动到痛苦迷宫中。');
            cm.dispose();
            cm.warp(cm.getMazeDestination(), 0, false);
          }
        }
      }
    }
  }
}