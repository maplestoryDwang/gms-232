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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530240, "oid=37539973", 660, 20, 2, 610, 710, 1, true, false);
      cm.npc_SetSpecialAction("oid=37539973", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=37539974", 600, 20, 2, 550, 650, 1, true, false);
      cm.npc_SetSpecialAction("oid=37539974", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=37539975", 540, 20, 2, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=37539975", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=37539976", 480, 20, 1, 430, 530, 1, true, false);
      cm.npc_SetSpecialAction("oid=37539976", "summon", 0, 0);
      cm.npc_ChangeController(1530180, "oid=37539977", 420, 20, 1, 370, 470, 1, true, false);
      cm.npc_SetSpecialAction("oid=37539977", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=37539978", 320, 20, 1, 270, 370, 0, true, false);
      cm.npc_SetSpecialAction("oid=37539978", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=37539979", 250, 20, 1, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=37539979", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("……唉，我只是在复述我听到的事情而已！\r\n你为什么要追根究底呢？你肯定是B型吧？？", 37, 1530180, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我是AB型。还有，血型和性格没什么关系。", 37, 1530070, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("哼，世界上有很多事情难以用逻辑去解释！\r\n你这个模范生肯定不懂这些。", 37, 1530180, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那你要如何解释这录音机呢？", 37, 1530070, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("……哼！", 37, 1530180, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这录音机中有录制的钢琴演奏曲。有人故意将它放在音乐室。\r\n那个人这么做，肯定是想让大家相信音乐室怪谈，对吧？", 37, 1530070, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("……我不知道，我还是第一次见到这录音机呢！真的不是我的！", 37, 1530180, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯……我可从未说过这录音机是你的。", 37, 1530070, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……呃呃！", 37, 1530180, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("反正这并不重要，因为现在已经真相大白。\r\n你们现在应该知道了吧？卡珊德拉是个说谎精。", 37, 1530070, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 120, 500, 58);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(4387);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……不会的，卡珊德拉没必要说谎。", 37, 1530240, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("没错，卡珊德拉的占卦真的很准的！\r\n她也很会看爱情运势。", 37, 1530270, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("那种东西谁都会。\r\n我来给你举个例子吧？比如说，你比看起来要来得更加谨慎。", 37, 1530070, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530310, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                            cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530300, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530270, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我再举个其他例子吧？你现在有些不为人知的烦心事。", 37, 1530070, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530270, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530310, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        cm.effect_NormalSpeechBalloon("没错, 没错. ", 1, 0, 0, 2000, 1530300, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 134, 58);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3546);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("只要说些与任何人都吻合的话，就能蒙骗大家了。", 37, 1530070, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("现在你们知道了吧？无论是鬼怪，还是占星，都是一种巧妙的骗局而已。我已经按逻辑为大家分析了一遍，希望大家不要再为这种无谓的事情浪费精力了。好好珍惜时间吧。", 37, 1530070, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=37539978", -1, 100, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                    cm.setAmbience("Ambience.img/ding", 100, 60);
                                                                    cm.npc_SetSpecialAction("oid=37539977", "shade", -1, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.playNpcEff(1530180);
                                                                      cm.inGameDirectionEvent_Monologue("居然敢怀疑我卡珊德拉的灵性……", 1);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH4_01/1", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("……？", 37, 1530070, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#他来了……他来了！\r\n他将惩罚怀疑我卡珊德拉之人……！！", 37, 1530180, true, true);
                                                                          cm.effect_Voice("Voice2.img/Friends/CH4_01/2", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.playNpcEff(1530180);
                                                                            cm.effect_Voice("SoundEff.img/thunder", 100);
                                                                            cm.dispose();
                                                                            cm.warp(330002406, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;