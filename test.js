(function() {
    var testResults = document.createElement('div');
    document.getElementById('app').appendChild(testResults);

    function testSha256(expected, s) {
        var check = sha256(s), el;
        if (check !== expected) {
            el = document.createElement('p');
            el.innerHTML = 'Test failed: sha256('+s+') expected '+expected+' got '+check;
            testResults.appendChild(el);
        }
    }

	testSha256('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', "a".repeat(0));
	testSha256('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', "a".repeat(1));
	testSha256('961b6dd3ede3cb8ecbaacbd68de040cd78eb2ed5889130cceb4c49268ea4d506', "a".repeat(2));
	testSha256('9834876dcfb05cb167a5c24953eba58c4ac89b1adf57f28f2f9d09af107ee8f0', "a".repeat(3));
	testSha256('61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', "a".repeat(4));
	testSha256('ed968e840d10d2d313a870bc131a4e2c311d7ad09bdf32b3418147221f51a6e2', "a".repeat(5));
	testSha256('ed02457b5c41d964dbd2f2a609d63fe1bb7528dbe55e1abf5b52c249cd735797', "a".repeat(6));
	testSha256('e46240714b5db3a23eee60479a623efba4d633d27fe4f03c904b9e219a7fbe60', "a".repeat(7));
	testSha256('1f3ce40415a2081fa3eee75fc39fff8e56c22270d1a978a7249b592dcebd20b4', "a".repeat(8));
	testSha256('f2aca93b80cae681221f0445fa4e2cae8a1f9f8fa1e1741d9639caad222f537d', "a".repeat(9));
	testSha256('bf2cb58a68f684d95a3b78ef8f661c9a4e5b09e82cc8f9cc88cce90528caeb27', "a".repeat(10));
	testSha256('28cb017dfc99073aa1b47c1b30f413e3ce774c4991eb4158de50f9dbb36d8043', "a".repeat(11));
	testSha256('f24abc34b13fade76e805799f71187da6cd90b9cac373ae65ed57f143bd664e5', "a".repeat(12));
	testSha256('a689d786e81340e45511dec6c7ab2d978434e5db123362450fe10cfac70d19d0', "a".repeat(13));
	testSha256('82cab7df0abfb9d95dca4e5937ce2968c798c726fea48c016bf9763221efda13', "a".repeat(14));
	testSha256('ef2df0b539c6c23de0f4cbe42648c301ae0e22e887340a4599fb4ef4e2678e48', "a".repeat(15));
	testSha256('0c0beacef8877bbf2416eb00f2b5dc96354e26dd1df5517320459b1236860f8c', "a".repeat(16));
	testSha256('b860666ee2966dd8f903be44ee605c6e1366f926d9f17a8f49937d11624eb99d', "a".repeat(17));
	testSha256('c926defaaa3d13eda2fc63a553bb7fb7326bece6e7cb67ca5296e4727d89bab4', "a".repeat(18));
	testSha256('a0b4aaab8a966e2193ba172d68162c4656860197f256b5f45f0203397ff3f99c', "a".repeat(19));
	testSha256('42492da06234ad0ac76f5d5debdb6d1ae027cffbe746a1c13b89bb8bc0139137', "a".repeat(20));
	testSha256('7df8e299c834de198e264c3e374bc58ecd9382252a705c183beb02f275571e3b', "a".repeat(21));
	testSha256('ec7c494df6d2a7ea36668d656e6b8979e33641bfea378c15038af3964db057a3', "a".repeat(22));
	testSha256('897d3e95b65f26676081f8b9f3a98b6ee4424566303e8d4e7c7522ebae219eab', "a".repeat(23));
	testSha256('09f61f8d9cd65e6a0c258087c485b6293541364e42bd97b2d7936580c8aa3c54', "a".repeat(24));
	testSha256('2f521e2a7d0bd812cbc035f4ed6806eb8d851793b04ba147e8f66b72f5d1f20f', "a".repeat(25));
	testSha256('9976d549a25115dab4e36d0c1fb8f31cb07da87dd83275977360eb7dc09e88de', "a".repeat(26));
	testSha256('cc0616e61cbd6e8e5e34e9fb2d320f37de915820206f5696c31f1fbd24aa16de', "a".repeat(27));
	testSha256('9c547cb8115a44883b9f70ba68f75117cd55359c92611875e386f8af98c172ab', "a".repeat(28));
	testSha256('6913c9c7fd42fe23df8b6bcd4dbaf1c17748948d97f2980b432319c39eddcf6c', "a".repeat(29));
	testSha256('3a54fc0cbc0b0ef48b6507b7788096235d10292dd3ae24e22f5aa062d4f9864a', "a".repeat(30));
	testSha256('61c60b487d1a921e0bcc9bf853dda0fb159b30bf57b2e2d2c753b00be15b5a09', "a".repeat(31));
	testSha256('3ba3f5f43b92602683c19aee62a20342b084dd5971ddd33808d81a328879a547', "a".repeat(32));
	testSha256('852785c805c77e71a22340a54e9d95933ed49121e7d2bf3c2d358854bc1359ea', "a".repeat(33));
	testSha256('a27c896c4859204843166af66f0e902b9c3b3ed6d2fd13d435abc020065c526f', "a".repeat(34));
	testSha256('629362afc62c74497caed2272e30f8125ecd0965f8d8d7cfc4e260f7f8dd319d', "a".repeat(35));
	testSha256('22c1d24bcd03e9aee9832efccd6da613fc702793178e5f12c945c7b67ddda933', "a".repeat(36));
	testSha256('21ec055b38ce759cd4d0f477e9bdec2c5b8199945db4439bae334a964df6246c', "a".repeat(37));
	testSha256('365a9c3e2c2af0a56e47a9dac51c2c5381bf8f41273bad3175e0e619126ad087', "a".repeat(38));
	testSha256('b4d5e56e929ba4cda349e9274e3603d0be246b82016bca20f363963c5f2d6845', "a".repeat(39));
	testSha256('e33cdf9c7f7120b98e8c78408953e07f2ecd183006b5606df349b4c212acf43e', "a".repeat(40));
	testSha256('c0f8bd4dbc2b0c03107c1c37913f2a7501f521467f45dd0fef6958e9a4692719', "a".repeat(41));
	testSha256('7a538607fdaab9296995929f451565bbb8142e1844117322aafd2b3d76b01aff', "a".repeat(42));
	testSha256('66d34fba71f8f450f7e45598853e53bfc23bbd129027cbb131a2f4ffd7878cd0', "a".repeat(43));
	testSha256('16849877c6c21ef0bfa68e4f6747300ddb171b170b9f00e189edc4c2fc4db93e', "a".repeat(44));
	testSha256('52789e3423b72beeb898456a4f49662e46b0cbb960784c5ef4b1399d327e7c27', "a".repeat(45));
	testSha256('6643110c5628fff59edf76d82d5bf573bf800f16a4d65dfb1e5d6f1a46296d0b', "a".repeat(46));
	testSha256('11eaed932c6c6fddfc2efc394e609facf4abe814fc6180d03b14fce13a07d0e5', "a".repeat(47));
	testSha256('97daac0ee9998dfcad6c9c0970da5ca411c86233a944c25b47566f6a7bc1ddd5', "a".repeat(48));
	testSha256('8f9bec6a62dd28ebd36d1227745592de6658b36974a3bb98a4c582f683ea6c42', "a".repeat(49));
	testSha256('160b4e433e384e05e537dc59b467f7cb2403f0214db15c5db58862a3f1156d2e', "a".repeat(50));
	testSha256('bfc5fe0e360152ca98c50fab4ed7e3078c17debc2917740d5000913b686ca129', "a".repeat(51));
	testSha256('6c1b3dc7a706b9dc81352a6716b9c666c608d8626272c64b914ab05572fc6e84', "a".repeat(52));
	testSha256('abe346a7259fc90b4c27185419628e5e6af6466b1ae9b5446cac4bfc26cf05c4', "a".repeat(53));
	testSha256('a3f01b6939256127582ac8ae9fb47a382a244680806a3f613a118851c1ca1d47', "a".repeat(54));
	testSha256('9f4390f8d30c2dd92ec9f095b65e2b9ae9b0a925a5258e241c9f1e910f734318', "a".repeat(55));
	testSha256('b35439a4ac6f0948b6d6f9e3c6af0f5f590ce20f1bde7090ef7970686ec6738a', "a".repeat(56));
	testSha256('f13b2d724659eb3bf47f2dd6af1accc87b81f09f59f2b75e5c0bed6589dfe8c6', "a".repeat(57));
	testSha256('d5c039b748aa64665782974ec3dc3025c042edf54dcdc2b5de31385b094cb678', "a".repeat(58));
	testSha256('111bb261277afd65f0744b247cd3e47d386d71563d0ed995517807d5ebd4fba3', "a".repeat(59));
	testSha256('11ee391211c6256460b6ed375957fadd8061cafbb31daf967db875aebd5aaad4', "a".repeat(60));
	testSha256('35d5fc17cfbbadd00f5e710ada39f194c5ad7c766ad67072245f1fad45f0f530', "a".repeat(61));
	testSha256('f506898cc7c2e092f9eb9fadae7ba50383f5b46a2a4fe5597dbb553a78981268', "a".repeat(62));
	testSha256('7d3e74a05d7db15bce4ad9ec0658ea98e3f06eeecf16b4c6fff2da457ddc2f34', "a".repeat(63));
	testSha256('ffe054fe7ae0cb6dc65c3af9b61d5209f439851db43d0ba5997337df154668eb', "a".repeat(64));
	testSha256('635361c48bb9eab14198e76ea8ab7f1a41685d6ad62aa9146d301d4f17eb0ae0', "a".repeat(65));
	testSha256('ac137fce49837c7c2945f6160d3c0e679e6f40070850420a22bc10e0692cbdc7', "a".repeat(66));
	testSha256('6116c09f89718e829f69b7afb1d9d60c6973935d96b33213e4d28689fe108ee7', "a".repeat(67));
	testSha256('574c61e5f2aad36ec528ecf4c6de44793f9dab06b38d1c5a41f8a9d64b4ed53b', "a".repeat(68));
	testSha256('ef5ed46eed2002191724db57b334457889c9ad4f3e7027cdd7dd41340db75d11', "a".repeat(69));
	testSha256('6bd5e5034855a11241f0dee8fc72850ffd9955b28347a86428b5fa19119f6ad0', "a".repeat(70));
	testSha256('eefa4cfbea79400c2f4239e1f702e02ebece761f78b6a35c9d2c167a79f9570c', "a".repeat(71));
	testSha256('d66304b6180365e47c858f6c84d3da065caf4b3350c9f45277a1af82e3dbb055', "a".repeat(72));
	testSha256('0e058e3f7d0439f9054d59c735587ae99655f6473a234ce494d82b5586f7eac6', "a".repeat(73));
	testSha256('f638359d0db860cf30cb5e6744986938c70153043efe8a348354b275d87ece74', "a".repeat(74));
	testSha256('8af881bc88895bd9d8cea975a7d06dc0275d9db9d57f138216936b65e8b06489', "a".repeat(75));
	testSha256('f8b8aba652e5b3cde6bc74bcb7bff15289a222cfdb7759a9809dc08574911f60', "a".repeat(76));
	testSha256('bc19b9d355411a4e3d3426f5d39bfc9a856ca5f042bc3a468572080086ad1384', "a".repeat(77));
	testSha256('d3477171d6f80a02b6415538fdd582144910c9b8482b982a1b62b441f21dc819', "a".repeat(78));
	testSha256('daa76b4d16679957833226a8844506098a37bac94979f1cbfc6c4ac3b09b9b60', "a".repeat(79));
	testSha256('0f45e858fbc4176cdf4e411f88281edefc390ae5afe7df0f44cd9297f0a64580', "a".repeat(80));
})();