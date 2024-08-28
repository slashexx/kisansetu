const farmers = [
  {
    "farmerId": 1,
    "name": "Ram Chandra",
    "state": "Maharashtra",
    "cropsGrown": ["Toor Dal", "Moong Dal"],
    "postalCode": "431001",
    "address": "Vill: Wani, Dist: Nanded, Maharashtra",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 2,
    "name": "Seeta Devi",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Chana Dal", "Masoor Dal"],
    "postalCode": "282001",
    "address": "Vill: Fatehabad, Dist: Agra, Uttar Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 3,
    "name": "Mohit Singh",
    "state": "Rajasthan",
    "cropsGrown": ["Urad Dal", "Rajma"],
    "postalCode": "303001",
    "address": "Vill: Kotputli, Dist: Jaipur, Rajasthan",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 4,
    "name": "Aarti Kumari",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Lobia", "Moong Dal"],
    "postalCode": "474001",
    "address": "Vill: Morar, Dist: Gwalior, Madhya Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 5,
    "name": "Vinay Patil",
    "state": "Karnataka",
    "cropsGrown": ["Rajma", "Moth Beans"],
    "postalCode": "583101",
    "address": "Vill: Hosapete, Dist: Ballari, Karnataka",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 6,
    "name": "Anjali Gupta",
    "state": "Gujarat",
    "cropsGrown": ["Urad Dal", "Masoor Dal"],
    "postalCode": "364001",
    "address": "Vill: Bhavnagar, Dist: Bhavnagar, Gujarat",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 7,
    "name": "Rajkumar Yadav",
    "state": "Bihar",
    "cropsGrown": ["Toor Dal", "Lobia"],
    "postalCode": "845001",
    "address": "Vill: Bettiah, Dist: West Champaran, Bihar",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 8,
    "name": "Suman Thakur",
    "state": "Haryana",
    "cropsGrown": ["Chana Dal", "Moong Dal"],
    "postalCode": "135001",
    "address": "Vill: Jagadhri, Dist: Yamunanagar, Haryana",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 9,
    "name": "Deepak Choudhary",
    "state": "Punjab",
    "cropsGrown": ["Rajma", "Urad Dal"],
    "postalCode": "151001",
    "address": "Vill: Kotkapura, Dist: Faridkot, Punjab",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 10,
    "name": "Preeti Singh",
    "state": "West Bengal",
    "cropsGrown": ["Lobia", "Moth Beans"],
    "postalCode": "713101",
    "address": "Vill: Raniganj, Dist: Bardhaman, West Bengal",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 11,
    "name": "Amit Patel",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Toor Dal", "Rajma"],
    "postalCode": "465001",
    "address": "Vill: Shajapur, Dist: Shajapur, Madhya Pradesh",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 12,
    "name": "Sunita Yadav",
    "state": "Rajasthan",
    "cropsGrown": ["Moong Dal", "Chana Dal"],
    "postalCode": "313001",
    "address": "Vill: Udaipur, Dist: Udaipur, Rajasthan",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 13,
    "name": "Harish Kumar",
    "state": "Haryana",
    "cropsGrown": ["Urad Dal", "Masoor Dal"],
    "postalCode": "124001",
    "address": "Vill: Rohtak, Dist: Rohtak, Haryana",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 14,
    "name": "Pooja Sharma",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Rajma", "Lobia"],
    "postalCode": "201001",
    "address": "Vill: Dadri, Dist: Gautam Buddha Nagar, Uttar Pradesh",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 15,
    "name": "Vikram Mehta",
    "state": "Maharashtra",
    "cropsGrown": ["Moth Beans", "Toor Dal"],
    "postalCode": "444601",
    "address": "Vill: Murtizapur, Dist: Akola, Maharashtra",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 16,
    "name": "Meena Rathore",
    "state": "Punjab",
    "cropsGrown": ["Chana Dal", "Moong Dal"],
    "postalCode": "140001",
    "address": "Vill: Sarhali, Dist: Amritsar, Punjab",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 17,
    "name": "Naveen Pratap",
    "state": "Gujarat",
    "cropsGrown": ["Lobia", "Masoor Dal"],
    "postalCode": "394107",
    "address": "Vill: Olpad, Dist: Surat, Gujarat",
    "image": "maleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 18,
    "name": "Sarla Rani",
    "state": "Karnataka",
    "cropsGrown": ["Toor Dal", "Urad Dal"],
    "postalCode": "571201",
    "address": "Vill: Maddur, Dist: Mandya, Karnataka",
    "image": "femaleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 19,
    "name": "Vijay Chauhan",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Rajma", "Moong Dal"],
    "postalCode": "457001",
    "address": "Vill: Mhow, Dist: Indore, Madhya Pradesh",
    "image": "maleFarmerImage",
    "governmentVerified": true
  },
  {
    "farmerId": 20,
    "name": "Rani Devi",
    "state": "Bihar",
    "cropsGrown": ["Chana Dal", "Moth Beans"],
    "postalCode": "824101",
    "address": "Vill: Gaya, Dist: Gaya, Bihar",
    "image": "femaleFarmerImage",
    "governmentVerified": false
  },
  {
    "farmerId": 21,
    "name": "Ashok Deshmukh",
    "state": "Maharashtra",
    "cropsGrown": ["Masoor Dal", "Lobia"],
    "postalCode": "444602",
    "address": "Vill: Murtizapur, Dist: Akola, Maharashtra",
    "image": "https://media.istockphoto.com/id/1032650610/photo/indian-farmer-in-soybean-field.jpg?s=612x612&w=0&k=20&c=8uOkvQL_3HzN9U8VfOKwQZy3Xg-ITNISj5y1ACiSu5U=",
    "governmentVerified": true
  },
  {
    "farmerId": 22,
    "name": "Kavita Joshi",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Rajma", "Moong Dal"],
    "postalCode": "244001",
    "address": "Vill: Shahjahanpur, Dist: Bareilly, Uttar Pradesh",
    "image": "https://media.istockphoto.com/id/1175886416/photo/portrait-of-an-indian-woman.jpg?s=612x612&w=0&k=20&c=J1BlfRYpZwlOxVPmGVWtMXKEwF7nTDcMlBOgQwoGpb4=",
    "governmentVerified": true
  },
  {
    "farmerId": 23,
    "name": "Dinesh Tiwari",
    "state": "Rajasthan",
    "cropsGrown": ["Urad Dal", "Toor Dal"],
    "postalCode": "305001",
    "address": "Vill: Pisangan, Dist: Ajmer, Rajasthan",
    "image": "https://media.istockphoto.com/id/177373085/photo/indian-farmer-in-field.jpg?s=612x612&w=0&k=20&c=yzqyyZkaZMGpO-8aXCrZX0mDJQzztcpZzMyGnMEqIcs=",
    "governmentVerified": false
  },
  {
    "farmerId": 24,
    "name": "Rekha Kumari",
    "state": "Haryana",
    "cropsGrown": ["Chana Dal", "Masoor Dal"],
    "postalCode": "122001",
    "address": "Vill: Manesar, Dist: Gurgaon, Haryana",
    "image": "https://media.istockphoto.com/id/523428634/photo/portrait-of-indian-female-farmer.jpg?s=612x612&w=0&k=20&c=KPXt0-rS3G8hNkRPtXhDDoI4YW4UBshZJ8DqHo8cy30=",
    "governmentVerified": true
  },
  {
    "farmerId": 25,
    "name": "Manoj Gupta",
    "state": "Gujarat",
    "cropsGrown": ["Moth Beans", "Rajma"],
    "postalCode": "382345",
    "address": "Vill: Bavla, Dist: Ahmedabad, Gujarat",
    "image": "https://media.istockphoto.com/id/525752172/photo/indian-farmer.jpg?s=612x612&w=0&k=20&c=OFHZk6gFnDWmDXAcq5TcrV74zlnZ_QTfmo_4NwOa6Ns=",
    "governmentVerified": true
  },
  {
    "farmerId": 26,
    "name": "Savita Devi",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Toor Dal", "Lobia"],
    "postalCode": "482002",
    "address": "Vill: Patan, Dist: Jabalpur, Madhya Pradesh",
    "image": "https://media.istockphoto.com/id/506530865/photo/indian-farmer-working-in-wheat-field.jpg?s=612x612&w=0&k=20&c=QZT3aNJnJxzoVmqVGq5mv5-1e0qWEWtUwaHVeYBSNSI=",
    "governmentVerified": true
  },
  {
    "farmerId": 27,
    "name": "Anil Kumar",
    "state": "Punjab",
    "cropsGrown": ["Moong Dal", "Urad Dal"],
    "postalCode": "141008",
    "address": "Vill: Doraha, Dist: Ludhiana, Punjab",
    "image": "https://media.istockphoto.com/id/876949474/photo/happy-indian-farmer-in-the-field.jpg?s=612x612&w=0&k=20&c=IV2LOyDjLnPjQsDfql8Ez5U_cN1I7O4le6Ey7Vv4rR8=",
    "governmentVerified": false
  },
  {
    "farmerId": 28,
    "name": "Sarita Kumari",
    "state": "West Bengal",
    "cropsGrown": ["Masoor Dal", "Rajma"],
    "postalCode": "713101",
    "address": "Vill: Raniganj, Dist: Burdwan, West Bengal",
    "image": "https://media.istockphoto.com/id/615065764/photo/portrait-of-an-indian-woman.jpg?s=612x612&w=0&k=20&c=36-J9MtPp_Y26b67NkPzCg1bG37u7mlgfAnOvoFgA78=",
    "governmentVerified": true
  },
  {
    "farmerId": 29,
    "name": "Prakash Mehta",
    "state": "Karnataka",
    "cropsGrown": ["Chana Dal", "Moth Beans"],
    "postalCode": "580001",
    "address": "Vill: Hubballi, Dist: Dharwad, Karnataka",
    "image": "https://media.istockphoto.com/id/472043998/photo/indian-farmer-with-water-bottle.jpg?s=612x612&w=0&k=20&c=hs1eqnRbo7H1xanPzLeuJz24Vhu44NBa8bgHjRH1OpM=",
    "governmentVerified": true
  },
  {
    "farmerId": 30,
    "name": "Sangeeta Verma",
    "state": "Haryana",
    "cropsGrown": ["Lobia", "Rajma"],
    "postalCode": "125001",
    "address": "Vill: Hansi, Dist: Hisar, Haryana",
    "image": "https://media.istockphoto.com/id/539712240/photo/indian-farmer-in-agriculture-field.jpg?s=612x612&w=0&k=20&c=LTqQUkD99DlbeMndGvJkMObx1A1KMo3tnX1F00cYh1M=",
    "governmentVerified": false
  },
  {
    "farmerId": 31,
    "name": "Rahul Chauhan",
    "state": "Maharashtra",
    "cropsGrown": ["Moong Dal", "Toor Dal"],
    "postalCode": "422003",
    "address": "Vill: Malegaon, Dist: Nashik, Maharashtra",
    "image": "https://media.istockphoto.com/id/472068044/photo/happy-indian-farmer-showing-thumb-up.jpg?s=612x612&w=0&k=20&c=TC-jhv3_9ELJckmqFAG6YxaFsfHZiLUpwYTiJcn3D-I=",
    "governmentVerified": true
  },
  {
    "farmerId": 32,
    "name": "Shanti Devi",
    "state": "Bihar",
    "cropsGrown": ["Rajma", "Masoor Dal"],
    "postalCode": "812001",
    "address": "Vill: Sultanganj, Dist: Bhagalpur, Bihar",
    "image": "https://media.istockphoto.com/id/1153838698/photo/indian-farmer-in-agriculture-field.jpg?s=612x612&w=0&k=20&c=yDl9ih_gJxSxDtWNSv_pNOTr1H3p6MJx8j4iIR0h7Gg=",
    "governmentVerified": true
  },
  {
    "farmerId": 33,
    "name": "Rajendra Kumar",
    "state": "Gujarat",
    "cropsGrown": ["Urad Dal", "Moth Beans"],
    "postalCode": "384001",
    "address": "Vill: Mehsana, Dist: Mehsana, Gujarat",
    "image": "https://media.istockphoto.com/id/486765896/photo/happy-indian-farmer-holding-wheat-crops-in-hands.jpg?s=612x612&w=0&k=20&c=jzMRfMsH_7bi10u3Q35SGv51Q5sNLPDi6fxZUzqNYbE=",
    "governmentVerified": true
  },
  {
    "farmerId": 34,
    "name": "Kamla Yadav",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Lobia", "Chana Dal"],
    "postalCode": "202001",
    "address": "Vill: Hathras, Dist: Aligarh, Uttar Pradesh",
    "image": "https://media.istockphoto.com/id/523428896/photo/portrait-of-indian-female-farmer.jpg?s=612x612&w=0&k=20&c=ZFoYHynZn10JymnpGCoyglBCjz-lbTsmrqWfjkkMd_8=",
    "governmentVerified": false
  },
  {
    "farmerId": 35,
    "name": "Vikas Patel",
    "state": "Madhya Pradesh",
    "cropsGrown": ["Rajma", "Toor Dal"],
    "postalCode": "457001",
    "address": "Vill: Ujjain, Dist: Ujjain, Madhya Pradesh",
    "image": "https://media.istockphoto.com/id/505766368/photo/happy-indian-farmer-holding-wheat-crops.jpg?s=612x612&w=0&k=20&c=y7cuCsNS-3EvFlI7GpEsmX2G1pyeA7evBYMGhNBB7oA=",
    "governmentVerified": true
  },
  {
    "farmerId": 36,
    "name": "Meera Sharma",
    "state": "Rajasthan",
    "cropsGrown": ["Masoor Dal", "Chana Dal"],
    "postalCode": "342001",
    "address": "Vill: Osian, Dist: Jodhpur, Rajasthan",
    "image": "https://media.istockphoto.com/id/472068044/photo/happy-indian-farmer-showing-thumb-up.jpg?s=612x612&w=0&k=20&c=TC-jhv3_9ELJckmqFAG6YxaFsfHZiLUpwYTiJcn3D-I=",
    "governmentVerified": false
  },
  {
    "farmerId": 37,
    "name": "Ramesh Singh",
    "state": "Punjab",
    "cropsGrown": ["Urad Dal", "Moth Beans"],
    "postalCode": "144001",
    "address": "Vill: Kapurthala, Dist: Jalandhar, Punjab",
    "image": "https://media.istockphoto.com/id/523443032/photo/happy-indian-farmer-showing-thumb-up.jpg?s=612x612&w=0&k=20&c=FFKTd_Wb_8bB3_jkBUK7M0mqNmtl1evNScSv-WNL1WU=",
    "governmentVerified": true
  },
  {
    "farmerId": 38,
    "name": "Sunita Devi",
    "state": "Haryana",
    "cropsGrown": ["Lobia", "Rajma"],
    "postalCode": "135001",
    "address": "Vill: Ambala, Dist: Ambala, Haryana",
    "image": "https://media.istockphoto.com/id/526473376/photo/happy-indian-female-farmer.jpg?s=612x612&w=0&k=20&c=bsDYMeQJAwg5i4M_UHikPdSRWrPXrkE__6KBtBhZuec=",
    "governmentVerified": false
  },
  {
    "farmerId": 39,
    "name": "Ajay Chauhan",
    "state": "Maharashtra",
    "cropsGrown": ["Moong Dal", "Masoor Dal"],
    "postalCode": "411001",
    "address": "Vill: Pimpri, Dist: Pune, Maharashtra",
    "image": "https://media.istockphoto.com/id/1237133932/photo/happy-indian-farmer.jpg?s=612x612&w=0&k=20&c=nkvf88t3Lo7S50sVcPf1JfyXZzQ6rD6jczqBiO5KQho=",
    "governmentVerified": true
  },
  {
    "farmerId": 40,
    "name": "Anita Yadav",
    "state": "Uttar Pradesh",
    "cropsGrown": ["Rajma", "Toor Dal"],
    "postalCode": "229001",
    "address": "Vill: Rae Bareli, Dist: Rae Bareli, Uttar Pradesh",
    "image": "https://media.istockphoto.com/id/526437544/photo/happy-indian-female-farmer.jpg?s=612x612&w=0&k=20&c=CHW9ZbO1lbLZXeTkgDdFJgi5zG-jcqEanbP7PyJh_Vc=",
    "governmentVerified": true
  }

];