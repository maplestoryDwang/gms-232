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
      cm.askAcceptDecline("嘿~ 老大！\r\n你伤得很严重啊？\r\n你需要抓紧接受治疗，老大！\r\n\r\n虽然我不能像阿尔那样治愈你，不过我有#b红色药水#k。\r\n\r\n只要吃了这红色药水，你就能#b恢复体力#k了，老板！\r\n你快吃下这药水吧！", 0, 9390302);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("嘿~ 老大！吃了这个，你就能痊愈了。老大！\r\n\r\n按#b[I]#k键打开背包，然后#b双击#k#b[消耗窗]#k中的红色药水道具就行了，老大！\r\n#i03800627#", 0, 9390302, false, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("如果你不小心将我给你的东西摔碎，可以再来找我！", 0, 9390302, true, true);
        } else if (status === v++) {
          cm.forceStartQuest(59011, '');
          cm.openUI(0);
          cm.gainItem(2432253, 1);
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
      cm.sendNormalTalk("干得好，老大！你现在应该知道如何用道具使自己恢复体力了吧？", 1, 9390302, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("我给你'#b#t2000001##k'和'#b#t2000006##k'各50个，你要好好使用，老大！", 1, 9390302, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嗯？？但是，老大！！我觉得有奇怪的味道？？", 1, 9390302, true, true);
        } else if (status === v++) {
          cm.forceCompleteQuest(59011);
          cm.gainItem(2000001, 50);
          cm.gainItem(2000006, 50);
          cm.dispose();
          cm.warp(866111000, 0, false);
        }
      }
    }
  }
}