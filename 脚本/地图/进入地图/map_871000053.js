var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(64905)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, -650, 250]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/firecracker_far", 100);
          cm.sendNewEffects(17, [4000, 2000, 2000, -700, 250]);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9400928, "oid=2515184", -950, 200, 6, -1000, -900, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2515184", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2515184", 'stand', -1, 0);
            cm.npc_ChangeController(9400929, "oid=2515185", -920, 200, 6, -970, -870, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2515185", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2515185", "stand", -1, 0);
            cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2515185"], [20000, 200, 100, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3"], [20000, 300, 150, 1, 0, 1, 0, 0]);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
            cm.askMenu_Bottom("#face3#天哪……哪里来的烟？还有一股特别的火药味……这分明是……\r\n\r\n#b#L0#怪物喷射的烟。#l#k\r\n#b#L1#是爆竹的烟。#l#k", 37, 9400921);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b莫非，年兽已经来了？这可能是怪物喷射的烟雾……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#对！这一定是埃尔宾哥哥说的那种怪物，错不了～！\r\n新年的怪物这么早就出来喷射邪恶的云朵了！", 37, 9400920, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#为打压怪物的嚣张气焰，需要更多的强劲爆竹！#h0#，你在干嘛！快去燃放爆竹啊~！！", 37, 9400920, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=2515184", 1, 600, 300);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#爆竹~ 爆竹~我超稀饭~爆竹游戏~~呀吼！！！", 37, 9400920, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#艾米，等一下！……哎，艾米一心想着玩儿。我们也快点跟上吧！", 37, 9400921, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(17, [0, 2000, 2000, 450, 320]);
                          } else {
                            if (status === V++) {
                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 300);
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                              cm.npc_ChangeController(9400928, "oid=2516347", 20, 300, 91, -30, 70, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516347", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2516347", "stand", -1, 0);
                              cm.npc_ChangeController(9400929, "oid=2516348", -20, 300, 91, -70, 30, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516348", 'summon', 0, 0);
                              cm.npc_SetSpecialAction("oid=2516348", 'stand', -1, 0);
                              cm.npc_ChangeController(9401060, "oid=2516349", 380, 300, 92, 330, 430, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516349", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2516349", "stand", -1, 0);
                              cm.npc_ChangeController(9401061, "oid=2516350", 450, 300, 92, 400, 500, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516350", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2516350", "stand", -1, 0);
                              cm.npc_ChangeController(9401062, "oid=2516351", 690, 300, 93, 640, 740, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516351", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2516351", "stand", -1, 0);
                              cm.npc_ChangeController(9401063, "oid=2516352", 630, 300, 93, 580, 680, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516352", 'summon', 0, 0);
                              cm.npc_SetSpecialAction("oid=2516352", 'stand', -1, 0);
                              cm.npc_ChangeController(9401064, "oid=2516353", 270, 300, 92, 220, 320, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516353", 'summon', 0, 0);
                              cm.npc_SetSpecialAction("oid=2516353", 'stand', -1, 0);
                              cm.npc_ChangeController(9400935, "oid=2516354", 525, 300, 92, 475, 575, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2516354", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2516354", "stand", -1, 0);
                              cm.inGameDirectionEvent_头顶图片(["Map/Obj/myHome.img/direction/NewYear/3", "oid=2516354"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                cm.onSetMapTagedObjectVisible(1, 'f1', 512);
                                cm.onSetMapTagedObjectVisible(1, 'f2', 512);
                                cm.onSetMapTagedObjectVisible(1, 'f3', 512);
                                cm.onSetMapTagedObjectVisible(1, 'f4', 512);
                                cm.onSetMapTagedObjectVisible(1, 'f1', 0);
                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/firecracker_near", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.onSetMapTagedObjectVisible(1, 'f3', 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.onSetMapTagedObjectVisible(1, 'f4', 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.onSetMapTagedObjectVisible(1, 'f2', 0);
                                      cm.setNpcSpecialActionReset("oid=2516349");
                                      cm.setNpcSpecialActionReset("oid=2516350");
                                      cm.setNpcSpecialActionReset("oid=2516351");
                                      cm.setNpcSpecialActionReset("oid=2516352");
                                      cm.setNpcSpecialActionReset("oid=2516353");
                                      cm.sendNormalTalk_Bottom("#face1#哈哈~特鲁迪也来试试吧~", 37, 9400926, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2516353", -1, 1, 100);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2516353"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2516350", -1, 1, 100);
                                            cm.npc_SetForceMove("oid=2516349", -1, 1, 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2516349"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2516350"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2516351"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2516352"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.playSoundEffDirectly("Sound/PL_Sound.img/myHome/firecracker_near");
                                              cm.sendNormalTalk_Bottom("#face0#嗬，大事不妙！", 37, 9401060, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#快逃啊！", 37, 9401061, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2516349", 1, 1000, 300);
                                                  cm.npc_SetForceMove("oid=2516350", 1, 1000, 300);
                                                  cm.npc_SetForceMove("oid=2516351", 1, 1000, 300);
                                                  cm.npc_SetForceMove("oid=2516352", 1, 1000, 300);
                                                  cm.npc_SetForceMove("oid=2516353", 1, 1000, 300);
                                                  cm.npc_SetForceMove("oid=2516347", 1, 400, 100);
                                                  cm.npc_SetForceMove("oid=2516348", 1, 400, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                    cm.sendNormalTalk_Bottom("#b哎呦，火药味！", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#特鲁迪，特鲁迪，你没事吧？", 37, 9400921, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#特鲁迪没关系！特鲁迪很开心！", 37, 9400926, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#嘿，晚了一步！大家玩的时候我也应该一起玩！", 37, 9400920, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#四周遍布爆竹的烟气！特鲁迪，你不感到惊讶吗？", 37, 9400921, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#和初次见面的哥哥姐姐一起~放爆竹~真是太开心了！", 37, 9400926, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#特鲁迪也想一起玩儿……但哥哥姐姐说我会受伤！\r\n所以我只能过过眼瘾！", 37, 9400926, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b那些孩子是谁？", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这个？我也是头一回见。不是我们村里的人吗？", 37, 9400920, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#天啊，你们把我积攒的爆竹都放完了？\r\n那些孩子把我为新年庆典准备的爆竹都放完了！", 37, 9400921, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#马上就到庆典了……\r\n#h0#，你可以帮我寻找迎新爆竹吗？\r\n这个时期，想找到这么多爆竹，恐怕要直接去武陵山买才行。", 37, 9400921, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#你可以在武陵杂货店买100个#b迎新爆竹#k吗？#h0#身手矫健，肯定立马就能搞定吧？", 37, 9400921, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b当然了。你先和特鲁迪玩一会儿。我马上回来！", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.forceCompleteQuest(64900);
                                                                              cm.forceStartQuest(64901, '');
                                                                              cm.forceCompleteQuest(500927);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/UI.img/Invite", 100);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(19, [0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else if (status === V++) {
                                                                                    cm.eventSKill(0);
                                                                                    cm.dispose();
                                                                                    cm.warp(871000000, 1, true);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=2515184");
                                                                                    cm.npc_LeaveField("oid=2515184");
                                                                                    cm.npc_LeaveField("oid=2515185");
                                                                                    cm.npc_LeaveField("oid=2515185");
                                                                                    cm.npc_LeaveField("oid=2516347");
                                                                                    cm.npc_LeaveField("oid=2516347");
                                                                                    cm.npc_LeaveField("oid=2516348");
                                                                                    cm.npc_LeaveField("oid=2516348");
                                                                                    cm.npc_LeaveField("oid=2516349");
                                                                                    cm.npc_LeaveField("oid=2516349");
                                                                                    cm.npc_LeaveField("oid=2516350");
                                                                                    cm.npc_LeaveField("oid=2516350");
                                                                                    cm.npc_LeaveField("oid=2516351");
                                                                                    cm.npc_LeaveField("oid=2516351");
                                                                                    cm.npc_LeaveField("oid=2516352");
                                                                                    cm.npc_LeaveField("oid=2516352");
                                                                                    cm.npc_LeaveField("oid=2516353");
                                                                                    cm.npc_LeaveField("oid=2516353");
                                                                                    cm.npc_LeaveField("oid=2516354");
                                                                                    cm.npc_LeaveField("oid=2516354");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1000, -700, 115]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_Text(["#fn黑体##fs20#第二天早晨"], [100, 5000, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else if (status === V++) {
          cm.warp(871000000, 0, true);
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}