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
      if (cm.getNumberFromQuestCustomData(28766) > 0) {
        cm.sendOkS("已经解救了这里的人质！下一步行动是什么来着？");
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("救命！我骂那些外星人无证采矿，结果被它们关起来了！这不公平啊！", 1, 9201167, false, true);
    } else {
      if (status === V++) {
        cm.playerMessage(-1, "(快速连按Ctrl键打碎锁。)");
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/guide1/0"], [5000, 0, -200, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_BreakEffect("17#17#17#17#17#", 5, 2, 5000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("(锁被你打碎了。)", 3, 9201167, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("用这返回卷轴回新叶都市去！", 3, 9201167, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你救了我！我下次再也不敢骂外星人了！", 1, 9201167, true, true);
            } else {
              if (status === V++) {
                var w = cm.addNumberForQuestCustomData(28749, 1);
                cm.sendNormalTalk("还差 " + (5 - w) + " 个。", 3, 9201167, true, true);
              } else if (status === V++) {
                cm.forceStartQuest(28766, '1');
                cm.setStandAloneMode(false);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}