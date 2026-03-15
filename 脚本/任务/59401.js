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
      cm.sendNormalTalk("喵喵!我来了喵!为了给你介绍新的朋友,我又来了喵!", 0, 9390300, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("冒险岛世界当中存在被称作#b宠物#k的朋友喵。根据宠物技能聪明的它们有的可以#b捡取道具#k,有的可以#b代替你#k使用血量药水和魔量药水喵!", 0, 9390300, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("在它们当中,我给你介绍我的朋友#b符文蜗牛#k,不妨和它一起干如何喵?", 0, 9390300);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这是我的朋友喵。只要在背包的#b商城物品栏双击#k我的朋友,即可登场喵!", 0, 9390300, false, true);
          } else {
            if (status === v++) {
              cm.forceStartQuest(59401, '');
              cm.forceCompleteQuest(59401);
              cm.sendNormalTalk("这只蜗牛的寿命只有#b5小时#k。寿命到了以后，它就无法继续陪在你身边了喵！", 0, 9390300, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("需要注意的是，宠物的#b饱满感#k降低时，会自行休息喵。\r\n因此，你得经常喂食#i2120000;#这种食物，使其常常维持饱满感喵！！", 0, 9390300, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("希望你能和我的伙伴一起度过最愉快的时光！", 0, 9390300, true, true);
                } else if (status === v++) {
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