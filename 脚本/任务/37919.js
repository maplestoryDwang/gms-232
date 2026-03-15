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
      cm.sendNormalTalk_Bottom("#face3##h0#，怪物数量太多了。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("你们两个的氧气量都在逐渐降低。还是我去吧。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("(氧气越来越稀薄了……快去消灭怪物吧？)", 56, 3004816, 1);
        } else if (status === v++) {
          cm.forceJoinEvent("塞拉斯_击杀数1");
          cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face3##h0#，你没事吧！", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("不知怎么的……好困……。", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#氧气正在下降。", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#我们得赶紧离开这里。", 36, 3004851, true, true, 1);
          } else {
            if (status === v++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
              cm.sendNormalTalk_Bottom("#face3#休麦，休麦，请回答。我是沃莉。", 36, 3004851, true, true, 1);
            } else {
              if (status === v++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.sendNormalTalk_Bottom("#face3#你听不到我说话吗？休麦！", 36, 3004851, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("无线电发射机从刚才起就一直不好使。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("把我们吞掉的家伙一直在以飞快的速度移动。", 56, 0, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("所以现在潜水艇才收不到电波。", 56, 0, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#……。", 36, 3004851, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3#既然如此，只能使出最后的手段了。", 36, 3004851, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("最后的手段是指……？", 56, 0, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face3#这回我一定要把它修好……。\r\n用我的魔法之手。", 36, 3004851, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("什么？难道……。", 56, 0, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#呃啊啊啊啊……！！", 36, 3004851, true, true, 1);
                                } else if (status === v++) {
                                  cm.forceCompleteQuest(37919);
                                  cm.gainExp(265476362);
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