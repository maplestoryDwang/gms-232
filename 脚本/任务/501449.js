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
      cm.sendNormalTalk("哈喽？#h0#~！你听说了吗？那个……\r\n\r\n#fs20##e我的小屋要进行全新装修啦！", 4, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("你好像不久前才在冒险岛世界中实现自己的买房梦，现在竟然又要进行全新装修了。这次卡珊德拉依旧不会善罢甘休的！", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("你应该也知道。装饰房子最重要的是找准属于自己的风格。所以这次为了迎接全新装修，我准备了特别礼物！", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("正是#fs20##b#e焕新城堡限定家具！#k#n", 4, 9010010, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("你问我那是什么~？出现在冒险岛世界和格兰蒂斯#b#e大海汇合处#n#k的神秘城堡，仿佛蕴含宇宙般的美丽城堡，那就是拥有#b#e焕新城堡#n#k风格的“限定版”家具！\r\n如果错过这次机会，可能就永远与它无缘了！", 4, 9010010, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("怎样才能获得礼物呢？", 2, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("条件很简单。在活动时间内努力家具选购就OK啦！\r\n领取每周<[我的小屋]与焕新城堡同在的家具选购>任务后，家具选购达成一定次数以上时，我就会给你#b2个#t2633545##k！", 4, 9010010, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("此外，整个活动期间内。家具选购累计达成一定次数以上时，我还会额外送你2种特别家具。千万不要错失良机哦~", 4, 9010010, true, true);
                  } else {
                    if (status === v++) {
                      cm.askYesNo("怎么样？你准备好领取我为你准备的焕新城堡限定家具了吗？", 4, 9010010);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("棒极了！那么从现在开始作为迎接全新装修的纪念，快去努力选购家具，并再次将你的房子装修得更加华丽吧！", 4, 9010010, false, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("哎呦喂，我听说呀，也许是因为家具出售处最近销售额猛涨，他们正向购买家具的常客提供回馈服务。接下来就让我们尽情地沉浸在购物天堂中吧~", 4, 9010010, true, true);
                        } else if (status === v++) {
                          cm.forceCompleteQuest(501449);
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