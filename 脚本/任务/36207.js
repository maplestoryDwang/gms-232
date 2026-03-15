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
      cm.sendNormalTalk_Bottom("#face0#没事的，一定有办法的！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我丑话说在前头，我是不会帮忙的，我是一根手指头都不会动的。", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#可是小朋友，你为什么自己一个人在放风筝啊？", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#在我更小的时候，曾经和妈妈一起放风筝玩……", 36, 3005115, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我妈妈说她不记得了。", 36, 3005115, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#所以我想至少要学会怎么放风筝，这样才好去教妈妈！", 36, 3005115, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#喂，我看就是你妈妈嫌陪你玩很麻烦才这么说的。", 36, 3005102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#这还看不出来吗？", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#额……唔……", 36, 3005115, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#要是太忙，有时也会忘记珍贵的记忆，\r\n如果你能重新告诉她，她会更开心的！", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#最好是……", 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#啊！去附近找其他人借个梯子用吧？", 36, 3005100, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#这个问题反正无关我的想法吧？", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.askYesNo_Bottom("#face6#怎么了？等等我啊！嗯？", 36, 3005100, 1);
                              } else if (status === v++) {
                                cm.forceStartQuest(36207, '');
                                cm.OnStartNavigation(410004000, 1, "3005154", 36207);
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
      cm.sendNormalTalk_Bottom("#face0#那位大叔看起来心地善良，要是跟他借梯子，他会不会答应呢？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#……随你的便吧。", 36, 3005102, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(36207);
        cm.gainExp(545);
        cm.gainExp(1182);
        cm.dispose();
      }
    }
  }
}