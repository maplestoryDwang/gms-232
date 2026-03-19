var status = -1;
var selectionLog = [];
var s1 = -1;
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
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 687, -200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993176011, 3, 3, 700);
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 407, -206);
          cm.npc_ChangeController(3004651, "oid=123595144", 340, -200, 38, 290, 390, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=123595144", "summon", 0, 0);
          cm.npc_ChangeController(3004663, "oid=123595145", 1045, -492, 37, 995, 1095, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=123595145", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=123595145", "special3", -1, 1);
          cm.npcMove(3004663, 0, 100, 0);
          cm.onSetMapTagedObjectVisible(1, "reversecity_fire1", 512);
          cm.Npc_Fadeout("oid=123595145", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#下一格就是……", 36, 3004651, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom(" 等等。", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.onSetMapTagedObjectVisible(1, "reversecity_fire1", 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.Hidden_background("reversecity_fire2", 1, 0, 0, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                        cm.userSetFieldFloating(993176011, 10, 10, 5);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(993176011, 3, 3, 700);
                          cm.npc_ChangeController(3004650, "oid=123597485", 910, -492, 37, 860, 960, 1, true, 500, false);
                          cm.npc_SetSpecialAction("oid=123597485", "summon", 0, 0);
                          cm.Npc_Fadeout("oid=123595145", 255, 700);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("T-boy……\r\n到底在干什么，怎么现在才出现？", 56, 0, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哈哈，其实，\r\n在你们赶路的时候，我派出了大批飞行无人机，对铁路进行搜索。", 36, 3004670, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#刚刚……它们发现了你们的据点。", 36, 3004670, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#但是～那里一个人都没有。", 36, 3004670, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#把居民们移走的人是你吧，贝尔？", 36, 3004670, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm54/ReverseCity", 0, 0);
                                          cm.sendNormalTalk_Bottom('#face0#……', 36, 3004651, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction24.img/illust2/9", 0, 2500, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  cm.effect_Text(["#fn黑体##fs18#出发前，地下铁路避难处。", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#拉索尔，我有个特、特别任务要交给你。", 36, 3004651, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#拿着，这是在列车中发现的研究资料和地下铁路的地、地图。\r\n#b(#i4036633# #b#t4036633#)\r\n(#i4036641# #t4036641#)", 36, 3004651, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#为什么……要把这些东西给我？", 36, 3004652, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#T-boy一定会想尽办法找到避难处。\r\n虽然地下铁路非常复、复杂，但只要派出大批无人机，找到你们只是时、时间问题。", 36, 3004651, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#嗯……！", 36, 3004652, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#不过那也意味着地上的监视会相、相对松懈。", 36, 3004651, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#啊！", 36, 3004652, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#只要有了地图，你就能通、通过地下铁路前、前往城市的任何地方。", 36, 3004651, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#找到#r毁灭加速器#k，然后根据研究资料把它拆除掉。", 36, 3004651, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#但是我不知道该怎么拆除。", 36, 3004652, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#别担心。我会告、告诉你。", 36, 3004651, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#大叔……", 36, 3004652, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#你就放心吧！", 36, 3004652, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction24.img/illust2/3", 0, 1000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#你明白得太、太晚了，T-boy。", 36, 3004651, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#现在毁灭加速器应该已、已经被拆除了。", 36, 3004651, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#T-无人机，检查#r毁灭加速器#k的信号。", 36, 3004650, false, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#哔，哔，当前可以启动的毁灭加速器数量为……#b0 个#k。", 36, 3004663, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#你到底是怎么知道拆除方法的……\r\n不，不……算了。", 36, 3004650, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#没关系。只要除掉你们俩，然后重新安装就行。", 36, 3004670, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#没那么容易。\r\n这次我会和这位朋友一、一起战斗。", 36, 3004651, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#一起……？", 36, 3004650, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#哈哈哈，喂，贝尔。\r\n你是又产生了错觉，以为有人能理解自己了吗？", 36, 3004670, false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那种信任之前被辜负了多少次呢？", 36, 3004670, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 36, 3004651, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("（又被卷入进来了……）", 56, 0, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("（应该说点什么呢……）", 56, 0, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.askMenu_Bottom("喂，T-boy！\r\n\r\n#b#L0# 反过来嘲讽他。#l\r\n#L1# 指出那种想法非常幼稚。", 57, 0, 1);
                                                                                                                          } else {
                                                                                                                            if (s1 < 0) {
                                                                                                                              s1 = e;
                                                                                                                            }
                                                                                                                            var O = "action分支" + s1;
                                                                                                                            eval(O)(f, E, e, V);
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("刚才你对我们说的话，难道不是更适合你自己吗？", 56, 0, false, true, 1);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("被当成朋友的人背叛，结果成了孤家寡人，难道不是你的故事吗？", 56, 0, true, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("看吧，这里到底谁才是孤身一人。", 56, 0, true, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#什么……？", 36, 3004650, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("（好像有效果。要再攻击一次吗？）", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("还有一件事！", 56, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("一开始我就觉得很奇怪……", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你该不会是以为只要把世界颠倒过来，你就会变成唯一正常的人吧？", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不好意思，你的这种想法实在是太幼稚了。", 56, 0, true, true, 1);
                    } else {
                      eval("actionEnd")(f, E, e, V);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("一开始我就觉得很奇怪……", 56, 0, true, true, 1);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("你该不会是以为只要把世界颠倒过来，你就会变成唯一正常的人吧？", 56, 0, true, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("不好意思，你的这种想法实在是太幼稚了。", 56, 0, true, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#什么……？", 36, 3004650, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("（好像有效果。要再攻击一次吗？）", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('还有一件事！', 56, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("刚才你对我们说的话，难道不是更适合你自己吗？", 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("被当成朋友的人背叛，结果成了孤家寡人，难道不是你的故事吗？", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("看吧，这里到底谁才是孤身一人。", 56, 0, true, true, 1);
                    } else {
                      eval("actionEnd")(f, E, e, V);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionEnd(f, E, e, V) {
  if (status <= V++) {
    cm.inGameDirectionEvent_AskAnswerTime(1500);
  } else {
    if (status === V++) {
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.npc_SetSpecialAction("oid=123597485", 'special3', -1, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
      cm.sendNormalTalk_Bottom('#face0#……', 36, 3004673, false, true, 1);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=123597485");
          cm.sendNormalTalk_Bottom("#face0#(怎么回事？刚才的反应？)", 36, 3004651, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我刚刚想到了一个好主意。你们想听听吗？", 36, 3004670, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不供应艾尔达，在动力不足的情况下，#fs18##r生成黑洞#k#fs16#。", 36, 3004670, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("什么？", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm54/T-bomb", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#重力装置和装在里面的艾尔达会暴走……\r\n这样重力装置本身就会成为一个#fs18##r巨大的毁灭加速器#k#fs16#。", 36, 3004670, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你可别乱来！那、那样做的话……！", 36, 3004651, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fs18##r整座城市都会毁灭。", 36, 3004670, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你……！", 36, 3004651, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#T-无人机，启动重力装置。", 36, 3004670, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=123595144"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#启动重力装置。", 36, 3004663, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#开始#r生成黑洞#k。\r\n动力缺少73%，核心温度正在急速上升。", 36, 3004663, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#装备发生爆炸的可能性为87%。\r\n如果无法提供额外动力，#r爆炸可能性为99.999999……", 36, 3004663, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你疯了吗？！那样连你也会被卷进去！", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#哦，是吗？那一定很有趣。", 36, 3004670, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#因为我，是真正喜欢享受刺激的人～", 36, 3004670, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("呃，必须马上打倒他……", 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#没用的。比起那个，应该尽快破坏掉重、重力装置。", 36, 3004651, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.userSetFieldFloating(993176011, 0, 0, 300);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 885, -300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你们要去M塔，是吧？要我帮你们一把吗？哈哈哈哈！", 36, 3004671, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.onSetNpcScript("oid=123597485", 1, ['special7', "special8"], [1, -1]);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/tboy2", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.onSetMapObjectMove("reversecity_sky", '01_fast', [2, 1]);
                                                                    cm.userSetFieldFloating(993176011, 13, 13, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setAmbience("SoundEff.img/ReverseCity/subin3", 128, 100);
                                                                      cm.userSetFieldFloating(993176011, 8, 8, 200);
                                                                      cm.sendNormalTalk_Bottom("#face0#列车速度提高300%。", 36, 3004663, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("呃，那个混蛋……！", 56, 0, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#前方有急转弯。\r\n如保持现有速度，30秒后列车将会#r脱轨#k。30、29、28……", 36, 3004663, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#根据我的计算，列车脱轨之后，就会直接撞向#bM塔#k。", 36, 3004671, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#怎么样？我是不是很体贴？哈哈哈哈！！", 36, 3004671, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0##ho#，没时间了！快去收集座、座垫，包在身上！", 36, 3004651, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#我不是说了吗？\r\n重要的不是力量，更不是控制。", 36, 3004670, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#真正重要的是……#fs20##r刻印#k#fs16#。", 36, 3004670, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("你……到底想说什么？", 56, 0, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#把我的名字深深刻印在心里吧。", 36, 3004670, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#我是#fs18##rT-boy。", 36, 3004671, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs18#颠覆你们所相信的一切的人。", 36, 3004671, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.playSoundEffDirectly("SoundEff.img/ReverseCity/subin3");
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/accident", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                          cm.warp(993176012, 0, true);
                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                          cm.setStandAloneMode(false);
                                                                                                          cm.npc_LeaveField("oid=123595144");
                                                                                                          cm.npc_LeaveField("oid=123595145");
                                                                                                          cm.npc_LeaveField("oid=123597485");
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