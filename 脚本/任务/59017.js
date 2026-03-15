var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("哦,要出门远行?", 0, 9390304, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("不行啊,孩子。你要独自闯荡还太小。", 0, 9390304, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("没关系,不还有拉伊、波波、阿尔,以及酷酷的伊卡嘛。", 2, 9390304, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk('不过孩子……', 0, 9390304, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("奶奶,我不是根您说过,我总有一天会成为冒险岛的英雄嘛。\r\n所以我认为现在该是踏上英雄之路的时候了。", 2, 9390304, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("看来你已经下定决心了……\r\n知道了,孩子。那就祝你平安。", 0, 9390304, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("不过,你要记得要走大路,而且一定要在白天赶路,也不要和奇奇怪怪的人讲话哦……", 0, 9390304, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("奶奶!我现在已经不是小孩子了!", 2, 9390304, true, true);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(59017);
                    cm.dispose();
                    cm.warp(866136000, 0, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}