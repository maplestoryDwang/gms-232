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
      cm.sendNormalTalk("嗨，#b#h0##k！\r\n\r\n你有好好进行体力锻炼吗？\r\n这次#r#e的冬天估计会格外寒冷。#n#k", 4, 9062317, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#r#e冰冷的冬季#n#k才是最适合修炼的季节。\r\n说到这个，我来是想通知你一个#b#e千载难逢的大好机会#n#k。", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("正是武陵的隐秘传说\r\n\r\n#e#r#fs16#<觉醒山>！！", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#r#e<觉醒山>#n#k是只有经过大量修炼的#b#e觉醒的熊猫#n#k们才能去的地方。靠着祖先们长期以来积累的内功，在那里可以获得超乎想象的领悟。", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("按理说，像我们这样修炼不足的人，是#b#e去不了那里的……#n#k\r\n但传说，通往该地的道路会#r#e每隔1000年开启一次#n#k！！", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("……难道？", 2, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("对！现在通往#r#e<觉醒山>#n#k的道路已经开启了！", 4, 9062317, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("#b#e#fs20#觉醒的时间到了！", 4, 9062317, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("去那里的话，将可以体验到#r#e实力飞跃性的上升#n#k。\r\n\r\n#b#e当然，以你的实力，也可能很难适应那个进度……呵", 4, 9062317, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("......", 2, 0, true, true);
                      } else {
                        if (status === v++) {
                          cm.askYesNo("怎么样？#e#b#h0##k#n。\r\n你要和我一起前往#r#e<觉醒山>#n#k吗？\r\n\r\n我师父已经先过去等我们了。", 4, 9062317);
                        } else if (status === v++) {
                          cm.updateInfoQuest(501092, "point=0;npc1=0;npc2=0;npc3=0;lv=0;date=0");
                          cm.updateInfoQuest(501093, "reward5=0;reward6=0;point=0;reward7=0;reward8=0;reward10=0;reward9=0;reward0=0;reward1=0;reward2=0;reward3=0;reward4=0");
                          cm.updateInfoQuest(501094, 'start=1');
                          cm.forceCompleteQuest(100620);
                          cm.updateInfoQuest(100620, "rMap=" + cm.getMapId());
                          cm.dispose();
                          cm.warp(993184001, 0, false);
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