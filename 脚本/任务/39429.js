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
      cm.sendNormalTalk_Bottom("#face0#我听说了，说是你找回了记忆。", 36, 3004916, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#嗯，但并不完整，\r\n还有很多记忆模糊不清，就像是有一团迷雾笼罩。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#应该是太多记忆一次性恢复的关系，应该会慢慢苏醒的。", 36, 3004916, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这样就好了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#你以后什么打算？", 36, 3004916, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我打算在记忆彻底恢复之前去旅旅游，\r\n或许出去多看看，多经历经历，那些模糊的记忆也能渐渐清晰起来。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#罗米娜，罗伊斯，你们……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#我决定和奶奶生活在一起。", 36, 3004914, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#该隐，有了你给的钱，应该不必担心生计问题了。", 36, 3004916, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#说是能吃超多的饺子的。", 36, 3004915, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#是啊……这下好了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#这座城市不会给你留下美好的记忆的，\r\n可即便如此……也希望你能偶尔来转转。", 36, 3004916, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.teachSkill(60031000, 0, -1);
                              cm.teachSkill(60031000, 1, 1);
                              cm.sendNormalTalk_Bottom("#face1#总之要是想我们就回来。", 36, 3004914, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#去买饺子！！", 36, 3004915, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#好，我会常去的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face4#奶奶，另外……我还有一事相求……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#你姐姐的尸体我已经请自治会那边帮忙了，\r\n他们应该会帮忙收尸，做好交接工作的。", 36, 3004916, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face4#麻烦了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face4#那……大家保重。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                        } else if (status === v++) {
                                          cm.dispose();
                                          cm.warp(993164031, 0, true);
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