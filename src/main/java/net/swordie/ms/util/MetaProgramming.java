package net.swordie.ms.util;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.loaders.StringData;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

/**
 * Created on 1/3/2018.
 */
public class MetaProgramming {
    private static final Logger log = LogManager.getRootLogger();

    public static void makeRemoteOrder() {
        File file = new File("D:\\Swordie\\Swordie\\resources\\tsm_decodes\\229_decodeForRemote.txt");
        List<CharacterTemporaryStat> order = new ArrayList<>();
        List<CharacterTemporaryStat> dups = new ArrayList<>();
        try {
            Scanner scanner = new Scanner(file);
            StringBuilder s = new StringBuilder();
            int num = 53;
            String lastSeen = "";
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.contains("LOBYTE(v511) = CInPacket::Decode1(a3)")) {
                    break;
                }
                if (line.contains("sub_98FCE0")) {
                    String bit = line.split(", ")[1].split("[)]")[0];
                    int val = Integer.parseInt(bit);
                    CharacterTemporaryStat cts = Arrays.stream(CharacterTemporaryStat.values())
                            .filter(c -> c.getBitPos() == val).findFirst().orElse(null);
                    if (cts == null) {
                        System.out.println("Could not find cts " + bit);
                    } else {
                        if (order.contains(cts)) {
                            dups.add(cts);
                        }
                        order.add(cts);
                    }

                }
            }
            int i = 0;
            for (CharacterTemporaryStat cts : order) {
                System.out.print(cts + ", ");
                if (i > 0 && i % 10 == 0) {
                    System.out.println();
                }
                if (i > 0 && i % 100 == 0) {
                    System.out.println();
                }
                i++;
            }
            System.out.println("\r\n");
            System.out.println("DUPLICATES:");
            for (CharacterTemporaryStat cts : dups) {
                System.out.println(cts + ", " + cts.getBitPos());
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void createSpecialEncodeCTSs() {  // Be sure to add  // END OF ORDER
                                                    // When the extra encodes start
        File file = new File("-Path-");
        String hasCTSString = "sub_909E20"; // 209
        String extraEncodeStartString = "// END OF ORDER";

        List<CharacterTemporaryStat> readCTSs = new ArrayList<>();
        List<CharacterTemporaryStat> isEncode4 = new ArrayList<>();
        List<CharacterTemporaryStat> isEncode1 = new ArrayList<>();
        List<CharacterTemporaryStat> isNotEncodeReason = new ArrayList<>();
        List<CharacterTemporaryStat> isNotEncodeAnything = new ArrayList<>();

        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.contains(extraEncodeStartString)) {
                    break;
                }
                if (line.contains(hasCTSString)) {
                    String bit = line.split(", ")[1].split("[)]")[0];
                    int val = Integer.parseInt(bit);
                    CharacterTemporaryStat cts = Arrays.stream(CharacterTemporaryStat.values())
                            .filter(c -> c.getBitPos() == val).findFirst().orElse(null);
                    if (cts == null) {
                        System.out.println("Could not find cts " + bit);
                        continue;
                    }
                    if (readCTSs.contains(cts) && !cts.equals(CharacterTemporaryStat.Poison)) {
                        System.out.println("Found duplicate CTS: "+ cts);
                        continue;
                    }
                    if (!readCTSs.contains(cts) && cts.equals(CharacterTemporaryStat.Poison)) { // as Poison's extra encode is done first.
                        readCTSs.add(cts);
                        continue;
                    }
                    readCTSs.add(cts);
                    int[] option = new int[2];
                    int counter = 0;
                    if (scanner.nextLine().contains("{")) {
                        while (scanner.hasNextLine()) {
                            String nextLine = scanner.nextLine();
                            if (nextLine.contains("}")) {
                                break;
                            }
                            if (nextLine.contains("Decode")) {
                                option[counter] = Integer.parseInt(nextLine.split("Decode")[1].split("[(]")[0]);
                                counter++;
                            }
                        }
                    }

                    if (option[0] == 4) {
                        isEncode4.add(cts);
                    } else if (option[0] == 1) {
                        isEncode1.add(cts);
                    }
                    if (option[0] == 0 && option[1] == 0) {
                        isNotEncodeAnything.add(cts);
                    } else if (option[1] == 0) {
                        isNotEncodeReason.add(cts);
                    }
                }
            }
            System.out.println("[Remote]");
            System.out.println("\n\nIs Encode 4:");
            for (CharacterTemporaryStat cts : isEncode4) {
                System.out.println("case " + cts + ":");
            }

