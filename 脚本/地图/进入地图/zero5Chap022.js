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
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.spawnMobLimit(9300787, 1, -235, -637, 100);
        cm.sendNormalTalk("啊啊，这么快就到了最后一关了，真是可惜啊。我还想再多看看#p2400005#你的英姿呢……没有了妨碍者，你好像变得更厉害了。", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("最后我为你准备了一个更特别的敌人。妖精女王#r艾菲尼娅#k……是和#p2400005#你的风度很相称的敌人吧。快把她打倒吧！", 33, 2460000, true, true);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false, true, false);
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