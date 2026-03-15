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
      cm.askMenu("什么事？\r\n#b\r\n#L0# 说关于捕鱼的事情。#l\r\n#L1# 说关于凯梅尔兹共和国的事情。#l", 0, 9390201);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    if (!cm.isQuestFinished(17910)) {
      cm.forceStartQuest(17910, '1');
      cm.forceCompleteQuest(17910);
    }
    var w = cm.rand(1, 5);
    if (w == 1) {
      cm.sendNormalTalk("最近能抓到很多海蟹。把海蟹运到桑凯梅尔兹卖的话，应该会卖到好价钱的。", 0, 9390201, false, true);
    } else {
      if (w == 2) {
        cm.sendNormalTalk("虽然这里只是偏僻的小渔村，但我们村子里的人捕到的鱼都是最好的。你面前的都是纯收益呢。", 0, 9390201, false, true);
      } else {
        if (w == 3) {
          cm.sendNormalTalk("今天天气不太好。这种天正适合龙王外出。很可惜，你今天白忙了。", 0, 9390201, false, true);
        } else if (w == 4) {
          cm.sendNormalTalk("马上就要出航了呢。只有从凌晨开始行动，才能抓到很多鱼。", 0, 9390201, false, true);
        } else {
          cm.sendNormalTalk("虽然我做了很久的渔夫，但是我的儿子想要桑凯梅尔兹成为大商人。捕鱼可不是一般的辛苦。", 0, 9390201, false, true);
        }
      }
    }
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("这里就是凯梅尔兹共和国。从这里沿着东南海岸下去，就能看到首都 #e#b桑凯梅尔兹#k#n了。", 0, 9390201, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("桑凯梅尔兹是凯梅尔兹全境首屈一指的城市。从一个小小的渔村成长为现在这么一个大城市，这都是多亏了吉尔伯特·达尼尔拉首领。多亏了他，像我这样的渔夫也能高价出售鱼肉，我真是感激不尽啊。", 0, 9390201, true, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}