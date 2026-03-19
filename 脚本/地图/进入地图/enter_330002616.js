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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(1530600, "oid=40167030", -100, 0, 1, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=40167030", 'summon', 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setAmbience("Ambience.img/thunder2", 100, 60);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 730, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1530629, "oid=40167427", 550, 0, 3, 500, 600, 0, false, false);
        cm.npc_SetSpecialAction("oid=40167427", "summon", 0, 0);
        cm.npc_ChangeController(1530630, "oid=40167428", 650, 0, 3, 600, 700, 1, true, false);
        cm.npc_SetSpecialAction("oid=40167428", "summon", 0, 0);
        cm.npc_ChangeController(1530631, "oid=40167429", 730, 0, 3, 680, 780, 1, false, false);
        cm.npc_SetSpecialAction("oid=40167429", 'summon', 0, 0);
        cm.npc_ChangeController(1530624, "oid=40167430", 810, 0, 3, 760, 860, 1, true, false);
        cm.npc_SetSpecialAction("oid=40167430", "summon", 0, 0);
        cm.npc_ChangeController(1530632, "oid=40167431", 1000, 0, 3, 950, 1050, 1, false, false);
        cm.npc_SetSpecialAction("oid=40167431", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#乐谱吗？这曲子好可怕啊。", 37, 1530621, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH6_05/15", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 0, 50);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我，我的乐谱……", 37, 1530600, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 730, 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这是什么啊？哈哈哈哈。不会是有人想要在庆典上表演这种曲子吧？", 37, 1530625, false, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_05/16", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("只是想想都觉得搞笑啊……我们可不能这么掉价啊。", 37, 1530631, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_05/17", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哈哈哈哈，说得对。", 37, 1530624, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_05/18", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("反正谁都不是我们的对手。戴米安可是真正要在正式舞台上出道的人。", 37, 1530624, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_05/19", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#别废话了……", 37, 1530621, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4##fs25##r那我们开始演奏吧？", 37, 1530621, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_05/20", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.playSoundEffDirectly("Ambience.img/thunder2");
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("Bgm42.img/Demon's eye", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=40167428", "sing", -1, 1);
                                                cm.npc_SetSpecialAction("oid=40167429", "sing", -1, 1);
                                                cm.npc_SetSpecialAction("oid=40167430", "sing", -1, 1);
                                                cm.npc_SetSpecialAction("oid=40167431", "sing", -1, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=40167427", 'sing5', -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.dispose();
                                                    cm.warp(330002617, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;