            System.out.println("\n\nIs Encode 1:");
            for (CharacterTemporaryStat cts : isEncode1) {
                System.out.println("case " + cts + ":");
            }

            System.out.println("\n\nIs Not Encode Reason:");
            for (CharacterTemporaryStat cts : isNotEncodeReason) {
                System.out.println("case " + cts + ":");
            }

            System.out.println("\n\nIs Not Encode Anything:");
            for (CharacterTemporaryStat cts : isNotEncodeAnything) {
                System.out.println("case " + cts + ":");
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void makeLocalOrder() {   // Be sure to add  // END OF ORDER
                                            // When the extra encodes start
        File file = new File("D:\\Swordie\\Swordie\\resources\\tsm_decodes\\decodeForLocal_221.txt");
        List<CharacterTemporaryStat> order = new ArrayList<>();
        String hasCTSString = "sub_9533C0";
        String extraEncodeStartString = "// END OF ORDER";
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.contains(extraEncodeStartString)) {
                    break;
                }
                if (line.contains(hasCTSString)) {
                    String bit = line.split(", ")[1].split("[)]")[0];
                    int val = Integer.parseInt(bit);
                    CharacterTemporaryStat cts = Arrays.stream(CharacterTemporaryStat.values())
                            .filter(c -> c.getBitPos() == val).findFirst().orElse(null);
                    if (cts == null) {
                        System.out.println("Could not find cts " + bit);
                    } else {
                        order.add(cts);
                    }
                }
            }
            var i = 0;
            for (CharacterTemporaryStat cts : order) {
                System.out.print(cts + ", ");
                i++;
                if (i % 10 == 0) {
                    System.out.println();
                }
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void printCts() {
        File file2 = new File("D:\\Swordie\\Swordie\\resources\\tsm_decodes\\232_decodeForLocal.txt");
        List<Integer> arr1 = new ArrayList<>();
        try {
            Scanner scanner = new Scanner(file2);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine().replace("i64", "");
                if (line.contains("sub_1406582C0")) {
                    String bitNum = line.split(", ")[1].split("[)]")[0];
                    System.out.print(bitNum + ",");
                    arr1.add(Integer.parseInt(bitNum));
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        boolean init = true;
        int diff = 0;
        List<CharacterTemporaryStat> ctss = CharacterTemporaryStat.ORDER;
        System.out.println();
        for (int i = 1; i < ctss.size(); i++) {
            int diff1 = ctss.get(i).getBitPos() - ctss.get(i - 1).getBitPos();
            int diff2 = arr1.get(i) - arr1.get(i - 1);
            if (diff1 != diff2) {
                System.out.printf("Different diff! %d -> %d (cts %s -> %s) (diff = %d), New = %d -> %d (diff = %d) | diffdiff = %d%n",
                        ctss.get(i - 1).getBitPos(), ctss.get(i).getBitPos(), ctss.get(i - 1), ctss.get(i), diff1,
                        arr1.get(i - 1), arr1.get(i), diff2, diff2 - diff1);
            }
        }
    }

    public static void printMts() {
        File file2 = new File("resources/mts_decodes/232_mts.txt");
        List<Integer> arr1 = new ArrayList<>(Util.makeSet(1, 2));
        try (Scanner scanner = new Scanner(file2)) {
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.contains("sub_1408DC030")) {
                    String bitNum = line.split(", ")[1].split("i64")[0];
                    if (!Util.isNumber(bitNum)) {
                        System.err.println("Could not determine bitNum by string: " + bitNum);
                        continue;
                    }
                    System.out.print(bitNum + ",");
                    arr1.add(Integer.parseInt(bitNum));
                } else if (line.contains("end loop")) {
                    break;
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        boolean init = true;
        int diff = 0;
        List<MobStat> mtss = new ArrayList<>(Util.makeList(MobStat.values()));
        System.out.println();
        for (int i = 1; i < mtss.size(); i++) {
            int diff1 = mtss.get(i).getBitPos() - mtss.get(i - 1).getBitPos();
            int diff2 = arr1.get(i) - arr1.get(i -1);
            if (diff1 != diff2) {
                System.out.printf("Different diff! %d -> %d (mts %s -> %s) (diff = %d), New = %d -> %d (diff = %d)%n",
                        mtss.get(i - 1).getBitPos(), mtss.get(i).getBitPos(), mtss.get(i - 1), mtss.get(i), diff1,
                        arr1.get(i - 1), arr1.get(i), diff2);
            }
        }
    }

    public static void checkSetField() {
        File file = new File("D:\\MapleDev\\Docs\\Doodles\\setfield_v200.txt");
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                if (line.contains("if") && line.contains(" & ") && !line.contains("MEMORY")) {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void checkCtsFromString() {
        String str = "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 08 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 5E 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 01 16 00 00 00 00 02";
        byte[] bArr = Util.getByteArrayByString(str);
        var inPacket = new InPacket(bArr);
        inPacket.decodeInt();
        inPacket.decodeInt();
        for (int i = 0; i < CharacterTemporaryStat.length; i++) {
            int mask = inPacket.decodeInt();
            for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                    ErrorLogger.logAsClientError(String.format("[Error] Contained stat %s", cts));
                }
            }
        }
    }

    public static void checkCtsFromUserEnterFieldString() {
        String str = "A0 74 00 00 ED 00 00 00 0A 00 49 64 6C 65 43 6F 66 66 65 65 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 00 0A 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 0A 20 00 00 10 00 80 41 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 30 00 00 00 00 00 80 22 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 14 06 00 80 86 62 02 1E 00 80 86 62 02 01 00 18 86 62 02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 CB 26 73 02 14 00 00 00 35 BB C8 7E C0 B8 01 00 20 BF 02 00 00 00 00 00 00 00 00 00 01 00 00 00 CB 26 73 02 14 00 00 00 35 BB C8 7E C0 B8 01 00 20 BF 02 00 00 00 00 00 00 00 00 00 01 00 00 00 CD 26 73 02 FE FF FF FF 4D 0D 24 7F 81 E3 02 00 40 0D 03 00 00 00 00 00 00 00 00 00 01 00 00 00 ED 74 73 02 0F 00 00 00 AB 5F 39 DA 2F 3E 04 00 A0 BB 0D 00 00 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 3C 00 00 00 D9 37 77 00 C8 43 12 00 00 00 00 00 00 00 00 00 00 00 00 00 00 10 10 00 00 31 00 00 00 AE 01 00 00 01 03 C8 5E 00 00 A1 0F 00 00 00 EA 97 00 00 09 74 D1 10 00 05 7B 0D 10 00 07 A0 57 10 00 08 89 83 10 00 01 CA 4A 0F 00 31 DB 6E 11 00 32 08 47 11 00 0C 3D FC 10 00 35 9F 5C 19 00 40 81 1F 1A 00 40 83 1F 1A 00 40 82 1F 1A 00 40 84 1F 1A 00 40 85 1F 1A 00 0C BC FB 10 00 0C 61 FC 10 00 34 29 BB 11 00 33 AE 94 11 00 06 15 35 10 00 0B DC 87 17 00 0C F3 FB 10 00 04 31 C0 0F 00 0A 63 A4 14 00 3D BD 2C 12 00 38 6C 09 12 00 40 86 1F 1A 00 02 FE 72 0F 00 03 17 99 0F 00 11 D0 1E 11 00 11 1C 1F 11 00 FF 07 86 5F 10 00 01 86 53 0F 00 08 47 85 10 00 05 87 11 10 00 09 5C D4 10 00 FF FF FF 00 00 00 00 63 A4 14 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 25 05 00 00 FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF FF 00 00 00 00 E7 FD C4 FF 04 02 00 01 00 01 01 00 00 00 40 4B 4C 00 0B 00 42 72 6F 77 6E 20 4B 69 74 74 79 16 FC 6F 01 00 00 00 00 B1 02 75 FF 04 02 00 FF FF FF FF FF FF 00 00 00 00 01 02 00 00 00 40 4B 4C 00 0B 00 42 72 6F 77 6E 20 4B 69 74 74 79 17 FC 6F 01 00 00 00 00 7C 03 75 FF 05 02 00 FF FF FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 05 00 4B 61 70 70 61 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 FF FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00";
        var inPacket = new InPacket(Util.getByteArrayByString(str));
        inPacket.decodeInt();
        inPacket.decodeInt();
        inPacket.decodeString();
        inPacket.decodeString();

        inPacket.decodeString();
        inPacket.decodeShort();
        inPacket.decodeByte();
        inPacket.decodeShort();
        inPacket.decodeByte();
        inPacket.decodeInt();
        inPacket.decodeInt();

        inPacket.decodeByte();
        inPacket.decodeInt();
        inPacket.decodeInt();
        inPacket.decodeInt();
        inPacket.decodeByte();
        inPacket.decodeInt();
        for (int i = 0; i < CharacterTemporaryStat.length; i++) {
            int mask = inPacket.decodeInt();
            for (CharacterTemporaryStat cts : CharacterTemporaryStat.values()) {
                if (cts.getPos() == i && (cts.getVal() & mask) != 0) {
                    ErrorLogger.logAsClientError(String.format("[Error] Contained stat %s", cts.toString()));
                }
            }
        }
    }

    public static void checkMtsFromString() {
        var packet = "09 B1 D0 09 00 00 00 00 00 00 00 00 00 00 08 00 00 00 00 00 00 00 00 00 01 00 00 00 F1 00 02 00 3C 00 30 75 00 00 00 00 01";
        byte[] bArr = Util.getByteArrayByString(packet);
        var inPacket = new InPacket(bArr);
        inPacket.decodeInt();
        for (int i = 0; i < MobStat.LENGTH; i++) {
            int mask = inPacket.decodeInt();
            for (MobStat mts : MobStat.values()) {
                if (mts.getPos() == i && (mts.getVal() & mask) != 0) {
                    ErrorLogger.logAsClientError(String.format("[Error] Contained stat %s", mts.toString()));
                }
            }
        }
    }

    private static void checkItemIds() {
        DatabaseManager.init();
        StringData.loadItemStrings();

        var str = new String[]{
                "Albedo Outfit",
                "Albedo Hairdo Hat",
                "Rem Outfit",
                "Rem Shoes",
                "Aqua Outfit",
                "Aqua Shoes",
                "Shalltear Outfit",
                "Shalltear Hairdo Hat",
                "Emilia Outfit",
                "Emilia Shoes",
                "Megumin Outfit",
                "Megumin Hairdo Hat",
                "Megumin Eye Patch",
                "Megumin Shoes",
                "Tanya Outfit",
                "Tanya Shoes",
                "Winter Aran",
                "Winter Aran Suit",
                "Winter Aran Cape",
                "Winter Aran Boots",
                "Maha the Polearm",
                "Evan Golden Wings",
                "Evan Golden Cape",
                "Evan Golden Suit",
                "Evan Golden Boots",
                "Dragon Master's Wand",
                "Split Luminous",
                "Chiaroscuro Luminous Cape",
                "Chiaroscuro Luminous Suit",
                "Chiaroscuro Luminous Shoes",
                "Shining Rod of Equilibrium",
                "Royal Mercedes Cape",
                "Royal Mercedes",
                "Royal Mercedes Suit",
                "Royal Mercedes Shoes",
                "Elven Monarch's Dual Bowguns",
                "Mystic Phantom Suit",
                "Mystic Phantom Shoes",
                "Mystic Phantom",
                "Mystic Phantom Cape",
                "Phantom's Cane",
                "Secret Shade Cape",
                "Secret Shade",
                "Secret Shade Suit",
                "Secret Shade Boots",
                "Forgotten Hero's Knuckle",
                "Chiken Hataroo",
                "Chiken Glovaroo",
                "Chiken Coataroo",
                "Cloud Prison",
                "Cat Hood",
                "Cherry Blossom Candy Cap",
                "Cherry Blossom Raincoat",
                "Cherry Blossom Boots",
                "Cherry Blossom Umbrella",
                "Rain of Blossoms",
                "Snowy Cherry Blossom Label Ring",
                "Frosty Cherry Blossom Chat Ring",
                "Crimson Fate Rosette",
                "Crimson Fate Topcoat",
                "Crimson Fate Shoes",
                "Crimson Fate Seal",
                "Crimson Fate Shoes",
                "Crimson Fate Mark",
                "Blood Oath Weapon",
                "Dinofrog Hat",
                "Dinofrog Outfit",
                "Dinofrog Shoes",
                "Purple Dinosaur Hat",
                "Purple Dinosaur Gloves",
                "Purple Dinosaur Onesie",
                "Purple Dinosaur Shoes",
                "Crispy Fried Hat",
                "Crispy Fried Outfit",
                "Red Cube Outfit",
                "Fishtail Rainbow Wig",
                "LEONARD Hood",
                "LEONARD Gloves",
                "LEONARD Onesie",
                "LEONARD's Leafy Greens",
                "LEONARD Label Ring",
                "LEONARD Chat Ring",
                "Seal Hat",
                "Seal Costume",
                "Harp Seal Doll Gloves",
                "Seal Pillow",
                "La Luna",
                "Gloomy Moonlight",
                "Moonlight Lamp",
                "Shining Moonwalkers",
                "Twinkling Startfield",
                "Le Luna",
                "Shining Moonlight",
                "Raindrop Raincoat",
                "Raindrop Boots",
                "Spring Rain Parasol",
                "Aerial Mystic Black Silk Ribbon",
                "Aerial Mystic Black Silk Hat",
                "Magic Star Dress",
                "Magic Star Cape",
                "Magic Star Suit",
                "Mellow Dino Head Wrap",
                "Mellow Dino Head Suit",
                "Sunny Dino Head Wrap",
                "Sunny Dino Head Suit",
                "Shimmering Starlight Attire",
                "Shimmering Starlight Pumps",
                "Misty Starlight",
                "Infinite Star Cluster",
                "Misty Fantasia",
                "Misty Nocturne",
                "Misty Moonlight",
                "Majestic Moonlight Attire",
                "Majestic Moonlight Oxfords",
                "Outsized Sailor Coat (Black & Ivory)",
                "Outsized Sailor Coat (White & Purple)",
                "Outsized Sailor Coat (Brown & Black)",
                "Outsized Sailor Coat (White & Red)",
                "Outsized Sailor Coat (Navy & White)",
                "Neckerchief Fascinator (Ivory)",
                "Neckerchief Fascinator (Purple)",
                "Neckerchief Fascinator (Black)",
                "Neckerchief Fascinator (Navy)",
                "Neckerchief Fascinator (Red)",
                "Red Rose Label Ring",
                "Red Rose Chat Ring",
                "White Cloud Label Ring",
                "White Cloud Quote Ring",
                "V Label Ring",
                "V Chat Ring",
                "Camellia's Sword Label Ring",
                "Camellia's Sword Chat Ring",
                "Camellia's Sword",
                "Wish Fulfiller Crossbody Tote",
                "Mu Young's Sword",
                "Frostblade Weapon",
                "Lotus's Lovey Doll",
                "Dinofrog",
                "Dew Parasol",
                "Nom Nom Oz",
                "Pouty Face",
                "Hangover Make-up",
                ">:3",
                "Black Eye Bandages",
                "Bandage Blindfold",
                "Politician Glasses",
                "Umbral Earrings",
                "Snow Bloom",
                "Whistling Wind",
                "Black Cat Beanie",
                "Black Ribbon Hairpin",
                "Golden Bell Dress",
                "Burning Ghost Wristband",
                "White Ghostly Cloth",
                "Plitz Skirt",
                "Oceanic Requiem Weapon",
                "Pasta",
                "Bacon",
                "Hamburger",
                "Rib Steak",
                "Parfait",
                "Squid",
                "Jailbreak Spoon",
                "Pixel Sword",
                "Casentino Rainbow Wig",
                "Windswept Rainbow Wig",
                "Rainbow Spore Wig",
                "Front Ponytail Rainbow Wig",
        };

        System.out.println(str.length);
        for (var s : str) {
            var itemStr = StringData.getItemStringByName(s, true);
            for (var entry : itemStr.entrySet()) {
                var id = entry.getKey();
                var name = entry.getValue();
                System.out.println(id + " // " + name);
            }
        }
    }

    public static void makeDamageSkinScripts() {
        // format: <itemid> - <damageskinid>, <name> \r\n
        var str = "2431965 - 0, Basic Damage Skin\n" +
                "2433271 - 0, Basic Damage Skin\n" +
                "\t\n";

        var scanner = new Scanner(str);

        while (scanner.hasNextLine()) {
            try {
                var line = scanner.nextLine();
                var split = line.split(" - ", 2);
                var itemId = split[0];
                var split2 = split[1].split(", ");
                var damageSkinId = split2[0];
                var name = split2[1];
                System.out.printf("{%s} {%s} {%s}%n", itemId, damageSkinId, name);
                var prefix = itemId.startsWith("2") ? "consume" : "cash";

                /*
                 * # Gentle Springtime Breeze Damage Skin
                 * success = sm.addDamageSkin(2432532)
                 * if success:
                 * 	sm.chat("The Gentle Springtime Breeze Damage Skin has been added to your account's damage skin collection.")
                 */

                File file = new File(String.format("%s/item/%s_%s.py", ServerConstants.SCRIPT_DIR, prefix, itemId));
                if (true || !file.exists() || file.length() == 0) {
                    try (FileWriter sw = new FileWriter(file)) {
                        sw.write(String.format("# %s\r\n", name));
                        sw.write(String.format("success = sm.addDamageSkin(%s)\r\n", itemId));
                        sw.write("if success:\r\n");
                        sw.write(String.format("\tsm.chat(\"The %s has been added to your account's damage skin collection.\")", name));
                        sw.flush();
                    }
                }

            } catch (Exception e) {
                System.err.println(e.getMessage());
                continue;
            }

        }
    }

    public static void convertSSBSuggestions() {
        // SSB Suggestion convention/standard

        // <Set Name>
        // <itemid> - <item name>
        // <itemid> - <item name>
        // <itemid> - <item name>
        File file = new File("C:\\Users\\Bla\\Desktop\\new 2.txt");
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();

                var isItemLine = line.contains(" - ");
                var isSetLine = line.contains(" Set") || line.contains(" set");

                // alter line
                if (isItemLine) {
                    var split = line.split(" - ", 2);
                    var itemId = Integer.parseInt(split[0]);
                    var itemName = split[1];
                    line = String.format("new DropInfo(%d, 1), // %s", itemId, itemName);
                } else if (isSetLine) {
                    line = "\t\t\t// " + line;
                }

                System.out.println(line);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        printMts();
    }
}
