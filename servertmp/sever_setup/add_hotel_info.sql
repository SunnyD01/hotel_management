/*
Phone numbers for chain hq are denoted by 000 as numebers 4-6, last 4 digits correspond to chain id
Phone numbers for hotels are denoted by chain id as numebers 4-6, last 4 digits correspond to hotel id

*/

INSERT INTO hotel_chain
    (
        chain_id,
        email_address,
        number_of_hotels,
        address_co,
        phone_number
    )

VALUES
    ( 
        001,
        'chain1@hotels.com',
        9,
        '1 King Edward, Ottawa, ON, CA',
        '6130000001'
    ),

    ( 
        002,
        'chain2@hotels.com',
        10,
        '2 King Edward, Ottawa, ON, CA',
        '6130000002'
    ),

    ( 
        003,
        'chain3@hotels.com',
        10,
        '3 King Edward, Ottawa, ON, CA',
        '6130000003'
    ),

    ( 
        004,
        'chain4@hotels.com',
        11,
        '4 King Edward Ottawa, ON, CA',
        '6130000004'
    ),

    ( 
        005,
        'chain5@hotels.com',
        11,
        '5 King Edward, Ottawa, ON, CA',
        '6130000005'
    );

INSERT INTO hotel
    (
        hotel_id,
        employees,
        rating,
        phone_number,
        email_address,
        address,
        number_of_rooms,
        chain_id

    )
VALUES
--Hotels from chain 001
    (
        0001,
        3,
        3,
        '6130010001',
        'hotel1@chain1.com',
        '101 queen street, Ottawa, ON, CA',
        8,
        001
    ),

    (
        0002,
        3,
        3,
        '6130010002',
        'hotel2@chain1.com',
        '101 King street, Toronto, ON, CA',
        8,
        001
    ),

    (
        0003,
        3,
        4,
        '6130010003',
        'hotel3@chain1.com',
        '525 Bay St., Toronto, ON M5G 2L2',
        8,
        001
    ),

    (
        0004,
        3,
        4,
        '6130010004',
        'hotel4@chain1.com',
        '145 Richmond St W, Toronto, ON M5H 2L2',
        8,
        001
    ),

    (
        0005,
        3,
        5,
        '6130010005',
        'hotel5@chain1.com',
        '100 Front St W, Toronto, ON M5J 1E3',
        8,
        001
    ),
--Hotels from chain 002
    (
        0006,
        3,
        3,
        '6130020006',
        'hotel6@chain2.com',
        '249 Queens Quay W, Toronto, ON M5J 2N5',
        8,
        002
    ),

    (
        0007,
        3,
        3,
        '6130020007',
        'hotel7@chain2.com',
        '75 Bremner Blvd, Toronto, ON M5J 0A7',
        8,
        002
    ),

    (
        0008,
        3,
        4,
        '6130020008',
        'hotel8@chain2.com',
        '75 Lower Simcoe St, Toronto, ON M5J 3A6',
        8,
        002
    ),

    (
        0009,
        3,
        4,
        '6130020009',
        'hotel9@chain2.com',
        'One Blue Jays Way, Toronto, ON M5V 1J4',
        8,
        002
    ),

    (
        00010,
        3,
        5,
        '61300200010',
        'hotel10@chain2.com',
        '1 Harbour Square, Toronto, ON M5J 1A6',
        8,
        002
    ),
--Hotels from chain 3   
    (
        0011,
        3,
        3,
        '61300300011',
        'hotel11@chain3.com',
        '255 Wellington St W, Toronto, ON M5V 3P9',
        8,
        003
    ),

    (
        0012,
        3,
        3,
        '6130030012',
        'hotel12@chain3.com',
        '370 King St W, Toronto, ON M5V 1J9',
        8,
        003
    ),

    (
        0013,
        3,
        4,
        '6130030013',
        'hotel13@chain3.com',
        '348 Adelaide St W, Toronto, ON M5V 1R7',
        8,
        003
    ),
    
    (
        0014,
        3,
        4,
        '6130030014',
        'hotel14@chain3.com',
        '335 Queen St W, Toronto, ON M5V 2A1',
        8,
        003
    ),

    (
        0015,
        3,
        5,
        '6130030015',
        'hotel15@chain3.com',
        '1111 Queen St E unit d, Toronto, ON M5C 1S2',
        8,
        003
    ),
--Hotels from chain 4
    (
        0016,
        3,
        3,
        '6130040016',
        'hotel16@chain4.com',
        '45 The Esplanade, Toronto, ON M5E 1W2',
        8,
        004
    ),

    (
        0017,
        3,
        3,
        '6130040017',
        'hotel17@chain4.com',
        '111 Lombard St, Toronto, ON M5C 2T9',
        8,
        004
    ),

    (
        0018,
        3,
        3,
        '6130040018',
        'hotel18@chain4.com',
        '118 Shuter St, Toronto, ON M5A 1V8',
        8,
        004
    ),

    (
        0019,
        3,
        3,
        '6130040019',
        'hotel19@chain4.com',
        '200 Victoria St, Toronto, ON M5B 1V8',
        8,
        004
    ),

    (
        0020,
        3,
        3,
        '6130040020',
        'hotel20@chain4.com',
        '209 Yonge St, Toronto, ON M5B 1M4',
        8,
        004
    ),
--Hotels Chain 5
    (
        0021,
        3,
        3,
        '6130050021',
        'hotel21@chain5.com',
        '108 Chestnut St, Toronto, ON M5G 1R3',
        8,
        005
    ),

    (
        0022,
        3,
        3,
        '6130050022',
        'hotel22@chain5.com',
        '194 Queen St W, Toronto, ON M5V 1Z1',
        8,
        005
    ),

    (
        0023,
        3,
        3,
        '6130050023',
        'hotel23@chain5.com',
        '44 McGill St, Toronto, ON M5B 1H2',
        8,
        005
    ),

    (
        0024,
        3,
        3,
        '6130050024',
        'hotel24@chain5.com',
        '243 Seaton St, Toronto, ON M5A 2T5',
        8,
        005
    ),

    (
        0025,
        3,
        3,
        '6130050025',
        'hotel25@chain5.com',
        '335 Jarvis St, Toronto, ON M5B 2C2',
        8,
        005
    );

