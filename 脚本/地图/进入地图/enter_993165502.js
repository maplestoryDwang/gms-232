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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_Monologue("奶奶曾经提到过。", 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_Monologue("我们村庄比任何地方都要安全，都要平和。", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("可安于这一乐园的做法并不对。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("因为我们有着有朝一日必须要完成的使命。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("那是经历多时却绝不能遗忘的使命……", 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#所以……所谓的使命到底是什么？", 37, 3005100, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face6#是一群小山灵呢，这次又是来玩的吗？", 37, 3005100, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你们知道我们的使命吗？", 37, 3005100, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3005104, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#诶？小山灵！你这是突然要去哪儿啊？", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#哎哟？这是……", 37, 3005100, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/0", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#我曾经听说过这里。", 37, 3005100, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#那是长辈们常常提及的地方，他们叮嘱说不要轻易前往村外的圣殿。", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#听说以前还在这里面进行过考验。", 37, 3005100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#倒是没有告诉我到底是什么考验。", 37, 3005100, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/Lara/illust/1", 'cc'], [1, 0, 0, 1, 1000, -1, 0, 0, -1]);
                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/1/Female/0", 100);
                                            cm.sendNormalTalk_Bottom("#face1#啊，要是贸然进去，一定会被长辈们狠狠教训一顿的……", 37, 3005100, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice6.img/lara/1/Female/1", 100);
                                              cm.sendNormalTalk_Bottom("#face0#或许那些小山灵带我来这里就是为了给我答案。", 37, 3005100, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/1/Female/2", 100);
                                                cm.sendNormalTalk_Bottom("#face0#进去看看吧。", 37, 3005100, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_屏幕渐入插图A(['02', "Effect/Direction26.img/Lara/illust/2", 'cc'], [1, 0, 0, 2, 1000, -1, 0, 0, -1]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -89, 195);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/1/Female/3", 100);
                                                        cm.sendNormalTalk_Bottom("#face1#……", 37, 3005104, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice6.img/lara/1/Female/4", 100);
                                                          cm.sendNormalTalk_Bottom("#face0#原来铃铛被存放在了圣殿里啊。", 37, 3005100, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.effect_Voice("Voice6.img/lara/1/Female/5", 100);
                                                            cm.sendNormalTalk_Bottom("#face1#保管箱里写着字。", 37, 3005100, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("Voice6.img/lara/1/Female/6", 100);
                                                              cm.sendNormalTalk_Bottom("#face1#“有朝一日铃铛响起时，方能洗刷罪人之过”", 37, 3005100, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice6.img/lara/1/Female/7", 100);
                                                                cm.sendNormalTalk_Bottom("#face1#小山灵，你知道这是什么意思吗？", 37, 3005100, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice6.img/lara/1/Female/8", 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#……哈欠？", 37, 3005104, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['00'], [100]);
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['01'], [100]);
                                                                    cm.fieldEffect_屏幕渐入插图消失A(['02'], [1000]);
                                                                    cm.effect_Voice("Voice6.img/lara/1/Female/9", 100);
                                                                    cm.sendNormalTalk_Bottom("#face1#啊，要是突然站起来……祭坛……！", 37, 3005100, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/udangtang", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/3", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice6.img/lara/1/Female/10", 100);
                                                                          cm.inGameDirectionEvent_Monologue("手中的铃铛散发出了五彩缤纷的光芒。", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/1/Female/11", 100);
                                                                            cm.inGameDirectionEvent_Monologue("那是此生从未感受过的温暖又平和的光芒。", 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("Voice6.img/lara/1/Female/12", 100);
                                                                              cm.sendNormalTalk_Bottom("#face0#怎么这么骚乱？", 37, 3005129, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice6.img/lara/1/Female/13", 100);
                                                                                cm.sendNormalTalk_Bottom("#face0#该不会圣殿有入侵者……！", 37, 3005130, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice6.img/lara/1/Female/14", 100);
                                                                                  cm.sendNormalTalk_Bottom("#face0#这，这是……", 37, 3005129, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_Voice("Voice6.img/lara/1/Female/16", 100);
                                                                                    cm.sendNormalTalk_Bottom("#face1#对，对不起……", 37, 3005100, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_Voice("Voice6.img/lara/1/Female/15", 100);
                                                                                      cm.sendNormalTalk_Bottom("#face0#传说让铃铛发光的人也会为铃铛寻回响声，看来传说终于要成真了……", 37, 3005130, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.effect_Voice("Voice6.img/lara/1/Female/17", 100);
                                                                                        cm.sendNormalTalk_Bottom("#face0#好啊，那个传说终于要成真了，啦啦。", 37, 3005109, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Voice6.img/lara/1/Female/18", 100);
                                                                                          cm.sendNormalTalk_Bottom("#face0#老人家！", 37, 3005129, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_Voice("Voice6.img/lara/1/Female/19", 100);
                                                                                            cm.sendNormalTalk_Bottom("#face1#奶奶！", 37, 3005100, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.effect_Voice("Voice6.img/lara/1/Female/20", 100);
                                                                                              cm.sendNormalTalk_Bottom("#face0#既然明知禁止出入，为什么还要去圣殿里面？", 37, 3005109, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_Voice("Voice6.img/lara/1/Female/21", 100);
                                                                                                cm.sendNormalTalk_Bottom("#face4#对不起。", 37, 3005100, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.effect_Voice("Voice6.img/lara/1/Female/22", 100);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#即便如此，我还是认为找到我的问题的答案更有价值。", 37, 3005100, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.effect_Voice("Voice6.img/lara/1/Female/23", 100);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#因为我们不能忘记自己的使命。", 37, 3005100, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_Voice("Voice6.img/lara/1/Female/24", 100);
                                                                                                      cm.sendNormalTalk_Bottom("#face0#还有，这群小山灵朋友是绝不会把我逼入困境的。", 37, 3005100, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_Voice("Voice6.img/lara/1/Female/25", 100);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#……这样啊，原来是元素灵一路将你引到了这里啊。", 37, 3005109, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.effect_Voice("Voice6.img/lara/1/Female/26", 100);
                                                                                                          cm.sendNormalTalk_Bottom("#face0#我们曾每年为寻找能让铃铛起反应的人展开考验。", 37, 3005109, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.effect_Voice("Voice6.img/lara/1/Female/27", 100);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#可我们的铃铛别说是光了，甚至都没能有任何的变化。", 37, 3005109, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.effect_Voice("Voice6.img/lara/1/Female/28", 100);
                                                                                                              cm.sendNormalTalk_Bottom("#face0#那之后，就一直只是忠于守望着铃铛……", 37, 3005109, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.effect_Voice("Voice6.img/lara/1/Female/29", 100);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#人们越来越失望，传说渐渐失去了颜色，使命也被大家遗忘。", 37, 3005109, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_Voice("Voice6.img/lara/1/Female/30", 100);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#可是，要践行传说的人终究出世了。", 37, 3005109, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_Voice("Voice6.img/lara/1/Female/31", 100);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#听好了，为了摇响铃铛……", 37, 3005109, true, true, 1);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(993165503, 0, true);
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}