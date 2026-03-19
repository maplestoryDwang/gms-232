var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 558, -242);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003502, "oid=3055405", -440, -247, 49, -490, -390, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3055405", "summon", 0, 0);
        cm.npc_ChangeController(3003500, "oid=3055406", -608, -247, 49, -658, -558, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3055406", "summon", 0, 0);
        cm.npc_ChangeController(3004863, "oid=3055407", 122, -650, 36, 72, 172, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=3055407", 'summon', 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -514, -247);
        cm.setNPC_Fadein(3003500, 1);
        cm.setNPC_Fadein(3003502, 1);
        cm.sendNormalTalk_Bottom('这里是……', 56, 0, false, true, 1);
      } else {
        if (status === V++) {
          cm.npcMove(3004863, 0, 550, 8000);
          cm.fieldEffect_PlayBGM("Bgm55/WhereStarsRest", 0, 0);
          cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 558, 120);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("好美……", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -565, -195);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=3055407");
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#哎呀，海里很清静嘛？完全没看见怪物。", 36, 3003502, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#哦……哦？奇怪。\r\n我进来的时候，明明不是这样的……", 36, 3003500, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(993185003, 1, 1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("SoundEff.img/barrier0", 100);
                                  cm.userSetFieldFloating(993185003, 0, 0, 0);
                                  cm.npc_ChangeController(3004852, "oid=3055423", -748, -600, 8, -798, -698, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=3055423", 'summon', 0, 0);
                                  cm.npc_ChangeController(3004852, "oid=3055424", -770, -530, 15, -820, -720, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=3055424", "summon", 0, 0);
                                  cm.npc_ChangeController(3004852, "oid=3055425", -700, -530, 13, -750, -650, 0, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=3055425", "summon", 0, 0);
                                  cm.sendNormalTalk_Bottom("啊！撞到东西了！", 56, 0, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#出现了！应该是上次那怪物！", 36, 3003500, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -666, -394);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3055423"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=3055423", 0, 1000);
                                            cm.Npc_Fadeout("oid=3055424", 0, 1000);
                                            cm.Npc_Fadeout("oid=3055425", 0, 1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#哦……？？", 36, 3003500, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -565, -195);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#没看出你是这样的人，还挺会夸张的，沃莉。", 36, 3003502, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#不……不是这样的……为什么……", 36, 3003500, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                          cm.sendNormalTalk_Bottom("#face2#大海变得浑浊，是受到了光明超越者#b艾欧娜#k的影响。", 36, 1540451, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('南哈特？', 56, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#沃莉把她打捞出来已经过了很长时间，\r\n大海自主净化了也很正常。", 36, 1540451, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#啊！所以……。", 36, 3003500, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#先不说这个，休麦，情况怎么样？", 36, 1540451, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#目前还挺顺利。\r\n大海也很平静，估计作战会进行得很轻松。", 36, 3003502, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#幸好。", 36, 1540451, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#为方便探索，我在潜水艇上装了#b声呐#k。\r\n它会帮你们探测出附近的#r高能量#k。", 36, 1540451, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                          cm.sendNormalTalk_Bottom("#face2#虽然有点超出预算……（嗞嗞）", 36, 1540451, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#启动方法……（嗞嗞）休麦（嗞嗞）知道。\r\n哎呀……电波好像中断……（嗞嗞）", 36, 1540451, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#既然要采购，索性把通讯设备也换了嘛？", 36, 3003502, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                cm.sendNormalTalk_Bottom("#face2#（嗞嗞）改良装备的目录……在那里……（嗞嗞嗞嗞）", 36, 1540451, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#喂，总部。呼叫总部！", 36, 3003502, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#……（嗞嗞）……", 36, 3004861, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#嗯……完全中断了。", 36, 3003502, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#能给我看一下吗？", 36, 3003500, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#噢？沃莉她？", 36, 3003502, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("额，要不还是算了吧……", 56, 0, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#交给我吧。\r\n我有办法对付不听话的机器。", 36, 3003500, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/missile2", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/missile2", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#（嗞嗞）……（嗞嗞）……", 36, 3004861, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#干脆，给他安乐死了啊。也对，是时候该离开了。", 36, 3003502, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#我……我很抱歉。", 36, 3003500, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这个可以慢慢修理，在附近找个合适的地方停下来吧。", 36, 3003502, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我们得启动南哈特下了很大决心配备的声呐吧？", 36, 3003502, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else if (status === V++) {
                                                                                                                        cm.forceCompleteQuest(37905);
                                                                                                                        cm.gainExp(132738181);
                                                                                                                        cm.updateInfoQuest(37900, "00=h0;01=h0;20=h0;02=h1;21=h1;03=h0;41=h0;24=h1;25=h1;09=h0");
                                                                                                                        cm.updateInfoQuest(37900, "00=h0;01=h0;20=h0;02=h1;21=h0;03=h0;41=h0;24=h1;25=h1;09=h0");
                                                                                                                        cm.npc_LeaveField("oid=3055405");
                                                                                                                        cm.npc_LeaveField("oid=3055406");
                                                                                                                        cm.npc_LeaveField("oid=3055423");
                                                                                                                        cm.npc_LeaveField("oid=3055424");
                                                                                                                        cm.npc_LeaveField("oid=3055425");
                                                                                                                        cm.dispose();
                                                                                                                        cm.warp(450016000, 0, false);
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}