# id 450002202 (Chu Chu Island : Chu Chu Island), field 450002202

#Lyck faces: Face 0 = angry, Face 1 = cry, Face 2 = cry little, Face 3 = smile, Face 4 = Blow air out of nose
#Lyon faces: Face 0 = smile, Face 1 = happy mouth open
if not sm.hasQuestCompleted(34202) or sm.hasQuest(34202):
    sm.createQuestWithQRValue(18418, "B=34841")
    sm.createQuestWithQRValue(34220, "a=1;e=1")
    sm.lockInGameUI(True, False)
    sm.zoomCamera(0, 1000, 0, 1250, 40)
    sm.removeAdditionalEffect()
    sm.spawnNpc(3003167, 1402, 45)
    sm.showNpcSpecialActionByTemplateId(3003167, "summon", 0)
    sm.blind(True, 255, 0, 0, 0, 0)
    sm.sendDelay(1200)
    sm.blind(False, 0, 0, 0, 0, 1000)
    sm.sendDelay(1400)
    sm.sendDelay(1000)
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("Here we are, the heart of #bChu Chu Island#k! Welcome to #bChu Chu Village#k!")
    sm.createQuestWithQRValue(1062, "1=0")
    sm.setParam(57)
    sm.sendSay("#bChu Chu#k?")
    sm.setParam(37)
    sm.sendSay("#face0#Yeah #bChu Chu#k! What do you think? Isn't it a great name? Hahaha! I have the greatest names! Don't you like it?")
    sm.setParam(57)
    sm.sendSay("#bWho are you#k? And what was that #bhuge creature#k blocking my path? I need to keep going... Although... I'm hungry... and my head really hurts.")
    sm.setParam(37)
    sm.sendSay("You sure are curious!")
    sm.sendSay("Well, I'm curious about you too. Allow me to start.")
    sm.sendSay("We are...!")
    sm.sendSay("#face0#Actually, I'm afraid I don't remember! Heheheh!")
    sm.setParam(57)
    sm.sendSay("That's... suspicious.\r\nAre you a servant of the #rBlack Mage#k?")
    sm.setParam(37)
    sm.sendSay("The #rBlack Mage#k? What's that?")
    sm.setParam(57)
    sm.sendSay("Your #bmaster#k who's sitting at the end of this river, plotting to destroy the world!")
    sm.setParam(37)
    sm.sendSay("Uh... I don't know much about the river. And that #rmaster#k thing you mentioned is new to me.")
    sm.sendSay("#face0#Well actually, there is this #bcool, brave, and handsome#k chief but... 'Master'? I'd say I'm a #bvolunteer#k. I'm nice like that. Nobody #basked me#k to maintain order, I just do it out of the kindness of my heart, meow!")
    sm.sendSay("And in any case, those that live here don't have any #bmemories of their past#k. It's kinda weird now that I think about it.")
    sm.sendSay("We all just sort of woke up at different times in different places. Eventually we ran into each other, and started this village, meow!")
    sm.setParam(57)
    sm.sendSay("(It seems he's a little too dumb to be one of the #rBlack Mage's minions#k...)")
    sm.sendSay("(A lion that walks and talks like a person... Were the residents of Chu Chu Island created #bby mixing lifeforms#k...?)")
    sm.setParam(37)
    sm.sendSay("#face1#Not sure what you're mumbling about over there, but Chu Chu Island is a beautiful place overflowing with food.\r\n#bEveryone#k here is #bvery#k happy.")
    sm.sendSay("Well... Except for #bMuto#k!")
    sm.setParam(57)
    sm.sendSay("#bMuto#k?")
    sm.setParam(37)
    sm.sendSay("Right! The one who #battacked#k you and #bstole your food#k!")
    sm.setParam(57)
    sm.sendSay("Oh... That huge creature? What's his deal anyway?")
    sm.setParam(37)
    sm.sendSay("Muto is a #bbaby#k adored by the people of #bChu Chu Village#k. He's such a #bnice, honest kid#k.")
    sm.setParam(57)
    sm.sendSay("Uh... he seems a little violent...")
    sm.setParam(37)
    sm.sendSay("What? Our #bMuto#k? Don't be silly...\r\nHe's just a kind little fella that #bprotects our village#k...")
    sm.sendSay("Y'see, there are #btwo colossal#k creatures here on Chu Chu Island.")
    sm.sendSay("There's our boy #bMuto#k of course, and then there's #rGulla#k.")
    sm.sendSay("#rGulla#k lives in the river. He doesn't understand words or reason, unlike us or #bMuto#k. ")
    sm.onLayer(1500, "attack", 0, 0, 0, "Map/Effect2.img/ArcaneRiver2/attack", 4, True, -1, False)
    sm.sendSay("And he's #rrough#k as all get-out. Gulla comes up here #bevery 10 days#k to #beat#k anything that moves.")
    sm.offLayer(1000, "attack", False)
    sm.onLayer(1500, "fight", 0, 0, 0, "Map/Effect2.img/ArcaneRiver2/fight", 4, True, -1, False)
    sm.sendSay("Good thing we've got #bour adorable Muto to beat up Gulla#k every time he shows up!")
    sm.offLayer(1000, "fight", False)
    sm.sendSay("For the gift of regular beatings, we feed Muto all the delicious food we can scrounge up. You may have noticed, but he's a little on the heavy side... that was probably us.")
    sm.sendSay("This whole arrangement had been working out pretty well, #buntil recently#k...")
    sm.setParam(57)
    sm.sendSay("What happened?")
    sm.setParam(37)
    sm.sendSay("Err, well... #bHe#k...")
    sm.setParam(57)
    sm.sendSay("Go on!")
    sm.setParam(37)
    sm.sendSay("He got #bpicky about his food#k...")
    sm.setParam(57)
    sm.sendSay("That's crazy!")
    sm.setParam(37)
    sm.sendSay("Muto said the food we made was yucky, and he stopped fighting against Gulla... As a result, the villagers live in fear of #rGulla#k every day...")
    sm.sendSay("#face1#Oh, but hey! That #bfood#k you gave Muto!\r\nHe #breally liked it!#k")
    sm.sendSay("No... I understand where Muto's coming from... There is nothing more difficult than #beating food that doesn't taste good#k... #bPoor Muto#k...")
    sm.setParam(57)
    sm.sendSay("But he ate almost everything I had! I've got, like, one corner of sandwich left.")
    sm.setParam(37)
    sm.sendSay("Oh... really? That's no good. That's like a crumb to our big ol' Muto.")
    sm.setParam(57)
    sm.sendSay("But he ate all of the food in my bag, except for this lonely half of a sandwich.")
    sm.sendSay("Uh... So anyway, is there #ba way#k to get around Muto so I can reach the end of the river?")
    sm.setParam(37)
    sm.sendSay("Taste matters, but... Muto throws a tantrum if his meal doesn't fill him up.")
    sm.setParam(57)
    sm.sendSay("Uh... So is there #bany way#k to get around Muto so I can reach the end of the river?")
    sm.setParam(37)
    sm.sendSay("#face0#Nope! #bNot a single one#k.")
    sm.setParam(57)
    sm.sendSay("You... Sound so sure about that.")
    sm.setParam(37)
    sm.sendSay("Stranger! Let's work together! You need to make it further down the river, and #byou're not going anywhere#k if Muto doesn't move.")
    sm.setParam(57)
    sm.sendSay("...")
    sm.setParam(37)
    sm.sendSay("Also, we're kind of all at #rGulla's mercy#k without help from #bMuto#k...")
    sm.sendSay("#face1#So what do you say? Will you help us make food that #bMuto#k will actually eat?")
    sm.sendSay("#face0#It shouldn't be hard at all. This place is packed with #bdelicious ingredients#k! Yes, siree!")
    sm.setParam(57)
    sm.sendSay("I can't cook...")
    sm.setParam(37)
    sm.sendSay("#face0#Oh! Don't you worry about that! I already told the greatest chef on the island, #bMaster Lyck#k, about you and your #btiny, delicious food#k!")
    sm.sendSay("Why don't you pay #bMaster Lyck#k a visit right now!")
    sm.sendSay("Oh, and hey... When you see #bMaster Lyck#k, don't say anything about his #btongue#k, okay?")
    sm.blind(True, 255, 0, 0, 0, 500)
    sm.sendDelay(500)
    sm.lockInGameUI(False, True)
    sm.warp(450002000)
