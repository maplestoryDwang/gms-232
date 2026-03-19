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
      cm.npc_ChangeController(3001657, "oid=375477", 400, 32, 0, 350, 450, 1, false, 0, false);
      cm.npc_ChangeController(3001658, "oid=375478", 287, 32, 0, 237, 337, 0, false, 0, false);
      cm.npc_ChangeController(3001687, 'oid=375479', 1118, 35, 81, 1110, 1195, 5, true, 0, false);
      cm.npc_ChangeController(3001688, 'oid=375480', 1336, 35, 81, 1262, 1362, 2, true, 0, false);
      cm.npc_ChangeController(3001656, "oid=375481", 19, 35, 32, -31, 69, 0, false, 0, false);
      cm.npc_ChangeController(3001689, "oid=375482", -786, 35, 25, -823, -769, 5, true, 0, false);
      cm.npc_ChangeController(3001684, "oid=375483", -321, -6, 29, -337, -237, 5, true, 0, false);
      cm.npc_ChangeController(3001687, "oid=375484", -719, 35, 33, -729, -632, 4, true, 0, false);
      cm.npc_ChangeController(3001684, 'oid=375485', -208, 29, 31, -208, -108, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.useItem(2210218, false);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 398, -72);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs18#几日后，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 362, 30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呼……村庄终于恢复了平静。", 37, 3001657, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#就是说啊 。", 37, 3001658, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#被跳蚤蛊惑的鼠精，这事情也太恐怖了。\r\n差一点全村人都要落入那帮家伙之手……", 37, 3001657, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#老鼠和跳蚤……这些家伙是不想变得微不足道，才会发起最后的挣扎吗？\r\n不过还是用错了方法。", 37, 3001658, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#情感倒是挺丰富的嘛，呵呵……", 37, 3001657, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你啊……难得回到故乡，也算经历过什么是残酷了。", 37, 3001657, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那是相当可怕啊，不过我也算找到了一个不错的写作素材，我打算借此机会好好倾诉一下，\r\n难道说，这反而是好事？", 37, 3001658, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这个人也真是的！", 37, 3001657, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#为了拯救村庄，让村庄免于俊秀法师——鼠精的毒手而奋斗！\r\n如此崇高的志向造就了这段感人的奇迹故事！", 37, 3001658, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……作为我的新书题材，怎么样？销量应该能轻轻松松过一千万吧？", 37, 3001658, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#先用用看再说吧！", 37, 3001657, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#呵呵……你是信不过我吗……", 37, 3001658, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 760, 30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……不过我怎么感觉好像只提到了俊秀法师。", 37, 3001651, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呼……有点可惜啊！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(3001651, "oid=3028269", 760, 4, 66, 710, 810, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=3028269", "summon", 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#也对，知道那座法堂里事情的人应该没几个，\r\n真要觉得委屈，不如直接写在脑门上如何？", 37, 3001651, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你以为我会做那种事吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face11#其实吧，无所谓，有时候故事真正的主人公会在背后大展身手，\r\n书中的那个道士也是如此。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face9#我不过就是个路过的道士……\r\n呵呵……我终于也能说上这句台词了吗！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#就看故事怎么包装了。", 37, 3001651, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#又来找茬吗！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('#face0#哼！', 37, 3001651, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#话说回来，酒馆里并没能得到什么令人感兴趣的情报，\r\n关于村外的……不错情报，要上哪儿去找呢？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#唔……要不是你这家伙把那些怪物放了出去……", 37, 3001651, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face11#过去的事就忘了吧，我这不是为了帮你找到肚子里的怪物\r\n都到村子外面来了嘛，我虎影这次可是亲自出马啊。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#（……坦白说，我确实挺好奇外面的世界的，不过。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#要是你再敢胡来，小心我一口吞了你！", 37, 3001651, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face12#是~是~我明白了，饕餮。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=3028269", 'special2', 1000, 1);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=3028269");
                                                                                          cm.npc_LeaveField("oid=3028269");
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.gainExp(2227);
                                                                                            cm.gainExp(7675);
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
                                                                                                  cm.warp(410000200, 3, false);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  cm.eventSKill(0);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                  cm.dispose();
                                                                                                  cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h1;82=h0;25=h0;06=h0;84=h1;27=h0;08=h0;85=h0;28=h0;09=h1;29=h1");
                                                                                                  cm.forceCompleteQuest(39540);
                                                                                                  cm.updateInfoQuest(25980, "normal=#;hard=#");
                                                                                                  cm.forceForfeitQuest(39595);
                                                                                                  cm.forceForfeitQuest(39596);
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}