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
      cm.sendNormalTalk_Bottom("#face0#冒险家会来万神殿，果然还是……为了越过次元传送口吧？", 36, 3000001, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("对，没错，因为有件事我必须去完成。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("为了实现这件事，必须去很多地方游历。", 56, 0, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#好，那在借你用传送口之前，我想确认一件事。", 36, 3000001, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#你能让我暂时看看你的内心世界吗？", 36, 3000001, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我不是要怀疑，只不过究竟是好人还是坏人……光靠嘴上说是很难分辨的。", 36, 3000001, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("我明白你的意思了，多少都可以的。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("（我与狼牙直视彼此，可能是年龄相仿的关系吧，那眼神让人不禁想起了奶奶。）", 56, 0, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#你是个深受信任的人啊，还有着不屈的意志。", 36, 3000001, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#愿意相信人，同时不会轻易认输，这些都是难能可贵的优点。", 36, 3000001, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我同意了，你可以使用传送口。", 36, 3000001, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.askAcceptDecline_Bottom("#face0#那你现在就要用次元传送口吗？\r\n\r\n #r（※接受时自动前往任务地图。）#k", 36, 3000001, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#希望在日后的旅行中，这份信任也不会褪色。", 36, 3000001, false, true, 1);
                            } else if (status === v++) {
                              cm.dispose();
                              cm.warp(993165541, 0, false);
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