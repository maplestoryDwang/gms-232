package net.swordie.ms.client.character.chair;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.GroupChairInfo;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 26-5-2019.
 *
 * @author Asura
 */
public class PortableChair {

    public static final Rect GROUP_CHAIR_RECT = new Rect(-35, -382, 35, 3);

    // Chairs
    private Char chr;
    private int itemID;
    private int setupPos;
    private CustomChairType customChairType;

    // Custom Chair
    private int unk1;
    private int unk2;
    private byte unk3;

    // Text Chair
    private String text = "";

    // SaveTime Chair
    private int time;

    // Tower Chair
    private List<Integer> towerChairs;

    // Meso Chair
    private long mesos;

    // Total Chair
    private int totalPoints;
    private List<Object[]> legionList;

    // Popular Chair
    private List<Tuple<String, Integer>> popList;

    // TrickOrTreat Chair
    public static final int TRICK_OR_TREAT_CANDY_SHARABLE = 2436210; // These are given out by the Sitter
    public static final int TRICK_OR_TREAT_CANDY_SHARED = 2450136; // These are given to the clickers
    private int candies;
    private int trickOrTreat;

    // Celeb Chair
    private int linkChairId;

    // Identity Chair
    private boolean isVerified;
    private FileTime creationDate;

    // Rolling House Chair
    private int design;
    private List<Integer> decorations;

    // Pet Chair
    private List<Pet> pets;

    // ScaleAvatar Chair
    private boolean display;
    private int dojoFloorNumber;

    // Mannequin Chair
    private List<Tuple<Integer, Integer>> hairList;

    // CharLv Chair
    private int chrLv;

    // Score Chair
    private int score;

    // PopButton Chair
    private int pop;



    // Group Chairs
    private GroupChairSeat[] seats;


    public PortableChair(Char chr, int itemID) {
        this.chr = chr;
        this.itemID = itemID;
        initGroupChair();
    }


    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getItemID() {
        return itemID;
    }

    public void setItemID(int itemID) {
        this.itemID = itemID;
    }

    public int getSetupPos() {
        return setupPos;
    }

    public void setSetupPos(int setupPos) {
        this.setupPos = setupPos;
    }

    public CustomChairType getCustomChairType() {
        return customChairType;
    }

