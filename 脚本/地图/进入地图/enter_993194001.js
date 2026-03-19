var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(t, b, a) {
  if (status == 0 && t == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var X = -1;
  if (status <= X++) {
    cm.dispose();
  } else {
    if (status === X++) {
      cm.curNodeEventEnd(true);
      cm.克里塞_获得技能();
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.Hidden_background("light_top_1", 1, 0, 0, 0);
      cm.Hidden_background("light_top_2", 1, 0, 0, 0);
      cm.Hidden_background('light_left', 1, 0, 0, 0);
      cm.Hidden_background("light_right", 1, 0, 0, 0);
      cm.Hidden_background("light_center", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 600, -850);
      cm.curNodeEventEnd(true);
      cm.forceStartQuest(501471, '');
      cm.forceStartQuest(501472, '');
      cm.forceStartQuest(501473, '');
      cm.forceStartQuest(501474, '');
      cm.forceStartQuest(501475, '');
      cm.forceStartQuest(501476, '');
      cm.forceStartQuest(501477, '');
      cm.forceStartQuest(501478, '');
      cm.forceStartQuest(501479, '');
      cm.forceStartQuest(501480, '');
      cm.forceStartQuest(501481, '');
      cm.forceStartQuest(501482, '');
      cm.forceStartQuest(501483, '');
      cm.forceStartQuest(501484, '');
      cm.forceStartQuest(501485, '');
      cm.forceStartQuest(501486, '');
      cm.forceStartQuest(501487, '');
      cm.forceStartQuest(501488, '');
      cm.forceStartQuest(501489, '');
      cm.forceStartQuest(501490, '');
      cm.forceStartQuest(501491, '');
      cm.forceStartQuest(501492, '');
      cm.forceStartQuest(501493, '');
      cm.forceStartQuest(501494, '');
      cm.forceStartQuest(501495, '');
      cm.forceStartQuest(501496, '');
      cm.forceStartQuest(501497, '');
      cm.forceStartQuest(501498, '');
      cm.forceStartQuest(501499, '');
      cm.forceStartQuest(501500, '');
      cm.forceStartQuest(501501, '');
      cm.forceStartQuest(501502, '');
      cm.forceStartQuest(501503, '');
      cm.forceStartQuest(501504, '');
      cm.forceStartQuest(501505, '');
      cm.forceStartQuest(501506, '');
      cm.forceStartQuest(501507, '');
      cm.forceStartQuest(501508, '');
      cm.forceStartQuest(501509, '');
      cm.forceStartQuest(501510, '');
      cm.forceStartQuest(501511, '');
      cm.forceStartQuest(501512, '');
      cm.forceStartQuest(501513, '');
      cm.forceStartQuest(501514, '');
      cm.forceStartQuest(501515, '');
      cm.forceStartQuest(501516, '');
      cm.forceStartQuest(501517, '');
      cm.updateInfoQuest(501518, '');
      cm.forceStartQuest(501518, '');
      cm.updateInfoQuest(501519, '');
      cm.forceStartQuest(501519, '');
      cm.updateInfoQuest(501520, '');
      cm.forceStartQuest(501520, '');
      cm.updateInfoQuest(501521, '');
      cm.forceStartQuest(501521, '');
      cm.updateInfoQuest(501522, '');
      cm.forceStartQuest(501522, '');
      cm.forceStartQuest(501814, '');
      cm.updateInfoQuest(100829, '');
      cm.forceStartQuest(100829, '');
      cm.forceStartQuest(100830, '');
      cm.updateInfoQuest(100831, '');
      cm.forceStartQuest(100831, '');
      cm.forceStartQuest(100832, '');
      cm.forceStartQuest(100833, '');
      cm.forceStartQuest(100834, '');
      cm.updateInfoQuest(100835, '');
      cm.forceStartQuest(100835, '');
      cm.forceStartQuest(100836, '');
      cm.forceStartQuest(100837, '');
      cm.forceStartQuest(100838, '');
      cm.forceStartQuest(100839, '');
      cm.forceStartQuest(100840, '');
      cm.forceStartQuest(100841, '');
      cm.forceStartQuest(100842, '');
      cm.forceStartQuest(100843, '');
      cm.forceStartQuest(100844, '');
      cm.forceStartQuest(100845, '');
      cm.forceStartQuest(100846, '');
      cm.forceStartQuest(100847, '');
      cm.forceStartQuest(100848, '');
      cm.forceStartQuest(100849, '');
      cm.forceStartQuest(100850, '');
      cm.forceStartQuest(100851, '');
      cm.updateInfoQuest(100852, '');
      cm.forceStartQuest(100852, '');
      cm.forceStartQuest(100853, '');
      cm.forceStartQuest(100892, '');
      cm.forceStartQuest(100893, '');
    } else {
      if (status === X++) {
        cm.npc_ChangeController(9062554, "oid=17413701", 600, -855, 3, 550, 650, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=17413701", "summon", 0, 0);
        cm.setNPC_Fadein(9062554, 1);
        cm.Npc_Fadeout("oid=17413701", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === X++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.onSetBackEffect("light_center", 1, 1, 0, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/mic", 100);
          cm.sendNormalTalk_Bottom("#face0#华丽的……", 37, 9062554, false, true, 1, 0);
        } else {
          if (status === X++) {
            cm.Npc_Fadeout("oid=17413701", 255, 900);
            cm.sendNormalTalk_Bottom("#face0#灯光……", 37, 9062554, true, true, 1, 0);
          } else {
            if (status === X++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
              cm.Hidden_background("light_top_1", 1, 1, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === X++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
                cm.Hidden_background("light_top_2", 1, 1, 0, 0);
                cm.sendNormalTalk_Bottom("#face0##fs24#对我……", 37, 9062554, false, true, 1, 600);
              } else {
                if (status === X++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
                  cm.Hidden_background("light_left", 1, 1, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === X++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
                    cm.Hidden_background("light_right", 1, 1, 0, 0);
                    cm.fieldEffect_PlayBGM("BgmEvent/mapleLIVE_pinkbean", 0, 0);
                    cm.sendNormalTalk_Bottom("#face0##fs36#包住了呢！！", 37, 9062554, false, true, 1, 600);
                  } else {
                    if (status === X++) {
                      cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === X++) {
                        cm.Hidden_background("light_top_1", 1, 0, 0, 0);
                        cm.Hidden_background("light_top_2", 1, 0, 0, 0);
                        cm.Hidden_background("light_left", 1, 0, 0, 0);
                        cm.Hidden_background("light_right", 1, 0, 0, 0);
                        cm.Hidden_background("light_center", 1, 0, 0, 0);
                        cm.monadForceMove("back", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0##fs40##fc0xffffaabb#各位~爱你们哦~！！！！", 37, 9062554, false, true, 1, 1000);
                      } else {
                        if (status === X++) {
                          cm.npc_LeaveField("oid=17413701");
                          cm.npc_ChangeController(9062554, "oid=17414087", 725, -330, 94, 675, 775, 0, false, 0, false);
                          cm.npc_SetSpecialAction("oid=17414087", "summon", 0, 0);
                          cm.setNPC_Fadein(9062554, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 719, 275);
                        } else {
                          if (status === X++) {
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === X++) {
                              cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 900, 0, 719, 275);
                            } else {
                              if (status === X++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 375, -330);
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === X++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === X++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 255, 255, 255, 100, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === X++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/7", 100);
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === X++) {
                                        cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 100, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === X++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 730, -300);
                                        } else {
                                          if (status === X++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === X++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/7", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === X++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2500, 0, 730, -300);
                                              } else {
                                                if (status === X++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === X++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === X++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === X++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === X++) {
                                                          cm.sendNormalTalk_Bottom("#face0##fs24# #fc0xffffaabb#品品品品品克！品克！品克缤！", 37, 9062554, false, true, 1, 0);
                                                        } else {
                                                          if (status === X++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === X++) {
                                                              cm.sendNormalTalk_Bottom("#face0##fs24# #fc0xffffaabb#我是大家的小可爱~品克缤！！！啊~", 37, 9062554, false, true, 1, 0);
                                                            } else {
                                                              if (status === X++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === X++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=0"], [0, 20, 0, 1, 0, 1, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === X++) {
                                                                    cm.sendNormalTalk_Bottom("（……？自己一个人在嘀咕什么呢……？）", 57, 0, false, true, 1, 0);
                                                                  } else {
                                                                    if (status === X++) {
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 100, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === X++) {
                                                                        cm.sendNormalTalk_Bottom("那个……？", 57, 0, false, true, 1, 0);
                                                                      } else {
                                                                        if (status === X++) {
                                                                          cm.npc_setForceFlip("oid=17414087", -1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === X++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=17414087"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === X++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#啊！你是！！！", 37, 9062554, false, true, 1, 0);
                                                                            } else {
                                                                              if (status === X++) {
                                                                                cm.sendNormalTalk_Bottom("#face0##fs24# #fc0xffffaabb#各位！今天的节目就到这里！", 37, 9062554, true, true, 1, 0);
                                                                              } else {
                                                                                if (status === X++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0##fs40##fc0xffffaabb#下次再见哦~拜拜~！！！！", 37, 9062554, true, true, 1, 2000);
                                                                                } else {
                                                                                  if (status === X++) {
                                                                                    cm.sendNormalTalk_Bottom("那个……你这是在做什么？", 57, 0, true, true, 1, 0);
                                                                                  } else {
                                                                                    if (status === X++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我能感受到……你有当#r超级巨星#k的潜质！", 37, 9062554, true, true, 1, 0);
                                                                                    } else {
                                                                                      if (status === X++) {
                                                                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1, 0);
                                                                                      } else {
                                                                                        if (status === X++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#和我一起去#b<互动演播室>#k吧！", 37, 9062554, true, true, 1, 0);
                                                                                        } else if (status === X++) {
                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                          cm.克里塞_获得技能();
                                                                                          cm.warp(993194002, 0, true);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.setStandAloneMode(false);
                                                                                          cm.updateInfoQuest(501469, "mapTuto=1;month=1");
                                                                                          cm.npc_LeaveField("oid=17414087");
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}