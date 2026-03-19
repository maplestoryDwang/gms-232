var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getMapId() == 450008400) {
    action1(f, E, e);
  } else {
    action2(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(3003561, "oid=50040", 602, 159, 4, 552, 652, 1, false, false);
      cm.npc_ChangeController(3003519, "oid=1981014", 210, 90, 10, 160, 260, 1, false, false);
      cm.npc_SetSpecialAction("oid=1981014", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 25, 111);
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
            cm.sendNormalTalk_Bottom("威尔！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呵呵呵……没想到你真的跟过来了。果然很厉害。", 37, 3003503, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你知道吗？阻止这个仪式的方法只有一个。\r\n那就是……让变成白色太阳的#r塔纳死去#k。", 37, 3003503, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("（南哈特说的就是这个吗！）", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呵呵呵呵……真想知道你到底会如何选择。", 37, 3003503, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#是结束那个可怜少女的生命，拯救世界。\r\n还是不顾世界的存亡，和#r凌驾于超越者之上的存在#k展开一场毫无胜算的战斗。", 37, 3003503, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#当然，如果你不能在仪式结束前打倒我，就没有任何意义。", 37, 3003503, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("（我已经犯过一次错了。\r\n并因此让同伴们，还有无数的人陷入了险境。）", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("（这次……）", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("好吧，我要打倒你。\r\n然后……再取塔纳的性命，阻止仪式。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#呵呵呵呵……", 37, 3003503, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#人的真正价值会在选择的瞬间体现出来。", 37, 3003503, true, true);
                                          cm.effect_Voice("Voice4.img/Will/c_1-3.mp3", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#在最紧迫的瞬间，在最急切的瞬间，所做出的选择，会显露出那个人的真心。", 37, 3003503, true, true);
                                            cm.effect_Voice("Voice4.img/Will/c_2-2.mp3", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#当然，不管你选择哪个，都逃不出我的掌心。", 37, 3003503, true, true);
                                              cm.effect_Voice("Voice4.img/Will/c_3-2.mp3", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2##fs18#是的，没错。你还没从我手里逃出去。", 37, 3003503, false, true);
                                                  cm.effect_Voice("Voice4.img/Will/c_4-1.mp3", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=1981014");
                                                    cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossWill/intro_spine/skeleton", '1', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/boss/intro1", 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('BlackOut', '', 2, 100, 0, 0, 0, 0, 0);
                                                      cm.dispose();
                                                      cm.warp(450008450, 0);
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
      cm.setInGameDirectionMode(true, false, true);
      cm.effect_Voice("Voice4.img/Will/c_4-1.mp3", 128);
      cm.npc_LeaveField("oid=1981014");
      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossWill/intro_spine/skeleton", '1', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/boss/intro1", 200);
      cm.inGameDirectionEvent_AskAnswerTime(5500);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0);
        cm.dispose();
        cm.warp(cm.getMapId() + 50, 0);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;