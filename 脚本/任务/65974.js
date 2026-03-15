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
      cm.sendNormalTalk_Bottom('#face0#墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，是我，素笑……\r\n事情我听说了。", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face8#没事吧，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '？', 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face7##b我没事。抱歉让他给跑了。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#哪有！没事就好，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 36, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face7##b……云雾……变得更强了。气息也判若两人。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#也许是因为……学了魔功吧？\r\n墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我们不能心急。", 36, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#因为我们选择了正道，而不是捷径。", 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##b谢谢。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#都说学习魔功之后就能突飞猛进……看来是真的。\r\n我总算知道为什么高手们也会受魔功迷惑了。", 36, 9401277, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3##b非常……邪恶的感觉。\r\n就像长老夺走了师兄们的内功一样，云雾一定也是通过邪恶的方法获得了力量。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3##b为了不让魔功传下去，我，我……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom('#face1#墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我相信你一定可以做到。\r\n但是记住……你没有必要一个人去做。", 36, 9401277, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你的身后不仅有我、云景师妹和云浩师兄，还有众多弟子！", 37, 9401277, true, true, 1);
                            } else if (status === v++) {
                              cm.forceCompleteQuest(65974);
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