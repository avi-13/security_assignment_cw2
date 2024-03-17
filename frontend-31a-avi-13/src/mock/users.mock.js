const users_mock = [{
  "_id": {
    "$oid": "658e7bc94e9dbf5b148e8248"
  },
  "fullName": "Abhishek Bhattaa",
  "email": "admin",
  "number": 98498498,
  "currentAddress": "Tarkeshwor-8, Lambagar",
  "password": "$2b$10$K67uPRTRdVfeTzRbDA41xe5U62GUlle4snaJPK4qmPTWSCH0903Hy",
  "__v": 0,
  "isAdmin": true,
  "isADonor": true,
  "bloodGroup": "B+",
  "dob": {
    "$date": "2022-03-12T00:00:00.000Z"
  },
  "emergencyNumber": 984874588,
  "gender": "Male",
  "noPreviousDonation": "5",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "658ef00fe0f7b865d3e5f5c6"
  },
  "fullName": "Abhishek Bhattaa",
  "email": "user",
  "number": 1234567890,
  "currentAddress": "Bara",
  "password": "$2b$10$XZwo68/6LWpXGHNF5t1QbulenQrR6PrS.iW1FpCj7u9Zdsm20Cqnm",
  "isAdmin": false,
  "__v": 0,
  "dob": "2024-02-20",
  "emergencyNumber": 9898,
  "gender": "Male",
  "noPreviousDonation": "32",
  "bloodGroup": "A+",
  "isADonor": true,
  "isAvailable": false,
  "updatedAt": {
    "$date": "2024-03-01T11:07:18.857Z"
  },
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708664989/Users/gsag73pyopp9uw81d0f3.jpg"
},
{
  "_id": {
    "$oid": "65967ce72ab5c28998bac643"
  },
  "fullName": "Avicek Bhatta",
  "email": "karki",
  "number": {
    "$numberLong": "9848777777"
  },
  "currentAddress": "Kathmandu",
  "password": "$2b$10$Y5okFM4ObglJr9kRpuq.JOZSgUXEDSebkHDOWpLAxaXSfMBeHeGt2",
  "isAdmin": false,
  "isAvailable": true,
  "__v": 0,
  "bloodGroup": "B+",
  "dob": {
    "$date": "2022-03-12T00:00:00.000Z"
  },
  "emergencyNumber": 984874588,
  "gender": "Male",
  "isADonor": true,
  "noPreviousDonation": "5",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "6597c18a8d3e39d0fa96c77e"
  },
  "fullName": "user2",
  "email": "user2",
  "number": 98487,
  "currentAddress": "user2",
  "password": "$2b$10$qNnJ8ihqdr6oeGy02eZVBurD0p.Mz/TbUPmnOmqiBerk3DlAta2vu",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "__v": 0,
  "bloodGroup": "B+",
  "dob": {
    "$date": "2022-03-12T00:00:00.000Z"
  },
  "emergencyNumber": 984874588,
  "gender": "Male",
  "noPreviousDonation": "5",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65a339d2091176215aa23463"
  },
  "fullName": "Avicek Bhatta",
  "email": "user5",
  "number": 984984,
  "currentAddress": "Tarkeshwor-8, Lambagar",
  "password": "$2b$10$JKg4iOTpe9xnhhyBO3H4u.UXjuFGOJ1vJD8w5zTMzmBbxlUMmlcvO",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "__v": 0,
  "bloodGroup": "A+",
  "dob": "2024-02-15",
  "emergencyNumber": {
    "$numberLong": "84586948697"
  },
  "gender": "Male",
  "noPreviousDonation": "68484689",
  "updatedAt": {
    "$date": "2024-02-14T09:53:39.872Z"
  },
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65ab99d70a53afe120d5c0a9"
  },
  "fullName": "Abhishek Bhattaaaaasfdasf",
  "email": "avicekbhatta.13@gmail.com",
  "number": {
    "$numberLong": "9848745749"
  },
  "currentAddress": "Kathmandu",
  "password": "$2b$10$W.LroulJMDjV62lQXtCfYO9bQS9LNJnTKENVVQvbEJ/NP.hVDFJ0m",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1709479919/Users/diqp0tpfqzijrky9azi7.webp",
  "updatedAt": {
    "$date": "2024-03-03T15:34:07.704Z"
  },
  "bloodGroup": "B+",
  "dob": "2024-03-05",
  "emergencyNumber": {
    "$numberLong": "21412412412421"
  },
  "gender": "Male",
  "noPreviousDonation": "123"
},
{
  "_id": {
    "$oid": "65ab9fc1f5bb17c1108ef4ac"
  },
  "fullName": "abc",
  "email": "123",
  "number": 123,
  "currentAddress": "123",
  "password": "$2b$10$93weeJ1fCkF1V6cInSe66.ikIRk0vG/hB7pD9oXNjDzxPcR1H8kHW",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "__v": 0,
  "bloodGroup": "",
  "dob": "",
  "emergencyNumber": null,
  "gender": "",
  "noPreviousDonation": "",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65abae5007283826548639b3"
  },
  "fullName": "Manish Paudel",
  "email": "manish@gmail.com",
  "number": {
    "$numberLong": "8999856566"
  },
  "currentAddress": "Pokhara",
  "password": "$2b$10$KTzvtn1Es.hzxjsksWII4O7DvfJmXPi/MYJD1mJTqj6xDjLyUslIu",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65abae7f07283826548639b7"
  },
  "fullName": "Manish Paudel",
  "email": "manish123@gmail.com",
  "number": {
    "$numberLong": "8999856566"
  },
  "currentAddress": "Pokhara",
  "password": "$2b$10$aKphyGvdXDXGuZPVty6.quoIgM4yssgLV7AoFq9rBXa7F8tBKpYE.",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65abb11ea1661a73804b6ac4"
  },
  "fullName": "Reprehenderit nisi ",
  "email": "user43",
  "number": 92,
  "currentAddress": "Exercitationem tenetur qui",
  "password": "$2b$10$TFgEpSSz0R8WDjdnIr17S.GmiWQ7xfrB3Y18L1GvUIwgSxl9F3ddm",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65b52124d706cdb43c41a1dd"
  },
  "fullName": "Avicek Bhatta",
  "email": "avicekbhatta",
  "number": 987445496,
  "currentAddress": "Tarkeshwor-8, Lambagar",
  "password": "$2b$10$XmdXdrr/tL22O2sYaQn/cuiW3MuA30A1mAwExL9bPu106ykqa0gE.",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65bef3c948aa9a5cf4eceae5"
  },
  "fullName": "Abhishek Bhatta",
  "email": "password",
  "number": {
    "$numberLong": "9874562110"
  },
  "currentAddress": "Kathmandu",
  "password": "$2b$10$8gveYDHtqJux.vfwJza7qOr//oGw.LfhUjPJNh2neIveWE01QauAa",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "createdAt": {
    "$date": "2024-02-04T02:17:45.938Z"
  },
  "updatedAt": {
    "$date": "2024-02-04T02:18:40.777Z"
  },
  "__v": 0,
  "bloodGroup": "AB+",
  "dob": "2023-12-27",
  "emergencyNumber": {
    "$numberLong": "9824198498"
  },
  "gender": "Male",
  "noPreviousDonation": "123",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65c745d4b0a19fbb97b49c37"
  },
  "fullName": "Abhishek",
  "email": "qwe",
  "number": {
    "$numberLong": "9874563210"
  },
  "currentAddress": "qwe",
  "password": "$2b$10$/h.NwOb8H5KOeIlEcWF.b.X69kSX2VV.LOQGdal8xU7uZPv799kFW",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "createdAt": {
    "$date": "2024-02-10T09:45:56.664Z"
  },
  "updatedAt": {
    "$date": "2024-02-10T09:45:56.664Z"
  },
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65d0ba3bcde1d8c01c04ba0d"
  },
  "fullName": "asd",
  "email": "asd",
  "number": 123,
  "currentAddress": "asd",
  "password": "$2b$10$hGbUJ8s1qeHyt81siQsTCOOMbOkTBwRDNQO6bZDU3xmnZ9/HKCgfu",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "createdAt": {
    "$date": "2024-02-17T13:52:59.745Z"
  },
  "updatedAt": {
    "$date": "2024-02-17T13:52:59.745Z"
  },
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65d47cba50e50971754fc90a"
  },
  "fullName": "rrr",
  "email": "rrr",
  "number": 345,
  "currentAddress": "rrr",
  "password": "$2b$10$NWP1qGmojRobiaKHFxkejOeOPkSTNmgdElrxXkLq2Rlwi/NaSAmP2",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "createdAt": {
    "$date": "2024-02-20T10:19:38.433Z"
  },
  "updatedAt": {
    "$date": "2024-02-25T08:33:43.360Z"
  },
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708846102/Users/wlecajv7oklmhxiszbkw.png",
  "bloodGroup": "B+",
  "dob": "2024-02-06",
  "emergencyNumber": {
    "$numberLong": "6777777777777"
  },
  "gender": "Male",
  "noPreviousDonation": "66"
},
{
  "_id": {
    "$oid": "65d6009169495f544f2de632"
  },
  "fullName": "Abhishek",
  "email": "rer",
  "number": 123,
  "currentAddress": "kkk",
  "password": "$2b$10$yynnBnxbSlk6ABjyHnA.geRZrP7nhTB8tZ3XwIS5/heucDJYy/6/O",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "createdAt": {
    "$date": "2024-02-21T13:54:25.070Z"
  },
  "updatedAt": {
    "$date": "2024-02-21T13:54:25.070Z"
  },
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65d6b922c483c5226a44e8f6"
  },
  "fullName": "Ab",
  "email": "as",
  "number": 1231,
  "currentAddress": "as",
  "password": "$2b$10$v0wtwDTL0xk4ySUrKK3KuOIeiyCU0u2wQCd8.crbvItWbaKs4hzua",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "createdAt": {
    "$date": "2024-02-22T03:01:54.467Z"
  },
  "updatedAt": {
    "$date": "2024-02-22T03:01:54.467Z"
  },
  "__v": 0,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65d6f02a4b488014ccbe4b7f"
  },
  "fullName": "Abhishek Bhatta",
  "email": "aaa",
  "number": 123,
  "currentAddress": "Bajura",
  "password": "$2b$10$8VYPBv7AeOdJY4ToqdR1r.6sckwSjvEZuz54yVOKxFxeTA33/yPOu",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": true,
  "createdAt": {
    "$date": "2024-02-22T06:56:42.669Z"
  },
  "updatedAt": {
    "$date": "2024-02-25T08:33:31.211Z"
  },
  "__v": 0,
  "bloodGroup": "B-",
  "dob": "2024-02-23",
  "emergencyNumber": 123134,
  "gender": "male",
  "noPreviousDonation": "21",
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq"
},
{
  "_id": {
    "$oid": "65d703c0c369426783f3adfb"
  },
  "fullName": "zxc",
  "email": "zxc",
  "number": 424,
  "currentAddress": "zxc",
  "password": "$2b$10$jMK5F2vccI2f4WPbknbSpu9pG723SYaYM5/WdcSZvQU3SN928AI6q",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-02-22T08:20:16.114Z"
  },
  "updatedAt": {
    "$date": "2024-02-22T08:20:16.114Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65d8279200245916808b4f6e"
  },
  "fullName": "aaaa",
  "email": "aaaa",
  "number": 333,
  "currentAddress": "aaa",
  "password": "$2b$10$itcPBihQcuShs9tyv8qICOhZrjXmLUC2jF/4.NNToeBBO5xVhI.gK",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-02-23T05:05:23.013Z"
  },
  "updatedAt": {
    "$date": "2024-02-23T05:05:23.013Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e3ed856fc76b1c1f9576ab"
  },
  "fullName": "123 ",
  "email": "555",
  "number": 123,
  "currentAddress": "123",
  "password": "$2b$10$6nS/KPPiMKIN3mHsjmlk7u8vKoT76c1umCoiwa5Cw7YwcyJGeIxBu",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T03:24:53.601Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T03:24:53.601Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e3ee63bdd1ad3bb647551f"
  },
  "fullName": "sdf",
  "email": "dsf",
  "number": 324,
  "currentAddress": "sdf",
  "password": "$2b$10$ZEpcoXgdGQAyu9E.B8bAoOKj1Tr5J18KlENmxIIia0MrBBd/pXuaK",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1709436507/Users/qkotaczm2i6jdqr0noht.png",
  "createdAt": {
    "$date": "2024-03-03T03:28:35.929Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T03:28:35.929Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e484b498799d8f5fbd2af6"
  },
  "fullName": "testuser",
  "email": "testuser",
  "number": {
    "$numberLong": "4513645654"
  },
  "currentAddress": "testuser",
  "password": "$2b$10$8GDOvoYlbUoTIiGsyPwHX.43GrRJh6y0POBk0LrA8ulqa5GPJ4MDO",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1709474989/Users/fpxzeh9te6i8tqukzb82.png",
  "createdAt": {
    "$date": "2024-03-03T14:09:56.375Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T14:09:56.375Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e485262b914855e81a33ad"
  },
  "fullName": "qwe",
  "email": "wqewq",
  "number": 124312,
  "currentAddress": "qweqw",
  "password": "$2b$10$LzLhpZg9lYhu55lPCHrcee3deto0YRJzPbgFGmfKzDx8NXexFhh6e",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T14:11:50.847Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T14:11:50.847Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e4876f2b914855e81a33d8"
  },
  "fullName": "test123",
  "email": "test123@gmail.com",
  "number": 987458885,
  "currentAddress": "Gorkha",
  "password": "$2b$10$MrhAfKTyPCoawqXaKkzz0uStsFyNjglRAmLUsj.WqchD1lY4wXVVW",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T14:21:35.242Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T14:21:35.242Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e487ca2b914855e81a33e2"
  },
  "fullName": "ABhishek Bhatta",
  "email": "avicekbhatta.321@gmail",
  "number": {
    "$numberLong": "9874559965"
  },
  "currentAddress": "Gorkha",
  "password": "$2b$10$dYBQczGGolPTpLm81CFJ/.RlVcsN8665SBF6YrdrojXNUn69AXTg.",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T14:23:06.150Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T14:23:06.150Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e488212b914855e81a33e7"
  },
  "fullName": "person",
  "email": "avicekbhatta.321@gmail.com",
  "number": 987456321,
  "currentAddress": "Gorkha",
  "password": "$2b$10$tfbz2XhvGoY5CswWh/Xfye0zgBkOjwIPMX15HEu79lmc05Aj7F/VG",
  "isAdmin": false,
  "isAvailable": false,
  "isADonor": true,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1709476362/Users/w0idg2tmmdzzws2vx5mg.jpg",
  "createdAt": {
    "$date": "2024-03-03T14:24:33.762Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T14:33:38.959Z"
  },
  "__v": 0,
  "bloodGroup": "AB+",
  "dob": "2024-02-13",
  "emergencyNumber": 56144981,
  "gender": "Female",
  "noPreviousDonation": "120"
},
{
  "_id": {
    "$oid": "65e4966225d4057b55f8f532"
  },
  "fullName": "random",
  "email": "random@gmail.com",
  "number": {
    "$numberLong": "984894894894"
  },
  "currentAddress": "GOrkha",
  "password": "$2b$10$rbmc6m0Gx9Ghc9PRQ1wos./OlG3uDX.9RS9Rhcz5WE8xtSyT9STNy",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T15:25:22.262Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T15:25:22.262Z"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "65e4968225d4057b55f8f537"
  },
  "fullName": "random",
  "email": "random",
  "number": 2423423,
  "currentAddress": "4qrf",
  "password": "$2b$10$WD1tBTN.1MGfdwb1otAUmu/MNapib0WT4oN8pCzrN6wVsrawuo5tO",
  "isAdmin": false,
  "isAvailable": true,
  "isADonor": false,
  "userImageURL": "https://res.cloudinary.com/dm7yesms2/image/upload/v1708584317/Users/cq2ndw5yfe3sh4eceleq",
  "createdAt": {
    "$date": "2024-03-03T15:25:54.452Z"
  },
  "updatedAt": {
    "$date": "2024-03-03T15:25:54.452Z"
  },
  "__v": 0
}]

  export default users_mock;