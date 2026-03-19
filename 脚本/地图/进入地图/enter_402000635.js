var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34934) && cm.getQuestStatus(34935) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -610, 56);
      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -600, 120);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001512, "oid=144243313", -980, 20, 6, -1030, -930, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144243313", "summon", 0, 0);
          cm.npc_ChangeController(3001513, "oid=144243314", -900, 20, 6, -950, -850, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144243314", "summon", 0, 0);
          cm.npc_ChangeController(3001510, "oid=144243315", -762, 20, 6, -812, -712, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144243315", "summon", 0, 0);
          cm.npc_SetForceMove("oid=144243315", 1, 150, 120);
          cm.npc_SetForceMove("oid=144243313", 1, 150, 120);
          cm.npc_SetForceMove("oid=144243314", 1, 150, 120);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.sendNormalTalk_Bottom("#face3#叽，叽勒，巴克巴克那个家伙……到底在哪里啊……", 37, 3001510, 0, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -240, -10);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3001509, "oid=144244461", -250, 20, 2, -300, -200, 1, true, 1000, false);
                  cm.npc_SetSpecialAction("oid=144244461", "summon", 0, 0);
                  cm.sendNormalTalk_Bottom("#face2#哈哈，我在这里！", 37, 3001509, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#哎呀，一看到那张脸，就让人生气……果然……应该把他丢在这里，叽勒，切……", 37, 3001510, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#快，快过来，叽勒。我们找到出口了。", 37, 3001510, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#耶，耶。", 37, 3001509, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=144244461", 1);
                          cm.npc_SetForceMove("oid=144243315", 1, 550, 150);
                          cm.npc_SetForceMove("oid=144243313", 1, 550, 150);
                          cm.npc_SetForceMove("oid=144243314", 1, 550, 150);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 600);
                          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 280, -20);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，亚克！你去哪儿，叽勒！？", 37, 3001510, 0, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#呃呃……好痛苦，叽勒……啊，这可怕的电波，我快受不了了……", 37, 3001510, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#真是个可怕的地方。", 37, 3001512, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#必须快点离开这里。", 37, 3001513, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face7#（呃……怎么回事……这种感觉……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#在洞穴中回荡的声音……让我充满了音乐的灵感。", 37, 3001509, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                          cm.emotion(1, 999999);
                                          cm.inGameDirectionEvent_OneTimeAction(4, 999999);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#好了，快走吧。", 37, 3001512, 0, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face7#（……好痛苦。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#哎呀，亚克的状态很不好！", 37, 3001510, 0, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#喂，亚克！", 37, 3001509, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#快醒醒！", 37, 3001512, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/2/0", 0, 1000, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2900);
                                                                  cm.effect_Text(["#fn黑体##fs35#完全不是对手……"], [50, 2400, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.fieldEffect_ProcessOnOffLayer('d1', "Effect/Direction17.img/effect/ark/illust/2/1", 0, 1000, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5600);
                                                                        cm.effect_Text(["#fn黑体##fs35#这……真的是为了和平而发动的战争？"], [50, 5100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(4400);
                                                                          cm.effect_Text(["#fn黑体##fs35#这简直……就是一场屠杀……"], [50, 3900, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('d1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/4", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                                            cm.effect_Text(["#fn黑体##fs65#不行，亚克！！"], [50, 2100, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('d2', "Effect/Direction17.img/effect/ark/illust/2/2", 0, 1000, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/5", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              cm.effect_Text(["#fn黑体##fs35#你疯了吗！？"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3800);
                                                                                cm.effect_Text(["#fn黑体##fs35#阿尔贝……我做不到……"], [50, 3300, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                  cm.effect_Text(["#fn黑体##fs35#这……一定是搞错了。"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/8", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(8600);
                                                                                    cm.effect_Text(["#fn黑体##fs35#别犹犹豫豫的！这种事情，你不是早就做好心理准备了吗！？"], [50, 8100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/9", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4700);
                                                                                      cm.effect_Text(["#fn黑体##fs35#所有的事情都会伴随着牺牲……"], [50, 4200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/10", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5300);
                                                                                        cm.effect_Text(["#fn黑体##fs35#希望能手脚干净，只是荒唐的梦想。"], [50, 4800, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/C/11", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5600);
                                                                                          cm.effect_Text(["#fn黑体##fs35#坚持住……那是我们必须肩负的使命！"], [50, 5100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('d2', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#喂，你醒了吗！？", 37, 3001509, 0, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#亚克的电波消失了，叽勒……叽勒楞。", 37, 3001510, 1, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h1;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                                                                                        cm.updateInfoQuest(34934, "dir=1;exp=1");
                                                                                                        cm.npc_LeaveField("oid=144243315");
                                                                                                        cm.npc_LeaveField("oid=144244461");
                                                                                                        cm.npc_LeaveField("oid=144243313");
                                                                                                        cm.npc_LeaveField("oid=144243314");
                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.setStandAloneMode(false);
                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                              cm.eventSKill(0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.setPartner(1, 3001509, 80002396, 0);
                                                                                                              cm.setPartner(1, 3001512, 80002398, 0);
                                                                                                              cm.setPartner(1, 3001513, 80002399, 0);
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}