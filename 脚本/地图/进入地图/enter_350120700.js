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
      cm.getMap().killAllMonsters(false);
      cm.forceStartQuest(33900, '6');
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.Hidden_background("HofM2_tuto", 1, 0, 0, 0);
      cm.npc_ChangeController(1540844, "oid=287846665", 190, 255, 4, 140, 240, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287846665", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=287846666", 120, 200, 1, 70, 170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287846666", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_SetSpecialAction("oid=287846665", "stand2", -1, 1);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
      cm.npc_SetForceMove("oid=287846666", 1, 200, 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#门被魔法封印住了。", 37, 1540805, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#打碎了再进去不就好了吗？", 37, 1540807, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=287846666", 1, 150, 120);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_QTE(2);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=287846666", "special4", 1, 1);
                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/22101000/Use", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("纹丝不动啊。", 37, 1540807, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("火力好像要比平时弱啊，米乐，再试试看？", 37, 1540805, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("好吧，让我喘口气……噗~~~", 37, 1540807, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_QTE(0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=287846666", "special6", 1, 1);
                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/22171063/Use", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("咳咳，不行啊？", 37, 1540807, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#肯定有什么方法……", 37, 1540805, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm44/WildFury", 0, 0);
                                          cm.npc_SetSpecialAction("oid=287846665", "special", 1, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/KapusSummon", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.npc_setForceFlip("oid=287846666", -1);
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.emotion(5, -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(350120700, 5, 5, 5);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.userSetFieldFloating(350120700, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0##r#fs22#意图入侵圣殿者，付出代价吧！！！！", 37, 1540844, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=287846666");
                                                      cm.npc_LeaveField("oid=287846666");
                                                      cm.npc_LeaveField("oid=287846665");
                                                      cm.npc_LeaveField("oid=287846665");
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.addPopupSay(1540807, 2500, "这家伙超大的，主人！", '', 0);
                                                          cm.addPopupSay(1540805, 2500, "#face3#没关系，我们能赢的，米乐！", '', 0);
                                                          cm.addPopupSay(1540807, 2500, "可是……它一个拳头就有主人那么大了。", '', 0);
                                                          cm.addPopupSay(1540805, 2500, "#face3#那是因为我太矮了，不用放在心上！", '', 0);
                                                          cm.addPopupSay(1540807, 2500, "#face2#主人……", '', 0);
                                                          cm.spawnMobLimit(8240147, 1, 190, 268, 1);
                                                          cm.scheduleWarpTask(60, 350120800, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;