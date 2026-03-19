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
      cm.fieldEffect_PlayBGM("Bgm57/AnotherdayOfTheAtelier", 0, 0);
      cm.inGameDirectionEvent_OneTimeAction(25, 999999);
      cm.npc_ChangeController(3005102, 'oid=623682', -200, 200, 1, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623682", "summon", 0, 0);
      cm.npc_ChangeController(3005103, "oid=623683", 80, 200, 2, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623683", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=623682", 'special2', -1, 1);
      cm.npc_SetSpecialAction('oid=623683', "special", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 15, 192);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.Hidden_background("print1", 1, 0, 0, 0);
        cm.Hidden_background("print2", 1, 0, 0, 0);
        cm.Hidden_background('print3', 1, 0, 0, 0);
        cm.Hidden_background("print4", 1, 0, 0, 0);
        cm.Hidden_background("print5", 1, 0, 0, 0);
        cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（器物之力就是这样的吗？不管怎么发起攻击……）", 37, 3005100, false, true, 1);
      } else {
        if (status === V++) {
          cm.onSetMapTagedObjectVisible(1, 'animation', 512);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/15/Female/0", 100);
              cm.sendNormalTalk_Bottom("#face0#还挺像模像样的嘛，只不过没用的。", 37, 3005103, false, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice6.img/lara/15/Female/1", 100);
                cm.sendNormalTalk_Bottom("#face0#反正你是没办法让铃铛有响声的，\r\n相较而言，我能操控这支毛笔的能力是无穷无尽的。", 37, 3005103, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/15/Female/2", 100);
                  cm.sendNormalTalk_Bottom("#face2#两人相亲相爱地丧命于我的工坊倒也不失为一桩美事。", 37, 3005103, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(2, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/lara/15/Female/3", 100);
                      cm.sendNormalTalk_Bottom("#face4#一直以来应该是在领主的帮助下夺走了大家的记忆吧？", 37, 3005100, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/15/Female/4", 100);
                        cm.sendNormalTalk_Bottom("#face0#毕竟要秘密行事，不能让别人发现。", 37, 3005103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/15/Female/5", 100);
                          cm.sendNormalTalk_Bottom("#face4#那你答应我，如果我乖乖地当你的画，你就放了格里。", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/15/Female/6", 100);
                            cm.sendNormalTalk_Bottom("#face3#你说什么？喂，你到底在说什么！", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/15/Female/7", 100);
                              cm.sendNormalTalk_Bottom("#face3#你说你会乖乖地……成为画的祭品？", 37, 3005103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/15/Female/8", 100);
                                cm.sendNormalTalk_Bottom("#face3#是啊，比起那些生在后巷的家伙，你应该能成就一幅更美的画。", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/15/Female/9", 100);
                                  cm.sendNormalTalk_Bottom("#face4#因为失去了幸福的记忆，你的心只会变得枯燥无趣……\r\n也就永远不会摇响铃铛了。", 37, 3005103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/15/Female/10", 100);
                                    cm.sendNormalTalk_Bottom("#face4#你知道吗？你或许以为自己彻底夺走了大家的幸福记忆，可是……", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/15/Female/11", 100);
                                      cm.sendNormalTalk_Bottom("#face4#你错了，无论如何都会留下的，不代表剜去了就会消失。", 37, 3005100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/15/Female/12", 100);
                                        cm.sendNormalTalk_Bottom("#face4#所以说，你的画是赝品，就只是模仿幸福，塞满了画纸而已。", 37, 3005100, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice6.img/lara/15/Female/13", 100);
                                          cm.sendNormalTalk_Bottom("#face3#不许侮辱我的画。", 37, 3005103, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/15/Female/14", 100);
                                            cm.sendNormalTalk_Bottom("#face4#这一次一定能创造出最棒的作品。", 37, 3005103, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice6.img/lara/15/Female/15", 100);
                                              cm.sendNormalTalk_Bottom("#face3#住手！", 37, 3005102, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/15/Female/16", 100);
                                                cm.sendNormalTalk_Bottom("#face3#不要为了区区一个我，就放弃你那些珍贵的东西！", 37, 3005102, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice6.img/lara/15/Female/17", 100);
                                                    cm.sendNormalTalk_Bottom("#face4#格里，和摇响铃铛以及守护记忆比起来，\r\n有些东西的价值要更珍贵。", 37, 3005100, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/Lara/effect/0", "oid=0"], [0, 10, -5, 1, 0, 1, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/light", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/13", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/Lara/illust/14", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/bell", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（铃铛……？）", 37, 3005100, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\r\n\r\n\r\n\r\n\r\n铃铛发出了比世上的一切都要清澈的声音……", 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("#fc0xFF000000#\r\n\r\n同时温暖的阳光洒向工坊。", 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_屏幕渐入插图消失A(['00'], [1000]);
                                                                        cm.fieldEffect_屏幕渐入插图消失A(['01'], [1000]);
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.onSetBackEffect('night', 1, 0, 0, 0);
                                                                            cm.monadForceMove("night", 0, 5000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("Voice6.img/lara/15/Female/18", 100);
                                                                              cm.sendNormalTalk_Bottom("#face3#铃铛……！", 37, 3005103, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice6.img/lara/15/Female/19", 100);
                                                                                cm.sendNormalTalk_Bottom("#face3#怎么会对个还没有正经能力的人……", 37, 3005103, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice6.img/lara/15/Female/20", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0#啊，我的这些画……", 37, 3005103, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.onSetMapTagedObjectVisible(1, "animation", 0);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/destory", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_Voice("Voice6.img/lara/15/Female/21", 100);
                                                                                      cm.sendNormalTalk_Bottom("#face0#我……美丽的……", 37, 3005103, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=623683", 'die1', 1, 1);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/fire_partem", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else if (status === V++) {
                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h0;53=h1;72=h0;63=h0;64=h0;73=h1;55=h0;65=h1;night=1;66=h0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;71=h0;62=h0;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=1;66=h0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h1;71=h0;62=h0;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=1;66=h0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;61=h1;70=h0;52=h1;71=h0;62=h0;53=h1;72=h0;63=h0;64=h0;73=h0;55=h0;65=h1;night=1;66=h0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                                                          cm.updateInfoQuest(36200, "night=1;set=1;50=h0;70=h0;51=h0;71=h0;52=h1;72=h0;53=h1;73=h0;55=h0;76=h0;57=h0;77=h0;78=h0;59=h0;60=h1;61=h1;62=h0;63=h0;64=h0;84=h1;65=h1;66=h0;87=h0;88=h0");
                                                                                          cm.updateInfoQuest(36200, "night=1;set=1;50=h0;70=h0;51=h0;71=h0;52=h1;72=h0;53=h1;73=h0;55=h0;76=h0;57=h0;77=h0;78=h0;59=h0;60=h1;61=h1;62=h0;63=h0;64=h0;84=h1;65=h1;85=h1;66=h0;87=h0;88=h0");
                                                                                          cm.updateInfoQuest(36200, "night=1;set=1;50=h0;70=h0;51=h0;71=h0;52=h1;72=h0;53=h1;73=h0;55=h0;76=h0;57=h0;77=h0;78=h0;59=h0;60=h1;61=h1;62=h0;63=h0;64=h0;84=h1;65=h1;85=h1;66=h0;86=h1;87=h0;88=h0");
                                                                                          cm.forceStartQuest(36235, '');
                                                                                          cm.forceCompleteQuest(36235);
                                                                                          cm.npc_LeaveField("oid=623682");
                                                                                          cm.npc_LeaveField('oid=623683');
                                                                                          cm.changeJob(16210);
                                                                                          cm.dispose();
                                                                                          cm.warp(410004000, 1, true);
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
  }
}