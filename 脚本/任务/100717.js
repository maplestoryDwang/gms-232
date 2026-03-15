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
      cm.sendNormalTalk("#e#b#h0##k#n！你好！", 4, 9062454, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("我和你提过吧？我是和焕新城堡一起诞生的精灵……", 4, 9062454, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("虽然现在是人形，但随着时间的流逝，会再度变回艾尔达之流的……", 4, 9062454, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("所以在变回艾尔达之前，我想要尽情地看看这个世界，尽情地享受这个世界！", 4, 9062454, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("#e#b#h0##k#n！你能帮帮我吗？", 4, 9062454);
            } else {
              if (status === v++) {
                cm.updateInfoQuest(501229, "mission=0");
                cm.updateInfoQuest(501229, "mission=0;state=0");
                cm.updateInfoQuest(501229, "lastWeek=1;mission=0;state=0");
                cm.updateInfoQuest(501229, "start=1;lastWeek=1;mission=0;state=0");
                cm.forceCompleteQuest(100717);
                cm.openUI(1290);
                cm.sendNormalTalk("哇！真的谢谢你！", 4, 9062454, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("这本写满各种好奇的#r#e探险日记#n#k就交给#e#b#h0##k#n你了！\r\n我无法离开焕新城堡，请你替我去调查吧！", 4, 9062454, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("探险日记可以有4种！\r\n\r\n#e#b[里奥的探险日记]#k\r\n\r\n 第一种-消灭等级范围怪物\r\n第二种-消灭精英怪物&冠军\r\n第三种-使用符文\r\n第四种-通关保罗&普利托", 4, 9062454, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("完成探险日记后会获得#b#e#i4310306# #t4310306##n#k！\r\n\r\n#e[里奥的探险日记]\r\n 第一种-#b#e#i4310306# #t4310306##k 100个\r\n 第二种-#b#e#i4310306# #t4310306##k 100个\r\n 第三种-#b#e#i4310306# #t4310306##k 200个\r\n 第四种-#b#e#i4310306# #t4310306##k 400个", 4, 9062454, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("#b#e每周四#n#k我会写下全新的探险日记，请在这之前完成调查哦！", 4, 9062454, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("那这周也要为了我加油啊！", 4, 9062454, true, false);
                        } else if (status === v++) {
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
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}