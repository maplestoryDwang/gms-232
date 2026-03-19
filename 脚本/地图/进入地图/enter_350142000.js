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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540913, "oid=294582865", 500, 0, 3, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294582865", "summon", 0, 0);
      cm.npc_ChangeController(1540809, "oid=294582866", 900, 0, 1, 850, 950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=294582866", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 30, -200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 750, -100);
        cm.effect_Text(["#fn黑体##fs18#另一方面 #fs15##fn黑体#世界树最高处"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
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
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#哥……？！", 37, 1540809, false, true);
                cm.effect_Voice("Voice3.img/HofM/ACT4/DND/7", 128);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=294582865", 1, 140, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(300, 1500, 300, 800, 50);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                        cm.npc_SetSpecialAction("oid=294582866", "sword_front", -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6#这是我的战斗，我说过这与哥哥你无关！", 37, 1540809, false, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT4/DND/9", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我有话要对你说，戴米安。", 37, 1540808, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT4/DND/10", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#我不想再听让人放弃的话了！", 37, 1540809, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT4/DND/11", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……是有关我们祖辈的事情。", 37, 1540808, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT4/DND/12", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face6#！！", 37, 1540809, true, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT4/DND/13", 128);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                    cm.fieldEffect_PlayBGM("Bgm45/Heroes Of Maple Theme Piano", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Hero8(1);
                                      cm.fieldEffect_Hero9(60, 3000);
                                      cm.sendNormalTalk_Bottom("#face0#相信你也知道，我们的父亲是纯种魔族，但是其他事情你应该就没听说过了。", 37, 1540808, false, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT4/DND/14", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#最开始想要得到超越者力量的人并不是你，戴米安。先代的纯种魔族们为了得到超越者的力量，强制进行了数百年的实验，正因为此，绯红才会变得越来越荒芜。", 37, 1540808, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT4/DND/15", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我们的父亲知晓那些实验会带来的灾难，他曾在中途反对过，但终究被大家所孤立，并最终死亡。", 37, 1540808, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT4/DND/16", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#……！", 37, 1540809, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你明白了吗，戴米安？我们魔族所经历的一切悲剧全都是为了想要拥有过于强大的力量，绯红之所以会如现在这般一片荒芜，我们之所以会失去故乡四处流浪，都是因为这个。", 37, 1540808, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT4/DND/17", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face6#……", 37, 1540809, true, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT4/DND/18", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#戴米安，魔族的悲剧应该在我们祖辈的手上结束，所以现在就停手吧，最重要的是你的身体已经无法再承受过多的力量了。", 37, 1540808, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/DND/19", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=294582866", "sword_down", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 740, 80);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#……数百年来……我一直抱持着一个想法活着，\r\n可事到如今你却让我放弃？", 37, 1540809, false, true);
                                                            cm.effect_Voice("Voice3.img/HofM/ACT4/DND/20", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……对不起，戴米安。是你承受了一切的伤害……\r\n可我却在指责你。", 37, 1540808, true, true);
                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/DND/21", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#……可我最终还是没能救出母亲。", 37, 1540809, true, true);
                                                                cm.effect_Voice("Voice3.img/HofM/ACT4/DND/22", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#那不是你的错，我绝不会恨你的。", 37, 1540808, true, true);
                                                                  cm.effect_Voice("Voice3.img/HofM/ACT4/DND/23", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#哥……", 37, 1540809, true, true);
                                                                    cm.effect_Voice("Voice3.img/HofM/ACT4/DND/24", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我不恨你，戴米安。", 37, 1540808, true, true);
                                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/DND/25", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#你说你不恨我……？", 37, 1540809, true, true);
                                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/DND/26", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#没错，从来没有过。", 37, 1540808, true, true);
                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/DND/27", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_Hero9(0, 3000);
                                                                            cm.fieldEffect_BackgroundCanvas(1, 125, 125, 125, 2000, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face13#这兄弟情真是叫人感激涕零呢。", 37, 1540809, false, true);
                                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/DND/29", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/dem_demon", 100);
                                                                                cm.npc_SetSpecialAction("oid=294582866", "sword_attack", 0, 1);
                                                                                cm.npc_SetSpecialAction("oid=294582865", "special3", 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 100, 255, 0, 0, 0, 0);
                                                                                  cm.userSetFieldFloating(350142000, 5, 5, 5);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 100);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                  cm.npcMove(1540913, -130, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.userSetFieldFloating(350142000, 0, 0, 0);
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                      cm.fieldEffect_Hero9(50, 0);
                                                                                      cm.fieldEffect_PlayBGM("Bgm45/Demian", 0, 0);
                                                                                      cm.sendNormalTalk_Bottom("#face7#戴……戴米安……！", 37, 1540808, false, true);
                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/DND/30", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face13#哥哥你不会了解，我现在的心里有多么的自由，世界上所流淌着的一切能量的血管都攥在我手中的这种心情！", 37, 1540809, true, true);
                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT4/DND/32", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npcMove(1540809, -21, 0, 0);
                                                                                          cm.npc_SetSpecialAction("oid=294582866", "stand3", -1, 1);
                                                                                          cm.sendNormalTalk_Bottom("#face12#你说问题出在想要拥有过分的力量？不，他们的问题只有一个。\r\n就是没有能够逾越自己的壁垒！", 37, 1540809, true, true);
                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/DND/33", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 0, 80);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else if (status === V++) {
                                                                                                cm.dispose();
                                                                                                cm.warp(350160000, 0, true);
                                                                                                cm.npc_LeaveField("oid=294582865");
                                                                                                cm.npc_LeaveField("oid=294582865");
                                                                                                cm.npc_LeaveField("oid=294582866");
                                                                                                cm.npc_LeaveField("oid=294582866");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;