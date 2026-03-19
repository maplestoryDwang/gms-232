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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 89, -680);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2550003, "oid=1749508", 443, -750, 54, 393, 493, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=1749508", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_Text(["#fn黑体##fs18#5年后……雪原的某处。"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/0", 100);
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/2", 100);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1749508", -1, 150, 100);
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/3", 100);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_snow/1", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("呃呃呃，好冷……这鬼地方怎么这么冷啊？", 37, 2550003, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("话说，这是哪里啊……\r\n连个人影都看不见。", 37, 2550003, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(2550009, "oid=1749651", -100, -750, 46, -150, -50, 1, true, 3000, false);
                              cm.npc_SetSpecialAction("oid=1749651", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster", 100);
                                cm.sendNormalTalk_Bottom('嘤？', 37, 2550009, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("啊？终于找到了！快过来～可爱的小家伙。", 37, 2550003, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=1749651", 1, 3, 300);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster", 100);
                                    cm.sendNormalTalk_Bottom("嘤？呼噜噜噜", 37, 2550009, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯？怎么感觉有点……", 37, 2550003, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你怎么了？怎么生气了？", 37, 2550003, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=1749651", 1, 3, 300);
                                            cm.sendNormalTalk_Bottom('呼噜噜噜噜', 37, 2550009, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("呃……那等你不生气了再来，好吗？", 37, 2550003, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster", 100);
                                                cm.npc_SetSpecialAction("oid=1749651", "attack", 0, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("哎？！", 37, 2550003, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setAmbience("Bgm48.img/noname", 100, 60);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setNpcSpecialActionReset("oid=1749651");
                                                      cm.npc_SetSpecialAction("oid=1749651", "attack2", 0, 1);
                                                      cm.sendNormalTalk_Bottom("…………", 37, 2550009, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setNpcSpecialActionReset("oid=1749651");
                                                          cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004987, 1102039, 1353300]);
                                                          cm.sendNormalTalk_Bottom("哎，一听到音乐就安静下来了嘛？", 37, 2550003, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -40, -850);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("这附近一定有幼崽。\r\n平时再怎么温顺的家伙，为了保护幼崽也会凶残起来的。", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 140, -750);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这我也知道好吗。话说，你是哪位？", 37, 2550003, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我？我只是个路过的吟游诗人。", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("艺名是……嗯，叫什么好呢？", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("谁问你艺名了？阿嚏……", 37, 2550003, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("(嗯？你不会就穿着这一身单薄的衣服，一路来到这里的吧？)", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("啊……啊啊……", 37, 2550003, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004991, 1102039, 1353300]);
                                                                                      cm.playSoundEffDirectly("Bgm48.img/noname");
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/chu", 100);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Guitar_noise2", 100);
                                                                                      cm.sendNormalTalk_Bottom("#fs18#阿嚏！！", 37, 2550003, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('啊，琴弦断了。', 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=1749651", "attack", 0, 1);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster", 100);
                                                                                          cm.sendNormalTalk_Bottom('呼噜噜噜噜', 37, 2550009, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("哎呀？", 37, 2550003, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=1749651", "attack", 0, 1);
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 150, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 119, -756);
                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/Aran1", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Guitar_noise3", 100);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/hardHit", 100);
                                                                                                    cm.npc_SetSpecialAction("oid=1749651", "die1", 0, 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    cm.effect_Voice("Mob.img/9309104/Die", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("糟了，我又习惯性地拿天琴弓做武器了。\r\n迈勒又该唠叨了。", 57, 0, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("啊……啊啊！！！我找了四天才找到它啊！！你赔我！", 37, 2550003, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("啊……啊……阿嚏！！", 37, 2550003, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                            cm.sendNormalTalk_Bottom('冒冒失失的小姑娘啊。', 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("嘴唇都冻紫了嘛。\r\n我请你喝杯热茶吧。", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("可是……", 37, 2550003, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我帮你抓一只别的就是了。\r\n不赶快暖暖身子，感冒可就好不了了。", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("嗯？唔……好吧。那我们说好了。", 37, 2550003, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_Monologue("曾经也是个可爱的小姑娘。", 0);
                                                                                                                          cm.effect_Voice("Voice3.img/DLep4/d/d_1.mp3", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_Monologue("和雪山深处的环境一点也不相符的服装……为什么呢？", 0);
                                                                                                                            cm.effect_Voice("Voice3.img/DLep4/d/d_2.mp3", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_Monologue("这个嘛，我也不清楚。", 0);
                                                                                                                              cm.effect_Voice("Voice3.img/DLep4/d/d_3.mp3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("这个世界本来就混乱不堪，穿着打扮奇怪也没什么好惊讶的。", 0);
                                                                                                                                cm.effect_Voice("Voice3.img/DLep4/d/d_4.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.updateInfoQuest(32672, "dir=1");
                                                                                                                                    cm.eventSKill(0);
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(306000000, 0, true);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.npc_LeaveField("oid=1749508");
                                                                                                                                    cm.npc_LeaveField("oid=1749508");
                                                                                                                                    cm.npc_LeaveField("oid=1749651");
                                                                                                                                    cm.npc_LeaveField("oid=1749651");
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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