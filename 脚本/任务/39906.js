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
      cm.sendNormalTalk_Bottom("#face0#你可以将这些回收的材料转交给#b守护者#k吗？\r\n她现在应该在城里的铁匠铺。", 36, 3004435, false, true);
    } else if (status === v++) {
      cm.forceStartQuest(39906, '');
      cm.updateInfoQuest(39900, "00=h0;11=h0;04=h1;05=h1;06=h0;25=h0;07=h0");
      cm.OnStartNavigation(410000500, 1, "3004504", 39906);
      cm.dispose();
    }
  }
}
function stage0(g, w, a) {
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
      cm.sendNormalTalk_Bottom("#face0#啊，对抗者大人。", 36, 3004430, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#您有什么事吗？", 36, 3004430, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("（转达了胡克的话。）", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#谢谢你们。\r\n我欠了对抗者大人，还有联盟的各位，一个大大的人情。", 36, 3004430, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('……', 56, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("（只看外表，并不能了解翅膀的情况。）", 56, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#您为何……这幅表情？我脸上有什么东西吗？", 36, 3004430, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("啊，没什么。", 56, 0, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom('有什么我能帮忙的吗？', 56, 0, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#谢谢您。不过好像已经差不多整理完毕。\r\n您可以去休息了。", 36, 3004430, true, true);
                      } else if (status === v++) {
                        cm.forceCompleteQuest(39906);
                        cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
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
}