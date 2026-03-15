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
      cm.sendNormalTalk("#r#e觉醒秘籍#n#k是记录了觉醒山上沉睡的#b#e祖先的武功#n#k的珍贵秘籍。", 4, 9062318, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("这是与#r#e传说#n#k一起，在熊猫仙人之间#b#e世代相传的物品#n#k。", 4, 9062318, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("传说？", 2, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#fn宫书##fs16##r#e觉醒山#n#k开放期间，\r\n\r\n拥有#b#e觉醒秘籍学习资格#n#k的人\r\n\r\n可以唤醒沉睡的仙人！", 4, 9062318, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("具备#b#e学习觉醒秘籍的资格#n#k后，就可以唤醒觉醒山上沉睡的祖先们了。", 4, 9062318, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk('我要怎么获得资格呢？', 2, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("那需要坚持不懈的修炼。\r\n你得使用#r#e觉醒铸币#n#k来向秘籍#b#e证明#n#k你的修炼成果。", 4, 9062318, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("带来#r#e觉醒铸币#n#k，我就帮你证明。\r\n每天带来#r#e#i4310296#200个觉醒铸币#n#k，就可以#b#e修炼秘籍#n#k。", 4, 9062318, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("坚持修炼，完成各个秘籍的#b#e入门阶段#n#k后，就能取得资格了。", 4, 9062318, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("如此一来，沉睡的#b#e祖先就会苏醒#n#k，然后你便可以正式修炼觉醒秘籍。\r\n一步步地进入#r#e更高阶段秘籍#n#k的修炼。", 4, 9062318, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("此外，完成秘籍后还可以获得#b#e特殊道具#n#k。那是祖先们为修炼秘籍的修炼生准备的，就封印在秘籍里！", 4, 9062318, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("那你好好修炼，收集#r#e#i4310296#觉醒铸币#n#k吧。", 4, 9062318, true, true);
                          } else if (status === v++) {
                            cm.updateInfoQuest(501094, "start=1;trainigTuto=1;mapTuto=2");
                            cm.openUI(1271);
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