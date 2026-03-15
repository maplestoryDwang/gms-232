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
      cm.sendNormalTalk_Bottom("#face0#试着和村民们对话，怎么样？", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#我往这边走。墨玄大侠，右边就交给你了！", 37, 9401283, true, true, 1);
      } else if (status === v++) {
        cm.forceStartQuest(65966, '');
        cm.OnStartNavigation(211000000, 1, "2020006", 0);
        cm.dispose();
      }
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
      cm.sendNormalTalk_Bottom("只能在冰峰雪域找到的特别的东西？\r\n有不少呢。比如说白雪人或野狼的毛……", 36, 2020006, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("嗯，但是那种东西在市场上有很多，用不着跑到这里来寻找。", 36, 2020006, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("要不你去问问魔法师阿尔卡斯特？\r\n他在这个村子生活了300年，知道的事情比我多得多。", 37, 2020006, true, true, 1);
        } else if (status === v++) {
          cm.updateInfoQuest(65966, "NpcSpeech=20200061");
          cm.OnStartNavigation(211000000, 1, "2020005", 0);
          cm.dispose();
        }
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
      cm.sendNormalTalk_Bottom("只有在冰峰雪域才能找到的特别珍贵的东西……", 36, 2020005, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("虽然没亲眼见过，但是据记载，冰峰雪域出产一种经过寒气长年淬炼，硬度比秘银还要高的铁。", 36, 2020005, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b谢谢你的宝贵情报。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("我也只是在书上见到过。\r\n对了……差点忘了那个东西了。", 36, 2020005, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0##b你说什么？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("据说在人迹罕至的冰雪峡谷深处，有一个自然气息凝聚不散的特别场所。那种气息不断积累，最后化作了一滴水。", 36, 2020005, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("据说那是一种让人恢复青春的灵药，但也许只是个传说。", 36, 2020005, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##b谢谢。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0##b（坚硬的铁和灵药吗……把情报告诉小兰吧。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else if (status === v++) {
                      cm.updateInfoQuest(65966, "NpcSpeech=20200061/20200052");
                      cm.OnStartNavigation(211000000, 1, '9401341', 0);
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
      cm.sendNormalTalk_Bottom("#face2#墨玄大侠，有什么收获吗？\r\n唉，我被猎人抓住，差点被剥了皮卖掉！说什么是冰峰雪域的特产，唉！", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##b（转述了从阿尔卡斯特那里听到的情况。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#真的吗？在冰峰雪域也能找到那个？", 36, 9401283, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b在其他地方也能弄到吗？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#嗯！照这么看，一定是#e万年寒铁和空青石乳#n。\r\n虽然很稀有，但在江湖应该也能找到！", 37, 9401283, true, true, 1);
            } else if (status === v++) {
              cm.forceCompleteQuest(65966);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}