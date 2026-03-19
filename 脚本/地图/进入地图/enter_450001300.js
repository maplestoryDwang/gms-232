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
      cm.updateInfoQuest(34125, "370=2;380=1;390=2;300=2;310=2;320=2;330=2");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3003113, "oid=2073296", 80, 134, 23, 30, 130, 1, true, false);
      cm.npc_SetSpecialAction("oid=2073296", "summon", 0, 0);
      cm.npc_ChangeController(3003112, "oid=2073297", -80, 134, 23, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction("oid=2073297", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 10, 243);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#映照出记忆的泉水"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.sendNormalTalk_Bottom("好了，就是这里。请静静地看着泉水。", 37, 3003112, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, 0, 260);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(5);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(450001300, 5, 5, 80);
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.userSetFieldFloating(450001300, 0, 0, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 10, 243);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("啊…… 哦…… 我的头好像要炸开来了……", 37, 3003113, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm26.img/DarkMage", 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer("kao", "Map/Effect2.img/ArcaneRiver1/past", 0, 2500, 0, -80, 0, 4, 1);
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=2073296");
                                          cm.npc_SetSpecialAction("oid=2073296", "quest", -1, 1);
                                          cm.sendNormalTalk_Bottom("……黑魔法师？神秘河畔的尽头…… 决定性的力量…… 未来……", 37, 3003113, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我现在知道了。我……", 37, 3003113, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……未来的 #ho#…… 正在神秘河畔的尽头和魔法师进行战斗…… 并且战败了……", 37, 3003113, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("由于缺乏能够完全打败黑魔法师的决定性力量……", 37, 3003113, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……第一个环节就出了错…… 那就是…… 我被阿勒玛的部下--厉诺欺骗了！", 37, 3003113, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我用尽最后的力气，一定要回到的过去…… 就是为了让 #ho#，不要因为过去的我而做出错误的选择……", 37, 3003113, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("kao", '', 2, 300, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("厉诺…… 阿勒玛…… 如果再这样下去 ，对于#ho#来说结局不会改变！", 37, 3003113, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("…我不会让事情如你们所愿的…！", 37, 3003113, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setNpcSpecialActionReset("oid=2073297");
                                                              cm.npc_SetSpecialAction("oid=2073297", 'smile', 0, 1);
                                                              cm.setNpcSpecialActionReset("oid=2073297");
                                                              cm.npc_SetSpecialAction("oid=2073297", 'smile2', -1, 1);
                                                              cm.sendNormalTalk_Bottom("#face0#怪不得我有不好的感觉…… 你在失去记忆之前，已经被阿勒玛吸收了所有的能量。", 37, 3003112, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("咳…… 咳额……", 37, 3003113, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 4000, 0, -50, 260);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.userSetFieldFloating(450001300, 7, 7, 30);
                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.userSetFieldFloating(450001300, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 10, 243);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#呼呼，抛开你那些没用的想法。现在的你连你的身体都控制不了。", 37, 3003112, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#你朋友会被阿勒玛吸收，变成很好的营养成分。而你…… 现在已经没用了。留着你没有什么好处，你就消失吧。", 37, 3003112, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯…如果被别人怀疑就不好了，我要弄个假的出来…你现在喊同伴的话，好像太晚了吧。", 37, 3003112, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.setNpcSpecialActionReset("oid=2073297");
                                                                                              cm.npc_SetSpecialAction("oid=2073297", "change", 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.setNpcSpecialActionReset("oid=2073297");
                                                                                                cm.npc_SetSpecialAction("oid=2073297", 'stand2', -1, 1);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/rino/0"], [0, 400, -10, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_ChangeController(3003113, "oid=2073485", -80, 134, 23, -130, -30, 0, true, false);
                                                                                                  cm.npc_SetSpecialAction("oid=2073485", "summon", 0, 0);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#走好，从现在开始我的分身将会替代你。", 37, 3003112, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('kao', "Map/Effect2.img/ArcaneRiver1/fall2", 0, 1500, 0, 0, 0, 4, 1);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer("kao", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall", 200);
                                                                                                        cm.dispose();
                                                                                                        cm.warp(450001380, 0);
                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;