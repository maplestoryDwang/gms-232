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
      cm.sendNormalTalk_Bottom("#face0#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！你知道我父亲整天挂在嘴上的话是什么吗？", 37, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b商团主……？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#“向后看的人，到不了远方”", 37, 9401277, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#虽然现在的情况非常困难……\r\n但现在我们必须继续前进，所以一刻都不能回头！", 37, 9401277, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face4##b……明白了，素笑。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face4#答应我，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4##b说定了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#太好了！", 37, 9401277, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#好！！！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！现在去张贴门徒招募公告吧？", 37, 9401277, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0##b公告？是想像平时一样通过考试来招收门徒吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face1#嗯，就算再着急，也不能随便收徒。\r\n我也不想……放弃玄山派的古老传统。", 37, 9401277, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0##b是的，你比我更合适。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#嘿嘿，这可是很高的赞美哦。\r\n" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我去张贴公告。你去检查一下考试路吧！", 37, 9401277, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0##b明白了。因为很久没人走动，所以需要清理一下。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#等事情完成之后，我们在玄山派见。", 37, 9401277, true, true, 1);
                                } else if (status === v++) {
                                  cm.OnStartNavigation(875000101, 0, "goLeft", 65940);
                                  cm.forceStartQuest(65940, '');
                                  cm.updateInfoQuest(65585, '');
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