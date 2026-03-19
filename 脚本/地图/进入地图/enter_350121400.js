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
      cm.setNumberForQuestCustomData(33900, 6);
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.npc_ChangeController(1540801, "oid=288047450", 855, -50, 4, 805, 905, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288047450", 'summon', 0, 0);
      cm.npc_ChangeController(1540807, "oid=288047451", 656, -50, 3, 606, 706, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288047451", "summon", 0, 0);
      cm.npc_ChangeController(1540803, "oid=288047452", 1200, -170, 2, 1150, 1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=288047452", "summon", 0, 0);
      cm.npc_ChangeController(1540804, "oid=288047453", 1290, -170, 2, 1240, 1340, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=288047453", "summon", 0, 0);
      cm.fieldEffect_Hero8(1);
      cm.fieldEffect_Hero9(40, 1000);
      cm.sendNormalTalk_Bottom("他们两个来了，心里就踏实多了，时隔多年，让我们好好合作一把吧？", 37, 1540801, false, true);
      cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/2", 128);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 1250, -100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#木头的实力可大不如从前了啊？", 37, 1540803, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/3", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我消灭得要比你多。", 37, 1540804, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/4", 128);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#好孩子可不能说谎，我可都数过咯？", 37, 1540803, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/5", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#最后的怪物是我打下来的，\r\n我的闪电反击碰到了你的怪物。", 37, 1540804, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/6", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#真要这么计较，我的黑色秘卡\r\n可灭掉了你三个怪物哦？", 37, 1540803, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/7", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#哎，算了吧，你这家伙还是这么不讨人喜欢。", 37, 1540804, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/8", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#是，是，怎么跟你比啊？", 37, 1540803, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/9", 128);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 800, -20);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face6#看来他们关系不是很好。", 37, 1540805, false, true);
                                  cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/10", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#……差点给忘了，他们俩就从来没有合得来过。", 37, 1540801, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT2/HEROES2/11", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Hero9(100, 1000);
                                        cm.npc_LeaveField("oid=288047450");
                                        cm.npc_LeaveField("oid=288047450");
                                        cm.npc_LeaveField("oid=288047451");
                                        cm.npc_LeaveField("oid=288047451");
                                        cm.npc_LeaveField("oid=288047452");
                                        cm.npc_LeaveField("oid=288047452");
                                        cm.npc_LeaveField("oid=288047453");
                                        cm.npc_LeaveField("oid=288047453");
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                          cm.forceCompleteQuest(33973);
                                          cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                          cm.updateInfoQuest(33962, "33971=1;33972=1;33973=1");
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1250, -100);
                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_Hero8(0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else if (status === V++) {
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setNumberForQuestCustomData(33900, 4);
                                                  cm.showMapleHero();
                                                  cm.mapleHeroSetList([4, 0, 2, 3]);
                                                  cm.addPopupSay(1540803, 2500, "#face5#龙神也一直盯着我作战的样子嘛，是不是，木头？", '', 0);
                                                  cm.addPopupSay(1540804, 2500, "#face3#看你瞎折腾当然很有趣啊。", '', 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;