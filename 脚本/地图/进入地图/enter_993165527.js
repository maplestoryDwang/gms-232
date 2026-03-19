var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
      cm.npc_ChangeController(3005102, "oid=623137", 150, 150, 2, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623137", "summon", 0, 0);
      cm.npc_ChangeController(3005104, "oid=623138", 83, 150, 2, 33, 133, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623138", "summon", 0, 0);
      cm.npc_ChangeController(3005117, 'oid=623139', 83, 150, 2, 33, 133, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623139", "summon", 0, 0);
      cm.npcMove(3005117, 0, -50, 2000);
      cm.npc_ChangeController(3005118, 'oid=623140', 33, 150, 2, -17, 83, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=623140', "summon", 0, 0);
      cm.npc_ChangeController(3005119, "oid=623141", 23, 150, 2, -27, 73, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=623141', 'summon', 0, 0);
      cm.npcMove(3005118, 0, -50, 2000);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 222, 159);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#这应该是海娜画的画。", 37, 3005102, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#领主不向任何人展示海娜的画，只是独自欣赏。", 37, 3005102, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这幅画里充满了极致美。", 37, 3005102, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=623137", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……要想知道真相，就应该去主动寻找吧？", 37, 3005102, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=623139", 'jump', 1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip('oid=623137', 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/11", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                            cm.fieldEffect_PlayBGM("Bgm57/WonderfulMomentsInNarin", 0, 0);
                            cm.sendNormalTalk_Bottom("#face0#哥哥，这些孩子为什么总是跟着我们？", 37, 3005105, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这些小家伙是元素灵。", 37, 3005106, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#虽说这些平时根本就不显眼……", 37, 3005106, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#有时候会像这样现身。", 37, 3005106, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#格里，世界也是一样的。", 37, 3005106, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#独自一人是什么都成就不了的。", 37, 3005106, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#所以人就该和人在一起。", 37, 3005106, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                          cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/Lara/illust/12", 'cc'], [1, 0, 0, 0, 3000, -1, 0, 0, -1]);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_slow", 100);
                                            cm.fieldEffect_屏幕渐入插图消失A(['00'], [100]);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                              cm.sendNormalTalk_Bottom('#face0#……', 37, 3005102, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#那是专属于我和哥哥的幸福记忆，这应该是我哥的回忆吧。", 37, 3005102, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我哥不是不回来了……", 37, 3005102, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#啦啦……！", 37, 3005102, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_屏幕渐入插图消失A(['01'], [1000]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                              cm.Npc_Fadeout('oid=623137', 0, 1000);
                                                              cm.Npc_Fadeout("oid=623138", 0, 1000);
                                                              cm.Npc_Fadeout("oid=623139", 0, 1000);
                                                              cm.Npc_Fadeout("oid=623140", 0, 1000);
                                                              cm.Npc_Fadeout("oid=623141", 0, 1000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                  cm.effect_Voice("Voice6.img/lara/12/Female/0", 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#格里，你看这个，神奇吧？", 37, 3005100, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice6.img/lara/12/Female/1", 100);
                                                                    cm.sendNormalTalk_Bottom("#face7#喂，别总黏着我！", 37, 3005102, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice6.img/lara/12/Female/2", 100);
                                                                      cm.sendNormalTalk_Bottom("#face0#为什么？", 37, 3005100, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("Voice6.img/lara/12/Female/3", 100);
                                                                        cm.sendNormalTalk_Bottom("#face7#我不是一直在强调，我自己一个人比较舒坦嘛！", 37, 3005102, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice6.img/lara/12/Female/4", 100);
                                                                          cm.sendNormalTalk_Bottom("#face4#你说什么呢，大家一起多开心啊！", 37, 3005100, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/12/Female/5", 100);
                                                                            cm.sendNormalTalk_Bottom("#face6#毕竟人生来就是一起生活的。", 37, 3005100, true, true, 1);
                                                                          } else if (status === V++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.forceStartQuest(36234, '');
                                                                            cm.forceCompleteQuest(36234);
                                                                            cm.gainExp(4232);
                                                                            cm.npc_LeaveField("oid=623137");
                                                                            cm.npc_LeaveField('oid=623138');
                                                                            cm.npc_LeaveField("oid=623139");
                                                                            cm.npc_LeaveField("oid=623140");
                                                                            cm.npc_LeaveField("oid=623141");
                                                                            cm.dispose();
                                                                            cm.warp(410004001, 0, true);
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