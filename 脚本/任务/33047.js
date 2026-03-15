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
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
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
      cm.sendNormalTalk_Bottom("你有东西要给我看? 是什么? ", 37, 1530120, false, true, 1);
      cm.effect_Voice("Voice2.img/Friends/HID_02/1", 100);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#……呃啊, 我的手, 我的脚! 我忍受不了这个! ", 37, 1530604, true, true, 1);
        cm.effect_Voice("Voice2.img/Friends/HID_02/2", 100);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#你为什么要这样对我? 我哪里对不起你了? 为什么要给我看这种东西? ", 37, 1530604, true, true, 1);
          cm.effect_Voice("Voice2.img/Friends/HID_02/3", 100);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("这是写给我的信? 那个不良少年? ", 37, 1530120, true, true, 1);
            cm.effect_Voice("Voice2.img/Friends/HID_02/4", 100);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哈啊……说不定那家伙是真心的. 如果就这样糊弄他，我反而会觉得愧疚吧. ", 37, 1530120, true, true, 1);
              cm.effect_Voice("Voice2.img/Friends/HID_02/5", 100);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("我会很明确地拒绝, 你不用担心. 谢谢你把信交给我. ", 37, 1530120, true, true, 1);
                cm.effect_Voice("Voice2.img/Friends/HID_02/6", 100);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#……不过, 我的手还是没能伸展开啊. ", 37, 1530604, true, true, 1);
                  cm.effect_Voice("Voice2.img/Friends/HID_02/7", 100);
                } else if (status === v++) {
                  cm.forceCompleteQuest(33047);
                  cm.gainItem(4034349, -1);
                  cm.gainItem(3700269, 1);
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