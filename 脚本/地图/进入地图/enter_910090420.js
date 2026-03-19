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
      cm.npc_ChangeController(1013326, "oid=210655", 133, 26, 17, 83, 183, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNormalTalk("呵呵呵……懦弱的人类。你是在找我们吗？", 5, 1013444, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("黑魔法师！！孩子们去哪儿了？快快现身吧！", 3, 0, true, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm51.img/Pathfinder", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/partemTD_appear/0", 0, 500, 0, 0, 12, 4, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你……你们是？", 3, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我们是！", 5, 1013443, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("被诅咒的……", 5, 1013444, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("黑魔法师3兄弟！！", 5, 1013445, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("难，难道！！所谓的黑魔法师……", 3, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/partemTD_appear/1", 0, 1000, 0, 0, 12, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("消失的孩子们？！！", 3, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                  cm.sendNormalTalk('老大梅尔奇！', 5, 1013440, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("老二巴尔特！", 5, 1013441, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("老，老三凯斯帕！！", 5, 1013442, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                        cm.npc_ChangeController(1013440, "oid=7202662", 260, -100, 1, 210, 310, 1, false, false);
                                        cm.npc_SetSpecialAction("oid=7202662", "summon", 0, 0);
                                        cm.npc_ChangeController(1013441, "oid=7202663", 220, 0, 31, 170, 270, 1, false, false);
                                        cm.npc_SetSpecialAction("oid=7202663", "summon", 0, 0);
                                        cm.npc_ChangeController(1013442, "oid=7202664", 310, 0, 30, 260, 360, 1, false, false);
                                        cm.npc_SetSpecialAction("oid=7202664", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(700);
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
                                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("因为那是#e普通人#n很容易就会掉进去的陷阱。", 5, 1101002, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("如果我们不当回事，没有采取任何措施，但万一这个#r黑暗预言书#k是真的呢。", 5, 1101002, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("要是#r字写得像狗啃一样的可怕的黑魔法师#k真的存在呢？", 5, 1101002, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("南哈特……", 3, 0, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("喂，愚蠢的人类。要是不想被可怕的黑魔法师诅咒，就快把糖果和巧克力献给我们吧！！", 5, 1013440, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("把，把糖果献出来！！", 5, 1013442, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.askMenu("把巧克力献出来！！\r\n#b\r\n#L0# 敲一下脑袋。#l\r\n#L1# 敲一下脑袋。#l\r\n#L2# 敲一下脑袋。#l", 5, 1013441);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("你们这帮小家伙，竟敢捉弄大人。", 3, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("啊呀呀呀……。好，好疼。", 5, 1013441, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("没，没想到你这个人类还挺强。\r\n但跟老师相比根本算不了什么！！", 5, 1013441, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("不行！还是先逃走吧！！呃，等古代怪兽复活之后，像你这种人根本……", 5, 1013440, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk('哥哥们！别丢下我！！', 5, 1013442, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=7202662");
                                                                            cm.npc_LeaveField("oid=7202662");
                                                                            cm.npc_LeaveField("oid=7202663");
                                                                            cm.npc_LeaveField("oid=7202663");
                                                                            cm.npc_LeaveField("oid=7202664");
                                                                            cm.npc_LeaveField("oid=7202664");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("额，真是巨快不必的家伙。先和 #b南哈特报告#k吧。\r\n\r\n#b(使用了通信魔法球。)", 3, 0, false, true);
                                                                            } else if (status === V++) {
                                                                              cm.dispose();
                                                                              cm.warp(100051020, 0);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                              cm.forceStartQuest(35957, '');
                                                                              cm.updateInfoQuest(35950, "00=h1;01=h0;02=h1;03=h1");
                                                                              cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;