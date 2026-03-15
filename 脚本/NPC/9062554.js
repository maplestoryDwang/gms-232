var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(E, d, v) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  if (E == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = v;
  var G = -1;
  if (status <= G++) {
    cm.dispose();
  } else {
    if (status === G++) {
      cm.sendNormalTalk("我准备的#b#e创作者步步高#n#k你玩得还开心吗？", 4, 9062554, false, true, 0);
    } else {
      if (status === G++) {
        cm.sendNormalTalk("完成任务并上传节目后#r#e#i4310314#粉丝#n#k就会嗖嗖大涨！\r\n\r\n粉丝送的#b#e#i4310312##t4310312##n#k和#b#e#i4310313##t4310313##n#k也会嗖嗖增多！\r\n\r\n\r\n #r ※完成任务后，可以获得粉丝和豆子。", 4, 9062554, true, true, 0);
      } else {
        if (status === G++) {
          cm.sendNormalTalk("等到#r#e#i4310314#粉丝#n#k增多，名气见长，还能获得特别的礼物！\r\n\r\n\r\n #r ※粉丝每增加1000人可获得创作者步步高奖励。", 4, 9062554, true, true, 0);
        } else {
          if (status === G++) {
            cm.sendNormalTalk("每天坚持做节目是很重要的，坚持参加\r\n每日任务，收集#b#e#i4310312# #t4310312##n#k吧！\r\n对了！每天可以增长的粉丝数上限是固定的！\r\n\r\n\r\n #r ※每日任务会在每天0点重置，每个世界每日任务粉丝最多仅能增长300人。", 4, 9062554, true, true, 0);
          } else {
            if (status === G++) {
              cm.sendNormalTalk("啊！狩猎超强首领的节目能够获得#b#e#i4310313# #t4310313##n#k！\r\n\r\n\r\n #r ※每周任务会在每周四0点重置，进度会在世界内共享。", 4, 9062554, true, true, 0);
            } else {
              if (status === G++) {
                cm.sendNormalTalk("另外还有一档特别挑战节目！\r\n作为#r#e每月任务#n#k，考验一下你的极限吧！\r\n\r\n\r\n #r ※每月任务以四周为单位进行重置，进度会在世界内共享。", 4, 9062554, true, true, 0);
              } else if (status === G++) {
                cm.sendNormalTalk("那如果你有什么疑问，随时都可以问我！", 4, 9062554, true, false, 0);
              } else {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}