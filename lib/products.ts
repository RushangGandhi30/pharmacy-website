export type Category =
  | "Medicines"
  | "Baby Care"
  | "Personal Care"
  | "Diabetes Care"
  | "Healthcare Devices"
  | "Vitamins & Supplements"
  | "Skin Care"
  | "Ayurvedic";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number; // Selling price in INR
  mrp: number; // Original price in INR
  expiry: string; // Expiry Date
  image: string; // Placeholder URL or local image path
  description: string;
  benefits: string[];
  usage: string;
  storage: string;
}

export const products: Product[] = [
  // MEDICINES (6 items)
  {
    id: "p1",
    name: "Paracetamol 500mg (Crocin Quick)",
    brand: "GlaxoSmithKline",
    category: "Medicines",
    price: 24,
    mrp: 30,
    expiry: "12/2028",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    description: "Crocin Quick provides fast relief from pain and fever. It contains clinically proven ingredients that start working in as little as 10 minutes.",
    benefits: [
      "Fast-acting formula for headache and fever relief",
      "Gentle on the stomach",
      "Suitable for adults and children above 12 years"
    ],
    usage: "Take 1-2 tablets every 4 to 6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    storage: "Store in a cool, dry place away from direct sunlight. Keep out of reach of children."
  },
  {
    id: "p2",
    name: "Amoxicillin 250mg Capsule",
    brand: "Cipla Ltd",
    category: "Medicines",
    price: 108,
    mrp: 120,
    expiry: "09/2027",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60",
    description: "Amoxicillin is a broad-spectrum penicillin-type antibiotic used to treat a wide variety of bacterial infections.",
    benefits: [
      "Treats middle ear, tonsil, throat, and larynx infections",
      "High bioavailability and rapid absorption",
      "WHO-approved essential medicine"
    ],
    usage: "Take with or without food as directed by your physician. Complete the full course.",
    storage: "Store below 25°C. Protect from moisture."
  },
  {
    id: "p3",
    name: "Ibuprofen 400mg (Combiflam)",
    brand: "Sanofi India",
    category: "Medicines",
    price: 68,
    mrp: 80,
    expiry: "04/2028",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    description: "Combiflam contains ibuprofen and paracetamol, offering effective anti-inflammatory and pain relief medication.",
    benefits: [
      "Reduces inflammation, swelling, and joint pain",
      "Alleviates muscular discomfort and dental pain",
      "Dual action combination"
    ],
    usage: "1 tablet three times a day after meals, or as prescribed.",
    storage: "Store in dry conditions at room temperature."
  },
  {
    id: "p18",
    name: "Benadryl Cough Syrup 100ml",
    brand: "Kenvue (Johnson & Johnson)",
    category: "Medicines",
    price: 105,
    mrp: 125,
    expiry: "06/2027",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&auto=format&fit=crop&q=60",
    description: "Benadryl Syrup provides quick relief from cough, throat irritation, and runny nose.",
    benefits: [
      "Soothes dry and tickly throat",
      "Controls cough within 15 minutes",
      "Non-drowsy formulation variant"
    ],
    usage: "Adults: 10ml three times daily. Children: 5ml or as advised.",
    storage: "Keep bottle tightly closed. Store away from heat."
  },
  {
    id: "p27",
    name: "Eno Fruit Salt (Lemon Flavour)",
    brand: "Haleon",
    category: "Medicines",
    price: 28,
    mrp: 35,
    expiry: "11/2028",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=60",
    description: "Eno is an effervescent powder which dissolves in water to create a sparkling antacid drink that relieves acidity in 6 seconds.",
    benefits: [
      "Neutralizes stomach acid instantly",
      "Fastest relief from acidity, heartburn, and gas",
      "Refreshing lemon flavor"
    ],
    usage: "Dissolve 5g powder in 150ml water and drink immediately.",
    storage: "Store in a dry place. Protect from moisture."
  },
  {
    id: "p28",
    name: "Electral ORS Powder 21.8g",
    brand: "FDC Ltd",
    category: "Medicines",
    price: 19,
    mrp: 22,
    expiry: "10/2027",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=60",
    description: "Electral is a WHO-based Oral Rehydration Salt formula to restore body fluids and electrolytes lost due to dehydration.",
    benefits: [
      "Restores essential body salts instantly",
      "Prevents muscle cramps and fatigue",
      "Ideal during diarrhea, vomiting, and hot weather"
    ],
    usage: "Dissolve contents of one sachet in 1 liter of clean drinking water.",
    storage: "Store in a cool dry place. Keep out of reach of children."
  },

  // BABY CARE (4 items)
  {
    id: "p4",
    name: "Baby Diaper Rash Cream 100g",
    brand: "Himalaya Wellness",
    category: "Baby Care",
    price: 195,
    mrp: 250,
    expiry: "02/2028",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=500&auto=format&fit=crop&q=60",
    description: "Specially formulated to soothe sensitive baby skin and protect it from painful red diaper rashes.",
    benefits: [
      "Formulated with Yashada Bhasma and Aloe Vera",
      "Provides rapid relief from itching and redness",
      "Free from parabens and mineral oils"
    ],
    usage: "Apply gently on the diaper area during every diaper change.",
    storage: "Store in a dry place. Do not freeze."
  },
  {
    id: "p5",
    name: "Huggies Pure Baby Wipes 72s",
    brand: "Kimberly-Clark",
    category: "Baby Care",
    price: 145,
    mrp: 180,
    expiry: "08/2027",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=500&auto=format&fit=crop&q=60",
    description: "Made with skin-loving natural fibers to gently clean and protect your baby's delicate skin.",
    benefits: [
      "99% pure water formulation",
      "Fragrance-free and clinically tested",
      "Prevents skin irritation and dry patches"
    ],
    usage: "Pull out wipes as needed and clean baby gently. Close lid tightly after use.",
    storage: "Store in a cool place away from direct heat."
  },
  {
    id: "p23",
    name: "Johnson's Baby Powder 200g",
    brand: "Johnson & Johnson",
    category: "Baby Care",
    price: 165,
    mrp: 190,
    expiry: "05/2028",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=500&auto=format&fit=crop&q=60",
    description: "Eliminates friction and keeps baby's skin cool, comfortable, and dry.",
    benefits: [
      "Clinically proven mildness formula",
      "Absorbs excess moisture completely",
      "Leaves skin feeling soft and clean"
    ],
    usage: "Shake powder directly into your hand, away from the face, then smooth onto baby's skin.",
    storage: "Store in a cool, dry place."
  },
  {
    id: "p31",
    name: "Baby Gentle Wash & Shampoo 200ml",
    brand: "Sebamed",
    category: "Baby Care",
    price: 380,
    mrp: 450,
    expiry: "01/2028",
    image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?w=500&auto=format&fit=crop&q=60",
    description: "A 100% soap and alkali-free formulation with pH 5.5 to support the development of baby's acid mantle.",
    benefits: [
      "No tear formula, gentle on eyes",
      "Contains chamomile extract to soothe skin",
      "Dermatologically tested for newborn skin"
    ],
    usage: "Lather a small amount in hands, apply gently to baby's body and scalp, rinse thoroughly.",
    storage: "Store below 25°C."
  },

  // PERSONAL CARE (4 items)
  {
    id: "p6",
    name: "Himalaya Anti-Hair Fall Shampoo",
    brand: "Himalaya Wellness",
    category: "Personal Care",
    price: 240,
    mrp: 320,
    expiry: "11/2028",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=60",
    description: "A breakthrough 2-in-1 formula that reduces hair fall and provides nourishment to hair shafts.",
    benefits: [
      "Enriched with Butea Frondosa and Bhringaraja",
      "Strengthens hair roots and improves texture",
      "Safe for colored or permed hair"
    ],
    usage: "Massage gently into wet hair and scalp. Rinse thoroughly. Repeat if necessary.",
    storage: "Store in a cool, dry place."
  },
  {
    id: "p7",
    name: "Pure Aloe Vera Gel 150ml",
    brand: "Patanyali Wellness",
    category: "Personal Care",
    price: 85,
    mrp: 110,
    expiry: "03/2028",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=60",
    description: "Medicinal gel derived from natural green aloe plants, useful in treating burns, scars, and dry skin.",
    benefits: [
      "Instant cooling relief for dry and itchy skin",
      "Reduces acne scars and dark circles",
      "Acts as a natural moisturizer"
    ],
    usage: "Apply liberally on clean skin. Can be left overnight.",
    storage: "Store in a dry, dark place."
  },
  {
    id: "p20",
    name: "Dettol Liquid Handwash 250ml",
    brand: "Reckitt Benckiser",
    category: "Personal Care",
    price: 79,
    mrp: 99,
    expiry: "09/2028",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60",
    description: "Ensures 10 times better germ protection than ordinary hand soaps, with added moisturizers.",
    benefits: [
      "Kills 99.9% of bacteria and viruses",
      "Dermatologically tested formula",
      "Contains pure glycerin for soft hands"
    ],
    usage: "Press nozzle gently, rub hands together with water for 20 seconds, rinse.",
    storage: "Store in a cool location. Keep away from eyes."
  },
  {
    id: "p29",
    name: "Dabur Red Toothpaste 150g",
    brand: "Dabur India",
    category: "Personal Care",
    price: 92,
    mrp: 120,
    expiry: "04/2028",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60",
    description: "An Ayurvedic toothpaste containing natural ingredients like clove, mint, and ginger to battle 7 dental problems.",
    benefits: [
      "Combats bad breath and dental plaque",
      "Strengthens gums and relieves tooth sensitivity",
      "Fights tooth decay and yellow stains"
    ],
    usage: "Brush thoroughly at least twice a day, or as recommended by a dentist.",
    storage: "Store in a cool dry place."
  },

  // DIABETES CARE (4 items)
  {
    id: "p8",
    name: "Accu-Chek Active Test Strips 50s",
    brand: "Roche Diabetes",
    category: "Diabetes Care",
    price: 875,
    mrp: 1045,
    expiry: "05/2027",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=500&auto=format&fit=crop&q=60",
    description: "Blood glucose monitoring strips designed for use with the Accu-Chek Active blood sugar meter.",
    benefits: [
      "Requires a very small blood sample (1-2 microliters)",
      "Provides results in just 5 seconds",
      "Double control test for guaranteed accuracy"
    ],
    usage: "Insert the strip into the meter. Apply blood droplet to the green test zone.",
    storage: "Store vial between 2°C and 30°C. Do not freeze."
  },
  {
    id: "p9",
    name: "Metformin 500mg (Glycomet)",
    brand: "USV Private Ltd",
    category: "Diabetes Care",
    price: 36,
    mrp: 45,
    expiry: "11/2027",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=60",
    description: "Glycomet contains Metformin, an oral antidiabetic medicine that helps control blood sugar levels in type 2 diabetes.",
    benefits: [
      "Lowers hepatic glucose production",
      "Improves insulin sensitivity in tissues",
      "Highly trusted diabetes maintenance drug"
    ],
    usage: "Take with food to minimize gastrointestinal discomfort, or as directed by a doctor.",
    storage: "Keep in a light-resistant container below 25°C."
  },
  {
    id: "p32",
    name: "Sugar-Free Gold Pellets 500s",
    brand: "Zydus Wellness",
    category: "Diabetes Care",
    price: 245,
    mrp: 290,
    expiry: "02/2029",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=500&auto=format&fit=crop&q=60",
    description: "Sugar-Free Gold is made from Aspartame, a calorie-free sugar substitute ideal for diabetic and weight-conscious individuals.",
    benefits: [
      "One pellet gives the sweetness of one teaspoon of sugar",
      "Ideal for tea, coffee, milk, and beverages",
      "Virtually zero calories"
    ],
    usage: "Add 1-2 pellets to hot beverages and stir well.",
    storage: "Keep in a cool, moisture-free dispenser."
  },
  {
    id: "p33",
    name: "Diabecon DS Tablets 60s",
    brand: "Himalaya Wellness",
    category: "Diabetes Care",
    price: 185,
    mrp: 220,
    expiry: "10/2028",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=500&auto=format&fit=crop&q=60",
    description: "A phytopharmaceutical formulation that increases insulin secretion and reduces glycemic peaks.",
    benefits: [
      "Promotes glucose utilization by tissues",
      "Protects pancreatic beta-cells from oxidative damage",
      "Helps reduce glycated hemoglobin levels"
    ],
    usage: "Take 1-2 tablets twice daily, 30 minutes before meals, or as prescribed.",
    storage: "Store in a dry location, away from sunlight."
  },

  // HEALTHCARE DEVICES (4 items)
  {
    id: "p10",
    name: "Omron HEM-7120 BP Monitor",
    brand: "Omron Healthcare",
    category: "Healthcare Devices",
    price: 1890,
    mrp: 2440,
    expiry: "N/A",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60",
    description: "An automatic, compact upper-arm blood pressure monitor working on the oscillometric principle for quick and accurate readings.",
    benefits: [
      "Detects irregular heartbeats instantly",
      "One-touch operation for extreme ease of use",
      "Equipped with hypertension level indicator"
    ],
    usage: "Sit quietly, wrap the cuff around upper arm at heart level, and press START button.",
    storage: "Keep in protective carrying case. Remove batteries if storing long term."
  },
  {
    id: "p11",
    name: "Dr. Trust Infrared Forehead Thermometer",
    brand: "Dr. Trust USA",
    category: "Healthcare Devices",
    price: 1150,
    mrp: 1999,
    expiry: "N/A",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=60",
    description: "A non-contact medical thermometer designed to measure body temperature from a distance of 3 to 5 cm.",
    benefits: [
      "Fast 1-second temperature detection",
      "Color-coded fever alert backlight display",
      "Stores up to 32 past readings"
    ],
    usage: "Point towards the center of forehead at a distance of 3cm, press trigger, and read value.",
    storage: "Store in a dust-free box. Avoid dropping the device."
  },
  {
    id: "p22",
    name: "OneTouch Select Plus Simple Glucome",
    brand: "LifeScan (Johnson & Johnson)",
    category: "Healthcare Devices",
    price: 849,
    mrp: 1199,
    expiry: "N/A",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=500&auto=format&fit=crop&q=60",
    description: "Simple blood glucose monitor needing no setup, coding, or buttons. Just insert strip and read.",
    benefits: [
      "Audio signals for high or low blood sugar warnings",
      "Fits easily in hands or pockets",
      "Meets latest ISO accuracy standards"
    ],
    usage: "Insert a OneTouch strip, touch blood drop to strip, read your blood sugar result.",
    storage: "Store meter and lancing device in original pouch."
  },
  {
    id: "p34",
    name: "Dr. Morepen PO-09 Pulse Oximeter",
    brand: "Dr. Morepen Ltd",
    category: "Healthcare Devices",
    price: 499,
    mrp: 999,
    expiry: "N/A",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=60",
    description: "A fingertip pulse oximeter designed to measure SpO2 levels and pulse rate quickly and non-invasively.",
    benefits: [
      "OLED display with adjustable brightness and rotation",
      "High accuracy for arterial hemoglobin saturation",
      "Auto shutoff to save battery life"
    ],
    usage: "Clip the oximeter onto the index finger, keep hands steady, and wait for reading.",
    storage: "Protect from humidity and shock."
  },

  // VITAMINS & SUPPLEMENTS (4 items)
  {
    id: "p12",
    name: "Vitamin C 500mg Limcee Tablets",
    brand: "Abbott Healthcare",
    category: "Vitamins & Supplements",
    price: 110,
    mrp: 140,
    expiry: "07/2028",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    description: "Limcee Vitamin C chewable tablets bolster the immune system, treat scurvy, and improve skin health.",
    benefits: [
      "Stimulates collagen synthesis and acts as antioxidant",
      "Enhances iron absorption from dietary foods",
      "Tasty orange flavor chewable form"
    ],
    usage: "Chew one tablet daily, or as advised by your healthcare practitioner.",
    storage: "Keep in a cool dry place, protected from direct light."
  },
  {
    id: "p13",
    name: "Triple Strength Omega-3 Fish Oil 60s",
    brand: "GNC (General Nutrition Centers)",
    category: "Vitamins & Supplements",
    price: 1250,
    mrp: 1599,
    expiry: "03/2028",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    description: "Premium fish oil capsules delivering 1000mg of EPA and DHA per serving to promote comprehensive health.",
    benefits: [
      "Supports cardiovascular and brain functions",
      "Lubricates joints for better mobility",
      "Enteric-coated to prevent fishy burps"
    ],
    usage: "Take 1 softgel capsule daily with your main meal.",
    storage: "Keep bottle tightly capped. Store in refrigerator after opening if possible."
  },
  {
    id: "p19",
    name: "Centrum Multivitamin for Men 30s",
    brand: "GlaxoSmithKline",
    category: "Vitamins & Supplements",
    price: 380,
    mrp: 450,
    expiry: "10/2027",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    description: "A customized daily multivitamin multimineral supplement containing 24 essential micronutrients tailored for men.",
    benefits: [
      "Supports muscle function, immunity, and metabolism",
      "Contains B-vitamins for daily energy conversion",
      "Gluten-free, non-GMO formulation"
    ],
    usage: "One tablet daily after a heavy meal.",
    storage: "Store in a cool dry place. Keep out of reach of children."
  },
  {
    id: "p25",
    name: "MuscleBlaze Whey Protein 1kg",
    brand: "MuscleBlaze",
    category: "Vitamins & Supplements",
    price: 2199,
    mrp: 2799,
    expiry: "12/2027",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60",
    description: "Premium whey protein isolate and concentrate blend providing 25g of pure protein per scoop to support muscle growth.",
    benefits: [
      "Loaded with 5.5g BCAAs and 11.7g EAAs",
      "Contains DigeZyme for easier digestion and absorption",
      "Rich Chocolate flavor with no added sugars"
    ],
    usage: "Add one scoop (33g) to 200ml cold water or milk, shake well and consume post-workout.",
    storage: "Store in a tightly sealed container, in a dark dry place."
  },

  // SKIN CARE (4 items)
  {
    id: "p14",
    name: "Nivea Soft Moisturizing Cream 200ml",
    brand: "Nivea",
    category: "Skin Care",
    price: 260,
    mrp: 325,
    expiry: "02/2029",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
    description: "An intensive moisturizing cream enriched with Jojoba Oil and Vitamin E for soft, smooth skin.",
    benefits: [
      "Refreshingly soft light texture",
      "Absorbs in seconds without greasy residue",
      "Suitable for all skin types"
    ],
    usage: "Apply daily on body, face, and hands. Massage in circular motions.",
    storage: "Store in a cool place, out of direct sunlight."
  },
  {
    id: "p15",
    name: "La Roche-Posay Anthelios Sunscreen",
    brand: "L'Oreal Beauty",
    category: "Skin Care",
    price: 1850,
    mrp: 2100,
    expiry: "08/2028",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
    description: "A ultra-light liquid sunscreen fluid with SPF 50+ offering broad-spectrum cellular protection.",
    benefits: [
      "Ultra-resistant to water, sweat, and sand",
      "Non-comedogenic, fragrance-free formula",
      "No white cast, matte finish"
    ],
    usage: "Apply 15 minutes before sun exposure. Reapply every 2 hours.",
    storage: "Keep in a cool dry space."
  },
  {
    id: "p26",
    name: "Olay Regenerist Night Firming Cream",
    brand: "Procter & Gamble",
    category: "Skin Care",
    price: 1399,
    mrp: 1699,
    expiry: "06/2028",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
    description: "An overnight moisturizer that reduces wrinkles and hydrates skin deeply using Amino-Peptide Complex II.",
    benefits: [
      "Visibly plumps skin cells for a younger look",
      "Hydrates to improve elasticity and firmness",
      "Fast-absorbing formula"
    ],
    usage: "Apply evenly to clean face and neck every night before bed.",
    storage: "Keep container tightly closed."
  },
  {
    id: "p35",
    name: "Cetaphil Gentle Skin Cleanser 250ml",
    brand: "Galderma",
    category: "Skin Care",
    price: 395,
    mrp: 495,
    expiry: "03/2029",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60",
    description: "A mild, non-irritating cleanser ideal for sensitive and dry skin types, recommended by dermatologists.",
    benefits: [
      "Soap-free, fragrance-free, hypoallergenic",
      "Can be used with or without water",
      "Moisturizes as it cleanses"
    ],
    usage: "Apply to skin and rub gently. With water: rinse. Without water: wipe off with tissue.",
    storage: "Store below 30°C."
  },

  // AYURVEDIC (4 items)
  {
    id: "p16",
    name: "Organic Ashwagandha Tablets 60s",
    brand: "Dabur India Ltd",
    category: "Ayurvedic",
    price: 180,
    mrp: 230,
    expiry: "04/2028",
    image: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6a?w=500&auto=format&fit=crop&q=60",
    description: "Pure Ashwagandha extracts containing withanolides to reduce cortisol levels, stress, and physical exhaustion.",
    benefits: [
      "Natural stress reliever and sleep aid",
      "Improves strength, stamina, and energy",
      "Supports cognitive functions"
    ],
    usage: "Take 1 tablet twice daily with water or milk, or as directed.",
    storage: "Store in cool dry conditions. Protect from moisture."
  },
  {
    id: "p17",
    name: "Triphala Churna Powder 100g",
    brand: "Patanjali Ayurved",
    category: "Ayurvedic",
    price: 80,
    mrp: 95,
    expiry: "09/2028",
    image: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6a?w=500&auto=format&fit=crop&q=60",
    description: "A traditional herbal powder combining Amla, Haritaki, and Bibhitaki for stomach cleansing and bowel wellness.",
    benefits: [
      "Relieves chronic constipation and bloating",
      "Aids in natural colon detoxification",
      "Boosts metabolism and immune functions"
    ],
    usage: "Take 1 teaspoon (5g) at bedtime with warm water.",
    storage: "Keep in a cool and dry container. Seal after use."
  },
  {
    id: "p24",
    name: "Kama Ayurveda Bringadi Hair Oil",
    brand: "Kama Ayurveda",
    category: "Ayurvedic",
    price: 795,
    mrp: 950,
    expiry: "01/2028",
    image: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6a?w=500&auto=format&fit=crop&q=60",
    description: "An intensive hair treatment oil that prevents hair loss, premature graying, and dandruff.",
    benefits: [
      "Enriched with Indigo, Eclipta Alba, and Gooseberry",
      "Cooling sensation to relieve mental stress",
      "Natural conditioner and promoter of hair growth"
    ],
    usage: "Gently massage into hair and scalp, leave on for 30 minutes, rinse with shampoo.",
    storage: "Store in a cool dry area away from direct flame."
  },
  {
    id: "p36",
    name: "Chyawanprash Special 1kg",
    brand: "Dabur India Ltd",
    category: "Ayurvedic",
    price: 360,
    mrp: 420,
    expiry: "03/2028",
    image: "https://images.unsplash.com/photo-1611070973770-b1a6726b0c6a?w=500&auto=format&fit=crop&q=60",
    description: "A time-tested Ayurvedic recipe containing over 40 herbs like Amla and Ashwagandha to build respiratory health.",
    benefits: [
      "Boosts daily immunity and strength",
      "Protects against seasonal cough and colds",
      "Provides antioxidants for youthful vitality"
    ],
    usage: "Adults: 1 teaspoonful twice a day. Children: 1/2 teaspoonful twice a day.",
    storage: "Store in clean, dry jar. Tighten cap after opening."
  }
];
