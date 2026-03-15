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
      cm.askMenu("嗨~#h0#。看样子你有事找我？说说吧？\r\n#L0##b告诉卡珊德拉说，把#z1190518#弄丢了。#l\n#k", 9010010);
    } else {
      if (status == v++) {
        cm.askMenu("嗯？徽章？\n这可麻烦了~要重新领取不是不行，可制作那徽章需要一笔相当大的材料费，你能承担吗？\r\n#L0##b材料费我出，重新给我制作个徽章吧。#l\r\n#L1#既然这样，就算了。#l\n#k", 9010010);
      } else {
        if (status == v++) {
          if (a == 0) {
            cm.askYesNo("那么，你愿意支付#e#b580,000金币#k#n的材料费，重新领取徽章吗？", 9010010);
          } else {
            cm.sendOk("好吧。要是你改变主意，再来找我~", 9010010);
            cm.dispose();
          }
        } else if (status == v++) {
          if (cm.getMeso() > 580000) {
            cm.sendOk("给，这是你要的徽章。这次可别再弄丢了啊！", 9010010);
            cm.gainMeso(-580000);
            cm.gainItem(1190518, 1);
          } else {
            cm.sendOk("你现有的金币不够哦？", 9010010);
          }
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