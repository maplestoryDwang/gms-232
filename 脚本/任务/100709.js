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
      cm.sendNormalTalk("#e#b#h0##k#n！过得还好吗？\r\n\r\n我这次来是真的有个#r#e天大的消息#n#k要告诉你！", 4, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e格兰蒂斯#n#k和#r#e冒险岛世界#n#k原本曾是#e一个次元#n，\r\n这个消息你听说了吧？", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("随着两个次元合为一体，在冒险岛世界和格兰蒂斯#b#e海相交处#n#k形成了一座非常#r#e神秘的城堡#n#k！\r\n\r\n那是一座#e美丽到仿佛承载着整个宇宙的城堡#n！", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("海上神秘城堡！\r\n\r\n#fs15##r#e城堡的名字便叫作……焕新城堡！", 4, 9010010, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("焕新城堡的#b#e精灵#n#k正在#r#e邀请#n#k冒险岛世界和格兰蒂斯的人们！", 4, 9010010, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("焕新城堡#b#e精灵#n#k的邀请……？", 2, 0, true, true);
              } else {
                if (status === v++) {
                  cm.askYesNo("好吧！#e#b#h0##k#n！\r\n大家都收到邀请，早就去焕新城堡了呢！\r\n怎么样？你对#r#e焕新城堡#n#k感兴趣吗？\r\n\r\n #r※接受后前往活动地图。", 4, 9010010);
                } else if (status === v++) {
                  cm.updateInfoQuest(100711, "point=0;sum=0;today=0");
                  cm.updateInfoQuest(100712, "point=0;today=0");
                  cm.updateInfoQuest(501215, "reward=000000000000000000000000000;point=0;sum=0;lastWeek=1;lock=0;week=0");
                  cm.updateInfoQuest(501252, "grade=0;str1=#c（未完成）#;str2=#c（未完成）#");
                  cm.forceCompleteQuest(100709);
                  cm.updateInfoQuest(100714, "rMap=" + cm.getMapId());
                  cm.dispose();
                  cm.warp(993189101, 0, false);
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