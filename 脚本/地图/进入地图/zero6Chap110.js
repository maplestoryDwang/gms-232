var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getInfoQuest(40613).length > 0) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face10#……我们的诞生就意味着女神的消亡…… 皮埃是这么说的吧。女神即使放弃自己也要拯救冒险岛，冒险岛真的这么重要吗？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#……我只想报复欺骗我的威尔，消灭造成这一切的元凶黑魔法师而已。并没有关心过冒险岛世界…… 女神似乎并不是这样。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#女神是……出于对冒险岛世界的喜爱吗？所以……才会把玩具城的时间停止的吗？", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face10#如果不是那样的话，女神就不会执意答应他们的委托了吧……", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……现在不是该这样的时候呢。我们快去过去的村庄吧。得完成赫尔委托的事情啊。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#嗯。", 41, 2400006, true, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;