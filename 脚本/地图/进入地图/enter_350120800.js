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
      cm.forceStartQuest(33900, '6');
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.Hidden_background("HofM2_tuto", 1, 0, 0, 0);
      cm.npc_ChangeController(1540801, "oid=287888633", -300, 50, 8, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287888633", 'summon', 0, 0);
      cm.npc_ChangeController(1540844, "oid=287888635", 0, 255, 6, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=287888635", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=287888636", -470, 50, 9, -520, -420, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287888636", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_SetSpecialAction("oid=287888633", "special4", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#咳咳……好奇怪，没法打倒啊？", 37, 1540805, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好像中了什么特殊的咒语，主人。", 37, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不是咒语，是权力。\r\n我是奉王命坚守圣殿的不灭之魂！", 37, 1540844, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#王……难道你说的是消失的阿斯旺之王吗？", 37, 1540805, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#没错，就算王国消失了，国王的权力是永恒的。\r\n你们那些愚蠢的魔法是打倒不了我的！", 37, 1540844, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=287888635", "special2", 1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(70);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(350120800, 10, 10, 10);
                        cm.inGameDirectionEvent_头顶图片(["Skill/2312.img/skill/23121052/hit/0", "oid=287888635"], [0, 40, -120, 1, 10, 1, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/23121052/Hit", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(45);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(350120800, 10, 10, 10);
                          cm.inGameDirectionEvent_头顶图片(["Skill/2312.img/skill/23121052/hit/0", "oid=287888635"], [0, -80, -145, 1, 10, 1, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/23121052/Hit", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(350120800, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#额，居然能够伤到我……你是谁？！", 37, 1540844, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=287888633", "special2", 1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Mer2", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, -300, 250);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                      cm.sendNormalTalk_Bottom("#face0#！！你的名字是？", 37, 1540844, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#我是埃欧雷之王，双弩精灵。\r\n你该不会认为我也不够资格吧？", 37, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……你的威严肯定凌驾于我被赋予的权力之上。", 37, 1540844, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#但是你并不是我所供奉的王，\r\n我有义务保护这里。", 37, 1540844, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#还真是个忠臣啊，那我也没办法了。", 37, 1540801, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=287888633", 'special3', 1, 1);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Mer1", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm45/Showtime!", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#只能靠力量打倒了！", 37, 1540801, false, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT2/KEEPER2/12", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.npc_LeaveField("oid=287888633");
                                                                cm.npc_LeaveField("oid=287888633");
                                                                cm.npc_LeaveField("oid=287888636");
                                                                cm.npc_LeaveField("oid=287888636");
                                                                cm.npc_LeaveField("oid=287888635");
                                                                cm.npc_LeaveField("oid=287888635");
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setNumberForQuestCustomData(33900, 0);
                                                                cm.forceStartQuest(33900, '0');
                                                                cm.showMapleHero();
                                                                cm.mapleHeroSetList([0, 4]);
                                                                cm.getTopMsgFont("直接攻击核心，可以造成更多的伤害。", 3, 20, 20, 0);
                                                                cm.addPopupSay(1540801, 2500, "#face4#这家伙看起来相当厉害啊？", '', 0);
                                                                cm.addPopupSay(1540805, 2500, "#face3#中间的核心好像就是弱点！", '', 0);
                                                                cm.addPopupSay(1540801, 2500, "#face4#好吧，就用力敲打吧，直到它自己将核心暴露出来！", '', 0);
                                                                cm.scheduleWarpTask(180, 350120900, 0, false);
                                                                cm.spawnMobLimit(8240147, 1, 0, 268, 1);
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