INSERT INTO employee
    (       
        ssn,
        employee_type,
        address,
        fname,
        lname,
        hotel_id
    )
VALUES
--Employees of Hotel 001
   (
      394813700,
      'Manager',
      '1 Sparks St, Ottawa, ON. CA',
      'Sherry',
      'Ortiz',
      001
   ),

   (
      340180047,
      'Cleaning',
      '2 Sparks St, Ottawa, ON. CA',
      'Janet',
      'Mata',
      001
   ),

   (
      125785224,
      'Conceierge',
      '3 Sparks St, Ottawa, ON. CA',
      'Jonathan',
      'Alvarado',
      001
   ),
--Employees of Hotel 002
   (
      686832648,
      'Manager',
      '4 Sparks St, Ottawa, ON. CA',
      'Ryan',
      'Perry',
      002
   ),

   (
      272228552,
      'Cleaning',
      '5 Sparks St, Ottawa, ON. CA',
      'Michael',
      'Small',
      002
   ),

   (
      244415812,
      'Conceierge',
      '6 Sparks St, Ottawa, ON. CA',
      'Jim',
      'Smith',
      002
   ),
--Employees of Hotel 003
   (
      393600149,
      'Manager',
      '7 Sparks St, Ottawa, ON. CA',
      'Darrell',
      'Robertson',
      003
   ),

   (
      631479342,
      'Cleaning',
      '8 Sparks St, Ottawa, ON. CA',
      'Terry',
      'Guerrero',
      003
   ),

   (
      626111850,
      'Conceierge',
      '9 Sparks St, Ottawa, ON. CA',
      'Mr.',
      'Bruce',
      003
   ),
--Employees of Hotel 004
   (
      263357321,
      'Manager',
      '10 Sparks St, Ottawa, ON. CA',
      'Jay',
      'House',
      004
   ),

   (
      539369035,
      'Cleaning',
      '11 Sparks St, Ottawa, ON. CA',
      'Jeffrey',
      'Baldwin',
      004
   ),

   (
      543566663,
      'Conceierge',
      '12 Sparks St, Ottawa, ON. CA',
      'Michael',
      'Brown',
      004
   ),
--Employees of Hotel 005
   (
      988778390,
      'Manager',
      '13 Sparks St, Ottawa, ON. CA',
      'Thomas',
      'Smith',
      005
   ),

   (
      125326288,
      'Cleaning',
      '14 Sparks St, Ottawa, ON. CA',
      'Bobby',
      'Robinson',
      005
   ),

   (
      615316593,
      'Conceierge',
      '15 Sparks St, Ottawa, ON. CA',
      'David',
      'Suarez',
      005
   ),
--Employees of Hotel 006
   (
      187442423,
      'Manager',
      '16 Sparks St, Ottawa, ON. CA',
      'Richard',
      'Morgan',
      006
   ),

   (
      140535694,
      'Cleaning',
      '17 Sparks St, Ottawa, ON. CA',
      'Victoria',
      'Jones',
      006
   ),

   (
      758666785,
      'Conceierge',
      '18 Sparks St, Ottawa, ON. CA',
      'Melissa',
      'Jordan',
      006
   ),
--Employees of Hotel 007
   (
      640907544,
      'Manager',
      '19 Sparks St, Ottawa, ON. CA',
      'Matthew',
      'Pham',
      007
   ),

   (
      813141960,
      'Cleaning',
      '20 Sparks St, Ottawa, ON. CA',
      'Jennifer',
      'Williams',
      007
   ),

   (
      617054394,
      'Conceierge',
      '21 Sparks St, Ottawa, ON. CA',
      'Steven',
      'Jones',
      007
   ),
--Employees of Hotel 008
   (
      917518151,
      'Manager',
      '22 Sparks St, Ottawa, ON. CA',
      'Jennifer',
      'Garcia',
      008
   ),

   (
      654434214,
      'Cleaning',
      '23 Sparks St, Ottawa, ON. CA',
      'Patricia',
      'Sloan',
      008
   ),

   (
      439688604,
      'Conceierge',
      '24 Sparks St, Ottawa, ON. CA',
      'William',
      'Scott',
      008
   ),
--Employees of Hotel 009
   (
      677284495,
      'Manager',
      '25 Sparks St, Ottawa, ON. CA',
      'Eddie',
      'Jones',
      009
   ),

   (
      116564780,
      'Cleaning',
      '26 Sparks St, Ottawa, ON. CA',
      'Natalie',
      'Wheeler',
      009
   ),

   (
      893462650,
      'Conceierge',
      '27 Sparks St, Ottawa, ON. CA',
      'Jacob',
      'Stevens',
      009
   ),
--Employees of Hotel 010
   (
      358643058,
      'Manager',
      '28 Sparks St, Ottawa, ON. CA',
      'Robyn',
      'Frazier',
      010
   ),

   (
      269186852,
      'Cleaning',
      '29 Sparks St, Ottawa, ON. CA',
      'Heather',
      'Davis',
      010
   ),

   (
      482410578,
      'Conceierge',
      '30 Sparks St, Ottawa, ON. CA',
      'Matthew',
      'Stewart',
      010
   ),
--Employees of Hotel 011
   (
      501994544,
      'Manager',
      '31 Sparks St, Ottawa, ON. CA',
      'Carol',
      'Malone',
      011
   ),

   (
      249099864,
      'Cleaning',
      '32 Sparks St, Ottawa, ON. CA',
      'Mitchell',
      'Smith',
      011
   ),

   (
      120842496,
      'Conceierge',
      '33 Sparks St, Ottawa, ON. CA',
      'Stephanie',
      'Oconnell',
      011
   ),
