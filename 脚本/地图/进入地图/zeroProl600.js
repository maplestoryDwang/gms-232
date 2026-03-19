var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40002)) {
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
      cm.npc_ChangeController(2410006, "oid=23591", 732, -189, 22, 682, 732, 1, false, 0, false);
      cm.npc_ChangeController(2410007, "oid=23592", 362, -269, 20, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_PlayFieldSound("Dojang/start", 100);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/boymeetgirl/0", 1, 1, 1, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/boymeetgirl/0", 1, 0, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
          cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(我是因为很偶然的事情才进到神殿里来的。由于#o9300744#似乎有话要说并且行为异常，因此才发生了后来的事。)", 41, 2410008, false, true);
            cm.effect_Voice("Voice.img/Alpha/42", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(和#o9300744#接触过的我，已经准备好死亡了……但来的不是死亡，而是那女人细柔的声音，是那个声音把我带到了影子神殿。)", 41, 2410008, true, true);
              cm.effect_Voice("Voice.img/Alpha/43", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face11# #b(看到了奇怪的现象我也没向队长汇报，并且还独自来到了影子神殿是因为……很有可能是我无意之间对这个村子起了疑心。)", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/44", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b(神殿里根本就没有怪物，和黯然失色的雕像们一样，唯有紧闭着双眼的少女……她的脸和我的太像了，难道这是偶然？)", 41, 2410008, false, true);
                      cm.effect_Voice("Voice.img/Alpha/45", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b(从此之后，我就小心的对#m321000100#做了调查。影子神殿是什么，#o9300744#是什么，每次吃的那影子中和剂又是什么……)", 41, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/46", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b(随着调查的继续，疑心和疑问也越来越多了。)", 41, 2410008, true, true);
                          cm.effect_Voice("Voice.img/Alpha/47", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face11# #b(不过有件事情是肯定的，就是我和这个少女肯定有某种联系。我有证据，如果我使用力量……会跟这个少女产生共鸣。)", 41, 2410008, false, true);
                                  cm.effect_Voice("Voice.img/Alpha/48", 100);
                                } else {
                                  if (status === V++) {
                                    cm.playerMessage(-1, "连续点击Ctrl键，使用时间之力叫醒少女。");
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/0"], [3600, 511, -167, 1, 0, 1, 1, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/0"], [3600, 358, -372, 1, 0, 1, 1, 0]);
                                    cm.fieldEffect_PlayFieldSound("Kite/HolyAuraE", 100);
                                    cm.inGameDirectionEvent_BreakEffect('17#17#', 2, 2, 3000);
                                  } else {
                                    if (status === V++) {
                                      cm.playerMessage(-1, "连续点击Ctrl键，使用时间之力叫醒少女。");
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/1"], [3600, 511, -167, 1, 0, 1, 1, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/1"], [3600, 358, -372, 1, 0, 1, 1, 0]);
                                      cm.fieldEffect_PlayFieldSound("Kite/HolyAuraE", 100);
                                      cm.inGameDirectionEvent_BreakEffect("17#17#", 2, 2, 3000);
                                    } else {
                                      if (status === V++) {
                                        cm.playerMessage(-1, "连续点击Ctrl键，使用时间之力叫醒少女。");
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/2"], [3600, 511, -167, 1, 0, 1, 1, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/2"], [3600, 358, -372, 1, 0, 1, 1, 0]);
                                        cm.fieldEffect_PlayFieldSound("Kite/HolyAuraE", 100);
                                        cm.inGameDirectionEvent_BreakEffect("17#17#", 2, 2, 3000);
                                      } else {
                                        if (status === V++) {
                                          cm.playerMessage(-1, "连续点击Ctrl键，使用时间之力叫醒少女。");
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/3"], [0, 511, -167, 1, 0, 1, 1, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/power/3"], [0, 358, -372, 1, 0, 1, 1, 0]);
                                          cm.fieldEffect_PlayFieldSound("Kite/HolyAuraE", 100);
                                          cm.inGameDirectionEvent_BreakEffect('17#17#', 2, 2, 3000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face11# #b(用这个力量就能叫醒少女……的预感？不是预感，而是确信！是不是力道不够，少女没有醒来……)", 41, 2410008, false, true);
                                              cm.effect_Voice("Voice.img/Alpha/49", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face11# #b(是因为这个力量？所以影子之村的人们都在骗我？难道……影子之村是为了欺骗我一个人而存在的？)", 41, 2410008, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/50", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#face11# #b(依靠他人注入的谎言所维持的生活……这仿佛就像被绳子绑住的人偶。)", 41, 2410008, true, true);
                                                  cm.effect_Voice("Voice.img/Alpha/51", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#face3# #b(但是……不可能一直这样。小看我的那些人们……我怎么可能放过他们？)", 41, 2410008, false, true);
                                                      cm.effect_Voice("Voice.img/Alpha/52", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face3# #b(待我查明所有被掩埋的真相和秘密之后，一定要把这耻辱和愤怒，数万倍的还给你们。总有一天……必须！)", 41, 2410008, true, true);
                                                        cm.effect_Voice("Voice.img/Alpha/53", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction13.img/effect/zero/sparkle/0"], [0, 723, -202, 1, 0, 1, 1, 0]);
                                                            cm.sendNormalTalk("#face11# #b(嗯？后门有什么……东西在发光。)", 41, 2410008, false, true);
                                                            cm.effect_Voice("Voice.img/Alpha/54", 100);
                                                          } else if (status === V++) {
                                                            cm.updateInfoQuest(40006, "clear=clear");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;