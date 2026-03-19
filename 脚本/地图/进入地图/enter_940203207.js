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
      cm.npc_ChangeController(3004043, 'oid=257808', 9, -129, 34, -41, 59, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.Hidden_background("402000301_tag", 1, 1, 0, 0);
      cm.Hidden_background("402000301_tag2", 1, 1, 0, 0);
      cm.Hidden_background("light", 1, 1, 0, 0);
      cm.Hidden_background("light2", 1, 0, 0, 0);
      cm.npc_ChangeController(3004017, "oid=7133738", -600, 0, 54, -650, -550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133738", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7133739", -520, 0, 54, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133739", 'summon', 0, 0);
      cm.npc_ChangeController(3004020, "oid=7133740", -460, 0, 54, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133740", "summon", 0, 0);
      cm.npc_ChangeController(3004020, "oid=7133741", -300, 0, 52, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133741", "summon", 0, 0);
      cm.npc_ChangeController(3004020, "oid=7133742", -220, 0, 52, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133742", 'summon', 0, 0);
      cm.npc_ChangeController(3004021, "oid=7133743", -160, 0, 52, -210, -110, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133743", "summon", 0, 0);
      cm.npc_ChangeController(3004021, "oid=7133744", -80, 0, 53, -130, -30, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133744", "summon", 0, 0);
      cm.npc_ChangeController(3004022, "oid=7133745", 120, 0, 53, 70, 170, 1, true, false);
      cm.npc_SetSpecialAction("oid=7133745", "summon", 0, 0);
      cm.npc_ChangeController(3004022, "oid=7133746", 200, 0, 57, 150, 250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7133746", 'summon', 0, 0);
      cm.npc_ChangeController(3004017, "oid=7133747", 360, 0, 57, 310, 410, 1, true, false);
      cm.npc_SetSpecialAction("oid=7133747", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7133748", 420, 0, 57, 370, 470, 1, true, false);
      cm.npc_SetSpecialAction("oid=7133748", "summon", 0, 0);
      cm.npc_ChangeController(3004017, "oid=7133749", 550, 0, 58, 500, 600, 1, true, false);
      cm.npc_SetSpecialAction("oid=7133749", 'summon', 0, 0);
      cm.npc_ChangeController(3004020, "oid=7133750", -155, -124, 1, -205, -105, 0, true, false);
      cm.npc_SetSpecialAction("oid=7133750", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -628, -60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 690, -91);
        cm.npc_ChangeController(3004000, "oid=7133753", 784, -117, 41, 734, 834, 1, true, false);
        cm.npc_SetSpecialAction("oid=7133753", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("#face0#看到了吗？布上堆的东西。", 37, 3004000, false, true);
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
              cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
              cm.sendNormalTalk_Bottom("嗯，我们要找的东西就是它吗……", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("但敌人太多了。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#没关系，我已经在附近设置了炸弹。", 37, 3004000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(100, 1500, 100, 752, -70);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("炸弹？", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7133749", 1);
                          cm.sendNormalTalk_Bottom('#face0#？', 37, 3004017, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=7133749", 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嘘！", 37, 3004000, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#好好听着。比赛开始后，我就会闯进去，吸引他们的注意力。", 37, 3004000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#会场乱作一团后，你就打开装置电源，把东西传送到豪华观光办公室。", 37, 3004000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("办公室？", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#图鲁那家伙也不会傻成那样。\r\n要是他听说东西又消失了，肯定会用其他方法弥补损失的。", 37, 3004000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("其他方法……？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#荒蛮终点站有的商人被当成奴隶，你知道我说这话的意思吧？", 37, 3004000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("塞妮娅处境会很危险吗……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#所以，为了让那家伙感到安心，我们得先把东西给他。", 37, 3004000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#马上就开始了。准备好要上台了。", 37, 3004000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -25, -120);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), 150, -134);
                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                          cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#好了，斗战俱乐部的对决开始！", 37, 3004016, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#绿队～胖神！", 37, 3004016, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=7133740", "attack1", 2000, 1);
                                                                  cm.npc_SetSpecialAction("oid=7133741", "attack1", 3200, 1);
                                                                  cm.npc_SetSpecialAction("oid=7133744", "attack1", 2600, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                    cm.npc_SetSpecialAction("oid=7133747", "attack1", 3700, 1);
                                                                    cm.npc_SetSpecialAction("oid=7133748", "attack1", 2600, 1);
                                                                    cm.npc_SetSpecialAction("oid=7133741", "attack1", 3200, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=7133743", "attack1", 4000, 1);
                                                                      cm.npc_SetSpecialAction("oid=7133739", "attack1", 2600, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=7133745", "attack1", 2000, 1);
                                                                        cm.npc_SetSpecialAction("oid=7133742", "attack1", 3700, 1);
                                                                        cm.userSetFieldFloating(940203207, 3, 3, 3);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.userSetFieldFloating(940203207, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#红队～荒蛮终点站最厉害的麻烦制造者黑鸦的助手！！", 37, 3004016, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=7133740", "attack1", 2000, 1);
                                                                              cm.npc_SetSpecialAction("oid=7133741", "attack1", 3200, 1);
                                                                              cm.npc_SetSpecialAction("oid=7133744", "attack1", 2600, 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                                cm.npc_SetSpecialAction("oid=7133747", "attack1", 3700, 1);
                                                                                cm.npc_SetSpecialAction("oid=7133748", 'attack1', 2600, 1);
                                                                                cm.npc_SetSpecialAction("oid=7133741", 'attack1', 3200, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=7133743", "attack1", 4000, 1);
                                                                                  cm.npc_SetSpecialAction("oid=7133739", "attack1", 2600, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=7133745", "attack1", 2000, 1);
                                                                                    cm.npc_SetSpecialAction("oid=7133742", "attack1", 3700, 1);
                                                                                    cm.userSetFieldFloating(940203207, 3, 3, 3);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.userSetFieldFloating(940203207, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#好的，那么比赛～开～始～～", 37, 3004016, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.Hidden_background("light", 1, 0, 0, 0);
                                                                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 0, 0);
                                                                                            cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('#face0#！！', 37, 3004016, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#呼呼呼。", 37, 3004000, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#谁来照下我的上面。", 37, 3004016, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_ChangeController(3004000, "oid=7134679", -23, -765, 21, -73, 27, 1, true, false);
                                                                                                    cm.npc_SetSpecialAction("oid=7134679", "summon", 0, 0);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(300, 1000, 300, -25, -550);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 0, 0);
                                                                                                        cm.Hidden_background("light2", 1, 1, 0, 0);
                                                                                                        cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#什，什么？黑鸦你这家伙啊！！你在那里干什么？", 37, 3004016, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, -25, -680);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#朦胧月色下，暗影横出世，\r\n我就是恶臭垃圾堆中横空诞生的乱世英雄。", 37, 3004000, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#有什么不明白的问题吗？\r\n你被人威胁了吗？你在找什么神秘物品吗？", 37, 3004000, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那么……没时间了，后面的我就不说了。", 37, 3004000, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, -25, -679);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 10, 0);
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fs20#看！侦探黑鸦登场了！", 37, 3004000, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("你还是坚持到底呢……", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#好的，现在按下按钮……", 37, 3004000, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#嗯？为什么不行？", 37, 3004000, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3004000, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#华生，你能帮我拖延点时间吗？", 37, 3004000, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(200, 2000, 200, 144, -80);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("（叹气）……", 57, 0, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                        cm.dispose();
                                                                                                                                                        cm.warp(940203270, 0);
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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