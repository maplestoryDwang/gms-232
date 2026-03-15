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
      cm.askMenu("你好~#h0#，\r\n从你的表情看起来似乎找我有事啊？\r\n具体是什么事呢？\r\n#L0##b告诉卡珊德拉弄丢了黄金终结者徽章的事。#l", 4, 9010010);
    } else {
      if (status === v++) {
        cm.askMenu("嗯？\r\n徽章？\n这可有些麻烦~虽说这东西我也不是不能再给你，可制作徽章的材料费不容小觑，你不介意吗？\r\n#L0##b我会给你材料费的，重新帮我做徽章吧。#l\r\n#L1#既然如此，我愿意放弃。#l", 4, 9010010);
      } else {
        if (status === v++) {
          if (a == 0) {
            cm.askYesNo("那就算你#e#b1,000,000金币#k#n的材料费，你要重新接收徽章吗？", 4, 9010010);
          } else if (a == 1) {
            cm.sendNormalTalk("知道了，\r\n那要是你改变了主意，就再来找我~", 4, 9010010, false, false);
            cm.dispose();
          }
        } else if (status === v++) {
          cm.gainMeso(-1000000);
          cm.forceCompleteQuest(39461);
          cm.sendNormalTalk("来，这是你要的徽章，\r\n这次可千万别再把徽章弄丢了！", 4, 9010010, false, false);
          cm.gainItem(1190554, 1);
          cm.dispose();
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