    public void setCustomChairType(CustomChairType customChairType) {
        this.customChairType = customChairType;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Integer> getTowerChairs() {
        return towerChairs;
    }

    public void setTowerChairs(List<Integer> towerChairs) {
        this.towerChairs = towerChairs;
    }

    public long getMesos() {
        return mesos;
    }

    public void setMesos(long mesos) {
        this.mesos = mesos;
    }

    public int getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(int totalPoints) {
        this.totalPoints = totalPoints;
    }

    public List<Object[]> getLegionList() {
        return legionList;
    }

    public void setLegionList(List<Object[]> legionList) {
        this.legionList = legionList;
    }

    public int getUnk1() {
        return unk1;
    }

    public void setUnk1(int unk1) {
        this.unk1 = unk1;
    }

    public int getUnk2() {
        return unk2;
    }

    public void setUnk2(int unk2) {
        this.unk2 = unk2;
    }

    public byte getUnk3() {
        return unk3;
    }

    public void setUnk3(byte unk3) {
        this.unk3 = unk3;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public List<Tuple<String, Integer>> getPopList() {
        return popList;
    }

    public void setPopList(List<Tuple<String, Integer>> popList) {
        this.popList = popList;
    }

    public int getCandies() {
        return candies;
    }

    public void setCandies(int candies) {
        this.candies = candies;
    }

    public int getTrickOrTreat() {
        return trickOrTreat;
    }

    public void setTrickOrTreat(int trickOrTreat) {
        this.trickOrTreat = trickOrTreat;
    }

    public int getLinkChairId() {
        return linkChairId;
    }

    public void setLinkChairId(int linkChairId) {
        this.linkChairId = linkChairId;
    }

    public boolean isVerified() {
        return isVerified;
    }

    public void setVerified(boolean verified) {
        isVerified = verified;
    }

    public FileTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(FileTime creationDate) {
        this.creationDate = creationDate;
    }

    public int getDesign() {
        return design;
    }

    public void setDesign(int design) {
        this.design = design;
    }

    public List<Integer> getDecorations() {
        return decorations;
    }

    public void setDecorations(List<Integer> decorations) {
        this.decorations = decorations;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public List<Pet> getPets() {
        return pets;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }

    public int getDojoFloorNumber() {
        return dojoFloorNumber;
    }

    public void setDojoFloorNumber(int dojoFloorNumber) {
        this.dojoFloorNumber = dojoFloorNumber;
    }

    public List<Tuple<Integer, Integer>> getHairList() {
        return hairList;
    }

    public void setHairList(List<Tuple<Integer, Integer>> hairList) {
        this.hairList = hairList;
    }

    public int getChrLv() {
        return chrLv;
    }

    public void setChrLv(int chrLv) {
        this.chrLv = chrLv;
    }

    public int getPop() {
        return pop;
    }

    public void setPop(int pop) {
        this.pop = pop;
    }



    public void decodeCustomChairInfo(InPacket inPacket) {
        setUnk1(inPacket.decodeInt());
        setUnk2(inPacket.decodeInt());
        setUnk3(inPacket.decodeByte());
    }

    public void encodeCustomChairInfo(OutPacket outPacket) {
        outPacket.encodeInt(getUnk1());
        outPacket.encodeInt(getUnk2());
        outPacket.encodeByte(getUnk3());
    }

    public void encode(OutPacket outPacket) {
        // Encode per CustomChairType
        if (getCustomChairType() == null) {
            encodeCustomChairInfo(outPacket);
            return;
        }
        switch (getCustomChairType()) {
            case TowerChair:
                outPacket.encodeInt(getTowerChairs().size());
                for (int towerChair : getTowerChairs()) {
                    outPacket.encodeInt(towerChair);
                }
                break;

            case TextChair:
                outPacket.encodeString(getText());
                chr.encodeChatInfo(outPacket, getText());
                break;

            case MesoChair:
                outPacket.encodeLong(getMesos());
                break;

            case TotalChair:
                outPacket.encodeByte(getLegionList().size() > 0);
                outPacket.encodeInt(getTotalPoints());
                outPacket.encodeInt(getLegionList().size());
                for (Object[] entry : getLegionList()) {
                    int chrLv = (int) entry[0];
                    int chrJob = (int) entry[1];
                    String chrName = (String) entry[2];
                    AvatarLook avatarLook = (AvatarLook) entry[3];
                    AvatarLook avatarLook2 = (AvatarLook) entry[4];

                    outPacket.encodeInt(chrLv);
                    outPacket.encodeInt(chrJob);
                    outPacket.encodeString(chrName);
                    outPacket.encodeByte(avatarLook != null);
                    if (avatarLook != null) {
                        avatarLook.encode(outPacket);
                    }

                    outPacket.encodeByte(avatarLook2 != null);
                    if (avatarLook2 != null) {
                        avatarLook2.encode(outPacket);
                    }
                }
                outPacket.encodeInt(0);
                break;

            case SaveTimeChair:
                outPacket.encodeInt(getTime());
                break;

            case PopularChair:
                // Size limited to 10
                outPacket.encodeInt(getPopList().size());
                for (Tuple<String, Integer> entry : getPopList()) {
                    outPacket.encodeString(entry.getLeft());
                    outPacket.encodeInt(entry.getRight());
                }
                break;

            case StarForceChair:
                // No Extra Encodes
                break;

            case TrickOrTreatChair:
                outPacket.encodeInt(getCandies());
                outPacket.encodeInt(getTrickOrTreat());
                break;

            case CelebChair: // TODO -> Can't sit locally
                outPacket.encodeInt(getLinkChairId());
                break;

            case RandomChair:
                // No Extra Encodes
                break;

            case IdentityChair:
                outPacket.encodeByte(isVerified());
                outPacket.encodeFT(getCreationDate());
                break;

            case MirrorChair:
                // No Extra Encodes
                break;

            case PopButtonChair:
                outPacket.encodeInt(getPop());
                break;

            case RollingHouseChair:
                outPacket.encodeInt(getDesign());
                outPacket.encodeInt(getDecorations().size());
                for (int decoration : getDecorations()) {
                    outPacket.encodeInt(decoration);
                }
                break;

            case TraitsChair: // TODO -> Can't sit locally
                outPacket.encodeInt(getLinkChairId());
                break;

            case AndroidChair:
                // No Extra Encodes
                break;

            case RotatedSleepingBagChair:
                // No Extra Encodes
                break;

            case PetChair:
                for (int i = 0; i < 3; i++) {
                    if (getPets() != null && getPets().size() > i) {
                        Pet pet = getPets().get(i);
                        outPacket.encodeInt(pet.getItem().getItemId()); // surely 2 of these Ints are something else, but it works..
                        outPacket.encodeInt(pet.getItem().getItemId()); // surely 2 of these Ints are something else, but it works..
                        outPacket.encodeInt(pet.getItem().getItemId()); // surely 2 of these Ints are something else, but it works..
                    } else {
                        outPacket.encodeInt(0);
                        outPacket.encodeInt(0);
                        outPacket.encodeInt(0);
                    }
                }
                break;

            case ScaleAvatarChair:
                outPacket.encodeByte(isDisplay());
                if (isDisplay()) {
                    outPacket.encodeInt(getDojoFloorNumber());
                }
                break;

            case MannequinChair:
                outPacket.encodeInt(getHairList().size()); // size
                for (Tuple<Integer, Integer> entry : getHairList()) {
                    outPacket.encodeByte(0);
                    outPacket.encodeByte(0);
                    outPacket.encodeInt(entry.getLeft()); // Hair
                    outPacket.encodeByte(entry.getRight()); // Hair Colour
                    outPacket.encodeByte(0);
                    outPacket.encodeByte(0);
                }
                break;

            case CharLvChair:
                outPacket.encodeInt(getChrLv());
                break;

            case ScoreChair:
                outPacket.encodeInt(getScore());
                break;

            case ArcaneForceChair:
                outPacket.encodeInt(getScore());
                break;

            case WasteChair:
                outPacket.encodeLong(0);
                /**
                 * outPacket.encodeInt();
                 *
                 * if ( ^ == 9) {
                 *     outPacket.encodeLong();
                 *     outPacket.encodeLong();
                 * }
                 *
                 */
                break;

            case RollingHouseChair2019:
                outPacket.encodeInt(getDesign());
                outPacket.encodeInt(getDecorations().size());
                for (int decoration : getDecorations()) {
                    outPacket.encodeInt(decoration);
                }

                boolean bool = false;
                outPacket.encodeByte(bool);
                if (bool) {
                    new AvatarLook(false).encode(outPacket);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);

                    boolean isZero = false;
                    if (isZero) {
                        new AvatarLook(false).encode(outPacket);
                    }
                }
                break;

            case NullCustomChair:
                // No Extra Encodes
                break;

            case PortableChair:
                // No Extra Encodes
                break;

            case EventPointChair:
                // No Extra Encodes
                break;

            case HashTagChair: // TODO -> Can't sit locally
                for (int i = 0; i < 50; i++) {
                    outPacket.encodeString("banaan"); // Text per HashTag
                }
                break;

            case MapleGlobeChair:
                encodeCustomChairInfo(outPacket);
                outPacket.encodeInt(0);


                var loopSize = 0;
                outPacket.encodeInt(loopSize);
                for (int i = 0; i < loopSize; i++) {
                    outPacket.encodeInt(0);
                }
                break;

            case YetiChair:
                encodeCustomChairInfo(outPacket);
                outPacket.encodeInt(0);

                loopSize = 0;
                outPacket.encodeInt(loopSize);
                for (int i = 0; i < loopSize; i++) {
                    outPacket.encodeInt(0);
                }

                outPacket.encodeInt(0);
                break;
        }
    }


    // Group Chair Methods
    private void initGroupChair() {
        this.seats = new GroupChairSeat[getMaxSeats()];
        initSeats(); // create empty seats
    }

    private void initSeats() {
        for (int i = 0; i < getSeats().length; i++) {
            getSeats()[i] = new GroupChairSeat();
        }
    }

    public GroupChairSeat[] getSeats() {
        return seats;
    }

    public void setSeats(GroupChairSeat[] seats) {
        this.seats = seats;
    }

    public boolean hasFreeSeats() {
        return Arrays.stream(getSeats()).anyMatch(gcs -> !gcs.isTaken());
    }

    public int getMaxSeats() {
        if (getGroupChairInfo() == null) {
            return 0;
        }
        return getGroupChairInfo().getSeats();
    }

    public boolean isRandomSit() {
        if (getGroupChairInfo() == null) {
            return false;
        }
        return getGroupChairInfo().isRandomSit();
    }

    public int getRandomEmotion() {
        if (getGroupChairInfo() == null || getGroupChairInfo().getEmotions().size() == 0) {
            return -1; // default emotion
        }
        return Util.getRandomFromCollection(getGroupChairInfo().getEmotions());
    }

    public GroupChairInfo getGroupChairInfo() {
        ItemInfo ii = ItemData.getItemInfoByID(getItemID());
        if (ii != null) {
            return ii.getGroupChairInfo();
        }
        return null;
    }

    public void placeOnSeat(Char chr) {
        if (!hasFreeSeats()) {
            return;
        }
        GroupChairSeat seat;
        if (isRandomSit()) {
            seat = Util.getRandomFromCollection(Arrays.stream(getSeats()).filter(g -> !g.isTaken()).collect(Collectors.toList()));
        } else {
            seat = Arrays.stream(getSeats()).filter(g -> !g.isTaken()).findFirst().get(); // if exists  is already checked by  !hasFreeSeats
        }
        seat.place(chr, chr.equals(getChr()), getRandomEmotion());
    }

    public void removeFromSeat(Char chr) {
        Arrays.stream(getSeats()).filter(s -> s.getChr() != null && s.getChr().equals(chr)).findFirst().ifPresent(GroupChairSeat::removeChr);
    }

    public void clearSeat(Char chr) {
        Arrays.stream(getSeats()).filter(s -> s.getChr() != null && s.getChr().equals(chr)).findFirst().ifPresent(GroupChairSeat::clear);
    }

    public void removeAll() {
        Arrays.stream(getSeats()).forEach(GroupChairSeat::removeChr);
    }

    public void clearAll() {
        Arrays.stream(getSeats()).forEach(GroupChairSeat::clear);
    }

    public void encodeGroupChair(OutPacket outPacket, int lastChrId, boolean enter, boolean otherEnter, boolean show) {
        outPacket.encodeInt(lastChrId);
        outPacket.encodeByte(enter);
        outPacket.encodeByte(otherEnter);

        if (otherEnter) {
            outPacket.encodeInt(1); // loop for all chairs in Field
        }

        outPacket.encodeInt(getSetupPos());
        outPacket.encodeByte(show);

        outPacket.encodeInt(getItemID());
        outPacket.encodeInt(InvType.INSTALL.getVal());

        outPacket.encodeRectInt(getChr().getPosition().getRectAround(GROUP_CHAIR_RECT));
        outPacket.encodePositionInt(getChr().getPosition());

        outPacket.encodeInt(getSeats().length);
        Arrays.stream(getSeats()).forEachOrdered(outPacket::encode);
    }
}
