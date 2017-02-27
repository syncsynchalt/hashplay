(function() {
    var modlim = 2**32;
    var k = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2 ];

    function ch(x, y, z) {
        return (x & y) ^ (~x & z);
    }

    function maj(x, y, z) {
        return (x & y) ^ (x & z) ^ (y & z);
    }

    function rotr(w, num) { return (w>>>num | w <<(32-num)) >>> 0; }
    function rotl(w, num) { return (w <<num | w>>>(32-num)) >>> 0; }
    function shr (w, num) { return w>>>num; }

    function bsig0(w) {
        return (rotr(w,  2) ^ rotr(w, 13) ^ rotr(w, 22)) >>> 0;
    }
    function bsig1(w) {
        return (rotr(w,  6) ^ rotr(w, 11) ^ rotr(w, 25)) >>> 0;
    }
    function ssig0(w) {
        return (rotr(w,  7) ^ rotr(w, 18) ^  shr(w,  3)) >>> 0;
    }
    function ssig1(w) {
        return (rotr(w, 17) ^ rotr(w, 19) ^  shr(w, 10)) >>> 0;
    }

    function createPadding(dataLength) {
        var i, need, padding,
            hl = 0, // todo - handle lengths higher than 2^32/8
            ll = (dataLength*8) & 4294957295,
            l = (dataLength*8)%512;
        if (l+8 > 448)
            l -= 512;
        need = 448-l-8;
        padding = [0x80];
        for (i = 0; i < need; i+=8) {
            padding.push(0);
        }
        padding.push(hl >> 24 & 0xff);
        padding.push(hl >> 16 & 0xff);
        padding.push(hl >>  8 & 0xff);
        padding.push(hl       & 0xff);
        padding.push(ll >> 24 & 0xff);
        padding.push(ll >> 16 & 0xff);
        padding.push(ll >>  8 & 0xff);
        padding.push(ll       & 0xff);
        return padding;
    }

    function readBlock(str, index, padding) {
        var block = new Array(16),
            i, padIndex;
        if (padding.length === 0) {
            return undefined;
        }
        for (i = 0; i < 16; i++) {
            if (index+4 > str.length)
                break;
            block[i] = ((str.charCodeAt(index+0) & 0xff) << 24) |
                       ((str.charCodeAt(index+1) & 0xff) << 16) |
                       ((str.charCodeAt(index+2) & 0xff) <<  8) |
                       ((str.charCodeAt(index+3) & 0xff) <<  0);
            index += 4;
        }
        if (i == 16)
            return block;
        if (str.length % 4 == 0) {
            block[i++] = ((padding[0] & 0xff) << 24) |
                         ((padding[1] & 0xff) << 16) |
                         ((padding[2] & 0xff) <<  8) |
                         ((padding[3] & 0xff) <<  0);
            padIndex = 4;
        } else if (str.length % 4 == 1) {
            block[i++] = ((str.charCodeAt(str.length-1) & 0xff) << 24) |
                         ((padding[0] & 0xff) << 16) |
                         ((padding[1] & 0xff) <<  8) |
                         ((padding[2] & 0xff) <<  0);
            padIndex = 3;
        } else if (str.length % 4 == 2) {
            block[i++] = ((str.charCodeAt(str.length-2) & 0xff) << 24) |
                         ((str.charCodeAt(str.length-1) & 0xff) << 16) |
                         ((padding[0] & 0xff) <<  8) |
                         ((padding[1] & 0xff) <<  0);
            padIndex = 2;
        } else if (str.length % 4 == 3) {
            block[i++] = ((str.charCodeAt(str.length-3) & 0xff) << 24) |
                         ((str.charCodeAt(str.length-2) & 0xff) << 16) |
                         ((str.charCodeAt(str.length-1) & 0xff) <<  8) |
                         ((padding[0] & 0xff) <<  8);
            padIndex = 1;
        }

        for (; i < 16; i++) {
            block[i] = (padding[padIndex+0] << 24) |
                       (padding[padIndex+1] << 16) |
                       (padding[padIndex+2] <<  8) |
                       (padding[padIndex+3]      );
            padIndex += 4;
        }
        padding.splice(0, padIndex);
        return block;
    }

    function printHash(hs) {
        var i, s, result = "";
        for (i = 0; i < 8; i++) {
            s = hs[i].toString(16);
            while (s.length < 8) {
                s = "0"+s;
            }
            result += s;
        }
        return result;
    }

    window.sha256 = function sha256(str) {
        var hs = [ 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
                   0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19 ],
            padding = createPadding(str.length),
            t, index = 0,
            W = new Array(64),
            block, a, b, c, d, e, f, g, h, T1, T2;

        while (block = readBlock(str, index, padding)) {
            for (t = 0; t < 16; t++) {
                W[t] = block[t];
            }
            for (t = 16; t < 64; t++) {
                W[t] = ssig1(W[t-2]) + W[t-7] + ssig0(W[t-15]) + W[t-16];
            }
            a = hs[0]; b = hs[1]; c = hs[2]; d = hs[3];
            e = hs[4]; f = hs[5]; g = hs[6]; h = hs[7];
            for (t = 0; t < 64; t++) {
                T1 = (((((((h + bsig1(e)) >>> 0) + ch(e, f, g)) >>> 0) + k[t]) >>> 0) + W[t]) >>> 0;
                T2 = (bsig0(a) + maj(a, b, c)) >>> 0;
                h = g;
                g = f;
                f = e;
                e = (d + T1) >>> 0;
                d = c;
                c = b;
                b = a;
                a = (T1 + T2) >>> 0;
            }
            hs[0] = (a + hs[0]) >>> 0;
            hs[1] = (b + hs[1]) >>> 0;
            hs[2] = (c + hs[2]) >>> 0;
            hs[3] = (d + hs[3]) >>> 0;
            hs[4] = (e + hs[4]) >>> 0;
            hs[5] = (f + hs[5]) >>> 0;
            hs[6] = (g + hs[6]) >>> 0;
            hs[7] = (h + hs[7]) >>> 0;
            index += 64;
        }

        return printHash(hs);
    };
})();
