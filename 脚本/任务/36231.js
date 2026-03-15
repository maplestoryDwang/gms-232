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
      cm.sendNormalTalk_Bottom("#face0#对了，你之前说过你在找铃铛吧？后来怎么样了？", 36, 3005103, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#嗯，我在古董店找到了一本书。", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我手上的铃铛貌似和那个所谓的#r器物#k有关。", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#虽然因为重要的部分被撕碎了，没法进一步确认。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#器物啊……", 36, 3005103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#啊，我好像有了个好主意！", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#上面写着是后巷的秘密商人借走了那本书！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#后巷会不会有点危险啊？", 36, 3005103, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face6#没关系！格里的朋友就是我的朋友！", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.askYesNo_Bottom("#face0#要不去找找#b后巷静谧之所#k的秘密商人迈沙克？", 36, 3005100, 1);
                      } else if (status === v++) {
                        cm.forceStartQuest(36231, '');
                        cm.OnStartNavigation(410004003, 0, '', 36231);
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
      cm.sendNormalTalk_Bottom("#face0#什么嘛？小屁孩一边儿去，走！", 36, 3005107, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你好！我是格里的朋友！", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#……什么？你说是谁的什么东西？", 36, 3005107, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#哈哈，开玩笑也要有个度。", 36, 3005107, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face6#嘿嘿，真不是闹着玩的！大叔你应该也是格里的朋友吧？", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#大叔……？格里的朋友……？\r\n孩子，你还真有本事，一句话激怒两个人，哈哈。", 36, 3005107, true, true, 1);
              } else if (status === v++) {
                cm.forceCompleteQuest(36231);
                cm.gainExp(3341);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}