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
      cm.sendNormalTalk("哦，来啦？！吼吼吼。消息挺灵的嘛。不愧是“名誉”影子商团团员！什么？什么消息~消息就是我！成功开发出了解毒剂试样！哦哈哈。这也就代表我将超越#p3001004#那家伙。嗯，现在只能临床试验了！", 0, 3001105, false, true);
    } else {
      if (status === v++) {
        cm.askMenu("我说爆莉萌天使啊，嘿嘿。你要不要尝尝这个啊？我业绩王拍胸脯保证，100%安全！我会支付你报酬。\r\n\r\n#L0#什么？我没听清楚，你再说一遍。#l\r\n#L1#疯啦。居然让我喝没经过临床试验的药 ？绝对不行！#l\r\n#L2#必须支付我一定的报酬，我才能喝！#l", 0, 3001105);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("好的。100%安全吧？不会是喝了以后，一直噗噗放屁！出气打嗝~停不下来吧？", 2, 3001105, false, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("说了不是~百分百相信我~\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 77,904", 0, 3001105, true, true);
          } else {
            if (status === v++) {
              cm.gainExp(77904);
              cm.sendNormalTalk("那，我喝啦~咕噜咕噜……呃？", 2, 3001105, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("嗝……呃……噗噗……呃嗝呃嗝……", 2, 3001105, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk('哇！这是怎么回事？！', 0, 3001105, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("啊呃……呃呃……罗，罗梅…… 坏了……噗噗…… 啊呃", 2, 3001105, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("怎么会，不行。给，这是你喝药水的报酬，快去找#p3001004#吧。快去。", 0, 3001105, true, true);
                    } else if (status === v++) {
                      cm.gainItem(4033394, 1);
                      cm.forceStartQuest(31669, '1');
                      cm.forceCompleteQuest(31668);
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