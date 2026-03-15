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
      cm.askMenu("谁知道邪恶的怪兽都有什么年头？蚊蝠侠知道！\r\n#b#L0#那就好，看你的样子，我猜你是……超级英雄？\r\n #l#k", 0, 9201102);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("没错！我，就是蚊蝠侠，<抓住披风遮住半张脸>，这座城市第一位犯罪斗士！", 0, 9201102, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我来到新叶都市对抗犯罪、怪物和所有良善之辈……还是奸邪之辈来着？总之，你似乎是想要加入我们的英雄协会，蚊蝠联盟！虽然我受宠若惊，但蚊蝠侠是单独行动的！\r\n#b#L0#我好奇的是为什么你没穿裤子。\r\n#b#L1#加入你？我看你在打击犯罪前还是先把裤子穿好吧。\r\n#l#k", 0, 9201102);
        } else {
          var w = 'action分支' + selectionLog[3];
          eval(w)(f, W, U, V);
        }
      }
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("哦这个啊……哈哈哈<脸红>。我的裤子在和秘宝齿轮里的一只火牙兽战斗的时候被烧焦了。我想要帮助那个叫约翰·巴里凯德的人，他似乎研究新叶都市，好像很重要的样子。真正的英雄是绝不会拒绝他人的求助的！\r\n#b#L0#那你为什么不穿别的裤子。就没有备用的吗？#k#l\r\n#b#L1#那你准备怎么办？总不能光着屁股四处乱跑吧。#k#l", 0, 9201102);
  } else {
    var w = "action分支0_" + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function action分支0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("这个，我在搬到新叶都市的时候犯了个小错误。是这样的，我把补给打包好装进蚊蝠车的时候忘记关车厢了。等我到了新叶都市，下来检查车厢才发现这个问题。结果我所有的补给都丢了！我是有去铠甲商人特尔斐那儿看过有没有我能穿的裤子，不过来到新叶都市后我好像胖了几磅。", 0, 9201102, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("米奇卖的烤奶酪和至尊披萨实在是太——蚊了！它们弄得我只能穿紧身裤了！", 0, 9201102, true, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支0_1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("嗯，于是我陷入了这么一个两难境地：虽然我需要找到我的裤子，但罪犯可不会趁我去找裤子就放假。这附近满是邪魔歪道，我没工夫去四处探索……除非。这么着吧，你跟我做个交易好了？\r\n#b#L0#怎样的交易？r\n#l#k ", 0, 9201102);
  } else {
    if (status === V++) {
      cm.askMenu("因为我不能擅自离开岗位，所以你能不能在线下冒险的时候代替我去找回我的补给？如果你帮我找到他们，我就让你当我们英雄协会，蚊蝠联盟的挂名成员！如何？\r\n#b#L0#包在我身上吧，蚊蝠侠，我一有发现就向你报告！\r\n#l#k ", 0, 9201102);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这就对了！继续努力吧，总有一天你也能成为一名英雄的！", 0, 9201102, false, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("别搞错了！有没有穿裤子可跟当不当得了超级英雄无关。只要你拥有勇气，能够锄强扶弱，救人于水货，就能成为超级英雄。你要是不这么觉得，那就此别过吧。", 0, 9201102, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}