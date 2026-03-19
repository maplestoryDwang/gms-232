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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 953, -83);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#枫叶山丘，与黑魔法师对战后的某天"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4500);
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130139, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130140, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130141, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130142, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130143, null, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130144, null, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#为对抗织田信长而凝聚一心的我们，因一起意外来到了冒险岛世界。", 37, 9130021, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#织田军试图与邪恶的黑色之翼勾结，我们也与新盟友冒险岛联盟携手为伴。", 37, 9130021, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#与新盟友一起对抗邪恶势力，才能够在最后战胜黑魔法师这般劲敌。", 37, 9130021, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#因为大家的奋不顾身的战斗，才赢取了现在的胜利……", 37, 9130021, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#其中，#h0#立下了赫赫战功。", 37, 9130021, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18##h0# 万岁！！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130139, null, cm.getPlayer().getId());
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#晓之阵万岁！！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130140, null, cm.getPlayer().getId());
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#联盟万岁！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130141, null, cm.getPlayer().getId());
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18##h0# 万岁！！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130142, null, cm.getPlayer().getId());
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#联盟万岁！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130143, null, cm.getPlayer().getId());
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18##h0# 万岁！！！！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130144, null, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#哈！真是了不起的成就！今晚我们一醉方休吧！", 37, 9130000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#果真出手不凡！#h0#！请您下回再露一手！", 37, 9130023, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#现在已经成为旁人不能企及的对抗者了呢，真厉害！", 37, 9130009, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#没有啦，谦信。再怎么厉害也赶不上您啊！！！吼吼吼！！！！", 37, 9130022, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#真是辛苦了。你成就了世人难以企及的伟业。", 37, 9130010, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#你使我们晓之阵的声名广播于天下了。感谢你。", 37, 9130006, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我们的前方仍旧荆棘遍布。", 37, 9130021, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#织田信长、明智光秀……还有这世上无数心怀邪恶意志的敌人。", 37, 9130021, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#然而无论遇到什么敌人，怎样的苦难！我们的团结之心也绝不会动摇。", 37, 9130021, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#今天，就让我们一起庆贺诸位与#h0#的付出，颂赞晓之阵的荣耀，并尽情享受胜利吧！", 37, 9130021, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130139, null, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130140, null, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130141, null, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130142, null, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130143, null, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon("#fn黑体##fs18#哇啊啊啊啊！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 9130144, null, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.dispose();
                                                                                var O = cm.getJob();
                                                                                if (Math.floor(O / 100) == 41) {
                                                                                  cm.warp(867140100, 0, false);
                                                                                } else {
                                                                                  cm.warp(867140200, 0, false);
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