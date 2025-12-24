package net.swordie.ms.client.character.chair;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.modules.InventoryModule;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.container.Tuple;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created on 12/07/2020.
 *
 * @author Asura
 */
public class PortableChairFactory {

    public static PortableChair getBy(Char chr, CustomChairType type, int itemId, InPacket inPacket) {
        PortableChair chair = new PortableChair(chr, itemId);

        if (type == null) {
            if (inPacket.getUnreadAmount() >= 9) {
                chair.decodeCustomChairInfo(inPacket);
            }
            return chair;
        }

        chair.setCustomChairType(type);
        switch (type) {
            case TowerChair:
                QuestManager qm = chr.getQuestManager();
                Quest q = qm.getOrCreateQuestById(QuestConstants.TOWER_CHAIR);
                q.convertQRValueToProperties();

                List<Integer> towerChairs = new ArrayList<>();
                for (Map.Entry<String, String> entry : q.getProperties().entrySet()) {
                    int towerChairID = Integer.parseInt(entry.getValue());
                    towerChairs.add(towerChairID);
                }
                if (!towerChairs.contains(itemId)) {
                    towerChairs.clear();
                    towerChairs.add(itemId);
                }

                chair.setTowerChairs(towerChairs);
                break;


            case TextChair:
                String text = inPacket.decodeString();

                chair.setText(text);
                break;


            case MesoChair:
                long mesos = inPacket.decodeLong();

                chair.setMesos(mesos);
                break;


            case TotalChair:
                List<Object[]> legionList = new ArrayList<>();
                int totalLegionPower = 0;
                if (inPacket.decodeByte() != 0) {
                    totalLegionPower = inPacket.decodeInt();
                    int size = inPacket.decodeInt();
                    for (int i = 0; i < size; i++) {
                        int chrLv = inPacket.decodeInt();
                        int chrJob = inPacket.decodeInt();
                        String chrName = inPacket.decodeString();
                        AvatarLook avatarLook = null;
                        AvatarLook avatarLook2 = null;
                        if (inPacket.decodeByte() != 0) {
                            avatarLook = new AvatarLook(false);
                            avatarLook.decode(inPacket);
                        }
                        if (inPacket.decodeByte() != 0) {
                            avatarLook2 = new AvatarLook(false);
                            avatarLook2.decode(inPacket);
                        }
                        legionList.add(new Object[]{chrLv, chrJob, chrName, avatarLook, avatarLook2});
                    }
                }
                chair.setLegionList(legionList);
                chair.setTotalPoints(totalLegionPower);
                break;


            case SaveTimeChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case PopularChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                Account acc = chr.getAccount();
                List<Tuple<String, Integer>> popList = acc.getPopChrList().stream()
                        .limit(10)
                        .map(c -> new Tuple<>(c.getName(), (int) (c.getAvatarData().getCharacterStat().getPop())))
                        .collect(Collectors.toList());

                chair.setPopList(popList);
                break;


            case StarForceChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case TrickOrTreatChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setCandies(InventoryModule.getItemCount(chr, PortableChair.TRICK_OR_TREAT_CANDY_SHARABLE));
                chair.setTrickOrTreat(0);
                break;


            case CelebChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setLinkChairId(0); // visual chairId
                break;


            case RandomChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case IdentityChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setVerified(true);
                chair.setCreationDate(FileTime.currentTime());
                break;


            case MirrorChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case PopButtonChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                chair.setPop(chr.getAvatarData().getCharacterStat().getPop());
                break;


            case RollingHouseChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setDecorations(new ArrayList<>());
                break;


            case TraitsChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setLinkChairId(0); // visual chairId
                break;


            case AndroidChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case RotatedSleepingBagChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case PetChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setPets(chr.getPets());
                break;


            case ScaleAvatarChair:
                boolean displayNumber = inPacket.decodeByte() != 0;
                int number = 0;
                if (displayNumber) {
                    number = inPacket.decodeInt();
                }

                chair.setDisplay(displayNumber);
                chair.setDojoFloorNumber(number);
                break;


            case MannequinChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setHairList(new ArrayList<>());
                break;


            case CharLvChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setChrLv(chr.getLevel());
                break;


            case ScoreChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                ItemInfo ii = ItemData.getItemInfoByID(itemId);
                var score = 0;
                if (ii.getCustomChairInfo().getQuestID() >= 0) {
                    var questID = ii.getCustomChairInfo().getQuestID();
                    Quest quest = chr.getQuestManager().getOrCreateQuestById(questID);
                    score = quest.getIntProperty(ii.getCustomChairInfo().getQuestEx());
                }

                chair.setScore(score);
                break;


            case ArcaneForceChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);

                chair.setScore(0);
                break;


            case WasteChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case RollingHouseChair2019:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case EventPointChair:
                // CCustomChair::Encode
                chair.decodeCustomChairInfo(inPacket);
                break;


            case HashTagChair:
                // No Extra Decodes
                break;
        }

        return chair;
    }

}
