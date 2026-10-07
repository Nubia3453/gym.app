// data/thursday.js

// Ensure the master workout data registry exists
window.workoutData = window.workoutData || {};

// Register Thursday (Key: 4)
window.workoutData[4] = {
  day: "Thursday",
  focus: "Mobility + Conditioning",

  // Section 1: Aerobic Conditioning (20 min)
  warmUp: [
    {
      id: "thu_w1",
      name: "Treadmill Paced Walk",
      notes: "Pacing breakdown: 5 min easy walk -> 10 min brisk walk -> 5 min easy walk. Keep it smooth and continuous.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/43ltI6uNBC4Hrpx3UEl0u2/0f97d3418450c6a718480d2592a04a34/5-benefits-of-walking-on-a-treadmill-for-fitness-and-wellbeing",
        "https://liftmanual.com/wp-content/uploads/2023/04/walking-on-treadmill.jpg"
      ],
      sets: "1 session",
      reps: "20 min total",
      time: "20 min"
    }
  ],

  // Section 2: Dedicated Mobility Circuit (~15 min)
  mainWorkout: [
    {
      id: "thu_m1",
      name: "Cat-Cow",
      notes: "Move gently with your breath. Inhale on belly drop, exhale on back rounding.",
      images: [
        "https://media1.popsugar-assets.com/files/thumbor/FcTiEzA4dpzP5LND0I0csu36jQE=/1456x1456/filters:format_auto():quality(85):extract_cover()/2025/01/10/960/n/1922729/tmp_TSf6dQ_46ee51111cabbf45_PS24_Fitness_CatCow_Horizontal.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/cat-cow-1612960265.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*"
      ],
      sets: "1 set",
      reps: "8 reps",
      time: "2 min"
    },
    {
      id: "thu_m2",
      name: "Thoracic Rotation",
      notes: "Open from the upper and mid-back while keeping the hips square.",
      images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiIkn-UF6HqT5nLKJjJPjcKTeENQH2dNYhg_SxR79qAKwVQYp7xls-PQ&s=10",
        "https://sustainableexercise.wordpress.com/wp-content/uploads/2014/08/side-lying-thoracic-extension-rotation.jpg"
      ],
      sets: "1 set",
      reps: "8 reps / side",
      time: "2 min"
    },
    {
      id: "thu_m3",
      name: "Hip Flexor Stretch",
      notes: "Half-kneeling position. Tuck your tailbone slightly and lean forward gently into the front hip.",
      images: [
        "https://geeksonfeet.com/img/workouts/kneeling-hipflexor-stretch.jpg",
        "https://cdn.shopify.com/s/files/1/0701/9950/9207/files/Supine_Hip_Flexor_Stretch.jpg?v=1744180392"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m4",
      name: "Hamstring Stretch",
      notes: "Keep your spine long and hinge at the hips; do not force the stretch.",
      images: [
        "https://www.popsci.com/wp-content/uploads/2026/03/best_hamstring_stretches.jpg?quality=85&w=1200", 
        "https://media.self.com/photos/685da187785a35474b496487/1:1/w_4000,h_4000,c_limit/rebecca-hurdler-hamstring-stretch.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m5",
      name: "Chest Stretch",
      notes: "Place forearm against a wall or doorway, gently turn torso away to open pecs.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/above-head-chest-stretch.jpg", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94ARwCiFjL7KUZAcisk4we9rUjkZVLltwf1551YXwCEYSxw74ixB4TZvz&s=10"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m6",
      name: "Calf Stretch",
      notes: "Step back and press your rear heel into the floor with a straight knee.",
      images: [
        "https://www.jlivingstone.co.uk/wp-content/uploads/2018/03/Calf-Stretch.jpg", "https://cdn.shopify.com/s/files/1/0742/5556/5121/files/CALF-STRETCH-1.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "2 min"
    },
    {
      id: "thu_m7",
      name: "Deep Bodyweight Squat Hold",
      notes: "Sink into a deep squat, use elbows to gently push knees out, and keep chest up.",
      images: [
        "https://gmb.io/wp-content/uploads/2017/06/squat-analyzed.jpg",
        "https://liftmanual.com/wp-content/uploads/2023/04/full-squat-mobility.jpg"
      ],
      sets: "2 sets",
      reps: "20–30s hold",
      time: "2 min"
    }
  ],

  // Section 3: Recovery & Cooldown (5 min)
  stretch: [
    {
      id: "thu_s1",
      name: "Slow Breathing + Gentle Stretching",
      notes: "Lie back or sit comfortably. Take long, deep diaphragmatic breaths to downregulate your nervous system.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoglRUcjqiZ1rMfVz7L78BaFJ5DYfm79ESq6Gm0xM3VWouDu3KmTuDHZc&s=10",
        "https://i.ytimg.com/vi/dqPk2VdM5Tg/maxresdefault.jpg"
      ],
      sets: "1 session",
      reps: "Continuous",
      time: "5 min"
    }
  ]
};