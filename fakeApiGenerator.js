const fs = require('fs');

var projectsData = {
    planesData: {
      10875: {
        planeId: 10875,
        title: "Qingdao Vanke Future City",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2023/02/CLOU_Qingdao_Vanke_Future_City_Zhu-Runzi_web-14-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/qingdao-vanke-future-city/",
      },
      2575: {
        planeId: 2575,
        title: "CLOU Sanlitun Office",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-sanlitun-soho-architects-office-interior-clou-architects-0443-012-1152x870.jpg",
        permalink: "https://www.clouarchitects.com/project/clou-sanlitun-office/",
      },
      2521: {
        planeId: 2521,
        title: "Play Stack-Rotterdam Life Plaza Shenyang",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenyang-rotterdam-playstack-shopping-mall-retail-clou-architects-0320-001-1152x864.jpg",
        permalink:
          "https://www.clouarchitects.com/project/play-stack-rotterdam-life-plaza-shenyang/",
      },
      2529: {
        planeId: 2529,
        title: "Paradise Walk Wuhan Jiangchen",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/07/wuhan-longfor-paradise-walk-shopping-mall-mixed-use-clou-architects-0333-001-01-1152x767.jpg",
        permalink:
          "https://www.clouarchitects.com/project/paradise-walk-wuhan-jiangchen/",
      },
      487: {
        planeId: 487,
        title: "UniFun Tianfu Chengdu",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chengdu-unifun-tianfu-shopping-mall-clou-architects-0369-08-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/unifun-tianfu-chengdu/",
      },
      2542: {
        planeId: 2542,
        title: "Starry Street Chengdu Wuhou",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chengdu-wuhou-new-city-retail-stret-mixed-use-clou-architects-0364-006-1152x767.jpg",
        permalink:
          "https://www.clouarchitects.com/project/starry-street-chengdu-wuhou/",
      },
      2545: {
        planeId: 2545,
        title: "CapitaMall Nuohemule",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/hohhot-inner-mongolia-capitaland-green-shopping-mall-clou-architects-0373-019-1-1152x647.jpg",
        permalink: "https://www.clouarchitects.com/project/capitamall-nuohemule/",
      },
      2563: {
        planeId: 2563,
        title: "Kaisa Zhuhai Organic Village",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/0445_Kaisa_Zhuhai_Model_Seb_11-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/kaisa-zhuhai-organic-restaurant/",
      },
      2551: {
        planeId: 2551,
        title: "Xiaomeisha Transport Centre",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenzhen-xiaomeisha-transport-hub-tourist-centre-tod-clou-architects-0397-005-1152x752.jpg",
        permalink:
          "https://www.clouarchitects.com/project/xiaomeisha-transport-centre/",
      },
      2561: {
        planeId: 2561,
        title: "Sunac Meishan Lego Park",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chengdu-sunac-lego-park-retail-street-clou-architects-0435-007-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/sunac-meishan-lego-park/",
      },
      2517: {
        planeId: 2517,
        title: "Cube Gallery",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/hangzhou-vanke-xiaoshan-retail-street-cube-gallery-clou-architects-0307-006-1152x780.jpg",
        permalink: "https://www.clouarchitects.com/project/cube-gallery/",
      },
      2555: {
        planeId: 2555,
        title: "Vanke Shenyang Workers' Village",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenyang-workers-village-masterplan-clou-architects-0417-007-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/vanke-shenyang-workers-village/",
      },
      2011: {
        planeId: 2011,
        title: "Shoukai Vanke Centre Beijing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-daxing-shoukai-vanke-centre-mixed-use-clou-architects-0174022-1152x531.jpg",
        permalink:
          "https://www.clouarchitects.com/project/shoukai-vanke-centre-beijing/",
      },
      2524: {
        planeId: 2524,
        title: "Yuansu Hot Spring Resort Wuyi",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/wuyi-resort-hot-springs-clou-architects-0325-005-1152x643.jpg",
        permalink:
          "https://www.clouarchitects.com/project/yuansu-hot-spring-resort-wuyi/",
      },
      2515: {
        planeId: 2515,
        title: "Jiuxi Wedding Exhibition",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-kuntai-chaowai-jiuxi-wedding-exhibition-interior-clou-architects-0299-002-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/jiuxi-wedding-exhibition/",
      },
      2350: {
        planeId: 2350,
        title: "Shoukai Vanke Centre Sales Gallery",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-daxing-shoukai-vanke-sales-gallery-showroom-clou-architects-0174-004-1-1152x882.jpg",
        permalink:
          "https://www.clouarchitects.com/project/shoukai-vanke-centre-sales-gallery/",
      },
      6660: {
        planeId: 6660,
        title: "Fosun Jinan International Finance Centre",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/jinan-fosun-international-shopping-mall-retail-clou-architects-0401-003-1152x665.jpg",
        permalink:
          "https://www.clouarchitects.com/project/fosun-jinan-international-finance-centre/",
      },
      2520: {
        planeId: 2520,
        title: "The Cube - Taiyuan City of Light",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chang-feng-jie-the-cube-showroom-sales-gallery-clou-architects-0318-002-e1648463333504-1152x674.jpg",
        permalink:
          "https://www.clouarchitects.com/project/the-cube-taiyuan-city-of-light/",
      },
      6928: {
        planeId: 6928,
        title: "Shunde Vanke Plaza",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shunde-vanke-clou-architects-0444-04-1152x570.jpg",
        permalink: "https://www.clouarchitects.com/project/shunde-vanke-plaza/",
      },
      1768: {
        planeId: 1768,
        title: "Zhuzong Vanke Plaza Beijing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-zhuzong-vanke-plaza-mixed-use-clou-architects-0051-050-1-1152x941.jpg",
        permalink:
          "https://www.clouarchitects.com/project/zhuzong-vanke-plaza-beijing/",
      },
      2508: {
        planeId: 2508,
        title: "Qingdao Red Island Hotel",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/qingdao-hotel-high-tech-zone-clou-architects-5010001-007-1152x1427.jpg",
        permalink:
          "https://www.clouarchitects.com/project/qingdao-red-island-hotel/",
      },
      2503: {
        planeId: 2503,
        title: "Raffles City Beijing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-dongzhimen-capitaland-raffles-city-shopping-mall-clou-architects-1185-004-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/raffles-city-beijing/",
      },
      1562: {
        planeId: 1562,
        title: "Jing Mian Xin Cheng",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-jing-mian-xin-cheng-mixed-use-tower-clou-architects-0011-043-1152x1158.jpg",
        permalink: "https://www.clouarchitects.com/project/jing-mian-xin-cheng/",
      },
      1680: {
        planeId: 1680,
        title: "Wusi Bei Tahoe Plaza Fuzhou",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/fuzhou-wusibei-thaihot-plaza-shopping-mall-clou-architects-0032-019-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/wusi-bei-tahoe-plaza-fuzhou/",
      },
      6753: {
        planeId: 6753,
        title: "CLOU Shanghai",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shanghai-architecture-office-studio-clou-architects-0409-006-1152x856.jpg",
        permalink: "https://www.clouarchitects.com/project/clou-shanghai/",
      },
      2570: {
        planeId: 2570,
        title: "Golden Bund Retail",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/hangzhou-vanke-golden-bund-retail-street-clou-architects-0331-001-1152x685.jpg",
        permalink: "https://www.clouarchitects.com/project/golden-bund-retail/",
      },
      2528: {
        planeId: 2528,
        title: "Golden Bund Kindergarten",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/hangzhou-vanke-golden-bund-kindergarten-clou-architects-0331-003-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/golden-bund-kindergarten/",
      },
      2527: {
        planeId: 2527,
        title: "Jianling Yuan Shijiazhuang",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/cec-shijiazhuang-mixed-use-clou-architects-0329-001-1152x815.jpg",
        permalink:
          "https://www.clouarchitects.com/project/jianling-yuan-shijiazhuang/",
      },
      2546: {
        planeId: 2546,
        title: "CIFI Gongchen Fangshan",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijin-cifi-gong-chen-shopping-mall-renovation-clou-architects-0380-002-e1648472502900-1152x538.jpg",
        permalink:
          "https://www.clouarchitects.com/project/cifi-gongchen-fangshan/",
      },
      2525: {
        planeId: 2525,
        title: "Qingdao Vanke Business Park",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/qingdao-vanke-guanggaoyuan-retail-street-office-clou-architects-0327-006-1152x769.jpg",
        permalink:
          "https://www.clouarchitects.com/project/cross-straits-culture-and-creative-industrial-park/",
      },
      2522: {
        planeId: 2522,
        title: "NOBO Education Visual Identity",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/nobo-visual-identity-school-clou-architects-0321-001-1-1152x840.jpg",
        permalink:
          "https://www.clouarchitects.com/project/nobo-education-visual-identity/",
      },
      2569: {
        planeId: 2569,
        title: "Huaqiaocheng Housing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/0207_Shoukai-Huaqiaocheng-5-1152x815.jpg",
        permalink: "https://www.clouarchitects.com/project/huaqiaocheng-housing/",
      },
      2519: {
        planeId: 2519,
        title: "NOBO International Kindergarten Daqing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/daqing-nobo-school-kindergarten-interior-clou-architects-0314-001-1152x810.jpg",
        permalink:
          "https://www.clouarchitects.com/project/nobo-international-kindergarten-daqing/",
      },
      6816: {
        planeId: 6816,
        title: "Plug-in Office",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/ningbo-zijinghui-clou-architects-0399-02-1152x647.jpg",
        permalink:
          "https://www.clouarchitects.com/project/%e6%8f%92%e4%bb%b6%e5%8a%9e%e5%85%ac%e5%ae%a4/",
      },
      2514: {
        planeId: 2514,
        title: "Jewellery Box Chaowai",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-kuntai-chaowai-jewellery-box-store-interior-clou-architects-0299-001-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/jewellery-box-chaowai/",
      },
      2513: {
        planeId: 2513,
        title: "JCC Hangzhou",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/Hanghzou-vanke-jcc-mixed-use-clou-architects-0287-001-1152x845.jpg",
        permalink: "https://www.clouarchitects.com/project/jcc-hangzhou/",
      },
      2502: {
        planeId: 2502,
        title: "Super City",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/5010006_NK01-kuku_version2-1-1152x648.jpg",
        permalink: "https://www.clouarchitects.com/project/super-city/",
      },
      2506: {
        planeId: 2506,
        title: "Pan Pacific Ningbo Hotel",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/pan-pacific-hotel-clou-architects-5009001-011-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/pan-pacific-ningbo/",
      },
      2504: {
        planeId: 2504,
        title: "One Mont Kiara",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/kuala-lumpur-one-mont-kiara-shopping-mall-clou-architects-002-1152x713.jpg",
        permalink: "https://www.clouarchitects.com/project/one-mont-kiara/",
      },
      2505: {
        planeId: 2505,
        title: "Raffles City Ningbo",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/Fernando-Guerra_Raffles-City-Ningbo-195-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/raffles-city-ningbo/",
      },
      2530: {
        planeId: 2530,
        title: "Vanke Feicui Education Centre",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-vanke-education-school-clou-architects-0336-004-1152x1012.jpg",
        permalink:
          "https://www.clouarchitects.com/project/vanke-feicui-education-centre/",
      },
      2581: {
        planeId: 2581,
        title: "Hongmeng Showroom",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chengdu-hongmeng-showrrom-clou-architects-0455-003-1152x648.jpg",
        permalink: "https://www.clouarchitects.com/project/hongmeng-showroom/",
      },
      10731: {
        planeId: 10731,
        title: "CapitaMALL  Wangjing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/clou-architects-capitamall-wangjing-xiazhi-15-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/capitamall-wangjing/",
      },
      2576: {
        planeId: 2576,
        title: "Shenyang Huanyu Plot J Mall",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenyang-huanyu-retail-mixed-use-clou-architects-0452-002-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/shenyang-huanyu-plot-j-mall/",
      },
      2567: {
        planeId: 2567,
        title: "Vanke Shanghai B4 TOD",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shanghai-vanke-tod-retail-clou-architects-0442-003-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/vanke-shanghai-b4-tod/",
      },
      2562: {
        planeId: 2562,
        title: "CapitaLand LJCC Mall Chongqing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chongqing-liangjiang-capitaland-shopping-mall-clou-architects-0436-005-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/capitaland-ljcc-mall-chongqing/",
      },
      2560: {
        planeId: 2560,
        title: "Vanke Shenzhen Nanyuan New Village",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenzhen-nanyuan-vanke-mixed-use-tower-clou-architects-0434-005-1152x815.jpg",
        permalink:
          "https://www.clouarchitects.com/project/vanke-shenzhen-nanyuan-new-village/",
      },
      2559: {
        planeId: 2559,
        title: "China Overseas Jinan Huashan West B-2",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/jinan-huashan-west-china-overseas-retail-street-clou-architects-0432-001-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/china-overseas-jinan-huashan-west-b-2/",
      },
      2558: {
        planeId: 2558,
        title: "Shenzhen Dayun Centre",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/dayun-kaisa-group-facade-retail-street-masterplan-clou-architects-0427-002-1152x815.jpg",
        permalink:
          "https://www.clouarchitects.com/project/shenzhen-dayun-centre/",
      },
      2557: {
        planeId: 2557,
        title: "Uruguay Football School Pingguo",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/pingguo-uruguay-football-school-masterplan-clou-architects-0425-001-1152x815.jpg",
        permalink:
          "https://www.clouarchitects.com/project/uruguay-football-school-pingguo/",
      },
      2556: {
        planeId: 2556,
        title: "Kaisa V Galleries",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenzhen-kaisa-skyscraper-high-rise-facade-clou-architects-0422-002-1152x694.jpg",
        permalink: "https://www.clouarchitects.com/project/kaisa-v-galleries/",
      },
      2553: {
        planeId: 2553,
        title: "Beijing Huijing Twin Towers Renovation",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/0406_GrandJoy_BJ_LG_01-1-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/beijing-huijing-twin-towers-renovation/",
      },
      2552: {
        planeId: 2552,
        title: "Beijing Shunyi R&F Gaoliying",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-RF-shopping-mall-ice-rink-interior-clou-architects-0405-001-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/beijing-shunyi-rf-gaoliying/",
      },
      2572: {
        planeId: 2572,
        title: "EXPO 2020 Chile Pavillion",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/2-1-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/expo-2020-chile-pavillion/",
      },
      2547: {
        planeId: 2547,
        title: "Qinhuangdao Wellness Resort",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/qinghuandao-masterplan-clou-architects-0381-004-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/qinhuangdao-wellness-resort/",
      },
      2540: {
        planeId: 2540,
        title: "Forte WoliCity Shanghai",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shanghai-energy-shopping-mall-retail-interior-clou-architects-0357-005-1152x960.jpg",
        permalink:
          "https://www.clouarchitects.com/project/forte-wolicity-shanghai/",
      },
      2533: {
        planeId: 2533,
        title: "The Slope",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/jingjiang-vanke-the-slope-retail-shopping-clou-architects-0351-002-1152x816.jpg",
        permalink: "https://www.clouarchitects.com/project/the-slope/",
      },
      2510: {
        planeId: 2510,
        title: "iFree Cinema Chongqing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chongqing-ifree-cinema-clou-architects-0205-009-1152x1076.jpg",
        permalink:
          "https://www.clouarchitects.com/project/ifree-cinema-chongqing/",
      },
      2516: {
        planeId: 2516,
        title: "Jianzi Box",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-jianzi-pavilion-baitasi-bjdw-clou-architects-0301-002-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/jianzi-box/",
      },
      2554: {
        planeId: 2554,
        title: "Sunac Wuhan Snow Park",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/wuhan-sunac-indoor-ski-slope-shopping-mall-masterplan-clou-architects-0415-001-1152x864.jpg",
        permalink:
          "https://www.clouarchitects.com/project/sunac-wuhan-snow-park/",
      },
      2548: {
        planeId: 2548,
        title: "Qingdao Vanke Coastal City",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/qingdao-costal-city-vanke-shopping-mall-architecture-clou-architects-0386-22-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/qingdao-vanke-coastal-city/",
      },
      2531: {
        planeId: 2531,
        title: "Qingdao Darron Eco Tech Park",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/qingdao-darron-software-park-masterplan-clou-architects-0339-001-1152x965.jpg",
        permalink:
          "https://www.clouarchitects.com/project/qingdao-darron-eco-tech-park/",
      },
      2541: {
        planeId: 2541,
        title: "Paradise Walk Jinchen Xindu",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/chengdu-paradise-walk-longfor-shopping-mall-facade-clou-architects-0360-006-1152x767.jpg",
        permalink:
          "https://www.clouarchitects.com/project/paradise-walk-jinchen-xindu/",
      },
      2544: {
        planeId: 2544,
        title: "Chunhuiyuan Spa Resort",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-chunhui-yuan-spa-resort-clou-architects-0367-001-1152x648.jpg",
        permalink:
          "https://www.clouarchitects.com/project/chunhuiyuan-spa-resort/",
      },
      2532: {
        planeId: 2532,
        title: "N.E.O. Plaza Shanghai",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shanghai-neo-plaza-xingchang-retail-clou-architects-0347-003-1152x648.jpg",
        permalink: "https://www.clouarchitects.com/project/n-e-o-plaza-shanghai/",
      },
      2518: {
        planeId: 2518,
        title: "Super Tent",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/super-tent-mixed-use-clou-architects-0309-001-1152x768.jpg",
        permalink: "https://www.clouarchitects.com/project/super-tent/",
      },
      2526: {
        planeId: 2526,
        title: "Paradise Walk Beijing Chang'An",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/beijing-mentouguo-longfor-paradise-walk-shopping-mall-retail-clou-architects-0328-012-1152x1022.jpg",
        permalink:
          "https://www.clouarchitects.com/project/paradise-walk-beijing-changan/",
      },
      2415: {
        planeId: 2415,
        title: "Poly Tianhui Centre Tianjin",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/tianjin-tianhui-center-shopping-mall-renovation-clou-architects-0194-022-1152x958.jpg",
        permalink:
          "https://www.clouarchitects.com/project/poly-tianhui-centre-tianjin/",
      },
      1093: {
        planeId: 1093,
        title: "Shenzhen Shuiwan 1979 Skyscraper",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shenzhen-shuiwan-1979-mixed-use-tower-clou-architects-0009-032-1152x768.jpg",
        permalink:
          "https://www.clouarchitects.com/project/shenzhen-shuiwan-1979-skyscraper/",
      },
      2549: {
        planeId: 2549,
        title: "Sanya Jinmao Farm Lab",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/sanya-pavilion-jinmao-co-life-clou-architects-0389-002-1152x767.jpg",
        permalink:
          "https://www.clouarchitects.com/project/sanya-jinmao-farm-lab/",
      },
      2512: {
        planeId: 2512,
        title: "Vantone Centre",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/hangzhou-vantone-mixed-use-tower-clou-architects-0212-015-1152x769.jpg",
        permalink: "https://www.clouarchitects.com/project/vantone-centre/",
      },
      2543: {
        planeId: 2543,
        title: "SkyMall Shaoxing",
        imgUrl:
          "https://www.clouarchitects.com/wp-content/uploads/2022/03/shaoxing-yuan-long-city-shopping-mall-park-clou-architects-0365-001-1152x731.jpg",
        permalink: "https://www.clouarchitects.com/project/skymall-shaoxing/",
      },
    },
    sector: {
      "Mixed Use &amp; Transport": [
        2529, 2542, 2551, 2555, 2011, 1768, 2503, 1562, 2527, 2525, 2569, 2513,
        2502, 2505, 2567, 2560, 2553, 2548, 2531, 2518, 1093, 2512,
      ],
      "Exhibition &amp; Showcase": [2350, 2520, 2581, 2572, 2516, 2549],
      "Hospitality &amp; Residential": [
        2011, 2524, 2508, 2503, 2527, 2569, 2502, 2506, 2505, 2560, 2556, 2547,
        2548, 2531, 1093, 2512,
      ],
      "Retail &amp; Leisure": [
        10875, 2521, 2529, 487, 2545, 2563, 2551, 2561, 2517, 2555, 2011, 2515,
        2350, 6660, 2520, 6928, 1768, 2503, 1562, 1680, 2570, 2527, 2546, 2525,
        2569, 2514, 2513, 2502, 2504, 2505, 2530, 2581, 10731, 2576, 2567, 2562,
        2560, 2559, 2558, 2553, 2552, 2540, 2533, 2510, 2516, 2554, 2548, 2531,
        2541, 2544, 2532, 2518, 2526, 2415, 1093, 2549, 2512, 2543,
      ],
      "Urban Renewal": [
        2545, 2555, 2515, 2520, 2519, 2514, 10731, 2553, 2547, 2540, 2544,
      ],
      Workplace: [
        2575, 2542, 2011, 2350, 1768, 2503, 1562, 6753, 2527, 2525, 6816, 2513,
        2505, 2560, 2553, 2531, 1093, 2549, 2512,
      ],
      Education: [2528, 2522, 2519, 2557, 2549],
    },
    status: {
      "In Progress": [2551, 2561, 2555, 2576, 2567, 2562, 2560, 2557, 2552, 2543],
      Completed: [
        10875, 2575, 2521, 2529, 487, 2542, 2545, 2517, 2011, 2515, 2350, 2520,
        1768, 2508, 2503, 1562, 1680, 6753, 2525, 2522, 2519, 6816, 2514, 2506,
        2504, 2505, 2530, 10731, 2540, 2510, 2516, 2548, 2541, 2532, 2526, 2415,
        1093, 2549, 2512,
      ],
      "On Site": [
        2563, 2524, 6660, 2570, 2528, 2546, 2581, 2559, 2553, 2554, 2531,
      ],
      Concept: [
        6928, 2527, 2569, 2513, 2502, 2558, 2556, 2572, 2547, 2533, 2544, 2518,
      ],
    },
    scope: {
      Architecture: [
        2521, 2542, 2563, 2551, 2561, 2517, 2555, 2011, 2524, 2350, 2520, 6928,
        1768, 2508, 2503, 1562, 2570, 2528, 2527, 2525, 2569, 2513, 2502, 2506,
        2505, 2530, 2576, 2567, 2560, 2559, 2557, 2556, 2572, 2547, 2533, 2516,
        2554, 2548, 2531, 2541, 2544, 2532, 2518, 1093, 2549, 2512, 2543,
      ],
      "Fa\u00e7ade": [
        2529, 487, 2011, 1562, 1680, 2514, 2504, 2581, 2562, 2558, 2556, 2553,
        1093,
      ],
      "Graphics &amp; Wayfinding": [2522, 2559, 2510],
      Interiors: [
        10875, 2575, 2521, 2529, 2545, 2563, 2551, 2011, 2524, 2515, 6660, 2520,
        1768, 2508, 2503, 1680, 6753, 2546, 2519, 6816, 2514, 2504, 2505, 2530,
        2581, 10731, 2576, 2567, 2562, 2560, 2553, 2552, 2540, 2510, 2554, 2544,
        2532, 2526, 2415, 1093, 2543,
      ],
      Landscape: [
        2551, 2517, 2011, 2350, 1768, 2508, 2503, 2505, 2530, 2558, 2557, 2552,
        2516, 2532, 1093, 2543,
      ],
      Masterplanning: [2524, 2557, 2547, 2531],
    },
    year: {
      2022: [10875, 2563, 2561, 6660, 2546, 2581, 10731, 2576, 2567, 2559, 2557],
      2021: [
        2575, 2529, 6928, 2528, 2525, 6816, 2530, 2562, 2553, 2548, 2541, 2543,
      ],
      2018: [2521, 2533],
      2020: [487, 2542, 2545, 2555, 6753, 2570, 2558, 2556, 2532, 2549],
      2023: [2551, 2552, 2554, 2531],
      2019: [2517, 2011, 2572, 2547, 2540, 2544, 2526, 2415, 2512],
      2017: [2524, 2520, 2522, 2519],
      2016: [2515, 1768, 2527, 2514, 2518, 1093],
      2015: [2350, 2513, 2510, 2516],
      2012: [2508, 2506, 2505],
      2009: [2503],
      2013: [1562, 1680],
      2014: [2569],
      2010: [2502, 2504],
      2024: [2560],
    },
    scale: {
      "<5000": [
        10875, 2575, 2563, 2515, 2350, 2520, 6753, 2522, 2519, 6816, 2581, 10731,
        2572, 2510, 2516, 2549,
      ],
      "<35000": [
        2521, 2561, 2517, 2555, 2524, 6660, 2508, 2570, 2528, 2546, 2525, 2514,
        2513, 2504, 2567, 2559, 2552, 2547, 2548, 2544, 2532, 2543,
      ],
      "<100000": [
        487, 2542, 2545, 2551, 6928, 2503, 1562, 2569, 2506, 2530, 2576, 2562,
        2558, 2556, 2533, 2541, 2518, 2526, 2415, 2512,
      ],
      ">100000": [
        2529, 2011, 1768, 1680, 2527, 2502, 2505, 2560, 2557, 2553, 2540, 2554,
        2531, 1093,
      ],
    },
  };

