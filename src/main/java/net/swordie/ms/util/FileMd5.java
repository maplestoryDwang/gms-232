package net.swordie.ms.util;

import net.swordie.ms.ServerConstants;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collectors;

public class FileMd5 {

    private static final String[] WZ_TO_CHECK = new String[]{
            "Skill", "Mob"
    };

    public static byte[] createChecksum(byte[] fileBytes) throws NoSuchAlgorithmException {
        MessageDigest complete = MessageDigest.getInstance("MD5");
        complete.update(fileBytes, 0, fileBytes.length);
        return complete.digest();
    }

    public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
        var wzDir = new File(ServerConstants.WZ_DIR);
        if (!wzDir.exists()) return;

        var arr = new byte[16];

        for (var file : Arrays.stream(wzDir.listFiles()).sorted(Comparator.comparing(File::getName)).collect(Collectors.toList())) {
            for (var str : WZ_TO_CHECK) {
                if (file.getName().contains(str) && !file.getName().contains("Taming")) {
                    var bytes = Files.readAllBytes(file.toPath());
                    var checkSum = createChecksum(bytes);
                    Util.xor(arr, checkSum);
                }
            }
        }

        System.out.println("Md5 = " + Arrays.toString(arr));
    }
}
