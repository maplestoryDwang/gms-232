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
      cm.npc_ChangeController(9400580, "oid=202309", 770, 43, 8, 720, 820, 1, true, false);
      cm.npc_ChangeController(9400584, "oid=202310", 661, 39, 7, 611, 711, 0, true, false);
      cm.npc_ChangeController(9400598, 'oid=202311', 1762, 41, 8, 1712, 1812, 1, true, false);
      cm.npc_ChangeController(9400620, "oid=202312", -882, -63, 1, -932, -832, 1, true, false);
      cm.npc_ChangeController(9400622, "oid=202313", 495, -130, 11, 445, 545, 1, true, false);
      cm.npc_ChangeController(9400581, "oid=202314", 1286, 42, 8, 1236, 1336, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202315", 1356, 42, 8, 1306, 1406, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202316", 1160, 42, 8, 1110, 1210, 0, true, false);
      cm.npc_ChangeController(9400583, 'oid=202317', 864, 43, 8, 814, 914, 1, true, false);
      cm.npc_ChangeController(9400595, "oid=202318", 137, -136, 13, 87, 187, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202319", -947, -63, 1, -997, -897, 1, true, false);
      cm.npc_ChangeController(9400591, 'oid=202320', 54, 9, 6, 4, 104, 0, true, false);
      cm.npc_ChangeController(9400617, 'oid=202321', -753, -56, 2, -803, -703, 0, true, false);
      cm.npc_ChangeController(9400618, 'oid=202322', -625, -47, 3, -675, -575, 1, true, false);
      cm.npc_ChangeController(9400588, "oid=202323", 903, 43, 8, 853, 953, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202324", 546, -139, 11, 496, 596, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=202325", 1100, 43, 8, 1050, 1150, 0, true, false);
      cm.npc_ChangeController(9400589, 'oid=202326', -384, -46, 4, -434, -334, 0, true, false);
      cm.npc_ChangeController(9400592, "oid=202327", -695, -52, 2, -745, -645, 0, true, false);
      cm.npc_ChangeController(9400630, "oid=202328", 121, 15, 7, 71, 171, 0, true, false);
      cm.npc_ChangeController(9400631, "oid=202329", -9, 0, 6, -59, 41, 0, true, false);
      cm.npc_ChangeController(9400587, "oid=202330", -302, -40, 4, -352, -252, 1, true, false);
      cm.npc_ChangeController(9400619, "oid=202331", 180, -21, 9, 130, 230, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400582, "oid=2873747", 530, 20, 7, 480, 580, 1, true, false);
      cm.npc_SetSpecialAction("oid=2873747", "summon", 0, 0);
      cm.npc_ChangeController(9400593, "oid=2873748", 200, 15, 7, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=2873748", 'summon', 0, 0);
      cm.npc_ChangeController(9400629, "oid=2873749", 320, 15, 7, 270, 370, 1, true, false);
      cm.npc_SetSpecialAction("oid=2873749", "summon", 0, 0);
      cm.forceStartQuest(64166, "happy");
      cm.forceStartQuest(64068, '');
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, 500, 50]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2873747", -1, 100, 50);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNewEffects(17, [3000, 2000, 2000, 250, 50]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不过看上去还不错吧？", 37, 9400582, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#栅栏带来的安全感让人无法忽略啊。", 37, 9400582, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                    cm.sendNormalTalk_Bottom("#b是啊，大家的表情都放松了很多。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2873748", 1, 50, 50);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=2873748"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                      cm.effect_PlayMusic("BgmPL2.img/SongOfHawar");
                      cm.effect_NormalSpeechBalloon("逃跑吧，怪物啊，这是最后的机会了~~！", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=2873747"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2873748", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2873748", -1, 50, 50);
                            cm.sendNewEffects(17, [2000, 2000, 2000, 200, 50]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=2873748"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(250);
                              cm.effect_NormalSpeechBalloon("亚皮纳斯骑士守护着我们！", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2873748", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2873748", 1, 50, 50);
                                    cm.sendNewEffects(17, [2000, 2000, 2000, 250, 50]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2250);
                                      cm.effect_NormalSpeechBalloon("他们是谁！保护弱者！", 0, 0, 0, 2000, 9400629, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2873748", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2873748", -1, 50, 50);
                                          cm.sendNewEffects(17, [2000, 2000, 2000, 200, 50]);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2250);
                                            cm.effect_NormalSpeechBalloon('消灭怪物，治疗病人！', 0, 0, 0, 2000, 9400630, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2873748", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2873748", 1, 50, 50);
                                                cm.sendNewEffects(17, [2000, 2000, 2000, 250, 50]);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2250);
                                                  cm.effect_NormalSpeechBalloon("一线光芒！我们的救星！", 0, 0, 0, 2000, 9400631, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2873748", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2873748", -1, 50, 50);
                                                      cm.sendNewEffects(17, [2000, 2000, 2000, 200, 50]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2250);
                                                        cm.effect_NormalSpeechBalloon("逃跑吧，怪物啊，我们胜利了~！", 0, 0, 0, 2000, 9400593, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2873748", 1);
                                                          cm.sendNormalTalk_Bottom("#face0#哈哈-这是什么啊。虽然说的没错，但还真有点害羞啊？", 37, 9400582, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b你说是害羞，但明明就很喜欢吧？", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#被你发现了呢~~做骑士不就是为了这个吗？如果羡慕的话，你也加入亚皮纳斯骑士团吧？", 37, 9400582, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b我……", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNewEffects(17, [1000, 2000, 2000, 390, 50]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2873748", 1, 100, 50);
                                                                    cm.npc_SetForceMove("oid=2873749", -1, 60, 70);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2873749", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=2873748"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.sendNormalTalk_Bottom("骑士大人！这里！礼物！", 37, 9400593, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=2873747"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love"], [2000, 0, 0, 1, 0, 1, 1, 0]);
                                                                          cm.sendNormalTalk_Bottom("#face0#唔哇！这是什么~？你这是要给哥哥的？", 37, 9400582, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(12, [5000, -550, 50, 0, 0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.莫奈德_特效("这也算是多亏了亚皮纳斯才能活下来吧。", [1, 0, 5000]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.莫奈德_特效("我真是因为#h0#才捡回一条命啊！", [1, 1, 5000]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNewEffects(12, [10000, 1300, 50, 0, 0]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.莫奈德_特效("哈哈……我还得到了救护队的治疗！", [1, 0, 5000]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.莫奈德_特效("居然为了别人大老远跑来……", [1, 1, 5000]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.莫奈德_特效("我该怎么感谢你们呢？", [1, 0, 5000]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.莫奈德_特效("如果以后我生了孩子，一定要教他弓箭，让他进入亚皮纳斯骑士团。", [1, 1, 5000]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNewEffects(12, [5000, 600, 50, 0, 0]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.莫奈德_特效("我们猎人靠射箭也能成为骑士吗？", [1, 0, 5000]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.莫奈德_特效("亚皮纳斯对所有人都是开放的！", [1, 1, 5000]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 0, 0, 0, 0, 0]);
                                                                                                            cm.sendNormalTalk_Bottom("勇士！这个是勇士的！", 37, 9400593, false, true);
                                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我给了凯恩骑士一根肋骨，给勇士是特别的……！", 37, 9400593, true, true);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.forceCompleteQuest(64068);
                                                                                                              cm.gainItem(2439159, 1);
                                                                                                              cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                                              cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                                              cm.dispose();
                                                                                                              cm.warp(867201100, 2, true);
                                                                                                              cm.monadEndingScene(-1, -1, null);
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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