const jsonResult = {
    baseUrl : "http://localhost:5500",
    objects : [],
    categories : {
        order1 : [
            {
                name : "category1 order1",
                objectsId : []
            },
            {
                name : "category2 order1",
                objectsId : []
            },
            {
                name : "category3 order1",
                objectsId : []
            }
        ],
        order2 : [
            {
                name : "category1 order2",
                objectsId : []
            },
            {
                name : "category2 order2",
                objectsId : []
            },
            {
                name : "category3 order2",
                objectsId : []
            },
            {
                name : "category4 order2",
                objectsId : []
            }
        ]
    }
}

const allId = []
Object.values(projectsData.planesData).forEach(image => {
    allId.push(image.planeId)

    jsonResult.objects.push({
        id : image.planeId,
        title : image.title,
        src : `/public/images/${image.planeId}.jpg`,
        redirect : "test.com",
    })
})

allId.forEach(id => {
    jsonResult.categories.order1[Math.floor(Math.random() * jsonResult.categories.order1.length)].objectsId.push(id)
    jsonResult.categories.order2[Math.floor(Math.random() * jsonResult.categories.order2.length)].objectsId.push(id)
})

// stringify JSON Object
var jsonContent = JSON.stringify(jsonResult);
console.log(jsonContent);

fs.writeFile("output.json", jsonContent, 'utf8');