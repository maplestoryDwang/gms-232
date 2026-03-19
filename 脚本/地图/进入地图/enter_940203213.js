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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004001, "oid=7156245", 140, 113, 4, 90, 190, 0, true, false);
      cm.npc_SetSpecialAction("oid=7156245", "summon", 0, 0);
      cm.npc_ChangeController(3001259, "oid=7156246", 400, 113, 6, 350, 450, 1, false, false);
      cm.npc_SetSpecialAction("oid=7156246", 'summon', 0, 0);
      cm.npc_ChangeController(3004002, "oid=7156247", 500, 113, 7, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7156247", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 325, 140);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_Text(["#fn黑体##fs18#另外，同一时间的豪华观光办公室……"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                cm.sendNormalTalk_Bottom("#face0#返回的飞艇已经进入了卫星轨道。", 37, 3004015, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#即将返回的飞艇也到达了……达到临界点也好像没剩下多长时间了。", 37, 3004001, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我们的侦探应该要出现了……", 37, 3004001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#在等我吗？", 37, 3004000, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7156245"], [0, 0, -20, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7156246"], [0, 0, -20, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7156247"], [0, 0, -20, 1, 0, 1, 0, 0]);
                          cm.npc_ChangeController(3004000, "oid=7156555", 300, 113, 6, 250, 350, 1, true, false);
                          cm.npc_SetSpecialAction("oid=7156555", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#月夜暗黑侦探黑鸦登场了！", 37, 3004000, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#感觉台词好像变短了不少呢！", 37, 3004001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#情况有点紧急，还请谅解！", 37, 3004000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这种情况下也还是说了。", 37, 3001259, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#太晚了呢！！", 37, 3004002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#废话就别说了。\r\n那家伙应该有#b让净化装置停止的遥控器#k！", 37, 3001259, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我们一起发动夹击吧！三对一我们肯定可以取胜。（恐怕也……）", 37, 3001259, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#对手是女人虽然有点过意不去，但这也没办法。怎么样，图鲁？", 37, 3004000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#我，我也？呃……没办法。", 37, 3004002, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#呼呼，好像会很有意思呢！", 37, 3004001, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#好的，那么。", 37, 3004000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_running2", 250);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7156245"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#天啊？对不起，各位。\r\n大家都应该看到了，机器……能量差不多准备好了。", 37, 3004001, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#同时和三位对抗我可能会觉得有些吃力……", 37, 3004001, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#什么呀？！你该不会现在让我们更改吧？嗯？\r\n要是你趴下求我，说不定我可以就这么算了。", 37, 3004002, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#嗯……啊！我想到一个好办法。拉宝拉，传送器还可使用吗？", 37, 3004001, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                cm.sendNormalTalk_Bottom("#face0#可以使用2次，主人。", 37, 3004015, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这样做怎么样？我们把三人中的一人接纳为我们的家人。\r\n并承诺将#r安哥拉公司#k的财富、权力和强大力量分给他。", 37, 3004001, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这样一来，局面就变成二对二了……", 37, 3004001, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#我！！！我！！我要去！", 37, 3004002, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#对不起，代表。我想带走#b黑鸦侦探#k。", 37, 3004001, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#黑鸦！你该不会想背叛我们吧？", 37, 3004002, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哎呀……", 37, 3001259, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#怎么可能！在此，我拒绝你的邀请，塞妮娅。", 37, 3004000, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#那就没办法了！那么，代表你要不要去呢？", 37, 3004001, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#呵呵，真是的，那没办法了。来吧，黑鸦！考尔保！", 37, 3004002, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#face0#……', 37, 3001259, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你是来真的吗，图鲁？如果不立刻让净化装置停下来，荒蛮终点站就完了。", 37, 3001259, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#完了？少吓唬人。我也是知道的。\r\n海水被净化后，由于缺乏动力，荒蛮终点站肯定会有很多不便之处，但也换来一个安静舒适的环境，不是吗？", 37, 3004002, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#大家会饥寒交迫，但往好了想，我们会换来蓝色天空和蓝色海洋，所以就忍忍吧！饥饿精神你不知道吗？", 37, 3004002, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#你在说什么呀？净化可不是那意思…… \r\n#fs18#全部都会被烧毁！大家都会死！是这个意思。", 37, 3001259, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#噗嘿嘿，不像话。\r\n你是不是傻得都不知道净化是什么意思了？嗯？", 37, 3004002, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#塞妮娅，你跟这个傻子好好解释一下吧！哈哈哈。", 37, 3004002, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#考尔保说得没错。", 37, 3004001, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#什么？", 37, 3004002, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#考尔保说得没错。", 37, 3004001, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#呃……那么，是……真的？都会被烧毁？", 37, 3004002, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#是的。", 37, 3004001, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#那么我们的办公室和职员们，村里的那些家伙全部？", 37, 3004002, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#怎么了？反正我们会取胜，然后一起离开这里的。", 37, 3004001, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#这个……嗯……确实是……", 37, 3004002, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#……", 37, 3004002, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#但这也……", 37, 3004002, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.userSetFieldFloating(940203213, 10, 10, 30);
                                                                                                                            cm.sendNormalTalk_Bottom("#face2##fs24##r不应该这样吧！！", 37, 3004002, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7156245"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.userSetFieldFloating(940203213, 0, 0, 30);
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#看招！！", 37, 3004000, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 150, 0);
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction21.img/SavageT/illust/4", 0, 150, 0, -80, 12, 4, 0);
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword2", 250);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm47/HuntingGround", 0, 0);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#呃啊！", 37, 3004001, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我的胳膊……", 37, 3004001, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 250);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#第一份算我拿到的吧？", 37, 3004000, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#哎，怪我大意了……", 37, 3004001, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#来，一起上吧！", 37, 3004000, true, true);
                                                                                                                                                } else if (status === V++) {
                                                                                                                                                  cm.dispose();
                                                                                                                                                  cm.warp(940203280, 0);
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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