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
      cm.teachSkill(80001037, -1, 0);
      cm.forceStartQuest(35800, '');
      cm.npc_ChangeController(3003903, "oid=2175959", 250, 81, 9, 200, 300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2175959", "summon", 0, 0);
      cm.npc_ChangeController(3003902, "oid=2175960", 188, 81, 9, 138, 238, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2175960", 'summon', 0, 0);
      cm.npc_ChangeController(3003920, "oid=2175961", 0, 300, 2, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2175961", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2175960", "off", -1, 1);
      cm.npcMove(3003903, 0, -120, 0);
      cm.npcMove(3003920, 0, -70, 0);
      cm.Npc_Fadeout("oid=2175959", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 28, 250);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npcMove(3003902, 0, -120, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -133, 100);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你还是那么弱。", 37, 3003773, false, true);
              cm.effect_Voice("Voice4.img/BM3/orca/0", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("奥尔卡……你不是失去所有的力量了吗？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我只是找回了原本属于我的力量而已。", 37, 3003773, true, true);
                  cm.effect_Voice("Voice4.img/BM3/orca/1", 128);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                      cm.effect_Text(["#fn黑体##fs18#很久以前，精灵森林"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM3_forest/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#翼魔奥尔卡……不，现在你只是个平凡的少女而已。", 37, 1540707, false, true);
                          cm.effect_Voice("Voice4.img/BM3/guw/1", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#战斗应该已经结束了，你为什么还想得到力量呢？", 37, 1540707, true, true);
                            cm.effect_Voice("Voice4.img/BM3/guw/2", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#奥尔卡知道。\r\n从几百年前开始……黑魔法师预知和干涉了未来。", 37, 1540499, true, true);
                              cm.effect_Voice("Voice4.img/BM3/orca/2", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#连军团长们的背叛、被称为英雄的人们的袭击，以及自己被封印，都在他的预料之中……", 37, 1540499, true, true);
                                cm.effect_Voice("Voice4.img/BM3/orca/4", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#当时看上去像是失败了的一切，全都是他在自导自演。", 37, 1540499, true, true);
                                  cm.effect_Voice("Voice4.img/BM3/orca/6", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#黑色天堂事件也一样。", 37, 1540499, true, true);
                                    cm.effect_Voice("Voice4.img/BM3/orca/8", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#格里梅尔背叛，奥尔卡失去了力量，\r\n还有，还有……斯乌死了。", 37, 1540499, true, true);
                                      cm.effect_Voice("Voice4.img/BM3/orca/10", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#从一开始，我们就遭到了黑魔法师的利用。", 37, 1540499, true, true);
                                        cm.effect_Voice("Voice4.img/BM3/orca/12", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#斯乌……\r\n是被黑魔法师杀死的。", 37, 1540499, true, true);
                                          cm.effect_Voice("Voice4.img/BM3/orca/15", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你想报仇吗？", 37, 1540707, true, true);
                                            cm.effect_Voice("Voice4.img/BM3/guw/5", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#奥尔卡有权利看到他的破灭。", 37, 1540499, true, true);
                                              cm.effect_Voice("Voice4.img/BM3/orca/17", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#对抗者诞生了。\r\n在最后的时刻，他会需要你。", 37, 1540707, true, true);
                                                cm.effect_Voice("Voice4.img/BM3/guw/7", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#那是什么意思……", 37, 1540499, true, true);
                                                  cm.effect_Voice("Voice4.img/BM3/orca/21", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你要躲藏起来。\r\n因为就像你对黑魔法师一样，也会有人向你主张复仇的权利。", 37, 1540707, true, true);
                                                    cm.effect_Voice("Voice4.img/BM3/guw/8", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 28, 202);
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
                                                            cm.Npc_Fadeout("oid=2175959", 150, 1000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("精灵王古瓦洛……帮助奥尔卡的人原来是你。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#对抗者啊，决战的时刻临近了。", 37, 3003903, true, true);
                                                                cm.effect_Voice("Voice4.img/BM3/guw/10", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#剩下的只有黑魔法师。\r\n这场战争的结局，就取决于你。", 37, 3003903, true, true);
                                                                  cm.effect_Voice("Voice4.img/BM3/guw/11", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("对抗者的力量……？\r\n但是我……我不知道怎么才能发挥出那种力量。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2175961", 'special', -1, 1);
                                                                          cm.sendNormalTalk_Bottom("迷宫之核在发光。是因为希拉被打倒了吗？", 57, 0, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#其中混合了超越者的力量，应该无法轻易破坏。", 37, 3003903, true, true);
                                                                            cm.effect_Voice("Voice4.img/BM3/guw/13", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#用你拥有的对抗者的力量，破坏掉迷宫之核吧。", 37, 3003903, true, true);
                                                                              cm.effect_Voice("Voice4.img/BM3/guw/14", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003902, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_QTE(0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/3"], [0, -1, 0, 1, 0, 0, 0, 0]);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul_fail", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("力量……消散了。", 57, 0, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我不是说了吗？那家伙赢不了黑魔法师。", 37, 3003902, true, true);
                                                                                            cm.effect_Voice("Voice4.img/BM3/orca/23", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayBGM("Bgm50/BlackFury", 0, 0);
                                                                                              cm.sendNormalTalk_Bottom("#face0#……嗯？！", 37, 3003903, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetSpecialAction("oid=2175960", "special4", 1, 1);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaShield", 100);
                                                                                                cm.Npc_Fadeout("oid=2175961", 0, 2000);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('核？！', 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#奥尔卡？！", 37, 3003903, true, true);
                                                                                                    cm.effect_Voice("Voice4.img/BM3/guw/21", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM3_orca/0", 0, 1000, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM3_orca/1", 0, 1000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BM3_orca/3", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction20.img/effect/BM3_orca/4", 0, 1000, 0, 0, 20, 4, 0, -1, 0, 0, 0);
                                                                                                      cm.sendNormalTalk_Bottom("#face1#我不想再被对抗者的虚名愚弄了。", 37, 3003902, true, true);
                                                                                                      cm.effect_Voice("Voice4.img/BM3/orca/26", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#你在干什么？不能摘下面具……", 37, 3003903, true, true);
                                                                                                        cm.effect_Voice("Voice4.img/BM3/guw/24", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BM3_orca/2", 0, 300, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("古瓦洛消失了？！", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#黑魔法师将由我奥尔卡亲手打倒。", 37, 3003902, true, true);
                                                                                                              cm.effect_Voice("Voice4.img/BM3/orca/27", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#快回去，蠢货。", 37, 3003902, true, true);
                                                                                                                cm.effect_Voice("Voice4.img/BM3/orca/29", 128);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("呃……奥尔卡……！！！", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 28, 270);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                      cm.npc_LeaveField("oid=2175959");
                                                                                                                      cm.npc_LeaveField("oid=2175959");
                                                                                                                      cm.userSetFieldFloating(993070071, 5, 5, 50);
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=2175960", 'special2', 1, 1);
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaUp", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.forceCompleteQuest(35800);
                                                                                                                          cm.gainExp(360899508);
                                                                                                                          cm.updateInfoQuest(35831, "52=h0");
                                                                                                                          cm.npc_LeaveField("oid=2175960");
                                                                                                                          cm.npc_LeaveField("oid=2175960");
                                                                                                                          cm.npc_LeaveField("oid=2175961");
                                                                                                                          cm.npc_LeaveField("oid=2175961");
                                                                                                                          cm.dispose();
                                                                                                                          cm.warp(450012000, 0, true);
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
                }
              }
            }
          }
        }
      }
    }
  }
}