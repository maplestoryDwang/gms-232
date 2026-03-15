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
    cm.sendNormalTalk("来,老大!现在就出去闯荡一番吧!", 4, 9390302, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk('喵!', 4, 9390300, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("波波也是喵!", 4, 9390301, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("哼,真烦人……", 4, 9390303, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("离这里不远的地方还有一个村落喵。姑且先到那里看看喵。", 4, 9390300, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("#b#h0##k你是第一次踏上旅程，所以你应该还不知道找路的方法喵。\r\n我们先学习下怎么看世界地图吧。", 4, 9390300, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("只要按#b[W]#k键，就能打开世界地图了喵。", 4, 9390300, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("打开世界地图，找到#b灯笼树村#k并点击。", 4, 9390300, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("另外,点击位于世界地图上方的指路登记按键即可喵。", 4, 9390300, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("最后，我将给你可以随时回到#b灯笼树村#k的#q110001514#技能，你试着使用下吧。\r\n#s110001514#", 4, 9390303, true, true);
                    } else if (status === v++) {
                      cm.forceStartQuest(59019, '');
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
      cm.sendNormalTalk("做得很好喵。\r\n现在就出发喵。", 4, 9390300, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(59019);
      cm.dispose();
    }
  }
}