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
      cm.npc_ChangeController(2440018, "oid=25935", 3680, 68, 74, 3650, 3718, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你们是来修炼的吗？精神修炼虽然名字听起来宏伟，其实也没有那么困难。只要修炼出发生任何事情都不会被动摇的平静心就可以，这就是精神修炼的目的。", 33, 2440018, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这次你们去过那个独木桥吧，不要被中间的障碍物所动摇，只要保持一颗平常的心态，就不会那么难的。呵呵……来，开始吧。", 33, 2440018, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这次是最后了吧？我们快点结束掉，没有时间在这里磨蹭了。还要去找女神之泪呢。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嗯……不过这次的女神之泪又是什么样的人呢？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("是啊，说不定是个熊猫，和这个村里的其他人一样？找找就知道了。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;