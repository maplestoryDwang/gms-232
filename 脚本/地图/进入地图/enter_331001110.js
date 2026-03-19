var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/snowwave", 100, 60);
      cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/flare_ready", 100);
      cm.sendNormalTalk_Bottom("#face9#啊-啊-测试，测试，OK。\r\n通信系统启动顺畅，现在应该可以测量动向了。", 37, 1531001, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.sendNormalTalk_Bottom("杰？我好像需要戴眼镜了-！", 37, V, true, true);
      } else {
        if (status === O++) {
          cm.sendNormalTalk_Bottom("#face9#你两只眼睛视力不都是2。5嘛，戴什么眼镜。", 37, 1531001, true, true);
        } else {
          if (status === O++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === O++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === O++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
                cm.effect_Text(["#fn黑体##fs26#超能力者的据点\r\n#fs14#-训练室-"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("那这是怎么回事？\r\n要是我眼睛够好，那我的等级这里写的数字是#b10#k吧。", 37, V, false, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("我好歹是个英雄，居然是#b10级#k，\r\n要是我眼睛没问题，那肯定是你犯了不小的失误啊。", 37, V, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face9#……那是因为还没有数据，\r\n当你的行动和念力等被数据化后，积累越多数值之后，显示的数据也就会发生改变。", 37, 1531001, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("好吧，如果你想看到的是等级一下子提升的奇迹。", 37, V, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face9#来，先从测量身体开始吧，\r\n按照标记来移动就行。", 37, 1531001, true, true);
                        } else {
                          if (status === O++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Field.img/flowervioleta/wink", 100);
                            cm.cameraSwitch_PushSwitchMoveInfo("go_tuto2", 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("等一下！在此之前有个重大问题需要解决。", 37, V, false, true);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("#face10#？测试准备工作很完美，难道有什么问题吗？", 37, 1531001, true, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("#face3#你倒是开点欢快的音乐嘛，这不是一点兴致都没有嘛？", 37, V, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face9#…………", 37, 1531001, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.playSoundEffDirectly("Ambience.img/snowwave");
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === O++) {
                                        cm.fieldEffect_PlayBGM("Bgm42/TheBeast2", 0, 0);
                                        cm.sendNormalTalk_Bottom("#face2#是啊，这样才有进行的乐趣嘛！", 37, V, false, true);
                                      } else {
                                        if (status === O++) {
                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 1477, -68);
                                        } else {
                                          if (status === O++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === O++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PvP/80001740_Use", 100);
                                              if (cm.getPlayer().getGender() == 0) {
                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/kinesis/chaKine", 0, 500, 800, 0, 12, 5, 1);
                                              } else {
                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/kinesis/chaKineF", 0, 500, 800, 0, 12, 5, 1);
                                              }
                                              cm.fieldEffect_ProcessOnOffLayer('0', '', 1, 300, -800, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                                            } else {
                                              if (status === O++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/12thMS/jump_m", 100);
                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 1, 300, 800, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === O++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else if (status === O++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.setStandAloneMode(false);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.eventSKill(0);
                                                      cm.setInGameDirectionMode(false, true, false);
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