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
      cm.dispelBuff(70001);
      cm.npc_ChangeController(2052045, "oid=12154", 672, 298, 5, 672, 722, 1, false, false);
      cm.updateInfoQuest(3487, "enter2=1;enter=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -199, 250);
      cm.npc_ChangeController(2052000, "oid=38393936", -110, 253, 2, -160, -60, 0, true, false);
      cm.npc_SetSpecialAction("oid=38393936", "summon", 0, 0);
      cm.npc_ChangeController(2052004, "oid=38393937", -40, 253, 2, -90, 10, 1, true, false);
      cm.npc_SetSpecialAction("oid=38393937", 'summon', 0, 0);
      cm.npc_ChangeController(2052003, "oid=38393938", 30, 253, 2, -20, 80, 1, true, false);
      cm.npc_SetSpecialAction("oid=38393938", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -110, 300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(800);
        cm.effect_Text(["#fn黑体##fs18#稍后……#fs15##fn黑体#UFO，通风口"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(6200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 200, 0);
            cm.sendNormalTalk_Bottom("#face0#一阵骚乱之后，大家都分散开来了呢，那边有谁在吗？", 37, 2052000, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我、小俊、阿亮在一起，大家都没有受伤，都没事。", 45, 2052001, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#真是万幸，这里也是一样。", 37, 2052000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#现在该怎么办呢？", 45, 2052001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#虽说很对不起宅宅，不过眼下也只有继续这么走下去了。", 37, 2052000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#为了宅宅，让我们一同默哀。", 45, 2052005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#都是因为你嘛！！", 45, 2052001, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯，无线电干扰很严重，我们还有被追踪的危险。\r\n大家先将周围的敌人清理干净，切断通信吧。", 37, 2052000, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#十分钟后再重新开启频道，\r\n那就这样，通信结束。", 37, 2052000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#大家都没事，也算是万幸。", 37, 2052000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#真是万幸啊。", 37, 2052003, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#对不起，都因为我……", 37, 2052004, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#都是过去的事情了，也是没办法的事。\r\n我们就此分成两队，去消灭敌人吧。", 37, 2052000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯！现在起我不会再失手了！是真的。", 37, 2052004, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.sendNormalTalk_Bottom("#face3#好吧，从现在起紧紧跟在我后面，毕竟冒险能量也所剩无几了。", 37, 2052000, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face2#什么？', 37, 2052004, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#阿英，你也要保护好阿琳。", 37, 2052000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#等，等一下，我可不打算跟在后面！", 37, 2052004, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#你说什么呢，\r\n一旦通讯设备联系上了，我就会让金博士将你传送回本部的。", 37, 2052000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#什么？？！", 37, 2052004, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#能量本就所剩无几了，要是再加上解除了变身，到时候可就是毫无防备的状态了。\r\n你就老老实实地跟在后面吧。", 37, 2052000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#还有回本部之后，写好检讨，我会检查的。", 37, 2052000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#要是阿琳不在了，终极激光要怎么用啊？", 37, 2052003, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#原来是生怕这个啊。", 37, 2052004, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm22.img/DespairOnDevil", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#这个徽章，就是为了抛下我，换成#b向#h0##k才这样的啊。", 37, 2052004, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#那个徽章为什么会在你手上……你先把徽章交出来，继续留在你手上会有危险的。", 37, 2052000, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3##fs25#……我不要。", 37, 2052004, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#你说什么？", 37, 2052000, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3##fs22#我不会把徽章还回去的。", 37, 2052004, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#我这还是头一次，所以才会稍微有点生疏。\r\n我会亲自证明，我能够好好使用徽章的，这样就行了吧？", 37, 2052004, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=38393937", 1, 350, 150);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#什么？阿琳！", 37, 2052000, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=38393936", 1, 50, 100);
                                                                                        cm.sendNormalTalk_Bottom("#face1#喂！！！！！宋琳儿！！我非把你给！！", 37, 2052000, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#别跟过去了，只要来这么一次啊，这短时间内是不会听人劝的。", 37, 2052003, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0##b#ho##k，你能替我们照看一下阿琳吗？\r\n估计这段时间她是听不进去我们说的话了。", 37, 2052003, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("交给我吧。", 57, 0, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#没办法了……", 37, 2052000, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=38393936", -1);
                                                                                                      cm.sendNormalTalk_Bottom("#face3#麻烦了，好好安抚一下那家伙吧。", 37, 2052000, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##b冒险勇士#k#b必须齐心协力#k。", 37, 2052000, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=38393936");
                                                                                                          cm.npc_LeaveField("oid=38393936");
                                                                                                          cm.npc_LeaveField("oid=38393938");
                                                                                                          cm.npc_LeaveField("oid=38393938");
                                                                                                          cm.npc_LeaveField("oid=38393937");
                                                                                                          cm.npc_LeaveField("oid=38393937");
                                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                              cm.dispose();
                                                                                                              cm.warp(221030700, 2);
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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