var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getMapId() - 330002040;
  var O = "action" + V;
  eval(O)(f, E, e);
}
function action0(f, E, e) {
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
      cm.npc_ChangeController(1530011, 'oid=29639', -1868, 148, 73, -1918, -1818, 0, false, false);
      cm.npc_ChangeController(1530012, "oid=29640", -2070, 148, 69, -2120, -2020, 0, false, false);
      cm.npc_ChangeController(1530013, "oid=29641", -2188, 148, 75, -2238, -2138, 0, false, false);
      cm.npc_ChangeController(1530014, "oid=29642", -2296, 148, 74, -2346, -2246, 0, false, false);
      cm.npc_ChangeController(1530015, "oid=29643", -2507, 148, 81, -2557, -2457, 0, false, false);
      cm.npc_ChangeController(1530016, "oid=29644", -2407, 148, 76, -2457, -2357, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530010, "oid=20177223", -1620, 100, 72, -1670, -1570, 0, false, false);
      cm.npc_SetSpecialAction("oid=20177223", 'summon', 0, 0);
      cm.npc_ChangeController(1530100, "oid=20177224", -300, 100, 103, -350, -250, 0, true, false);
      cm.npc_SetSpecialAction("oid=20177224", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=20177225", 100, 100, 99, 50, 150, 0, true, false);
      cm.npc_SetSpecialAction("oid=20177225", "summon", 0, 0);
      cm.npc_ChangeController(1530090, "oid=20177226", 200, 100, 98, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=20177226", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("女皇陛下，您一直在这里吗？", 5, 1530011, false, true);
          cm.effect_Voice("Voice2.img/Friends/prologue/1", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 100, -1933, 132);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4059);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=20177223", -1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                  cm.effect_Text(["#fn黑体##fs26#圣地\r\n#fs14#~女皇的休息处~"], [100, 1800, 4, 0, 0, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#p1530011#。", 5, 1530010, false, true);
                    cm.effect_Voice("Voice2.img/Friends/prologue/2", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你那么聚精会神的，想什么呢？", 5, 1530011, true, true);
                      cm.effect_Voice("Voice2.img/Friends/prologue/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("哈哈……我做了一个有趣的梦。", 5, 1530010, true, true);
                        cm.effect_Voice("Voice2.img/Friends/prologue/4", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("做梦？", 5, 1530011, true, true);
                          cm.effect_Voice("Voice2.img/Friends/prologue/5", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("是作为另一个世界的#p1530010#生活的梦。", 5, 1530010, true, true);
                            cm.effect_Voice("Voice2.img/Friends/prologue/6", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("另一个世界……？", 5, 1530011, true, true);
                              cm.effect_Voice("Voice2.img/Friends/prologue/7", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("是的。和这里完全不同的世界。", 5, 1530010, true, true);
                                cm.effect_Voice("Voice2.img/Friends/prologue/8", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("那是一个既没有龙有没有魔法的神奇世界。每个人手里都会拿着一个小机器。", 5, 1530010, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/prologue/9", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我在那里是一个非常有钱的富家女儿。而且，每天还要去学校。", 5, 1530010, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/prologue/10", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("学校……真是个有趣的梦。那么在那里，我们是什么样的呢？", 5, 1530011, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/prologue/11", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("哈哈……我不告诉你。这周有什么事情吗？#p1530011#？", 5, 1530010, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/prologue/12", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("有个骑士团的阅兵式。详细的内容等我们一起去的时候我再说给您听。", 5, 1530011, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/prologue/13", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(0, 200, -1933, -773);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(4519);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.sendNormalTalk_Bottom("米哈尔、伊卡尔特！等等我！", 37, 1530100, false, true);
                                                cm.effect_Voice("Voice2.img/Friends/prologue/14", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -83, -773);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(924);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -83, 117);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4451);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=20177224", 1, 220, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=20177225", -1);
                                                            cm.npc_setForceFlip("oid=20177226", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                            cm.effect_Text(["#fn黑体##fs26#神兽国际学校\r\n#fs14#~ " + new Date().getFullYear() + "年, 大都市的某条街道~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("喂，真过分，就这么把我丢下你们两个一起走掉？", 37, 1530100, false, true);
                                                              cm.effect_Voice("Voice2.img/Friends/prologue/15", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("谁跟这种家伙一起走？只不过是偶然碰到而已。", 37, 1530090, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/prologue/16", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("那正是我要说的话，伊卡尔特。", 37, 1530080, true, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/prologue/17", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("什么嘛，又吵起来了？\r\n不过，昨天新出的电视剧你们看了没有？真不错，女主角长得那叫一个漂亮~", 37, 1530100, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/prologue/18", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(1530370, "oid=20191300", -400, 100, 104, -450, -350, 0, true, false);
                                                                      cm.npc_SetSpecialAction("oid=20191300", 'summon', 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("胡克，你这家伙！昨天打碎玻璃的是不是你？！", 37, 1530370, false, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/prologue/19", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("呃啊，是恶狼老师斯坦！我先撤了，回头见！", 37, 1530100, true, true);
                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/20", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=20177224", 1, 1300, 250);
                                                                            cm.npc_SetForceMove("oid=20191300", 1, 1400, 250);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#唔啊啊，老师要吃人啦！民主主义国家学校的老师能这么对待学生吗？", 37, 1530100, false, true);
                                                                              cm.effect_Voice("Voice2.img/Friends/prologue/21", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom('吵死了，你这家伙！', 37, 1530370, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/prologue/22", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(1530110, "oid=20194983", -200, 100, 102, -250, -150, 0, true, false);
                                                                                    cm.npc_SetSpecialAction("oid=20194983", 'summon', 0, 0);
                                                                                    cm.npc_ChangeController(1530120, "oid=20194984", -300, 100, 103, -350, -250, 0, true, false);
                                                                                    cm.npc_SetSpecialAction("oid=20194984", "summon", 0, 0);
                                                                                    cm.sendNormalTalk_Bottom("胡克从一大清早就吵个不停。", 37, 1530120, false, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/prologue/23", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=20194983", 1, 80, 100);
                                                                                      cm.npc_SetForceMove("oid=20194984", 1, 80, 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      cm.effect_NormalSpeechBalloon('！', 1, 0, 0, 2500, 1530080, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("搞什么，这不是米哈尔和伊卡尔特吗？", 37, 1530120, false, true);
                                                                                        cm.effect_Voice("Voice2.img/Friends/prologue/25", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("这么看来，你们两个虽然整天掐来掐去的，但还是形影不离呢。", 37, 1530110, true, true);
                                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/26", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                              cm.effect_Voice("Voice2.img/Friends/prologue/27", 100);
                                                                                              cm.effect_NormalSpeechBalloon("才不是那样. ", 1, 0, 0, 2500, 1530080, cm.getPlayer().getId());
                                                                                              cm.effect_NormalSpeechBalloon("才不是那样. ", 1, 0, 0, 2500, 1530090, cm.getPlayer().getId());
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("看吧，就连说话都异口同声，还真是默契。", 37, 1530110, false, true);
                                                                                                cm.effect_Voice("Voice2.img/Friends/prologue/28", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=20177225"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=20177226"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    cm.effect_NormalSpeechBalloon("呃……", 1, 0, 0, 2500, 1530080, cm.getPlayer().getId());
                                                                                                    cm.effect_NormalSpeechBalloon("……嗬……", 1, 0, 0, 2500, 1530090, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=20177224");
                                                                                                      cm.npc_LeaveField("oid=20191300");
                                                                                                      cm.npc_setForceFlip("oid=20177225", 0);
                                                                                                      cm.npc_setForceFlip("oid=20177226", 0);
                                                                                                      cm.npc_SetForceMove("oid=20177225", 1, 800, 120);
                                                                                                      cm.npc_SetForceMove("oid=20177226", 1, 800, 120);
                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, 417, 117);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_ChangeController(1530070, "oid=20201371", 400, 100, 86, 350, 450, 1, true, false);
                                                                                                          cm.npc_SetSpecialAction("oid=20201371", 'summon', 0, 0);
                                                                                                          cm.sendNormalTalk_Bottom("大家聚在一起干什么呢啊？", 37, 1530070, false, true);
                                                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/29", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_ChangeController(1530060, "oid=20201530", -400, 100, 104, -450, -350, 0, true, false);
                                                                                                            cm.npc_SetSpecialAction("oid=20201530", "summon", 0, 0);
                                                                                                            cm.npc_ChangeController(1530360, "oid=20201531", -550, 100, 106, -600, -500, 0, false, false);
                                                                                                            cm.npc_SetSpecialAction("oid=20201531", "summon", 0, 0);
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 117, 117);
                                                                                                            cm.effect_NormalSpeechBalloon('！', 1, 0, 0, 2500, 1530120, cm.getPlayer().getId());
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetForceMove("oid=20201371", -1, 300, 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("你好，学生会长。今天又是陪希纳斯小姐出来的吗？你可真是忠心耿耿啊。", 37, 1530120, false, true);
                                                                                                                cm.effect_Voice("Voice2.img/Friends/prologue/30", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("这是作为学生会长的职责嘛。因为她的地位就相当于这所学校真正的主人。", 37, 1530070, true, true);
                                                                                                                  cm.effect_Voice("Voice2.img/Friends/prologue/31", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_SetForceMove("oid=20194983", 1, 800, 120);
                                                                                                                    cm.npc_SetForceMove("oid=20194984", 1, 800, 120);
                                                                                                                    cm.npc_SetForceMove("oid=20201371", -1, 250, 100);
                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, -83, 117);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("早上好，希纳斯小姐。", 37, 1530070, false, true);
                                                                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/35", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("……啊，南哈特。早上好啊。", 37, 1530060, true, true);
                                                                                                                            cm.effect_Voice("Voice2.img/Friends/prologue/36", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("一大早的，就在那儿聚精会神地想什么呢啊？", 37, 1530070, true, true);
                                                                                                                              cm.effect_Voice("Voice2.img/Friends/prologue/37", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("其实，我昨晚做了个很有趣的梦。", 37, 1530060, true, true);
                                                                                                                                cm.effect_Voice("Voice2.img/Friends/prologue/38", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("什么梦？", 37, 1530070, true, true);
                                                                                                                                  cm.effect_Voice("Voice2.img/Friends/prologue/39", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("一个关于希纳斯生活在另一个世界的梦。", 37, 1530060, true, true);
                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/prologue/40", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("那是一个既有魔法又有龙存在的世界。我停留在一座漂浮在空中的岛屿之上，是一位率领骑士团的女皇。有趣吧？", 37, 1530060, true, true);
                                                                                                                                      cm.effect_Voice("Voice2.img/Friends/prologue/42", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("你最近在读小说吧？或者是玩了什么游戏？", 37, 1530070, true, true);
                                                                                                                                        cm.effect_Voice("Voice2.img/Friends/prologue/43", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哈哈……我也觉得这样的梦有点不可思议。\r\n这个星期有什么事情吗，南哈特？", 37, 1530060, true, true);
                                                                                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/44", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("会有一名#b转校生#k入学。", 37, 1530070, true, true);
                                                                                                                                            cm.effect_Voice("Voice2.img/Friends/prologue/45", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                              cm.effect_NormalSpeechBalloon('！', 1, 0, 0, 2500, 1530060, cm.getPlayer().getId());
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("转校生……？你说转校生？", 37, 1530060, false, true);
                                                                                                                                                cm.effect_Voice("Voice2.img/Friends/prologue/46", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("……？你怎么那么高兴？", 37, 1530070, true, true);
                                                                                                                                                  cm.effect_Voice("Voice2.img/Friends/prologue/47", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("啊……没什么啦。", 37, 1530060, true, true);
                                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/prologue/48", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=20201530"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("……转校生……\r\n很让人期待呢。哈哈哈。", 37, 1530060, false, true);
                                                                                                                                                          cm.effect_Voice("Voice2.img/Friends/prologue/49", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                            cm.dispose();
                                                                                                                                                            cm.warp(330002041, 0);
                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
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
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("Map/Effect2.img/spinOff1/title");
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(330002042, 0);
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.setInGameDirectionMode(false, true, false);
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530000, "oid=20213243", 320, 5, 17, 270, 370, 1, true, false);
      cm.npc_SetSpecialAction("oid=20213243", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("呃呃，真不想去上学……", 37, 1530000, false, true);
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
              cm.npc_SetForceMove("oid=20213243", 1, 150, 150);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("就算是转学又有什么用……\r\n我不管在哪所学校，都只能会被孤立。", 37, 1530000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("而且这次还是国际学校。\r\n名字也很奇怪！居然叫什么#b神兽国际学校#k！", 37, 1530000, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=20213243", -1, 150, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我能适应那里吗？\r\n唉，我肯定是适应不了了。一定又会被孤立的。", 37, 1530000, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我为什么偏偏要出生在这种需要上学的地方呢？\r\n与其这样还不如到#b别的世界#k去！", 37, 1530000, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("...?!", 1, 0, 0, 2500, 1530000, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……嗯？衣柜里面那是什么？", 37, 1530000, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=20213243", -1, 50, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Map/Obj/spinOff1.img/frame/ani/0", "oid=20213243"], [10000, 0, -30, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Map/Obj/spinOff1.img/frame/ani/0", "oid=20213243"], [10000, 10, -60, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Map/Obj/spinOff1.img/frame/ani/0", "oid=20213243"], [10000, 20, -55, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Map/Obj/spinOff1.img/frame/ani/0", "oid=20213243"], [10000, -10, -70, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("呃，呃啊！身体被吸进去了……？？！？", 37, 1530000, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(100000004, 0);
                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.forceStartQuest(32707, '');
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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