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
      cm.npc_ChangeController(2460024, 'oid=27090', 248, -6, 2, 203, 298, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#……#p2400008#。", 41, 2400006, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face1#两位怎么会来到这里……是来找我的吗？……很抱歉。害你们浪费时间来到这没用的地方。是作为神官的我的失职。", 33, 2400008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……你为什么会做出这样的选择？不管是怎么想，我都想不明白。你背叛我们，所获得的好处是什么？威尔答应给你什么好处？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face11#目前……也许有很多不足的地方，但是我们不会永远都被关在这镜世界的啊……到了冒险岛世界的话，我们会给你更多补偿的……！", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我讨厌的就是那个！……#r我不想去冒险岛世界#k。更准确地说，我觉得不能去。", 33, 2400008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face1#什么？为什么？你喜欢这种虚像的世界？", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#不是那样的。我……我害怕。在数百年前，几乎要被黑魔法师覆灭的冒险岛世界。现在那里变成了什么样，我们中没有一个人知道。", 33, 2400008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("当然也可能变得比想象中更适宜生存。但是那只是……如果黑魔法师的封印被解除，危险会再次出现。我不想把两位送到那样的地方。", 33, 2400008, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face10#为什么……？你怕我们遇到不测？", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#……没错。我醒来之后，做的最多的恶梦是…… 两位被黑魔法师消灭了。无数次看着两位消失，我……", 33, 2400008, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face1#我当然知道，两位为了获得更大的力量，唤醒了圣物，寻找到了女神之泪。但是，靠那个……真的能成功吗？两位#r找到所有的女神之泪，就能打败黑魔法师了吗#k？", 33, 2400008, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face1#当然两位如果找到了所有的女神之泪，就能拥有作为时间超越者所具有的所有力量。那样两位也许就能打败军团长，回到冒险岛世界。但是……", 33, 2400008, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face1#女神之泪是伦娜女神留下的力量的结晶……伦娜女神在被封印之前所拥有的全部力量。但是#r女神最终还是输给了黑魔法师啊#k。", 33, 2400008, false, true);
                                      cm.effect_REPEAT("Effect/Direction1.img/effect/aran/blackWizard/0", 1, 1, 1, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face1#但是两位……被军团长分开，拥有着不完全的力量的两位……你们觉得你们能战胜黑魔法师吗？我……我并不那么认为。", 33, 2400008, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face1#两位即将成为时间超越者……所以去冒险岛世界的话，黑魔法师是不可能就那么放过两位的。我真的很害怕。怎么样才能帮到两位。怎么样才能确保两位的安全……", 33, 2400008, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                            cm.effect_REPEAT("Effect/Direction1.img/effect/aran/blackWizard/0", 1, 0, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face1#虽然我思考了无数次，但结论只有一个……两位#b如果不去冒险岛世界的话，那样的话不如……不是更安全吗#k。", 33, 2400008, false, true);
                                              cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face11#……即使是要背叛我们？", 41, 2400005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#face0#……没错。", 33, 2400008, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("#face10#…………", 41, 2400006, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("……现在你们快回去吧。影子骑士团马上就要来了。我不希望看到两位遇到危险。", 33, 2400008, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("那你怎么办？……到威尔身边？", 41, 2400005, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("虽然我的力量微弱……但也许可以给他造成些许伤害。我准备……以死相拼。为了两位，我愿意表达我的忠诚。", 33, 2400018, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("#face10#……但是……", 41, 2400005, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("快回去吧！镜子骑士团来了！", 33, 2400008, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.spawnMobLimit(9300792, 1, -200, -6, 100);
                                                                cm.spawnMobLimit(9300792, 1, -150, -6, 100);
                                                                cm.spawnMobLimit(9300792, 1, -100, -6, 100);
                                                                cm.spawnMobLimit(9300792, 1, -50, -6, 100);
                                                                cm.spawnMobLimit(9300792, 1, 0, -6, 100);
                                                                cm.spawnMobLimit(9300792, 1, 50, -6, 100);
                                                                cm.sendNormalTalk("快走！我来拦住他们！", 33, 2400008, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("#face1#闭嘴！你是因为信不过我们，才背叛我们的！因为你不相信我们，不相信我们的力量！", 41, 2400005, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("#face1#……！不是那样的原因！", 33, 2400008, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("#face1#那就是原因！如果是那种原因的话……让你看看我们到底有多强，这样就可以了吧！", 41, 2400006, true, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;