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
      cm.fieldEffect_PlayBGM("Bgm23.img/BlizzardCastle", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_同时移动镜头和人(1, 3);
      cm.npc_ChangeController(2550004, "oid=1761865", 552, -400, 19, 502, 602, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1761865", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哈……哈，哈哈哈……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('着火了，全世界都……', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("队长？喂，队长！唔……不是疯了吧？", 37, 2550004, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你说得没错，那个末日什么的。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你现在才相信？傻瓜。\r\n#fs18##r黑魔法师#k也叫#r超越者#k，#fs16#是和我同级的存在。", 37, 2550004, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("他到底想干什么？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("他想要的是#fs18##r终极黑暗。#k\r\n#fs16#大概是屠杀冒险岛世界内的#r#fs18#一切智能生物#k，或者更甚。", 37, 2550004, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("终极黑暗啊……真高尚呢……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.sendNormalTalk_Bottom("喂，打起精神来！喂，队长！", 37, 2550004, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.setAmbience("Ambience.img/blizzard_soft", 100, 60);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("我做了一个梦。", 0);
                                    cm.effect_Voice("Voice3.img/DLep4/j/j_1.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("我走在一望无际的雪原中。", 0);
                                      cm.effect_Voice("Voice3.img/DLep4/j/j_2.mp3", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#r被永远遗留在战场上的人们……", 0);
                                        cm.effect_Voice("Voice3.img/DLep4/j/j_3.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("那些我亲手创造的罪恶们，#k一个两个地立起了身子。", 0);
                                          cm.effect_Voice("Voice3.img/DLep4/j/j_4.mp3", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue('', 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("可怜虫啊……看看你制造的惨剧吧。'", 0);
                                              cm.effect_Voice("Voice3.img/DLep4/k/k_1.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("你为什么而战？#fn黑体##r「最终不过是杀戮与被杀罢了。」#k", 0);
                                                cm.effect_Voice("Voice3.img/DLep4/k/k_2.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("你为什么而战？#fn黑体##r「最终都归于末日。」#k", 0);
                                                  cm.effect_Voice("Voice3.img/DLep4/k/k_3.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("我说。", 0);
                                                        cm.effect_Voice("Voice3.img/DLep4/k/k_4.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("#r#fn黑体##r「你该不会以为还能得到宽恕吧？」#k", 0);
                                                          cm.effect_Voice("Voice3.img/DLep4/k/k_5.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue('', 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("狮子王嘴边噙着一抹嘲笑。", 0);
                                                              cm.effect_Voice("Voice3.img/DLep4/k/k_6.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("#r#fn黑体##r「佣兵们……你们该不会还想上天堂吧？」", 0);
                                                                cm.effect_Voice("Voice3.img/DLep4/k/k_7.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue('', 1);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(306020000, 0, true);
                                                                  cm.eventSKill(0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.npc_LeaveField("oid=1761865");
                                                                  cm.npc_LeaveField("oid=1761865");
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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