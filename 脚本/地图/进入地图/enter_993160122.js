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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001651, "oid=14041747", -939, -12, 4, -989, -889, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=14041747", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -310, -429);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_Text(["#fn黑体##fs18#青云谷入口", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -310, -81);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=14041747", 1, 470, 180);
                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
                cm.gainSkillBuff(80000268);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -314, 18);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face7#分明入口就在这一带来着……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#总是在同一个地方打转啊，你可知道现在都过去多少时间了！？", 37, 3001651, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#这附近我都看过了，完全看不到入口啊……\r\n哈……我该不会在做梦吧？还是说着了什么道？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=14041747", "special0", 2000, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_skill", 100);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_OneTimeAction(25, 1000);
                                    cm.emotion(1, 3000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face4#哎呀呀……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#至少不像是在做梦。", 37, 3001651, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#我只是打个比方而已，你非得这样心里才痛快吗！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#所以你打算继续这么踌躇下去吗？\r\n时间紧迫，还是想想有没有什么其他办法吧，唔……", 37, 3001651, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#知道了，我想想有什么妙招，你等等。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（为什么看不到入口呢？难道地塌下去了？\r\n该不会是师父回来后把路给弄没了？）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（若是能踩着筋斗云上去？不对……云彩太多了，\r\n反正也看不见什么的，哎……真的有方法吗？）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（哈欠……就没有……什么……好办法吗……）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#这个……杀千刀的家伙！", 37, 3001651, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face7#啊，吓我一跳！", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#还说什么想法子，结果是去梦乡了！？", 37, 3001651, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#这，这些都是我构想中的作战计划的一环，\r\n若是在现实世界里找不到，就在梦里寻找答案，在梦里……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face7#没错，就是这个！", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face7#在梦里的道观看完道术集再出来！", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#瞎说什么呢……", 37, 3001651, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face12#饕餮，暂时不要叫醒我。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（我专注精神回想着道观，\r\n不知不觉间悄然入睡，眼前仿佛出现了那熟悉的风景。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 2);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                } else if (status === V++) {
                                                                                                  cm.warp(993160123, 0, false);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                  cm.npc_LeaveField("oid=14041747");
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