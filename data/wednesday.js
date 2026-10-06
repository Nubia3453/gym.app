// data/wednesday.js

// Ensure the global workout dictionary exists
window.workoutData = window.workoutData || {};

// Register Wednesday (Key: 3)
window.workoutData[3] = {
  day: "Wednesday",
  focus: "Strength B",

  // Section 1: Dynamic Warm-up (6 min)
  warmUp: [
    {
      id: "wed_w1",
      name: "Treadmill Walk",
      notes: "4 min brisk walk + 2 min slightly faster. Get the blood moving without fatiguing yourself.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/43ltI6uNBC4Hrpx3UEl0u2/0f97d3418450c6a718480d2592a04a34/5-benefits-of-walking-on-a-treadmill-for-fitness-and-wellbeing",

        "https://liftmanual.com/wp-content/uploads/2023/04/walking-on-treadmill.jpg"

      ],
      sets: "1 set",
      reps: "6 min total",
      time: "6 min"
    },
    {
      id: "wed_w2",
      name: "Arm Circles",
      notes: "10 forward, 10 backward.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/arm-circles.jpg",
        "https://spotebi.com/wp-content/uploads/2014/10/arm-circles-exercise-illustration.jpg"
      ],
      sets: "1 set",
      reps: "10 each direction",
      time: "1 min"
    },
    {
      id: "wed_w3",
      name: "Bodyweight Squats",
      notes: "Mobilize knees, ankles, and hips.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10xRSCrA8uSqHj2zQQYDM4uzSJU3WHoul9s2RDkzouA&s=10",
        "https://training.fit/wp-content/uploads/2020/03/kniebeugen-800x448.png"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "wed_w4",
      name: "Shoulder Rolls",
      notes: "10 slow, controlled rolls.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/shoulder-circle.jpg",
        "https://liftmanual.com/wp-content/uploads/2023/04/shoulder-circle.jpg"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    },
    {
      id: "wed_w5",
      name: "Hip Rotations",
      notes: "Loosen the hips and lower back.",
      images: [
        "https://images.ctfassets.net/1q5z3k4ftwpz/1yH3ggYYneUkPvtzrBbFkf/003259cf59207e93d556a37cf68f91db/https-welltechdev-wpengine-com-wp-content-uploads-2022-07-standing-hip-rotations-png",
        "https://st.depositphotos.com/4293685/53717/v/1600/depositphotos_537172510-stock-illustration-sport-women-doing-exercise-single.jpg"
      ],
      sets: "1 set",
      reps: "10 reps",
      time: "1 min"
    }
  ],

  // Section 2: Main Compound Strength Exercises
  mainWorkout: [
    {
      id: "wed_m1",
      name: "Goblet Squat",
      notes: "Use a light dumbbell held at your chest. If uncomfortable, substitute with the Leg Press instead.",
      images: [
        "https://images.squarespace-cdn.com/content/v1/5cf93199c24c0a000107ec5b/fc0d07d2-2f97-485c-9c7f-4ee883f9abb2/Goblet+Squat.png",
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-goblet-squat.jpg"
      ],
      sets: "3 sets",
      reps: "10 reps",
      time: "8 min"
    },
    {
      id: "wed_m2",
      name: "Seated Cable Row",
      notes: "Rest: 60–75s. Keep tall posture and draw your shoulder blades back without swinging.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2016/05/Seated-cable-row-new-resized.png",
        "https://mybodycreator.com/content/files/2023/05/25/82_M.png"
      ],
      sets: "3 sets",
      reps: "10 reps",
      time: "7 min"
    },
    {
      id: "wed_m3",
      name: "Shoulder Press Machine",
      notes: "Rest: 60s. Press smoothly overhead. Don't force heavy weight here.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png",
        "https://gymvisual.com/1234-large_default/dumbbell-seated-shoulder-press.jpg"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m4",
      name: "Leg Extension",
      notes: "Smooth and controlled tempo. Pause for half a second at full contraction.",
      images: [
        "https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png",
        "https://training.fit/wp-content/uploads/2020/03/beinstrecken-geraet-1.png"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m5",
      name: "Lat Pulldown",
      notes: "Moderate weight. Drive your elbows downward toward the floor.",
      images: [
        "https://bo.onetoonefit.com/storage/posts/01KC78V457D5PGJNT740M97G2F.png",
        "https://tecafitness.com/wp-content/uploads/2024/02/SP500-Lat-pulldown-7-1.webp"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "5 min"
    },
    {
      id: "wed_m6",
      name: "Dumbbell Romanian Deadlift (RDL)",
      notes: "Light dumbbells. Push your hips backward rather than rounding your back. If unsure of form, substitute with seated or lying leg curls.",
      images: [
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-romanian-deadlift.jpg",
        "https://images.squarespace-cdn.com/content/v1/5cf93199c24c0a000107ec5b/bfd73d61-a4c6-4068-8e09-f0216815e203/RDL+cues+graphic.png"
      ],
      sets: "2 sets",
      reps: "10 reps",
      time: "6 min"
    },
    {
      id: "wed_m7",
      name: "Dead Bug",
      notes: "Slow and controlled. Keep your lower back pressed flush into the floor as opposite arm and leg extend.",
      images: [
        "https://backintelligence.com/wp-content/uploads/2020/10/Dead-Bug-Exercise-Arms-and-Legs.webp",
        "https://i.ytimg.com/vi/g_BYB0R-4Ws/maxresdefault.jpg"
      ],
      sets: "2 sets",
      reps: "8 reps / side",
      time: "4 min"
    }
  ],

  // Section 3: Cool-Down Stretches (5 min)
  stretch: [
    {
      id: "wed_s1",
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
      id: "wed_s2",
      name: "Lat / Back Stretch",
      notes: "Lengthen along the ribcage and mid-back.",
      images: [
        "https://habuildassets.s3.ap-south-1.amazonaws.com/habuildwebsitecms/best-stretching-exercises-for-lower-back-pain-1400x933.webp", 
        "https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_450,h_300/q_auto,f_auto/redbullcom/2026/7/28/qlp70vuqgqvuuiebcmcq/xantheia-pennisi-stretching"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s3",
      name: "Hip Flexor Stretch",
      notes: "Relieve tension in the front hips after squats and hinges.",
      images: [
        "https://geeksonfeet.com/img/workouts/kneeling-hipflexor-stretch.jpg", "https://backintelligence.com/wp-content/uploads/2018/01/kneeling-hip-flexor-stretch.webp"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s4",
      name: "Hamstring Stretch",
      notes: "Gentle stretch to release hamstrings after RDLs.",
      images: [
       "https://www.popsci.com/wp-content/uploads/2026/03/best_hamstring_stretches.jpg?quality=85&w=1200", "https://media.self.com/photos/685da187785a35474b496487/1:1/w_4000,h_4000,c_limit/rebecca-hurdler-hamstring-stretch.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s5",
      name: "Quad Stretch",
      notes: "Keep knees aligned side by side.",
      images: [
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22Gonr7YliiuKdCzGQGbqwYswqzZfSBxltq808rqrris-fJ3fchLQIVc&s=10", "https://hips.hearstapps.com/hmg-prod/images/quad-stretch-66b37d0214ffe.jpg?crop=0.616xw:0.921xh;0.207xw,0.0127xh&resize=640:*"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    },
    {
      id: "wed_s6",
      name: "Calf Stretch",
      notes: "Gently press heel toward the floor.",
      images: [
        "https://www.jlivingstone.co.uk/wp-content/uploads/2018/03/Calf-Stretch.jpg", "https://cdn.shopify.com/s/files/1/0742/5556/5121/files/CALF-STRETCH-1.jpg"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};