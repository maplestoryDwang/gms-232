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
      cm.updateInfoQuest(34801, "019=1;hunt1=1;exp=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs18#同一时刻,荒蛮终点站后巷某处", ''], [100, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm47.img/HuntingGround", 0, 0);
          cm.npc_ChangeController(3001309, "oid=912337", 172, 764, 10, 122, 222, 1, true, 0, false);
          cm.npc_SetSpecialAction('oid=912337', 'summon', 0, 0);
          cm.npc_ChangeController(3001313, "oid=912338", -628, 764, 11, -678, -578, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=912338", "summon", 0, 0);
          cm.npc_SetForceMove("oid=912337", -1, 200, 80);
          cm.npc_SetForceMove("oid=912338", 1, 190, 80);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001301, "oid=912339", -238, 764, 10, -288, -188, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=912339", "summon", 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001004/Use", 100);
            cm.npc_SetSpecialAction('oid=912339', "appear", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这次定期侦查有什么特别发现吗？", 37, 3001301, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0##r高等翼人#k根本不会靠近这个脏兮兮的村庄……所以不用担心我们生还的事情传出去。", 37, 3001309, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#不,现在放心还太早了！今天我在酒馆里还听到有人说在#b荒蛮终点站#见到了长得很像#r高等翼人#的家伙。", 37, 3001313, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip('oid=912339', -1);
                      cm.inGameDirectionEvent_AskAnswerTime(100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#这是真的吗？！!", 37, 3001301, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不过……他说那人的部分翅膀是#b机械#k来着。", 37, 3001313, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b机械翅膀#k？这么说……？", 37, 3001309, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯。他一定是#b把我们平民翼人错认做高等翼人#k了。", 37, 3001313, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#存在#r非法脱离者#k？我这个守护者代表还是头一次听说。", 37, 3001309, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#卡尔丽,你该不会为了把我逼入绝境在故意撒谎吧？", 37, 3001309, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#你说什么？太不像话了！我明明听得清清楚楚的！", 37, 3001313, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#两位请冷静点。如果在外部地区弄出声响就麻烦了。", 37, 3001301, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=912339", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#戴尔斯,这件事就交给你来调查了。", 37, 3001301, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#是,阿加特大人。", 37, 3001309, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fs21#阿加特大人！戴尔斯大人！卡尔丽大人！", 37, 3001306, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=912339"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=912338"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=912337"], [0, 0, -10, 1, 0, 1, 0, 0, 0]);
                                                cm.sendNormalTalk_Bottom("#face0#看来是阿叙隆那边有消息了。", 37, 3001301, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(384000, 1, 384000, 384000, -45568, 195839);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#刚刚#b有个小孩#k想#b逃离阿叙隆#k。", 37, 3001306, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_NormalSpeechBalloon('!', 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001301, null, cm.getPlayer().getId());
                                                            cm.effect_NormalSpeechBalloon('!', 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001309, null, cm.getPlayer().getId());
                                                            cm.effect_NormalSpeechBalloon('!', 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001313, null, cm.getPlayer().getId());
                                                            cm.npc_setForceFlip('oid=912338', 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#不是说安全方面毫无异常吗,那这又是什么？", 37, 3001313, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip('oid=912339', 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#……", 37, 3001309, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#冒然跟过去,反而会弄巧成拙,我已经联系外面的三位了。", 37, 3001306, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#经确认,脱离者名叫#b伊利温#k。找到脱离者后,请马上归队。", 37, 3001306, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=912338", 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##b伊利温#k？！是那个#b天才工程师伊利温#k吗？", 37, 3001313, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=912339", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face4#不管是多了不起的天才,区区一个小孩怎么可能是我们的对手。", 37, 3001309, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#这反而会引起他人的注意,威胁到所有#b平民翼人#k的安全。", 37, 3001309, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯,就到此为止吧。", 37, 3001301, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我找到孩子后就会归队,你先回去吧。", 37, 3001301, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=912339", "disappear", 0, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(750);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=912339");
                                                                                          cm.sendNormalTalk_Bottom('#face1#……', 37, 3001309, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……听到阿加特大人的话了吧？好了,别待在这里了,赶紧回去吧。", 37, 3001313, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=912337");
                                                                                                cm.npc_LeaveField('oid=912338');
                                                                                                cm.dispose();
                                                                                                cm.warp(940202020, 0, true);
                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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