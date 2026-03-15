var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#最好和附近的居民们谈谈。", 36, 9401278, false, true, 1);
    } else if (status === v++) {
      cm.forceStartQuest(65938, '');
      cm.setPartner(true, 9401309, 80012075, 0);
      cm.setPartner(true, 9401317, 80012076, 0);
      cm.dispose();
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#最近有没有可疑的人？比如说穿着黑衣的外乡人？", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("那种可疑的人别想靠近仓库，哼！", 36, 9401296, true, true, 1);
      } else if (status === v++) {
        cm.updateInfoQuest(65938, "NpcSpeech=94012961");
        cm.dispose();
      }
    }
  }
}
function stage1(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("最近见到的可疑人物……当然是南部山寨的山贼门路！哈哈。\r\n但是现在他们已经被玄山派的众位大侠铲除，以后不会有什么事了！", 36, 9401298, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("最近见到的可疑人物……当然是南部山寨的山贼门路！哈哈。\r\n但是现在他们已经被玄山派的众位大侠铲除，以后不会有什么事了！", 36, 9401298, false, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("但是……他们应该已经被一网打尽了吧？\r\n要是还有残党在各个山头上流窜，那就让人头疼了……", 36, 9401298, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("哎呀，是我在玄山派大侠面前瞎担心了！哈哈哈。", 36, 9401298, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#所以……说了半天，除了山贼之外谁都没有见到，是吗？", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("不、不如去酒肆看看，怎么样？\r\n那里的老板娘消息灵通，没有她不知道的事情！", 36, 9401298, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#唉，明白了。去那边看看吧！", 36, 9401278, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#……玄山派的事情还没传出去，所以才会那么说。别太在意。", 36, 9401278, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#事情传出去没什么好处，所以我先没有声张。", 36, 9401278, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face5##b谢谢。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#……到酒肆去看看吧！", 36, 9401278, true, true, 1);
                        } else if (status === v++) {
                          cm.updateInfoQuest(65938, "NpcSpeech=94012961/94013182");
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
function stage2(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("可疑的人？不久前菊姬好像提到过~", 36, 9401294, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#那你看见玄山派云雾公子到村里来过吗？", 36, 9401278, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("没看见。哎呀呀，天哪，云雾公子和那些黑衣男子有关系吗？", 36, 9401294, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#哎呀，你从哪里听到那种话的？完全不是。", 36, 9401278, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("嗯~明白了。看那个反应，是不是更像真的了？", 36, 9401294, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("对了！墨玄大侠~\r\n据说在村庄外围的废弃仓库里经常有奇怪的声音传出来。\r\n人们都很害怕，不敢进去查看……", 36, 9401294, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4##b……原来如此。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("……嗯……大侠，你能帮我个忙吗？", 36, 9401294, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face6##b现在……好像不行了。以后，以后一定哦。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("啊……啊！我不该在你这样的大忙人面前提这种事的，呵呵呵……", 36, 9401294, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom('#face8#(…' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "…) ", 36, 9401277, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face3##b（……现在……没有余力帮助别人……昨天要不是我太晚了的话……）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#等事情整理完毕之后，我一定会帮你的。", 36, 9401277, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#呵呵，那就后会有期了~", 36, 9401278, true, true, 1);
                              } else if (status === v++) {
                                cm.updateInfoQuest(65938, "NpcSpeech=94012961/94013182/94012943");
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
function stage3(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("是的！我看到了！\r\n三四天前在通往玄山的路口。", 36, 9401295, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("当时我正在摘花，突然就从树顶上嗖嗖地飞过去了！", 36, 9401295, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b他们跑到玄山上去了吗？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("我没看到他们去了哪里。", 36, 9401295, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#多谢。", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#没能获得什么有用的情报。", 36, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face4#啊！毒药！", 36, 9401277, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom('#face3#毒药？', 36, 9401278, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#那天晚上从玄山上下来，发现了喝了水之后倒下的林达尔。", 36, 9401277, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#我把林达尔交给医生照顾。另外为了查明原因，还取回了那种水交给了医生。", 36, 9401277, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3##b现在应该已经查明是什么毒药了。去看看吧！", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face3#我也一起去！", 36, 9401278, true, true, 1);
                          } else if (status === v++) {
                            cm.updateInfoQuest(65938, "NpcSpeech=94012961/94013182/94012943/94012954");
                            cm.updateInfoQuest(1068, "count=60;time=20210319");
                            cm.npc_LeaveField("oid=206820");
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
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("原来是你们……", 36, 9401297, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face4#你好，医生！那时的那种毒药……", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("果然……是散功毒。", 36, 9401297, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#散功毒不是让人无法凝聚内功的剧毒吗？", 36, 9401278, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('看来你们知道啊……', 36, 9401297, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#那种毒药在运用内功之前毫无察觉，连江湖高手也非常忌惮，所以一直禁止使用。", 36, 9401278, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("林达尔是擅长运用内功的灵物……所以一喝下水就发生了反应。", 36, 9401297, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("但幸好你们发现及时，所以才能捡回一条命……", 36, 9401297, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face5##b你是说……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face6#……也就是说……那时候散功毒应该已经解开了。", 36, 9401277, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face6#……医生，中了散功毒会怎么样呢？……很疼吗？", 36, 9401277, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("嗯……我不会武功，所以不太清楚……气血扭曲有多痛苦……", 36, 9401297, true, true, 1);
                          } else if (status === v++) {
                            cm.setPartner(false, 9401309, 0, 0);
                            cm.setPartner(false, 9401317, 0, 0);
                            cm.forceCompleteQuest(65938);
                            cm.gainExp(5146);
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