--Employees of Hotel 012
   (
      916710863,
      'Manager',
      '34 Sparks St, Ottawa, ON. CA',
      'Julia',
      'Anderson',
      012
   ),

   (
      363006891,
      'Cleaning',
      '35 Sparks St, Ottawa, ON. CA',
      'Laura',
      'Hendricks',
      012
   ),

   (
      482559985,
      'Conceierge',
      '36 Sparks St, Ottawa, ON. CA',
      'Daniel',
      'Duncan',
      012
   ),
--Employees of Hotel 013
   (
      116294606,
      'Manager',
      '37 Sparks St, Ottawa, ON. CA',
      'Michael',
      'Smith',
      013
   ),

   (
      432159747,
      'Cleaning',
      '38 Sparks St, Ottawa, ON. CA',
      'Mark',
      'Barton',
      013
   ),

   (
      977195176,
      'Conceierge',
      '39 Sparks St, Ottawa, ON. CA',
      'Stephen',
      'Bell',
      013
   ),
--Employees of Hotel 014
   (
      231130174,
      'Manager',
      '40 Sparks St, Ottawa, ON. CA',
      'Jacqueline',
      'Lloyd',
      014
   ),

   (
      161014177,
      'Cleaning',
      '41 Sparks St, Ottawa, ON. CA',
      'Cathy',
      'Smith',
      014
   ),

   (
      498426991,
      'Conceierge',
      '42 Sparks St, Ottawa, ON. CA',
      'John',
      'Hernandez',
      014
   ),
--Employees of Hotel 015
   (
      238943907,
      'Manager',
      '43 Sparks St, Ottawa, ON. CA',
      'Jody',
      'Carter',
      015
   ),

   (
      454914378,
      'Cleaning',
      '44 Sparks St, Ottawa, ON. CA',
      'Tracey',
      'Rogers',
      015
   ),

   (
      254511679,
      'Conceierge',
      '45 Sparks St, Ottawa, ON. CA',
      'Jose',
      'Palmer',
      015
   ),
--Employees of Hotel 016
   (
      273525035,
      'Manager',
      '46 Sparks St, Ottawa, ON. CA',
      'Lindsay',
      'Graham',
      016
   ),

   (
      884844547,
      'Cleaning',
      '47 Sparks St, Ottawa, ON. CA',
      'Dennis',
      'Avery',
      016
   ),

   (
      449756260,
      'Conceierge',
      '48 Sparks St, Ottawa, ON. CA',
      'Holly',
      'Kelley',
      016
   ),
--Employees of Hotel 017
   (
      927861711,
      'Manager',
      '49 Sparks St, Ottawa, ON. CA',
      'Carrie',
      'Martinez',
      017
   ),

   (
      293042891,
      'Cleaning',
      '50 Sparks St, Ottawa, ON. CA',
      'Patrick',
      'Williams',
      017
   ),

   (
      159331495,
      'Conceierge',
      '51 Sparks St, Ottawa, ON. CA',
      'Tammy',
      'Ritter',
      017
   ),
--Employees of Hotel 018
   (
      400951990,
      'Manager',
      '52 Sparks St, Ottawa, ON. CA',
      'Sandra',
      'Davis',
      018
   ),

   (
      699762455,
      'Cleaning',
      '53 Sparks St, Ottawa, ON. CA',
      'Travis',
      'Lin',
      018
   ),

   (
      776836546,
      'Conceierge',
      '54 Sparks St, Ottawa, ON. CA',
      'Kathleen',
      'Klein',
      018
   ),
--Employees of Hotel 019
   (
      225807630,
      'Manager',
      '55 Sparks St, Ottawa, ON. CA',
      'Wayne',
      'Robbins',
      019
   ),

   (
      682392292,
      'Cleaning',
      '56 Sparks St, Ottawa, ON. CA',
      'Linda',
      'Smith',
      019
   ),

   (
      717576702,
      'Conceierge',
      '57 Sparks St, Ottawa, ON. CA',
      'Joanna',
      'Williams',
      019
   ),
--Employees of Hotel 020
   (
      831834324,
      'Manager',
      '58 Sparks St, Ottawa, ON. CA',
      'Arthur',
      'Riddle',
      020
   ),

   (
      647244056,
      'Cleaning',
      '59 Sparks St, Ottawa, ON. CA',
      'Ashley',
      'Blake',
      020
   ),

   (
      317466822,
      'Conceierge',
      '60 Sparks St, Ottawa, ON. CA',
      'Melissa',
      'Weeks',
      020
   ),
--Employees of Hotel 021
   (
      532457895,
      'Manager',
      '61 Sparks St, Ottawa, ON. CA',
      'Kirk',
      'Jackson',
      021
   ),

   (
      244728720,
      'Cleaning',
      '62 Sparks St, Ottawa, ON. CA',
      'Brandon',
      'Trujillo',
      021
   ),

   (
      552005285,
      'Conceierge',
      '63 Sparks St, Ottawa, ON. CA',
      'James',
      'Richardson',
      021
   ),
--Employees of Hotel 022
   (
      373635850,
      'Manager',
      '64 Sparks St, Ottawa, ON. CA',
      'Rodney',
      'Jones',
      022
   ),

   (
      510561511,
      'Cleaning',
      '65 Sparks St, Ottawa, ON. CA',
      'Michelle',
      'Wright',
      022
   ),

   (
      146088364,
      'Conceierge',
      '66 Sparks St, Ottawa, ON. CA',
      'Ray',
      'Ferguson',
      022
   ),
--Employees of Hotel 023
   (
      120597731,
      'Manager',
      '67 Sparks St, Ottawa, ON. CA',
      'Christopher',
      'Summers',
      023
   ),

   (
      527519158,
      'Cleaning',
      '68 Sparks St, Ottawa, ON. CA',
      'Richard',
      'Sampson',
      023
   ),

   (
      606845840,
      'Conceierge',
      '69 Sparks St, Ottawa, ON. CA',
      'Helen',
      'Warren',
      023
   ),
