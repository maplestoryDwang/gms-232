var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -21, 241);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 17, 272);
    } else {
      if (status === v++) {
        cm.npc_ChangeController(3005102, "oid=619605", 93, 241, 55, 43, 143, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=619605', "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你好！我叫啦啦！", 36, 3005100, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#额……？我叫紫芒。", 36, 3005116, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我们要爬上屋顶，不知能不能借用一下大叔家里的梯子？", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#当然可以，就在屋里！", 36, 3005116, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face6#哇！谢谢！", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#……我虽然也很想这么说，可眼下我是有家不能回啊。", 36, 3005116, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#那就赶紧去找其他人……", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#为什么啊？为什么有家不能回啊？", 36, 3005100, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face2#喂！", 36, 3005102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#其实……今天是我的结婚纪念日，\r\n所以我为我妻子准备了一枚胸针。", 36, 3005116, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#可是那枚胸针好像被我弄丢了。", 36, 3005116, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#那是长什么样的？", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#问题就出在这里，我突然都想不起来长什么样了呢。", 36, 3005116, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face7#我说，你是吃了乌鸦肉么？这么快就忘了？", 36, 3005102, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#我是喜欢吃肉没错，可我不至于会吃那种东西！", 36, 3005116, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#如果你们帮我找到那枚胸针，我就回家借你们梯子用。", 36, 3005116, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#我凭什么先帮你找到东西啊，当然是先借梯子。", 36, 3005102, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#没事的，我们先找找珍贵的东西吧！", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#喂，我看你不太懂啊，这个世界可没那么容易对付。", 36, 3005102, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face0#你为什么这么想？", 36, 3005100, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#因为大部分人都会撒谎。", 36, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#有这种心情不好的时候也在所难免嘛。", 36, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face4#即便如此，选择相信别人也并不愚蠢。", 36, 3005100, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.askYesNo_Bottom("#face0#要去为了紫芒大叔找胸针吗？", 36, 3005100, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face0#之前提到丢东西的地方是在……#m410004014#那边吧？\r\n真不知道那里的怪物手里有什么呢。\r\n#b（*前往#m410004014#，捕捉15只#o8645227# ，找到#i4036778# #t4036778# 吧。）#k", 36, 3005100, false, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#格里，相信别人并不是什么坏事。", 36, 3005106, false, true, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#所以说……", 36, 3005106, true, true, 1);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, false, true, 1);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（果然还是蠢啊。）", 36, 3005102, true, true, 1);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.inGameDirectionEvent_Unknown9(1000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else if (status === v++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                cm.npc_LeaveField('oid=619605');
                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.setStandAloneMode(false);
                                                                                cm.forceStartQuest(36208, '');
                                                                                cm.OnStartNavigation(410004014, 0, '', 36208);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#哦！就是这东西！我为结婚纪念日准备了一枚胡萝卜胸针。", 36, 3005116, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我求婚之后，妻子应下了一句“胡萝卜喂”（谐音“何乐不为”），那之后我就每天送她\r\n胡萝卜形状的东西。", 36, 3005116, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(36208);
        cm.gainExp(1691);
        cm.gainExp(144);
        cm.gainItem(4036778, -1);
        cm.dispose();
      }
    }
  }
}