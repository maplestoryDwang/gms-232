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
        cm.spawnMobLimit(9300785, 1, 516, -37, 100);
        cm.sendNormalTalk("在第一个庭院中，你将遇到的敌人是#r远古精灵#k。无论是它的名字还是长相都非常的可爱。好了，尽情战斗吧！不会有#r妨碍者#k的！天啊，抱歉。我不小心把#p2400006#称为了妨碍者。", 33, 2460000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("很抱歉。不过老实说我觉得#p2400006#确实是妨碍了#p2400005#你。事实不是这样吗？与#p2400005#你不同，#r#p2400006#既不懂人情世故又愚蠢#k。", 33, 2460000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("为了照顾#p2400006#，#p2400005#你肯定吃了不少苦。正好趁此机会缓解下压力也不错。好了，那就给我看看。你的实力……！", 33, 2460000, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
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