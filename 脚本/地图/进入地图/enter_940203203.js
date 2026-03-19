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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 778, 17);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004000, "oid=7107527", 960, 11, 70, 910, 1010, 1, true, false);
        cm.npc_SetSpecialAction("oid=7107527", "summon", 0, 0);
        cm.npc_ChangeController(3004006, "oid=7107528", 839, 11, 71, 789, 889, 0, false, false);
        cm.npc_SetSpecialAction("oid=7107528", "summon", 0, 0);
        cm.npc_ChangeController(3004007, "oid=7107529", 600, 11, 68, 550, 650, 0, true, false);
        cm.npc_SetSpecialAction("oid=7107529", "summon", 0, 0);
        cm.npc_ChangeController(3004007, "oid=7107530", 500, 11, 68, 450, 550, 0, true, false);
        cm.npc_SetSpecialAction("oid=7107530", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#别烦人，给我滚……", 37, 3004006, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=7107529", 1, 20, 50);
              cm.npc_SetForceMove("oid=7107530", 1, 20, 50);
              cm.sendNormalTalk_Bottom("#face0#咕噜咕噜", 37, 3004007, true, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=7107528", -1);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#喂喂！！你要是再靠近一步，我就要你好看！", 37, 3004006, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#走开！还不走开吗？", 37, 3004006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这个时候还什么交易账本……", 37, 3004000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#迅……速……", 37, 3004000, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction21.img/SavageT/illust/2", 0, 500, 0, -80, 12, 4, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#呃", 37, 3004000, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#看来你是胆大妄为呀，黑鸦。", 37, 3004006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#哈哈……你该不会真的打算发射吧？", 37, 3004000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你现在打算要账本了？\r\n信不信我把你放进被放射物质污染的海水中去，让你变成六足怪物？", 37, 3004006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#在这之前我劝你先看看后边……", 37, 3004000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#什么？又想耍什么花样……", 37, 3004006, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0);
                                              cm.npc_LeaveField("oid=7107529");
                                              cm.npc_LeaveField("oid=7107529");
                                              cm.npc_LeaveField("oid=7107530");
                                              cm.npc_LeaveField("oid=7107530");
                                              cm.npc_ChangeController(3004019, "oid=7108222", 650, 11, 68, 600, 700, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=7108222", "summon", 0, 0);
                                              cm.npc_ChangeController(3004019, "oid=7108223", 550, 11, 68, 500, 600, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=7108223", "summon", 0, 0);
                                              cm.npc_ChangeController(3004019, "oid=7108224", 450, 11, 68, 400, 500, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=7108224", "summon", 0, 0);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 630, 17);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=7107528", 1);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7108223"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7108222"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7108224"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                  cm.sendNormalTalk_Bottom("#face2#咕噜！！", 37, 3004007, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm47/MrHazard", 0, 0);
                                                    cm.npc_setForceFlip("oid=7107528", -1);
                                                    cm.sendNormalTalk_Bottom("#face0#（嘎吱）我一而再再而三地忍让，这些………", 37, 3004006, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#呃！！趴下！！！", 37, 3004000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=7108222", -1, 1650, 200);
                                                        cm.npc_SetForceMove("oid=7108223", -1, 1750, 200);
                                                        cm.npc_SetForceMove("oid=7108224", -1, 1850, 200);
                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                        cm.inGameDirectionEvent_MoveAction(4);
                                                        cm.emotion(5, 7000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(6000, 2000, 6000, -687, 17);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=7107528", "special", -1, 1);
                                                            cm.setAmbience("SoundEff.img/savageT/gun", 200, 60);
                                                            cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                            cm.npc_LeaveField("oid=7108223");
                                                            cm.npc_LeaveField("oid=7108224");
                                                            cm.npc_LeaveField("oid=7108222");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=7108222", 0, 500);
                                                              cm.Npc_Fadeout("oid=7108223", 0, 500);
                                                              cm.Npc_Fadeout("oid=7108224", 0, 500);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setNpcSpecialActionReset("oid=7107528");
                                                                cm.playSoundEffDirectly("SoundEff.img/savageT/gun");
                                                                cm.sendNormalTalk_Bottom("#face0#该死！！不都跑了嘛！", 37, 3004006, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 860, 17);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("咻……", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#冷静点，佩隆。", 37, 3004000, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=7107528", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#给我找回来。", 37, 3004006, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#呃？", 37, 3004000, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0##fs24##r给-我-找-回-来", 37, 3004006, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                      cm.sendNormalTalk_Bottom("#face1#我，我立刻出发。", 37, 3004000, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.askYesNo_Bottom("#face1#走吧，在那边。", 37, 3004000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h0;dir=off;35=h1;36=h1;37=h1;38=h0");
                                                                                          cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;38=h0");
                                                                                          cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;38=h0;39=h0");
                                                                                          cm.forceStartQuest(37108, '');
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else if (status === V++) {
                                                                                          cm.dispose();
                                                                                          cm.warp(402000222, 1);
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
                        }
                      }
                    }
                  }
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