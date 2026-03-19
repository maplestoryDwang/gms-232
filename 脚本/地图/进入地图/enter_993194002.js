var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(A, W, D) {
  if (status == 0 && A == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = D;
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
      cm.inGameDirectionEvent_AskAnswerTime(250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === X++) {
        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      } else {
        if (status === X++) {
          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
        } else {
          if (status === X++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === X++) {
              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 450, 700);
            } else {
              if (status === X++) {
                cm.npc_ChangeController(9062554, "oid=17415313", 580, 490, 46, 530, 630, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=17415313", "summon", 0, 0);
                cm.npc_ChangeController(9062558, "oid=17415314", 700, 490, 46, 650, 750, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=17415314", "summon", 0, 0);
                cm.setNPC_Fadein(9062554, 1);
                cm.setNPC_Fadein(9062558, 1);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === X++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === X++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Text(["#fn黑体##fs18#<互动演播室>", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                  } else {
                    if (status === X++) {
                      cm.sendNormalTalk_Bottom("#face0#快过来！\r\n这里就是录制#b<冒险岛互动播>#k节目的地方！\r\n#r互动演播室#k！", 37, 9062554, false, true, 1, 0);
                    } else {
                      if (status === X++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 290, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, 600, 700);
                      } else {
                        if (status === X++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === X++) {
                            cm.sendNormalTalk_Bottom("#fs24#哦！先不要动！！！！", 37, 9062554, false, true, 1, 0);
                          } else {
                            if (status === X++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=0"], [0, 20, 0, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === X++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 255, 255, 255, 100, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === X++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/7", 100);
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === X++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === X++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/omega/cartoon/7", 100);
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === X++) {
                                        cm.sendNormalTalk_Bottom("额啊！", 57, 0, false, true, 1, 0);
                                      } else {
                                        if (status === X++) {
                                          cm.sendNormalTalk_Bottom("#face0#嗯~果然！我的眼光没有错！", 37, 9062554, true, true, 1, 0);
                                        } else {
                                          if (status === X++) {
                                            cm.sendNormalTalk_Bottom("#face0#唔……不赖呢。", 37, 9062558, true, true, 1, 0);
                                          } else {
                                            if (status === X++) {
                                              cm.sendNormalTalk_Bottom("#face0#你想不想……和我一起试着成为#r超级巨星#k啊？", 37, 9062554, true, true, 1, 0);
                                            } else {
                                              if (status === X++) {
                                                cm.sendNormalTalk_Bottom('超级巨星？', 57, 0, true, true, 1, 0);
                                              } else {
                                                if (status === X++) {
                                                  cm.sendNormalTalk_Bottom("#face0#没错！#b<冒险岛互动播>#k需要你成为#r创作者#k，不仅要亲自制作节目，\r\n还要亲自出演节目！", 37, 9062554, true, true, 1, 0);
                                                } else {
                                                  if (status === X++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我一直寻找的就是你这样的#r帅气冒险家#k！", 37, 9062554, true, true, 1, 0);
                                                  } else {
                                                    if (status === X++) {
                                                      cm.sendNormalTalk_Bottom("帅气的……冒险家……！", 57, 0, true, true, 1, 0);
                                                    } else {
                                                      if (status === X++) {
                                                        cm.sendNormalTalk_Bottom("#face0#最近节目的流行趋势就是向观众展现出自己#b卖力冒险的样子#k！\r\n如果你是一个#b强大的冒险家#k，就更能受到大家的欢迎！", 37, 9062558, true, true, 1, 0);
                                                      } else {
                                                        if (status === X++) {
                                                          cm.sendNormalTalk_Bottom("#face0#来，只要照我说的去做，你的粉丝就会嗖嗖大涨，你也能成为#r超厉害的创作者#k！", 37, 9062554, true, true, 1, 0);
                                                        } else {
                                                          if (status === X++) {
                                                            cm.sendNormalTalk_Bottom("可我能录好节目吗？", 57, 0, true, true, 1, 0);
                                                          } else {
                                                            if (status === X++) {
                                                              cm.sendNormalTalk_Bottom("#face0#这样！如果参加我所准备的#b创作者步步高#k，你也能成为#r超级巨星#k！", 37, 9062554, true, true, 1, 0);
                                                            } else {
                                                              if (status === X++) {
                                                                cm.sendNormalTalk_Bottom("#face0#就是进行我所准备的任务，并将整个过程拍成一档节目！", 37, 9062554, true, true, 1, 0);
                                                              } else {
                                                                if (status === X++) {
                                                                  cm.sendNormalTalk_Bottom("好……！那我会努力的！", 57, 0, true, true, 1, 0);
                                                                } else {
                                                                  if (status === X++) {
                                                                    cm.fieldEffect_PlayBGM("BgmEvent/mapleLIVE_pinkbean", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === X++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", 'oid=0'], [0, 20, 0, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === X++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##fs24# #fc0xffffaabb#呵呵呵，各位！那么我的全新大作！", 37, 9062554, false, true, 1, 0);
                                                                      } else {
                                                                        if (status === X++) {
                                                                          cm.sendNormalTalk_Bottom("#face0##fs24# #fc0xffffaabb#创作者新人养成记！就麻烦你了~！", 37, 9062554, true, true, 1, 0);
                                                                        } else {
                                                                          if (status === X++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Freinds/crowd2", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === X++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=0"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              cm.effect_Voice("SoundEff.img/Guitar_noise4", 100);
                                                                            } else if (status === X++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.克里塞_获得技能();
                                                                              cm.warp(993194000, 8, true);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.updateInfoQuest(501469, "mapTuto=2;month=1");
                                                                              cm.npc_LeaveField("oid=17415313");
                                                                              cm.npc_LeaveField("oid=17415314");
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