--Employees of Hotel 024
   (
      645654910,
      'Manager',
      '70 Sparks St, Ottawa, ON. CA',
      'Michael',
      'Hawkins',
      024
   ),

   (
      879599243,
      'Cleaning',
      '71 Sparks St, Ottawa, ON. CA',
      'Jason',
      'Smith',
      024
   ),

   (
      135056601,
      'Conceierge',
      '72 Sparks St, Ottawa, ON. CA',
      'Kayla',
      'Rasmussen',
      024
   ),
--Employees of Hotel 025
   (
      512214069,
      'Manager',
      '73 Sparks St, Ottawa, ON. CA',
      'Paul',
      'Thompson',
      025
   ),

   (
      708593598,
      'Cleaning',
      '74 Sparks St, Ottawa, ON. CA',
      'Denise',
      'Carr',
      025
   ),

   (
      461155530,
      'Conceierge',
      '75 Sparks St, Ottawa, ON. CA',
      'Stephen',
      'Lee',
      025
   );


INSERT INTO room
    (
        room_id,
        type_of_view,
        capacity,
        amenities,
        price,
        ext,
        hotel_id
    )
VALUES
--Rooms from Hotel 0001
   (
      00001,
      'city',
      3,
      'Mini-bar,Wifi',
      318,
      TRUE,
      0001
   ),

   (
      00002,
      'city',
      3,
      'Mini-fridge,Central AC',
      521,
      FALSE,
      0001
   ),

   (
      00003,
      'water',
      2,
      'Central AC',
      382,
      TRUE,
      0001
   ),

   (
      00004,
      'city',
      3,
      'Mini-fridge,Wifi,Coffee-bar,Mini-bar',
      668,
      FALSE,
      0001
   ),

   (
      00005,
      'water',
      3,
      'Mini-bar,Television,Wifi,Coffee-bar,Mini-fridge',
      684,
      FALSE,
      0001
   ),

   (
      00006,
      'city',
      4,
      'Coffee-bar,Mini-bar',
      359,
      TRUE,
      0001
   ),

   (
      00007,
      'city',
      2,
      'Mini-fridge,Mini-bar,Wifi,Television,Central AC',
      421,
      TRUE,
      0001
   ),

   (
      00008,
      'city',
      4,
      'Central AC',
      482,
      TRUE,
      0001
   ),

--Rooms from Hotel 0002
   (
      00009,
      'mountain',
      4,
      'Television,Mini-bar,Wifi,Coffee-bar,Mini-fridge',
      375,
      FALSE,
      0002
   ),

   (
      00010,
      'mountain',
      3,
      'Wifi,Mini-fridge,Central AC',
      548,
      FALSE,
      0002
   ),

   (
      00011,
      'mountain',
      2,
      'Coffee-bar,Television',
      351,
      FALSE,
      0002
   ),

   (
      00012,
      'mountain',
      3,
      'Central AC,Coffee-bar,Television',
      264,
      TRUE,
      0002
   ),

   (
      00013,
      'water',
      2,
      'Mini-bar,Mini-fridge,Wifi',
      456,
      TRUE,
      0002
   ),

   (
      00014,
      'water',
      4,
      'Central AC,Mini-fridge,Wifi',
      258,
      FALSE,
      0002
   ),

   (
      00015,
      'city',
      3,
      'Coffee-bar,Mini-bar,Television,Central AC,Wifi',
      482,
      FALSE,
      0002
   ),

   (
      00016,
      'water',
      4,
      'Coffee-bar,Wifi',
      260,
      FALSE,
      0002
   ),

--Rooms from Hotel 0003
   (
      00017,
      'city',
      3,
      'Coffee-bar,Wifi,Mini-fridge,Central AC',
      610,
      FALSE,
      0003
   ),

   (
      00018,
      'mountain',
      2,
      'Wifi,Mini-fridge',
      230,
      FALSE,
      0003
   ),

   (
      00019,
      'city',
      4,
      '',
      363,
      TRUE,
      0003
   ),

   (
      00020,
      'mountain',
      3,
      'Wifi,Coffee-bar,Mini-bar,Television',
      528,
      FALSE,
      0003
   ),

   (
      00021,
      'city',
      2,
      'Wifi,Television,Mini-bar,Central AC',
      421,
      FALSE,
      0003
   ),

   (
      00022,
      'mountain',
      3,
      'Mini-fridge,Television,Wifi,Central AC',
      396,
      TRUE,
      0003
   ),

   (
      00023,
      'mountain',
      2,
      'Coffee-bar,Wifi',
      624,
      FALSE,
      0003
   ),

   (
      00024,
      'mountain',
      2,
      'Wifi,Mini-bar,Mini-fridge,Central AC,Television',
      296,
      FALSE,
      0003
   ),

--Rooms from Hotel 0004
   (
      00025,
      'mountain',
      3,
      'Mini-fridge,Mini-bar,Wifi,Television,Central AC',
      636,
      TRUE,
      0004
   ),

   (
      00026,
      'city',
      3,
      '',
      292,
      TRUE,
      0004
   ),

   (
      00027,
      'city',
      3,
      'Central AC,Television,Coffee-bar',
      364,
      TRUE,
      0004
   ),

   (
      00028,
      'city',
      4,
      'Central AC,Television,Coffee-bar,Mini-fridge',
      378,
      TRUE,
      0004
   ),

   (
      00029,
      'water',
      4,
      'Coffee-bar,Central AC,Mini-fridge',
      662,
      TRUE,
      0004
   ),

   (
      00030,
      'city',
      2,
      'Central AC,Television,Coffee-bar,Wifi,Mini-bar',
      332,
      FALSE,
      0004
   ),

   (
      00031,
      'mountain',
      2,
      'Mini-fridge',
      349,
      FALSE,
      0004
   ),

   (
      00032,
      'mountain',
      3,
      'Mini-fridge,Central AC,Mini-bar',
      329,
      TRUE,
      0004
   ),

