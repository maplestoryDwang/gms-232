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
  } else {
    if (status == v++) {
      cm.sendNormalTalk("等等,你刚才说,你会成为英雄?", 0, 9390306, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("嗯!我一定会成为冒险岛5大英雄一样的大英雄!", 2, 9390306, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk('可笑啊,你怎么可能?', 0, 9390306, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("切!!我一定会成为英雄的!\r\n你怎么才会相信我呢?", 2, 9390306, true, true);
          } else {
            if (status === v++) {
              cm.askAcceptDecline("若你敢进入村东#b野狼森林#k的话,我就相信你。\r\n知道吗?那里危险的连大人们都不敢轻易进去呢!", 0, 9390306);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("好,我去去就来!", 2, 9390306, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("哇,真的?不要勉强啊。", 0, 9390306, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("哼,要想当英雄,这点程度就应该不在话下才是!", 2, 9390306, true, true);
                  } else if (status === v++) {
                    cm.forceStartQuest(59002, '');
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
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}