var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33970, "check4") > 0) {
    cm.dispose();
    cm.fieldEffect_PlayBGM("Bgm45/Timeless Beholder", 0, 0);
    cm.showMapleHero();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setNumberForQuestCustomData(33900, 4);
      cm.showMapleHero();
      cm.npc_ChangeController(1540795, "oid=57957", 245, 268, 4, 195, 295, 0, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350120200");
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(4);
      cm.npc_ChangeController(1540807, "oid=287729300", -850, 250, 14, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287729300", "summon", 0, 0);
      cm.npcMove(1540807, 0, -1000, 0);
      cm.emotion(5, -1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -724, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound('Aran/down', 100);
          cm.inGameDirectionEvent_MoveAction(4);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_OnUserEff("Effect/CharacterEff.img/HofM/fall3");
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face6#哎哟喂，我要死了……", 37, 1540805, false, true);
          } else {
            if (status === V++) {
              cm.emotion(0, -1);
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk_Bottom("#face2#啊，这里是？", 37, 1540805, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm45/Timeless Beholder", 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -320, 70);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -724, 280);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#尼哈沙漠下面还藏有这样的空间啊，太不可思议了。", 37, 1540805, false, true);
                      } else {
                        if (status === V++) {
                          cm.npcMove(1540807, 0, 1000, 2000);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#主人，这个空间真的好大啊！", 37, 1540807, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#也许数百年来我们是第一个发现这里的人。", 37, 1540805, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这里就是弗里德所说的供奉着那个神的遗迹吗？\r\n叫什么来着，阿布……阿布……", 37, 1540807, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("阿布拉克萨斯，注视之神。", 37, 1540805, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这个名字还是第一次听说呢。", 37, 1540807, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("倒是也有可能，毕竟这是好不容易在记录上留下来的古代神。", 37, 1540805, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("听说在远古之初，一切都是能够活动的，石头、树木、风、太阳与月亮、江水与海洋……\r\n365个创造物上被赋予了365个神，按照365种法则运转。", 37, 1540805, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("但是这样的毫无秩序却招来了可怕的混沌，最终便形成了所谓的秩序。", 37, 1540805, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("世界便被光明、生命、时间的法则所掌管，\r\n365个神的力量或缩小或消亡，\r\n而那些消亡力量的坟墓便是注视之神的名字，‘阿布拉克萨斯’。", 37, 1540805, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#哦，主人。你突然看上去好聪明啊！超像魔法师的呢？", 37, 1540807, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#嘿嘿，过奖了。", 37, 1540805, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6#……不对啊，我本来就是魔法师好吗？！", 37, 1540805, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.npc_LeaveField("oid=287729300");
                                                          cm.npc_LeaveField("oid=287729300");
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.updateInfoQuest(33970, "check4=1;check=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;