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
      if (cm.isQuestActive(3322)) {
        if (!cm.haveItem(4031697)) {
          cm.gainItem(4031697, 1);
        }
        cm.dispose();
        return;
      }
      if (!cm.isQuestActive(3311)) {
        cm.dispose();
        return;
      } else {
        cm.sendNormalTalk("是看起来很绅士的炼金术士的相片框。这个人是失踪的炼金术士吗？", 0, 2111013, false, true);
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("看到了乱糟糟的桌子。可能已经有很多人调查过了，有很多手印。仔细搜了一下周边，没发现什么特别的。", 0, 2111014, false, false);
      } else {
        if (status === V++) {
          cm.askYesNo("透过蜘蛛网好像可以看到一些字迹…… 要观察墙壁吗？", 0, 2111011);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("透过脏乱的涂鸦明显可以看到一些字迹。\n\n #b它是一种坠饰形态...#k \n\n 是什么意思呢？#k", 0, 2111011, false, true);
          } else if (status === V++) {
            cm.forceStartQuest(3311, '5');
            cm.dispose();
          }
        }
      }
    }
  }
}