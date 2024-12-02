// Advent of Code 2024 (Day 1)
// Written by Todd Louison

type location = {
  id: Number;
};

function solve(list_a: number[], list_b: number[]) {
  let result = 0;

  let sorted_a: number[] = list_a.sort((a, b) => a - b);
  let sorted_b: number[] = list_b.sort((a, b) => a - b);

  sorted_a.forEach((value, idx) => {
    result += Math.abs(value - sorted_b[idx]);
  });

  return result;
}

let input_1: number[] = [
  82728, 39850, 24609, 24964, 16230, 29827, 52378, 15961, 48209, 90738, 50850,
  83479, 91264, 66553, 39685, 31946, 39808, 45133, 57938, 70650, 40085, 82147,
  48132, 36805, 95935, 43007, 64997, 16361, 77467, 88430, 40863, 85989, 64698,
  63392, 32665, 82943, 91491, 96858, 88128, 82315, 12263, 56902, 16051, 41613,
  48481, 39670, 31830, 93702, 27322, 77697, 12569, 35225, 59674, 18319, 88626,
  26170, 70247, 38965, 52976, 15339, 72244, 46476, 11615, 92556, 30522, 52667,
  61811, 15611, 31461, 36424, 92745, 10246, 86509, 45418, 45156, 95535, 16691,
  43778, 71564, 87002, 94024, 20893, 62456, 33024, 66867, 61522, 16128, 41863,
  88684, 59882, 70842, 62709, 16058, 67232, 62624, 47204, 81027, 76530, 25749,
  81620, 71662, 80092, 19088, 40308, 39855, 93549, 71622, 64422, 43828, 77801,
  13925, 51830, 12507, 50014, 56843, 57063, 37260, 94363, 58862, 57703, 33084,
  51041, 97254, 35644, 18669, 56890, 31788, 54517, 52172, 50286, 96866, 56782,
  25469, 33882, 56421, 91215, 83847, 62253, 94121, 98477, 37590, 25770, 59401,
  73382, 58149, 54118, 59395, 63746, 94883, 50314, 93858, 27751, 26917, 81996,
  71969, 30553, 77288, 79468, 30637, 57832, 29795, 71371, 27972, 43433, 45878,
  74042, 38197, 63067, 76552, 86156, 19492, 52089, 66789, 82613, 20542, 22143,
  73968, 40335, 92711, 19146, 53047, 49843, 96430, 98633, 50516, 23379, 35212,
  22440, 51478, 81249, 53260, 83243, 92917, 53224, 83043, 79555, 70751, 84246,
  46769, 59806, 20614, 81232, 59959, 37902, 29562, 52097, 24953, 17261, 54502,
  96242, 37556, 18272, 66670, 83198, 23519, 17886, 16359, 40648, 77114, 36008,
  79769, 47199, 46285, 23880, 57491, 98778, 21135, 96914, 78774, 63430, 87607,
  29550, 93138, 53884, 29227, 11378, 73168, 28560, 58428, 85756, 51545, 40374,
  96538, 70888, 96291, 87918, 76493, 88843, 92908, 39225, 70001, 76446, 85220,
  58580, 97422, 61228, 28019, 90150, 51935, 90430, 84890, 45758, 33282, 35203,
  81450, 99714, 62192, 48547, 81976, 58583, 14066, 62207, 86711, 36650, 57249,
  80718, 63471, 71861, 68757, 41204, 66794, 95829, 83965, 87160, 49557, 61775,
  43971, 95603, 68672, 99669, 24435, 73318, 54617, 71223, 55314, 93737, 47491,
  34979, 77019, 61998, 45142, 58057, 77811, 67567, 75736, 35995, 69522, 74746,
  76546, 61686, 81479, 86234, 17684, 54606, 91078, 87613, 68950, 92860, 97548,
  94120, 65885, 93925, 65057, 47652, 90143, 22958, 19110, 90991, 86342, 13474,
  39258, 32081, 59662, 77568, 26287, 73097, 65459, 15222, 94198, 31524, 62524,
  63731, 94492, 39340, 98341, 87046, 54817, 92197, 75996, 15843, 81860, 97487,
  55465, 98617, 41836, 96431, 68321, 44222, 12305, 26128, 49032, 32611, 16984,
  79976, 53906, 28125, 79829, 71094, 15262, 10894, 33135, 73835, 92084, 99655,
  26871, 21930, 11939, 50426, 84499, 76605, 70366, 23875, 29040, 65978, 65316,
  78274, 19602, 59993, 61413, 95133, 60391, 56884, 32017, 61814, 36780, 34229,
  96617, 16265, 68054, 41854, 87505, 82921, 29611, 64836, 12016, 25898, 39759,
  70322, 16957, 80739, 42783, 53327, 60939, 65608, 51615, 42372, 82865, 51705,
  60517, 32859, 65056, 66014, 95374, 62688, 19612, 14898, 35158, 46004, 12662,
  59241, 50371, 66714, 32091, 27889, 21486, 91705, 43597, 96488, 16085, 84801,
  17302, 35657, 89315, 56279, 14916, 55031, 99549, 69322, 15753, 13910, 10622,
  89542, 45934, 25961, 73079, 73577, 11146, 41762, 75839, 54839, 42362, 23054,
  41434, 68919, 51470, 82925, 52548, 77271, 77587, 58491, 90544, 97483, 92561,
  37349, 81533, 16921, 54482, 55983, 18017, 91613, 28936, 94041, 97989, 74053,
  12545, 82508, 16768, 68704, 79617, 41459, 88096, 59389, 24842, 13968, 46198,
  15283, 49913, 10405, 92804, 76765, 54682, 33524, 76148, 66461, 33406, 51127,
  23852, 72435, 26294, 42775, 75922, 47133, 36766, 30569, 27931, 54334, 40819,
  70620, 65626, 53032, 80476, 26777, 56970, 40175, 76426, 25173, 87181, 51275,
  16447, 81943, 10254, 75282, 60082, 64998, 49070, 56755, 69071, 75338, 75541,
  90443, 89908, 13663, 36653, 49672, 55603, 66603, 88089, 42518, 63672, 46069,
  35113, 25531, 55846, 68911, 97864, 67936, 64842, 95511, 53067, 33019, 48961,
  91310, 81303, 21127, 55847, 49862, 90703, 51583, 95384, 71879, 51111, 73704,
  67917, 90318, 38668, 58760, 46625, 31014, 60854, 37481, 49181, 94558, 88224,
  33578, 17470, 97321, 14158, 71896, 37567, 13543, 56076, 17520, 13731, 64073,
  79501, 15814, 22828, 82055, 45012, 65118, 27935, 72534, 67283, 94197, 11632,
  57374, 88992, 40356, 55831, 21812, 13044, 61280, 93877, 97018, 39895, 94335,
  43867, 91800, 39295, 37827, 43381, 12882, 99546, 69726, 92017, 92576, 82806,
  95240, 73226, 95399, 41658, 32251, 21150, 25532, 68624, 99988, 28545, 47911,
  10006, 70869, 76635, 74980, 29665, 22260, 83589, 12297, 94460, 14367, 48459,
  48094, 64554, 40966, 55992, 56286, 91359, 37712, 10002, 35390, 79851, 28003,
  11126, 77889, 21290, 12281, 58526, 96441, 32713, 11803, 15808, 87150, 61028,
  43603, 49827, 79374, 63980, 35321, 63092, 93950, 61348, 67412, 88625, 82756,
  61980, 33183, 82717, 10272, 90197, 66042, 87499, 22891, 19636, 14035, 44978,
  66453, 35532, 90326, 45538, 58391, 68240, 17327, 54811, 29411, 19772, 55843,
  34136, 35640, 31022, 51453, 59415, 47405, 24554, 16449, 84635, 71150, 91304,
  16316, 24372, 51800, 25967, 10335, 26500, 21511, 47266, 51507, 43522, 13302,
  28720, 27828, 17916, 27845, 60848, 15202, 21780, 45198, 15593, 84399, 84383,
  45107, 55693, 61697, 40967, 12361, 85195, 23903, 75889, 85462, 55277, 99467,
  80545, 97028, 49543, 79679, 37768, 49987, 52388, 49705, 97337, 65261, 32193,
  96980, 55973, 43554, 14385, 13284, 31417, 39843, 47537, 97596, 92481, 32979,
  20137, 32782, 97715, 36171, 52352, 65624, 43735, 32065, 37801, 57260, 58699,
  46293, 88201, 65421, 98471, 97663, 29825, 36280, 63395, 13431, 65598, 45294,
  36392, 48817, 42632, 75814, 79015, 63583, 21811, 15712, 82774, 25558, 40351,
  66201, 17467, 25618, 21325, 48070, 71739, 22764, 70342, 61768, 90132, 35753,
  87424, 44506, 58439, 91737, 84038, 34169, 57299, 16078, 94423, 12025, 49243,
  24206, 19466, 36271, 20805, 44320, 55138, 80603, 80337, 59921, 95013, 42358,
  60271, 91829, 72118, 42079, 29714, 75024, 97698, 53871, 32772, 23136, 65014,
  99723, 10739, 96656, 77088, 60997, 16566, 34855, 13575, 10925, 41426, 45792,
  77266, 54453, 26345, 45204, 22055, 66184, 89954, 76966, 16756, 35954, 41534,
  34625, 16484, 13180, 72476, 56865, 29214, 48021, 85762, 11530, 25191, 40256,
  42575, 78015, 79395, 51976, 91540, 15438, 83498, 70566, 78791, 40988, 84968,
  12950, 43049, 29441, 33283, 45021, 19403, 37671, 52800, 65255, 19007, 61032,
  41062, 58160, 16220, 10787, 55534, 32708, 26862, 32335, 46693, 24824, 21313,
  53841, 76356, 10703, 82980, 11274, 68390, 45798, 66426, 27073, 40291, 76494,
  44324, 15572, 67578, 59765, 29681, 24923, 63193, 68670, 21643, 17767, 70739,
  77675, 65919, 86115, 35921, 35695, 17571, 10776, 55618, 23004, 35209, 70656,
  28799, 62772, 88333, 89689, 96145, 44732, 41319, 17299, 48321, 60541, 98932,
  50849, 81857, 64010, 34841, 27063, 73447, 83334, 44937, 59004, 17881, 71379,
  92853, 32440, 88509, 29889, 83016, 34898, 43489, 26612, 58720, 63399, 46867,
  23466, 63419, 53408, 66651, 44058, 13953, 69061, 92526, 69474, 56975, 94591,
  20141, 84695, 14687, 34338, 26755, 11290, 30499, 52953, 78106, 44897,
];
let input_2: number[] = [
  61150, 94024, 43406, 98661, 17299, 43603, 90132, 90132, 97422, 75302, 18024,
  94024, 72109, 64129, 55155, 67583, 34091, 43008, 97422, 78635, 43526, 44804,
  11603, 26938, 52745, 59992, 70247, 24737, 35575, 84124, 81976, 33349, 77416,
  63630, 89542, 39849, 97422, 17299, 75447, 83417, 29681, 35541, 55031, 70247,
  82123, 89542, 94024, 46875, 97674, 38394, 43603, 13575, 47405, 89542, 68373,
  74493, 91908, 28783, 51470, 80450, 13084, 91257, 43109, 35200, 17599, 55031,
  24081, 55031, 62239, 16768, 44773, 50548, 28934, 78893, 63696, 55031, 96423,
  43603, 52518, 81976, 83359, 60991, 35753, 85311, 44981, 43603, 43603, 94024,
  33301, 95399, 13159, 16215, 48454, 35375, 16768, 53486, 66508, 49287, 46116,
  45156, 77019, 68967, 31955, 81976, 90825, 88660, 81450, 30851, 60702, 90810,
  91184, 83830, 26391, 45156, 97422, 17118, 38582, 18325, 23200, 82014, 64836,
  69435, 51941, 43603, 57530, 23054, 80735, 89542, 29681, 17299, 94024, 91820,
  18254, 20182, 31746, 40070, 64836, 94024, 60848, 21613, 85421, 14916, 59921,
  51470, 62768, 22482, 59921, 81450, 13575, 29681, 82015, 54143, 35753, 23054,
  93265, 20135, 83737, 95847, 31173, 95779, 13575, 94024, 69030, 55031, 97422,
  95825, 69071, 45758, 65255, 64724, 46293, 69521, 34079, 42340, 18205, 14916,
  89542, 45290, 51470, 94024, 13284, 25804, 95399, 90132, 43603, 25467, 73008,
  61796, 40724, 43603, 51470, 59921, 90132, 95399, 51275, 63244, 64836, 97100,
  16885, 13284, 60848, 23902, 16768, 14331, 55031, 81976, 58343, 55031, 99896,
  48343, 81450, 60848, 19012, 80333, 95399, 38271, 99341, 33892, 77385, 71553,
  60848, 13575, 88410, 81943, 98108, 27568, 25456, 81450, 13575, 45001, 65255,
  16633, 95399, 94498, 55031, 97422, 92972, 40280, 30760, 94197, 77019, 13431,
  64836, 85369, 70247, 64137, 52966, 60854, 65255, 81310, 56892, 24595, 81450,
  43167, 29681, 64836, 70247, 43603, 95924, 86513, 89326, 74544, 70247, 36593,
  12273, 31653, 43603, 64836, 13575, 13431, 12887, 42508, 13431, 44019, 40786,
  64836, 14916, 55031, 14916, 17299, 98207, 45758, 43978, 29681, 81901, 92631,
  24451, 70593, 97422, 13325, 61844, 89542, 69071, 17299, 97422, 46194, 93916,
  79658, 81976, 77019, 79564, 77878, 68285, 46867, 90132, 64599, 24241, 91359,
  13431, 60848, 56819, 46898, 14916, 36671, 14916, 81450, 29904, 29681, 26634,
  46867, 51516, 71162, 13284, 75587, 16768, 13575, 56571, 86313, 49453, 89542,
  60854, 78421, 60854, 24365, 64963, 56013, 97422, 20848, 46293, 54464, 13431,
  23054, 58590, 89542, 94382, 14916, 73805, 79829, 81752, 51151, 91508, 81450,
  45279, 72612, 15262, 59346, 24649, 14916, 26436, 43083, 45758, 59921, 83584,
  81450, 65866, 40953, 13431, 66024, 74605, 73112, 25114, 81176, 51692, 48595,
  78248, 46867, 95399, 27946, 46293, 21967, 70247, 11765, 23054, 70247, 81976,
  57844, 36987, 45758, 40822, 15262, 17299, 20462, 86368, 70068, 50859, 89542,
  14382, 64992, 57606, 27907, 25772, 13575, 51470, 77139, 94024, 90132, 40921,
  28732, 97215, 20405, 59243, 35753, 93730, 21723, 77019, 60225, 62922, 13575,
  44646, 49938, 65110, 59518, 69071, 45758, 34764, 91359, 84040, 51534, 84719,
  22568, 69943, 13864, 90159, 21234, 43277, 71361, 78281, 23720, 91359, 65255,
  77019, 34340, 10686, 81976, 91359, 17299, 45758, 42820, 54646, 81943, 60854,
  16187, 58213, 23054, 81694, 61502, 72825, 68244, 64836, 56505, 93709, 45156,
  22280, 81976, 35694, 95399, 82748, 49843, 13575, 73903, 70247, 43603, 80709,
  35639, 23054, 67801, 57089, 20574, 47405, 94024, 87183, 56294, 65255, 31819,
  55980, 23054, 46293, 47565, 47405, 81943, 43603, 13284, 81976, 67491, 81943,
  65255, 17088, 14916, 62365, 79391, 68981, 18156, 23054, 77019, 94024, 34897,
  13284, 81607, 77019, 13961, 97390, 87320, 95060, 95399, 19111, 29670, 18317,
  90199, 93032, 31988, 13284, 11497, 23054, 89542, 77019, 94024, 95399, 77019,
  63367, 50854, 78936, 45758, 23054, 79829, 13431, 52197, 73076, 17299, 29541,
  88931, 84016, 62808, 13284, 67563, 11156, 64971, 13284, 72738, 65255, 92788,
  47405, 68032, 41799, 99772, 43603, 13284, 97422, 77019, 70247, 65117, 89542,
  82114, 13284, 46293, 81943, 95399, 91620, 59242, 44667, 10528, 51072, 64836,
  43603, 65645, 46293, 48017, 81450, 94197, 97422, 81450, 89542, 82318, 74894,
  38935, 47295, 73090, 29681, 90132, 30968, 84125, 69071, 97422, 83298, 13431,
  48002, 81943, 54359, 70247, 81943, 34203, 71093, 90132, 90132, 96436, 43603,
  23054, 75593, 22369, 13431, 65255, 46867, 28505, 81976, 47932, 66100, 13575,
  43722, 13284, 59394, 91359, 46913, 10753, 14556, 83158, 45758, 85933, 99520,
  16049, 75691, 75289, 13284, 72477, 81976, 89542, 43603, 47405, 73762, 14241,
  45084, 97422, 17299, 16768, 32846, 13284, 16768, 43603, 30815, 74187, 78588,
  14916, 34585, 15981, 68759, 64836, 58182, 46867, 27220, 51119, 27599, 29681,
  81943, 56829, 65255, 42665, 23054, 43603, 24189, 69829, 15511, 87399, 69071,
  18973, 13284, 17299, 46293, 91359, 77019, 81943, 98676, 26112, 61556, 46867,
  51275, 15153, 54552, 69791, 85585, 81450, 55031, 59921, 87817, 89514, 72496,
  83959, 21026, 76422, 14916, 45699, 23054, 17309, 36357, 13575, 20557, 19650,
  23054, 80932, 13284, 17849, 73413, 60585, 59847, 77019, 13284, 79399, 45758,
  45156, 65255, 56078, 56557, 13575, 61450, 65255, 52620, 36666, 16768, 60048,
  13431, 60848, 65255, 63254, 90132, 26716, 50888, 50172, 56206, 81976, 97422,
  50570, 45156, 77864, 99041, 81976, 10836, 59921, 63849, 69833, 98966, 16768,
  92826, 13431, 58198, 81450, 14916, 43592, 81391, 31727, 89542, 15228, 23798,
  56609, 96548, 54178, 53532, 52896, 79377, 40105, 60848, 94197, 23651, 91359,
  44731, 77019, 14916, 73797, 77019, 70034, 94024, 81450, 70247, 91182, 22228,
  95695, 51470, 70247, 80000, 91359, 40467, 83692, 93834, 46293, 56325, 58994,
  13431, 70247, 14916, 12534, 29681, 14222, 65255, 77019, 94024, 87504, 82954,
  41337, 13431, 78048, 93477, 23054, 44215, 14916, 81976, 43603, 31672, 85115,
  95399, 59921, 69764, 43091, 85175, 32959, 67053, 55031, 45156, 76644, 35658,
  76815, 68123, 16768, 59921, 90492, 64836, 45758, 30227, 67830, 23975, 45118,
  62795, 14916, 81976, 64836, 47405, 69180, 17299, 60848, 94024, 69263, 13284,
  70247, 69071, 20261, 64836, 27431, 59892, 71849, 43778, 81943, 38747, 91359,
  13575, 89542, 88825, 69926, 70247, 45758, 13284, 78245, 75144, 13431, 55700,
  25112, 27791, 43603, 26272, 44266, 52239, 13137, 56515, 14094, 46867, 27805,
  35753, 89542, 36014, 60848, 78975, 29681, 13575, 28673, 46293, 46249, 15198,
  51470, 40408, 17880, 29681, 77019, 60496, 13897, 46293, 73346, 78906, 95399,
  99758, 16768, 49027, 64836, 70247, 17299, 17299, 46867, 23383, 75634, 80071,
  35488, 81943, 43632, 98849, 88022, 65255, 90132, 37716, 81077, 57328, 71247,
  90132, 62595, 19687, 81976, 81450, 60526, 28900, 81943, 55031, 98815, 17299,
  64144, 70247, 35753, 70247, 95399, 90132, 23054, 19388, 60854, 81976, 48543,
  13575, 16890, 35753, 12805, 16768, 79829, 70247, 81450, 81450, 32436, 47405,
  27716, 62305, 89156, 99387, 83357, 64896, 29681, 87174, 13575, 49843, 50689,
  47405, 91359, 13575, 42477, 14916, 19758, 89542, 13575, 93232, 16768, 29681,
  17299, 70636, 34371, 75494, 18000, 81450, 13284, 15134, 97422, 26225, 26288,
  33683, 17299, 79829, 64836, 89542, 21632, 83141, 16639, 31125, 79242,
];

let result = solve(input_1, input_2);
console.log(result);
