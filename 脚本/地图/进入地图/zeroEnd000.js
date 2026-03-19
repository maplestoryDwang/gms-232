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
      cm.npc_ChangeController(2491007, "oid=254089", 321, 27, 3, 271, 371, 1, false, 0, false);
      cm.npc_ChangeController(2491008, "oid=254090", 231, 27, 3, 181, 281, 1, false, 0, false);
      cm.npc_ChangeController(2491009, "oid=254091", -274, 27, 3, -324, -224, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("额…… 是什么？在次元移动过程中，我好像撞到了什么……", 1, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("头好晕……", 1, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你没事吧？这里是哪里啊？好像…… 是陌生的地方呢？冒险岛世界还有这样的地方吗？", 1, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那些人…… 是谁？", 1, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你们是谁，谁啊！说出你们的真实身份！", 9, 2491007, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……请冷静点，卡塔利安。他们在出现之前就造成了很强的波动。你这么刺激他们，也许会让我们陷入危险。", 9, 2491008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("快放下武器投降！", 9, 2491007, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b(是些长相奇怪的家伙…… 长着翅膀和尾巴……他们是谁呢？)", 1, 2400006, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("稍等！你们好像有些什么误会，我们没打算要攻击你们！比起那个…… 我想知道这是哪里？你们是谁！", 1, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("居然不知道这是什么地方就过来了，你觉得我们会相信你说的话？！你们这些冒险岛世界的人类为什么要入侵诺巴的圣殿？！", 9, 2491007, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("……诺……巴？", 1, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#b(……他们说得好奇怪？居然说什么'冒险岛世界的人类'…… 好像他们自己不是冒险岛世界的人类一样。长得也不像…… 他们到底是什么？)", 1, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我不明白你们在说什么。我们只是在次元移动的过程中突然掉落到了这地方。你们说我们是冒险岛世界的人类…… 那就代表你们不是冒险岛世界的人类喽？", 1, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你连这里是什么地方都不知道就来了？这里是万神殿。这个地方叫格兰蒂斯，是与冒险岛世界不同的另一个世界。我们是诺巴族。", 9, 2491008, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("虽然我不知道你们怎么会来到这里，但是侵入诺巴的圣殿是重罪。请你们放下武器，接受调查。", 9, 2491008, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#b(怎么回事……？虽然跟他们战斗很容易，但在陌生的地方没必要引起事端。但是我们不能放下武器……)", 1, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(2491000, "oid=798953", 0, 14, 3, -50, 50, 1, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=798953", 'summon', 0, 0);
                                              cm.sendNormalTalk("没有必要听他们的。两位。", 9, 2491000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("又是其他的入侵者！？到底是什么？！我感到了很危险的力量？！", 9, 2491007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("阿尔法，还有贝塔…… 这意外的状况让你们受惊了。但是你们不必担心。我给你们说明下现在的状况。", 9, 2491000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("……你是谁？你是怎么知道我们的名字的额？在这个世界里，没有人知道我们的名字。", 1, 2400005, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("并不是那样的。因为关注着两位的人比你们想象中还要多。", 9, 2491000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("……我们……？为什么？", 1, 2400006, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("你们随我来就全明白了。", 9, 2491000, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("你能保证这不是一个陷阱吗？如果这是陷阱的话…… 我就要了你的命。", 1, 2400005, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("这不是陷阱。我能用我的性命担保。那我们走吧……", 9, 2491000, true, true);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(940040001, 0, false);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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