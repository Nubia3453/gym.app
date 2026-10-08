// data/friday.js

// Ensure the master workout data registry exists
window.workoutData = window.workoutData || {};

// Register Friday (Key: 5)
window.workoutData[5] = {
  day: "Friday",
  focus: "Strength C",

  // Section 1: Dynamic Warm-up (6 min)
  warmUp: [
    {
      id: "fri_w1",
      name: "Treadmill Walk",
      notes: "4 min comfortable brisk walk + 2 min slightly faster. Raise body temperature without fatiguing muscles.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/43ltI6uNBC4Hrpx3UEl0u2/0f97d3418450c6a718480d2592a04a34/5-benefits-of-walking-on-a-treadmill-for-fitness-and-wellbeing",
        "https://liftmanual.com/wp-content/uploads/2023/04/walking-on-treadmill.jpg"
      ],
      sets: "1 set",
      reps: "6 min total",
      time: "6 min"
    },
    {
      id: "fri_w2",
      name: "Arm Circles",
      notes: "10 circles forward, 10 circles backward.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.jpg",
        "https://fitnessvolt.com/wp-content/uploads/2023/01/arm-circles-guide.jpg"
      ],
      sets: "1 set",
      reps: "10 each direction",
      time: "1 min"
    },
    {
      id: "fri_w3",
      name: "Bodyweight Squats",
      notes: "Mobilize knees, ankles, and hips.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2018/07/Bodyweight-squat-resized.png",
        "https://training.fit/wp-content/uploads/2020/03/kniebeugen-800x448.png"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "fri_w4",
      name: "Shoulder Rolls",
      notes: "Smooth, controlled rolls up, back, and down.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/shoulder-circle.jpg",
        "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.jpg"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "fri_w5",
      name: "Hip Rotations",
      notes: "Loosen the pelvic and lower back region.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/1yH3ggYYneUkPvtzrBbFkf/003259cf59207e93d556a37cf68f91db/https-welltechdev-wpengine-com-wp-content-uploads-2022-07-standing-hip-rotations-png",
        "https://st.depositphotos.com/4293685/53717/v/1600/depositphotos_537172510-stock-illustration-sport-women-doing-exercise-single.jpg"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    }
  ],

  // Section 2: Main Full-Body Strength Circuit
  mainWorkout: [
    {
      id: "fri_m1",
      name: "Leg Press",
      notes: "Rest: 60–75s. Controlled cadence and avoid locking knees at full extension.",
      images: [
        "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif",
        "https://weighttraining.guide/wp-content/uploads/2016/05/Sled-45-degree-Leg-Press-resized.png"
      ],
      sets: "3 sets",
      reps: "10 reps",
      time: "8 min"
    },
    {
      id: "fri_m2",
      name: "Lat Pulldown",
      notes: "Rest: 60s. Pull toward the upper chest with elbows leading the movement.",
      images: [
        "https://bo.onetoonefit.com/storage/posts/01KC78V457D5PGJNT740M97G2F.png",
        "https://tecafitness.com/wp-content/uploads/2024/02/SP500-Lat-pulldown-7-1.webp"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "fri_m3",
      name: "Chest Press Machine",
      notes: "Rest: 60s. Steady, controlled pressing movement.",
      images: [
        "https://training.fit/wp-content/uploads/2020/02/butterflys.png",
        "https://images.jdmagicbox.com/quickquotes/images_main/-l5d5fna3.jpg"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "fri_m4",
      name: "Seated Leg Curl",
      notes: "Rest: 60s. Smooth contraction without using momentum.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2016/10/seated-leg-curl-resized.png",
        "https://liftmanual.com/wp-content/uploads/2023/04/lever-seated-leg-curl.jpg"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "fri_m5",
      name: "Seated Machine / Cable Row",
      notes: "Rest: 60s. Pull shoulder blades back without hunching or shrugging.",
      images: [
          "https://weighttraining.guide/wp-content/uploads/2016/05/Seated-cable-row-new-resized.png",
          "https://mybodycreator.com/content/files/2023/05/25/82_M.png"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "fri_m6",
      name: "Dumbbell Lateral Raise",
      notes: "Use light dumbbells. Aim for balanced shoulder development, not maximum weight.",
      images: [
        "https://cdn.jefit.com/assets/img/exercises/gifs/32.gif",
        "https://training.fit/wp-content/uploads/2020/03/seitenheben-kurzhanteln-800x448.png"
      ],
      sets: "2 sets",
      reps: "12 reps",
      time: "4 min"
    },
    {
      id: "fri_m7",
      name: "Biceps Curl",
      notes: "Moderate resistance. Keep elbows pinned to your sides.",
      images: [
        "https://experiencelife.lifetime.life/wp-content/uploads/2025/01/ma25-bid-biceps-curl.jpg",
        "https://fitwill.app/api/image/0294?p=1&w=1920&h=1080"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "4 min"
    },
    {
      id: "fri_m8",
      name: "Triceps Pushdown",
      notes: "Controlled extension. Focus on locking out the triceps with no body sway.",
      images: [
        "https://trainingstation.co.uk/cdn/shop/articles/Tricep-pushdown-movement_ddb8dbd8-566d-4f55-99e0-36c35790234a_600x.png?v=1739005533",
        "https://fitnessvolt.com/wp-content/uploads/2020/10/cable-triceps-pushdown-for-upper-arms.jpg.webp"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "4 min"
    }
  ],

  // Section 3: Post-Workout Stretch (5 min)
  stretch: [
    {
      id: "fri_s1",
      name: "Chest Stretch",
      notes: "Gentle stretch across pecs and front shoulders.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/above-head-chest-stretch.jpg", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94ARwCiFjL7KUZAcisk4we9rUjkZVLltwf1551YXwCEYSxw74ixB4TZvz&s=10"
      ],
      sets: "1 set",
      reps: "30s hold",
      time: "1 min"
    },
    {
      id: "fri_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen along the ribcage and upper lats.",
      images: [
        "https://habuildassets.s3.ap-south-1.amazonaws.com/habuildwebsitecms/best-stretching-exercises-for-lower-back-pain-1400x933.webp", 
        "https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_450,h_300/q_auto,f_auto/redbullcom/2026/7/28/qlp70vuqgqvuuiebcmcq/xantheia-pennisi-stretching"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "fri_s3",
      name: "Hip Flexor Stretch",
      notes: "Release tension in the front of the hips.",
      images: [
        "https://geeksonfeet.com/img/workouts/kneeling-hipflexor-stretch.jpg", 
        "https://backintelligence.com/wp-content/uploads/2018/01/kneeling-hip-flexor-stretch.webp"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "fri_s4",
      name: "Hamstring Stretch",
      notes: "Gentle stretch with flat back.",
      images: [
       "https://www.popsci.com/wp-content/uploads/2026/03/best_hamstring_stretches.jpg?quality=85&w=1200", 
       "https://media.self.com/photos/685da187785a35474b496487/1:1/w_4000,h_4000,c_limit/rebecca-hurdler-hamstring-stretch.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "fri_s5",
      name: "Quad Stretch",
      notes: "Keep knees aligned side by side.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22Gonr7YliiuKdCzGQGbqwYswqzZfSBxltq808rqrris-fJ3fchLQIVc&s=10", 
        "https://hips.hearstapps.com/hmg-prod/images/quad-stretch-66b37d0214ffe.jpg?crop=0.616xw:0.921xh;0.207xw,0.0127xh&resize=640:*"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "fri_s6",
      name: "Calf Stretch",
      notes: "Press heel gently into the floor.",
      images: [
        "https://www.jlivingstone.co.uk/wp-content/uploads/2018/03/Calf-Stretch.jpg", 
        "https://cdn.shopify.com/s/files/1/0742/5556/5121/files/CALF-STRETCH-1.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};