--Rooms from Hotel 0005
   (
      00033,
      'city',
      3,
      'Television,Central AC',
      235,
      FALSE,
      0005
   ),

   (
      00034,
      'city',
      2,
      '',
      641,
      FALSE,
      0005
   ),

   (
      00035,
      'mountain',
      2,
      'Television,Coffee-bar,Central AC',
      698,
      TRUE,
      0005
   ),

   (
      00036,
      'water',
      4,
      'Central AC,Mini-fridge,Television',
      288,
      TRUE,
      0005
   ),

   (
      00037,
      'water',
      4,
      'Central AC,Wifi,Mini-fridge,Coffee-bar,Mini-bar',
      247,
      TRUE,
      0005
   ),

   (
      00038,
      'mountain',
      2,
      'Wifi',
      530,
      TRUE,
      0005
   ),

   (
      00039,
      'mountain',
      4,
      'Mini-bar,Television,Coffee-bar,Mini-fridge',
      605,
      FALSE,
      0005
   ),

   (
      00040,
      'mountain',
      4,
      'Mini-bar,Central AC,Television,Wifi',
      546,
      FALSE,
      0005
   ),

--Rooms from Hotel 0006
   (
      00041,
      'mountain',
      4,
      '',
      674,
      FALSE,
      0006
   ),

   (
      00042,
      'water',
      4,
      'Coffee-bar',
      595,
      TRUE,
      0006
   ),

   (
      00043,
      'water',
      3,
      'Television',
      424,
      TRUE,
      0006
   ),

   (
      00044,
      'mountain',
      3,
      'Mini-fridge,Coffee-bar,Mini-bar',
      417,
      FALSE,
      0006
   ),

   (
      00045,
      'mountain',
      2,
      'Wifi,Mini-fridge',
      233,
      TRUE,
      0006
   ),

   (
      00046,
      'city',
      2,
      'Central AC,Mini-fridge,Wifi,Television',
      308,
      TRUE,
      0006
   ),

   (
      00047,
      'city',
      2,
      '',
      333,
      FALSE,
      0006
   ),

   (
      00048,
      'city',
      3,
      '',
      582,
      TRUE,
      0006
   ),

--Rooms from Hotel 0007
   (
      00049,
      'mountain',
      4,
      'Mini-fridge,Mini-bar,Coffee-bar',
      249,
      TRUE,
      0007
   ),

   (
      00050,
      'mountain',
      3,
      'Coffee-bar,Television',
      385,
      TRUE,
      0007
   ),

   (
      00051,
      'mountain',
      2,
      'Wifi,Central AC',
      447,
      FALSE,
      0007
   ),

   (
      00052,
      'city',
      2,
      'Central AC,Wifi',
      528,
      FALSE,
      0007
   ),

   (
      00053,
      'city',
      2,
      '',
      402,
      TRUE,
      0007
   ),

   (
      00054,
      'water',
      4,
      '',
      562,
      TRUE,
      0007
   ),

   (
      00055,
      'mountain',
      3,
      'Mini-fridge,Wifi,Mini-bar',
      560,
      TRUE,
      0007
   ),

   (
      00056,
      'mountain',
      4,
      'Television,Central AC,Wifi,Mini-bar,Coffee-bar',
      609,
      FALSE,
      0007
   ),

--Rooms from Hotel 0008
   (
      00057,
      'mountain',
      4,
      '',
      458,
      TRUE,
      0008
   ),

   (
      00058,
      'water',
      4,
      '',
      220,
      TRUE,
      0008
   ),

   (
      00059,
      'city',
      3,
      'Mini-bar,Television',
      495,
      TRUE,
      0008
   ),

   (
      00060,
      'water',
      2,
      'Mini-bar,Central AC',
      503,
      TRUE,
      0008
   ),

   (
      00061,
      'mountain',
      3,
      'Central AC',
      493,
      FALSE,
      0008
   ),

   (
      00062,
      'mountain',
      2,
      'Mini-fridge,Wifi,Mini-bar',
      264,
      FALSE,
      0008
   ),

   (
      00063,
      'water',
      3,
      'Central AC',
      430,
      TRUE,
      0008
   ),

   (
      00064,
      'mountain',
      4,
      'Coffee-bar,Central AC',
      387,
      TRUE,
      0008
   ),

--Rooms from Hotel 0009
   (
      00065,
      'city',
      4,
      'Coffee-bar,Mini-bar,Television,Central AC,Wifi',
      600,
      FALSE,
      0009
   ),

   (
      00066,
      'mountain',
      3,
      'Central AC,Television',
      467,
      FALSE,
      0009
   ),

   (
      00067,
      'city',
      3,
      'Wifi,Central AC',
      473,
      FALSE,
      0009
   ),

   (
      00068,
      'mountain',
      2,
      'Television',
      214,
      FALSE,
      0009
   ),

   (
      00069,
      'city',
      3,
      'Central AC,Coffee-bar,Mini-fridge,Wifi',
      399,
      FALSE,
      0009
   ),

   (
      00070,
      'mountain',
      4,
      'Wifi',
      393,
      TRUE,
      0009
   ),

   (
      00071,
      'mountain',
      4,
      'Mini-bar,Mini-fridge',
      545,
      TRUE,
      0009
   ),

   (
      00072,
      'city',
      2,
      'Mini-fridge,Wifi,Coffee-bar,Mini-bar',
      394,
      TRUE,
      0009
   ),

