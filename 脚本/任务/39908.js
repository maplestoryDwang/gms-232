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
      cm.sendNormalTalk_Bottom("#face0#该从哪里入手呢？", 36, 3004431, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#伊黛娜大人知道圣遗物的来历吗？", 36, 3004434, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#嗯？", 36, 3004431, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#那些常常被我们称之为神的存在……\r\n比如世界的意志、古代神，还有超越者，如此这般……", 36, 3004434, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#总而言之，是#r“上位存在”#k。", 36, 3004434, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#他们这些高等生命与凡人不同，是一种超越世人理解的生物。", 36, 3004434, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#所以，在凡间生活的智慧生命对他们保持着敬畏。", 36, 3004434, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#这就是从古代起，大家普遍认为#r“只有神才能与神对抗”#k的原因。", 36, 3004434, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯……也就是说只有高等生命才能与高等生命战斗，\r\n要不然就得使用载有高等生命力量的武器来与他们战斗？", 36, 3004431, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#就像#b带着封印石的对抗者#k和身为超越者的#r黑魔法师#k交手那样。", 36, 3004431, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#正是如此。", 36, 3004434, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#我明白你的意思了。\r\n#b圣遗物#k和封印石一样，都是用以对抗高等生命的武器。\r\n所以它的启动方式也和封印石一样。", 36, 3004431, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#果然……从封印石开始着手调查，可以得到一些线索。", 36, 3004431, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#艾伦，你之前说起过关于#r封印石#k的事吧？\r\n那些相关文献都存放在哪里呢？", 36, 3004431, true, true);
                              } else {
                                if (status === v++) {
                                  cm.askYesNo_Bottom("#face0#图书馆的第7区域。往右走就能看到。", 36, 3004434);
                                } else if (status === v++) {
                                  cm.forceStartQuest(39908, '');
                                  cm.OnStartNavigation(410000690, 0, 'east00', 39908);
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
  } else if (status == v++) {
    cm.warp(993151011, 0, false);
    cm.dispose();
  }
}