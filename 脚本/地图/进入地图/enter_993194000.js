var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(N, j, o) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = o;
  var Y = -1;
  if (status <= Y++) {
    cm.dispose();
  } else {
    if (status === Y++) {
      cm.hideNpc(9062550);
      cm.monadForceMove("studioBlue", 0, 0);
      cm.monadForceMove("studioPink", 0, 0);
      if (cm.getNumberFromQuestInfo(501469, "boosterTuto") > 0) {
        cm.dispose();
        return;
      }
      cm.openUI(1300);
      cm.sendNormalTalk("来，这是我准备的#b#e创作者步步高#n#k！", 5, 9062554, false, true, 0);
    } else {
      if (status === Y++) {
        cm.sendNormalTalk("就是要在进行任务的同时将过程拍成一档节目！", 5, 9062554, true, true, 0);
      } else {
        if (status === Y++) {
          cm.sendNormalTalk("完成任务并上传节目后#r#e#i4310314#粉丝#n#k就会嗖嗖大涨！\r\n\r\n粉丝送的#b#e#i4310312##t4310312##n#k和#b#e#i4310313##t4310313##n#k也会嗖嗖增多！\r\n\r\n\r\n #r ※完成任务后，可以获得粉丝和豆子。", 5, 9062554, true, true, 0);
        } else {
          if (status === Y++) {
            cm.sendNormalTalk("等到#r#e#i4310314#粉丝#n#k增多，名气见长，还能获得特别的礼物！\r\n\r\n\r\n #r ※粉丝每增加1000人可获得创作者步步高奖励。", 5, 9062554, true, true, 0);
          } else {
            if (status === Y++) {
              cm.sendNormalTalk("每天坚持做节目是很重要的，坚持参加\r\n每日任务，收集#b#e#i4310312# #t4310312##n#k吧！\r\n对了！每天可以增长的粉丝数上限是固定的！\r\n\r\n\r\n #r ※每日任务会在每天0点重置，每个世界每日任务粉丝最多仅能增长300人。", 5, 9062554, true, true, 0);
            } else {
              if (status === Y++) {
                cm.sendNormalTalk("啊！狩猎超强首领的节目能够获得#b#e#i4310313# #t4310313##n#k！\r\n\r\n\r\n #r ※每周任务会在每周四0点重置，进度会在世界内共享。", 5, 9062554, true, true, 0);
              } else {
                if (status === Y++) {
                  cm.sendNormalTalk("另外还有一档特别挑战节目！\r\n作为#r#e每月任务#n#k，考验一下你的极限吧！\r\n\r\n\r\n #r ※每月任务以四周为单位进行重置，进度会在世界内共享。", 5, 9062554, true, true, 0);
                } else {
                  if (status === Y++) {
                    cm.sendNormalTalk("那如果你有什么疑问，随时都可以问我！", 5, 9062554, true, true, 0);
                  } else {
                    if (status === Y++) {
                      cm.updateInfoQuest(501469, "mapTuto=2;stepUp=1;month=1");
                      cm.sendNormalTalk("这样下去可不行，你要宣传你的节目啊！\r\n#b#e特级广告节目！\r\n\r\n#fs20##r#e每日涨粉神器！#n#k", 4, 9062554, false, true, 0);
                    } else {
                      if (status === Y++) {
                        cm.sendNormalTalk("#b#e<每日涨粉神器>#n#k是一档可以通过支付#r#e#i4310312##t4310312##n#k#n#k使用的特别#b#e广告节目#n#k！\r\n\r\n也就是通过广告来宣传你的节目！", 4, 9062554, true, true, 0);
                      } else {
                        if (status === Y++) {
                          cm.sendNormalTalk("只要花#r#e300的#i4310312##t4310312##n#k，就可以完成#b#e每日任务粉丝增长到3倍#n#k！\r\n\r\n\r\n\r\n #r※使用每日涨粉神器完成每日任务时，\r\n     #e粉丝获得量和可获得量增加为3倍#n。", 4, 9062554, true, true, 0);
                        } else {
                          if (status === Y++) {
                            cm.sendNormalTalk("已经上传的节目也受到涨粉神器影响，粉丝嗖嗖上涨了#b#e3倍#n#k！\r\n\r\n\r\n\r\n #r※使用每日涨粉神器前完成每日任务所获得的粉丝数也增长3倍。", 4, 9062554, true, true, 0);
                          } else {
                            if (status === Y++) {
                              cm.sendNormalTalk("每日涨粉神器的效果仅应用#b#e一天#n#k！\r\n\r\n\r\n\r\n #r※每日涨粉神器效果会持续一天\r\n     #e每天零点会重置#n。", 4, 9062554, true, true, 0);
                            } else {
                              if (status === Y++) {
                                cm.sendNormalTalk("怎么样？很吸引人吧？\r\n\r\n快使用#b#e<每日涨粉神器>#n#k，成为大红的创作者吧！", 4, 9062554, true, true, 0);
                              } else if (status === Y++) {
                                cm.updateInfoQuest(501469, "mapTuto=2;boosterTuto=1;stepUp=1;month=1");
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