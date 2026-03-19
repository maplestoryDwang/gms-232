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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530060, "oid=21174733", 855, 58, 3, 805, 905, 1, true, false);
      cm.npc_SetSpecialAction("oid=21174733", 'summon', 0, 0);
      cm.npc_ChangeController(1530520, "oid=21174734", 570, 58, 2, 520, 620, 0, true, false);
      cm.npc_SetSpecialAction("oid=21174734", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=21174733", "sit", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 150, 730, 58);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs26#1年前\r\n#fs14#希纳斯的办公室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(5139);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("哎呦呦~~哈哈哈，希纳斯小姐。真是好久不见了啊。自从上次股东大会之后咱们就再没见过吧？", 37, 1530520, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH1_00/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("小姐你真是越来越漂亮了。现在也快可以结婚了吧~真是浑身都散发着神兽集团独生女的气质啊。噢哈哈哈哈哈~", 37, 1530520, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH1_00/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#谢谢您，阿烈达夫人。夫人您的双下巴也是非常漂亮呢。", 37, 1530060, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_00/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哈哈哈，你太客气了……什么？", 37, 1530520, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH1_00/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我说您的双下巴很漂亮，阿烈达夫人。", 37, 1530060, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH1_00/5", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=21174733"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.npc_SetSpecialAction("oid=21174734", "smile", -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哈哈哈哈，谢谢。", 37, 1530520, false, true);
                          cm.effect_Voice("Voice2.img/Friends/CH1_00/6", 100);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b（真是个聪明伶俐的孩子……！)", 37, 1530520, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH1_00/7", 100);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=21174734");
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("噢哈哈，您太客气了。不过您有什么事吗？", 37, 1530060, false, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH1_00/8", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我是来参观参观新学校的。这所学校真不错。虽然学校不错，不过……", 37, 1530520, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH1_00/9", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不过为什么偏偏要建学校呢，在这么好的位置，建学校不是太可惜了吗~？如果建成别的建筑的话，一定能赚更~多钱的。哈哈哈。", 37, 1530520, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH1_00/10", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#阿烈达夫人您也真是的~这当然是因为我是学生了。", 37, 1530060, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH1_00/11", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……什么？", 37, 1530520, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH1_00/12", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我的意思是我只建造我需要的建筑。", 37, 1530060, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH1_00/13", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……所以，就是因为你需要一所学校去上学，所以就建造了这里~！", 37, 1530520, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice2.img/Friends/CH1_00/14", 100);
                                                cm.sendNormalTalk_Bottom("是啊~  ", 37, 1530060, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH1_00/15", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……那么原来的学校建筑呢……？", 37, 1530520, true, true);
                                                  cm.effect_Voice("Voice2.img/Friends/CH1_00/16", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("为了留作纪念，保留在新建筑旁边了。", 37, 1530060, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH1_00/17", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("……哦哈哈。我听学生们说，这里的交通不是很方便。所以原来不是计划很快要把这里的学校拆除的吗~？", 37, 1530520, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH1_00/18", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎呦，这您就不必担心了。我已经把巴士公司买下来了。虽然我都是坐私家车上学的。", 37, 1530060, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH1_00/19", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("噢，噢哈哈，原来如此。", 37, 1530520, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH1_00/20", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("没想到您能这么为学生们着想，还真是一位和蔼可亲的夫人呢。", 37, 1530060, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH1_00/21", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=21174733"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.npc_SetSpecialAction("oid=21174734", "smile", -1, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("噢，噢哈哈，我本来就是比较和蔼可亲的。哈哈哈哈哈……", 37, 1530520, false, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH1_00/22", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(330002113, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;