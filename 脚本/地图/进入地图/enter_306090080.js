var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", 'normal', '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("泱泱大军啊。真亏他隐藏这么久。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("游击战不是我们的专长嘛。", 37, 2550001, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("阿丽莎顺利离开了吧？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("是的，现在应该沿着北边的小路离开了。", 37, 2550001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("别出什么意外才好啊。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("………… ", 37, 2550001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('怎么了？', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("她最终还是抛弃了我们……人类吗？", 37, 2550001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("超越者也不是全能的吧。这也是没办法嘛。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("快要开始了。我们下去吧。", 37, 2550001, false, true);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.dispose();
                                      cm.warp(306050000, 1, true);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.forceCompleteQuest(32692);
                                      cm.gainExp(186336);
                                      cm.updateInfoQuest(32692, "enter=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;