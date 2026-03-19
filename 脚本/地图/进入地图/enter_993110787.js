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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -93, -40);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.SitOnDummyPortableChair(3018397, 1);
        cm.npc_ChangeController(3004161, "oid=2405600", -26, 5, 32, -76, 24, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2405600", 'summon', 0, 0);
        cm.npc_ChangeController(3004162, "oid=2405601", -98, 6, 32, -148, -48, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2405601", "summon", 0, 0);
        cm.npc_ChangeController(3001657, "oid=2405602", 446, 28, 64, 396, 496, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2405602", "summon", 0, 0);
        cm.npc_ChangeController(3001658, "oid=2405603", 350, 31, 64, 300, 400, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2405603", 'summon', 0, 0);
        cm.Npc_Fadeout("oid=2405602", 0, 1);
        cm.Npc_Fadeout("oid=2405603", 0, 1);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#“万民有倒悬之危，吾辈若恬不为怪，\r\n岂非枉担羽士之名……”", 36, 3001676, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#那个人总是说着这样的话，拯救了冒险岛世界和格兰蒂斯的无数村庄。", 36, 3004161, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#全新登场！即将继承太乙真人衣钵的神出鬼没道士！", 36, 3004161, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#听闻那炯炯有神的眼睛比老虎都要勇猛，那神奇的道术力量绝世无双。", 36, 3004161, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face0#' + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "是冒险岛世界的超越者，然而在击败黑魔法师之后就突然隐去踪迹，\r\n传说" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "现如今还在世界中的某处流连。", 36, 3004161, true, true);
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
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                          cm.effect_Text(["#fn黑体##fs18#青云谷商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#哇……超酷的，\r\n快继续念下一卷……", 36, 3004161, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#道士现在会在哪儿呢？", 36, 3004161, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#一定在四处扫荡超可怕的恶鬼吧？", 36, 3004162, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 300, -40);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.npc_ChangeController(3001651, "oid=2405604", 427, -217, 43, 377, 477, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2405604", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#……", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#小鬼们，我都快没法做生意了，你们去别处闲聊吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#唔……那个击败了黑魔法师的传奇道士……", 36, 3001651, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#居然会借酒肆之地接些无聊的解决师委托……", 36, 3001651, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#哟呵，饕餮，什么叫无聊。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#你不记得刚刚我们险些被那蟒蛇怪一口吞了吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#那种区区怪物……要是放在从前我能使出全力的时候，一口它就没了……", 36, 3001651, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#那什么，你还记得上回在崔大人府上接受的委托吗？", 36, 3001651, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#有宫廷般的瓦房，还有动动手指就跑过来的仆人……", 36, 3001651, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#最重要的是上的那十六道山珍海味，可真是受到了无微不至的款待……", 36, 3001651, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face9#对我来说，搭配酸辣泡菜的浓稠汤饭才更合适。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face9#况且……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face9#那些怨恨深重的小鬼\r\n会附身鱼肉乡里之人，是理所当然的事……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face9#说来奇怪，为什么非得我亲自出马啊？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face9#虽然拂晓时分翻墙越舍是有些辛苦，不过……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face10#呵呵……不过好歹还是多亏了我的独门秘术\r\n遁甲术，才能顺利逃出来。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#（不就只是用木棒支起来被子嘛……）", 36, 3001651, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 429, -3);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Npc_Fadeout("oid=2405602", 255, 1500);
                                                                                  cm.Npc_Fadeout("oid=2405603", 255, 1500);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#听说，新超越者准备在格兰蒂斯开战了？", 36, 3001657, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#没错，听说生有龙角龙尾之人在万神殿内召集群雄，正集结着对抗势力。", 36, 3001658, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#鹿死谁手尚未可知……\r\n虽说是诺巴守护神，奈何要对抗的是超越者，似乎力有不逮啊。", 36, 3001657, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 300, -40);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face11#……", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face12#……听到了吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#听到了。", 36, 3001651, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face5#既然与我一般生具异相，有着特别的耳朵和尾巴……\r\n那心意一定也能相通。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#既然提到龙人……\r\n应该不会是阿尼玛，或许是诺巴吧。", 36, 3001651, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face6#走吧，饕餮。\r\n友人遇险时拔刀相助，才是真正的道士所为。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#我说……这么快就交上朋友了？！", 36, 3001651, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.SitOnDummyPortableChair(0, 1500);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.Npc_Fadeout("oid=2405604", 0, 1500);
                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 210);
                                                                                                                cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#喂，小鬼头们，解决师今日起不限时打烊了。", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=2405600", 1);
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#怎么回事啊，" + (cm.getPlayer().getGender() == 0 ? '哥哥' : '姐姐') + "，你要去哪儿？", 36, 3004161, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face5#有要事在身，得出一趟远门。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face5#在师父回来之前，\r\n你们就用我传授的道术好好保护村庄。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#明明连个像样的道术都没教给我！", 36, 3004162, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#下次来的时候，一定要教我真正的道术哦！", 36, 3004161, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=2405600", -1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#到底为什么不亮出身份啊？", 36, 3001651, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#如果知道了你就是书中的那位传奇道士，肯定会有无数人追随你的。", 36, 3001651, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你一心想要入世，与凡人共进退有什么了不起的，\r\n以你的本领还能变得更伟大呢。", 36, 3001651, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#这番恶战过后，我有所感悟。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face9#结庐层巅观幽霭，浮泛青霄意自在。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face11#啸咤胸中凌云志，不教恶浊因风来。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你这家伙还真是让人捉摸不透啊。", 36, 3001651, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face5#当然，最重要的是……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#被世人尊为传奇之人，\r\n又怎能忍心打破他们美丽动人的幻想呢？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#孩儿们个个良才美质，我可万万不能伤了他们入道的初愿啊。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face5#诚然，我不似传奇中那般勇猛。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#可若要论虚虚实实、铺谋定计，格兰蒂斯无一人能胜我。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#那什么……饕餮我也明白了，并非只有取得正面胜负\r\n才是唯一的答案。", 36, 3001651, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你这家伙常常出人意表，想来与你同行也不至无聊了。", 36, 3001651, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=2405600", 1);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#那解决师" + (cm.getPlayer().getGender() == 0 ? '哥哥' : '姐姐') + "，在你离开村庄之前，至少告诉我你的名字吧！", 36, 3004161, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#没错，没错。", 36, 3004162, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#哟呵，难道？！", 36, 3001651, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face12#我……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#咕嘟", 36, 3001651, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#（咕嘟）", 36, 3004161, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#(咕……嘟？)", 36, 3004162, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_hoyoung/0", 0, 1000, 0, -100, 1, 4, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n就在格兰蒂斯滋垢生秽，\r\n人心惶惶的某个混乱时刻。", 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n有人向那个救解众生的道士问起了" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "的名字。", 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n然后那个道士，一脸神秘地说道……", 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 36, 3001676, false, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/restart_hoyoung/1", 0, 1000, 0, -100, 1, 4, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不过是位，", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#云游此间的道士罢了。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 0);
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 100, 0, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 100, 0, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_Hero9(0, 3000);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                  cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                    cm.forceStartQuest(39701, '');
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(993120000, 5, false);
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405600");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405600");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405601");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405601");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405602");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405602");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405603");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405603");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405604");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2405604");
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}