--Rooms from Hotel 0010
   (
      00073,
      'mountain',
      4,
      'Wifi',
      452,
      TRUE,
      0010
   ),

   (
      00074,
      'city',
      3,
      'Mini-bar',
      501,
      FALSE,
      0010
   ),

   (
      00075,
      'mountain',
      4,
      'Central AC,Wifi',
      445,
      TRUE,
      0010
   ),

   (
      00076,
      'water',
      4,
      '',
      270,
      FALSE,
      0010
   ),

   (
      00077,
      'city',
      3,
      'Mini-fridge',
      524,
      TRUE,
      0010
   ),

   (
      00078,
      'water',
      3,
      '',
      233,
      FALSE,
      0010
   ),

   (
      00079,
      'city',
      4,
      'Central AC,Mini-fridge',
      503,
      TRUE,
      0010
   ),

   (
      00080,
      'city',
      3,
      'Mini-bar,Mini-fridge,Coffee-bar,Television',
      615,
      TRUE,
      0010
   ),

--Rooms from Hotel 0011
   (
      00081,
      'city',
      4,
      'Mini-fridge,Wifi,Central AC,Television,Coffee-bar',
      495,
      FALSE,
      0011
   ),

   (
      00082,
      'city',
      3,
      '',
      561,
      TRUE,
      0011
   ),

   (
      00083,
      'water',
      3,
      '',
      270,
      TRUE,
      0011
   ),

   (
      00084,
      'water',
      2,
      'Television,Central AC,Coffee-bar,Mini-bar',
      475,
      TRUE,
      0011
   ),

   (
      00085,
      'water',
      4,
      'Wifi,Television,Mini-fridge,Central AC,Mini-bar',
      671,
      TRUE,
      0011
   ),

   (
      00086,
      'mountain',
      2,
      'Coffee-bar,Mini-bar,Television,Wifi,Central AC',
      237,
      FALSE,
      0011
   ),

   (
      00087,
      'mountain',
      4,
      'Wifi,Central AC,Coffee-bar,Mini-bar',
      535,
      FALSE,
      0011
   ),

   (
      00088,
      'water',
      4,
      'Television,Mini-fridge',
      449,
      TRUE,
      0011
   ),

--Rooms from Hotel 0012
   (
      00089,
      'mountain',
      3,
      'Mini-fridge,Central AC',
      418,
      FALSE,
      0012
   ),

   (
      00090,
      'city',
      4,
      'Mini-fridge',
      600,
      TRUE,
      0012
   ),

   (
      00091,
      'mountain',
      4,
      'Wifi',
      391,
      TRUE,
      0012
   ),

   (
      00092,
      'water',
      4,
      'Central AC,Mini-bar,Television',
      625,
      TRUE,
      0012
   ),

   (
      00093,
      'water',
      3,
      '',
      397,
      TRUE,
      0012
   ),

   (
      00094,
      'water',
      4,
      '',
      454,
      FALSE,
      0012
   ),

   (
      00095,
      'mountain',
      3,
      'Mini-bar,Mini-fridge,Television',
      481,
      TRUE,
      0012
   ),

   (
      00096,
      'water',
      4,
      'Central AC,Mini-fridge',
      609,
      TRUE,
      0012
   ),

--Rooms from Hotel 0013
   (
      00097,
      'mountain',
      2,
      '',
      502,
      TRUE,
      0013
   ),

   (
      00098,
      'city',
      3,
      'Mini-bar,Wifi',
      685,
      TRUE,
      0013
   ),

   (
      00099,
      'water',
      2,
      '',
      284,
      TRUE,
      0013
   ),

   (
      00100,
      'water',
      4,
      'Wifi,Mini-fridge',
      557,
      FALSE,
      0013
   ),

   (
      00101,
      'city',
      4,
      'Central AC,Mini-fridge,Coffee-bar,Wifi,Mini-bar',
      618,
      TRUE,
      0013
   ),

   (
      00102,
      'mountain',
      3,
      'Mini-fridge,Coffee-bar',
      267,
      TRUE,
      0013
   ),

   (
      00103,
      'city',
      4,
      'Television,Central AC,Mini-bar',
      499,
      FALSE,
      0013
   ),

   (
      00104,
      'mountain',
      4,
      'Mini-fridge,Wifi',
      357,
      TRUE,
      0013
   ),

--Rooms from Hotel 0014
   (
      00105,
      'mountain',
      4,
      'Central AC,Mini-fridge,Mini-bar',
      390,
      TRUE,
      0014
   ),

   (
      00106,
      'city',
      2,
      '',
      681,
      FALSE,
      0014
   ),

   (
      00107,
      'mountain',
      3,
      'Television,Wifi,Central AC',
      471,
      FALSE,
      0014
   ),

   (
      00108,
      'mountain',
      2,
      'Mini-fridge,Central AC,Wifi',
      691,
      FALSE,
      0014
   ),

   (
      00109,
      'mountain',
      4,
      'Coffee-bar,Mini-bar',
      642,
      FALSE,
      0014
   ),

   (
      00110,
      'mountain',
      3,
      'Television',
      284,
      FALSE,
      0014
   ),

   (
      00111,
      'mountain',
      2,
      'Coffee-bar,Central AC',
      359,
      TRUE,
      0014
   ),

   (
      00112,
      'mountain',
      4,
      'Coffee-bar,Wifi',
      611,
      TRUE,
      0014
   ),

--Rooms from Hotel 0015
   (
      00113,
      'city',
      4,
      '',
      235,
      FALSE,
      0015
   ),

   (
      00114,
      'city',
      4,
      '',
      364,
      FALSE,
      0015
   ),

   (
      00115,
      'mountain',
      3,
      'Mini-bar,Coffee-bar,Mini-fridge,Wifi',
      370,
      TRUE,
      0015
   ),

   (
      00116,
      'city',
      4,
      'Television,Wifi,Mini-fridge',
      699,
      FALSE,
      0015
   ),

   (
      00117,
      'mountain',
      4,
      'Coffee-bar,Television,Wifi,Central AC,Mini-fridge',
      240,
      TRUE,
      0015
   ),

   (
      00118,
      'mountain',
      4,
      'Coffee-bar,Wifi,Mini-bar,Television',
      586,
      FALSE,
      0015
   ),

   (
      00119,
      'water',
      4,
      'Coffee-bar,Central AC,Television,Wifi,Mini-bar',
      348,
      FALSE,
      0015
   ),

   (
      00120,
      'city',
      3,
      'Mini-bar,Central AC,Wifi',
      535,
      TRUE,
      0015
   ),

