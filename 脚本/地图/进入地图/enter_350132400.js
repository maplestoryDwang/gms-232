var status = -1;
var selectionLog = [];
function action(z, L, w) {
  if (status == 0 && z == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = w;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      if (cm.getNumberFromQuestInfo(33991, '24') > 0) {
        cm.showMapleHero();
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(1540795, 'oid=59501', -643, 123, 5, -680, -593, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132400");
      cm.updateInfoQuest(33991, "20=1;24=1;17=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, -25);
      cm.getPlayer().removeDragon();
      cm.curNodeEventEnd(true);
    } else {
      if (status === F++) {
        cm.npc_ChangeController(1540877, "oid=292063915", -390, 90, 4, -440, -340, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=292063915", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=292063915", "stand2", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === F++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === F++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === F++) {
              cm.inGameDirectionEvent_AskAnswerTime(5000);
              cm.effect_Text(["#fn黑体##fs18#另一方面，#fs15##fn黑体#浩瀚博物馆内部"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
            } else {
              if (status === F++) {
                cm.npc_SetSpecialAction("oid=292063915", "dem_appear", -1, 1);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_appear", 100);
                cm.userSetFieldFloating(350132400, 5, 5, 5);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === F++) {
                  cm.userSetFieldFloating(350132400, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                } else {
                  if (status === F++) {
                    cm.npc_SetSpecialAction("oid=292063915", 'stand3', -1, 1);
                    cm.fieldEffect_Hero8(1);
                    cm.fieldEffect_Hero9(60, 1000);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === F++) {
                      cm.sendNormalTalk_Bottom("#face1#你们这帮家伙还算对得起自己的名气，我原打算一下子就了断了你们的性命的。", 37, 1540809, false, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/1", 128);
                    } else {
                      if (status === F++) {
                        cm.sendNormalTalk_Bottom("#face4#你是魔族的首领……！你是怎么知道这里的？", 37, 1540878, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/2", 128);
                      } else {
                        if (status === F++) {
                          cm.sendNormalTalk_Bottom("#face1#我的本事可是相当灵通的，就在和我兵刃相接的那一刻，我就已经完全掌握了你们的位置。", 37, 1540809, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/3", 128);
                        } else {
                          if (status === F++) {
                            cm.sendNormalTalk_Bottom("#face9#看样子你有感知能力啊……从前你们的军团长就和你一样卑鄙无耻。", 37, 1540879, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/4", 128);
                          } else {
                            if (status === F++) {
                              cm.sendNormalTalk_Bottom("#face4#深有同感。", 37, 1540878, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/5", 128);
                            } else {
                              if (status === F++) {
                                cm.npc_SetSpecialAction("oid=292063915", "attack_ready", 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(800);
                              } else {
                                if (status === F++) {
                                  cm.npc_SetSpecialAction("oid=292063915", 'stand4', -1, 1);
                                  cm.sendNormalTalk_Bottom("#face4#就算遭到了突袭，我们联手还不至于弱到没法对付你一个。", 37, 1540878, false, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/6", 128);
                                } else {
                                  if (status === F++) {
                                    cm.sendNormalTalk_Bottom("#face4#呵呵……真是有趣，不过我现在可不想和你们打。", 37, 1540809, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/7", 128);
                                  } else {
                                    if (status === F++) {
                                      cm.sendNormalTalk_Bottom("#face3#？！", 37, 1540880, true, true);
                                    } else {
                                      if (status === F++) {
                                        cm.sendNormalTalk_Bottom("#face1#一开始你们就提错了问题，你们不该问我怎么来的这里，而是该问我为什么会来这里。", 37, 1540809, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/8", 128);
                                      } else {
                                        if (status === F++) {
                                          cm.npc_SetSpecialAction("oid=292063915", "stone_appear", 1, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_stone", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(2100);
                                        } else {
                                          if (status === F++) {
                                            cm.npc_SetSpecialAction("oid=292063915", "stone_loop", -1, 1);
                                            cm.sendNormalTalk_Bottom("#face4#只要有这个，将超越者的力量化为己有根本就不在话下。", 37, 1540809, false, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/9", 128);
                                          } else {
                                            if (status === F++) {
                                              cm.sendNormalTalk_Bottom("#face8#！！从一开始你的目的就是那个啊！", 37, 1540879, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/10", 128);
                                            } else {
                                              if (status === F++) {
                                                cm.sendNormalTalk_Bottom("#face1#我为找这块石头徘徊了多年，最终只能让那个弗里德的后裔亲自帮忙找到了。", 37, 1540809, true, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/11", 128);
                                              } else {
                                                if (status === F++) {
                                                  cm.sendNormalTalk_Bottom("#face3#你居然以阿弗利埃为诱饵，利用了龙神和我们所有人……不可饶恕！", 37, 1540878, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/12", 128);
                                                } else {
                                                  if (status === F++) {
                                                    cm.sendNormalTalk_Bottom("#face4#我要谢谢大家，各位英雄老爷们。", 37, 1540809, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/13", 128);
                                                  } else {
                                                    if (status === F++) {
                                                      cm.sendNormalTalk_Bottom("#face4#给我站住！", 37, 1540878, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/14", 128);
                                                    } else {
                                                      if (status === F++) {
                                                        cm.npc_SetSpecialAction("oid=292063915", "attack", 1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/final_attack", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                      } else {
                                                        if (status === F++) {
                                                          cm.fieldEffect_PlayBGM("Bgm45/Army Of Fears Theme", 0, 0);
                                                          cm.sendNormalTalk_Bottom("#face9#该死，已经逃走了……！", 37, 1540879, false, true);
                                                          cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/15", 128);
                                                        } else {
                                                          if (status === F++) {
                                                            cm.sendNormalTalk_Bottom("#face4#我们得追上去！", 37, 1540878, true, true);
                                                            cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/16", 128);
                                                          } else {
                                                            if (status === F++) {
                                                              cm.sendNormalTalk_Bottom("#face3#……很难追了，我们损失严重，更何况我们更要担心龙神和战神。", 37, 1540880, true, true);
                                                              cm.effect_Voice("Voice3.img/HofM/ACT3/DEM/17", 128);
                                                            } else {
                                                              if (status === F++) {
                                                                cm.fieldEffect_Hero8(0);
                                                                cm.sendNewEffects(19, [1000]);
                                                              } else if (status === F++) {
                                                                cm.mapleHeroSetList([10, 11, 12]);
                                                                cm.setNumberForQuestCustomData(33900, 10);
                                                                cm.showMapleHero();
                                                                cm.npc_LeaveField("oid=292063915");
                                                                cm.npc_LeaveField("oid=292063915");
                                                                cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;