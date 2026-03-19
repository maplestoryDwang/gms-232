var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
    cm.setPartner(1, 2052032, 80002245, 0);
  }
  if (cm.isQuestFinished(3481) && cm.getQuestStatus(3482) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2052009, "oid=12081", -283, 0, 2, -333, -233, 4, true, false);
      cm.setPartner(1, 2052032, 80002245, 0);
      cm.updateInfoQuest(3481, "enter2=1;enter=1");
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -75, -60);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_close", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#哦，来了啊！#b冒险勇士手办#k和#b等身大小的冒险岛金刚机器人#k！！！！", 37, 2052009, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这实物的质感要比照片好很多嘛！！\r\n不枉我足足花了三个月的工资！", 37, 2052009, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#咦？刚刚没有动过吗？", 37, 2052009, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pianoSolo", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呵呵呵。", 37, 2052010, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/omegaSector/duck/3", 0, 500, 0, 0, 20, 4, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/girlScream", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                            cm.effect_Text(["#fn黑体##fs18#稍后……#fs15##fn黑体#UFO宅宅的房间"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(4200);
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
                                    cm.fieldEffect_PlayBGM("Bgm47/DancesWithAliens", 0, 0);
                                    cm.sendNormalTalk_Bottom("#face0#简单来说是这样的。", 37, 2052000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#真，真是惊人啊，\r\n我没想到冒险勇士居然真的会来到我的房间~~~！！", 37, 2052009, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#正如我解释的那样，\r\n要想回到原来的大小，就一定要用到那个#b光线枪#k。\r\n可以麻烦你帮忙吗？", 37, 2052000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#那当然是不行的~", 37, 2052009, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#哎？", 37, 2052000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#虽说你们就是我的偶像~\r\n不过我也不能因此背叛自己的同族~", 37, 2052009, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(窃窃私语)#k\r\n喂，小俊，这和说的不太一样啊。", 37, 2052000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(窃窃私语)#k\r\n别担心，你就放心交给我吧。", 37, 2052002, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯……既然你不帮我们的忙，也是没办法的事。\r\n可没有半点情报就要行动，万一被白外星博士抓到了怎么办？", 37, 2052002, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#虽然很可惜，不过这也是没办法的事~", 37, 2052009, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是啊是啊，不过，你知道吗？\r\n#b第二代冒险勇士粉狼#k#fs30##b阿琳#k#fs17#也来这里了哦？", 37, 2052002, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2##fs23#什，什什什什什什么~？真的吗？！她应该还是实习队员吧？！", 37, 2052009, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#哈，哈哈哈，你好啊？", 37, 2052004, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#是真的……是真的啊！我真的是阿琳的超级~粉丝呢~", 37, 2052009, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哎哟，既然已经打过招呼了，那我们就走吧？", 37, 2052002, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#可是没有半点情报就这么行动，万一被白外星博士抓走了怎么办呢？\r\n特别是#b阿琳#k。", 37, 2052002, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                        cm.sendNormalTalk_Bottom("#face2##fs30##r那可不行！！", 37, 2052009, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#白外星博士该怎么说呢，是非常著~名的那个……\r\n总之我会帮忙的！", 37, 2052009, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#放心交给我吧！#b阿琳#k就由我来守护！", 37, 2052009, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(窃窃私语)#k\r\n多亏了小俊的情报，算是顺利解决了呢。", 37, 2052000, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(窃窃私语)#k\r\n哇~小俊哥哥，这种事你是怎么知道的啊？", 37, 2052004, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(窃窃私语)#k\r\n呵呵，知识就是力量，没知识的就只有#b阿亮#k。", 37, 2052002, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2##fc0xFFAAAAAA#(窃窃私语)#k\r\n还，还有这种话？", 37, 2052005, true, true);
                                                                                      } else if (status === V++) {
                                                                                        cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;