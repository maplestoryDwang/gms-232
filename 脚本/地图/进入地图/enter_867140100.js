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
      cm.npc_ChangeController(9400816, "oid=2547920", 189, 173, 5, 139, 239, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2547920", 'summon', 0, 0);
      cm.npc_setForceFlip("oid=2547920", 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1300, 3000, 90, 104);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("公主，原来您在这儿。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2547920", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊，原来是剑斗。", 37, 9130021, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#剑斗，我要再次向你致谢，这次胜利你居功至伟。", 37, 9130021, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不，公主。您遇到危险时，我应该守在您身旁的……但我却没做到，真是羞愧难当。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#不会的，剑斗。", 37, 9130021, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我们认识很长一段时间了。", 37, 9130021, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#嘻嘻，小时候也是啊。每当我遇到危险，你就会不顾一切地赶来。", 37, 9130021, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#身为晓之阵、对抗者的代表，为拯救冒险岛世界而击退了敌人。", 37, 9130021, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你打败黑魔法师，完成了拯救所有人的伟业，也救下了我的性命。", 37, 9130021, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#剑斗，无论从前还是现在，你都是我最珍视的剑。", 37, 9130021, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('公主……', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("公主，您才是我的光。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("在巨大的威胁面前，每当我意志消沉想要放弃……是公主您的声音支撑着我。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我的剑只会追随您一人。", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#剑斗，谢谢你。", 37, 9130021, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那我要给你下一个命令了。", 37, 9130021, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("听凭驱驰，公主。", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionPL.img/effect/restart_hayato/0", 0, 1500, 0, -60, 12, 4, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#今晚月朗风清，我们共赏此景，顺便聊些故乡往事吧。", 37, 9130021, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("是！公主！我将竭诚奉陪。", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_Hero9(0, 3000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                          cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                          } else if (status === V++) {
                                                                                            cm.warp(993120000, 5, false);
                                                                                            cm.forceStartQuest(39701, '');
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=2547920");
                                                                                            cm.npc_LeaveField("oid=2547920");
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