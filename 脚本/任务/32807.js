var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("自古以来，所谓传闻就是一颗火种，只要给它扇扇风的话，就会越烧越旺的。不过要是由我们亲自散布传闻的话，那将十分危险，最好是能制造一种在任何人看来都会对他们的关系产生怀疑的情况。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("例如……在这种天气里，两个人一起感冒了之类的情况。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("南哈特队员，你不愧是我们#r<神兽学校恋爱调查团>#k的大谋士啊。很好，下一个任务就是想办法让他们两个人感冒！现在弗朗西斯队员和我马上去把希拉老师引出医务室。", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("米哈尔队员负责放风，别让敌人发现我们的计划。南哈特队员负责盯住教务室。这段时间，#h0#队员负责从#b医务室#k获取感冒病毒。", 37, 1530100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("准备好了吗？那么，向医务室突击！\r\n#b（前往4楼的医务室吧）#k", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32807, "");
                                cm.effect_Text(["#fn黑体##fs20#计划3. 生化攻击"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("这就是感冒病毒？你还真搜集不少呢。噗噗……", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃啊！！！喂，拿一边去！难闻死了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32807);
                    cm.gainItem(4034150, -50);
                    cm.dispose()
                }
            }
        }
    }
};