
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      role: '🏅',
      level: '⬆️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    // this code make config.js to be a more understandable code
    const role = [
      { name: 'محارب V⚔️', level: 0 }, { name: 'محارب IV⚔️', level: 4 }, { name: 'محارب III⚔️', level: 8 }, { name: 'محارب II⚔️', level: 12 }, { name: 'محارب I⚔️', level: 16 },
      { name: 'نخبة V', level: 20 }, { name: 'نخبة IV', level: 24 }, { name: 'نخبة III', level: 28 }, { name: 'نخبة II', level: 32 }, { name: 'نخبة I', level: 36 },
      { name: 'غراند ماستر V', level: 40 }, { name: 'غراند ماستر IV', level: 44 }, { name: 'غراند ماستر III', level: 48 }, { name: 'غراند ماستر II', level: 52 }, { name: 'غراند ماستر I', level: 56 },
      { name: 'ملحمي V', level: 60 }, { name: 'ملحمي IV', level: 64 }, { name: 'ملحمي III', level: 68 }, { name: 'ملحمي II', level: 72 }, { name: 'ملحمي I', level: 76 },
      { name: 'أسطوري V', level: 80 }, { name: 'أسطوري IV', level: 84 }, { name: 'أسطوري III', level: 88 }, { name: 'أسطوري II', level: 92 }, { name: 'أسطوري I', level: 96 },
      { name: 'خرافي V', level: 100 }, { name: 'خرافي IV', level: 104 }, { name: 'خرافي  III', level: 108 }, { name: 'خرافي  II', level: 112 }, { name: 'خرافي  I', level: 116 },
      { name: 'خرافي عظيم V', level: 120 }, { name: 'خرافي عظيم IV', level: 124 }, { name: 'خرافي عظيم III', level: 128 }, { name: 'خرافي عظيم II', level: 132 }, { name: 'خرافي عظيم I', level: 136 },
      { name: 'سفاح V', level: 140 }, { name: 'سفاح IV', level: 144 }, { name: 'سفاح III', level: 148 }, { name: 'سفاح II', level: 152 }, { name: 'سفاح I', level: 156 },
      { name: 'متوحش V', level: 160 }, { name: 'متوحش IV', level: 164 }, { name: 'متوحش III', level: 168 }, { name: 'متوحش II', level: 172 }, { name: 'متوحش I', level: 176 },
      { name: 'مشعوذ V', level: 180 }, { name: 'مشعوذ IV', level: 184 }, { name: 'مشعوذ III', level: 188 }, { name: 'مشعوذ II', level: 192 }, { name: 'مشعوذ I', level: 196 },
      { name: 'حارس الشيطان V', level: 200 }, { name: 'حارس الشيطان IV', level: 204 }, { name: 'حارس الشيطان III', level: 208 }, { name: 'حارس الشيطان II', level: 212 }, { name: 'حارس الشيطان I', level: 216 },
      { name: 'شيطان V', level: 220 }, { name: 'شيطان IV', level: 224 }, { name: 'شيطان III', level: 228 }, { name: 'شيطان II', level: 232 }, { name: 'شيطان I', level: 236 },
      { name: 'لص V', level: 240 }, { name: 'لص IV', level: 244 }, { name: 'لص III', level: 248 }, { name: 'لص II', level: 252 }, { name: 'لص I', level: 256 },
      { name: 'قاتل V', level: 260 }, { name: 'قاتل IV', level: 264 }, { name: 'قاتل III', level: 268 }, { name: 'قاتل II', level: 272 }, { name: 'قاتل I', level: 276 },
      { name: 'كاهن V', level: 280 }, { name: 'كاهن IV', level: 284 }, { name: 'كاهن III', level: 288 }, { name: 'كاهن II', level: 292 }, { name: 'كاهن I', level: 296 },
      { name: 'محتال V', level: 300 }, { name: 'محتال IV', level: 304 }, { name: 'محتال III', level: 308 }, { name: 'محتال II', level: 312 }, { name: 'محتال I', level: 316 },
      { name: 'شجاعة V', level: 320 }, { name: 'شجاعة IV', level: 324 }, { name: 'شجاعة III', level: 328 }, { name: 'شجاعة II', level: 332 }, { name: 'شجاعة I', level: 336 },
      { name: 'سهام V', level: 340 }, { name: 'سهام IV', level: 344 }, { name: 'سهام III', level: 348 }, { name: 'سهام II', level: 352 }, { name: 'سهام I', level: 356 },
      { name: 'قناص V', level: 360 }, { name: 'قناص IV', level: 364 }, { name: 'قناص III', level: 368 }, { name: 'قناص II', level: 372 }, { name: 'قناص I', level: 376 },
      { name: 'النينجا V', level: 380 }, { name: 'النينجا IV', level: 384 }, { name: 'النينجا III', level: 388 }, { name: 'النينجا II', level: 392 }, { name: 'النينجا I', level: 396 },
      { name: 'الساموراي V', level: 400 }, { name: 'الساموراي IV', level: 404 }, { name: 'الساموراي III', level: 408 }, { name: 'الساموراي II', level: 412 }, { name: 'الساموراي I', level: 416 },
      { name: 'راهب V', level: 420 }, { name: 'راهب IV', level: 424 }, { name: 'راهب III', level: 428 }, { name: 'راهب II', level: 432 }, { name: 'راهب I', level: 436 },
      { name: 'أسطورة V', level: 440 }, { name: 'أسطورة IV', level: 444 }, { name: 'أسطورة III', level: 448 }, { name: 'أسطورة II', level: 452 }, { name: 'أسطورة I', level: 456 },
      { name: 'بطل V', level: 460 }, { name: 'بطل IV', level: 464 }, { name: 'بطل III', level: 468 }, { name: 'بطل II', level: 472 }, { name: 'بطل I', level: 476 },
      { name: 'مستحضر الأرواح V', level: 480 }, { name: 'مستحضر الأرواح IV', level: 484 }, { name: 'مستحضر الأرواح III', level: 488 }, { name: 'مستحضر الأرواح II', level: 492 }, { name: 'مستحضر الأرواح I', level: 496 },
      { name: 'العجوز V', level: 500 }, { name: 'العجوز IV', level: 504 }, { name: 'العجوز III', level: 508 }, { name: 'العجوز II', level: 512 }, { name: 'العجوز I', level: 516 },
      { name: 'خلود V', level: 520 }, { name: 'خلود IV', level: 524 }, { name: 'خلود III', level: 528 }, { name: 'خلود II', level: 532 }, { name: 'خلود I', level: 536 },
      { name: 'ساحر V', level: 540 }, { name: 'ساحر IV', level: 544 }, { name: 'ساحر III', level: 548 }, { name: 'ساحر II', level: 552 }, { name: 'ساحر I', level: 556 },
      { name: 'حكيم V', level: 560 }, { name: 'حكيم IV', level: 564 }, { name: 'حكيم III', level: 568 }, { name: 'حكيم II', level: 572 }, { name: 'حكيم I', level: 576 },
      { name: 'حاكم V', level: 580 }, { name: 'حاكم IV', level: 584 }, { name: 'حاكم III', level: 588 }, { name: 'حاكم II', level: 592 }, { name: 'حاكم I', level: 596 },
      { name: 'محامي V', level: 600 }, { name: 'محامي IV', level: 604 }, { name: 'محامي III', level: 608 }, { name: 'محامي II', level: 612 }, { name: 'محامي I', level: 616 },
      { name: 'خبير V', level: 620 }, { name: 'خبير IV', level: 624 }, { name: 'خبير III', level: 628 }, { name: 'خبير II', level: 632 }, { name: 'خبير I', level: 636 },
      { name: 'محترف V', level: 640 }, { name: 'محترف IV', level: 644 }, { name: 'محترف III', level: 648 }, { name: 'محترف II', level: 652 }, { name: 'محترف I', level: 656 },
      { name: 'حارس التنانين V', level: 660 }, { name: 'حارس التنانين IV', level: 664 }, { name: 'حارس التنانين III', level: 668 }, { name: 'حارس التنانين II', level: 672 }, { name: 'حارس التنانين I', level: 676 },
      { name: 'تنين V', level: 680 }, { name: 'تنين IV', level: 684 }, { name: 'تنين III', level: 688 }, { name: 'تنين II', level: 692 }, { name: 'تنين I', level: 696 },
      { name: 'ملك التنانين V', level: 700 }, { name: 'ملك التنانين IV', level: 704 }, { name: 'ملك التنانين III', level: 708 }, { name: 'ملك التنانين II', level: 712 }, { name: 'ملك التنانين I', level: 716 },
      { name: 'شديد الحرارة V', level: 720 }, { name: 'شديد الحرارة IV', level: 724 }, { name: 'شديد الحرارة III', level: 728 }, { name: 'شديد الحرارة II', level: 732 }, { name: 'شديد الحرارة I', level: 736 },
      { name: 'بركان V', level: 740 }, { name: 'بركان IV', level: 744 }, { name: 'بركان III', level: 748 }, { name: 'بركان II', level: 752 }, { name: 'بركان I', level: 756 },
      { name: 'قاتل دببه الجليد V', level: 760 }, { name: 'قاتل دببه الجليد  IV', level: 764 }, { name: 'قاتل دببه الجليد  III', level: 768 }, { name: 'قاتل دببه الجليد  II', level: 772 }, { name: 'قاتل دببه الجليد  I', level: 776 },
      { name: ' آكل لحوم التنانين V', level: 780 }, { name: 'آكل لحوم التنانين IV', level: 784 }, { name: 'آكل لحوم التنانين III', level: 788 }, { name: 'آكل لحوم التنانين II', level: 792 }, { name: 'آكل لحوم التنانين I', level: 796 },
      { name: 'نائب الأمبراطور V', level: 800 }, { name: 'نائب الأمبراطور IV', level: 804 }, { name: 'نائب الأمبراطور III', level: 808 }, { name: 'نائب الأمبراطور II', level: 812 }, { name: 'نائب الأمبراطور I', level: 816 },
      { name: 'متخفي V', level: 820 }, { name: 'متخفي IV', level: 824 }, { name: 'متخفي III', level: 828 }, { name: 'متخفي II', level: 832 }, { name: 'متخفي I', level: 836 },
      { name: 'قاتل متسلسل V', level: 840 }, { name: 'قاتل متسلسل IV', level: 844 }, { name: 'قاتل متسلسل III', level: 848 }, { name: 'قاتل متسلسل II', level: 852 }, { name: 'قاتل متسلسل I', level: 856 },
      { name: 'دوامة غضب عارم V', level: 860 }, { name: 'دوامة غضب عارم IV', level: 864 }, { name: 'دوامة غضب عارم III', level: 868 }, { name: 'دوامة غضب عارم II', level: 872 }, { name: 'دوامة غضب عارم I', level: 876 },
      { name: 'فن التنبئ V', level: 880 }, { name: 'فن التنبئ IV', level: 884 }, { name: 'فن التنبئ III', level: 888 }, { name: 'فن التنبئ II', level: 892 }, { name: 'فن التنبئ I', level: 896 },
      { name: 'ملك الحرب V', level: 900 }, { name: 'ملك الحرب IV', level: 904 }, { name: 'ملك الحرب III', level: 908 }, { name: 'ملك الحرب II', level: 912 }, { name: 'ملك الحرب I', level: 916 },
      { name: 'ملك الخصوبة V', level: 920 }, { name: 'ملك الخصوبة IV', level: 924 }, { name: 'ملك الخصوبة III', level: 928 }, { name: 'ملك الخصوبة II', level: 932 }, { name: 'ملك الخصوبة I', level: 936 },
      { name: 'كرات التنين الخارقة V', level: 940 }, { name: 'كرات التنين الخارقة IV', level: 944 }, { name: 'كرات التنين الخارقة III', level: 948 }, { name: 'كرات التنين الخارقة II', level: 952 }, { name: 'كرات التنين الخارقة I', level: 956 },
      { name: 'أوتشيها V', level: 960 }, { name: 'أوتشيها IV', level: 964 }, { name: 'أوتشيها III', level: 968 }, { name: 'أوتشيها II', level: 972 }, { name: 'أوتشيها I', level: 976 },
      { name: 'شينوبي V', level: 980 }, { name: 'شينوبي IV', level: 984 }, { name: 'شينوبي III', level: 988 }, { name: 'شينوبي II', level: 992 }, { name: 'شينوبي I', level: 996 },
      { name: 'جبار V', level: 1000 }, { name: 'جبار IV', level: 1004 }, { name: 'جبار III', level: 1008 }, { name: 'جبار II', level: 1012 }, { name: 'جبار I', level: 1016 },
      { name: 'أوزوماكي V', level: 1020 }, { name: 'أوزوماكي IV', level: 1024 }, { name: 'أوزوماكي III', level: 1028 }, { name: 'أوزوماكي II', level: 1032 }, { name: 'أوزوماكي I', level: 1036 },
      { name: 'كوكب ناميك V', level: 1040 }, { name: 'كوكب ناميك IV', level: 1044 }, { name: 'كوكب ناميك III', level: 1048 }, { name: 'كوكب ناميك II', level: 1052 }, { name: 'كوكب ناميك I', level: 1056 },
      { name: 'كنز الونبيس V', level: 1060 }, { name: 'كنز الونبيس IV', level: 1064 }, { name: 'كنز الونبيس III', level: 1068 }, { name: 'كنز الونبيس II', level: 1072 }, { name: 'كنز الونبيس I', level: 1076 },
      { name: 'ملك الجحيم V', level: 1080 }, { name: 'ملك الجحيم IV', level: 1084 }, { name: 'ملك الجحيم III', level: 1088 }, { name: 'ملك الجحيم II', level: 1092 }, { name: 'ملك الجحيم I', level: 1096 },
      { name: 'المسيطر V', level: 1100 }, { name: 'المسيطر IV', level: 1104 }, { name: 'المسيطر III', level: 1108 }, { name: 'المسيطر II', level: 1112 }, { name: 'المسيطر I', level: 1116 },
      { name: 'أمير V', level: 1120 }, { name: 'أمير IV', level: 1124 }, { name: 'أمير III', level: 1128 }, { name: 'أمير II', level: 1132 }, { name: 'أمير I', level: 1136 },
      { name: 'قاتل الشياطين V', level: 1140 }, { name: 'قاتل الشياطين IV', level: 1144 }, { name: 'قاتل الشياطين III', level: 1148 }, { name: 'قاتل الشياطين II', level: 1152 }, { name: 'قاتل الشياطين I', level: 1156 },
      { name: 'أمبراطور السحر V', level: 1160 }, { name: 'أمبراطور السحر IV', level: 1164 }, { name: 'أمبراطور السحر III', level: 1168 }, { name: 'أمبراطور السحر II', level: 1172 }, { name: 'أمبراطور السحر I', level: 1176 },
      { name: 'ملك القراصنة V', level: 1174 }, { name: 'ملك القراصنة IV', level: 1178 }, { name: 'ملك القراصنة III', level: 1182 }, { name: 'ملك القراصنة II', level: 1186 }, { name: 'ملك القراصنة I', level: 1190 },
      { name: 'حاكم الدمار V', level: 1194 }, { name: 'حاكم الدمار IV', level: 1198 }, { name: 'حاكم الدمار III', level: 1202 }, { name: 'حاكم الدمار II', level: 1206 }, { name: 'حاكم الدمار I', level: 1210 },          
      { name: 'ملك الوحوش V', level: 1214 }, { name: 'ملك الوحوش IV', level: 1218 }, { name: 'ملك الوحوش III', level: 1222 }, { name: 'ملك الوحوش II', level: 1226 }, { name: 'ملك الوحوش I', level: 1230 },
      { name: 'جوي بوي V', level: 1234 }, { name: 'جوي بوي IV', level: 1238 }, { name: 'جوي بوي III', level: 1242 }, { name: 'جوي بوي II', level: 1246 }, { name: 'جوي بوي I', level: 1250 },
      { name: 'أمير السايان V', level: 1254 }, { name: 'أمير السايان IV', level: 1258 }, { name: 'أمير السايان III', level: 1262 }, { name: 'أمير السايان II', level: 1266 }, { name: 'أمير السايان I', level: 1270 },
      { name: 'ملك الشياطين V', level: 1274 }, { name: 'ملك الشياطين IV', level: 1278 }, { name: 'ملك الشياطين III', level: 1282 }, { name: 'ملك الشياطين II', level: 1286 }, { name: 'ملك الشياطين I', level: 1290 },
      { name: 'محارب التحرير V', level: 1294 }, { name: 'محارب التحرير IV', level: 1298 }, { name: 'محارب التحرير III', level: 1302 }, { name: 'محارب التحرير II', level: 1306 }, { name: 'محارب التحرير I', level: 1310 },
      { name: 'قبعة القش V', level: 1314 }, { name: 'قبعة القش IV', level: 1318 }, { name: 'قبعة القش III', level: 1322 }, { name: 'قبعة القش II', level: 1326 }, { name: 'قبعة القش I', level: 1330 },
      { name: 'ملك الظلام V', level: 1334 }, { name: 'ملك الظلام IV', level: 1338 }, { name: 'ملك الظلام III', level: 1342 }, { name: 'ملك الظلام II', level: 1346 }, { name: 'ملك الظلام I', level: 1350 },
      { name: 'الهوكاغي V', level: 1354 }, { name: 'الهوكاغي IV', level: 1358 }, { name: 'الهوكاغي III', level: 1362 }, { name: 'الهوكاغي II', level: 1366 }, { name: 'الهوكاغي I', level: 1370 },
    ]

    return role.reverse().find(role => level >= role.level)
  }
}
