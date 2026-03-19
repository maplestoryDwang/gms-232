var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(23608)) {
    action23608(f, E, e);
  } else {
    cm.dispose();
  }
}
function action23608(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1320);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("好的，现在我来告诉你多模式链接的使用方法。", 1, 2300000, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("多模式链接技能可以通过技能窗的#i3800444#按钮查看。", 1, 2300000, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/skill_inventory"], [2700, 100, -200, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.playerMessage(-1, "点击该按钮，可以呼出各技能对应的多模式链接器……");
                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiRepeat"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.playerMessage(-1, "看到角色头顶显示的技能图标了吗？");
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("施展多模式链接技能，就能呼出当前转职次数对应的多模式链接器。", 1, 2300000, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/skill_inventory2"], [2400, 100, -200, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiRepeat"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("转职之后，重复施展多模式链接技能，还能呼出其他技能的多模式链接器。希望你能记住！", 1, 2300000, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("最后，在按住想要切换的技能对应的技能键的状态下，施展多模式链接技能，可以立即呼出该技能的多模式链接器。这个也请你记住！", 1, 2300000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_OneTimeAction(548, 450);
                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/skillEffect1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.playerMessage(-1, "在按住技能键的状态下施展多模式链接技能");
                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                } else {
                                  if (status === V++) {
                                    cm.playerMessage(-1, "可以呼出该技能的多模式链接器。");
                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiRepeat"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("呼出多模式链接器后，按键盘的#i3800442#、#i3800441#或#i3800443#，可以切换到指定的模式。", 1, 2300000, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiUp"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1320);
                                          } else {
                                            if (status === V++) {
                                              cm.playerMessage(-1, "按方向键上，可以选择银色快剑：闪光。");
                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                            } else {
                                              if (status === V++) {
                                                cm.playerMessage(-1, "闪光可以快速挥动能量剑，压制附近的敌人。");
                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/RXmultiModeLinker/36101000/up"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiLeft"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1290);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.playerMessage(-1, "按方向键左，可以选择银色快剑：集中。");
                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.playerMessage(-1, "集中可以比闪光更远、更精确地攻击敌人。");
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/RXmultiModeLinker/36101000/left"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/multiModeLinkerTuto/uiRight"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1320);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.playerMessage(-1, "按方向键右，可以选择银色快剑：跳跃。");
                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.playerMessage(-1, "跳跃可以在攻击左右敌人的同时，启动推进器跳到高处。");
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/RXmultiModeLinker/36101000/right"], [0, 0, 0, 1, -2, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.askYesNo("理解了吗？如果还没理解，可以重新和我说话。\r\n(点击“是”时，回到原来的地图。)", 1, 2300000);
                                                                  } else if (status === V++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceCompleteQuest(23608);
                                                                    cm.gainExp(3000);
                                                                    cm.dispose();
                                                                    cm.warp(230050000, 0, false);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}