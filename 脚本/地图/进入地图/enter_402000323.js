var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34640) && cm.getQuestStatus(34641) == 0) {
    action1(f, E, e);
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
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;failC=1;2=1;3=1;4=1;5=1;6=1;7=1;9=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -825, -17);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/energy_running1", 100, 60);
      cm.setAmbience("Ambience.img/energy_running2", 100, 60);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#…啊，是你！？莫非你旁边是……村庄当铺的安图因？", 37, 3001270, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice3.img/cadena/Q4/Female/0", 128);
                    cm.sendNormalTalk_Bottom("#face1#呃，你、你是商团的……你也是被拉来的吗！？", 37, 3001256, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不、不。我是来找Mr.哈扎尔那家伙算账的……", 37, 3001270, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice3.img/cadena/Q4/Female/1", 128);
                        cm.sendNormalTalk_Bottom("#face1#这样啊！原、原来你是来救我们的！", 37, 3001256, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#呼，事情说起来有点复杂……", 37, 3001270, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice3.img/cadena/Q4/Female/2", 128);
                            cm.sendNormalTalk_Bottom("#face1#原、原来如此！总之！拜、拜托你了。请救救我孙子吧。", 37, 3001256, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#一群凶神恶煞的家伙闯进来，该不会想把我们抓走吧？", 37, 3001256, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#听说他们要吸收生物能量……如果真是这样，那孩子岂不是……", 37, 3001256, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#那孩子求我陪他，可我却当做耳旁风。呜呜，呜呜呜……", 37, 3001256, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#老头，你废话还真多。哦，要不要临死前留个遗言啊？", 37, 3001261, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice3.img/cadena/Q4/Female/3", 128);
                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
                                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#……记得遗言别说太久。因为，这会消耗宝贵的生物能量的！", 37, 3001261, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice3.img/cadena/Q4/Female/4", 128);
                                          cm.sendNormalTalk_Bottom("#face2#嗯，这可是我好不容易找到的武器部件。你最好老实点。这样对大家都好，OK？", 37, 3001261, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice3.img/cadena/Q4/Female/5", 128);
                                            cm.sendNormalTalk_Bottom("#face0#呃……", 37, 3001256, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#哦，这么看来，你是来捣乱的。不对，我该叫你客人吗？", 37, 3001261, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice3.img/cadena/Q4/Female/6", 128);
                                                cm.sendNormalTalk_Bottom("#face2#快把剩下的武器部件交上来。这样就完美了。", 37, 3001261, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("Voice3.img/cadena/Q4/Female/7", 128);
                                                  cm.sendNormalTalk_Bottom("#face4#如果我说办不到呢？", 37, 3001270, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice3.img/cadena/Q4/Female/8", 128);
                                                    cm.sendNormalTalk_Bottom("#face3#嗯，那没办法了。我原本不喜欢以暴制暴的……", 37, 3001261, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice3.img/cadena/Q4/Female/9", 128);
                                                      cm.playSoundEffDirectly("Ambience.img/energy_running1");
                                                      cm.playSoundEffDirectly("Ambience.img/energy_running2");
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/cadena_dir/5", 0, 900, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                        cm.fieldEffect_PlayBGM("Bgm47.img/MrHazard", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#……那只能除掉你了！嘻、嘻嘻，我要抢走你手上的武器部件！", 37, 3001261, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_Voice("Voice3.img/cadena/Q4/Female/10", 128);
                                                            cm.sendNormalTalk_Bottom("#face1#啊，不如先启动生物能量传送装置吧？", 37, 3001261, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("Voice3.img/cadena/Q4/Female/11", 128);
                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                              cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction19.img/effect/cadena_dir/6", 0, 900, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face2#嘻嘻，气缸里的生物能量马上就要充满了吧？到时候……", 37, 3001261, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice3.img/cadena/Q4/Female/12", 128);
                                                                cm.sendNormalTalk_Bottom("#face2#……紫色死神马上准备降生了！嘻嘻，看来我马上要发财了！？", 37, 3001261, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice3.img/cadena/Q4/Female/13", 128);
                                                                  cm.sendNormalTalk_Bottom("#face2#呃、呃啊，任何人休想拦我！快点启动吧，吸收装置！", 37, 3001261, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice3.img/cadena/Q4/Female/14", 128);
                                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction19.img/effect/cadena_dir/7", 0, 900, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face3#呃啊，呃啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！", 37, 3001257, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice3.img/cadena/Q4/Female/15", 128);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.playerMessage(5, "需要消灭Mr.哈扎尔。");
                                                                              var O = cm.getEventManager("魔链影士_战斗9_击杀数");
                                                                              O.startInstance(cm.getPlayer(), cm.getMap());
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
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}