#elif sm.hasQuestCompleted(34204) and not sm.hasQuest(34205) and not sm.hasQuestCompleted(34205):
else:
    sm.lockInGameUI(True, False)
    sm.zoomCamera(0, 1000, 0, 1250, 40)
    sm.removeAdditionalEffect()
    sm.spawnNpc(3003168, -812, 138)
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.setColor(1)
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("Yes! My #rculinary masterpiece#k is complete! Slurp slurp!")
    sm.setParam(57) #Player
    sm.sendNext("Those are hooves floating in there... Are you sure this is food?")
    sm.setParam(37) #Npc
    sm.sendNext("Hey! Don't just stand there!! Try it! But if you must #rfaint#k because it tastes too heavenly, be sure to do so away from the pot!")
    sm.setParam(57) #Player
    sm.sendNext("Uh... Right. Let's see how it tastes.")
    sm.sendNext("#bAck#k!")
    sm.setParam(37) #Npc
    sm.sendNext("#face4#Slurp-slurp! The flavor is out of this world, is it not? Slurp!")
    sm.setParam(57) #Player
    sm.sendNext("This is one of the vilest things I've ever put in my mouth, and I've had to eat some wierd stuff.")
    sm.setParam(37) #Npc
    sm.sendNext("#face0##fs50#W-WHAT!")
    sm.setParam(57) #Player
    sm.sendNext("There's #bno way I can eat something like this#k... No wonder Muto is so picky with his food.")
    sm.setParam(37) #Npc
    sm.sendNext("#face0#How dare you! I, Master Lyck, am the #bgreatest chef of Chu Chu Island#k!")
    sm.setParam(57) #Player
    sm.sendNext("There must be something wrong with everyone's #btongues#k if that's true...")
    sm.setParam(37) #Npc
    sm.sendNext("#face0#WHAT DID YOU SAY ABOUT MY BEAUTIFUL TONGUE?!")
    sm.setParam(57) #Player
    sm.sendNext("N-no... I was saying we had very different tastes...")
    sm.setParam(37) #Npc
    sm.sendNext("Eureka! That's it! Didn't Lyon say you had #bsome food#k that Muto actually enjoyed?")
    sm.sendNext("I must taste it to understand why it pleased Muto where all my dishes have failed! Give me that #rfood#k at once!")
    sm.setParam(57) #Player
    sm.sendNext("You mean... my #rsandwich#k? But this is my last piece...")
    sm.setParam(37) #Npc
    sm.sendNext("#face0##fs50#GIVE IT TO ME!")
    sm.setParam(57) #Player
    sm.sendNext("Fine! Eat it then, I'll just starve...")
    sm.setParam(37) #Npc
    sm.sendNext("Nom nom... Gulp...")
    sm.setParam(37) #Npc
    sm.sendNext("#face0#Plooey! What is this!?")
    sm.setParam(57) #Player
    sm.sendNext("Huh? What are you doing? That's my last piece!")
    sm.setParam(37) #Npc
    sm.sendNext("#face4#You think you can convince Muto to move with garbage like this? Slurp, slurp-slurp-slurp-slurp-slurp, slurp slurp! I thought it was going to be something truly delicious!")
    sm.setParam(57) #Player
    sm.sendNext("Really? When I had some earlier it #btasted fine#k...")
    sm.setParam(37) #Npc
    sm.sendNext("#face0#What?! #bThat disgusting thing#k?! \r\n Fine! Then let's ask the #bvillagers#k what they think!")
    sm.sendNext("Lyon!")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("#face0#Oh, Master Lyck. You know, you should really call me Chief when other people are around.")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("#face0#Here, try this horrible substance that one calls food! How could Muto enjoy something like this? My food is far superior! Try both and compare them!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("#face0#Well, since I'm such a #bnice, cool guy#k, I suppose I can volunteer.")
    sm.sendNext("Okay, let's see how it tastes. Here, why don't you guys try it too?")
    sm.sendNext("Nom. Nom.")
    sm.sendNext("#face1# Oh man!")
    sm.setParam(57) #Player
    sm.sendNext("See, it's good, isn't it?")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("#face1#Wow, this is...")
    sm.sendNext("#face1##fs50##rThe worst thing ever#k!")
    sm.setParam(57) #Player
    sm.sendNext("What?")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("Yeah, just ask these guys. Man, I wouldn't eat this if #rI'd been starving for 10 days#k!")
    sm.setParam(57) #Player
    sm.sendNext("R-really?")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("And now I'll try Master Lyck's dish to get this taste out of my mouth... I mean, for comparison.")
    sm.sendNext("#face1#Oh! #rWonderful#k, as expected...")
    sm.sendNext("#face0#Chef Lyck, could you wrap some of this up for me to go? It'll be a wonderful evening snack.")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("#face0#You ate nearly all that I prepared! There's not enough for Muto now...")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendNext("#face0#Did I? Well, anyways! Your cooking is as wonderful as always.")
    sm.setParam(57) #Player
    sm.sendNext("Weird... How can they think that food tastes good?")
    sm.sendNext("Something must be worng with their taste buds.")
    sm.sendNext("I'm never getting out of here at this rate.")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("#face4#Well, did you see that? Hmm the look on your face tells me you're clearly in disbelief, slurp-slurp!")
    sm.setParam(57) #Player
    sm.sendNext("Clearly we have different tastes. But Muto likes #bthe same types of food as me#k... You'll never make him happy with the #bfood you like#k, even if it's a masterpiece.")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("#face0#Still you deny the brilliance of my food! \r\n The cuisine of #bMaster Lyck#k, beloved by the villagers!")
    sm.sendNext("Fine! If you are so certain you are right, then you feed Muto! Based on his previous patterns, #rGulla#k will strike the village in 3 days, slurp. #bPrepare a meal for Muto#k on that day and bring it here!")
    sm.setParam(57) #Player
    sm.sendNext("What? I don't know what ingredients are available here... And I can't even cook...")
    sm.setParam(37) #Npc
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Lyck
    sm.sendNext("Hmph! That's not my problem, slurp slurp! \r\n You heard me. Bring food to Muto #bin 3 days time#k!")
    sm.sendNext("#face4#Of course, I'd understand if one who knows nothing of #bcooking#k, such as yourself, were to run off with your tail between your legs in the face of my masterful cooking! Slurp!")
    sm.lockInGameUI(False, True)
    sm.warp(450002000)

