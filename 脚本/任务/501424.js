var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
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
  var e = cm.getNumberFromQuestInfo(500773, "manager");
  var H = npcs[e];
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1##h0#，快来！你今天也会帮助整洁的洋房扩建工程寻找建筑材料吧？", 36, H, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#如果你今天能找到#i4036750:# #t4036750:#  30个就好了。\r\n消灭#b等级范围怪物#k后，应该就能获得建筑材料。", 36, H, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#我会一直等#h0#寻找材料，不要让我等得太晚哦！那么今天也~！拜托你啦！", 36, H, true, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest();
          cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
          cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
          cm.dispose();
        }
      }
    }
  }
}
function a4276H(g, w) {
  g = g - 380;
  var a = a4276e[g];
  if (a4276H.bzyAEJ === undefined) {
    var v = function (d) {
      var P = '';
      var I = 0;
      var Q;
      var M;
      for (var k = 0; M = d.charAt(k++); ~M && (Q = I % 4 ? Q * 64 + M : M, I++ % 4) ? P += String.fromCharCode(255 & Q >> (-2 * I & 6)) : 0) {
        M = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(M);
      }
      return P;
    };
    a4276H.bwZnKE = function (d) {
      var A = v(d);
      var P = [];
      var I = 0;
      for (var Q = A.length; I < Q; I++) {
        P += '%' + ('00' + A.charCodeAt(I).toString(16)).slice(-2);
      }
      return decodeURIComponent(P);
    };
    a4276H.vtjmUw = {};
    a4276H.bzyAEJ = true;
  }
  var e = a4276e[0];
  var H = g + e;
  var b = a4276H.vtjmUw[H];
  if (b === undefined) {
    var d = function (A) {
      this.frsoau = A;
      this.FapKQM = [1, 0, 0];
      this.twtsKJ = function () {
        return 'newState';
      };
      this.PeHbLD = "\\w+ *\\(\\) *{\\w+ *";
      this.JzJZog = "['|\"].+['|\"];? *}";
    };
    d.prototype.vHqSUt = function () {
      var A = new RegExp(this.PeHbLD + this.JzJZog);
      var P = A.test(this.twtsKJ.toString()) ? --this.FapKQM[1] : --this.FapKQM[0];
      return this.rOeohC(P);
    };
    d.prototype.rOeohC = function (A) {
      if (!Boolean(~A)) {
        return A;
      }
      return this.gZpucK(this.frsoau);
    };
    d.prototype.gZpucK = function (A) {
      var P = 0;
      for (var I = this.FapKQM.length; P < I; P++) {
        this.FapKQM.push(Math.round(Math.random()));
        I = this.FapKQM.length;
      }
      return A(this.FapKQM[0]);
    };
    new d(a4276H).vHqSUt();
    a = a4276H.bwZnKE(a);
    a4276H.vtjmUw[H] = a;
  } else {
    a = b;
  }
  return a;
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
  var e = cm.getNumberFromQuestInfo(500773, "manager");
  var H = npcs[e];
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#你已经集齐我拜托你的建筑材料了啊！#h0#果然值得托付！", 36, H, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#我会好好传达，将你找来的材料用于今天的扩建工程！\r\n你明天还会来帮我吗？我会一直等你的！", 36, H, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest();
        cm.gainItem(4036750, -30);
        cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
        cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
        cm.dispose();
      }
    }
  }
}