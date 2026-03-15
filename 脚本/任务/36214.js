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
      cm.sendNormalTalk_Bottom("#face0#对不起，奶奶，我不小心把碗打碎了……", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#哦……那个碗，赔这么多就足够了吧。", 36, 3005113, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#个、十、百……\r\n怎，怎么办？我会努力攒钱的……", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#奶奶，我已经看到碗下面的价格标签了！价钱都赶不上一个苹果呢。", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#咳咳……那你替我找一样东西如何？", 36, 3005113, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我之前买了一件玩具，准备送给我儿子来着，可现在却找不到了。", 36, 3005113, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#很快就要到他生日了，我要尽快交到他手上……\r\n要是收不到生日礼物，我儿子搞不好又会撒泼打滚、大哭大闹。", 36, 3005113, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#别担心！我一定能让好礼送到的！", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#实在是太感谢了，我弄丢玩具的地方是……\r\n没错，好像就在#b#m410004011##k附近。", 36, 3005113, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#你确定是那里没错嘛？我怎么觉得这么靠不住呢……", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.askYesNo_Bottom("#face0#要前往#b#m410004011##k，找回奶奶弄丢的玩具吗？", 36, 3005100, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#我会快去快回的，稍微等我一下！\r\n#b（前往#m410004011#，捕捉20只#o8645226#，寻找#i4036779# #t4036779#吧！）#k", 36, 3005100, false, true, 1);
                          } else if (status === v++) {
                            cm.forceStartQuest(36214, '');
                            cm.updateInfoQuest(36200, "50=h0;51=h0;70=h0;52=h0;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                            cm.updateInfoQuest(36200, "50=h0;51=h0;70=h0;52=h0;53=h1;55=h0;76=h0;59=h1;77=h0;78=h0;set=1");
                            cm.OnStartNavigation(410004011, 0, '', 36214);
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
      cm.sendNormalTalk_Bottom("#face0#不过这个礼物看起来为什么这么旧啊？", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#就是说啊？每个角落都磨破了呢？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#只要顺利交出去就行了吧。", 36, 3005102, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36214);
          cm.gainExp(1836);
          cm.gainExp(3563);
          cm.gainItem(4036779, -1);
          cm.gainExp(370);
          cm.dispose();
        }
      }
    }
  }
}