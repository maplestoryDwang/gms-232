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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540450, "oid=12993491", -112, 21, 24, -162, -62, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12993491", 'summon', 0, 0);
      cm.npc_ChangeController(1540451, "oid=12993492", -218, 21, 24, -268, -168, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12993492", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=12993493", 220, 21, 24, 170, 270, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12993493", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("不知你是否知道……\r\n曾经将这个世界变为火海的黑魔法师复活了。", 37, 1540453, false, true);
          } else {
            if (status === V++) {
              cm.askMenu_Bottom("但是不知道是出于什么原因，黑魔法师目前还没有出来进行活动。\r\n#L0##b为什么没有进行活动呢？#l", 37, 1540453);
            } else {
              if (status === V++) {
                cm.askMenu_Bottom("准确的原因我也不知道，但我推测，他的力量还没有完全恢复。\r\n#L0##b如果黑魔法师的力量完全恢复……#l", 37, 1540453);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那时就来不及了。到时冒险岛世界将会再次陷入黑暗。\r\n我们只有利用现在的机会阻止他。", 37, 1540453, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("黑色之翼是为了让黑魔法师复活而组建的团体。\r\n此外，黑色之翼目前正以埃德尔斯坦为据点，竭力效忠复活的黑魔法师。", 37, 1540453, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们要做的事情很明确。\r\n如果要打倒黑魔法师，必须先击败黑色之翼。", 37, 1540453, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1200, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
                              cm.sendNormalTalk_Bottom("从现在开始我所说的话，只有聚集在这里的人才能知道。", 37, 1540451, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这段时间来，我们一直密切关注着黑色之翼的一举一动。\r\n通过窃听和监视装置，我们才能提前阻止他们的诡计。", 37, 1540451, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("不过，他们那边好像已经有所察觉。\r\n他们现在开始使用暗号交流，以防消息外泄。", 37, 1540451, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/blackHeaven/anagram", 0, 1500, 0, 0, 12, 4, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeaven/anagram_text0", 0, 1500, 0, 0, 13, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这是黑色之翼首领格里梅尔最近散布的暗号。\r\n它被登在了埃德尔斯坦日报上。", 37, 1540451, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你难道不觉得奇怪吗？起初我推测这些单词中隐藏了内在含义。", 37, 1540451, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不过，直到情报员布吉拿来暗号解读表，我们才能对暗号进行解读。\r\n单词自身其实并没有任何意义。", 37, 1540451, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这是易位构词……也就是对文字的重新排列。\r\n如果把这些文字重新整合……我们可以得到这样的句子。", 37, 1540451, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/blackHeaven/anagram_text1", 0, 1500, 0, 0, 14, 4, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(4500, 2000, 4500, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 50);
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
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setAmbience("Ambience.img/bird", 100, 60);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("BLACK HEAVEN IS READY……\r\n黑色天堂已经准备好了？", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#黑色天堂……\r\n什么黑色天堂，这究竟是什么意思？", 37, 1540450, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我们必须弄清楚黑色天堂究竟是什么意思。\r\n不过，要怎么做呢？", 37, 1540453, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("只有一个人知道这件事。", 37, 1540451, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.playSoundEffDirectly("Ambience.img/bird");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=12993491", -1);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=12993491"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#只有一个人……你是指#b她#k吗？", 37, 1540450, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("没错，黑色之翼原本是她的……#b她#k应该知道这个秘密吧。", 37, 1540453, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#不过，她现在好像没办法回答问题。", 37, 1540450, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -180, 50);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("无论如何，我们都要弄清楚。", 37, 1540451, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.dispose();
                                                                                                    cm.warp(350012030, 0, true);
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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