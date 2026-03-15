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
      cm.sendNormalTalk("我也知道这样做没有意义。你看到了的话，也许会捧着肚子大笑。觉得这不像我，不是我应该做的事情。但是经过了几百年时间，我也难免会改变。所以才会做出这种事。", 16, 2159452, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("但是你为什么对我的事情只字不提呢？是因为那时的记忆太可怕？还是因为把我送过去的负罪感？算了。要是有人说我是英雄的话，我可能还会觉得承受不起。英雄？是谁给我贴上了那种幼稚的标签？", 16, 2159452, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(38040, '');
        cm.forceCompleteQuest(38040);
        cm.gainExp(7000);
        cm.gainItem(4034061, -1);
        cm.dispose();
        cm.warp(120041800, 4, false);
      }
    }
  }
}