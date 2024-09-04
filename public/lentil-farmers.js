const farmers = [
    {
      "farmerId": 1,
      "name": "Ram Chandra",
      "state": "Maharashtra",
      "cropsGrown": ["Toor Dal", "Moong Dal"],
      "produceAmount": [3500, 2500], // Amount in kilograms for each crop
      "image": "https://example.com/images/ram_chandra.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 2,
      "name": "Seeta Devi",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Chana Dal", "Masoor Dal"],
      "produceAmount": [2700, 3200],
      "image": "https://example.com/images/seeta_devi.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 3,
      "name": "Mohit Singh",
      "state": "Rajasthan",
      "cropsGrown": ["Urad Dal", "Rajma"],
      "produceAmount": [3100, 2900],
      "image": "https://example.com/images/mohit_singh.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 4,
      "name": "Aarti Kumari",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Lobia", "Moong Dal"],
      "produceAmount": [1800, 2000],
      "image": "https://example.com/images/aarti_kumari.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 5,
      "name": "Vinay Patil",
      "state": "Karnataka",
      "cropsGrown": ["Rajma", "Moth Beans"],
      "produceAmount": [2900, 2400],
      "image": "https://example.com/images/vinay_patil.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 6,
      "name": "Anjali Gupta",
      "state": "Gujarat",
      "cropsGrown": ["Urad Dal", "Masoor Dal"],
      "produceAmount": [2800, 3100],
      "image": "https://example.com/images/anjali_gupta.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 7,
      "name": "Rajkumar Yadav",
      "state": "Bihar",
      "cropsGrown": ["Toor Dal", "Lobia"],
      "produceAmount": [3300, 1600],
      "image": "https://example.com/images/rajkumar_yadav.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 8,
      "name": "Suman Thakur",
      "state": "Haryana",
      "cropsGrown": ["Chana Dal", "Moong Dal"],
      "produceAmount": [2400, 2200],
      "image": "https://example.com/images/suman_thakur.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 9,
      "name": "Deepak Choudhary",
      "state": "Punjab",
      "cropsGrown": ["Rajma", "Urad Dal"],
      "produceAmount": [3000, 2700],
      "image": "https://example.com/images/deepak_choudhary.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 10,
      "name": "Preeti Singh",
      "state": "West Bengal",
      "cropsGrown": ["Lobia", "Moth Beans"],
      "produceAmount": [2300, 2600],
      "image": "https://example.com/images/preeti_singh.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 11,
      "name": "Amit Patel",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Toor Dal", "Rajma"],
      "produceAmount": [3200, 3100],
      "image": "https://example.com/images/amit_patel.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 12,
      "name": "Sunita Yadav",
      "state": "Rajasthan",
      "cropsGrown": ["Moong Dal", "Chana Dal"],
      "produceAmount": [2600, 2500],
      "image": "https://example.com/images/sunita_yadav.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 13,
      "name": "Harish Kumar",
      "state": "Haryana",
      "cropsGrown": ["Urad Dal", "Masoor Dal"],
      "produceAmount": [2700, 3000],
      "image": "https://example.com/images/harish_kumar.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 14,
      "name": "Pooja Sharma",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Rajma", "Lobia"],
      "produceAmount": [3100, 1900],
      "image": "https://example.com/images/pooja_sharma.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 15,
      "name": "Vikram Mehta",
      "state": "Maharashtra",
      "cropsGrown": ["Moth Beans", "Toor Dal"],
      "produceAmount": [2200, 3400],
      "image": "https://example.com/images/vikram_mehta.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 16,
      "name": "Meena Rathore",
      "state": "Punjab",
      "cropsGrown": ["Chana Dal", "Moong Dal"],
      "produceAmount": [2700, 2600],
      "image": "https://example.com/images/meena_rathore.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 17,
      "name": "Naveen Pratap",
      "state": "Gujarat",
      "cropsGrown": ["Lobia", "Masoor Dal"],
      "produceAmount": [2900, 2700],
      "image": "https://example.com/images/naveen_pratap.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 18,
      "name": "Sarla Rani",
      "state": "Karnataka",
      "cropsGrown": ["Toor Dal", "Urad Dal"],
      "produceAmount": [3400, 2900],
      "image": "https://example.com/images/sarla_rani.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 19,
      "name": "Vijay Chauhan",
      "state": "Madhya Pradesh",
      "cropsGrown": ["Rajma", "Moong Dal"],
      "produceAmount": [2800, 2500],
      "image": "https://example.com/images/vijay_chauhan.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 20,
      "name": "Rani Devi",
      "state": "Bihar",
      "cropsGrown": ["Chana Dal", "Moth Beans"],
      "produceAmount": [2400, 2100],
      "image": "https://example.com/images/rani_devi.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 21,
      "name": "Aakash Pandey",
      "state": "Uttar Pradesh",
      "cropsGrown": ["Toor Dal", "Moong Dal"],
      "produceAmount": [3300, 2700],
      "image": "https://example.com/images/aakash_pandey.jpg",
      "governmentVerified": true
    },
    {
      "farmerId": 22,
      "name": "Shanti Devi",
      "state": "West Bengal",
      "cropsGrown": ["Masoor Dal", "Lobia"],
      "produceAmount": [2600, 2200],
      "image": "https://example.com/images/shanti_devi.jpg",
      "governmentVerified": false
    },
    {
      "farmerId": 23,
      "name": "Brijesh Kumar",
      "state": "Rajasthan",
      "cropsGrown": ["Rajma", "Chana Dal"],
      "produceAmount": [2900, 2400],
      "image": "https://example.com/images/brijesh_kumar.jpg",
      "governmentVerified": true
    },
   {
          "farmerId": 24,
          "name": "Maya Devi",
          "state": "Haryana",
          "cropsGrown": ["Urad Dal", "Moth Beans"],
          "produceAmount": [150, 200],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 25,
          "name": "Ravi Kishore",
          "state": "Bihar",
          "cropsGrown": ["Toor Dal", "Rajma"],
          "produceAmount": [180, 220],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 26,
          "name": "Sushma Tiwari",
          "state": "Madhya Pradesh",
          "cropsGrown": ["Moong Dal", "Masoor Dal"],
          "produceAmount": [170, 190],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 27,
          "name": "Narayan Reddy",
          "state": "Karnataka",
          "cropsGrown": ["Lobia", "Chana Dal"],
          "produceAmount": [160, 210],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 28,
          "name": "Radha Yadav",
          "state": "Uttar Pradesh",
          "cropsGrown": ["Moth Beans", "Rajma"],
          "produceAmount": [190, 230],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 29,
          "name": "Naveen Kumar",
          "state": "Punjab",
          "cropsGrown": ["Masoor Dal", "Urad Dal"],
          "produceAmount": [200, 180],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 30,
          "name": "Sarita Chauhan",
          "state": "Maharashtra",
          "cropsGrown": ["Chana Dal", "Lobia"],
          "produceAmount": [210, 170],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 31,
          "name": "Vikrant Singh",
          "state": "Rajasthan",
          "cropsGrown": ["Toor Dal", "Moong Dal"],
          "produceAmount": [190, 180],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 32,
          "name": "Neelam Verma",
          "state": "Bihar",
          "cropsGrown": ["Rajma", "Moth Beans"],
          "produceAmount": [200, 150],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 33,
          "name": "Prakash Rao",
          "state": "Karnataka",
          "cropsGrown": ["Lobia", "Masoor Dal"],
          "produceAmount": [180, 190],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 34,
          "name": "Kalpana Singh",
          "state": "Uttar Pradesh",
          "cropsGrown": ["Moong Dal", "Chana Dal"],
          "produceAmount": [170, 160],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 35,
          "name": "Mahesh Kulkarni",
          "state": "Maharashtra",
          "cropsGrown": ["Toor Dal", "Urad Dal"],
          "produceAmount": [200, 190],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 36,
          "name": "Amrita Kaur",
          "state": "Punjab",
          "cropsGrown": ["Rajma", "Lobia"],
          "produceAmount": [190, 180],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 37,
          "name": "Sanjay Deshmukh",
          "state": "Madhya Pradesh",
          "cropsGrown": ["Moth Beans", "Chana Dal"],
          "produceAmount": [180, 200],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 38,
          "name": "Sunita Gupta",
          "state": "Haryana",
          "cropsGrown": ["Masoor Dal", "Moong Dal"],
          "produceAmount": [160, 190],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 39,
          "name": "Rajesh Patel",
          "state": "Gujarat",
          "cropsGrown": ["Toor Dal", "Rajma"],
          "produceAmount": [220, 200],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 40,
          "name": "Lalita Mishra",
          "state": "Uttar Pradesh",
          "cropsGrown": ["Lobia", "Chana Dal"],
          "produceAmount": [210, 180],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 41,
          "name": "Ashok Nair",
          "state": "Kerala",
          "cropsGrown": ["Moong Dal", "Rajma"],
          "produceAmount": [190, 200],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 42,
          "name": "Geeta Rani",
          "state": "Punjab",
          "cropsGrown": ["Masoor Dal", "Urad Dal"],
          "produceAmount": [200, 170],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 43,
          "name": "Suresh Pawar",
          "state": "Maharashtra",
          "cropsGrown": ["Moth Beans", "Chana Dal"],
          "produceAmount": [170, 190],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 44,
          "name": "Pushpa Devi",
          "state": "Rajasthan",
          "cropsGrown": ["Toor Dal", "Lobia"],
          "produceAmount": [200, 160],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 45,
          "name": "Karan Singh",
          "state": "Haryana",
          "cropsGrown": ["Rajma", "Masoor Dal"],
          "produceAmount": [190, 170],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 46,
          "name": "Rakhi Sharma",
          "state": "Uttar Pradesh",
          "cropsGrown": ["Moong Dal", "Chana Dal"],
          "produceAmount": [200, 210],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 47,
          "name": "Subhash Rao",
          "state": "Karnataka",
          "cropsGrown": ["Toor Dal", "Urad Dal"],
          "produceAmount": [180, 190],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
  {
          "farmerId": 48,
          "name": "Poonam Verma",
          "state": "Madhya Pradesh",
          "cropsGrown": ["Chana Dal", "Moth Beans"],
          "produceAmount": [160, 170],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": false
      },
      {
          "farmerId": 49,
          "name": "Ramesh Patel",
          "state": "Gujarat",
          "cropsGrown": ["Rajma", "Moong Dal"],
          "produceAmount": [190, 210],
          "image": "https://example.com/images/maleFarmerImage.jpg",
          "governmentVerified": true
      },
      {
          "farmerId": 50,
          "name": "Bhavna Singh",
          "state": "Uttar Pradesh",
          "cropsGrown": ["Lobia", "Masoor Dal"],
          "produceAmount": [200, 190],
          "image": "https://example.com/images/femaleFarmerImage.jpg",
          "governmentVerified": true
      }
  ]