var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34938) && cm.getQuestStatus(34939) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 369, 250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.emotion(1, 5000);
        cm.inGameDirectionEvent_OneTimeAction(4, 999999);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4500);
            cm.effect_Text(["#fn黑体##fs18#另一方面，在距离基地很远的地方"], [100, 1200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#呼，呼，什么时候跑到这来了……哈，哈，再这样走下去……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face8#真的要被怪物给吃掉了……但是……我必须战斗。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#我必须用这只手……保护……朋友们……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 2000, 7000, 369, 350);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("999", "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                          cm.effect_Text(["#fn黑体##fs35#真够狼狈的……朋友。"], [50, 3000, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("999", "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3800);
                                cm.effect_Text(["#fn黑体##fs35#你想把主导权让给我吗？"], [50, 3300, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(7100);
                                  cm.effect_Text(["#fn黑体##fs35#你不是还有事情要做吗？必须抓紧时间，不是吗？"], [50, 6600, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                      cm.sendNormalTalk_Bottom("#face6#藏在我体内的幽灵的力量……原来就是你。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("999", "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                        cm.effect_Text(["#fn黑体##fs35#没错，猜对了。我是你的一部分。"], [50, 4500, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(6500);
                                          cm.effect_Text(["#fn黑体##fs35#……所以请相信我。这里的事情让我来处理。"], [50, 6000, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                              cm.sendNormalTalk_Bottom("#face6#别做梦了。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('999', "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                cm.effect_Text(["#fn黑体##fs35#哼……难道你不去救那些可怜的朋友们了吗？"], [50, 6000, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/9', 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                  cm.effect_Text(["#fn黑体##fs35#现在接受我吧！"], [50, 2100, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                      cm.sendNormalTalk_Bottom("#face5#……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                        cm.sendNormalTalk_Bottom("#face6#你说得没错。你也是我的一部分。我承认你力量很强。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                          cm.sendNormalTalk_Bottom("#face6#……但我就是看不上你。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('999', "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            cm.effect_Text(["#fn黑体##fs35#切……"], [50, 2000, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                                cm.sendNormalTalk_Bottom("#face6#我命令你，马上回到原来的地方。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#这个身体的主人是我。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Etc/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/16', 100);
                                                                    cm.sendNormalTalk_Bottom("#face8#别在我面前得瑟！！！！！！！", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer("999", "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.updateInfoQuest(34938, "dir=1;exp=1");
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 369, 200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_OneTimeAction(4, 999999);
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                      cm.eventSKill(0);
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.playerMessage(5, "必须学会<控制侵蚀>技能，然后与正在苦战的商队会合。");
                                                                                      cm.playerMessage(-1, "必须学会<控制侵蚀>技能，然后与正在苦战的商队会合。");
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
      }
    }
  }
}