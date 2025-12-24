# One Who Loves Quizzes
# 2540008
# Undersea Tower of Oz : Undersea 39F (992039000)
#
import random

from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util

questions = {
    "What is the name of the broker residing in Magatia?": 	                            "Han the Broker",
    "What is the name of the buddy list admin in Lith Harbor?": 	                    "Mr. Goldstein",
    "What is the name of the buddy list admin in Ludibrium?": 	                        "Robert Holly",
    "What is the name of the dog sitting next to the Dimensional Mirror in Orbis?": 	"Moppie",
    "What is the name of the current council president in Edelstein?": 	                "Anthony",
    "What is the name of the former council president in Edelstein?": 	                "Albert",
    "What is the name of the grandma guarding the Great Temple in Pantheon?": 	        "Selene",
    "What is the name of the helmsman of Riena Strait Glacial Observatory?": 	        "Helmsman Tanya",
    "What is the name of the Humanoid residing in Magatia?": 	                        "Humanoid A",
    "What is the name of the kid monk in front of the Golden Temple entrance?": 	    "Noi",
    "What is the name of the merchant on the Nautilus?": 	                            "Gali",
    "What is the name of the pet master in Ellinia?": 	                                "Mar the Fairy",
    "What is the name of the plastic surgeon in Ariant?": 	                            "Aldin",
    "What is the name of the skin care expert in Ariant?": 	                            "Lila",
    "What is the name of the storage keeper in Ludibrium?": 	                        "Seppy",
    "What is the name of the storage keeper in Rien?": 	                                "Pusla",
    "What is the name of the storage keeper on the Nautilus?": 	                        "Dondlass",
    "What is the name of the street sweeper in Edelstein?": 	                        "Brighton",
    "What is the name of the town mascot of Edelstein?": 	                            "Checky",
    "What is the name of the upcoming merchant in Pantheon?": 	                        "Karin",
    "What is the name of the warp helper in Herb Town?": 	                            "Crane",
    "What is the name of the weapon merchant in Ariant?": 	                            "Zaid",
    "What is the name of the weapon seller on the Nautilus?": 	                        "Morgan",

    "Who in Kerning City can repair items?": 	                                        "JM From tha Streetz",
    "Who is the item creator in front of the Sleepywood Hotel?": 	                    "Chrishrama",
    "Who is the merchant in the Golden Temple?": 	                                    "Ms. Tang",
    "Who is the merchant in Gold Beach Resort?": 	                                    "Mason",
    "Who is the warrior job instructor in the Warriors' Sanctuary?": 	                "Dances with Balrog",
    "Who is the weapon seller in Perion?": 	                                            "River",
    "Who is the subway worker next to the Ticket Gate in Kerning City?": 	            "Jake",
}

stages_amount = 5
answers_amount = 5

instance = chr.getInstance()
if instance is not None and (chr.getParty() is None or chr.getParty().hasCharAsLeader(chr)):
    cur_stage = int(instance.getProperty(OzConstants.F39_CUR_STAGE))

    rng_question = Util.getRandomFromCollection(questions.keys())
    correct_ans = questions[rng_question]

    ans_list = [correct_ans]

    while len(ans_list) < answers_amount:
        rng_answer = Util.getRandomFromCollection(questions.values())
        if rng_answer in ans_list:
            continue
        ans_list.append(rng_answer)

    random.shuffle(ans_list)

    msg = "{}\r\n\r\n#b".format(rng_question)
    i = 0
    for ans in ans_list:
        msg += "#L{}#{}#l\r\n".format(i, ans)
        i += 1

    sel = sm.sendNext(msg)

    # Correct Answer
    if ans_list[sel] == correct_ans:
        if cur_stage >= stages_amount:
            OzTowerModule.clearStage(instance, chr)
        else:
            instance.addProperty(OzConstants.F39_CUR_STAGE, cur_stage + 1)
        sm.sendSayOkay("Correct!")
    else:
        sm.sendSayOkay("Incorrect")