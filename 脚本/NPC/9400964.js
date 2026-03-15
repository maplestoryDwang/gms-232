var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("公主的花车就要到了！请大家让开路来！\r\n\r\n#L0##e<公主游行>#n 听取说明#l\r\n#L1#结束对话#l", 4, 9400964);
    } else {
      if (status === V++) {
        if (U == 1) {
          cm.dispose();
          return;
        }
        cm.sendNormalTalk("从每天上午10点到晚上12点，<公主游行>将在每个整点的30分开始。", 4, 9400964, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("公主亲自为参与<公主游行>的人准备了礼物。我们人美心更美的公主殿下亲自！准备的哦。", 4, 9400964, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("在举行公主游行的时候，点击Ctrl（攻击） 键欢呼的话，就能获得特别礼物--#t2630988:#和#t2630989:#。", 4, 9400964, true, true);
          } else if (status === V++) {
            cm.sendNormalTalk("有一点我要向你强调，绝对不能迷上公主哦。", 4, 9400964, true, false);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}