--Rooms from Hotel 0016
   (
      00121,
      'water',
      3,
      'Mini-bar,Wifi,Central AC',
      210,
      TRUE,
      0016
   ),

   (
      00122,
      'mountain',
      4,
      'Central AC',
      442,
      FALSE,
      0016
   ),

   (
      00123,
      'water',
      3,
      'Mini-fridge,Central AC,Mini-bar,Coffee-bar',
      548,
      TRUE,
      0016
   ),

   (
      00124,
      'mountain',
      3,
      'Mini-bar,Wifi,Television',
      341,
      FALSE,
      0016
   ),

   (
      00125,
      'water',
      2,
      'Wifi,Mini-bar',
      676,
      TRUE,
      0016
   ),

   (
      00126,
      'mountain',
      3,
      'Mini-bar,Central AC',
      200,
      FALSE,
      0016
   ),

   (
      00127,
      'city',
      4,
      'Television',
      338,
      FALSE,
      0016
   ),

   (
      00128,
      'mountain',
      4,
      'Mini-fridge,Mini-bar',
      465,
      TRUE,
      0016
   ),

--Rooms from Hotel 0017
   (
      00129,
      'city',
      3,
      'Mini-bar,Mini-fridge,Wifi,Television,Central AC',
      524,
      TRUE,
      0017
   ),

   (
      00130,
      'city',
      2,
      'Central AC,Mini-fridge,Television,Mini-bar',
      630,
      FALSE,
      0017
   ),

   (
      00131,
      'mountain',
      4,
      'Mini-bar,Central AC',
      511,
      FALSE,
      0017
   ),

   (
      00132,
      'water',
      3,
      'Coffee-bar',
      641,
      TRUE,
      0017
   ),

   (
      00133,
      'water',
      4,
      'Central AC,Mini-bar,Television',
      365,
      FALSE,
      0017
   ),

   (
      00134,
      'mountain',
      4,
      'Central AC,Coffee-bar,Wifi',
      217,
      FALSE,
      0017
   ),

   (
      00135,
      'water',
      4,
      'Mini-bar,Wifi,Television,Central AC',
      645,
      FALSE,
      0017
   ),

   (
      00136,
      'city',
      4,
      'Coffee-bar,Central AC',
      458,
      TRUE,
      0017
   ),

--Rooms from Hotel 0018
   (
      00137,
      'mountain',
      4,
      'Central AC,Wifi,Coffee-bar',
      313,
      TRUE,
      0018
   ),

   (
      00138,
      'water',
      2,
      'Television',
      438,
      TRUE,
      0018
   ),

   (
      00139,
      'city',
      2,
      '',
      452,
      FALSE,
      0018
   ),

   (
      00140,
      'city',
      2,
      'Central AC,Mini-bar,Television,Mini-fridge',
      498,
      FALSE,
      0018
   ),

   (
      00141,
      'mountain',
      4,
      'Mini-fridge,Coffee-bar,Central AC,Wifi',
      376,
      TRUE,
      0018
   ),

   (
      00142,
      'city',
      2,
      'Mini-fridge,Wifi,Central AC,Television',
      619,
      TRUE,
      0018
   ),

   (
      00143,
      'mountain',
      3,
      '',
      527,
      FALSE,
      0018
   ),

   (
      00144,
      'mountain',
      3,
      '',
      307,
      FALSE,
      0018
   ),

--Rooms from Hotel 0019
   (
      00145,
      'mountain',
      4,
      'Central AC,Mini-bar,Television,Wifi,Mini-fridge',
      538,
      FALSE,
      0019
   ),

   (
      00146,
      'mountain',
      3,
      'Wifi,Central AC,Mini-fridge',
      222,
      FALSE,
      0019
   ),

   (
      00147,
      'mountain',
      3,
      'Television,Wifi,Mini-fridge,Mini-bar',
      244,
      FALSE,
      0019
   ),

   (
      00148,
      'city',
      3,
      'Central AC,Mini-bar',
      444,
      FALSE,
      0019
   ),

   (
      00149,
      'city',
      2,
      'Mini-bar,Mini-fridge,Coffee-bar',
      353,
      FALSE,
      0019
   ),

   (
      00150,
      'water',
      4,
      '',
      393,
      TRUE,
      0019
   ),

   (
      00151,
      'mountain',
      4,
      'Central AC,Wifi,Mini-fridge',
      252,
      TRUE,
      0019
   ),

   (
      00152,
      'city',
      2,
      'Wifi,Mini-bar,Mini-fridge,Television,Coffee-bar',
      316,
      TRUE,
      0019
   ),

--Rooms from Hotel 0020
   (
      00153,
      'water',
      2,
      'Wifi,Television,Central AC,Coffee-bar',
      586,
      FALSE,
      0020
   ),

   (
      00154,
      'water',
      4,
      'Mini-bar,Central AC,Coffee-bar',
      688,
      TRUE,
      0020
   ),

   (
      00155,
      'water',
      3,
      'Central AC,Wifi,Mini-fridge',
      611,
      TRUE,
      0020
   ),

   (
      00156,
      'city',
      3,
      'Coffee-bar,Television,Central AC,Wifi,Mini-bar',
      662,
      FALSE,
      0020
   ),

   (
      00157,
      'mountain',
      4,
      '',
      313,
      TRUE,
      0020
   ),

   (
      00158,
      'mountain',
      3,
      'Central AC,Mini-bar,Mini-fridge,Television',
      222,
      TRUE,
      0020
   ),

   (
      00159,
      'city',
      2,
      'Television',
      543,
      TRUE,
      0020
   ),

   (
      00160,
      'city',
      3,
      'Central AC,Coffee-bar,Television',
      551,
      FALSE,
      0020
   ),

