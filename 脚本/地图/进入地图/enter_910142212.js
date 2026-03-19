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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("#b#h0##k，现在开始，我来简单说明一下主教的技能。", 1, 1032001, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题。你是否知道以下哪个是主教的基本技能？\r\n\r\n#b#L0#祈祷众生#l\r\n#L1#三彩箭矢#l\r\n#L2#爆击蓄能#l", 1, 1032001);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！ #b祈祷众生#k!", 1, 1032001, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2300009"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("正如你所看到的，#b祈祷众生#k是根据主教周围所受增益的队员人数来提高其总伤害。因此是非常适合主教的技能！", 1, 1032001, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("基本技能非常重要……不过，你知道主教技能中#r最强大的技能#k是什么吗？", 3, 1032001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("那么，我来告诉你吧！就是叫做#r创世之破#k的技能。", 1, 1032001, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2321001"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2520);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("虽然这已经是非常强大的技能，但这其中隐藏着一个秘密，那就是……", 1, 1032001, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2321008"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2520);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("施展#b圣光普照#k后，可在一定时间内，以完全充满的状态施展创世之破！", 1, 1032001, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你想试一试吗？我会召唤一只怪物让你进行练习。", 1, 1032001, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(1072009, "oid=1226594", -850, 1326, 57, -900, -800, 0, false, 0, false);
                                cm.npc_SetSpecialAction("oid=1226594", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(120);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("现在，进行攻击吧！", 1, 1032001, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_OneTimeAction(693, 0);
                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/effect0"], [1200, 0, 0, 1, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(120);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Use", 100);
                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/4"], [2220, 150, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/1"], [2220, -150, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/2", "oid=1226594"], [2220, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [1440, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/0"], [2220, -300, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/3"], [2220, 0, 0, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/tile/5"], [2220, 300, 0, 0, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("现在已经施展了#b圣光普照#k，快将#b创世之破#k充满后，进行痛快地攻击吧！", 1, 1032001, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(61, 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/effect"], [1440, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(90);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/hit/0", "oid=1226594"], [900, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Hit", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                        cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 80, 0, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                            cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 50, -50, 0, 0, 0, 0, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, 50, 0, 0, 0, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, 80, 0, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, 80, 0, 0, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -30, 30, 0, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 125, 1, 30, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 0, -80, 0, 0, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                          cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -20, -80, 0, 0, 0, 0, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, -50, 0, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, -50, -50, 0, 0, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, -80, 0, 0, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, -80, 0, 0, 0, 0, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, -50, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                      cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                                                      cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 80, 0, 0, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                          cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 50, -50, 0, 0, 0, 0, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, 50, 0, 0, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, 80, 0, 0, 0, 0, 0, 0]);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, 80, 0, 0, 0, 0, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -30, 30, 0, 0, 0, 0, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 125, 1, 30, 0, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 0, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                        cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -20, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, -50, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                                    cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                                                                                    cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Use", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 80, 0, 0, 0, 0, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                        cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 50, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, 50, 0, 0, 0, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, 80, 0, 0, 0, 0, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, 80, 0, 0, 0, 0, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -30, 30, 0, 0, 0, 0, 0, 0]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, 125, 1, 30, 0, 0, 0, 0]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 0, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321008/hit/0", "oid=1226594"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                      cm.fieldEffect_PlayFieldSound("advTutorial/2321008/Hit", 100);
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, -20, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, 20, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, -50, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/0"], [300, 50, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/2"], [300, -90, -80, 0, 0, 0, 0, 0, 0]);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/232.img/skill/2321001/special/1"], [300, 90, -50, 0, 0, 0, 0, 0, 0]);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2321001/hit/0"], [900, 0, 10, 1, -50, 0, 0, 0, 0]);
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("advTutorial/2321001/Hit", 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk("怎么样？如此华丽又强大的技能！是不是很厉害啊？", 1, 1032001, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.askYesNo("那么，主教技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1032001);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                      cm.forceCompleteQuest(32225);
                                                                                                                                                      cm.npc_LeaveField("oid=1226594");
                                                                                                                                                      cm.dispose();
                                                                                                                                                      cm.warp(101000003, 0, false);
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}