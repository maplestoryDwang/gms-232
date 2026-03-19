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
      cm.npc_ChangeController(9400932, "oid=19757028", -560, 295, 8, -610, -510, 0, true, false);
      cm.npc_SetSpecialAction("oid=19757028", "summon", 0, 0);
      cm.setAmbience("PL_Sound.img/myHome/bird", 100, 60);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
      cm.npc_SetForceMove("oid=19757028", 1, 700, 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs20#传来叫声的森林"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.sendNormalTalk_Bottom("#b……目前还很安静呢。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('#face0#嘘！', 37, 9400923, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/bush1", 100);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=19757028"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#b？！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9400934, "oid=19757075", 490, 295, 15, 440, 540, 0, true, false);
                    cm.npc_SetSpecialAction("oid=19757075", "summon", 0, 0);
                    cm.updateInfoQuest(64625, "wolf=2");
                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/bush2", 100);
                    cm.sendNewEffects(17, [3000, 1000, 2000, 400, 320]);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=19757075", -1, 50, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#……这里的路好像走过呢……哎", 37, 9400925, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=19757075"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                          cm.npc_setForceFlip("oid=19757075", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=19757075", 1);
                            cm.npc_SetForceMove("oid=19757075", 1, 30, 100);
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/bush1", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=19757075", -1);
                              cm.npc_SetForceMove("oid=19757075", -1, 30, 100);
                              cm.sendNormalTalk_Bottom("#b！！！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=19757075"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face3#哎呀！！！！！！！！吓到我了！是……是人！是人吧？这里是凯兰西亚吧？", 37, 9400925, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=19757075", -1, 80, 100);
                                    cm.sendNewEffects(13, [1000, -150, 0, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('#b…？！', 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#…？！", 37, 9400923, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=19757028", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#刚……刚才那个是狼人在说话？", 37, 9400923, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b天啊……", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=19757028", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我可没听说过这世界上有会说话的狼人！", 37, 9400923, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#呵呵，我确实挺特别的哦？我叫做杰弗里，我不是危险的狼人，请不要担心。", 37, 9400925, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#啊！不要靠近！站住！", 37, 9400923, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=19757028", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=19757028", -1, 100, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=19757028", 1);
                                                            cm.sendNormalTalk_Bottom("#b你为什么，为什么要去凯兰西亚？", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#为什么要去？因为我也想住在那里啊！在漂亮的家里和亲切的邻居一起！", 37, 9400925, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#可你是狼人啊！", 37, 9400923, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我是狼人又有什么问题？", 37, 9400925, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#当，当然有问题！你是折磨人类的怪，怪物啊！", 37, 9400923, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#……我不是……怪物……", 37, 9400925, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=19757075"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#我发誓我至今为止从未伤害过或者抓过人。我看到血就会晕倒，吃肉的话就会过敏，怎么可能会害人呢？我因为先天体弱，经常生病，被父母抛弃了。在族群中更是被孤立了…… ", 37, 9400925, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#我真的是抱着最后的希望来到这里的。我的梦想就是在凯兰西亚建一个漂亮的蘑菇屋，做素食披萨……仅此而已。", 37, 9400925, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b…", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#呜呜……太令人悲伤了……别说了……", 37, 9400923, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(19, [0]);
                                                                                } else if (status === V++) {
                                                                                  cm.eventSKill(0);
                                                                                  cm.warp(871000002, 1);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.forceCompleteQuest(64620);
                                                                                  cm.npc_LeaveField("oid=19757028");
                                                                                  cm.npc_LeaveField("oid=19757075");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;