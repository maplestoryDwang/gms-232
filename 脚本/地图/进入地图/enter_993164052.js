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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1152, -23);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("那什么，露丝卡，我们为什么没有角和翅膀？", 0);
          cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("这是先祖们的决定，我们黑色诺巴在很久以前犯下了大错，所以才不得不隐姓埋名。", 0);
              cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("当初被生气的他们追赶，不得不躲到这种偏远之地的时候，我就放弃了我的角、翅膀还有尾巴，是不是很凄凉啊？", 0);
                cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("唔……也有点犯傻吧？", 0);
                    cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue('犯蠢？', 0);
                      cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("不是为了逃跑，把迎战的武器都丢到了嘛。", 0);
                        cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("倒也并不一定。", 1);
                            cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("我们虽然放弃了许多……但相对的，这恶意也变得比任何时候都更强大了。", 0);
                              cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("恶意……？那是什么……？", 0);
                                cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/9', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("来，祈祷吧。", 0);
                                  cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue('对魔龙史缇拉斯？', 0);
                                    cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/11", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("不是，是对另一边，更善良的人那边。", 0);
                                      cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("祈求千万不要有机会能用到我们的恶意。", 1);
                                        cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/13', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/3/2", 'cc'], [1, 0, 0, 0, 2500, -1, 0, 0, -1]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4#露丝卡……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#姐姐说得没错，希望不要有机会用到，但是……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#事到如今这些已然是勉强了吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/30/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#（一股强烈的恶意席卷全身。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_屏幕渐入插图消失A(['00'], [5500]);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.forceCompleteQuest(39453);
                                                                cm.teachSkill(63120014, 0, 10);
                                                                cm.teachSkill(63120013, 0, 10);
                                                                cm.teachSkill(63120012, 0, 10);
                                                                cm.teachSkill(63120011, 0, 10);
                                                                cm.teachSkill(63121010, 0, 5);
                                                                cm.teachSkill(63121009, 0, 10);
                                                                cm.teachSkill(63121008, 0, 10);
                                                                cm.teachSkill(63121006, 0, 10);
                                                                cm.teachSkill(63121004, 0, 10);
                                                                cm.teachSkill(63121002, 0, 10);
                                                                cm.teachSkill(63120001, 0, 10);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/kain/effect/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/malice", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                              } else if (status === V++) {
                                                                cm.forceStartQuest(39458, '');
                                                                cm.forceCompleteQuest(39458);
                                                                cm.dispose();
                                                                cm.warp(104000000, 0, true);
                                                                cm.changeJob(6312);
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}