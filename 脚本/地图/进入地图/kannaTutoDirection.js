var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 807100110) {
    action1(f, E, e);
  } else {
    if (cm.getMapId() == 807100100) {
      action2(f, E, e);
    } else {
      if (cm.getMapId() == 807100111) {
        action3(f, E, e);
      } else {
        if (cm.getMapId() == 807100112) {
          action4(f, E, e);
        } else {
          if (cm.getMapId() == 807100102) {
            action5(f, E, e);
          } else {
            if (cm.getMapId() == 807100103) {
              action6(f, E, e);
            } else {
              if (cm.getMapId() == 807100104) {
                action7(f, E, e);
              } else if (cm.getMapId() == 807100105) {
                action8(f, E, e);
              } else {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.teachSkill(40020000, 1, 1);
      cm.teachSkill(40020001, 1, 1);
      cm.teachSkill(40020109, 1, 1);
      cm.fieldEffect_ScreenMsg("JPKanna/text0");
      cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(807100100, 1);
      cm.setInGameDirectionMode(false, true);
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(16150, '');
        cm.updateInfoQuest(66044, '');
        cm.updateInfoQuest(14755, '');
        cm.updateInfoQuest(52998, '');
        cm.updateInfoQuest(65132, '');
        cm.updateInfoQuest(26011, '');
        cm.forceStartQuest(7290, '0');
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk_Bottom("#face0#才刚一走进这里，立刻就能够感受到这里有多么阴森。", 37, 9130010, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这里的气氛异常诡谲，真叫人起了一身的鸡皮疙瘩。", 57, 9131003, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("而且，周围的声音如此嘈杂……看来我们并不是唯一的入侵者啊。", 57, 9131003, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#敌人就在本能寺内……看来除了我们之外，还有人也是这么想的。", 37, 9130010, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你知不知道是怎么回事？这里到底发生了什么啊？", 57, 9131003, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#我这就去调查这里到底出了什么事。 神那你还是尽快前去阻止仪式的进行吧。", 37, 9130009, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#负责攻占北侧佛堂的相马和次藤已经出发了。正如谦信大人所言，就请你直接前去阻止仪式，不要再分心去管周围的情况了。", 37, 9130010, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你的任务就是破坏设置在西侧佛堂的结界，削弱正殿的气势。然后前往破坏掉正殿地下的祭坛，这样才能正式阻止仪式的进行。千万不要忘了这一点！", 37, 9130010, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('我明白了。', 57, 9131003, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#动作一定要快啊，神那！", 37, 9130010, true, true, 1);
                        } else if (status === V++) {
                          cm.setStandAloneMode(false);
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.fieldEffect_SetObjectState("guide1");
                          cm.fieldEffect_SetObjectState("guide2");
                          cm.fieldEffect_SetObjectState("guide3");
                          cm.OnStartNavigation(807100100, 0, "out00", 0);
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
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ScreenMsg("JPKanna/text1");
      cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(807100101, 1, false);
      cm.curNodeEventEnd(true);
      cm.setStandAloneMode(false);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ScreenMsg("JPKanna/text2");
      cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(807100102, 1, false);
      cm.curNodeEventEnd(true);
      cm.setStandAloneMode(false);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function action5(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.spawnMobLimit(9421572, 1, -450, 32, 100);
      cm.spawnMobLimit(9421572, 1, -360, 32, 100);
      cm.spawnMobLimit(9421572, 1, -270, 32, 100);
      cm.spawnMobLimit(9421572, 1, -180, 32, 100);
      cm.spawnMobLimit(9421572, 1, -90, 32, 100);
      cm.spawnMobLimit(9421572, 1, 0, 32, 100);
      cm.spawnMobLimit(9421572, 1, 90, 32, 100);
      cm.spawnMobLimit(9421572, 1, 180, 32, 100);
      cm.spawnMobLimit(9421572, 1, 270, 32, 100);
      cm.spawnMobLimit(9421572, 1, 360, 32, 100);
      cm.spawnMobLimit(9421572, 1, 450, 32, 100);
      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/1"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/2"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/3"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.addPopupSay(9130081, 5000, "#e消灭全部敌人吧！#n\r\n", '', 0);
          cm.playerMessage(-1, "来击倒所有敌人吧！");
          cm.fieldEffect_ScreenMsg("aran/tutorialGuide2");
          cm.teachSkill(40021183, 1, -1);
          cm.teachSkill(40021184, 1, -1);
          cm.teachSkill(40021185, 1, -1);
          cm.teachSkill(40021186, 1, -1);
          cm.setStandAloneMode(false);
          cm.playerMessage(-1, "来打倒所有的敌方阴阳师吧！");
          cm.dispose();
        }
      }
    }
  }
}
function action6(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(6);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/4"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/5"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(2063, 0);
              cm.inGameDirectionEvent_头顶图片(["Skill/4212.img/skill/42121005/tile/begin"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Skill/4212.img/skill/42121005/tile/0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/6"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1440);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Skill/4212.img/skill/42121005/tile/end"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(960);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(807100104, 0, false);
                      cm.setStandAloneMode(false);
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action7(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.npc_SetSpecialAction("oid=107500", "back", 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(3);
        cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/7"], [0, 0, -100, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/8"], [0, 0, -100, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/9"], [0, 250, -150, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kannaTuto/balloonMsg/10"], [0, 0, -100, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(2065, 0);
                cm.inGameDirectionEvent_头顶图片(["Skill/4200.img/skill/42001000/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(270);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(2066, 0);
                  cm.inGameDirectionEvent_头顶图片(["Skill/4200.img/skill/42001005/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(330);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Skill/4212.img/skill/42121008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(807100105, 0, false);
                    cm.setStandAloneMode(false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
function action8(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(25980, 'normal=#');
        cm.updateInfoQuest(25980, "normal=#;hard=#");
        cm.gainExp(15);
        cm.gainExp(34);
        cm.gainExp(57);
        cm.gainExp(92);
        cm.gainExp(135);
        cm.gainExp(372);
        cm.gainExp(560);
        cm.gainExp(840);
        cm.updateInfoQuest(39391, "level=1");
        cm.gainExp(1242);
        cm.forceStartQuest(57376, '1');
        cm.updateInfoQuest(1073, '4200=10');
        cm.teachSkill(40021227, 0, -1);
        cm.teachSkill(40021227, 1, 1);
        cm.finishAchievement(124);
        cm.finishAchievement(121);
        cm.playVideoByScript("JPKanna.avi");
      } else if (status === V++) {
        cm.dispose();
        cm.warp(807040000, 0, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.setStandAloneMode(false);
        cm.forceStartQuest(57471, '');
        cm.forceCompleteQuest(57471);
      }
    }
  }
}
function action9(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action11(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action12(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action13(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action14(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function action15(f, E, e) {
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