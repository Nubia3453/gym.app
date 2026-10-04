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
        "https://picsum.photos/400/300?treadmill_fri1",
        "https://picsum.photos/400/300?treadmill_fri2"
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
        "https://picsum.photos/400/300?armcircles_fri1",
        "https://picsum.photos/400/300?armcircles_fri2"
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
        "https://picsum.photos/400/300?squats_fri1",
        "https://picsum.photos/400/300?squats_fri2"
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
        "https://picsum.photos/400/300?shoulders_fri1",
        "https://picsum.photos/400/300?shoulders_fri2"
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
        "https://picsum.photos/400/300?hiprot_fri1",
        "https://picsum.photos/400/300?hiprot_fri2"
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
        "https://picsum.photos/400/300?legpress_fri1",
        "https://picsum.photos/400/300?legpress_fri2"
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
        "https://picsum.photos/400/300?latpulldown_fri1",
        "https://picsum.photos/400/300?latpulldown_fri2"
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
        "https://picsum.photos/400/300?chestpress_fri1",
        "https://picsum.photos/400/300?chestpress_fri2"
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
        "https://picsum.photos/400/300?legcurl_fri1",
        "https://picsum.photos/400/300?legcurl_fri2"
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
        "https://picsum.photos/400/300?row_fri1",
        "https://picsum.photos/400/300?row_fri2"
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
        "https://picsum.photos/400/300?latraise_fri1",
        "https://picsum.photos/400/300?latraise_fri2"
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
        "https://picsum.photos/400/300?biceps_fri1",
        "https://picsum.photos/400/300?biceps_fri2"
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
        "https://picsum.photos/400/300?triceps_fri1",
        "https://picsum.photos/400/300?triceps_fri2"
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
        "https://picsum.photos/400/300?pecstretch_fri1",
        "https://picsum.photos/400/300?pecstretch_fri2"
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
        "https://picsum.photos/400/300?latstretch_fri1",
        "https://picsum.photos/400/300?latstretch_fri2"
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
        "https://picsum.photos/400/300?hipstretch_fri1",
        "https://picsum.photos/400/300?hipstretch_fri2"
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
        "https://picsum.photos/400/300?hamstretch_fri1",
        "https://picsum.photos/400/300?hamstretch_fri2"
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
        "https://picsum.photos/400/300?quadstretch_fri1",
        "https://picsum.photos/400/300?quadstretch_fri2"
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
        "https://picsum.photos/400/300?calfstretch_fri1",
        "https://picsum.photos/400/300?calfstretch_fri2"
      ],
      sets: "1 set",
      reps: "30s each side",
      time: "1 min"
    }
  ]
};