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
            cm.sendNormalTalk_Bottom("看到了吧？看到了吧？呃啊啊，我都被吓得#b两推#k发抖了。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("应该是#r两腿#k吧。", 37, 1530080, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀，都差不多嘛，有必要那么较真吗！不管怎样，#h0#你也要小心啊。你要是谈恋爱被那两个老师逮到的话，可就……啊，没什么。一看你就没什么可担心的。", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……那话是什么意思，总感觉有点不对劲。", 57, 1530101, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哈哈哈，只是你的错觉而已吧？不过话说回来，都21世纪了，居然还禁止校园恋爱，这像话吗？爱情是既高贵又美丽的感情。所以更要积极鼓励正在成长的青少年才是啊。啊啊，这么一来，对于爱情我也连想都不敢想了。", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("反正你不是也没有女朋友嘛。", 37, 1530080, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("朋友。以后这样伤人的话绝对#gNAVER#k，知道了吧！", 37, 1530100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("当然要#rNEVER#k了。", 37, 1530080, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不管怎样，这样下去可不行。否则我可能连一次恋爱也没谈，就毕业了！所以说，伙伴们，想不想和我一起在神兽国际学校掀起一场革命啊？这里有点人多口杂，咱们先换个地方说吧。大家跟我来！", 37, 1530100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32801, "");
                                                cm.dispose();
                                                cm.warp(330000010, 0)
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
            cm.warp(330002303, 0);
            cm.dispose()
        }
    }
};