--Rooms from Hotel 0021
   (
      00161,
      'city',
      4,
      'Television,Central AC,Mini-bar,Wifi',
      628,
      FALSE,
      0021
   ),

   (
      00162,
      'water',
      3,
      'Central AC,Mini-fridge,Mini-bar,Television,Coffee-bar',
      653,
      TRUE,
      0021
   ),

   (
      00163,
      'mountain',
      2,
      'Coffee-bar,Television',
      618,
      FALSE,
      0021
   ),

   (
      00164,
      'mountain',
      4,
      '',
      510,
      TRUE,
      0021
   ),

   (
      00165,
      'water',
      3,
      'Mini-fridge,Television',
      655,
      FALSE,
      0021
   ),

   (
      00166,
      'water',
      2,
      'Mini-fridge',
      700,
      TRUE,
      0021
   ),

   (
      00167,
      'water',
      2,
      '',
      512,
      FALSE,
      0021
   ),

   (
      00168,
      'city',
      3,
      'Coffee-bar,Television,Central AC,Mini-fridge',
      407,
      FALSE,
      0021
   ),

--Rooms from Hotel 0022
   (
      00169,
      'mountain',
      4,
      'Mini-bar,Central AC,Mini-fridge,Wifi,Television',
      631,
      TRUE,
      0022
   ),

   (
      00170,
      'water',
      3,
      'Mini-bar,Television,Mini-fridge',
      223,
      FALSE,
      0022
   ),

   (
      00171,
      'city',
      2,
      'Mini-bar,Television,Mini-fridge,Central AC',
      661,
      TRUE,
      0022
   ),

   (
      00172,
      'mountain',
      2,
      'Mini-fridge,Television,Mini-bar,Coffee-bar',
      688,
      TRUE,
      0022
   ),

   (
      00173,
      'water',
      2,
      'Central AC,Wifi',
      298,
      FALSE,
      0022
   ),

   (
      00174,
      'city',
      3,
      'Mini-fridge,Mini-bar,Central AC,Wifi',
      498,
      FALSE,
      0022
   ),

   (
      00175,
      'mountain',
      4,
      'Wifi,Television',
      414,
      FALSE,
      0022
   ),

   (
      00176,
      'mountain',
      4,
      'Wifi,Central AC',
      435,
      FALSE,
      0022
   ),

--Rooms from Hotel 0023
   (
      00177,
      'city',
      3,
      '',
      530,
      TRUE,
      0023
   ),

   (
      00178,
      'city',
      4,
      'Central AC,Television',
      597,
      FALSE,
      0023
   ),

   (
      00179,
      'mountain',
      4,
      'Mini-bar,Central AC',
      632,
      TRUE,
      0023
   ),

   (
      00180,
      'mountain',
      2,
      'Mini-bar',
      602,
      FALSE,
      0023
   ),

   (
      00181,
      'mountain',
      3,
      'Coffee-bar,Mini-fridge,Mini-bar,Central AC,Television',
      618,
      FALSE,
      0023
   ),

   (
      00182,
      'mountain',
      2,
      'Mini-bar,Central AC',
      316,
      FALSE,
      0023
   ),

   (
      00183,
      'water',
      3,
      'Coffee-bar,Mini-fridge,Wifi,Television,Mini-bar',
      529,
      FALSE,
      0023
   ),

   (
      00184,
      'water',
      2,
      '',
      305,
      FALSE,
      0023
   ),

--Rooms from Hotel 0024
   (
      00185,
      'mountain',
      2,
      'Wifi,Central AC,Coffee-bar,Television,Mini-bar',
      558,
      FALSE,
      0024
   ),

   (
      00186,
      'mountain',
      3,
      '',
      343,
      FALSE,
      0024
   ),

   (
      00187,
      'city',
      4,
      '',
      410,
      FALSE,
      0024
   ),

   (
      00188,
      'water',
      4,
      'Mini-bar,Central AC,Coffee-bar,Wifi,Television',
      369,
      TRUE,
      0024
   ),

   (
      00189,
      'city',
      3,
      'Mini-fridge,Mini-bar,Coffee-bar,Wifi,Television',
      257,
      TRUE,
      0024
   ),

   (
      00190,
      'mountain',
      3,
      'Television,Wifi,Mini-fridge,Central AC,Coffee-bar',
      686,
      TRUE,
      0024
   ),

   (
      00191,
      'city',
      3,
      'Television,Central AC,Coffee-bar,Mini-bar',
      266,
      FALSE,
      0024
   ),

   (
      00192,
      'water',
      2,
      'Wifi',
      332,
      TRUE,
      0024
   ),

--Rooms from Hotel 0025
   (
      00193,
      'mountain',
      3,
      'Mini-fridge,Wifi,Television,Central AC',
      488,
      FALSE,
      0025
   ),

   (
      00194,
      'city',
      4,
      'Mini-bar,Television',
      674,
      FALSE,
      0025
   ),

   (
      00195,
      'water',
      3,
      '',
      450,
      FALSE,
      0025
   ),

   (
      00196,
      'water',
      4,
      'Mini-fridge,Mini-bar',
      356,
      FALSE,
      0025
   ),

   (
      00197,
      'mountain',
      2,
      'Central AC,Television,Wifi,Mini-bar,Coffee-bar',
      254,
      TRUE,
      0025
   ),

   (
      00198,
      'city',
      3,
      'Coffee-bar,Mini-fridge,Central AC,Wifi',
      659,
      FALSE,
      0025
   ),

   (
      00199,
      'water',
      3,
      '',
      607,
      FALSE,
      0025
   ),

   (
      00200,
      'water',
      3,
      'Television',
      351,
      FALSE,
      0025
   );

