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
            cm.sendNormalTalk("一切都错了。现在我们该怎么办？", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                cm.sendNormalTalk("唉……#ho#，还好把你派过去了。", 4, 1013447, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请先带着孩子们离开遗迹。我们背着卡鲁帕族，悄悄派人去遗迹。", 4, 1013447, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;32=h1;13=h0;33=h1;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;23=h0;04=h0;24=h1;05=h0;06=h0;07=h0;27=h0;08=h0;28=h0;09=h0;29=h1");
                        cm.forceStartQuest(35978, "");
                        cm.dispose();
                        cm.warp(100051040, 0)
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
            cm.sendNormalTalk("老师？", 2, 1013424, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("孩子们，孩子们都没事吧？他们现在在哪儿？", 4, 1013446, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我后来才发现了孩子们的信。孩子们好像是跑到遗迹去了。他们以为我把他们给抛弃了……唉……", 4, 1013446, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;32=h1;13=h0;33=h1;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;23=h0;04=h0;24=h1;05=h0;06=h0;26=h1;07=h0;27=h1;08=h0;28=h1;09=h0;29=h1");
                        cm.forceCompleteQuest(35978);
                        cm.gainExp(713849);
                        cm.dispose()
                    }
                }
            }
        }
    }
};