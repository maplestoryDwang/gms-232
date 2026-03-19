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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(2052014, "oid=38469469", 450, -20, 25, 400, 500, 1, true, false);
      cm.npc_SetSpecialAction("oid=38469469", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("260！261！262！", 37, 2052015, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(额，这么快？)#k", 37, 2052014, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("阿琳？别一个人往前跑，有危险。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不能就这么结束！我可以做到的！", 37, 2052014, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不要犹豫！不要退却！宋琳儿！", 37, 2052014, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 440, 77);
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
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38469469"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                      cm.npc_ChangeController(2052046, "oid=38471108", 160, -130, 29, 110, 210, 0, false, false);
                      cm.npc_SetSpecialAction("oid=38471108", "summon", 0, 0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 180, -50, 1, 0, 1, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(2052046, "oid=38471109", 80, -130, 29, 30, 130, 0, false, false);
                        cm.npc_SetSpecialAction("oid=38471109", "summon", 0, 0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 100, -50, 1, 0, 1, 1, 0]);
                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(2052046, "oid=38471297", 0, -130, 30, -50, 50, 0, false, false);
                          cm.npc_SetSpecialAction("oid=38471297", "summon", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 20, -50, 1, 0, 1, 1, 0]);
                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(200);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(2052046, "oid=38471299", 160, -70, 16, 110, 210, 0, false, false);
                            cm.npc_SetSpecialAction("oid=38471299", "summon", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 180, 90, 1, 0, 1, 1, 0]);
                            cm.fieldEffect_PlayFieldSound('summon/0', 100);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(2052046, "oid=38471302", 80, -70, 16, 30, 130, 0, false, false);
                              cm.npc_SetSpecialAction("oid=38471302", "summon", 0, 0);
                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 100, 90, 1, 0, 1, 1, 0]);
                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2052046, "oid=38471527", 0, -70, 17, -50, 50, 0, false, false);
                                cm.npc_SetSpecialAction("oid=38471527", "summon", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 20, 90, 1, 0, 1, 1, 0]);
                                cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(2052046, "oid=38471604", 630, 20, 4, 580, 680, 1, false, false);
                                  cm.npc_SetSpecialAction("oid=38471604", "summon", 0, 0);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 630, 70, 1, 0, 1, 1, 0]);
                                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(2052046, "oid=38471606", 710, 20, 11, 660, 760, 1, false, false);
                                    cm.npc_SetSpecialAction("oid=38471606", "summon", 0, 0);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 710, 70, 1, 0, 1, 1, 0]);
                                    cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(2052046, "oid=38471608", 790, 20, 11, 740, 840, 1, false, false);
                                      cm.npc_SetSpecialAction("oid=38471608", "summon", 0, 0);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 790, 70, 1, 0, 1, 1, 0]);
                                      cm.fieldEffect_PlayFieldSound('summon/0', 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                        cm.sendNormalTalk_Bottom("阿琳！被包围了！", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("就这么会儿功夫？！", 37, 2052014, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("接招吧！我要为同伴们报仇！！", 37, 2052046, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=38471299", "attack", -1, 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=38471527", "attack", -1, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=38471109", "attack", -1, 1);
                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                  cm.npc_SetSpecialAction("oid=38471108", 'attack', -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=38471608", "attack", -1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=38471297", "attack", -1, 1);
                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=38471302", "attack", -1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                        cm.npc_SetSpecialAction("oid=38471604", 'attack', -1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=38471606", "attack", -1, 1);
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_头顶图片(["Npc/2052046.img/attack/hit", "oid=38469469"], [0, 0, -40, 1, 0, 1, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                          cm.inGameDirectionEvent_AskAnswerTime(430);
                                                          cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r啊啊啊！！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 2052014, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Npc/2052046.img/attack/hit", "oid=38469469"], [0, 10, -20, 1, 0, 1, 0, 0]);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(350);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Npc/2052046.img/attack/hit", "oid=38469469"], [0, 20, -30, 1, 0, 1, 0, 0]);
                                                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Npc/2052046.img/attack/hit", "oid=38469469"], [0, 0, -25, 1, 0, 1, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(370);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('我会救你的！', 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Die", 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Die", 200);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Die", 200);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Die", 200);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("居然这么厉害……", 37, 2052046, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("不过我不会就这么结束的！发，发射！", 37, 2052046, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9500373/Attack1", 200);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 100);
                                                                                      cm.sendNormalTalk_Bottom("#face2#啊！", 37, 2052004, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/omegaSector/badge/3", 0, 1000, 0, 0, 20, 4, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face2#额！！不可以！徽章！！", 37, 2052004, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm22.img/DespairOnDevil", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_LeaveField("oid=38469469");
                                                                                              cm.npc_LeaveField("oid=38469469");
                                                                                              cm.npc_LeaveField("oid=38471108");
                                                                                              cm.npc_LeaveField("oid=38471108");
                                                                                              cm.npc_LeaveField("oid=38471109");
                                                                                              cm.npc_LeaveField("oid=38471109");
                                                                                              cm.npc_LeaveField("oid=38471297");
                                                                                              cm.npc_LeaveField("oid=38471297");
                                                                                              cm.npc_LeaveField("oid=38471299");
                                                                                              cm.npc_LeaveField("oid=38471299");
                                                                                              cm.npc_LeaveField("oid=38471302");
                                                                                              cm.npc_LeaveField("oid=38471302");
                                                                                              cm.npc_LeaveField("oid=38471527");
                                                                                              cm.npc_LeaveField("oid=38471527");
                                                                                              cm.npc_LeaveField("oid=38471604");
                                                                                              cm.npc_LeaveField("oid=38471604");
                                                                                              cm.npc_LeaveField("oid=38471606");
                                                                                              cm.npc_LeaveField("oid=38471606");
                                                                                              cm.npc_LeaveField("oid=38471608");
                                                                                              cm.npc_LeaveField("oid=38471608");
                                                                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 387, 1);
                                                                                              cm.npc_ChangeController(2052027, "oid=38476291", 500, -20, 25, 450, 550, 1, true, false);
                                                                                              cm.npc_SetSpecialAction("oid=38476291", "summon", 0, 0);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 440, 30);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                      cm.sendNormalTalk_Bottom("哈哈哈，三百个完成！", 37, 2052015, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#喂！你是在撒谎吧！", 37, 2052013, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#我，我，我没有撒谎~来，那就先从我们开始下去了~ ", 37, 2052015, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face4#徽章……变身……", 37, 2052027, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face4#现在全都不对了……", 37, 2052027, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("没，没关系的，下去之后能找到的。", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#对不起……那个徽章……其实本来应该是你的。", 37, 2052027, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#滋滋滋滋……遥控飞机这么快就变多了。\r\n我会传送物品的，通讯很快就会中断的。", 37, 2052006, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_ChangeController(2052038, "oid=38478919", 387, 10, 25, 337, 437, 0, false, false);
                                                                                                                          cm.npc_SetSpecialAction("oid=38478919", "summon", 0, 0);
                                                                                                                          cm.npc_SetSpecialAction("oid=38478919", "special", 1, 1);
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.dispose();
                                                                                                                          cm.warp(221030730, 1);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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