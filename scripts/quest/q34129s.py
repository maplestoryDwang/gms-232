from net.swordie.ms.constants import QuestConstants
import random
from net.swordie.ms.enums import DailyEntry
# id 34129 ([Daily Quest] Vanishing Journey Research), field 450001000
quests =[34130, 34131, 34132, 34133, 34134, 34135, 34136, 34137, 34138, 34139, 34140, 34141, 34142, 34143, 34144, 34145, 34146, 34147, 34148, 34149, 34150]
selectedQuests = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

def proposeQuests():
    random.shuffle(selectedQuests)
    text = "Hi, #h0#. I have " + str(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT) + " missions for you this week. Would you like to take care of them now? If there is a mission you don't like, you can press the Exchange button to reroll the quest list.\r\n\r\n"

    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            text += "#b#e#y" + str(quests[i]) + "##k#n\r\n"

    if sm.sendAskYesNo(text):
        ensureExchange()
    else:
        acceptQuests()


def acceptQuests():
    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            sm.startQuest(quests[i])

    sm.startQuest(parentID)
    sm.sendSayOkay("Come to me when you've finished your missions. Remember, you have to turn them in before the end of the week. Well then, see you later.")


#prep selected quests for randomization
for i in range(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT):
    selectedQuests[i] = 1


def ensureExchange():
    sm.setParam(0)
    if sm.sendAskYesNo("Is there a mission on the list you aren't up for? Why not Exchange it for another one? \r\n\r\n#b(You can swap out the missions of your choice, but it is possible to receive the same mission as the one being exchanged.)#k"):
        selectReplaceMissions()
    else:
        acceptQuests()

def selectReplaceMissions():
    text = "Select the mission you would like to replace. (All greyed out missions will be replaced.)\r\n\r\n"
    for i in range(len(selectedQuests)):
        if selectedQuests[i] == 1:
            text += "#L"+ str(i) +"##b#e#y" + str(quests[i]) + "##k#n#l\r\n"
        elif selectedQuests[i] == 2:
            text += "#L"+ str(i) +"##e#y" + str(quests[i]) + "##k#n#l\r\n"


    text += "\r\n#L" + str(len(selectedQuests) + 1) + "##e#rThose are all the quests I want to swap out.#l"
    response = sm.sendNext(text)
    if response == len(selectedQuests) + 1:
        replaceMissions()
    else:
        if selectedQuests[response] == 1:
            selectedQuests[response] = 2
        elif selectedQuests[response] == 2:
            selectedQuests[response] = 1
        selectReplaceMissions()

def replaceMissions():
    #Get All unselected missions and missions we want to replace and reset them in the original list
    unselectedmissions = []
    for i in range(len(selectedQuests)):
        selectedQuest = selectedQuests[i]
        if selectedQuest == 0 or selectedQuest == 2:
            unselectedmissions.append(selectedQuest)
            selectedQuests[i] = 0

    #Shuffle all unselected and replace missions
    random.shuffle(unselectedmissions)


    text = "All right. To replace the missions you don't want, I've found new missions. Here are your " + str(QuestConstants.VANISHING_JOURNEY_WEEKLY_AMOUNT) + "for the week.\r\n\r\n"
    #Reinsert them into the list
    index = 0
    for i in range(len(selectedQuests)):
        if selectedQuests[i] is 0:
            if unselectedmissions[index] == 2:
                text += "#b#e#y" + str(quests[i]) + "##k #r[NEW]#k\r\n"
                selectedQuests[i] = 1
            index += 1
        else:
            text += "#b#e#y" + str(quests[i]) + "##k\r\n"

    showNewQuests(text)

def showNewQuests(text):
    sm.sendNext(text)
    acceptQuests()

sm.setSpeakerID(3003104) # Rona
sm.setParam(256)
#Do this to initialize the daily Entry
remainingTasks = sm.getRemainingDailyEntries(DailyEntry.VanishingJourney)
proposeQuests()
