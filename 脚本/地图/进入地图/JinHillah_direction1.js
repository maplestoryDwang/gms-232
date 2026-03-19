var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 450010600) {
    action1(f, E, e);
  } else if (cm.getMapId() == 450010400) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.killAllMobNoExp();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahAppear_spine/hillah", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/hillahappear", 200);
        cm.inGameDirectionEvent_AskAnswerTime(13000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('BlackOut', "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_取消复合图片动画('intro', 100, 0);
            cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.sendNormalTalk_Bottom("#face0#现在……", 37, 3003771, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#好像已经做好了充分的准备。", 37, 3003771, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("希……拉……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎呀哎呀……", 37, 3003771, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#怎么看上去如此无力？", 37, 3003771, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不过，你坚持了很久。和其他人相比陪我玩了更长的时间，我是不是应该感谢你呢？", 37, 3003771, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#好了……那么……", 37, 3003771, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#让我……看看你的灵魂和其他人有什么不一样吧！", 37, 3003771, true, true);
                        } else {
                          if (status === V++) {
                            cm.dispose();
                            if (O == null) {
                              var O = cm.getEventManager("觉醒希拉_剧情模式");
                              O.startInstance(cm.getPlayer(), cm.getMap());
                            } else {
                              cm.warp(450010700, 0, true);
                            }
                            cm.setInGameDirectionMode(false, true, false);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_hillahAppear_spine/hillah", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/hillahappear", 200);
        cm.inGameDirectionEvent_AskAnswerTime(13000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.fieldEffect_取消复合图片动画("intro", 100, 0);
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
          cm.warp(450010500, 0, true);
        }
      }
    }
  }
}