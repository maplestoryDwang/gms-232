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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3004090, "oid=2194527", 70, -174, 34, 20, 120, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2194527", "summon", 0, 0);
      cm.npc_ChangeController(3004144, "oid=2194528", 210, -436, 18, 160, 260, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2194528", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -35, -170);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#片刻后，拉尼娅家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#虽然你击退了黑魔法师，可看起来表情并不全是开心嘛。", 36, 3004090, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#有什么事情吗，#h0#？", 36, 3004090, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("当然应该开心……有机会和同伴们聊聊心里话，应该能找回片刻安宁吧。", 56, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("可是……", 56, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#怎么了？", 36, 3004090, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("从某种角度来说，他中有我，我中有他。", 56, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("只是觉得……心情有些复杂。", 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0##h0#，你每次面对黑魔法师的时候都怀着什么样的心情呢？", 36, 3004090, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我当然认为那样的存在理应肃清。", 56, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#然后呢？", 36, 3004090, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我也想起了那因他永远失去的珍贵之物。", 56, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#然后呢？", 36, 3004090, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……', 56, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("而且也曾有那么一点点，厌恶过自己。", 56, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("很久之前我们曾是一体，\r\n而同时我还诞生于那深重的黑暗当中……", 56, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("每每目睹他那些可怕的事迹，这种感觉就一定会卷土重来。", 56, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#但是他消亡了，就是你亲手毁灭了他。", 36, 3004090, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("飞鱼丸……", 56, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#所以现在没必要再纠结于“他”了，#h0#。", 36, 3004090, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你也是时候接受完完整整的自己了。", 36, 3004090, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('但我的黑暗面……', 56, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#任何人都有黑暗面。", 36, 3004090, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#黑暗面也是那个人的一部分。", 36, 3004090, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(3004091, "oid=2194638", -329, -174, 34, -379, -279, 0, true, 1500, false);
                                                            cm.npc_SetSpecialAction("oid=2194638", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##h0#，听说你要来了之后，我就急急忙忙去买菜了，可能还是动作太慢了吧。", 37, 3004091, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -212, -170);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#看吧。", 37, 3004090, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#不是还有人偏爱那个未经修饰的你嘛。", 37, 3004090, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("拉尼娅……", 56, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#虽说每次来，我能做的也只是准备几道\r\n露米纳斯喜欢吃的小菜而已……", 37, 3004091, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#不过我还是希望……至少你能在这里收获一点幸福。", 37, 3004091, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("我一直都很感激你，拉尼娅。", 56, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("正因为我知道你在等待，才没有放弃。", 56, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("飞鱼丸，日后也要劳烦你了。", 56, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#好了，眼下就尽情享受幸存者归来的喜悦之情。", 36, 3004090, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#然后再一次辉映世界吧，星之子。", 36, 3004090, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
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
                                                                                                        cm.npc_LeaveField("oid=2194527");
                                                                                                        cm.npc_LeaveField("oid=2194527");
                                                                                                        cm.npc_LeaveField("oid=2194528");
                                                                                                        cm.npc_LeaveField("oid=2194528");
                                                                                                        cm.npc_LeaveField("oid=2194638");
                                                                                                        cm.npc_LeaveField("oid=2194638");
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